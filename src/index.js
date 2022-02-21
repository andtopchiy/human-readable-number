module.exports = function toReadable (number)  {
    number = number.toString();
    let result ='';
    let res =[];
    let hundread ='';
    let ten ='';
    let one ='';
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven','eight','nine'];
    let tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let elevens = ['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    switch (number.length) {
        case 3:
            hundread = ones[number[number.length-3]] +' hundred';
        case 2:
            if (number[number.length-2] != 0) {
                ten = tens[number[number.length-2]];
            }
        case 1:
            if (number[number.length-1] != 0) {
                one = ones[number[number.length-1]];
            }
            if (number==0) {
                return 'zero'
            }
    }
    if (hundread != '') {
        res.push(hundread)
    }
    if (ten != '') {
        res.push(ten)
    }
    if (one != '') {
        res.push(one)
    }
    result = res.join(' ');
    if (number[number.length-2]==1 && number[number.length-1]!=0) {
        if (hundread == '') {
            result = elevens[number[number.length-1]];
        }
        else {
            result = hundread + ' ' + elevens[number[number.length-1]];
        }
    }
    return result;

}
