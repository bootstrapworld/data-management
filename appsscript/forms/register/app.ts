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
    console.log(`Form Id: ${id}` + "\n" + `Title: ${title}`);
}
// clear form
function clear() {
    try {
        const form = getForm();
        const items = form.getItems();
        const len = items.length;
        console.log('Number of items: %s', len);
        form.deleteItem(items[0]);
        console.log('Number of items: %s', len);

    } catch (err) {
        console.log('Failed with error: %s', err.message);
    }
}

// Form Questions
// First time enrolling?
function buildForm() {
    const form = getForm();
    (function() {
        const item = form.addMultipleChoiceItem();
        item.setTitle("First time registering?")
            .setHelpText("Is this your first time registering with Bootstrap?")
            .setChoices([
                item.createChoice("Yes", whyRegistering),
                item.createChoice("No", FormApp.PageNavigationType.SUBMIT)]);
    })();
    const FirstTimeRegistering = form.addPageBreakItem().setTitle('');
    (function() {
        form.d
    })
    const whyRegistering = form.addPageBreakItem().setTitle('Why are you registering with Bootstrap?');
    (function() {
        const item = form.addMultipleChoiceItem();
        item.setTitle("First time registering?")
            .setHelpText("Is this your first time registering with Bootstrap?")
            .setChoices([
                item.createChoice("Yes", identity),
                item.createChoice("No", FormApp.PageNavigationType.SUBMIT)]);
    })();

    const identity = form.addPageBreakItem().setTitle('Identity');
    const contact = form.addPageBreakItem().setTitle('Contact Information');


}

// Data Piping



// end
