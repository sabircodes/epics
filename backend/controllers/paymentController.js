const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")('sk_test_51OrPR9SDxLBquD0tEFS9iewDM1c6ni6dXw0NAsLsFPR7V3E6rTfVqlGMARnLMQK34dlJ7Ewoktnvw0Jw8ma4VisU00zfnAN8NK');

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: 'pk_test_51OrPR9SDxLBquD0tRPJ2jPY4KfpJSpCXMdFfnUAY8P0bexUBYLZlhk8IbWqIbdm3r9a9BmA1adThw52euLn8TS0e00kA2tK6mT'});
});
