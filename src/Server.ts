const express = require("express");
const routes = require("./routes/groupDataRoute");

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
