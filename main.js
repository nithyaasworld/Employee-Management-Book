const EmployeeBook = require("./employee_book");
const Employee = require("./employee");
const prompt = require("prompt");

prompt.start();

function showMenu(employeeBook) {
  console.log(
    "Welcome to Employee Management software. Please select one of the options below"
  );
  console.log("1. Show list of employees.");
  console.log("2. Find employee.");
  console.log("3. Add new employee");
  console.log("4. Remove Employee");
  console.log("5. Quit.");

  console.log("\nSelect menu option. Type 1-5:\n");

  prompt.get(["options"], function (err, result) {
    switch (result.options) {
      case "1":
        employeeBook.printEmployees();
        showMenu(employeeBook);
        break;
      case "2":
        prompt.get(["name"], (err, result) => {
          const { name } = result;
          employeeBook.findEmployee(name);
          showMenu(employeeBook);
        });
        break;
      case "3":
        prompt.get(["name", "dob", "salary", "role"], (err, result) => {
          const { name, dob, salary, role } = result;
          const newEmployee = new Employee(name, dob, salary, role);
          employeeBook.addEmployee(newEmployee);
          showMenu(employeeBook);
        });
        break;
      case "4":
        prompt.get(["name"], (err, result) => {
          const { name } = result;
          employeeBook.removeEmployee(name);
          showMenu(employeeBook);
        });
        break;
      default:
        break;
    }
  });
}
function main() {
  const employeeBook = new EmployeeBook();
  showMenu(employeeBook);
}

main();
