import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_PQeByl1adMD5N0kHot86cQTG00kIljHS62';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label = 'Pay Now'
      name = 'AH Fashion Ltd.'
      billingAddress
      shippingAddress
      image = 'https://svgshare.com/i/HLQ.svg'
      description = {`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel = 'Pay Now'
      token = {onToken}
      stripeKey = {publishableKey}
    />
  );
};

export default StripeCheckoutButton;