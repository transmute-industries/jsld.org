##### [View Source on GitHub](https://github.com/transmute-industries/ns.did.ai)

#### v1

[`https://w3id.org/security/suites/secp256k1-2020/v1`](https://w3id.org/security/suites/secp256k1-2020/v1)

[`https://jsld.org/suites/secp256k1-2020/v1`](https://jsld.org/suites/secp256k1-2020/v1)

Support for [secp256k1 2020](https://jsld.org/suites/secp256k1-2020)

##### Verifying

```jsonc
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/secp256k1-2020/v1"
  ],
  "id": "did:example:123",
  "verificationMethod": [
    {
      "id": "#1",
      "type": "EcdsaSecp256k1RecoveryMethod2020",
      "controller": "did:example:123",
      "blockchainAccountId": "0xF20cC6c5B9fef13Cb75300BbD059C176D18d3d01@eip155:1"
    }
  ],
  "assertionMethod": ["#1"]
}
```
