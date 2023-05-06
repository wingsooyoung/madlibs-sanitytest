
import madlib from './madlib'
import madLibField from './objects/madLibField'
import userLib from './userLib'

// Then we give our schema to the builder and provide the result to Sanity
export default [
    // document
    madlib,
    userLib,
    //objects
    madLibField  
]

