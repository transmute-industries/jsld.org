##### [View Source on GitHub](https://github.com/transmute-industries/ns.did.ai)

#### v1

[`https://w3id.org/security/suites/x25519-2019/v1`](https://w3id.org/security/suites/x25519-2019/v1)

[`https://jsld.org/suites/x25519-2019/v1`](https://jsld.org/suites/x25519-2019/v1)

Support for [X25519 2019](https://github.com/w3c-ccg/lds-ed25519-2018)

##### Verifying

```jsonc
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/x25519-2019/v1"
  ],
  "id": "did:example:123",
  "verificationMethod": [
    {
      "id": "#1",
      "type": "X25519KeyAgreementKey2019",
      "controller": "did:example:123",
      "publicKeyBase58": "96XGGce9y12gRTxEcnuvpP8tCZzE39WkpKHvUZ6DLg6d"
    }
  ],
  "keyAgreement": ["#1"]
}
```
