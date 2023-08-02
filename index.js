import { addGreetings, getGreetings } from "./db.js";
import express from "express";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// get all the greetings
app.get("/api/greetings", async (req, res) => {
  const greetings = await getGreetings();
  console.log(greetings);
  res.json(greetings);
});

app.post("/api/greetings", async (req, res) => {
  const language = req.body.language;
  const greeting = req.body.greeting; 
  await addGreetings(language, greeting);
  res.json({ status: "success", message: "Added greeting for " + language });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
