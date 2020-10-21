class Employee {
  constructor(name, birthDate, salary, position) {
    this._name = name;
    this._birthDate = new Date(birthDate);
    this._salary = salary;
    this._position = position;
  }

  info() {
    console.log(`${this._name} works as ${this._position} \n`);
  }
}

module.exports = Employee;
