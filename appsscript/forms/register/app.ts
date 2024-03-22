// Form Globals
function getForm() {
    try {
        // Check if the property is not null
        const scriptProperties = PropertiesService.getScriptProperties();
        const formId = scriptProperties.getProperty('FORM_ID');
        if (formId == undefined) {
            const form = FormApp.create(getTitle());
            const id = form.getId();
            scriptProperties.setProperty('FORM_ID', id);
            const idProp = scriptProperties.getProperty('FORM_ID');
            console.log('New form id property added: %s', idProp);
            console.log('New form created with id: %s', id);
            const title = form.getTitle();
            console.log('Title: %s', title);
            return form;

        } else {
            const idProp = scriptProperties.getProperty('FORM_ID');
            const form = FormApp.openById(idProp);
            console.log('Form id: %s', form.getId());
            return form;
        }
    } catch (err) {
        console.log('Failed with error: %s', err.message);
    }
}

// clear form
// only works if there are no goto pages
function clearForm() {
    try {
        var form = getForm();
        var items = form.getItems();
        console.log(`Item length before deletion ${items.length}`);
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            form.deleteItem(item);
        }
        var items = form.getItems();
        console.log(`Item length after deletion ${items.length}`);
    } catch (err) {
        console.log('Failed with error: %s', err.message);
    }
}


function getUrl() {
    var form = getForm();
    var url = form.getEditUrl();
    console.log(url);
    return url;
}

function getPubUrl() {
    var form = getForm();
    var url = form.getPublishedUrl();
    console.log(url);
    return url;
}

function getEmbedUrl() {
    var form = getForm();
    var url = form.getPublishedUrl();
    var embed = `${url}?embedded=true`
    console.log(embed);
    return embed;
}
function setLogin() {
    var form = getForm();
    form.setRequireLogin(false);
    var req = form.requiresLogin();
    console.log(`Requires login: ${req}`);
}

// -> Spreadsheet 
function setDestination() {
    try {
        // Check if the property is not null
        const scriptProperties = PropertiesService.getScriptProperties();
        const formId = scriptProperties.getProperty('FORM_ID');
        const destId = scriptProperties.getProperty('DEST_ID');
        const form = FormApp.openById(formId);
        if (destId == undefined) {
            const dest = SpreadsheetApp.create("db");
            const id = dest.getId();
            console.log('New destination created with id: %s', id);
            scriptProperties.setProperty('DEST_ID', id);
            console.log('New destination id property added: %s', id);
            return dest;
        } else {
            const dest = SpreadsheetApp.openById(id);
            console.log('Destination id: %s', dest.getId());
            form.setDestination(FormApp.DestinationType.SPREADSHEET, destId);
            console.log('Destination added to form');
            return dest;
        }
    } catch (err) {
        console.log('Failed with error: %s', err.message);
    }
}

function getTitle() {
    var title = getForm().getTitle();
    console.log('Title: %s', title);
    return title;
}

function setTitle() {
    var form = getForm();
    form.setTitle("Bootstrap User Registration");
    var title = form.getTitle();
    console.log('Title: %s', title);
    return title;
}

function setupForm() {
    var form = getForm();
    form.setDescription('Registering as a user for Bootstrap. As a Bootstrap user you have access to protected curriculum materials, join our mailing list, and can enroll in events')
        .setConfirmationMessage('Thank you for registering with Bootstrap. You will get a confirmation message in the next 24 hours after your registration has been confirmed.')
}

/**
for container bound script
function getActiveForm() {
    var form = FormApp.getActiveForm();
    return form;
}
*/

function logFormInfo() {
    var form = getForm();
    var id = form.getId();
    var title = form.getTitle();
    console.log(`Form Id: ${id} ` + "\n" + `Title: ${title} `);
}


// Data Piping



// end
