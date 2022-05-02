function createPaypal() {
    function makePayment({ userName, amountInCents }) {
        console.log(`> [Paypal] Get user ${userName} info`)
        console.log(`> [Paypal] Amount ${amountInCents}USD cents`)
        console.log('> [Paypal] Making Payment...')
    }
    return {
        makePayment
    }
}

module.exports = { createPaypal }