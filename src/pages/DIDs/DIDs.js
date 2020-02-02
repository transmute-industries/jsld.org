import React from "react";
import PropTypes from "prop-types";

import Link from "@material-ui/core/Link";

import Typography from "@material-ui/core/Typography";
import { Helmet } from "react-helmet";

import BasePage from "../BasePage/BasePage";

const jsonldPageAnnotation = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  name: "jsld.org"
};

const DIDs = props => {
  return (
    <BasePage {...props}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>jsld.org</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonldPageAnnotation)
          }}
        ></script>
      </Helmet>
      <Typography variant="h5" gutterBottom>
        Decentralized Identifiers
      </Typography>
      <Typography paragraph>
        "Decentralized identifiers (DIDs) are a new type of identifier to
        provide verifiable, decentralized digital identity. These new
        identifiers are designed to enable the controller of a DID to prove
        control over it and to be implemented independently of any centralized
        registry, identity provider, or certificate authority. DIDs are URLs
        that relate a DID subject to a DID document allowing trustable
        interactions with that subject."
      </Typography>
      <Link href="https://www.w3.org/TR/did-core/">Learn More</Link>

      <br />
      <br />

      <Typography paragraph>
        <Link href="https://uniresolver.io/">The Universal Resolver</Link>,
        provides interoperability accross supported DID Methods by enabling a
        single resolution interface for multiple DID Methods.
      </Typography>

      <Typography variant={"h6"} gutterBottom>
        Open Source Linked Data DID Methods
      </Typography>

      <Typography paragraph gutterBottom>
        <Link href="https://element-did.com/">Element DID</Link> is built using
        the{" "}
        <Link href="https://github.com/decentralized-identity/sidetree">
          Sidetree Protocol
        </Link>{" "}
        on Ethereum and IPFS.
        <br />
        Element is open source software hosted by the{" "}
        <Link href="https://identity.foundation/">
          Decentralized Identity Foundation.
        </Link>
      </Typography>

      <Typography paragraph gutterBottom>
        <Link href="https://github-did.com/">GitHub DID</Link> is built using{" "}
        <Link href="https://github.com">GitHub.com</Link>, and is meant for
        testing and development purposes. <br />
        GitHub DID is open source software hosted by the{" "}
        <Link href="https://identity.foundation/">
          Decentralized Identity Foundation.
        </Link>
      </Typography>

      <Typography paragraph gutterBottom>
        <Link href="https://did-key.web.app/">DID Key</Link> is built using{" "}
        <Link href="https://github.com/digitalbazaar/did-method-key-js">
          did-method-key-js
        </Link>
        , and is meant for ephemeral or short time use. Due to its deterministic
        nature, its extremely convenient for testing and development. DID Key is
        being developed in the{" "}
        <Link href="https://github.com/w3c-ccg/">W3C CCG</Link>. You can read
        the latest method spec{" "}
        <Link href="https://digitalbazaar.github.io/did-method-key/">
          here.
        </Link>
      </Typography>
    </BasePage>
  );
};

DIDs.propTypes = {
  tmui: PropTypes.any
};

export default DIDs;
