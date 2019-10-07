import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //Stripe takes payments in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Pz2UaUQ67S3AHmoDDdAmhAoc002J5TmmhM';

    const onToken = token => {
        console.log(token);
        alert("Payment successful");
    }
    
    return (
        <StripeCheckout
            label="Pay Now"
            name="SPORSEY CLOTHING INC."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            />
    );
};

export default StripeCheckoutButton;