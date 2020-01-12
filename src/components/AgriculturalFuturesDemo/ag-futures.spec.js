const fs = require("fs");
const path = require("path");
const Hylar = require("hylar");
const Fact = require("hylar/hylar/core/Logics/Fact");

const h = new Hylar();

jest.setTimeout(1 * 60 * 1000);

const graphName = "https://jsld.org";

describe("ag-futures", () => {
  //   it("load onotologies", async () => {
  // // https://github.com/ucbl/HyLAR-Reasoner/blob/master/test/ontologies/fipa.ttl
  // const iotOnt = fs
  // .readFileSync(path.resolve(__dirname, "../../../public/ontologies/iotOnt.ttl"))
  // .toString();
  // // https://github.com/johnciclus/sustenagro_ontology
  // const agroOnt = fs
  // .readFileSync(path.resolve(__dirname, "../../../public/ontologies/agroOnt.ttl"))
  // .toString();
  // // https://raw.githubusercontent.com/edmcouncil/fibo/master/LOAN/LoanContracts/LoanCore.rdf
  // const finOnt = fs
  // .readFileSync(path.resolve(__dirname, "../../../public/ontologies/finOnt.ttl"))
  // .toString();
  // const keepOldValues = false;
  //   await h.load(iotOnt, "text/turtle", keepOldValues);
  //   await h.load(agroOnt, "text/turtle", keepOldValues);
  //   await h.load(finOnt, "text/turtle", keepOldValues);
  // });

  it("create and read data", async () => {
    let results = await h.query(`
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
    }`);

    expect(results).toEqual([true]);

    // A banker wants to know the assets of a farmer as they relate to Loan underwriting.
    results = await h.query(`
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX gs1: <https://www.gs1.org/voc/>
    select * where { 
        ?s gs1:productName ?o .
        ?s ?p "did:key:z6Mko1tRsXAYuLqixQ2sVQEjQ3gHxvTVah9xiCcfYzujmaED" .
    } limit 100 
    `);
    expect(results).toEqual([
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
    ]);

    // A business analyst wants to know which devices she is responsible for.
    results = await h.query(`
    PREFIX gs1: <https://www.gs1.org/voc/>
    select * where { 
        ?s gs1:productName ?o .
        ?s ?p "did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6" .
    } limit 100 
    `);

    expect(results).toEqual([
      {
        s: { token: "uri", value: "did:ockam:2Mm9pLRQwueo7FJUvBoDW7QKGBXTX" },
        o: { token: "literal", value: "Mesur.io Earthstream Device" },
        p: { token: "uri", value: "http://purl.org/dc/terms/rightsHolder" }
      }
    ]);

    // A Futures trader wants to know which fields are associated with a future contract.
    results = await h.query(`
    PREFIX gs1: <https://www.gs1.org/voc/>
    PREFIX fin: <https://spec.edmcouncil.org/fibo/ontology/LOAN/LoanContracts/LoanCore/>
    PREFIX sch: <http://schema.org/>
    select * where { 
        ?s gs1:productName "Soy Bean Futures Contract" .
        ?s sch:temporalCoverage ?o .

    } limit 100 
    `);

    expect(results).toEqual([
      {
        s: {
          token: "uri",
          value: "did:key:z6MkezW5kJjrXuFMHRYBGSqZPv5Gq79ZKWGtZwV9jtCsV99Y"
        },
        o: { token: "literal", value: "<http://farm.example.com/field/0>" }
      }
    ]);
  });

  // Coming soon... Reasoning over our example data set...
  // const facts = [
  //   new Fact("#parentOf", "#papy", "#papa", [], true),
  //   new Fact("#parentOf", "#papa", "#fiston", [], true),
  //   new Fact("#parentOf", "#grandpapy", "#papy", [], true),
  //   new Fact(
  //     "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
  //     "#parentOf",
  //     "http://www.w3.org/2002/07/owl#TransitiveProperty",
  //     [],
  //     true
  //   )
  // ];
  // console.log("yolo");
});
