const userFields
    = [
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

const User = (function() {
    function User(id,                  //SERIAL PRIMARY KEY, --TEXT
        name_first,          //TEX -- the legal first name, i.e. would appear on DL
        name_last,           //TEXT
        name_first_alt,      //TEXT, -- usually shortened nick name, e.g. David -> Dave
        name_last_alt,       //TEXT, -- usually for married name change
        email_personal,      //TEXT, -- email that persists after job change
        email_professional,  //TEXT, -- email that changes with job change
        home_location,       //INTEGER REFERENCES location,
        home_phone,          //varchar(15),
        cell_phone,          //varchar(15)
        work_phone,          //varchar(15)
        user_gender,         //     GENDER
        user_race,            //     RACE
        user_employer) {      //TEXT) 
        this.id = id,                  //SERIAL PRIMARY KEY, --TEXT
            this.name_first = name_first,          //TEX -- the legal first name, i.e. would appear on DL
            this.name_last = name_last,           //TEXT
            this.name_first_alt = name_first_alt,      //TEXT, -- usually shortened nick name, e.g. David -> Dave
            this.name_last_alt = name_last_alt,       //TEXT, -- usually for married name change
            this.email_personal = email_personal,      //TEXT, -- email that persists after job change
            this.email_professional = email_professional,  //TEXT, -- email that changes with job change
            this.home_location = home_location,       //INTEGER REFERENCES location,
            this.home_phone = home_phone,          //varchar(15),
            this.cell_phone = cell_phone,          //varchar(15)
            this.work_phone = work_phone,          //varchar(15)
            this.user_gender = user_gender,         //     GENDER
            this.user_race = user_race,            //     RACE
            this.user_employer = user_employer        //TEXT) 
    }
    return User;
})();

function test() {
    console.log(Object.getOwnPropertyNames(new User()));
}

// create element from array https://stackoverflow.com/a/3231500
