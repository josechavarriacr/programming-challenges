const data = {
    1: 'I',
    5: 'V',
    10: 'X'
}

const getDecimals = (num) => {
    let result = '';
    switch (true) {
        case num < 4:
            console.log('1 - 3');
            for (let index = 0; index < num; index++) {
              result += data[1];
            }
            data[num] = result;
            break;
        case num === 4:
            console.log('4');
            result += data[1] += data[5];
            data[num] = result;
            break;
        case num < 9 && num > 5:
            console.log('8 - 5');
            let preResult = '';
            for (let index = 5; index < num; index++) {
                preResult += data[1];
              }            
            result += data[5] += preResult; 
            data[num] = result;
            break;
        case num === 9:
            console.log('9');
            result += data[1] += data[10];
            data[num] = result;
            break;
        default:
            break;
    }
    return data;
}

const getHundreds = (num) => {
    const lastOne = parseInt(num.toString().split('').pop(), 10);
    const simpleValue = (num - lastOne);
    let result = '';

    switch (true) {
        case num <= 10:
            getDecimals(num);
            break;
        case num < 40 && num > 10:
            let lessForty = '';
            for (let index = 10; index <= simpleValue; index+=10) {                
              lessForty += getDecimals(10)[10];
            }
            const 
            result = (lessForty += getDecimals(lastOne)[lastOne]);
            data[num] = result;
            break; 
        case num === 50:
            break;
    
        default:
            break;
    }
    return data;
}

const main = (num) => {
    const hundreds = getHundreds(num);
    console.log('dictionary', hundreds[num]);
}

main(3);
