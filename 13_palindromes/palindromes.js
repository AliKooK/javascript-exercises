const palindromes = function (str) {  
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const arr = cleaned.split('');
 
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== arr[arr.length-1-i]){
            return false;
        }

    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
