const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000

// MongoDB Connection
mongoose
  .connect('mongodb://localhost:27017/emplyees')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

  app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});
/* ---------------- CREATE ---------------- */
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ---------------- READ ---------------- */
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

/* ---------------- UPDATE ---------------- */
app.put("/users/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedUser);
});

/* ---------------- DELETE ---------------- */
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User Deleted Successfully" });
});

 app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
