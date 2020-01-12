import jsonld from "jsonld";

import { SEC_HEADERS } from "../config";

export default async (url, callback) => {
  // TODO: use a switch, support universal resolver, etc...
  // handle cloudflare access control.
  if (url.includes("https://didedv.com")) {
    const doc = await fetch(url, {
      method: "GET",
      cache: "no-cache",
      // These headers are required while we have cloudflare access control on.
      headers: {
        "Content-Type": "application/json",
        ...SEC_HEADERS
      }
    }).then(res => res.json());
    return callback(null, {
      contextUrl: null, // this is for a context via a link header
      document: doc, // this is the actual document that was loaded
      documentUrl: url // this is the actual context URL after redirects
    });
  }
  return jsonld.documentLoaders.xhr()(url, callback);
};
