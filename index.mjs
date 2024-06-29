import * as zod from "zod";
import express from "express";

const app = express();

const stringSchema = zod.string().default("Hello World");

const result = stringSchema.safeParse("Hello");

app.get("/", (req, res) => {
  if (result.success) {
    res.send("Zod Working");
  } else {
    res.send("Zod not Working");
  }
});

app.listen(3000, () => {
  console.log("Server is Running");
});
