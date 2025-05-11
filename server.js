const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const { router } = require("./routes");
console.log("routes: ", router);

app.use("/", router);
// app.use('/', (req, res) => {
//     res.send('test')
// })

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
