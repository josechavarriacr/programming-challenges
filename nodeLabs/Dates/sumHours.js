
const moment = require('moment');

const date = '2020-01-01 07:07:15';
const hour = 2;

function getNextAttention(date, hours) {
    //date 2017-04-14 07:07:15 
    const dateFormat = 'YYYY-MM-DD hh:mm:ss'
    const nextAttention = moment(date).add(hour, 'hours').format(dateFormat)
    console.log(nextAttention)
    return nextAttention;
}

getNextAttention(date, hour);