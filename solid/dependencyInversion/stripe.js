function createStripe() {
    function makePayment({ userName, amountInDolar }) {
        console.log(`> [Stripe] Get user ${userName} info`)
        console.log(`> [Stripe] Amount ${amountInDolar}USD`)
        console.log('> [Stripe] Making Payment...')
    }
    return {
        makePayment
    }
}

module.exports = { createStripe }