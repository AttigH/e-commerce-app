import express from "express";

import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const MONGODB_URL =
  "mongodb+srv://dbShopy:9KwlWAT7FKoKhspW@cluster0.ihcw0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDb connected :=)"))

  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
// app.get("/api/product/:id", (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product not Found " });
//   }
// });
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
