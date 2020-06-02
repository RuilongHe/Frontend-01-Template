
function match(selector, element) {
    return selector.split(/(?=[.#])/).every(s => matchSelectors(s, element))
}

function matchSelectors(selector, element) {
    if (!element.attributes && !selector) {
        return false
    }
    if (selector.startsWith('#')) {
        const attrId = element.attributes.find(a => a.name === 'id')
        return !!attrId && attrId.value === selector.slice(1)
    } else if (selector.startsWith('.')) {
        const attrClass = element.attributes.find(a => a.name === 'class')
        return !!attrClass && attrClass.value.split(/\s+/g).indexOf(selector.slice(1)) !== -1
    } else {
        return element.tagName === selector
    }
}