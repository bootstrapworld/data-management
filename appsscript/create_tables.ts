// A function to check if a sheet exists,
// if not to create that sheet.

const tables = [
    "users",
    "events",
    "attendance",
    "enrollment",
    "class",
    "implementation",
    "coaching",
    "user_curriculum"
];
console.log(tables.length);

const user = [
    "id",                  //SERIAL PRIMARY KEY, --TEXT
    "name_first",          //TEX -- the legal first name, i.e. would appear on DL
    "name_last",           //TEXT
    "name_first_alt",      //TEXT, -- usually shortened nick name, e.g. David -> Dave
    "name_last_alt",       //TEXT, -- usually for married name change
    "email_personal",      //TEXT, -- email that persists after job change
    "email_professional",  //TEXT, -- email that changes with job change
    "home_location",       //INTEGER REFERENCES "location",
    "home_phone",          //varchar(15),
    "cell_phone",          //varchar(15)
    "work_phone",          //varchar(15)
    "user_gender",         //     GENDER
    "user_race",            //     RACE
    "user_employer"        //TEXT
];

// consumes an array of table names, creates a new sheet if the given sheet name does not exist 
const createSheets = function(t) {
    var ss = SpreadsheetApp.getActive();
    var sheets = ss.getSheets();
    var sheetNames = [];
    sheets.forEach((v) => sheetNames.push(v.getName()));
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

createSheets(tables);

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
