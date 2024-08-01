# jsld.org

- [https://jsld.org/default/context/v1](https://jsld.org/default/context/v1)
- [https://jsld.org/default#](https://jsld.org/default#)

## Safe Processing

> JSON-LD is a concrete RDF syntax as described in [RDF11-CONCEPTS](https://www.w3.org/TR/rdf11-concepts/). Hence, a JSON-LD document is both an RDF document and a JSON document and correspondingly represents an instance of an RDF data model. 
> ...
> Summarized, these differences mean that JSON-LD is capable of serializing any RDF graph or dataset and most, but not all, JSON-LD documents can be directly interpreted as RDF as described in RDF 1.1 Concepts [RDF11-CONCEPTS](https://www.w3.org/TR/rdf11-concepts/).

- [https://www.w3.org/TR/json-ld11/#relationship-to-rdf](https://www.w3.org/TR/json-ld11/#relationship-to-rdf)

> Since a directed graph can express the same information in more than one way, it requires canonicalization to achieve the aforementioned goals and any others that may arise via serendipity.

> Most RDF datasets can be canonicalized fairly quickly, in terms of algorithmic time complexity. However, those that contain nodes that do not have globally unique identifiers pose a greater challenge. Normalizing these datasets presents the graph isomorphism problem, a problem that is believed to be difficult to solve quickly in the worst case. 

- [https://www.w3.org/TR/rdf-canon/](https://www.w3.org/TR/rdf-canon/)

## Context Best Practices

See: 

- [https://www.w3.org/TR/json-ld11/#protected-term-definitions](https://www.w3.org/TR/json-ld11/#protected-term-definitions)
- [https://www.w3.org/TR/json-ld11/#default-vocabulary](https://www.w3.org/TR/json-ld11/#default-vocabulary)
- [https://www.w3.org/TR/json-ld11/#scoped-contexts](https://www.w3.org/TR/json-ld11/#scoped-contexts)

## Data Integrity

> A media type (formerly known as a MIME type) is a two-part identifier for file formats and format contents transmitted on the Internet. 
> Their purpose is somewhat similar to file extensions in that they identify the intended data format.
> ...
> Media types are also used by other internet protocols such as HTTP and document file formats such as HTML for similar purposes.

- [https://en.wikipedia.org/wiki/Media_type](https://en.wikipedia.org/wiki/Media_type)

There are several distinct media types for expressing RDF:

- [application/ld+json](https://www.iana.org/assignments/media-types/application/ld+json)
- [application/rdf+xml](https://www.iana.org/assignments/media-types/application/rdf+xml)
- [application/n-quads](https://www.iana.org/assignments/media-types/application/n-quads)
- [application/n-triples](https://www.iana.org/assignments/media-types/application/n-triples)

The National Institute of Standards and Technology (NIST) defines [data integrity](https://csrc.nist.gov/glossary/term/data_integrity) as:

> The property that data has not been altered in an unauthorized manner. Data integrity covers data in storage, during processing, and while in transit.

> The property that data has not been changed, destroyed, or lost in an unauthorized or accidental manner.

Certain cryptographic mechanisms can be used to secure the media types above and provide data integrity.

Application layer processing can destroy or tamper with the information contained in the media types above, unless the appropriate cryptographic checks are performed by all parties interested in a consistent view of data integrity.

A comprehensive review of cryptographic techniques for providing data integrity is beyond the scope of this document, but the general categories are:

- [Digital Signatures](https://www.cisa.gov/news-events/news/understanding-digital-signatures)
- [Encryption](https://www.cisa.gov/safecom/encryption)
- [Hashing](https://www.cisa.gov/sites/default/files/FactSheets/NCCIC%20ICS_Factsheet_File_Hashing_S508C.pdf)

When JSON-LD is secured with any of these mechanisms, the integrity of the JSON is protected but the integrity of the RDF is not protected.

This is because of the process by which JSON-LD is converted to RDF.

> An RDF triple is conventionally written in the order subject, predicate, object.
> The set of nodes of an RDF graph is the set of subjects and objects of triples in the graph.

- [https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-triple](https://www.w3.org/TR/rdf11-concepts/#dfn-rdf-triple)

> N-quads statements are a sequence of RDF terms representing the subject, predicate, object and graph label of an RDF Triple and the graph it is part of in a dataset.

- [https://www.w3.org/TR/n-quads/](https://www.w3.org/TR/n-quads/)

> Canonicalization is the process of transforming an input dataset to its serialized canonical form. That is, any two input datasets that contain the same information, regardless of their arrangement, will be transformed into the same serialized canonical form. 

- [https://www.w3.org/TR/rdf-canon/#canonicalization](https://www.w3.org/TR/rdf-canon/#canonicalization)

Intuitively, changing the order of JSON object members, or array elements will tampers with data integrity, when we consider the JSON serialization the data which has integrity.

However, changing the order of array elements or object members in JSON-LD, might not effect the integrity of the RDF in cannonical form.

> A JSON-LD author can express multiple values in a compact way by using arrays. Since graphs do not describe ordering for links between nodes, arrays in JSON-LD do not convey any ordering of the contained elements by default.

- [https://www.w3.org/TR/json-ld11/#sets-and-lists](https://www.w3.org/TR/json-ld11/#sets-and-lists)

Because of these, and other differences between JSON and JSON-LD, RDF processing is mandatory when confirming RDF integrity.

> This process can be exploited by attackers to construct datasets which are known to take large amounts of computing time to canonicalize, but that do not express useful information or express it using unnecessary complexity.
> ...
> Additionally, software that uses implementations of the algorithm can employ best-practice schema validation to reject data that does not meet application requirements, thereby preventing useless poison datasets from being processed. However, such mitigations are application specific and not directly applicable to implementers of the canonicalization algorithm itself.

- [https://www.w3.org/TR/rdf-canon/#dataset-poisoning](https://www.w3.org/TR/rdf-canon/#dataset-poisoning)

There are currently no specific application profiles that address the dataset poisoning attack, which have W3C consensus.

Each application that relies on JSON-LD based media types and requires RDF data integrity will need to document and implement mitigations.

What follows is the jsld.org default profile, which follows aligns with Section 4 of [RFC9413](https://datatracker.ietf.org/doc/html/rfc9413) "Harmful Consequences of Tolerating the Unexpected".

Specifically the following component:

> A flaw can become entrenched as a de facto standard. Any implementation of the protocol is required to replicate the aberrant behavior, or it is not interoperable.

## Default Profile

It is recommended to inject the default profile context into any JSON-LD context which does not contain it, as the last entry.

The injected value can be in either of these forms:

### Context By Value

```json5
{
  "@context": [
  // ... other context values go here
  {
    "@vocab": "https://jsld.org/default#"
  }],
  // ... rest of jsonld document
}
```

### Context By Reference

```json5
{
  "@context": [
  // ... other context values go here
  "https://jsld.org/default/context/v1"
  ],
  // ... rest of jsonld document
}
```

Having the default profile context included in JSON-LD contexts before integrity protection is applied ensures a few things:

1. Any terms which were not defined in the application profile, are easy to identify in the final RDF graph, since they are assigned default values.
1. The party providing data integrity is explicit about their intention to secure both JSON-LD and RDF.

Some experts might assume that signing JSON-LD is sufficient to communicate this intention, they are wrong.

See the comment above regarding "most, but not all, JSON-LD documents can be directly interpreted as RDF".

In addition to including a default context which addresses undefined terms, it is also recommended to share a list of hashes of any contexts which are included by reference.

This ensures that the application profile is consistently understood by all parties expecting interoperability in RDF terms.

It is recommended that any contexts by referenced be monitored for changes which could lead to inconsistent RDF processing.

The reasons for this are:

1. Domain names are subject to takeover and transfer.
1. Developers, or software upgrades can occasionally format or break files hosted on web servers.
1. Attackers can compromise remote hosts to alter contexts, in order to mount attacks on verifiers.
1. Attackers can compromise software supply chains, in order to mount attacks on verifiers.

If context changes are detected, it is up to the application profile to define the expected behavior.

It is recommended to give priority to JSON processors, and treat RDF inconsistencies as warnings.

If a profile wishes to give priority to RDF processors, it is recommended to use a media type that directly and exclusively encodes RDF, such as `application/rdf+xml` or `application/n-quads` instead of JSON based media types that extend JSON-LD.

Experts who disagree with this profile are welcomed to provide alternative profiles that provide the following:

1. Ensure JSON and RDF are interpretted consistently.
1. Ensure that JSON and / or RDF integrity is interpretted consistently.

