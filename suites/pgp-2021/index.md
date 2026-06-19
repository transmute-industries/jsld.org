##### [View Source on GitHub](https://github.com/transmute-industries/ns.did.ai)

#### v1

[`https://w3id.org/security/suites/pgp-2021/v1`](https://w3id.org/security/suites/pgp-2021/v1)

[`https://jsld.org/suites/pgp-2021/v1`](https://jsld.org/suites/pgp-2021/v1)

Support for [PGP 2021](https://github.com/OR13/lds-pgp2021)

##### Verifying using JSON Web Key

```jsonc
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/pgp-2021/v1"
  ],

  "id": "did:example:123",
  "verificationMethod": [
    {
      "id": "did:example:123#1",
      "type": "PgpVerificationKey2021",
      "controller": "did:example:123",
      "publicKeyPgp": "-----BEGIN PGP PUBLIC KEY BLOCK-----\r\nVersion: OpenPGP.js v4.10.9\r\nComment: https://openpgpjs.org\r\n\r\nxjMEYASIXxYJKwYBBAHaRw8BAQdAiEDH3eDo954hWbnf5srnHwL6WfTKXEwu\r\noeGIK39k7DPNG0pvbiBTbWl0aCA8am9uQGV4YW1wbGUuY29tPsKPBBAWCgAg\r\nBQJgBIhfBgsJBwgDAgQVCAoCBBYCAQACGQECGwMCHgEAIQkQNzyO0OYKPDsW\r\nIQSPfkGb1dh1xq44qq03PI7Q5go8Ox6tAQDWfWPrPn2dCNU4pWmn7WtZZBpr\r\nsTkZ+B91uV7Rc1YtAwEA6mBHjiudCfx5qjnPdfpg/Q7+AoVyoN32YOKitFQR\r\n0gfOOARgBIhfEgorBgEEAZdVAQUBAQdAs9lCd2o023BMxfLWFDNr+7vtZ1PV\r\nVEUbSSK1GvkEFikDAQgHwngEGBYIAAkFAmAEiF8CGwwAIQkQNzyO0OYKPDsW\r\nIQSPfkGb1dh1xq44qq03PI7Q5go8O/+XAP9MqQ6E8zHJD+JdKhCqOOol11lB\r\nenlTbeZqHllv7xdGpAD/dOElSqr+Eslk0squxsIaglX39oh2wGcmMQrqvlbT\r\nKAA=\r\n=DVI0\r\n-----END PGP PUBLIC KEY BLOCK-----\r\n"
    }
  ]
}
```
