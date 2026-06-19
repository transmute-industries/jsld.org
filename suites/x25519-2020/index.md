##### [View Source on GitHub](https://github.com/transmute-industries/ns.did.ai)

#### v1

[`https://w3id.org/security/suites/x25519-2020/v1`](https://w3id.org/security/suites/x25519-2020/v1)

[`https://jsld.org/suites/x25519-2020/v1`](https://jsld.org/suites/x25519-2020/v1)

Support for [X25519 2020](https://github.com/w3c-ccg/lds-ed25519-2020)

##### Verifying

```jsonc
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/x25519-2020/v1"
  ],
  "id": "did:example:123",
  "keyAgreement": ["#1"]
}
```
