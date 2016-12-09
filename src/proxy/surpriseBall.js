var models = require('../models');
var SurpriseBall = models.SurpriseBall;

exports.insert = function (id, create_at, reds, blue, callback) {
    var spb = new SurpriseBall();
    spb.id = id;
    spb.create_at = create_at;
    spb.reds = reds;
    spb.blue = blue;
    spb.save(function (err) {
        if (callback) {
            callback(err, spb);
        }
    });
}

exports.getList = function (callback) {
    return SurpriseBall.find(callback);
}

/**
 * 根据年份获取结果列表
 * Callback:
 * - err, 数据库异常
 * - list, 用户列表
 * @param {String} year 年份
 * @param {Function} callback 回调函数
 */
exports.getListByYear = function (year, callback) {
    var reg = new RegExp('^' + year);
    SurpriseBall.find({ create_at: reg }).sort({ create_at: -1 }).exec(callback);
}

exports.insertList = function (list, callback) {
    list = list || [];
    console.log(list.length);
    SurpriseBall.remove({});
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        var spb = new SurpriseBall();
        spb.format(list[i]);
        spb.save();
        count += 1;
        if (count === list.length) {
            callback();
        }
    }
}