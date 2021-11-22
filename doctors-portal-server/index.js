const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6kyz8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("banner_feature");
    const featuresCollection = database.collection("features");
    const servicesCollection = database.collection("services");

    app.get("/features", async (req, res) => {
      const cursor = featuresCollection.find({});
      const features = await cursor.toArray();
      res.send(features);
    });

    app.get("/services", async (req, res) => {
      const cursor = servicesCollection.find({});
      const services = await cursor.toArray();
      res.send(services);
    });
  } finally {
    //   await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("doctors portal server running");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
