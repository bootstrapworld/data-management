// Compiled using @google/clasp 2.4.2 (TypeScript 4.9.5)
// A function to check if a sheet exists,
// if not to create that sheet.
var user = [
    "id",
    "name_first",
    "name_last",
    "name_first_alt",
    "name_last_alt",
    "email_personal",
    "email_professional",
    "home_location",
    "home_phone",
    "cell_phone",
    "work_phone",
    "user_gender",
    "user_race",
    "user_employer" //TEXT
];
console.log(user[0]);
var create_sheets = function () {
};
var Employee = /** @class */ 
(function () {
    function Employee(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());


var newEmployee = new Employee(1234, "eric");
console.log(newEmployee.empName);
console.log(newEmployee.getSalary());