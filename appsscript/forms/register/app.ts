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

function getDestination() {
    try {
        // Check if the property is not null
        const scriptProperties = PropertiesService.getScriptProperties();
        const id = scriptProperties.getProperty('DEST_ID');
        if (id == undefined) {
            const dest = SpreadsheetApp.create("db");
            const id = dest.getId();
            console.log('New destination created with id: %s', id);
            scriptProperties.setProperty('DEST_ID', id);
            console.log('New destination id property added: %s', id);
            const name = dest.getName();
            console.log('Title: %s', name);
            return dest;
        } else {
            const dest = SpreadsheetApp.openById(id);
            console.log('Destination id: %s', dest.getId());
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
    console.log(`Form Id: ${id}` + "\n" + `Title: ${title}`);
}

// Form Questions


// Data Piping



// end
