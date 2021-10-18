const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "c970985d",
  apiSecret: "5G00QbKRsc5Q8Utt"
})
const from = "Vonage APIs"
const to = "918939262613"
const text = 'Appointment booked Successfully'

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