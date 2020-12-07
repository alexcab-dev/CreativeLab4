
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = 3000;

mongoose.connect('mongodb://localhost:27017/empath', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const personSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    creditLimit: String,
    annualFee: String,
    lateFee: String,
    apr: String,
});


const Person = mongoose.model('Person', personSchema);

  app.post('/api/customers', async (req,res) => {
      console.log(req.body);
      const person = new Person({
          name: req.body.name,
          address: req.body.address,
          phone: req.body.phone,
          creditLimit: req.body.creditLimit,
          annualFee: req.body.annualFee,
          lateFee: req.body.lateFee,
          apr: req.body.apr

      });
      try {
          await person.save();
          res.send(person);
      } catch (error){
          res.sendStatus(500);
      }
  });

  app.get('/api/customers', async (req, res) => {
      try {
          let persons = await Person.find();
          res.send(persons);
      } catch(error) {
          res.sendStatus(500);
      }
  });

  app.delete('/api/customers/:id', async (req,res) => {
      try{
          await Person.deleteOne({
              _id: req.params.id,
          });
          res.sendStatus(200);
      } catch (error) {
          res.sendStatus(500);
      }
  });

  app.put('/api/customers/:id', async (req, res) => {
      try {
          let person = await Person.findOne({
              _id: req.params.id
          });
          person.name = req.body.name;
          person.address = req.body.address;
          person.phone = req.body.phone;
          person.creditLimit = req.body.creditLimit;
          person.annualFee = req.body.annualFee;
          person.lateFee = req.body.lateFee;
          person.apr = req.body.apr;
          await person.save();
          res.send(person);
      }catch(error) {
          res.sendStatus(500);
      }
  });

app.listen(port, () => {
    console.log('Running..');
});