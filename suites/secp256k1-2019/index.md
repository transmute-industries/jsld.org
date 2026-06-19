##### [View Source on GitHub](https://github.com/transmute-industries/ns.did.ai)

#### v1

[`https://w3id.org/security/suites/secp256k1-2019/v1`](https://w3id.org/security/suites/secp256k1-2019/v1)

[`https://jsld.org/suites/secp256k1-2019/v1`](https://jsld.org/suites/secp256k1-2019/v1)

Support for [ecdsa secp256k1 2019](https://github.com/w3c-ccg/lds-ecdsa-secp256k1-2019)

##### Verifying

```jsonc
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/secp256k1-2019/v1"
  ],
  "id": "did:example:123",
  "verificationMethod": [
    {
      "id": "#1",
      "type": "EcdsaSecp256k1VerificationKey2019",
      "controller": "did:example:123",
      "publicKeyBase58": "225MyFUEwqYyNhEnXpShVLxQAg9hPMPyKuTDTiAUiQ6zb"
    }
  ],
  "assertionMethod": ["#1"]
}
```
