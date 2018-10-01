
// node_moduleディレクトリ内のpostgre接続用モジュールを読み込み 
var client = require('./pgcon');
var moment = require('moment');

// 
var createdAt = moment().format('YYYY-MM-DD HH:mm:ss'); 

const sql = "INSERT INTO WORKERS"+
            "(DFA_NUM, SYSTEM_MAKE_DT, SYSTEM_UPDATE_DT, NAME, BIRTH_YMD, SEIBETSU, ADDRESS, COUNTRY_CD)"+
            "VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";

const values = [
    123123123
    ,createdAt
    ,createdAt
    ,'Tarou Yamada'
    ,'1970-04-20'
    ,'0'
    ,'住所未定'
    ,'JPN'
    ];

client.query(sql, values)
    .then(result => {
        console.log(result)
        client.end()
    })
    .catch(e => {
        console.error(e.stack)
        client.end()
    });
    