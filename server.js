const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const port = 3000;
const cors = require('cors');
const { request } = require('http');

app.use(cors());
const jsonParser = bodyParser.json();

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});

app.post('/edit', jsonParser, (request, response) => {
  // const requestedUser = request.body;
  fs.readFile('./src/assets/db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const users = JSON.parse(data); //now it an object
      // const userExists = users.some(
      //   (user) => user.email === requestedUser.email
      // );
      if (users) users.users.push(request.body);
      json = JSON.stringify(users); //convert it back to json
      fs.writeFile('./src/assets/db.json', json, 'utf8', (err) => {
        if (err) {
          console.log(err);
        }
      }); // write it back
    }
  });
  response.send('OK');
});

app.get('/users', (request, response) => {
  console.log(request);
  let users = [];
  fs.readFile('./src/assets/db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      users = JSON.parse(data).users;
      response.send(users);
    }
  });
});

app.post('/user', jsonParser, (request, response) => {
  console.log(request);
  fs.readFile('./src/assets/db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      user = JSON.parse(data).users.filter((user) => {
        return user.email == 'test@mail' && user.pass === request.body.pass;
      });
      response.send(user);
    }
  });
});

app.get('/pastSimple', (request, response) => {
  console.log(request);
  let pastSimple = [];
  fs.readFile('./src/assets/tenses.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      pastSimple = JSON.parse(data).pastSimple;
      response.send(pastSimple);
    }
  });
});
