##### [View Source on GitHub](https://github.com/transmute-industries/ns.did.ai)

#### v1

[`https://jsld.org/transmute/v1`](https://jsld.org/transmute/v1)

This context enables pragmatic extension of [Decentralized Identifiers v1](https://www.w3.org/ns/did/v1) to support [Verifiable Credentials v1](https://www.w3.org/2018/credentials/v1) and [Security v2](https://w3id.org/security/v2).


##### Verifying using JSON Web Key

```jsonc
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://jsld.org/transmute/v1"
  ],
  "id": "did:example:123",
  "verificationMethod": [
    {
      "id": "did:example:123#key-0",
      "type": "JsonWebKey2020",
      "controller": "did:example:123",
      "publicKeyJwk": {
        "kty": "OKP",
        "crv": "Ed25519",
        "x": "0Q0O6Dje52qY2lhB2WtXw2JxcHk2tfTiie6Pza2OKBA"
      }
    }
  ]
}
```
