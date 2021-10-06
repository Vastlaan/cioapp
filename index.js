const express = require("express");
const { json } = require("body-parser");
const path = require("path");

const app = express();
app.use(json());

// Check if in production and
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    return res.sendFile(
      path.resolve(__dirname, "client", "build", "index.html")
    );
  });
}

const PORT = process.env.PORT || 5777;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
