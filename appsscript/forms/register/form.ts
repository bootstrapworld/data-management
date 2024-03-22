// Form Questions
// First time enrolling?
const formItems = (function() {
    try {
        const form = FormApp.getActiveForm();//getForm().setProgressBar(true);//
        /************************************************
         * item template
                    const itemName = (function() {
                      const title = "itemTitle";
                      const desc = "itemDescription";
                      const goto = "itemGotoPage";
                      const item = form.addPageBreakItem()
                                .setTitle(title)
                                //	.setHelpText(desc)
                                //	.setGoToPage(goto);
                      console.log(`Index of this item: ${item.getIndex()}`);
                      return id;
                    })()
        ***************************************************/
        return {
            aboutThisForm() {
                const title = "Welcome to the Bootstrap User Registration Form!";
                const desc = "We are thrilled to join you in bringing computing into your classrooms!\n\nOur goal at Bootstrap is to support teachers over a many years journey. By registering with Bootstrap you are able to access answer keys, enroll in trainings, and post on our forum. You'll also receive invitations and tips from us in your inbox periodically. You can always opt out of these later.\n\nMost of Bootstrap's users are teachers who work fulltime in classrooms. However, you might also be an administrator, learning, coach, or otherwise affiliated with teaching and learning in some context. Perhaps you're just interested in seeing what this is all about.\n\nMany Bootstrap users are also sent to us from districts or other umbrella organizations that support teachers during training and throughout the school year. Those partner organizations might contract with us for additional trainings and on-going suppport and office hours.\n\nHowever, you got to Bootstrap we are thrilled to be a part of your journey!\n\nClick Next to continue your registration.";
                const goto = "";
                const item = form.addSectionHeaderItem()
                    .setTitle(title)
                    .setHelpText(desc)
                    //	.setGoToPage(goto)
                    ;
                console.log(`Index of '${title}': ${item.getIndex()}`);
                const id = item.getId();
                return id;
            },

            // First time registering section, should display on first page.
            firstTime() {
                const title = "";
                const desc = "You only need to complete this form once.";
                const item = form.addSectionHeaderItem()
                    //    .setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return id;
            },

            whyRegistering() {
                const title = "Tell us why are you registering.";
                const desc = "";
                const goto = "";
                const item = form.addSectionHeaderItem()
                    .setTitle(title)
                //	.setHelpText(desc)
                //	.setGoToPage(goto);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                const id = item.getId();
                return id;
            },

            // Welcome information page
            // Each value returns an item
            welcome() {
                const title = "Identity and Contact Info";
                const desc = "Please tell us who you are and how to contact you!";
                const item = form.addPageBreakItem()
                    .setTitle(title)
                    .setHelpText(desc)
                //  .setGoToPage(whyRegistering);
                console.log(`Inside item index: ${item.getIndex()} just created`);
                const id = item.getId();
                return id;
            },

            // Professional Email
            email() {
                const title = "Professional Email";
                const desc = "Please enter your professional email address.";
                const goto = "itemGotoPage";
                const validation = FormApp.createTextValidation()
                    .setHelpText("Must be a valid email address.")
                    .requireTextIsEmail()
                    .build();
                const item = form.addTextItem()
                    .setTitle(title)
                    .setHelpText(desc)
                    //	.setGoToPage(goto);
                    .setValidation(validation);

                console.log(`Index of this item: ${item.getIndex()}`);
                console.log(`Id of this item: ${item.getId()}`);
                console.log(`Title of this item: ${item.getTitle()}`);
                const id = item.getId();
                return id;
            },

            // Another page break
            page() {
                const title = "Another page break!";
                const desc = "!";
                const item = form.addPageBreakItem()
                    .setTitle(title)
                    .setHelpText(desc)
                //  .setGoToPage(FormApp.PageNavigationType.CONTINUE);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return id;
            },


            //
            mc() {
                const title = "First time registering?";
                const desc = "Is this your first time registering with Bootstrap?";
                const item = form.addMultipleChoiceItem();
                item.setTitle(title)
                    .setHelpText(desc)
                    .setChoices([
                        item.createChoice("Yes"),//, whyRegistering),
                        item.createChoice("No")]);//, FormApp.PageNavigationType.SUBMIT)]);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                const id = item.getId();
                return id;
            }
        }
    } catch (e) {
        console.log(`Failed with error ${e}`);
    }
})();

// form constructor
var Form = /** @class */ (function() {
    function Form(title) {
        this.title = title;
    }
    Object.assign(Form.prototype, formItems);
    return Form;
})();

var currentForm = {}
function run() {
    let register = new Form("Register");
    register.send = register.email();
    currentForm.send = register.send;
    console.log(currentForm);
    console.log(currentForm.send);
}
