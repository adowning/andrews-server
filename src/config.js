// // const merge = require('webpack-merge')
// // const prodEnv = require('./prod.env')

// module.exports ={
//   NODE_ENV: '"production"',
//   DATABASE_URI:
//   'mongodb+srv://ash:Asdfasdf1234@cluster0-ypimu.gcp.mongodb.net',
//   GOOGLE_MAPS_JS_SAMPLES_KEY: 'AIzaSyDledkfRPKVQchOfwzE9pSMK5yypjRh3bs',
//   NUXT_ENV__APP_ID: 'AndrewsApp',
//   APP_ID: 'AndrewsApp',
//   MASTER_KEY: 'Asdfasdf1234',
//   DASHBOARD_USERNAME: 'admin',
//   DASHBOARD_PASSWORD: 'asdfasdf',
//   PORT: 1337,
//   S3_ACCESS_KEY: 'admin',
//   S3_SECRET_KEY: 'Asdfasdf1234',
//   S3_BUCKET: 'public',
//   S3_ENDPOINT: 'http://10.128.0.53:9001',
//   REDIS_URL: 'redis://10.128.0.53:6379',
//   PUBNUB_SUB: 'pub-sub-c-f8d59532-7e01-11e8-9fa1-423cba266524',
//   PUBNUB_PUB: 'pub-c-60f6b0bc-29ce-4b3c-9478-aab1cf7e3815',
//   PUBNUB_SECRET: 'sec-c-ODlhOTQ5ODEtNzJhNi00MzkwLWJkNTktNTkyMGI1YjI3NzI3',
//   HOST_URL: 'https://api.ashdevtools.com/api',
//   PROJECT_ID: 'asdf123-1537543048053',
//   GH_TOKEN: '671983a4a9c8d7e450c98bc552a06c700b172fe2',
// }
// config.js
// eslint-disable-next-line import/no-mutable-exports
let config = {
    NODE_ENV: '"production"',
    DATABASE_URI:
        'mongodb+srv://ash:Asdfasdf1234@cluster0-ypimu.gcp.mongodb.net/test?retryWrites=true&w=majority',
    GOOGLE_MAPS_JS_SAMPLES_KEY: 'AIzaSyDledkfRPKVQchOfwzE9pSMK5yypjRh3bs',
    NUXT_ENV__APP_ID: 'AndrewsApp',
    APP_ID: 'AndrewsApp',
    MASTER_KEY: 'Asdfasdf1234',
    DASHBOARD_USERNAME: 'admin',
    DASHBOARD_PASSWORD: 'asdfasdf',
    PORT: 1337,
    S3_ACCESS_KEY: 'admin',
    S3_SECRET_KEY: 'Asdfasdf1234',
    S3_BUCKET: 'public',
    S3_ENDPOINT: 'http://10.128.0.53:9001',
    REDIS_URL: 'redis://10.128.0.53:6379',
    PUBNUB_SUB: 'pub-sub-c-f8d59532-7e01-11e8-9fa1-423cba266524',
    PUBNUB_PUB: 'pub-c-60f6b0bc-29ce-4b3c-9478-aab1cf7e3815',
    PUBNUB_SECRET: 'sec-c-ODlhOTQ5ODEtNzJhNi00MzkwLWJkNTktNTkyMGI1YjI3NzI3',
    HOST_URL: 'https://api.ashdevtools.com/api',
    PROJECT_ID: 'asdf123-1537543048053',
    GH_TOKEN: '671983a4a9c8d7e450c98bc552a06c700b172fe2',
    EXTENSION: '.js',
}
if (process.env.NODE_ENV == 'development') {
    config = {
        NODE_ENV: '"development"',
        DATABASE_URI: '"mongodb://localhost:27017/dev1"',
        GOOGLE_MAPS_JS_SAMPLES_KEY: 'AIzaSyDledkfRPKVQchOfwzE9pSMK5yypjRh3bs',
        NUXT_ENV__APP_ID: 'AndrewsApp',
        APP_ID: 'AndrewsApp',
        MASTER_KEY: 'Asdfasdf1234',
        DASHBOARD_USERNAME: 'admin',
        DASHBOARD_PASSWORD: 'asdfasdf',
        PORT: 1337,
        S3_ACCESS_KEY: 'admin',
        S3_SECRET_KEY: 'asdfasdf',
        S3_BUCKET: 'public',
        S3_ENDPOINT: 'https://s3.ashdevtools.com:9001',
        REDIS_URL: 'redis://redis:6379',
        PUBNUB_SUB: 'pub-sub-c-f8d59532-7e01-11e8-9fa1-423cba266524',
        PUBNUB_PUB: 'pub-c-60f6b0bc-29ce-4b3c-9478-aab1cf7e3815',
        PUBNUB_SECRET: 'sec-c-ODlhOTQ5ODEtNzJhNi00MzkwLWJkNTktNTkyMGI1YjI3NzI3',
        HOST_URL: '127.0.0.1',
        PROJECT_ID: 'asdf123-1537543048053',
        GH_TOKEN: '671983a4a9c8d7e450c98bc552a06c700b172fe2',
        EXTENSION: '.ts',
    }
}
export default config
