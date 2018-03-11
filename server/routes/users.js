import bcrypt from 'bcrypt';
import express from 'express'
import { db } from '../db/index'
const router = express.Router();


// router.get('/register', (req, res) => {
//   res.send({
//     "route": "get('/register')",
//     "result": "good",
//   })
// })

router.get('/list', (req, res) => {
  let connection
  db().then((conn) => {
    connection = conn
    return conn.query("SELECT * FROM users")
  }).then((result) => {
    console.log(result)
    connection.end
    res.send(JSON.stringify(result))
  }).catch((err) => {
    console.log('ERROR', err)
  })
})

router.post('/register', (req, res) => {
  console.log('users/register')
  console.log(req.body)
  const { firstName, lastName, email, password } = req.body
  console.log(`${firstName}, ${lastName}, ${email}, ${password}`)
  let connection
  db().then((conn) => {
    connection = conn
    bcrypt.hash(password, 10).then((hash) => {
      console.log('** hash **', hash)
      return conn.query("INSERT INTO users SET ?", {firstName: firstName, lastName: lastName, email: email, password: hash})
    }).then((result) => {
      console.log('result', result)
      console.log('inserId', result.insertId)
      connection.end
      res.send(JSON.stringify(result))
    }).catch((err) => {
      console.log('ERROR', err)
    })
  })
})
router.post('/signin', function(req, res) {
  console.log('users/signin')
  console.log(req.body)
  res.send(JSON.stringify({
    route: "post('/signin')",
    result: 'good',
  }))
})
router.get('/logout', (req, res) => {
  // req.session.destroy();
  //req.logout();
  // res.redirect('/');
  console.log('users/logout')
  res.send(JSON.stringify({
    route: "get('/logout')",
    result: 'good',
  }))
});
module.exports = router
