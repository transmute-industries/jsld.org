import React from "react";
// import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
const graphName = "https://jsld.org";

const AgriculturalFuturesDemo = () => (
  <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Technology Example
    </Typography>
    <Typography paragraph>
      Lets use SPARQL to read and write some hypothetical data with a
      semantically aware database... This example makes use of a number of open
      standards, which are listed below.
    </Typography>
    <p>
      "Decentralized identifiers (DIDs) are a new type of identifier to provide
      verifiable, decentralized digital identity. These new identifiers are
      designed to enable the controller of a DID to prove control over it and to
      be implemented independently of any centralized registry, identity
      provider, or certificate authority." <br />
      <a
        rel="noopener noreferrer"
        href="https://www.w3.org/TR/did-core/"
        target="_blank"
      >
        https://www.w3.org/TR/did-core/
      </a>
    </p>
    <p>
      "The initial focus of the GS1 Web Vocabulary is consumer facing properties
      for clothing, shoes, food beverage/tobacco and properties common to all
      products. Food/Beverage/Tobacco properties will include properties related
      to EU 1169 as defined in the GDSN and GS1 Source Standards." <br />
      <a
        rel="noopener noreferrer"
        href="https://www.gs1.org/voc/"
        target="_blank"
      >
        https://www.gs1.org/voc/
      </a>
    </p>
    <p>
      "The Financial Industry Business Ontology (FIBO) defines the sets of
      things that are of interest in financial business applications and the
      ways that those things can relate to one another." <br />
      <a
        rel="noopener noreferrer"
        href="https://spec.edmcouncil.org/fibo/"
        target="_blank"
      >
        https://spec.edmcouncil.org/fibo/
      </a>
    </p>
    <p>
      "The Fipa ontology describes a device ontology that aims at enabling
      interoperability between software agents, as defined by the FIPA Device
      Ontology Specification. This ontology can be used by agents when
      communicating about devices: when agents pass profiles of devices to each
      other, these profiles can be validated using the information contained in
      this ontology." <br />
      <a
        rel="noopener noreferrer"
        href="https://sites.google.com/site/smartappliancesproject/ontologies/fipa-ontology"
        target="_blank"
      >
        https://sites.google.com/site/smartappliancesproject/ontologies/fipa-ontology
      </a>
    </p>
    <p>
      "Schema.org vocabulary can be used with many different encodings,
      including RDFa, Microdata and JSON-LD. These vocabularies cover entities,
      relationships between entities and actions, and can easily be extended
      through a well-documented extension model. Over 10 million sites use
      Schema.org to markup their web pages and email messages. Many applications
      from Google, Microsoft, Pinterest, Yandex and others already use these
      vocabularies to power rich, extensible experiences." <br />
      <a rel="noopener noreferrer" href="https://schema.org/" target="_blank">
        https://schema.org/
      </a>
    </p>
    <pre>
      {`
    PREFIX dce: <http://purl.org/dc/elements/1.1/>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX sch: <http://schema.org/>
    PREFIX gs1: <https://www.gs1.org/voc/>
    PREFIX agro: <http://semantic.icmc.usp.br/sustenagro/>
    PREFIX iot: <http://sites.google.com/site/smartappliancesproject/ontologies/fipa#>
    PREFIX fin: <https://spec.edmcouncil.org/fibo/ontology/LOAN/LoanContracts/LoanCore/>

    INSERT DATA {
        GRAPH <${graphName}/dids> {

          # people

          <did:key:z6Mko1tRsXAYuLqixQ2sVQEjQ3gHxvTVah9xiCcfYzujmaED> 
          dce:creator "Fred Farmer"  ;
          dct:AgentClass "Farmer" .

          <did:elem:EiAcNS3PHOIDjWLGpIuno0rRtd_WmmdNGgqT6A8jFL8grQ> 
          dce:creator "Bill Banker"  ;
          dct:AgentClass "Banker" .

          <did:v1:nym:z6MkuYhA5TN5XGyvFhjhLjBkJ19hY2HnQgwe7h5q1NkK5bjf>
          dce:creator "Tim Trader"  ;
          dct:AgentClass "Commodities Trader" .

          <did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6>
          dce:creator "Idris IoTAnalyst"  ;
          dct:AgentClass "IoT Analyst" .

          # places

          <http://farm.example.com/field/0>
          gs1:productName "Soy Bean Field" ;
          gs1:productYield "1000 tons" ;
          sch:polygon "[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]" ;
          agro:beginningOfPlantingDate "2020-03-01T20:16:46Z" ;
          agro:finishOfPlantingDate "2020-03-07T20:16:46Z"    ;
          agro:beginningOfHarvestDate "2020-06-01T20:16:46Z"  ;
          agro:finishOfHarvestDate "2020-06-07T20:16:46Z"      ;
          dct:rightsHolder "did:key:z6Mko1tRsXAYuLqixQ2sVQEjQ3gHxvTVah9xiCcfYzujmaED" .

          # devices 

          <did:ockam:2Mm9pLRQwueo7FJUvBoDW7QKGBXTX>
          gs1:productName "Mesur.io Earthstream Device" ;
          iot:hasCPU "Intel® Quark™ Microcontroller D2000" ;
          iot:hasAvailable "32 KB";
          dct:rightsHolder "did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6" .

          # assets

          <did:key:z6MkhomH1sHgUW1DMYJTWAxK19cm4cit8WTzoT1ZaUUKTiHV>
          gs1:productName "Commercial Loan" ;
          fin:hasOriginatorPerson  "Bill Banker" ;
          fin:hasOriginatorCompany "BNY Mellon" ;
          fin:LenderLienPosition "primary" ;
          fin:LoanMarketCategory "<https://spec.edmcouncil.org/fibo/ontology/LOAN/LoanContracts/LoanCore/_LoanMarketCategory_Commercial>" ;
          dct:rightsHolder "did:elem:EiAcNS3PHOIDjWLGpIuno0rRtd_WmmdNGgqT6A8jFL8grQ" .

          <did:key:z6MkezW5kJjrXuFMHRYBGSqZPv5Gq79ZKWGtZwV9jtCsV99Y>
          gs1:productName "Soy Bean Futures Contract" ;
          sch:temporalCoverage "<http://farm.example.com/field/0>" ;
          fin:hasOriginatorPerson  "Tim Trader" ;
          fin:hasOriginatorCompany "JPM Chase" ;
          sch:price "55.00" ;
          sch:priceCurrency "USD" ;
          dct:rightsHolder "did:v1:nym:z6MkuYhA5TN5XGyvFhjhLjBkJ19hY2HnQgwe7h5q1NkK5bjf" .

          <did:key:z6Mko1EsZqGrgD1aTzGEFAdYTHa5CB5SSTVxiHALhoHCT83w>
          gs1:productName "Container Soy Beans" ;
          gs1:grossWeight "1 ton" ;
          gs1:sizeDimension "10 x 10 x 5 ft" ;
          dct:rightsHolder "did:key:z6Mko1tRsXAYuLqixQ2sVQEjQ3gHxvTVah9xiCcfYzujmaED" .

        } 
    }`}
    </pre>
    <Typography variant="h6" gutterBottom>
      Bill Banker wants to know the assets of Fred Farmer as they relate to
      underwriting a commercial loan. Fred Farmer might need a loan to buy
      fertilizer or farming equipment.
    </Typography>
    <pre>
      {`
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX gs1: <https://www.gs1.org/voc/>
    select * where { 
        ?s gs1:productName ?o .
        ?s ?p "did:key:z6Mko1tRsXAYuLqixQ2sVQEjQ3gHxvTVah9xiCcfYzujmaED" .
    } limit 100 
    `}
    </pre>
    Returns:
    <pre>
      {JSON.stringify(
        [
          {
            s: { token: "uri", value: "http://farm.example.com/field/0" },
            o: { token: "literal", value: "Soy Bean Field" },
            p: { token: "uri", value: "http://purl.org/dc/terms/rightsHolder" }
          },
          {
            s: {
              token: "uri",
              value: "did:key:z6Mko1EsZqGrgD1aTzGEFAdYTHa5CB5SSTVxiHALhoHCT83w"
            },
            o: { token: "literal", value: "Container Soy Beans" },
            p: { token: "uri", value: "http://purl.org/dc/terms/rightsHolder" }
          }
        ],
        null,
        2
      )}
    </pre>
    <Typography variant="h6" gutterBottom>
      Idris IoTAnalyst wants to know which devices he is responsible for so he
      can ensure they are reporting on environmental factors that might impact
      crop yield.
    </Typography>
    <pre>
      {`
    PREFIX gs1: <https://www.gs1.org/voc/>
    select * where { 
        ?s gs1:productName ?o .
        ?s ?p "did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6" .
    } limit 100 
    `}
    </pre>
    Returns:
    <pre>
      {JSON.stringify(
        [
          {
            s: {
              token: "uri",
              value: "did:ockam:2Mm9pLRQwueo7FJUvBoDW7QKGBXTX"
            },
            o: { token: "literal", value: "Mesur.io Earthstream Device" },
            p: { token: "uri", value: "http://purl.org/dc/terms/rightsHolder" }
          }
        ],
        null,
        2
      )}
    </pre>
    <Typography variant="h6" gutterBottom>
      Tim Trader wants to know which fields are associated with a futures
      contract, so he can check on sensor data that might impact yield provided
      by Idris.
    </Typography>
    <pre>
      {`
    PREFIX gs1: <https://www.gs1.org/voc/>
    PREFIX fin: <https://spec.edmcouncil.org/fibo/ontology/LOAN/LoanContracts/LoanCore/>
    PREFIX sch: <http://schema.org/>
    select * where { 
        ?s gs1:productName "Soy Bean Futures Contract" .
        ?s sch:temporalCoverage ?o .

    } limit 100 
    `}
    </pre>
    Returns:
    <pre>
      {JSON.stringify(
        [
          {
            s: {
              token: "uri",
              value: "did:key:z6MkezW5kJjrXuFMHRYBGSqZPv5Gq79ZKWGtZwV9jtCsV99Y"
            },
            o: { token: "literal", value: "<http://farm.example.com/field/0>" }
          }
        ],
        null,
        2
      )}
    </pre>
  </React.Fragment>
);

AgriculturalFuturesDemo.propTypes = {
  //
};

export default AgriculturalFuturesDemo;
