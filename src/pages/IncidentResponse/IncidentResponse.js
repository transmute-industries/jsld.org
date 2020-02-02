import React from "react";
import PropTypes from "prop-types";

import Link from "@material-ui/core/Link";

import Typography from "@material-ui/core/Typography";
import { Helmet } from "react-helmet";

import BasePage from "../BasePage/BasePage";

const jsonldPageAnnotation = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  url: "https://jsld.org/case-study-incident-response",
  description: "Learn about Cyber Security Incident Response and Linked Data.",
  maintainer: {
    "@type": "Person",
    name: "Orie Steele"
  }
};

const IncidentResponse = props => {
  return (
    <BasePage {...props}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Case Study: Incident Response</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonldPageAnnotation)
          }}
        ></script>
      </Helmet>
      <Typography variant="h5" gutterBottom>
        Incident Response
      </Typography>
      <Typography paragraph>
        After or during a cybersecurity breach or attack, it can helpful to
        analyze relationships between data from seperate systems. For example,
        you might want to see the git history for a user suspected to be
        compromised through their twitter account, in order to trace the source
        of a malware implant detected on Windows 10 machines running an older
        version of internet explorer. If each vendor expresses their data in a
        proprietary or semantically ambigious format, the process of data
        mining, relating or sharing information is significantly more difficult
        to achieve.
      </Typography>
      <br />
      <Link href="https://securityboulevard.com/2019/07/are-cyber-ontologies-the-future-of-cybersecurity/">
        Are Cyber-Ontologies the Future of Cybersecurity?
      </Link>
      <br />
      <br />

      <Link href="https://link.springer.com/chapter/10.1007/978-3-030-30796-7_13">
        The SEPSES Knowledge Graph: An Integrated Resource for Cybersecurity
      </Link>
      <br />
      <br />

      <Link href="https://github.com/Ebiquity/Unified-Cybersecurity-Ontology">
        Unified-Cybersecurity-Ontology
      </Link>
    </BasePage>
  );
};

IncidentResponse.propTypes = {
  tmui: PropTypes.any
};

export default IncidentResponse;
