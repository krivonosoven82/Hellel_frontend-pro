//Пример: 1
for (var i = 0; i < 10; i++) {
    setTimeout(function(j) {
        console.log(j);
    }, 10, i);
}

//Пример: 2
for (var i = 0; i < 10; i++){
    setTimeout(function(){
        console.log(this);
    }.bind(i), 10);

}