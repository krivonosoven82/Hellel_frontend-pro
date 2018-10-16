let startYear = 1989;
let lastYear = 2002;

let studentsDB = [
    id1 = {
        name: 'Ivanov',
        start: 2000,
        finish: 2005
    },
    id2 = {
        name: 'Petrov',
        start: 2000,
        finish: 2005
    },
    id3 = {
        name: 'Trigubov',
        start: 2001,
        finish: 2006
    },
    id4 = {
        name: 'Foonticov',
        start: 2001,
        finish: 2006
    },
    id5 = {
        name: 'Seregin',
        start: 2002,
        finish: 2007
    },
    id6 = {
        name: 'Garbusov',
        start: 2002,
        finish: 2007
    },
    id7 = {
        name: 'Semenov',
        start: 2002,
        finish: 2007
    },
    id8 = {
        name: 'Alexeev',
        start: 2002,
        finish: 2007
    },
    id9 = {
        name: 'Kravtsov',
        start: 2003,
        finish: 2008
    },
    id10 = {
        name: 'Zemko',
        start: 2003,
        finish: 2008
    },
    id10 = {
        name: 'Kyvalov',
        start: 2004,
        finish: 2009
    },
    id10 = {
        name: 'Lyashko',
        start: 2004,
        finish: 2009
    },
    id10 = {
        name: 'Devochkin',
        start: 2005,
        finish: 2010
    }
];

function showStudents (){
    let result = 0;
    let i;
    for(i=0; i<this.length; i++){
        if ((this[i].start >= startYear && this[i].start <= lastYear) || (this[i].finish >= startYear && this[i].finish <= lastYear)){
            console.log(`${this[i].name}`);
            result = result + 1;}
        else{
            result = result;
            console.log(`В этот период училось ${result} человек`)
            break;
        }
    }
}
showStudents.call(studentsDB);







