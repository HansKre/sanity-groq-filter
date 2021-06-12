/**
 * 
 * Removes all references which are already present in the parent and returns only the unused references.
 * 
 * @param  document The surrounding parent document from props
 * @param  parent The array field from props
 */
const unusedReferences = ({ document, parent }) => {
    const refsToExclude = []
    if (parent && parent.length > 0) {
        parent.forEach(entry => {
            if (entry.hasOwnProperty('_ref')) refsToExclude.push(entry._ref)
        })
    }
    // always exclude drafts by default
    let filter = '!(_id match "drafts*")'
    const params = {}
    refsToExclude.forEach((ref, i) => {
        const paramName = `ref${i}`
        params[paramName] = ref
        filter += `&& _id != $${paramName}`
    })

    return {
        filter: filter,
        params: params
    }
}

/**
 * 
 * Filters to include only documents with ${fieldName} containing the ${matchStr}.
 * 
 * @param  {string} fieldName
 * @param  {string} matchStr
 */
const matches = (fieldName, matchStr) => {
    return `(${fieldName} match "*${matchStr}*")`
}

/**
 * 
 * Filters to exclude documents with ${fieldName} containing the ${matchStr}.
 * 
 * @param  {string} fieldName
 * @param  {string} matchStr
 */
const excludes = (fieldName, matchStr) => {
    return `!(${fieldName} match "*${matchStr}*")`
}

const GroqFilter = { unusedReferences, matches, excludes }

export default GroqFilter