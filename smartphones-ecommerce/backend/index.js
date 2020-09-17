// import config from './config'
// import dotenv from 'dotenv'
// import mongoose from 'mongoose'
// import userRoute from
    
const config = require("./config");
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoute = require("./routes/userRoute");
const cors = require("cors");
const express = require("express");

dotenv.config()
const mongodbUrl = config.MONGODB_URL
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(err => console.log(err.reason))


//Payment Gateway
const stripe = require("stripe")(
  "sk_test_51HSKkOGiY20xWn7qTUteeXOsyjrkENIjCwgsJ2a58lBr0dI4TqTx9FZAxIpMqz66OnANpgcI3PyR5mlgW3V8wGvH00O8Mpl441"
);
;
const uuid = require("uuid/v4");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoute)
app.get("/", (req, res) => {
  res.send("running");
});

app.post("/pagamento", (req, res) => {

    const { product, token } = req.body;
    console.log('PRODUCT', product)
    console.log("PRODUCT", product, preco);
    const idempotencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: product.name,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
            
        }, { idempotencyKey })
        
    }).then(result => res.status(200).json(result))
      .catch(err => console.log(err))
})
//Payment ENDS

//listen
app.listen(3001, () => console.log("3001 PORT"));
