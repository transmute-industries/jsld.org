import React, { useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Helmet } from "react-helmet";
import { CopyToClipboard } from "react-copy-to-clipboard";

import BasePage from "../BasePage/BasePage";

import JsonPreview from "../../components/JsonPreview/JsonPreview";
import documentLoader from "./documentLoader";

const base64url = require("base64url");
const jsigs = require("jsonld-signatures");
const { Ed25519KeyPair } = require("crypto-ld");
const { Ed25519Signature2018 } = jsigs.suites;
const vc = require("vc-js");

const jsonldPageAnnotation = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  name: "jsld.org"
};

const key1 = {
  passphrase: null,
  id:
    "did:key:z6MkkUNcUWxAbxamK2Spp92mKWoXddS3tTqBKe8VTGExzX2Y#z6MkkUNcUWxAbxamK2Spp92mKWoXddS3tTqBKe8VTGExzX2Y",
  controller: "did:key:z6MkkUNcUWxAbxamK2Spp92mKWoXddS3tTqBKe8VTGExzX2Y",
  type: "Ed25519VerificationKey2018",
  privateKeyBase58:
    "5LePN323Nnyo25gtSZRw4yWMzkpjXauSkdsadsjrRVynCqD96wndShmuD8s5LfNEtMaqbvhiNGJCnB8eaUS4NoTN",
  publicKeyBase58: "727ZtGhjGR6JCXc88a4vURFXp4ACUaapddDZczGx5JFA"
};

// const key2 = {
//   passphrase: null,
//   id:
//     "did:key:z6Mkucm82ejgu5Z88MtqA1Xg4FPFny1SgCPBNEYGXRP4Bouq#z6Mkucm82ejgu5Z88MtqA1Xg4FPFny1SgCPBNEYGXRP4Bouq",
//   controller: "did:key:z6Mkucm82ejgu5Z88MtqA1Xg4FPFny1SgCPBNEYGXRP4Bouq",
//   type: "Ed25519VerificationKey2018",
//   privateKeyBase58:
//     "3bNndn1F5m2omtQT7s9cTJqzJDfi6V8toZeKW92whwftgj19TqktxsX8QzFc5S8qnPkLxvCG1nLmFUdBixdt6XzP",
//   publicKeyBase58: "GAW5SQVFZY4f1s48USZqD9qFyPjbGK8pgDdLh9R3Gb8T"
// };

const suite = new Ed25519Signature2018({
  key: new Ed25519KeyPair(key1)
});

const encodedEditorValue = window.location.search.split("?editor=").pop();

const initialEditorValue = encodedEditorValue
  ? base64url.decode(encodedEditorValue)
  : JSON.stringify(
      {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
        ],
        id: "http://example.gov/credentials/3732",
        type: ["VerifiableCredential", "UniversityDegreeCredential"],
        issuer: "https://example.edu",
        issuanceDate: new Date().toISOString(),
        credentialSubject: {
          id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
          degree: {
            type: "BachelorDegree",
            name: "Bachelor of Science and Arts"
          }
        }
      },
      null,
      2
    );

const LinkedDataProofs = props => {
  const [values, setValues] = React.useState({
    editor: initialEditorValue,
    preview: ""
  });

  const signChanges = async editorValue => {
    if (!editorValue) {
      return;
    }

    setValues({
      ...values,
      editor: editorValue
    });
    try {
      const parsed = JSON.parse(editorValue);

      try {
        const signed = await vc.issue({
          credential: parsed,
          suite,
          documentLoader
        });

        const editorValueForUrl = base64url(editorValue);
        const url = window.location.href + "?editor=" + editorValueForUrl;
        window.history.replaceState(
          null,
          null,
          "/vc?editor=" + editorValueForUrl
        );
        setValues({
          ...values,
          url,
          editor: editorValue,
          preview: JSON.stringify(signed, null, 2)
        });
      } catch (e) {
        console.error(e);
        setValues({
          ...values,
          preview: JSON.stringify(
            {
              error: e.message
            },
            null,
            2
          )
        });
      }
    } catch (e) {
      setValues({
        ...values,
        editor: editorValue,
        preview: JSON.stringify(
          {
            error: "Could not parse credential as JSON!"
          },
          null,
          2
        )
      });
    }
  };

  const debouncedSigner = _.debounce(signChanges, 3 * 1000);

  useEffect(() => {
    setTimeout(() => {
      if (values.preview === ``) {
        signChanges(values.editor);
      }
    }, 500);
    // eslint-disable-next-line
  }, []);
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
        Verifiable Credentials
        <CopyToClipboard
          text={values.url}
          onCopy={t => {
            props.doSetTmuiProp({
              snackBarMessage: {
                open: true,
                variant: "default",
                message: "Copied to link to clipboard.",
                vertical: "top",
                horizontal: "right",
                autoHideDuration: 2000
              }
            });
          }}
        >
          <Button
            variant={"contained"}
            color={"secondary"}
            style={{ float: "right" }}
          >
            Share
          </Button>
        </CopyToClipboard>
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography paragraph>Editor</Typography>
          <JsonPreview
            style={{ height: "500px" }}
            value={values.editor}
            onChange={debouncedSigner}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography paragraph>Preview</Typography>
          <JsonPreview
            style={{ height: "500px" }}
            value={values.preview}
            readOnly={true}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Typography paragraph>
        A Linked Data Proof provides authentication and integrity for linked
        data documents using cannonicalization, hashing, and digital signatures.
      </Typography>
      <Link href="https://w3c-dvcg.github.io/ld-proofs/">Read More</Link>
    </BasePage>
  );
};

LinkedDataProofs.propTypes = {
  tmui: PropTypes.any
};

export default LinkedDataProofs;
