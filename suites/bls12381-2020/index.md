##### [View Source on GitHub](https://github.com/transmute-industries/ns.did.ai)

#### v1

[`https://w3id.org/security/suites/bls12381-2020/v1`](https://w3id.org/security/suites/bls12381-2020/v1)

[`https://jsld.org/suites/bls12381-2020/v1`](https://jsld.org/suites/bls12381-2020/v1)

Support for [BBS+ 2020](https://github.com/w3c-ccg/ldp-bbs2020)

##### Verifying using JSON Web Key

```jsonc
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/bls12381-2020/v1"
  ],
  "id": "did:example:123",
  "verificationMethod": [
    {
      "id": "#z3tEEkfFWnqic11PZGEnRfPdz8zah7QAQFGUD3kMUG8GfKQsbrvggFysmxpxqcdwBHQeMB",
      "controller": "did:example:123",
      "type": "JsonWebKey2020",
      "publicKeyJwk": {
        "kty": "EC",
        "crv": "BLS12381_G1",
        "x": "hDffbsGE7yFgL5JHaYbHaV66PNLWwm9H0MB9hh9Uyxuw9q6wuLedKaj9baPK-UAe"
      }
    },
    {
      "id": "#zUC7KQ4RnDREMH1B9yvt8bcNKU8faz1QYcZnTBPxrxTA5rzR6btkiB2riDGjsGR6MaNS8FEN2wRhWytJvLmtwKvk16xKQhaS87MDBcazqNtAcoiS5GKxAPdqofH2aKJThsDcySU",
      "controller": "did:example:123",
      "type": "JsonWebKey2020",
      "publicKeyJwk": {
        "kty": "EC",
        "crv": "BLS12381_G2",
        "x": "tZx6JZO05n5MqUHq3nJYtAyPaYwZY3yNyTOossdi1b3cqpuPz_pQweyrsL1P5lSxFENwVVb0ZktLZZP5oQL6wzqu84xNfdE2z6HKz-o_Go8gRO6KT6ThEi5vEuc2ocsd"
      }
    }
  ]
}
```
