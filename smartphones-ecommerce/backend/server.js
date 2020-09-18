const cors = require("cors");
const express = require("express");

//Payment Gateway
const stripe = require("stripe")(
  "sk_test_51HSKkOGiY20xWn7qTUteeXOsyjrkENIjCwgsJ2a58lBr0dI4TqTx9FZAxIpMqz66OnANpgcI3PyR5mlgW3V8wGvH00O8Mpl441"
);

const uuid = require("uuid/v4");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("running");
});

app.post("/payment", (req, res) => {
  const { product, token } = req.body;
  console.log("PRODUCT", product);
  const idempotencyKey = uuid();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.preco * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: product.name,
        },
        { idempotencyKey }
      );
    })
    .then((result) => res.status(200).send({ success: result }))
    .catch((err) => console.log(err));
});
//Payment ENDS

//listen
app.listen(3001, () => console.log("3001 PORT"));
