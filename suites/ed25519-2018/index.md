##### [View Source on GitHub](https://github.com/transmute-industries/ns.did.ai)

#### v1

[`https://w3id.org/security/suites/ed25519-2018/v1`](https://w3id.org/security/suites/ed25519-2018/v1)

[`https://jsld.org/suites/ed25519-2018/v1`](https://jsld.org/suites/ed25519-2018/v1)

Support for [Ed25519 2018](https://github.com/w3c-ccg/lds-ed25519-2018)

##### Verifying using JSON Web Key

```jsonc
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/ed25519-2018/v1"
  ],
  "id": "did:example:123",
  "verificationMethod": [
    {
      "id": "#1",
      "type": "Ed25519VerificationKey2018",
      "controller": "did:example:123",
      "publicKeyBase58": "GC1q9v7kfD8QkhVpaYSCWxaHudMNZrKB5ASRr831is4q"
    }
  ],
  "authentication": ["#1"],
  "assertionMethod": ["#1"],
  "capabilityInvocation": ["#1"],
  "capabilityDelegation": ["#1"]
}
```
