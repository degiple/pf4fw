var express = require('express');
var router = express.Router();
var moment = require('moment');

/* postgre client Config */
var client = require('../pgcon');

/* test country list */
router.get('/', function(req, res) {
  
  // SQL文の生成
  var sql = 'SELECT * FROM WORKERS';
  // DBに取り合わせ→回答受領
  client.query(sql, function(err, result) {
  // viewへ移動
  res.render('worker',
    { title: '外国人材一覧',
      workerList: result.rows }
  );
    
  });
});

/* country list */
router.get('/list', function(req, res) {

  // SQL文の生成
  var sql = 'SELECT * FROM WORKERS';
  
  // クエリ実行
  client.query(sql)
    .then(result => {
      console.log(result.rows[0])
      // viewへ移動
      res.render('worker', {
        title: '外国人材一覧',
        workerList: result.rows
      });
    //client.end()
    })
    .catch(e => {
      console.error(e.stack)
      res.json({error: 'error!!!'})
    //client.end()
    });
  
});

/* test api country list */
router.get('/api', function(req, res) {

  // SQL文の生成
  var sql = 'SELECT * FROM WORKERS';
  
  // クエリ実行
  client.query(sql)
  .then(result => {
    console.log(result.rows[0])
    res.json(result.rows)
    client.end()
  })
  .catch(e => {
    console.error(e.stack)
    res.json({error: 'error!!!'})
    client.end()
  })
  
});

//
router.get('/register', function(req, res) {
  res.render('register');
});

router.post('/register', function(req, res) {
  
});


module.exports = router;