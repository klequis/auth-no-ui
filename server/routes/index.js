import express from 'express';
const router = express.Router();
// import { isAuthenticated } from '../passport/util'

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('<h1>index/get/</h1>')
});
// router.get('/protected', isAuthenticated,  (req, res, next) => {
//   res.render('protected');
// })


module.exports = router;
