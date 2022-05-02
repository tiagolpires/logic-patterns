function dolarToCents({ amountInDolar }) {
    const amountInCents = amountInDolar * 100
    return amountInCents
}

module.exports = { dolarToCents }