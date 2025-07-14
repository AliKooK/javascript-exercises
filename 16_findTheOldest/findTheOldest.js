const getAge =(birth,death) => {
    if(!death)
        return new Date().getFullYear() - birth;
    else
    return death - birth;
}

const findTheOldest = function(people) {

    return people.reduce((oldest,current) =>{
        const oldAge = getAge(oldest.yearOfBirth , oldest.yearOfDeath);
        const curAge = getAge(current.yearOfBirth , current.yearOfDeath);
        return oldAge > curAge ? oldest : current;
    });
        

};


// Do not edit below this line
module.exports = findTheOldest;
