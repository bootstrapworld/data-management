/**
   Author: Eric Allatta
   Purpose: Custom forms for Bootstrap enrollment
*/

function doGet() {
    const output = HtmlService.createTemplateFromFile("index").evaluate();
    return output;
}


function myColor(prop) {
    switch (prop) {
        case "color":
            return "blue";
        case "background-color":
            return "red";
    }
}
