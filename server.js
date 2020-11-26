const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const port = 3000;
const cors = require('cors');

app.use(cors());
const jsonParser = bodyParser.json();

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});

app.post('/edit', jsonParser, (request, response) => {
  const requestedUser = request.body;
  fs.readFile('./src/assets/db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const users = JSON.parse(data); //now it an object
      const userExists = users.some(
        (user) => user.email === requestedUser.email
      );
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
