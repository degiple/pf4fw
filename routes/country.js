var express = require('express');
var router = express.Router();
//var moment = require('moment');

/* postgre client Config */
var client = require('../pgcon');

/* test country list */
router.get('/list', function(req, res) {
  
  console.log('country.js');
  
  // SQL文の生成
  var sql = 'SELECT * FROM COUNTRIES';
  
    // クエリ実行
  client.query(sql)
    .then(result => {
      console.log(result.rows[0])
      // viewへ移動
      res.render('country', 
       {title: '国一覧',
        countryList: result.rows}
      );
    //client.end()
    })
    .catch(e => {
      console.error(e.stack)
      res.json({error: 'error!!!'})
    //client.end()
    });
  
});

module.exports = router;