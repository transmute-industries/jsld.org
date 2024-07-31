# Safe Processing

This web page may be modified to provide term definitions in the future.

For example:

[https://jsld.org/default/#section-i-want](https://jsld.org/default/#section-i-want)

Could eventually resolve to an anchor tag in this page, based on the following markdown:

```
# [Term Definition](#section-i-want)
```

See [https://www.w3.org/TR/json-ld11/#terms](https://www.w3.org/TR/json-ld11/#terms) for additional details.

A term exists regardless of if a browser can dereference it.

For example [IANA XML Registry](https://www.iana.org/assignments/xml-registry/xml-registry.xhtml#ns) includes:

- `urn:ietf:params:xml:ns:yang:iana-crypt-hash` [RFC7317](https://www.iana.org/go/rfc7317)
- `urn:ietf:params:xml:ns:epp:secure-authinfo-transfer-1.0` [RFC9154](https://www.iana.org/go/rfc9154)

Although these names do not resolve to human readable definitions, they are defined in documents which are meant to be read and understood by humans.