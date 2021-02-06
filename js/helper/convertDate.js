const moment = require('moment');

module.exports = (date) => {
    var dateFormat = moment(date, 'x').format('DD/MM/YYYY HH:mm:ss');
    return dateFormat;
}