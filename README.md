# data-management
## Master Data Files
[Teacher Success Master](https://docs.google.com/spreadsheets/d/1mAK24P4T3YYHqIG9F468CR4y4VLo3fNj1fE53w6hsSk/edit?usp=sharing)
Teacher Success Master contains the systems data for the user/events/enrollments/attendance system. This file also currently does the work of connecting rosters from the original attendance system.
Some of the original rosters are copies of data that where cleaned in the master file. Original rosters in the wild may differ from the copies in the master. Primarily, rosters tended to keep participants that dropped before the event began and used strike-through or some other formatting to indicate the person was no longer in the workshop.
Some of the original rosters are linked to active rosters with on going dates. These rosters are often duplicated by hand for partner reporting. In this way we are in a hybrid state where some attendance is taken in original rosters and some is taken by new import tools.

## Imports
[Attendance Tool](https://docs.google.com/spreadsheets/d/1LJainla5EdcMmcBSGx1GbyKcKuV00GYC8gARnrgcX3s/edit?usp=sharing)
The attendance tool is a spreadsheet with attendance rows imported from master and adjacent columns where data can be entered by a facilitator. The data entered into the attendance tool is then imported into the master data file. The attendance tool also functions as a roster with lookup information alongside for the facilitator to prepare.
**Coaching Registration Form**
Each month users in the coaching program are offered the opportunity to register for that month's coaching sessions. Topics are posted for each session, but participants can propose topics and indicate where they are in the curriculum via the registration form.

## Mailers
[Mailers Folder](https://drive.google.com/drive/folders/10CbgI8Tp-u74lbIC9zoEJ0S6EaWJGU1T?usp=drive_link)
Mailers are spreadsheets that contain data about subsets of users.
Mailing cadences should be defined along side these spreadsheet to help manage their usage. 
The mailing cadence for coaching is:
Notify coaching participants of the upcoming sessions.

## Viewers
[Admin Viewer](https://docs.google.com/spreadsheets/d/1Dd0unhi2WW4l2uft1dlbHLzrGVr-J_3YlKYMILnyywc/edit?usp=sharing)
The viewer pulls the main data tables from master data file and makes them available for use. The admin viewer currently contains our main data tables and several pivots of data that may help answer common questions.
Admin viewer sheets:
See the table of contents within the viewer, but generally green sheets are builders for helping generate manually usable email lists. Orange sheets are pivots where data is aggregated by some column, such as the partner org, user, or event. Blue sheets are the main data tables coming from the master file. Gray sheets are sources like the registration form backend.
Please submit feature requests to this repository for any views or builders that would be valuable in your work.
