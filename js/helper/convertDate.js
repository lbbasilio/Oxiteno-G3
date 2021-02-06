const moment = require('moment');

module.exports = async (date) => {
    var dateFormat = await moment(date).format('DD/MM/YYYY HH:mm:ss');
    return dateFormat;
}