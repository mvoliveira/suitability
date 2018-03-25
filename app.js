const express = require('express')
const app = express()

app.set('port', 5000)

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/',(req, res) => {
  res.render('./index.html')
})

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
