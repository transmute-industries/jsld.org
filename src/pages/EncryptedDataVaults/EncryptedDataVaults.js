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

const EncryptedDataVaults = props => {
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
        Encrypted Data Vaults
      </Typography>
      <Typography paragraph>
        "We store a significant amount of sensitive data online, such as
        personally identifying information (PII), trade secrets, family
        pictures, and customer information. The data that we store is often not
        protected in an appropriate manner. This specification describes a
        privacy-respecting mechanism for storing, indexing, and retrieving
        encrypted data at a storage provider. It is often useful when an
        individual or organization wants to protect data in a way that the
        storage provider cannot view, analyze, aggregate, or resell the data.
        This approach also ensures that application data is portable and
        protected from storage provider data breaches."
      </Typography>
      <Link href="https://did-edv.web.app/">Learn More</Link>
      <br />
      <br />
      <Link href="https://github.com/WebOfTrustInfo/rwot9-prague/blob/master/final-documents/encrypted-data-vaults.md">
        Rebooting Web of Trust 9 Paper: Encrypted Data Vaults
      </Link>
      <br />
      <br />
      <Link href="https://digitalbazaar.github.io/encrypted-data-vaults/">
        Latest Encrypted Data Vaults Spec
      </Link>
    </BasePage>
  );
};

EncryptedDataVaults.propTypes = {
  tmui: PropTypes.any
};

export default EncryptedDataVaults;
