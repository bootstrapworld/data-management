function onOpen() {
    SpreadsheetApp.getUi()
        .createMenu('Bootstrap')
        .addItem('Open dialog', 'openDialog')
        .addItem('Add/update user', 'addUser_')
        .addItem('Add/update event', 'addEvent_')
        .addItem('Enroll user in event', 'enroll_')
        .addToUi();
}

const addUser_ = function() {
    try {
        var html = HtmlService.createHtmlOutputFromFile('adduser');
        SpreadsheetApp.getUi().showSidebar(html);
    } catch (e) {
        console.log('Failed with error: %s', e.error);
    }
}

const addEvent_ = function() {
    try {
        var html = HtmlService.createHtmlOutputFromFile('addevent');
        SpreadsheetApp.getUi().showSidebar(html);
    } catch (e) {
        console.log('Failed with error: %s', e.error);
    }
}

const openDialog = function() {
    try {
        var html = HtmlService.createHtmlOutputFromFile('index');
        SpreadsheetApp.getUi()
            .showModalDialog(html, 'Add user');
    } catch (e) {
        console.log('Failed with error: %s', e.error);
    }
}

function appendRowFromFormSubmit(form) {
    try {
        var ss = SpreadsheetApp.getActive();
        var userSheet = ss.getSheetByName("users");
        var row = [form.email, form.firstName, form.lastName];
        userSheet.appendRow(row);
    } catch (e) {
        console.log('Failed with error: %s', e.error);
    }
}

