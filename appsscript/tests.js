// Compiled using @google/clasp 2.4.2 (TypeScript 4.9.5)
anObject = { a: 2, b: 4, c: 5 };
function Container(param, y) {
    var _this = this;
    this.member = param;
    this.name = 'eric';
    this.years = y;
    this.months = function () { return _this.years * 12; };
}
var myContainer = new Container('abc', 14);
console.log(myContainer.name + ' is ' + myContainer.months() + ' old.');
console.log(anObject.b);
var spanish = LanguageApp.translate('This is a test', 'en', 'es');
Logger.log(spanish);
