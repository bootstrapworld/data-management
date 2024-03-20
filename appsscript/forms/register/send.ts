function setTrigger() {
    const form = getForm();
    ScriptApp.newTrigger('onSubmit')
        .forForm(form)
        .onFormSubmit()
        .create();
    console.log(`New trigger created.`);
}

function onSubmit(e) {
    notifyEric();
    var response = e.response;
    console.log(response.getEditResponseUrl());
}

function notifyEric() {
    GmailApp.sendEmail("eric@bootstrapworld.org", "New registration", "Form submitted.");
}
