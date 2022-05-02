const { dolarToCents } = require("./dolarToCent")
const { createPaypal } = require("./paypal")

function createPaypalImplementation() {
    function makePayment({ userName, amountInDolar }) {
        console.log('> [PaypalImplementation] Enter...')
        const Paypal = createPaypal()
        const amountInCents = dolarToCents({ amountInDolar })
        Paypal.makePayment({ userName, amountInCents })
        console.log('> [PaypalImplementation] Exit...')
    }
        
    return{
        makePayment
    }
}

module.exports = { createPaypalImplementation }