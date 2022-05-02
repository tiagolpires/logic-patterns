const { createStripe } = require("./stripe")

function createStripeImplementation() {
    function makePayment({ userName, amountInDolar }) {
        console.log('> [StripeImplementation] Enter...')
        const Stripe = createStripe()
        Stripe.makePayment({ userName, amountInDolar })
        console.log('> [StripeImplementation] Exit...')
    }
        
    return{
        makePayment
    }
}

module.exports = { createStripeImplementation }