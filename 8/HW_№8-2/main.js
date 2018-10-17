let startYear = 1990;
let lastYear = 2004;

const studentsDB = [
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

    function getYearMaxStudents() {
        let numberOfStudents = [];
        let maxStudents = 0;
        let maxYear = [];
        let count = 0;
        let indexDb = 0;
        let key;
        let i;

        if (startYear > lastYear) {
            return console.log(`Неправильный диапазон. Дата начала не может быть больше даты окончания.`);
        }

        for (startYear; startYear <= lastYear; startYear++) {
            numberOfStudents[indexDb] = [];
            numberOfStudents[indexDb][startYear] = 0;
            for (i = 0; i < studentsDB.length; i++) {
                if (startYear >= studentsDB[i].start && startYear <= studentsDB[i].finish) {
                    numberOfStudents[indexDb][startYear]++;
                }
            }

            if (numberOfStudents[indexDb][startYear] > maxStudents) {
                maxStudents = numberOfStudents[indexDb][startYear];
            }

            indexDb++;
        }

        if (!maxStudents) {
            return console.log(`За данный период студентов не найдено`);
        }

        for (i = 0; i < numberOfStudents.length; i++) {
            for (key in numberOfStudents[i]) {
                if (maxStudents == numberOfStudents[i][key]) {
                    maxYear[count] = key;
                    count++;
                }
            }
        }

        return console.log(`Максимальное количество студентов училось в ${maxYear.join(', ')} году.`);
    }

getYearMaxStudents.call(studentsDB);




