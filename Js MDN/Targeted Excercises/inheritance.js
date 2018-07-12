function Person(first, last, age, gender, interests) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.greeting = function() {
    console.log('Hi! I\'m ' + this.first + '.');
};

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender. interests);
    this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;


Teacher.prototype.getName = function(){
    console.log(`${this.first} ${this.last}`);
}

var teach = new Teacher('Junaid', 'Zaki', 24, 'M', 'playing');

teach.greeting();
console.log(Person.prototype);