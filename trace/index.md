

Using this context:

```json5
{
  "@context": [
    // ... other context values go here
    "https://jsld.org/trace/v1"
  ],
  // ... rest of jsonld document
}
```

# [Traceable Presentation](#traceable-presentation)

A [Verifiable Presentation](https://www.w3.org/TR/vc-data-model-2.0/#presentations) that includes workflow information.

## [Workflow](#workflow)

A collection of business process definitions and instances of executions of these definitions.

### [Definition](#workflow-definition)

A workflow definition describes the business process which supply chain parties complete in order to secure a supply chain using digital credentials.

### [Instance](#workflow-instance)

A workflow instance is used to group presentations and credentials that are related to a specific supply chain transaction.
