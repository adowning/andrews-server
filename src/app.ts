/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path'
import http from 'http'
import express, { Application } from 'express'
import { ParseServer } from 'parse-server'
import ParseDashboard from 'parse-dashboard'
import initClasses from './cloud/models/init'
import initHooks from './cloud/hooks/init'
// import initTests from './cloud/tests/init'
import myIp from './cloud/helpers/ipHelper'
import { filesAdapter, cacheAdapter } from './adapters'
import config from './config.js'

// const { appId, masterKey, serverURL, nodeEnv } = config

const [dbUri, appId, masterKey, serverURL, nodeEnv, extension] = [
    config.DATABASE_URI,
    config.APP_ID || 'dev',
    config.MASTER_KEY || 'dev',
    `http://${myIp}:${config.PORT || 1337}/api`,
    config.NODE_ENV,
    config.EXTENSION,
]
console.log(config)

const [app, api, dashboard] = [
    express(),
    new ParseServer({
        databaseURI: dbUri,
        cloud: path.join(__dirname, 'cloud', `main${extension}`),
        appId,
        masterKey,
        serverURL,
        liveQuery: {
            classNames: ['Routes'],
        },
        allowClientClassCreation: false,
        enableAnonymousUsers: false,
        filesAdapter,
        cacheAdapter,
        serverStartComplete: async (): Promise<void> => {
            if (process.env.NODE_ENV === 'development') {
                await initClasses({ appId, serverURL, masterKey })

                await initHooks({ appId, serverURL, masterKey })
                // await initTests()
            }
        },
    }),
    new ParseDashboard(
        {
            apps: [
                {
                    serverURL,
                    appId,
                    appName: appId,
                    masterKey,
                    supportedPushLocales: ['en', 'pt'],
                },
            ],
            users: [
                {
                    user: process.env.DASHBOARD_USERNAME || 'admin',
                    pass: process.env.DASHBOARD_PASSWORD || 'asdfasdf',
                },
            ],
        },
        {
            allowInsecureHTTP: true,
        }
    ),
]

app.use('/api', api as Application)
app.use('/dashboard', dashboard as Application)
app.use('/monitor', function(req, res) {
    res.status(204).send()
})
app.use('/pubnub', function(req, res) {
    res.status(204).send()
})

export const App = http.createServer(app)
export const InitClasses = async (): Promise<void> =>
    initClasses({ appId, serverURL, masterKey })
// export const InitHooks = async (): Promise<void> =>
// initHooks({ appId, serverURL, masterKey })
// export const InitTests = async (): Promise<void> => initTests()
ParseServer.createLiveQueryServer(App)
