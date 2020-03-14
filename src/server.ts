import logger from 'parse-server/lib/logger'
import { App, InitClasses } from './app'
import config from './config.js'

console.log(config)
// import dotenv from 'dotenv'
// import StackUtils from 'stack-utils'

// const stack = new StackUtils({
//     cwd: process.cwd(),
//     internals: StackUtils.nodeInternals(),
// })
// console.log(stack.clean(new Error().stack))
// console.log(new Error())

// console.warn(process.env)

App.listen(process.env.PORT || 1337, async () => {
    await InitClasses()
    // await InitTests()
    // if (process.env.NODE_ENV === 'development') {
    //   await InitTests
    // }
    // console.log(`${process.env.DATABASE_URI}/${process.env.NODE_ENV}`)
    console.log(config)

    logger.info(`⚡️ Server listening on port ${process.env.PORT || 1337}!`)
})
