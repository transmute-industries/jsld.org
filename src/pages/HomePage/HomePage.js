import React from "react";
import PropTypes from "prop-types";

import Link from "@material-ui/core/Link";
// import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Helmet } from "react-helmet";

import BasePage from "../BasePage/BasePage";

import FeatureCard from "../../components/FeatureCard/FeatureCard";

const jsonldPageAnnotation = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  name: "jsld.org"
};

const HomePage = props => (
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
      What is Linked Data?
    </Typography>
    <Typography paragraph>
      "In computing, linked data (often capitalized as Linked Data) is
      structured data which is interlinked with other data so it becomes more
      useful through semantic queries. It builds upon standard Web technologies
      such as HTTP, RDF and URIs, but rather than using them to serve web pages
      only for human readers, it extends them to share information in a way that
      can be read automatically by computers. Part of the vision of linked data
      is for the Internet to become a global database."
    </Typography>
    <Typography variant={"body2"}>
      <i>JSON-LD is Linked Data represented as JSON...</i>{" "}
      <Link href="https://en.wikipedia.org/wiki/Linked_data">Learn More.</Link>
    </Typography>
    <br />
    <Typography variant={"h6"} gutterBottom>
      Case Studies
    </Typography>

    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <FeatureCard
          image={"/images/id.jpg"}
          title={"Decentralized Identifiers"}
          description={
            "Cryptographically self certifying identifiers for linked data enable interoperability and defend against vendor lock in."
          }
          link={"/did"}
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <FeatureCard
          image={"/images/cert.jpg"}
          title={"Verifiable Credentials"}
          description={
            "Explore, test and share semantically unambigious digital certificates that integrate seamlessly with knowledge management systems."
          }
          link={"/vc"}
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <FeatureCard
          image={"/images/edv.jpg"}
          title={"Encrypted Data Vaults"}
          description={
            "Secure, portable, interoperable data storage for use with Decentralized Identifiers."
          }
          link={"/edv"}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FeatureCard
          image={"/images/avacado.jpg"}
          title={"Agricultural Futures"}
          description={
            "Learn how linked data can help forcast commodity prices by combining industry ontologies with data overlays."
          }
          link={"/case-study-agriculture-futures"}
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <FeatureCard
          image={"/images/response.jpeg"}
          title={"Cyber Security"}
          description={
            "Learn how linked data can help integrate heterogenous cyber security data with industry ontologies to improve incident response."
          }
          link={"/case-study-incident-response"}
        />
      </Grid>
    </Grid>
  </BasePage>
);

HomePage.propTypes = {
  tmui: PropTypes.any
};

export default HomePage;
