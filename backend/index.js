const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dateFns = require("date-fns");
const schedule = require( 'node-schedule')

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let birthdayDatabase = [];

schedule.scheduleJob('0 0 * * *', () => birthdayDatabase.map((record) => {
  if(dateFns.getDayOfYear(new Date()) === record.dayOfYear){
    record.age++;
    return record;
  }
  return record;
})
) // run everyday at midnight to update user age on birthday


app.post("/birthday", (req, res) => {
  const {name, birthdate} = req.body;
  let user = {name, birthdate};
  user.age = dateFns.differenceInYears(
    new Date(),
    new Date(birthdate)
  )
  user.dayOfYear = dateFns.getDayOfYear(birthdate);
  
  let sharedBirthdays = [];
  let sharedAge = [];
  birthdayDatabase.map((record) => {
    if(user.dayOfYear === record.dayOfYear){
      sharedBirthdays.push(record);
    }
    if(user.age === record.age){
      sharedAge.push(record);
    }
  })
  birthdayDatabase.push(user);
  res.send({user, sharedAge, sharedBirthdays}, 200);

});

app.get("/birthdays", (req, res) => {
  res.send(birthdayDatabase, 200);
});

app.listen(7555, () => {
  console.log("Server running on http://localhost:7555");
});
