export default class HolbertonCourse {
constructor(name, length, students) {
this._name = name;
this._length = length;
this._students = students;
}

get name() {
return this._name;
}

get length() {
return this._length;
}

get students() {
return this._students:
}

set name(nameN) {
if (typeof nameN !== 'string') {throw new TypeError('Name must be a string');}
this._name = nameN;
}

set length(lengthL) {
if (typeof lengthL !=='number') {throw new TypeError('Length must be a number');}
this._length = lengthL;
}

set students(studentsS) {
if (!Array.isArray(studentsS)) { throw new TypeError('Students must be an array'); }
this._students = studentsS;
  }
}

