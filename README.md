# Sanity GROQ Filter

Curated List of GROQ Filters.

## Usage / Examples

*Removes all references which are already present in the parent and returns only the unused references.*

### `unusedReferences`-Filter

```js
import GroqFilter from "sanity-groq-filter"

export default {
    name: 'documentName',
    type: 'document',
    fields: [
        {
            name: 'fieldName',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: { type: 'someReferencedType' },
                    options: { filter: GroqFilter.unusedReferences }
                }
            ],
            validation: Rule => Rule.unique()
        },
    ]
}
```

### `matches`-Filter

*Filters to include only documents with ${fieldName} containing the ${matchStr}.*

```js
import GroqFilter from "sanity-groq-filter"

export default {
    name: 'documentName',
    type: 'document',
    fields: [
        {
            name: 'fieldName',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: { type: 'someReferencedType' },
                    options: { filter: GroqFilter.matches('myField', 'barbeque') }
                }
            ],
            validation: Rule => Rule.unique()
        },
    ]
}
```

### `excludes`-Filter

*Filters to exclude documents with ${fieldName} containing the ${matchStr}.*

```js
import GroqFilter from "sanity-groq-filter"
//...
                    options: { filter: GroqFilter.excludes('myField', 'barbeque') }
//...
```

## Further Reading

[Sanity documentation on filters](https://www.sanity.io/docs/reference-type#8118f73f6758)