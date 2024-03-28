// Form Questions
// First time enrolling?
var formItems = (function() {
    try {
        // getActiveform is used here just for linting. change to getForm() in appsscript editor
        var form = FormApp.getActiveForm();//getForm().setProgressBar(true);//
        /************************************************
         * item template
                 itemName() {
                      var title = "itemTitle";
                      var desc = "itemDescription";
                      var goto = "itemGotoPage";
                      var item = form.addPageBreakItem();
                      item.setTitle(title)
                      //	.setHelpText(desc)
                      //	.setGoToPage(goto);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                      return item;
                    },
        ***************************************************/
        return {
            aboutThisFormSection() {
                var title = "Welcome to the Bootstrap User Registration Form!";
                var desc = "We are thrilled to join you in bringing computing into your classrooms!\n\nOur goal at Bootstrap is to support teachers over a many years journey. By registering with Bootstrap you are able to access answer keys, enroll in trainings, and post on our forum. You'll also receive invitations and tips from us in your inbox periodically. You can always opt out of these later.\n\nMost of Bootstrap's users are teachers who work fulltime in classrooms. However, you might also be an administrator, learning, coach, or otherwise affiliated with teaching and learning in some context. Perhaps you're just interested in seeing what this is all about.\n\nMany Bootstrap users are also sent to us from districts or other umbrella organizations that support teachers during training and throughout the school year. Those partner organizations might contract with us for additional trainings and on-going suppport and office hours.\n\nHowever, you got to Bootstrap we are thrilled to be a part of your journey!\n\nClick Next to continue your registration.";
                var item = form.addSectionHeaderItem()
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },

            // First time registering section, should display on first page.
            firstTimePage() {
                var title = "First Time Registering?";
                var desc = "This is a one time registration with Bootstrap. You only need to complete this form once.";
                var goto = FormApp.PageNavigationType.CONTINUE;
                var item = form.addPageBreakItem()
                    .setTitle(title)
                    .setHelpText(desc)
                    .setGoToPage(goto);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },

            whyRegisteringPage() {
                var title = "Tell us why are you registering.";
                var desc = "We would like to know what brings you to Bootstrap. Are you enrolling in a training? Are you trying to access teacher-only materials? Please let us know.";
                var goto = FormApp.PageNavigationType.CONTINUE;
                var item = form.addPageBreakItem()
                    .setTitle(title)
                    .setHelpText(desc)
                //	.setGoToPage(goto);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            whyRegisteringQuestion() {
                var title = "Why are you registering?";
                var desc = "Tell us why you are registering";
                var item = form.addCheckboxItem();
                item.setTitle(title)
                    //	.setHelpText(desc)
                    //	.setGoToPage(goto)
                    .setChoices([
                        item.createChoice("I want to join you mailing list."),
                        item.createChoice("I want to access teacher only materials."),
                        item.createChoice("I am participating in or supervising a training event.")
                    ]);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            identityPage() {
                var title = "Identity and contact info";
                var desc = "Please tell us who you are and how to contact you!";
                var goto = FormApp.PageNavigationType.CONTINUE;
                var item = form.addPageBreakItem();
                item.setTitle(title)
                    .setHelpText(desc)
                    .setGoToPage(goto);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            firstName() {
                var title = "First name";
                var desc = "What is your legal first name? If you use a nickname, that is different than what's on your driver's license enter that in the next question.";
                var item = form.addTextItem();
                item.setTitle(title)
                    .setHelpText(desc)
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            nickname() {
                var title = "Nickname";
                var desc = "Do you go by a name other than your legal first name? Enter it here or leave blank. We will use this name as your greeting on any messages we send.";
                var item = form.addTextItem();
                item.setTitle(title)
                    .setHelpText(desc)
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            lastName() {
                var title = "Last name";
                var desc = "What is your legal last name? If your name has changed, and is perhaps different than your email address, please enter your current legal name.";
                var item = form.addTextItem();
                item.setTitle(title)
                    .setHelpText(desc)
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            professionalEmail() {
                var title = "Professional email";
                var desc = "Please enter your professional email address.";
                var goto = "itemGotoPage";
                var validation = FormApp.createTextValidation()
                    .setHelpText("Must be a valid email address.")
                    .requireTextIsEmail()
                    .build();
                var item = form.addTextItem()
                    .setTitle(title)
                    .setHelpText(desc)
                    //	.setGoToPage(goto);
                    .setValidation(validation);

                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            googleEmail() {
                var title = "Google account email";
                var desc = "This is the email you will use to sign in to Pyret and access our Google Drive resources. If this is the same as your professional email address, please re-enter that address here.";
                var validation = FormApp.createTextValidation()
                    .setHelpText("Must be a valid email address.")
                    .requireTextIsEmail()
                    .build();
                var item = form.addTextItem()
                    .setTitle(title)
                    .setHelpText(desc)
                    //	.setGoToPage(goto);
                    .setValidation(validation);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            preferredEmail() {
                var title = "Personal or preferred email";
                var desc = "Optional: If you would like us to cc your personal email that is not subject to change when you job changes, you may enter that here.";
                var validation = FormApp.createTextValidation()
                    .setHelpText("Must be a valid email address.")
                    .requireTextIsEmail()
                    .build();
                var item = form.addTextItem()
                    .setTitle(title)
                    .setHelpText(desc)
                    //	.setGoToPage(goto);
                    .setValidation(validation);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            contactPage() {
                var title = "Tell us how to contact you.";
                var desc = "We would like to know how to contact you and also how you access our Google Drive resources. We need you professional email to verify that you are a teacher. We need you Google account email address to know how you will login to Pyret and access saved files (this is not necessarily a gmail address, but the email you login with to access Google Drive resources.)";
                var goto = FormApp.PageNavigationType.CONTINUE;
                var item = form.addPageBreakItem();
                item.setTitle(title)
                //	.setHelpText(desc)
                //	.setGoToPage(goto);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            isTeacherPage() {
                var title = "Are you a teacher?";
                var desc = "Bootstrap's primary audience are classroom teachers who spend the majority of their day supervision children and teenagers. If you are an administrator, coach, or support staff, we will collect that information in the next section.";
                var goto = FormApp.PageNavigationType.CONTINUE;
                var item = form.addPageBreakItem();
                item.setTitle(title)
                    .setHelpText(desc)
                    .setGoToPage(goto);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            isTeacherQuestion() {
                var that = this;
                var title = "Are you a teacher?";
                var desc = "Please answer Yes if you spend the majority of your working day supervising children or teenagers.";
                var item = form.addMultipleChoiceItem();
                item.setTitle(title)
                    .setHelpText(desc)
                    .setChoices([
                        item.createChoice("Yes", FormApp.PageNavigationType.CONTINUE)]);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            teacherPage() {
                var title = "Tell us about your teaching.";
                var desc = "Tell us about your teaching.";
                var goto = FormApp.PageNavigationType.CONTINUE;
                var item = form.addPageBreakItem();
                item.setTitle(title)
                    .setHelpText(desc)
                    .setGoToPage(goto);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            schoolSection() {
                var title = "Tell us about where you work.";
                var desc = "In this section we ask about your school environment, location and anything you want to tell us about the surrounding community.";
                var item = form.addSectionHeaderItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            school() {
                var title = "Tell us about your school.";
                var desc = "Enter the following information in the text box./n/n- School Name/n/n- School District/n/n- School Address/n/n- School Zip Code/n/n- School State";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc)
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            schoolType() {
                var title = "School/Organization type";
                var desc = "Tell us about the type of school or organization where you work./n/nUse words that describe your organization such as: public, transfer, performing arts, public charter, independent, independent religiously affiliated, etc. Describe your school as you would to a colleague from another school, combining any and all of the above and more.";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;

            },
            schoolCommunity() {
                var title = "School/Organization community";
                var desc = "- Describe the community of your students surrounding your school or organization. Use words to describe the social context of your school: rural, urban, suburban, high poverty, affluent, combining any and all of the above and more.";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            principalSection() {
                var title = "Tell us about your supervisor.";
                var desc = "We will never contact your supervisor without your permission./n/nSupervisors of teachers and classrooms are extremely important to bringing Bootstrap into the classroom.";
                var item = form.addSectionHeaderItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            principalName() {
                var title = "Principal name";
                var desc = "";
                var item = form.addTextItem();
            },
            principalEmail() {
                var title = "Principal email";
                var desc = "";
                var item = form.addTextItem();
            },
            otherAdmin() {
                var title = "Other supervisor";
                var desc = "Add one or more other supervisors you would like us to contact./n/n- Other Supervisor Role (optional)/n/n- Other Supervisor Name (optional)/n/n- Other Supervisor Email (optional)";
                var item = form.addParagraphTextItem();
            },
            principalContact() {
                var title = "May we contact your supervisor?";
                var desc = "May we contact your supervisor to send them some information about Bootstrap and to let them know that one of their teachers has signed up (we will not use your name).";
                var item = form.addMultipleChoiceItem();
                item.setChoices([
                    item.createChoice("Yes"),
                    item.createChoice("No")]);
            },
            aboutTeachingPage() {
                var title = "Tell us about your teaching.";
                var desc = "At Bootstrap we build curriculum and training to support for teachers in classrooms. We'd like to know as much about your teaching context as possible to help us design supports that meet the needs of our educators.";
                var item = form.addPageBreakItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            licenseQuestion() {
                var title = "Teaching license";
                var desc = "Tell us about whether you hold a State issued teaching license. If you are licensed by a State or other organization, describe your license here. For example NY 7-12 Math, etc. Please add any additional information that would help us understand your teaching context with respect to licensure, certification, or other credentials.";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            subjectQuestion() {
                var title = "Teaching subject";
                var desc = "In which subject or department do you typically teach? We are hoping to learn about the content of your course. If there are any standards or exams that you use in you teaching please indicate them here.";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            gradeLevelQuestion() {
                var title = "Grade level";
                var desc = "Tell us about the grade level you teach. If the grade level, is significantly different than the student age -- for example 12th grade in remedial Algebra -- please indicate that here.";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            numberOfStudentsQuestion() {
                var title = "How many students";
                var desc = "Tell us about the number of students you teach. How many total students do you have per year? What is your typical class size?";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            describeStudentsQuestion() {
                var title = "Describe your students";
                var desc = "Tell us about any common characteristics your students.";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            notTeacherPage() {
                var title = "Role other than teacher";
                var desc = "If you do not run classrooms of students full-time, ";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            describeRoleQuestion() {
                var title = "Describe your professional role";
                var desc = "";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            describeUseQuestion() {
                var title = "How will you use Bootstrap materials?";
                var desc = "";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            raceGenderPermissionPage() {
                var title = "Race and gender permission";
                var desc = "Collecting this information helps us to design our materials and apply for grants that support our work.";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            raceGenderPermissionQuestion() {
                var title = "Race/gender permission";
                var desc = "May we ask you about your race and gender.";
                var item = form.addMultipleChoiceItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            raceGenderPage() {
                var title = "Race and gender";
                var desc = "";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            raceQuestion() {
                var title = "Describe your race";
                var desc = "";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            ethnicityQuestion() {
                var title = "Describe your ethnicity";
                var desc = "";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            genderQuestion() {
                var title = "Describe your gender";
                var desc = "";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            contactPermissionPage() {
                var title = "Contact permissions";
                var desc = "";
                var item = form.addParagraphTextItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },

            contactOptOutPage() {
                var title = "Opt out page";
                var desc = "Check below any emails that you DO NOT want to receive.";
                var item = form.addPageBreakItem();
                item.setTitle(title)
                    .setHelpText(desc);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
            },
            contactOptOutQuestion() {
                var title = "Opt out of email communications";
                var desc = "";
                var item = form.addCheckboxItem();
                item.setTitle(title)
                    .setHelpText(desc)
                    .setChoices([
                        item.createChoice("Tips and tricks, monthly"),
                        item.createChoice("Event invitations"),
                        item.createChoice("Coaching invitations")]);
                console.log(`Index of '${title}': ${item.getIndex()}`);
                return item;
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

function buildForm() {
    var register = new Form("Register");

    register.aboutThisFormSection = register.aboutThisFormSection();
    register.firstTimePage = register.firstTimePage();
    register.whyRegisteringPage = register.whyRegisteringPage();
    register.whyRegisteringQuestion = register.whyRegisteringQuestion();
    register.identityPage = register.identityPage();
    register.firstName = register.firstName();
    register.nickname = register.nickname();
    register.lastName = register.lastName();
    register.contactPage = register.contactPage();
    register.professionalEmail = register.professionalEmail();
    register.googleEmail = register.googleEmail();
    register.preferredEmail = register.preferredEmail();
    register.isTeacherPage = register.isTeacherPage();
    register.isTeacherQuestion = register.isTeacherQuestion();
    register.teacherPage = register.teacherPage();
    register.school = register.school();
    register.schoolType = register.schoolType();
    register.schoolCommunity = register.schoolCommunity();
    register.principalSection = register.principalSection();
    register.principalName = register.principalName();
    register.principalEmail = register.principalEmail();
    register.otherAdmin = register.otherAdmin();
    register.principalContact = register.principalContact();
    register.aboutTeachingPage = register.aboutTeachingPage();
    register.licenseQuestion = register.licenseQuestion();
    register.subjectQuestion = register.subjectQuestion();
    register.gradeLevelQuestion = register.gradeLevelQuestion();
    register.numberOfStudentsQuestion = register.numberOfStudentsQuestion();
    register.describeStudentsQuestion = register.describeStudentsQuestion();
    register.notTeacherPage = register.notTeacherPage();
    register.describeRoleQuestion = register.describeRoleQuestion();
    register.describeUseQuestion = register.describeUseQuestion();
    register.raceGenderPermissionPage = register.raceGenderPermissionPage();
    register.raceGenderPermissionQuestion = register.raceGenderPermissionQuestion();
    register.raceGenderPage = register.raceGenderPage();
    register.raceQuestion = register.raceQuestion();
    register.ethnicityQuestion = register.ethnicityQuestion();
    register.genderQuestion = register.genderQuestion();
    register.contactOptOutPage = register.contactOptOutPage();
    register.contactOptOutQuestion = register.contactOptOutQuestion();


    console.log(Object.getOwnPropertyNames(register));
}
