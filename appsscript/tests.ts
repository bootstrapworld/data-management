const anObject: object = { a: 2, b: 4, c: 5 };

function Container(param, y) {
    this.member = param;
    this.name = 'eric';
    this.years = y;
    this.months = () => this.years * 12;
}

var myContainer = new Container('abc', 14);

//console.log(myContainer.name + ' is ' + myContainer.months() + ' old.');
//console.log(anObject.b);
var spanish = LanguageApp.translate('This is a test', 'en', 'es');
//Logger.log(spanish);

var array_of_objects =
    [
        {
            name: "john",
            job: "pilot",
            email: "johnpilot@gmail.com",
            ol:
                [
                    {
                        li: 6,
                        title: "6 li's"
                    },
                    {
                        li: 2,
                        title: "2 li's"
                    },
                    {
                        li: 5,
                        title: "5 li's"
                    }
                ]
        },
        {
            name: "mark",
            job: "engineer",
            email: "markengineer@gmail.com",
            ol:
                [
                    {
                        li: 2,
                        title: "2 li's"
                    },
                    {
                        li: 7,
                        title: "7 li's"
                    },
                    {
                        li: 2,
                        title: "2 li's"
                    },
                    {
                        li: 1,
                        title: "1 li's"
                    }
                ]
        },
        {
            name: "george",
            job: "chef",
            email: "georgechef@gmail.com",
            ol:
                [
                    {
                        li: 1,
                        title: "1 li's"
                    },
                    {
                        li: 3,
                        title: "3 li's"
                    },
                    {
                        li: 4, title: "4 li's"
                    },
                    {
                        li: 3,
                        title: "3 li's"
                    },
                    {
                        li: 3,
                        title: "3 li's"
                    }
                ]
        }
    ];

function htmlFromData(arr) {
    return arr.map(obj => {
        let olHtml = obj.ol.map(ol => `<ol>${(new Array(ol.li)).fill(`<li>${ol.title}</li>`).join('')}</ol>`).join('');
        return `<div>
      <span>${obj.name}</span>
      <span>${obj.job}</span>
      <span>${obj.email}</span>
      <span>${olHtml}</span>
    </div>`
    }).join('');
}

//$("body").append(htmlFromData(array_of_objects));

