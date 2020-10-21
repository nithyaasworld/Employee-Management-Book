const Employee = require("./employee");

class EmployeeBook {
  constructor(name, dob, salary, position) {
    this._employeeList = [];
  }

  printEmployees() {
    //console.log(this._employeeList);
    if (this._employeeList.length === 0) {
      console.log(" \n No employees in the employee book \n");
    } else {
      //console.log("Total Count: ", this._employeeList.length);
      console.log();
      this._employeeList.forEach((emp) => emp.info());
    }
  }

  addEmployee(emp) {
    if (emp instanceof Employee) {
      this._employeeList.push(emp);
    }
  }

  removeEmployee(emp) {
    const indexOfemp = this._employeeList.findIndex(
      (item) => item._name == emp
    );
    if (indexOfemp == -1) {
      console.log("\n Employee Not Found");
    } else {
      this._employeeList.splice(indexOfemp, 1);
      console.log(`\n Employee ${emp} is removed \n`);
      //console.log(this._employeeList);
    }
  }

  findEmployee(emp) {
    if (this._employeeList.find((item) => item._name == emp)) {
      console.log("\n Employee Found: \n");
      this._employeeList.find((item) => item._name == emp).info(); //To Print the employee's info
    } else {
      console.log("\n Employee Not Found");
    }
  }
}

module.exports = EmployeeBook;
