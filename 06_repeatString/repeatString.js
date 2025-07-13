const repeatString = function(string,nUms) {
    let sen ='';
    if(nUms >= 0){
    for(let i =0 ; i < nUms ; i++)
        sen = sen + string;
    return sen;
}
else return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
