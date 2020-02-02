import React from "react";
import PropTypes from "prop-types";

// import Link from "@material-ui/core/Link";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Helmet } from "react-helmet";

import BasePage from "../BasePage/BasePage";

// import history from "../../store/history";

import AgriculturalFuturesDemo from "../../components/AgriculturalFuturesDemo/AgriculturalFuturesDemo";

// const hasUnlockedKeystore = props => {
//   return (
//     props.keystore.keystore && typeof props.keystore.keystore.data === "object"
//   );
// };

// const CallToAction = props => {
//   if (!hasUnlockedKeystore(props)) {
//     return (
//       <Button
//         style={{ float: "right" }}
//         variant={"contained"}
//         color={"primary"}
//         onClick={() => {
//           history.push("/keystore");
//         }}
//       >
//         Create
//       </Button>
//     );
//   }
//   if (hasUnlockedKeystore(props)) {
//     return (
//       <Button
//         style={{ float: "right" }}
//         variant={"contained"}
//         color={"primary"}
//         onClick={() => {
//           history.push("/documents");
//         }}
//       >
//         Explore
//       </Button>
//     );
//   }
// };

// const ExplainerText = props => {
//   if (!hasUnlockedKeystore(props)) {
//     return (
//       <Typography paragraph>
//         Before proceeding, please ensure you setup a keystore.
//       </Typography>
//     );
//   }
//   if (hasUnlockedKeystore(props)) {
//     return (
//       <Typography paragraph>
//         You have an unlocked keystore and are ready to explore.
//       </Typography>
//     );
//   }
// };

const jsonldPageAnnotation = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  url: "https://jsld.org/case-study-agriculture-futures",
  description: "Learn about Agricultural Futures and Linked Data.",
  maintainer: {
    "@type": "Person",
    name: "Orie Steele"
  }
};

const AgricultureFutures = props => (
  <BasePage {...props}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Case Study: Agricultural Futures</title>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonldPageAnnotation)
        }}
      ></script>
    </Helmet>
    {/* <Typography variant="h3" gutterBottom>
      Home
      <CallToAction {...props} />
    </Typography>
    <br />
    <ExplainerText {...props} />
    <br /> */}
    <Typography variant="h5" gutterBottom>
      Agricultural Futures
    </Typography>
    <Typography paragraph>
      How can we use JSON-LD along with other semantic web technologies to
      tackle agricultural futures? See this brief overview of agricultural
      futures.
    </Typography>
    <iframe
      title="agricultural futures"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/IhAHOlnnl1g"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br />
    <br />
    <Typography variant="subtitle2">
      Let's investigate some of the key technical areas covered or implied in
      the video.
    </Typography>
    <br />
    <Typography variant="h6" gutterBottom>
      Futures Trader
    </Typography>
    <Typography paragraph>A Person who trades agricultural futures.</Typography>
    <Typography variant="h6" gutterBottom>
      Commodity
    </Typography>
    <Typography paragraph>
      Products such as Cattle, Corn or Soybeans.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Seasonality
    </Typography>
    <Typography paragraph>
      Some products can only be produced during certain times of year. This
      creates a supply and demand cycle, creating the need for accurate
      forcasts.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Crop Yields
    </Typography>
    <Typography paragraph>
      Analysts must address uncertainty regarding crop yields.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Production Cycle
    </Typography>
    <Typography paragraph>
      Planting, Growth and Harvesting, factors impacting each phase can cause
      changes in price.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Weather
    </Typography>
    <Typography paragraph>
      Weather is the most import factor affecting price for most agricultural
      products.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Data Sources
    </Typography>
    <Typography paragraph>
      Internet of things device feeds, NOAA weather reports, satellite data
      might help provide aditional context about factors impating crop yield.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Government Subsidies
    </Typography>
    <Typography paragraph>
      Financial incentives can cause farmers to choose to produce different
      products, impacting supply and affecting price.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Market Activity
    </Typography>
    <Typography paragraph>
      International markets, changes in trade regulations and cultural
      preferences could impact demand and price.
    </Typography>
    <Typography variant="h6" gutterBottom>
      USDA Reports
    </Typography>
    <Typography paragraph>
      For{" "}
      <a
        rel="noopener noreferrer"
        href="https://downloads.usda.library.cornell.edu/usda-esmis/files/m039k491c/h989rc35c/5h73q524k/plva0519.txt"
      >
        example
      </a>
      ... "This file presents the annual estimates of production and value for
      commercial broilers, eggs, turkeys raised, and chickens lost or sold for
      slaughter by states and U.S. The report also highlights changes in the
      data in comparison to the previous years. This report supplements Broiler
      Hatchery, Chickens and Eggs, and Turkey Hatchery, and continues Poultry
      Production, Disposition, and Income. These estimates were based on
      inventory, disposition, production, and price estimates as published in
      various NASS poultry and agricultural prices reports, as well as
      information on imports, exports, and slaughter obtained from other sources
      "
    </Typography>
    <br />
    <br />
    <Typography variant="h6" gutterBottom>
      Agricultural Ontologies
    </Typography>
    <Typography paragraph>
      Below is a short video explaining how agricultural ontologies can model
      the relationships among these concept, and assist with data portability,
      enabling more accurate forcasts from integrating disperate sources of
      information.
    </Typography>
    <iframe
      title="agricultural ontologies"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/v3DjG2EMgig"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br />
    <br />
    <Typography variant="h6" gutterBottom>
      Internet of Things Ontologies
    </Typography>
    <Typography paragraph>
      Ontologies are also useful for modeling the relationships among data
      collection and reporting services.
    </Typography>
    <iframe
      title="iot ontologies"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/1wbXvfFsiMg"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br />
    <br />
    <Typography variant="h6" gutterBottom>
      Financial and Banking Ontologies
    </Typography>
    <Typography paragraph>
      Ontologies are also useful for modeling the relationships among financial
      services, vendors, banks and asset classes.
    </Typography>
    <iframe
      title="financial ontologies"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/IKFHklf94lo"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br />
    <br />

    <AgriculturalFuturesDemo />
  </BasePage>
);

AgricultureFutures.propTypes = {
  tmui: PropTypes.any
};

export default AgricultureFutures;
