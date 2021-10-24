const express = require('express');
const cors = require('cors');
const Vonage = require('@vonage/server-sdk')

const app = express();
const port = process.env.API_PORT || 3001;
app.use(cors());
const server = app.listen(port, () => console.log(`API Server listening on port ${port}`));
process.on('SIGINT', () => server.close());

const vonage = new Vonage({
    apiKey: "c970985d",
    apiSecret: "5G00QbKRsc5Q8Utt"
  })

app.get('/', (req, res) => {
  res.send("App started")
}
)
app.get('/message', (req, res) => {
  var to = req.query.to;
  var from = "Vonage APIs";
  var text = "Your appointment is successfully booked";
  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
  res.send({
    msg: 'Your message was sent'
  });
});
