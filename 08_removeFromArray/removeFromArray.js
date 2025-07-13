const removeFromArray = function(arr,...num) {
    const newArr= arr.filter((item)=>{
        return !num.includes(item);
    })
    
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
