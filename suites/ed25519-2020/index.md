##### [View Source on GitHub](https://github.com/transmute-industries/ns.did.ai)

#### v1

[`https://w3id.org/security/suites/ed25519-2020/v1`](https://w3id.org/security/suites/ed25519-2020/v1)

[`https://jsld.org/suites/ed25519-2020/v1`](https://jsld.org/suites/ed25519-2020/v1)

Support for [Ed25519 2020](https://github.com/w3c-ccg/lds-ed25519-2020)

##### Verifying using JSON Web Key

```jsonc
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/ed25519-2020/v1"
  ],

  "id": "did:example:123",
  "verificationMethod": [
    {
      "id": "did:example:123#1",
      "type": "Ed25519VerificationKey2020",
      "controller": "did:example:123",
      "publicKeyMultibase": "zB12NYF8RrR3h41TDCTJojY59usg3mbtbjnFs7Eud1Y6u"
    }
  ],
  "authentication": ["did:example:123#1"],
  "assertionMethod": ["did:example:123#1"],
  "capabilityDelegation": ["did:example:123#1"],
  "capabilityInvocation": ["did:example:123#1"]
}
```
