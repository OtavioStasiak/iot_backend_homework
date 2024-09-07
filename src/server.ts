import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";

import { routes } from "./modules/routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);



app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

    if(err instanceof Error){
        return response.status(400).json({
            message: err.message,
        });
    };

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
})
const port = process.env.PORT || 3000;

app.listen(port, async() => { 
    console.log("Server is Running!");

});


/* const handleGetPaymentMethods = await stripe.paymentIntents.list({customer: "cus_PfOrCZDkK3FJ1Y"});
   const paymentMethod = handleGetPaymentMethods.data[0]?.payment_method;
   const customer = handleGetPaymentMethods.data[0]?.customer;

   const products = await stripe.products.list({
    type: 'service', 
    active: true
   });
   const product = products?.data?.find(item => item.name === planName);
     
   const subscription = await stripe.subscriptions.create({
    customer: customer as string,
    items: [{
      price: product?.default_price?.toString(),
    }],
    currency: "brl",
    trial_period_days: 7,
    payment_settings: { save_default_payment_method: 'on_subscription' },
    expand: ['latest_invoice.payment_intent'],
  }); */