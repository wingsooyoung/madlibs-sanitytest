const { EleventyServerless } = require("@11ty/eleventy");
const { builder } = require("@netlify/functions");

// Explicit dependencies for the bundler from config file and global data.
// The file is generated by the Eleventy Serverless Bundler Plugin.
require("./eleventy-bundler-modules.js");

async function handler(event) {
  console.log("raw url >" + event.rawUrl)
  console.log("path >" + event.path)
  console.log("query >" + event.queryStringParameters)


  let elev = new EleventyServerless("userlibs", {
    path: event.path,
    query: event.queryStringParameters,
    inputDir: ".",
    functionsDir: "./functions/",
  });

  try {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
      },
      body: await elev.render(),
    };
  } catch (error) {
    // Only console log for matching serverless paths
    // (otherwise you’ll see a bunch of BrowserSync 404s for non-dynamic URLs during --serve)
    if (elev.isServerlessUrl(event.path)) {
      console.log("Serverless Error:", error);
    }

    return {
      statusCode: error.httpStatusCode || 500,
      body: JSON.stringify(
        {
          error: error.message,
        },
        null,
        2
      ),
    };
  }
}

exports.handler = builder(handler);
