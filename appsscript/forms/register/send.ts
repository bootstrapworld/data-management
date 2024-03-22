function setTrigger() {
    const form = FormApp.getActiveForm();// getForm();
    ScriptApp.newTrigger('onSubmit')
        .forForm(form)
        .onFormSubmit()
        .create();
    console.log(`New trigger created.`);
}

function onSubmit(e) {
    //notifyEric();
    var form = getForm();
    var res = e.response;
    var sendId = currentForm.send;
    console.log(sendId);
    var send = res.getResponseForItem(form.getItemById(sendId));
    console.log(send);
    console.log(send.getId());
    var responses = res.getItemResponses();
    var first = responses[0];
    console.log(first.getItem().getId());
}

function notifyEric() {
    GmailApp.sendEmail("eric@bootstrapworld.org", "New registration", "Form submitted.");
}
