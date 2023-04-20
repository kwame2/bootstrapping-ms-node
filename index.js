const express = require("express")

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  res.send("Bonjour Grand Popo !!!!")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port: ${PORT}`)
})
