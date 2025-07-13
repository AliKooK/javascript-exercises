const sumAll = function(a,b) {
    let sum = 0;

    if (a<b && a>=0 &&  Number.isInteger(a)&& Number.isInteger(b)){
    for (let i = a;i<=b;i++){
        sum += i;
    }
     return sum;
}
else if (a>b && b>=0 && Number.isInteger(a)&& Number.isInteger(b)){
    for (let i = b;i<=a;i++){
        sum += i;
    }
 return sum;
}else
    return 'ERROR';

};

// Do not edit below this line
module.exports = sumAll;
