let maths = {
    x: 10,
    y: 5,

    sum: function () {
        console.log(this.x + this.y);
        return this;
    },
    minus: function(){
         console.log(this.x - this.y);
         return this;
    },
    minus: function(){
        console.log(this.x - this.y);
        return this;
    },
    multiplay: function(){
        console.log(this.x * this.y);
        return this;
    },
    showResult: function(){
        return this;
    }

};

maths.sum().sum().minus().multiplay().showResult();
