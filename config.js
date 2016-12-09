/**
 * 2016-12-08
 * 配置信息
 */
var path = require('path');

var config = {
    port: 3000, //项目端口号
    src: path.join(__dirname, 'src'),
    connectionStr: 'mongodb://127.0.0.1:27017/surprise_ball'    //数据库连接
}

module.exports = config;