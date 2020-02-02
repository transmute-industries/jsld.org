// const fs = require("fs");
// const path = require("path");

const jsonld = require("jsonld");

// const resolver = require("./resolver");

const contexts = {};

const documentLoader = async url => {
  console.log(url);
  //   if (url.indexOf("did:") === 0) {
  //     const didDoc = resolver.resolve(url);
  //     return {
  //       contextUrl: null, // this is for a context via a link header
  //       document: didDoc, // this is the actual document that was loaded
  //       documentUrl: url // this is the actual context URL after redirects
  //     };
  //   }

  const context = contexts[url];

  if (context) {
    return {
      contextUrl: null, // this is for a context via a link header
      document: context, // this is the actual document that was loaded
      documentUrl: url // this is the actual context URL after redirects
    };
  }

  try {
    return jsonld.documentLoader(url);
  } catch (e) {
    console.error("No remote context support for " + url);
  }

  console.error("No custom context support for " + url);
  throw new Error("No custom context support for " + url);
};

export default documentLoader;
