const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const jsonParser = express.json();
const port = 3000;

app.use(cors());

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});

app.post('/add-user', jsonParser, (request, response) => {
  const requestedUser = request.body;

  if (!requestedUser) {
    response.status(400).send('Отсутствуют данные о пользователе');
  } else {
    fs.readFile('./src/assets/db.json', 'utf8', (err, data) => {
      if (err) {
        response.status(500).send(err);
      } else {
        try {
          const db = JSON.parse(data);
          const users = db.users;
          const userExists = users.some(
            (user) => user.email === requestedUser.email
          );

          if (userExists) {
            response.status(400).send('Такой пользователь существует');
          } else {
            users.push(requestedUser);
            json = JSON.stringify(db);
            fs.writeFile('./src/assets/db.json', json, 'utf8', (err) => {
              if (err) {
                response.status(500).send(err);
              }
              response.status(200).send('OK');
            });
          }
        } catch (err) {
          response.status(500).send(err);
        }
      }
    });
  }
});

app.get('/users', (request, response) => {
  fs.readFile('./src/assets/db.json', 'utf8', (err, data) => {
    if (err) {
      response.status(500).send(err);
    } else {
      try {
        const db = JSON.parse(data);
        const users = db.users;
        response.send(users);
      } catch (err) {
        response.status(500).send(err);
      }
    }
  });
});

app.post('/login', jsonParser, (request, response) => {
  const requestedUser = request.body;
  fs.readFile('./src/assets/db.json', 'utf8', (err, data) => {
    if (err) {
      response.status(500).send(err);
    } else {
      try {
        const db = JSON.parse(data);
        const users = db.users;

        if (users.length) {
          const user = users.find(
            (user) =>
              user.email === requestedUser.email &&
              user.pass === requestedUser.pass
          );
          if (user) {
            response.status(200).send(JSON.stringify(user));
          } else {
            response
              .status(400)
              .send(
                'Такого пользователя не существует. Пожауйста проверьте еще раз введенные Вами данные!'
              );
          }
        } else {
          response.status(400).send('Список пользователей пуст');
        }
      } catch (err) {
        response.status(500).send(err);
      }
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
