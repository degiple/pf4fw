
// node_moduleディレクトリ内のpostgre接続用モジュールを読み込み 
const { Client } = require('pg')

// 接続クライアントの設定
const client = new Client({
    user: 'master',
    host: 'postgre-group-a.cgibi6qszwgm.ap-southeast-1.rds.amazonaws.com',
    database: 'dev',
    password: 'password',
    port: 5432,
})

// 接続
client.connect()

// エクスポート
module.exports = client;
