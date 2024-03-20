// Form Questions
// First time enrolling?
function buildForm() {
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
                      return item;
                    })()
        ***************************************************/

        //
        const thisForm = (function() {
            const title = "Welcome to the Bootstrap User Registration Form!";
            const desc = "We are thrilled to join you in bringing computing to your students!\n\nOur goal at Bootstrap is to support teachers over a many years journey. By registering with Bootstrap you are able to access answer keys, enroll in trainings, and post on our forum. You'll also receive invitations and tips from us in your inbox periodically. You can always opt out of these later.\n\nMost of Bootstrap's users are teachers who work fulltime in classrooms. However, you might also be an administrator, learning, coach, or otherwise affiliated with teaching and learning in some context. Perhaps you're just interested in seeing what this is all about.\n\nMany Bootstrap users are also sent to us from districts or other umbrella organizations that support teachers during training and throughout the school year. Those partner organizations might contract with us for additional trainings and on-going suppport and office hours.\n\nHowever, you got to Bootstrap we are thrilled to be a part of your journey!\n\nClick Next to continue your registration.";
            const goto = "";
            const item = form.addSectionHeaderItem()
                .setTitle(title)
                .setHelpText(desc)
                //	.setGoToPage(goto)
                ;
            console.log(`Index of '${title}': ${item.getIndex()}`);
            return item;
        })()

        // First time registering section, should display on first page.
        const firstTime = (function() {
            const title = "";
            const desc = "You only need to complete this form once.";
            const item = form.addSectionHeaderItem()
                //    .setTitle(title)
                .setHelpText(desc);
            console.log(`Index of '${title}': ${item.getIndex()}`);
            return item;
        })();

        const whyRegistering = (function() {
            const title = "Tell us why are you registering.";
            const desc = "";
            const goto = "";
            const item = form.addSectionHeaderItem()
                .setTitle(title)
            //	.setHelpText(desc)
            //	.setGoToPage(goto);
            console.log(`Index of '${title}': ${item.getIndex()}`);
            return item;
        })()

        // Welcome information page
        // Each value returns an item
        const welcome = (function() {
            const title = "Identity and Contact Info";
            const desc = "Please tell us who you are and how to contact you!";
            const item = form.addPageBreakItem()
                .setTitle(title)
                .setHelpText(desc)
            //  .setGoToPage(whyRegistering);
            console.log(`Inside item index: ${item.getIndex()} just created`);
            return item;
        })();

        // Professional Email
        const itemName = (function() {
            const title = "Professional Email";
            const desc = "itemDescription";
            const goto = "itemGotoPage";
            const item = form.addTextItem()
                .setTitle(title)
            //	.setHelpText(desc)
            //	.setGoToPage(goto);

            console.log(`Index of this item: ${item.getIndex()}`);
            return item;
        })()

        // Another page break
        const page = (function() {
            const title = "Another page break!";
            const desc = "!";
            const item = form.addPageBreakItem()
                .setTitle(title)
                .setHelpText(desc)
            //  .setGoToPage(FormApp.PageNavigationType.CONTINUE);
            console.log(`Index of '${title}': ${item.getIndex()}`);
            return item;
        })();


        //
        const mc = (function() {
            const title = "First time registering?";
            const desc = "Is this your first time registering with Bootstrap?";
            const item = form.addMultipleChoiceItem();
            item.setTitle(title)
                .setHelpText(desc)
                .setChoices([
                    item.createChoice("Yes"),//, whyRegistering),
                    item.createChoice("No")]);//, FormApp.PageNavigationType.SUBMIT)]);
            console.log(`Index of '${title}': ${item.getIndex()}`);
            return item;
        })();

    } catch (e) {
        console.log(`Failed with error ${e}`);
    }
}
