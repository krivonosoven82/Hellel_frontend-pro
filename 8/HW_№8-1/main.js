let students = {
    'Ivanov': [2000, 2004],
    'Petrov': [2000, 2004],
    'Trigubov': [2001, 2005],
    'Foonticov': [2001, 2005],
    'Seregin': [2001, 2005],
    'Garbusov': [2002, 2006],
    'Semenov': [2002, 2006],
    'Alexeev': [2002, 2006],
    'Kravtsov': [2003, 2007],
    'Futin': [2003, 2007],
    'Pole': [2004, 2008],
    'Zemko': [2004, 2008],
    'Kyvalov': [2004, 2008],
    'Lyashko': [2005, 2009],
    'Devochkin': [2005, 2009],
};


function showName (start, end){
    let key;
    for( key in students){
        if(students[key][0] >= start || students[key][1] <= end){
           console.log(key);
        }
    }
}

showName(2000, 2009);







