const { createPaypalImplementation } = require('./paypalImplementation')
const { createStripeImplementation } = require('./stripeImplementation') 


function createPaymentProcessor({ PaymentPlatform }) {
    function proccessPayment({ userName, amountInDolar }) {
        console.log('> [ProcessPayment] Enter...')
        const paymentPlatform = PaymentPlatform
        paymentPlatform.makePayment({ userName, amountInDolar })
        console.log('> [ProcessPayment] Finish Payment...')
    }
    
    return {
        proccessPayment
    }
}

const stripeImplementation = createStripeImplementation() 
const paypalImplementation = createPaypalImplementation() 

const PaymentProcessor = createPaymentProcessor({ PaymentPlatform: paypalImplementation })
PaymentProcessor.proccessPayment({ userName: 'Tiago', amountInDolar: 20 })


//Wrong
//The createPaymentProcessor is depending on the stripe function
// If we need to change the processPayment payment platform, we'd have to change the funct

// function createPaymentProcessor() {
//     function proccessPayment({ userName, amountInDolar }) {
//         console.log('> [ProcessPayment] Enter...')
//         const stripe = createStripe()
//         stripe.makePayment({ userName, amountInDolar })
//         console.log('> [ProcessPayment] Finish Payment...')
//     }
    
//     return {
//         proccessPayment
//     }
// }

// const PaymentProcessor = createPaymentProcessor()
// PaymentProcessor.proccessPayment({ userName: 'Tiago', amountInDolar: 20 })