const onOpen = function(e) {
    SpreadsheetApp.getUi()
        .createMenu('Bootstrap')
        .addItem('Add user', 'addUser_')
        .addSeparator()
        .addItem('Open dialog', 'openDialog');
        .addToUi();
}

const addUser_ = function() {
    openDialog()
}

const appendUserRow = function() {
    var ss = SpreadsheetApp.getActive();
    var userSheet = ss.getSheetByName('users');
    userSheet.appendRow([email, firstName, lastName]);
    console.log(firstName, lastName, email);
}

const openDialog = function() {
    var html = HtmlService.createHtmlOutputFromFile('index');
    SpreadsheetApp.getUi()
        .showModalDialog(html, 'Add user');
}

const enrollUser = function() { }

const addAndEnroll = function() { }
