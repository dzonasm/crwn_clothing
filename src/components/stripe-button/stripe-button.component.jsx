import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Hr5ITB22JrTgM0wSRrxeGna8WAqnbarDB6kUZ0y4VEW1okj56eGeKY0rUnlECaEUsm3mO7NPuNc1n8749V3QfCm00vSGiPV12'

    const onToken = token => {
        console.log(token)
        alert("Payment successful")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton