// A function to check if a sheet exists,
// if not to create that sheet.



// consumes an array of table names, creates a new sheet if the given sheet name does not exist 
const createSheets = function(t) {
    var ss = SpreadsheetApp.getActive();
    var sheets = ss.getSheets();
    var tables = [
        "users",
        "events",
        "attendance",
        "enrollment",
        "class",
        "implementation",
        "coaching",
        "user_curriculum"];

    var sheetNames = [];
    sheets.forEach((sheet) => sheetNames.push(sheet.getName()));
    console.log(sheetNames);

    for (var i = 0; i < (t.length - 1); i++) {
        if (sheetNames.includes(t[i])) {
            console.log(`${t[i]} already there`);
        } else {
            ss.insertSheet(t[i]);
        }
    }
}

const dropSheets = function() {
    var ss = SpreadsheetApp.getActive();
    var sheets = ss.getSheets();
    sheets.forEach((v) => ss.deleteSheet(v));
}

class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    getSalary(): number {
        return 10000;
    }
}
