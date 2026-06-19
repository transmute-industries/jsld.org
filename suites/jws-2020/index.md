##### [View Source on GitHub](https://github.com/transmute-industries/ns.did.ai)

#### v1

[`https://w3id.org/security/suites/jws-2020/v1`](https://w3id.org/security/suites/jws-2020/v1)

[`https://jsld.org/suites/jws-2020/v1`](https://jsld.org/suites/jws-2020/v1)

Support for [JSON Web Signature 2020](https://github.com/w3c-ccg/lds-jws2020)

##### Verifying using JSON Web Key

```jsonc
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/jws-2020/v1"
  ],
  "id": "did:example:123",
  "verificationMethod": [
    {
      "id": "#z6MktjiTVhTt2NWEYUjbqrkRVLWqJgpw85jFRmHcGrYFD7jM",
      "type": "JsonWebKey2020",
      "controller": "did:example:123",
      "publicKeyJwk": {
        "kty": "OKP",
        "crv": "Ed25519",
        "x": "1DrGM08j2Agl8F14fN69RexmNON2Yczq3hp47wMRilA"
      }
    }
  ]
}
```
