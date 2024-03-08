
const User = (function() {
    function User(
        id: number,                  //SERIAL PRIMARY KEY, --TEXT
        name_first: string,          //TEXT -- the legal first name, i.e. would appear on DL
        name_last: string,           //TEXT
        name_first_alt: string,      //TEXT, -- usually shortened nick name, e.g. David -> Dave
        name_last_alt: string,       //TEXT, -- usually for married name change
        email_personal: string,      //TEXT, -- email that persists after job change
        email_professional: string,  //TEXT -- email that changes with job change
        home_location: string,       //INTEGER REFERENCES location
        home_phone: number,          //varchar15
        cell_phone: number,          //varchar15
        work_phone: number,          //varchar15
        user_gender: string,         //     GENDER
        user_race: string,            //     RACE
        user_employer: string) {
        this.id = id,
            this.name_first = name_first,
            this.name_last = name_last,
            this.name_first_alt = name_first_alt,
            this.name_last_alt = name_last_alt,
            this.email_personal = email_personal,
            this.email_professional = email_professional,
            this.home_location = home_location,
            this.home_phone = home_phone,
            this.cell_phone = cell_phone,
            this.work_phone = work_phone,
            this.user_gender = user_gender,
            this.user_race = user_race,
            this.user_employer = user_employer
    }
    return User;
})();

function test() {
    console.log(Object.getOwnPropertyNames(new User));
}

function userFields() {
    //    var fieldsArr = Object.getOwnPropertyNames(new User);
    var parsed = ""
    for (var property in new User) {
        parsed += property + ', ' + '\n';
    }
    console.log(parsed);
    return parsed;
    //    return fieldsArr;
}

// create element from array https://stackoverflow.com/a/3231500
