
# Table of Contents

1.  [Overview](#org07b7e63)
    1.  [This file](#org5aec675)
    2.  [Bootstrap](#orgccc3fd2)
    3.  [Goals](#orgd1d12ce)
        1.  [What am I doing?](#org63846f6)
        2.  [This data model](#orgcc1e639)
    4.  [Non-goals](#org18f2f6f)
    5.  [Measures of Success](#orgdb98506)
        1.  [Is our org growing?](#org7366395)
        2.  [Are more students teachers growing and gaining?](#org6120fcb)
        3.  [Are partner goals being met?](#orgda046cd)
        4.  [Connect a particular change to growth/usage.](#orgbc8a7d6)
        5.  [Include in Bootstrap overview the essential nature of integrate curriculum](#org33da640)
    6.  [Analysis](#orgbdcdb81)
        1.  [Appropriateness (Fitness) of Training to Participant](#orga784a80)
        2.  [Confidence, Implementation, Growth Sentiment Analysis](#org8fc99ec)
        3.  [Skills Analysis](#orgedf4e47)
        4.  [Students](#org3451c07)
        5.  [Correlation Questions](#org9741a32)
        6.  [Factors toward implementation](#orgb339792)
    7.  [Reporting](#org6a00589)
        1.  [Attendance Reports](#org63ea5b5)
        2.  [Pre Post Diagnostic Results Analysis](#orgde247ce)
        3.  [Implementation Reports](#orge6f8bee)
        4.  [Standardized Achievement](#orgea8454f)
2.  [Data Model](#org6bfd677)
    1.  [Grain](#orge523e75)
    2.  [Definitions](#org4b85f0f)
        1.  [Contact](#orgf400c12)
        2.  [User](#org82328de)
        3.  [Educator](#orgf52ecf3)
        4.  [Participant](#org0f6fd54)
        5.  [Teacher](#org0413c62)
        6.  [Student](#org09f6af0)
        7.  [Partner](#org669ff87)
        8.  [Contract](#orgc614bf8)
        9.  [Stipend](#orga39af7f)
        10. [Administrator](#org3f9b340)
        11. [Implementation](#org18770d1)
        12. [Student achievement](#orgea48237)
        13. [Curriculum End User](#org0b86c7d)
        14. [Participant Life Cycle](#org7765808)
        15. [Training End User](#orgd6fe4f4)
        16. [Year Cohort](#org2feb771)
        17. [Partner Cohort](#orga0ea0a1)
        18. [Curriculum Cohort](#org597135b)
        19. [State Cohort](#org991cf80)
        20. [Cohort Admin](#orga741e94)
        21. [Master Teacher in Training](#orgcaf7753)
        22. [Master Teacher](#org01fd8f6)
        23. [Facilitator](#org07c2ebc)
        24. [Coach](#orge5594dc)
        25. [Professional Development](#orgaed9955)
        26. [Partner Reports](#org0e73795)
        27. [Internal Reports](#org6dae797)
    3.  [Dimensions](#org131d7fe)
        1.  [Dimension Hierarchy](#orgbc43a4d)
        2.  [Dimension Tables and Attributes](#org48f9d76)
        3.  [Data Tables](#org497a7d3)
        4.  [Curricula](#org6c3c256)
        5.  [Event Types](#org8f9f09c)
        6.  [Event Formats](#orgbb4b16e)
        7.  [Event Roles](#orgc45cf19)
        8.  [Race and Ethnicity](#orgde892b2)
        9.  [Gender](#org5911e9b)
        10. [Teacher License Area](#org966dcee)
        11. [Organization Types](#orgb4638b2)
        12. [Subjects](#org22e521b)
        13. [Grades](#orgdc126b1)
        14. [Skills](#org90ede18)
        15. [Attendance Values](#org0c8b121)
        16. [Assessment Values](#orgaccb9cb)
        17. [States](#orgf073034)
        18. [Locations](#orgfe5a163)
        19. [Districts](#org78d5191)
        20. [Schools](#org6185fd0)
        21. [Textbooks](#org4962853)
        22. [Assessment Instruments](#org7bf2a79)
        23. [Feedback Instruments](#orgb2d5be2)
        24. [Partner Organizations](#org0acd533)
    4.  [User & Event Data](#org897aa92)
        1.  [Users](#org6d12fdf)
        2.  [Events](#orgb367979)
    5.  [Facts](#orgba370f7)
        1.  [Implementation](#org2a6a93f)
        2.  [Class](#org66e86d5)
        3.  [Communication Preferences (Opt In/Out)](#org9ece295)
        4.  [Teaching programs (schedule of classes)](#orgb7e80a4)
        5.  [Roles](#org8380787)
        6.  [Licences](#orgf443e0e)
        7.  [Enrollments](#orgb350ce4)
        8.  [Comments](#org5574f06)
        9.  [User-Event-Attendance (Attendance)](#orgca32eca)
        10. [Contracts](#org69c3a8f)
        11. [Coaching](#org7c06aac)
        12. [Assessment Instrument Data](#orgedf8797)



<a id="org07b7e63"></a>

# Overview


<a id="org5aec675"></a>

## This file

This is the data definition and architecture expressed in POSTGRESQL
for Bootstrap facilitated training events and participant
tracking. This is a literate file written in Orgmode and tangled using
org-babel.


<a id="orgccc3fd2"></a>

## Bootstrap

Bootstrap develops curriculum and facilitates training for
professional educators and the organizations that support
them. Bootstrap delivers pedagogical strategies to participant
educators through in-person or virtual learning sessions. Bootstrap
seeks to support teachers from novice learners until they can
confidently implement Bootstrap curriculum in their
classrooms. Bootstrap trainings prepare teachers to deliver the
curriculum such that their students can demonstrate certain skills
evidenced through the curriculum's learning products.

The overarching goal of Bootstrap curricula and trainings is to
support student learning in core academic skills, especially
mathematical reasoning. Teachers are the professionals who deploy
Bootstrap content. The quality of that deployment directly correlates
to student achievement with Bootstrap.  Whether Bootstrap curricula
meets its aim to boost standardized achievement relies on the quality
of a teacher's deployment.

Some of Bootstrap's activities can be accessed by the student
directly. However, the primary market for Bootstrap products and
services is the teacher-student classroom where one teacher will
typically work with a groups of fifteen to thirty students. Bootstrap
teachers must deliver the curriculum. There is no mechanism for
student to work in an entirely self guided environment. Bootstrap
students are typically 10 to 17 years old.

Classrooms vary widely across the United States, and if we consider
international usage, there are many possibilities for the classroom
conditions in which Bootstrap curriculum may be deployed. To capture
some of this variety we look at classroom size, location, subject,
grade level, school schedule model (annual, semeseter, trimester,
block, etc.), student socioeconomic and race/ethnicity demographics,
teacher license and background, admin support, mandate vs teacher
choice, stipend received?, pre post student, pre post teacher,
deployment model (asynchronous, cherry picked, end-to-end, etc.).

Training participants are most often teachers, but are also teacher
assistants and para professionals on the one hand and teacher
supervisors, administrators, and coaches on the other. We track
participant attendance at training events and engagement across our
various systems. We also delineate between participants and observers
who do not interact with classrooms in their daily work, but are
otherwise connected to Bootstrap and may attend training events.

The Bootstrap data model collects data for improving the curriculum,
tracking student academic achievement, and analyzing the relationship
between curriculum, training, and on-going teacher supports and the
experience of teachers in the classroom. We hope to facilitate
analysis and lead to improvements in training and curriculum, which
become measurably better suited to the needs of teachers and student
achievement over time.

Relationships between users and outside organizations are orthogonal
to the relationships between users and Bootstrap. A principal could be
a participant learning Data Science. However, the relationship to the
outside organization affects how the user receives and deploys the
learning and our expectations of them.


<a id="orgd1d12ce"></a>

## Goals


<a id="org63846f6"></a>

### What am I doing?

I am trying to capture the ways Bootstrap is working to grow through a
relational data model.  This model should enable facilitation of
training events, particularly the communication required of
facilitation.  This model should answer key question for the Bootstrap
organization such as whether it is meeting teacher and partner goals
and succeeding in its own growth or how should it grow its trainee
support offerings. This model should hold rolling data for years and
facilitate slicing by year, partner cohort, curriculum, etc.


<a id="orgcc1e639"></a>

### This data model

The primary goal of this data model is to track and analyze the
efficacy of learning supports created by Bootstrap: curriculum
materials and facilitated trainings events.  Bootstrap hopes to
improve the learning model for professional educators, build support
for educators such that they are successful, and works toward
educators feeling confident enough to actually bring a set of
Bootstrap lessons into their classrooms. Bootstrap further measures
success through the achievement of students who received Bootstrap
curriculum. To what extent we can track individual student learning is
on open and complex question.


<a id="org18f2f6f"></a>

## Non-goals

It is not a goal at this time to hold curriculum and financial change
records, nor to track contracts facilitators performance, though
information contained here will support a variety of analysis
regarding training efficacy.  Certain aspects of curriculum are
represented here in the assessment model, such as skill groups, lesson
and assessment titles, and curriculum are here and one can imagine
other aspects such as pathway could be stored here as well.  Contracts
(in the business sense) are represented for the purpose of turning on
services (e.g. workbooks, coaching) for client cohorts and for
reporting back to stakeholders.


<a id="orgdb98506"></a>

## Measures of Success

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">SUCCESS DEFINITION</th>
<th scope="col" class="org-left">METRICS (QUANTITATIVE)</th>
<th scope="col" class="org-left">METRICS (ANECDOTAL)</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">We help teachers achieve their goals</td>
<td class="org-left">Teacher:  Are we helping teachers learn, grow, and achieve their teaching goals?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">More teachers are using more Bootstrap with their students for multiple years (more: users, depth, years)</td>
<td class="org-left">How wide is our reach and how great is our potential could it be based on the teachers we trained?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">What is our conversion rate from PD to classroom implementation?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">How far are Bootstrap students going?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">How many students are we reaching, and are we reaching the ones we want?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">How far are Bootstrap students going, by type of implementation and curriculum?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">How many teachers do we lose each year?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">How long do teachers teach Bootstrap?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Educators use everything we make (i.e., we make things educators use), including updated materials</td>
<td class="org-left">How well are teachers able to support student inquiry?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">How well do our printed and online materials meet teachers' needs?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">How do our teachers' skills progress over time?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">How well do our offerings meet teachers' needs?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Students are learning more</td>
<td class="org-left">How much are students learning?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">Are students achieving learning goals for their courses through our materials?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">Are students excited and empowered by our materials?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Teachers are so happy they are brand evangelists and refer other teachers to Bootstrap</td>
<td class="org-left">-</td>
<td class="org-left">Are teachers evangelizing Bootstrap?</td>
</tr>


<tr>
<td class="org-left">We help partners achieve their goals</td>
<td class="org-left">Partner: Are we helping partners achieve their goals?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Partners are happy with our work and show appreciation (e.g., to us directly, recommend us to others)</td>
<td class="org-left">How satisfied are our partners?</td>
<td class="org-left">Are partners expressing gratitutude/appreciation?</td>
</tr>


<tr>
<td class="org-left">Partners engage us year over year</td>
<td class="org-left">How long do partners work with us?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">How many partners renew?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">How many partners do not renew?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">We are poised to grow sustainably</td>
<td class="org-left">Bootstrap: Is Bootstrap is growing sustainably?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Growing team who is satisfied with their jobs</td>
<td class="org-left">How quickly is our organization growing?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">How satisfied is our team?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">We are financially stable and growing</td>
<td class="org-left">How quickly is our organization growing financially?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">We establish new clients each year in more geographies (more schools and more geographies)</td>
<td class="org-left">How quickly is our partner bench growing?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">How well are we poised for growth from a marketing and sales perspective?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">How well are we poised for growth and sustainability?</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">OTHER Success Definition Points to Consider</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">We reach threshold where we are ingrained in the system.</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Administrators support excited educators (bottom up / top down expansion)</td>
<td class="org-left">-</td>
<td class="org-left">Are admins promoting expansion?</td>
</tr>
</tbody>
</table>

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Major Question/Metric</th>
<th scope="col" class="org-left">Proxy Metric</th>
<th scope="col" class="org-left">How it's Measured</th>
<th scope="col" class="org-left">How it's Displayed</th>
<th scope="col" class="org-left">Frequency of Reporting</th>
<th scope="col" class="org-left">Target/Goal</th>
<th scope="col" class="org-left">Comment</th>
<th scope="col" class="org-left">Action Implications</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">Teacher:  Are we helping teachers learn, grow, and achieve their teaching goals?</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How wide is our reach and how great is our potential could it be based on the teachers we trained?</td>
<td class="org-left">Geographic Reach Score</td>
<td class="org-left">% of US map shaded in, representing where we have teachers using Bootstrap.</td>
<td class="org-left">US Map:  Shade in districts where teachers we trained are using Bootstrap. Darker shading = more teachers. In different color, shade in districts where teachers we trained aren't implementing.  Be able to toggle by year.  Summary table at bottom: #teachers implementing, #teachers trained but not implementing, #teachers trained total, # school districts represented by each (trained v implementing)  Bar chart displaying summary table numbers by year.</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left"># teachers who implement is found via surveys, interactions, wb orders, attendance at events</td>
<td class="org-left">1) Sales: Establish partnerships in regions where we have no/low representation 2) Success: Understand why/not those who are implementing are/not doing so. Increase conversion rate of teachers, if/where applicable.  3) Curric: Develop curric (e.g., datasets) that are more attractive to educators in underreepresented regions</td>
</tr>


<tr>
<td class="org-left">What is our conversion rate from PD to classroom implementation?</td>
<td class="org-left">Teacher Conversion Rate</td>
<td class="org-left"># teachers implementing / # teachers trained by year</td>
<td class="org-left">Bar chart showing conversion rate by year.</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">if someone added mid-year, and never received formal/full PD, add them to both numerator and denomenator</td>
<td class="org-left">1) Partnerships/Sales: Make sure we train teachers who will be able to implement 2) Success: understand why/not teachers are/not implementing to provide feedback to upstream activities (e.g., curric writing, recruiting, PD). Help teachers who aren't implementing to use Bootstrap in class</td>
</tr>


<tr>
<td class="org-left">How far are Bootstrap students going?</td>
<td class="org-left">Student Exposure Depth</td>
<td class="org-left"># copies made of shared files by file by geography</td>
<td class="org-left">US Map Bubble Graph:  color = deep (red) v shallow (blue) implementation.  size of bubble = # copies  Summary table at bottom: #shared files copied by state or major US region  Bar chart displaying summary table numbers by year.  By able to toggle by curriculum, or choose "All"</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">TODO:  Sort starter files into "shallow" v "deep", to determine how far along in the curriculum a student would be when encountering.   **JOE: Is it possible to tie a login from bsw.org to pyret AND know which teachers are using which lessons?</td>
<td class="org-left">1) Success: Research if there is circumstantial reason for this (e.g., something to do with policy, restrictions, etc) 2) Success: Work with teachers in regions to increase depth. Adapt success approach, if applicable, in those regions to better support teachers moving farther. 3) Curric: Update curric/workshops to attract more teachers in these regions (e.g., datasets that are more attractive to students in particular regions, adapt workshops in those regions). Update lesser-uesd lessons.</td>
</tr>


<tr>
<td class="org-left">How many students are we reaching, and are we reaching the ones we want?</td>
<td class="org-left">Student Reach</td>
<td class="org-left">avg # students / teacher * # teachers implementing</td>
<td class="org-left">In total and by subgroups (e.g., F/R lunch, girls)</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">Supports triangulation of # students reached when used with Student Learning Depth Distribution</td>
<td class="org-left">1) Partnerships/Sales: Make sure we train teachers who will be able to implement. Bring on more partners. 2) Success: understand why/not teachers are/not implementing to provide feedback to upstream activities (e.g., curric writing, recruiting, PD). Help teachers who aren't implementing to use Bootstrap in class</td>
</tr>


<tr>
<td class="org-left">How far are Bootstrap students going, by type of implementation and curriculum?</td>
<td class="org-left">Implementation Depth Score</td>
<td class="org-left">%lessons taught by teacher by curriculum by teaching format</td>
<td class="org-left">By curriculum and by teaching format (integration vs standalone class): HIstogram showing the number of teachers who teach a particular lesson Histogram showing the average number of lessons a teacher teachers Summary table showing total and average stats</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How many teachers do we lose each year?</td>
<td class="org-left">Teacher Churn Rate</td>
<td class="org-left">%  teachers who stop teaching Bootstrap each year</td>
<td class="org-left">mutilbargraph by year showing: teaachers who stop for "good reason", "bad reason", "unknown"</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How long do teachers teach Bootstrap?</td>
<td class="org-left">Teacher Longevity Score</td>
<td class="org-left">avg # years a teacher uses Bootstrap in their classroom by year</td>
<td class="org-left">Histogram (bucketed by year)</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">1) Success: Work with teachers to increase longevity. 2) Curric: Consider product offerings to support longevity.</td>
</tr>


<tr>
<td class="org-left">How well are teachers able to support student inquiry?</td>
<td class="org-left">Teacher Ability to Support Student Inquiry</td>
<td class="org-left">Teacher Rating Scale 1-5 1 = Novice 5 = Master Teacher</td>
<td class="org-left">Teacher ability to support student inquiry distributed by # years teaching</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">Flannery question: Are we giving teachers what they need to have the confidence to give students space to explore and be curious and potentially surface questions teachers won’t have answers to? (Includes: are we providing them w support in the answer-key world to make it clear there’s space for open-ended discussions and to catch misconceptions?)</td>
<td class="org-left">1) Curric: Update materials and PD to promote desired behavior.  2) Success: Update coaching and other support to promote desired behavior.</td>
</tr>


<tr>
<td class="org-left">How well do our printed and online materials meet teachers' needs?</td>
<td class="org-left">Materials Score</td>
<td class="org-left">Teacher Rating Scale 1-5 1 = Not useful at all 5 = Very useful  + open ended comments (qualitative)</td>
<td class="org-left">multibarchart: goals (with material subgroups)  cluster represents goals  colors represent Lesson plans / Datasets / Starterfiles / Slides / Workbooks / Discourse</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">Do teachers feel like our materials are ready to go for them? Do teachers see our materials as meeting and supporting the learning goals of their courses? Lesson plans? Datasets? Starterfiles? Slides? Workbooks? Discourse?  Survey teachers - in addition to rating scale, give them space to let us know what needs we are not addressing with our materials Also ask if they're open to talking with us about their experience</td>
<td class="org-left">1) Curric: Update materials to promote desired behavior.</td>
</tr>


<tr>
<td class="org-left">How do our teachers' skills progress over time?</td>
<td class="org-left">Teacher Skill Level over Time</td>
<td class="org-left">Teacher Rating Scale 1-5 1 = Novice 5 = Master Teacher</td>
<td class="org-left">Bar chart showing Average Teacher skill level at beginning of PD, end of PD, and periodically thereafter  Toggle by facilitator (?)</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">Use pre/post diagnostics + observations checklist* at PD, student pre/post and something else (surveys/self-assessment?) thereafter  *Eric has checklist idea</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How well do our offerings meet teachers' needs?</td>
<td class="org-left">Offering Usage Score</td>
<td class="org-left">By offering (e.g., coaching, PD, 1x1s), # teachers who use an offering / # teachers eligible to use an offering</td>
<td class="org-left">Bar chart showing offering value for each offering over time (e.g., each monthly coaching session = 1 bar)</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">Offerings: events, discourse, email, 1x1s, website, social  Need to account for impact of these offerings (i.e., this is about quality of interaction, not just quantity).</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How much are students learning?</td>
<td class="org-left">Student Learning Gains</td>
<td class="org-left">Average student improvement from pre to post test by curriculum by teaching format</td>
<td class="org-left">By curriculum and by teaching format (integration vs standalone class): Histogram showing student improvement from pre to post test  Bar chart showing improvement from pre to post test by question  Summary: show #students included in results</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">At student level or classroom level? Collect demographic data?  Can use student deliverables to augment score? Something else?</td>
<td class="org-left">1) Curric: Update materials and PD to promote desired behavior.  2) Success: Update coaching and other support to promote desired behavior.</td>
</tr>


<tr>
<td class="org-left">Are students achieving learning goals for their courses through our materials?</td>
<td class="org-left">Student Learning Gains</td>
<td class="org-left">pre and post test at student level - each learning goal with its own rating scale, perhaps just 0-1, perhaps 0-3&#x2026; like what Paul Zachos showed us</td>
<td class="org-left">Stacked bar chart before and after for each learning goal we assess</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">1) Curric: Update materials and PD to promote desired behavior.  2) Success: Update coaching and other support to promote desired behavior.</td>
</tr>


<tr>
<td class="org-left">Are students excited and empowered by our materials?</td>
<td class="org-left">Student Engagement Score</td>
<td class="org-left">Teacher Rating 1 - 5  1= least  5= most engaged I've ever seen my students</td>
<td class="org-left">pie chart</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">1) Curric: Update materials and PD to promote desired behavior.  2) Success: Update coaching and other support to promote desired behavior.</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Partner: Are we helping partners achieve their goals?</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How satisfied are our partners?</td>
<td class="org-left">Partner NPS</td>
<td class="org-left">Rating 1 - 5 1 = I would not recommend Bootstrap 5 = I would definitely recommend Bootstrap</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How long do partners work with us?</td>
<td class="org-left">Partner Longevity</td>
<td class="org-left">avg # years a partner works with us</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How many partners renew?</td>
<td class="org-left">Partner Renewals</td>
<td class="org-left"># renewals</td>
<td class="org-left">Bar chart: # renewals by year</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How many partners do not renew?</td>
<td class="org-left">Partner Churn</td>
<td class="org-left">%partners who do not renew YoY</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Bootstrap: Is Bootstrap is growing sustainably?</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How quickly is our organization growing?</td>
<td class="org-left">Team Growth</td>
<td class="org-left"># FTEs</td>
<td class="org-left">Bar chart showing total core team headcount + FTEs by year MT headcount</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How satisfied is our team?</td>
<td class="org-left">Team Sentiment</td>
<td class="org-left">team survey results from core team, MTs, MTiTs</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How quickly is our organization growing financially?</td>
<td class="org-left">Revenue Growth</td>
<td class="org-left">Annual total sales and sales by product, broken out by new v renewing partner</td>
<td class="org-left">Bar chart: Rev YoY (overall + by product) split by new vs renewal Summary chart</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How quickly is our partner bench growing?</td>
<td class="org-left">Partner Growth</td>
<td class="org-left">#new partners %new partners</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How well are we poised for growth from a marketing and sales perspective?</td>
<td class="org-left">Size of Funnel</td>
<td class="org-left">#leads, #pursuits by stage</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">How well are we poised for growth and sustainability?</td>
<td class="org-left">Size of Audience</td>
<td class="org-left"># followers on socials, # presentations made, # ppl who attended presentations, # ppl on mailing list</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">can wait on this one</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Other data to collect to support growth of top-level metrics</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Why aren’t partners renewing?</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Something around research (we claim we are research-based)</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">who is implementing? What percentage? How many lessons? WHY / why not?</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Why aren’t teachers showing up (coaching, office hours, etc)? Why aren’t they implementing?</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Teacher enjoyment of lessons</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Lesson’s impact on students: enjoyment, learning outcomes, interest in CS</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Workbook orders</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Self Assessment</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Pathway Creation</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Sentiment</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Are teachers learning and succeeding? DO they feel they are part of something bigger?</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Does teacher have a partner / collaborator? (from conversation)</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">-</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>


<tr>
<td class="org-left">Before School Year - Data Needed When does the teacher plan to begin using the curriculum?  In which course will the work be used?  To what extent will the teacher implement: full course or integrate a few lessons?  How many students will they be teaching?  During School Year - Metrics 1) Which lessons has the teacher tried so far? Rate each on how it has gone? 2) What topics would be most helpful to review in coaching sessions? 3) How many coaching sessions has the teacher attended?  4) What is the percentage of attendance at coaching/AYW sessions by cohort? 5) Which date/time/format of coaching resulted in the most attendance?</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
<td class="org-left">-</td>
</tr>
</tbody>
</table>

\`\`Success is when a deliberate change has an intended effect.''

We are successful when students produce learning products with our
curriculum. Student have access to learning activities through
classrooms they are mandated to attend. Teachers facilitate those
classrooms and make choices about what learning happens in the
room. Teachers are supervised and function in a system of standards and
measures. Hence, Bootstrap aims to influence both students and
supervisors (at multiple levels) to bring Bootstrap into more
classrooms.

-   Evidence of student learning
-   Implementation (growth of this table is its own measure of success)
    -   Timestamp
    -   Evidence of student product
    -   Which lesson implemented?
    -   Format
    -   Class
-   Attendance at training events and follow up sessions
    -   Event
    -   Date
    -   Value
-   Engagement with the Bootstrap community
    -   Website
    -   Email
    -   Social
-   Workbook orders
-   Self Assessment
-   Pathway Creation


<a id="org7366395"></a>

### Is our org growing?

1.  Are we bringing in more money?

2.  Are more teachers using our stuff?


<a id="org6120fcb"></a>

### Are more students teachers growing and gaining?

1.  Are teachers demonstrating growth in skills?

2.  Are teachers reporting growth in confidence?


<a id="orgda046cd"></a>

### Are partner goals being met?

1.  Are teachers submitting artifacts?

2.  Are students demonstrating growth on pre and post tests?


<a id="orgbc8a7d6"></a>

### Connect a particular change to growth/usage.


<a id="org33da640"></a>

### TODO Include in Bootstrap overview the essential nature of integrate curriculum

Bootstrap's essential nature invite complexities and constraints. Our
target audience is much more reluctant to change because their courses
are standardized and measured. In effect we have chosen the most
difficult teaching population. This plays directly into our
understanding of the free choice spectrum of our teachers. **see Reporting section**


<a id="orgbdcdb81"></a>

## Analysis


<a id="orga784a80"></a>

### Appropriateness (Fitness) of Training to Participant

-   Participant computing background vs implementation
-   Participant subject/license vs implementation
-   Which facilitation techniques are most effective?
-   Which training formats are most appropriate for which participants?
-   How do we track the impact of non-teacher participants? Coaches who may be training others, should we attempt to get those names?
-   How does years of teaching experience affect implementation after training?
-   Which interventions have led to training more teachers to reach more students?
-   Which curriculum is most effective at training teachers to implement?


<a id="org8fc99ec"></a>

### Confidence, Implementation, Growth Sentiment Analysis


<a id="orgedf4e47"></a>

### Skills Analysis


<a id="org3451c07"></a>

### Students

-   How many students are we reaching?
    -   How accurate can we get this number?
    -   How can we define a range of students reached?
    -   Can we define an error within which we know a student is reached?
    -   How many students are we reaching per lesson?


<a id="org9741a32"></a>

### Correlation Questions

1.  Curriculum Change vs Teacher Confidence

    Curriculum changes aim to increase efficacy of lesson materials. More teachers would be able to navigate more quickly and more lessons would be delivered to more students.
    
    -   Has a given curriculum change increased the efficacy of the lesson materials in a measurable way?
    -   Training Change vs Confidence
    -   Facilitator or Event vs Confidence


<a id="orgb339792"></a>

### Factors toward implementation

In the United States teachers are the primary driver of what lessons
get taught in their classrooms. However, a wide range of mandates of a
variety of strengths and types are placed upon teachers as they make
curricular decisions.  Teachers using Bootstrap curriculum in their
classroom are influenced by many factors. In some cases teachers are
required to teach certain lessons. In other cases teachers are
choosing to use Bootstrap lessons, who otherwise are not required.
Using Bootstrap can be seen on a teacher-choice spectrum. We seek to
know as much about the motivations behind teachers bringing Bootstrap
into their classrooms as possible.  Other factors affecting teachers
bringing Bootstrap into the classroom include:

-   influence of colleagues
-   desire to learn or grow themselves
-   desire to increase student motivation
-   

1.  Compelled Implementation

    Teachers may have mandates that compell them to use a certain
    curriculum. Mandates placed on teachers vary in strength, how much of
    the teacher's work is prescribed and type, which aspects of the
    teacher's work are constrained. These mandates include:
    
    -   textbook requirements
    -   online learning platform and gradebook requirements
    -   technology or computer science requirements (these may include a number of hours or certain standards)
    -   or, full curriculum mandates

2.  Free choice implementation

    Some teachers have a great deal of freedom in what or how they teach,
    while others have only some freedom of choice.  Certain subject areas
    are more prescribed than others.  Standardized testing has a large
    impact on teacher freedom even when the teacher is not under a direct
    mandate. The phrase "teaching to the test" describes the common
    phenomenon of modeling curriculum based on the end of the year
    examinations. Curriculum that does not look like the exam is less
    likely to be used. This phenomenon is more likely to be found where
    student achievement on the exam is not as predictably guaranteed.


<a id="org6a00589"></a>

## Reporting

Bootstrap partners are in the business of supporting student
learning. Additionally partners may have special interest in a particular
student grouping.

Partners may employ teachers and run schools or they may be an organization or
foundation that is interested in education, technology, equity, or other special
interest that overlaps with Bootstrap products and service

Partners are interested in how well the curriculum supports student
achievement. Bootstrap's niche is supporting student learning in traditional
core subjects such as Algebra.


<a id="org63ea5b5"></a>

### Attendance Reports

-   Cohort attendance, sent to cohort admins (unified by contract)
-   


<a id="orgde247ce"></a>

### Pre Post Diagnostic Results Analysis

-   teacher/participant pre/post from trainings
-   aggregated classroom pre/post on Bootstrap diagnostics
-   pre/post diagnostics from classroom final exam


<a id="orge6f8bee"></a>

### Implementation Reports


<a id="orgea8454f"></a>

### Standardized Achievement

Are students achieving higher outcomes on standardized exams that they would already be required to take?
Some teachers administer their own diagnostics, and this practice is increasingly more common in administrative mandates.


<a id="org6bfd677"></a>

# Data Model


<a id="orge523e75"></a>

## Grain

The grain in our data model is the professional educator and the
classrooms they work in. We measure the efficacy of the training
experience as it relates to various factors in the life of a
professional educator. We collect reactions to our trainings and
followup for a period of time as the teacher attempts to bring
Bootstrap curriculum into the classroom. Pre and post test student
data stops at the teacher level. We do not track students as entities
or store any individual student data.


<a id="org4b85f0f"></a>

## Definitions


<a id="orgf400c12"></a>

### Contact


<a id="org82328de"></a>

### User


<a id="orgf52ecf3"></a>

### Educator

are often teachers or have had experience in the classroom, but can
also be administrators, paraprofessionals, learning coaches, or
department coordinators. We wish to track the changing role our
professional educators have to their profession and employer. We wish
to know a teachers current schedule and where in that schedule they
have been able to utilize Bootstrap curricula or pedagogy.

Sometimes the participant works alongside teachers and will take the
learning from Bootstrap back to their teachers in their own
professional enrichment setting.

-   Principal
-   Dean
-   Librarian
-   Counselor
-   Paraprofessional
-   Learning Coach


<a id="org0f6fd54"></a>

### Participant

Is enrolled in a training event in order to learning skills and
content. Not facilitating, observing, or supervising.


<a id="org0413c62"></a>

### Teacher

has a role within their organization that places them in front of
students for the majority of their day.  Teachers spend the majority
of their professional time interacting with students, and have the
largest and most direct role in affecting student outcomes and the
quality of the Bootstrap implementation.


<a id="org09f6af0"></a>

### Student

Bootstrap students are 10-17 years old, live primarily in the lower 48
states, and attend school in grades 5-12.


<a id="org669ff87"></a>

### Partner

Bootstrap interacts with partners who develop or
support teacher excellence through continued
education or "professional development" for
teachers. Partners include districts, non-profit,
private foundations, corporations, states, and
schools. Individual teachers also join open
enrollment events and may be paying out of pocket.


<a id="orgc614bf8"></a>

### Contract


<a id="orga39af7f"></a>

### Stipend

Teachers often receive some form of compensation
from their school, district, or supporting
organization.


<a id="org3f9b340"></a>

### Administrator

Administrators have a role to their organization that places them
supporting teachers for the majority of their day. They are sometimes
the point persons on the contracts (cohort admin), who create training
events and build cohorts. More often teachers are beholden to
administrators who are not directly connected to Bootstrap, but who
may have a large role in the teacher's implementation.


<a id="org18770d1"></a>

### Implementation

describes a teacher using Bootstrap curriculum with
their students. Bootstrap curriculum is designed to fit in as a module
into existing classes with established goals. Teachers using Bootstrap
in their classes have identified a learning goal or series of goals
that Bootstrap curriculum covers. Depending on the course objectives
and grade band of students different swaths of curriculum are
available. Implementation is a description of the context in which a
teacher is using Boostrap, to what depth and what breadth.


<a id="orgea48237"></a>

### Student achievement

measures show gains through
pre and post diagnostics of skills covered by the
Bootstrap curriculum. These skills overlap between
Bootstrap curriculum, but have different contexts
that they support. Student learning requires both
high quality curriculum and high quality
deployment by the teacher.


<a id="org0b86c7d"></a>

### Curriculum End User

The end users of Bootstrap curriculum are students, who will be using tools like
the Pyret or CODAP to build projects.


<a id="org7765808"></a>

### Participant Life Cycle

-   Intake
-   Onboarding
-   Training
-   Implementation with Support
-   Solo Implementation
-   Repeated training
-   Second curriculum
-   Master Teacher in Training
-   Master Teacher


<a id="orgd6fe4f4"></a>

### Training End User

The end users of Bootsrap trainings are
teachers. In most cases the person in the chair is
a teacher, who will bring the training, pedagogy,
and curriculum back to students in their
classroom.


<a id="org2feb771"></a>

### Year Cohort


<a id="orga0ea0a1"></a>

### Partner Cohort


<a id="org597135b"></a>

### Curriculum Cohort


<a id="org991cf80"></a>

### State Cohort

A partner cohort is a group of teachers supported by a particular
contract. Cohorts begin with a training event and end at a certain date. 


<a id="orga741e94"></a>

### Cohort Admin

Within a Bootstrap contract the point persons for the partner
organization are the admins of the contracted event. Admins receive
reporting and communication about their cohort. Cohort admins track teacher
attendance at training events and may disperse stipends to teachers
based on deliverables.


<a id="orgcaf7753"></a>

### Master Teacher in Training

Has been in trainings for several years and demonstrated proficiency across the concept map


<a id="org01fd8f6"></a>

### Master Teacher

Can co-lead a professional development, run coaching sessions, and moderate on the question forum.


<a id="org07c2ebc"></a>

### Facilitator

Training events are facilitated by Bootstrap Master Teachers who have
been trained to facilitate events. Typically Master Teachers co-lead
for a period of time before they facilitate events by themselves. A
facilitator is the primary point person for training participants
during and immediately after the training event.


<a id="orge5594dc"></a>

### Coach

A coach is a Bootstrap Master teacher supporting groups of teachers
through short regular sessions. These sessions are largely driven by
the questions and needs of teachers in the process of using Bootstrap
curriculum in their classrooms.


<a id="orgaed9955"></a>

### Professional Development

A training event that covers an entire curriculum is considered
professional development. Participants in professional development
events are trained as both student and teacher. They must understand
the curriculum and the pedagogy behind key point in the curriculum.


<a id="org0e73795"></a>

### Partner Reports

Partners often request reports, especially
attendance, which they use to track participant
participation and to validate stipends. The
partner may or may not have requirements for the
form of the report.

Reports for partners include

-   a teacher level attendance report
-   a teacher level proficiency report
-   implementation reports
-   cohort aggregations


<a id="org6dae797"></a>

### Internal Reports

-   Interventions over time
-   Teacher retention
-   Types of facilitation experience vs implementation
-   Teaching context vs implementation


<a id="org131d7fe"></a>

## Dimensions

Most schools are members of districts or other support organizations.  Partner
organizations build contracts with Bootstrap to train cohorts of educators. A
partner organization may or may not be a district.


<a id="orgbc43a4d"></a>

### Dimension Hierarchy

1.  Contact

    -   Enrollment

2.  Curricula

    -   Skills

3.  Partner

    -   Contract

4.  Cohort

    -   Participant
    
    -   Event
        -   User
        -   Enrollments
            -   Role
                -   Facilitator
                -   Participant
                -   Admin
                -   Master teacher in training
                -   Ambassador #not really an enrollment role
    -   States
        -   Districts
            -   Schools
                -   Classes
                    -   Teachers
                        -   Implementations
    -   School
        -   Name
        -   District/Org
        -   Student Age or Grade Range
        -   City
        -   State
        -   Address
        -   Principal
        -   Website
        -   Gradebook/LMS Software
        -   Tech Affiliation, Google, MSFT, etc.
        -   CS Affiliation, Code.org, PLTW, etc.
    -   District
        -   Name
        -   State
        -   Serving Zip Codes
        -   Website


<a id="org48f9d76"></a>

### Dimension Tables and Attributes

-   Contact
    -   id
    -   name
    -   email
    -   phone
    -   where from?
    -   opt in list #how/where to track email opt-in?
-   User
    -   contact<sub>id</sub>
    -   date<sub>added</sub>
-   Partner Org #could this be a district?
    -   id
    -   Name
    -   Type ('non-profit', 'government', 'private')
    -   Admins
-   School
    -   school<sub>id</sub>
    -   Name
    -   Location #what is location?
    -   Grade band (e.g. '9-12')
    -   Demographic #what is demographic?
    -   District REFERENCES ("District") "district<sub>id</sub>"
    -   Address #what is an address
-   District #this is a school umbrella or support organization
    -   district<sub>id</sub>
    -   State
-   Facilitator
-   Contract
-   Event
-   Year
-   Curriculum (Data Science, Data Science CODAP, Early Math, Algebra, Algebra 2)
-   Learning Model #what is a learning model
-   Skill #breaking down Bootstrap curriculum to the skill level. this
    is our product.
-   Location
    -   Street Address
    -   City
    -   State
    -   Zipcode
    -   Country
-   Demographic
    -   race ('American Indian or Alaska Native', 'Asian', 'Black or African American', 'Native Hawaiian or Other Pacific Islander', 'White' )
    -   ethnicity ('Hispanic or Latino', 'Not Hispanic or Latino')
    -   grade<sub>band</sub>
    -   setting ('urban', 'rural', 'suburban')
    -   socio-economic status
-   Type
-   Certification
    -   teacher<sub>id</sub>
    -   state
    -   subject
    -   grade<sub>band</sub>
    -   type #what is this?
-   Class
    -   teacher<sub>id</sub>
    -   subject
    -   student<sub>demographics</sub> #what is this?
    -   start<sub>date</sub>
    -   end<sub>date</sub>
-   Role
    -   teacher<sub>id</sub>
    -   school<sub>id</sub>
    -   role ('teacher', 'paraprofessional', 'supervisor', 'coach',
        'coordinator')
    -   start date
    -   end date
-   Coaching
-   Stipend
-   Partner report request
-   Admin support #capture the relationship between
    this teacher and the surrounding professional
    environment
-   Student achievement
-   Subject
-   Course
-   Standard


<a id="org497a7d3"></a>

### Data Tables

    --------------------------------------------------------------------------
    -- Dimensional Data
    --------------------------------------------------------------------------


<a id="org6c3c256"></a>

### Curricula

      -- These are internal curricula used in trainings. Participants are associated with their most recent training enrollment curricula.
      -- Currently a training is based on a single curriculum.
    CREATE TABLE IF NOT EXISTS "curricula" (
      "id" SERIAL,
      "name" TEXT
    );


<a id="org8f9f09c"></a>

### Event Types

    -- The scope of the event    "full", "intro", "coaching", "one-on-one", "office_hour", "review"
    CREATE TABLE IF NOT EXISTS "event_type" (
      "id" SERIAL PRIMARY KEY,
      "event_type" TEXT,
      "date_added" DATE
    );


<a id="orgbb4b16e"></a>

### Event Formats

      --     "intensive",    "distributed",    "one-day",    "half-day"
    CREATE TABLE IF NOT EXISTS "event_format" (
      "id" SERIAL PRIMARY KEY,
      "format" TEXT,
      "date_added" DATE
    );


<a id="orgc45cf19"></a>

### Event Roles

These are the roles are used with respect to enrollment in an event. They answer the
question what are you doing as part of this event. This list could
grow as the type and complexity of event planning changes.

    CREATE TABLE IF NOT EXISTS "event_role" (
      "id" SERIAL PRIMARY KEY,
      "role" TEXT -- "facilitator", "administrator", "participant", "observer"
    );


<a id="orgde892b2"></a>

### Race and Ethnicity

    --     "American Indian or Alaska Native",    "Asian",    "Black or African American",    "Native Hawaiian or Other Pacific Islander",    "White"
    CREATE TABLE IF NOT EXISTS "race" (
      "id" SERIAL PRIMARY KEY,
      "description" TEXT
    );
    
    CREATE TABLE IF NOT EXISTS "ethnicity" (
      "id" SERIAL PRIMARY KEY,
      "description" TEXT
    );


<a id="org5911e9b"></a>

### Gender

    --     "female",    "male",    "transgender",    "none of these"
    CREATE TABLE IF NOT EXISTS "gender" (
      "id" SERIAL PRIMARY KEY,
      "description" TEXT
    );


<a id="org966dcee"></a>

### Teacher License Area

    /*"Early Childhood Education",
      "Early Childhood Special Education",
      "Elementary Education",
      "Secondary Education",
      "English",
      "Mathematics",
      "Sciences",
      "Biology",
      "Chemistry",
      "Life Sciences",
      "Physics",
      "Social Sciences",
      "Agriculture",
      "American Sign Language",
      "Art Teacher",
      "Business Education",
      "Computer Science",
      "Dance",
      "Drama/Theater",
      "English as a Second Language (ESL)",
      "Foreign Language"
      "Gifted and Talented Education (GATE)",
      "Health",
      "Home Economics",
      "Journalism",
      "Music",
      "Physical Education",
      "Reading Specialist",
      "Special Education",
      "Speech Language Pathologist",
      "Technology",
      "Visually Impaired Teacher",
      "Education Technology",
      "Librarian"*/
    CREATE TABLE IF NOT EXISTS "license_area" (
      "id" SERIAL PRIMARY KEY,
      "description" TEXT
    );


<a id="orgb4638b2"></a>

### Organization Types

    /*    "non-profit",
          "for-profit",
          "school",
          "district",
          "state government office",
          "philathropic foundation"
     */
    CREATE TABLE IF NOT EXISTS "org_type" (
      "id" SERIAL PRIMARY KEY,
      "description" TEXT
    );


<a id="org22e521b"></a>

### Subjects

    /*    "Math",
          "Science",
          "English",
          "Social studies",
          "Health/physical education",
          "Art/music",
          "Language other than English"
     */
    CREATE TABLE IF NOT EXISTS "subject" (
      "id" SERIAL PRIMARY KEY,
      "description" TEXT
    );


<a id="orgdc126b1"></a>

### Grades

    /* "Kindergarten",
       "1st",
       "2nd",
       "3rd",
       "4th",
       "5th",
       "6th",
       "7th",
       "8th",
       "9th",
       "10th",
       "11th",
       "12th"
    */
    CREATE TABLE IF NOT EXISTS "grade" (
      "id" SERIAL PRIMARY KEY,
      "description" TEXT
    );


<a id="org90ede18"></a>

### Skills

    /*"S1",
      "S2",
      "S3",
      "S4"
    */
    CREATE TABLE IF NOT EXISTS "skill" (
      "id" SERIAL PRIMARY KEY,
      "descrition" TEXT
    );


<a id="org0c8b121"></a>

### Attendance Values

    /*"present",
      "absent",
      "tardy",
      "disengaged",
      "excused"
    */
    CREATE TABLE IF NOT EXISTS "attendance_value" (
      "id" SERIAL PRIMARY KEY,
      "description" TEXT
    );


<a id="orgaccb9cb"></a>

### Assessment Values

    /*    "novice",
          "practitioner",
          "professional",
          "master"
    */
    CREATE TABLE IF NOT EXISTS "assessment_value" (
      "id" SERIAL PRIMARY KEY,
      "description" TEXT
    );

    --------------------------------------------------------------------------------
    -- Dimensional Data   
    --------------------------------------------------------------------------------

These tables are descriptive data elements that make up the relationships in our
system. They represent everything we know about the people, organizations, and
events in our facilitation ecosystem.


<a id="orgf073034"></a>

### States

    CREATE TABLE IF NOT EXISTS "state" (
      "name_jurisdiction" TEXT,
      "ansi_code"         INTEGER,
      "abbreviation"      varchar(2) PRIMARY KEY
    );


<a id="orgfe5a163"></a>

### Locations

    CREATE TABLE IF NOT EXISTS "location" (
      "id" SERIAL PRIMARY KEY,
      "address" TEXT UNIQUE,
      "city"    TEXT,
      "state"   TEXT REFERENCES "state",
      "lat"     NUMERIC,
      "lon"     NUMERIC
    );


<a id="org78d5191"></a>

### Districts

    CREATE TABLE IF NOT EXISTS "district" (
      "LEAID" TEXT PRIMARY KEY, -- Agency identification number
      "NAME"  TEXT, -- Name of agency
      "OPSTFIPS" TEXT, -- FIPS state code for operating state
      "STREET" TEXT, -- Reported location street address
      "CITY"   TEXT, -- Reported location city
      "STATE"  TEXT, -- Reported location state
      "ZIP"    TEXT, -- Reported location ZIP code
      "STFIP"  TEXT, -- State FIPS
      "CNTY"   TEXT, -- County FIPS
      "NMCNTY" TEXT, -- County name
      "LAT"    NUMERIC, -- Latitude of agency office location
      "LON"    NUMERIC, -- Longitude of agency office location
      "CBSA"   TEXT, -- Core Based Statistical Area
      "NMCBSA" TEXT, -- Core Based Statistical Area name
      "CBSATYPE" TEXT, -- Metropolitan or Micropolitan Statistical Area indicator
      "CSA"    TEXT, -- Combined Statistical Area
      "NMCSA"  TEXT, -- Combined Statistical Area name
      "NECTA"  TEXT, -- New England City and Town Area
      "NMNECTA" TEXT, -- New England City and Town Area name
      "CD"     TEXT, -- Congressional District
      "SLDL"   TEXT, -- State Legislative District - Lower
      "SLDU"   TEXT, -- State Legislative District - Upper
      "SCHOOLYEAR" TEXT, -- School year
      "LOCALE" TEXT, -- Locale assigned to district
      "PCT_CITY11" NUMERIC, -- Percentage of enrolled students attending schools in locale 11 (city – large)
      "PCT_CITY12" NUMERIC, -- Percentage of enrolled students attending schools in locale 12 (city – midsize)
      "PCT_CITY13" NUMERIC, -- Percentage of enrolled students attending schools in locale 13 (city – small)
      "PCT_SUB21"  NUMERIC, -- Percentage of enrolled students attending schools in locale 21 (suburb – large)
      "PCT_SUB22"  NUMERIC, -- Percentage of enrolled students attending schools in locale 22 (suburb – midsize)
      "PCT_SUB23"  NUMERIC, -- Percentage of enrolled students attending schools in locale 23 (suburb – small)
      "PCT_TOWN31" NUMERIC, -- Percentage of enrolled students attending schools in locale 31 (town – fringe)
      "PCT_TOWN32" NUMERIC, -- Percentage of enrolled students attending schools in locale 32 (town – distant)
      "PCT_TOWN33" NUMERIC, -- Percentage of enrolled students attending schools in locale 33 (town – remote)
      "PCT_RURAL41" NUMERIC, -- Percentage of enrolled students attending schools in locale 41 (rural – fringe)
      "PCT_RURAL42" NUMERIC, -- Percentage of enrolled students attending schools in locale 42 (rural – distant)
      "PCT_RURAL43" NUMERIC  -- Percentage of enrolled students attending schools in locale 43 (rural - remote)
    );


<a id="org6185fd0"></a>

### Schools

        CREATE TABLE IF NOT EXISTS "school" (
          "NCESSCH"    TEXT PRIMARY KEY, -- School identification number
          "LEAID"      TEXT REFERENCES "district", -- School district identification number
          "NAME"       TEXT, -- String Name of institution
          "OPSTFIPS"   TEXT, -- FIPS state code for operating state
          "STREET"     TEXT, -- Reported location street address
          "CITY"       TEXT, -- Reported location city
          "STATE"      TEXT, -- Reported location state
          "ZIP"        TEXT, -- Reported location ZIP code
          "STFIP"      TEXT, -- State FIPS
          "CNTY"       TEXT, -- County FIPS
          "NMCNTY"     TEXT, -- County name
          "LOCALE"     TEXT, -- Locale code
          "LAT"        DOUBLE PRECISION, -- Latitude of school location
          "LON"        DOUBLE PRECISION, -- Longitude of school location
          "CBSA"       TEXT, -- Core Based Statistical Area
          "NMCBSA"     TEXT, -- Core Based Statistical Area name
          "CBSATYPE"   TEXT, -- Metropolitan or Micropolitan Statistical Area indicator
          "CSA"        TEXT, -- Combined Statistical
          "NMCSA"      TEXT, -- Combined Statistical Area name
          "NECTA"      TEXT, -- New England City and Town Area
          "NMNECTA"    TEXT, -- New England City and Town Area name
          "CD"         TEXT, -- Congressional District
          "SLDL"       TEXT, -- State Legislative District - Lower
          "SLDU"       TEXT, -- State Legislative District - Upper
          "SCHOOLYEAR" TEXT  -- School year
    );


<a id="org4962853"></a>

### Textbooks

    CREATE TABLE IF NOT EXISTS "textbooks" (
      "id" SERIAL PRIMARY KEY,
      "name"      TEXT,
      "publisher" TEXT,
      "year_published" INTEGER
      );


<a id="org7bf2a79"></a>

### Assessment Instruments

    CREATE TABLE IF NOT EXISTS "assessment_instrument" (
      "id" SERIAL PRIMARY KEY,
      "name" TEXT,
      "curricula" TEXT REFERENCES "curricula", 
      "skills" TEXT REFERENCES "skill"
    );


<a id="orgb2d5be2"></a>

### Feedback Instruments

    CREATE TABLE IF NOT EXISTS "feedback" (
      "id" SERIAL PRIMARY KEY,
      "name" TEXT,
      "curricula" CURRICULA, 
      "skills" SKILL[]
    );


<a id="org0acd533"></a>

### Partner Organizations

Bootstrap works with partners organizations to build contracts for
facilitated events. Organizations can be municipal or state level
education districts or offices, non-profits, individual schools,
philanthropic foundations, individuals, or Bootstrap itself.

    CREATE TABLE IF NOT EXISTS "organization" (
      "id"           SERIAL PRIMARY KEY,
      "name"         TEXT NOT NULL UNIQUE,
      "location_id"  INTEGER,
      "url"          TEXT,
      "district_id"  TEXT,
      CONSTRAINT "fk_location" FOREIGN KEY ("location_id") REFERENCES "location",
      CONSTRAINT "fk_district" FOREIGN KEY ("district_id") REFERENCES "district"
    );


<a id="org897aa92"></a>

## User & Event Data

    --------------------------------------------------------------------------------
    -- User & Event Data
    --------------------------------------------------------------------------------


<a id="org6d12fdf"></a>

### Users

One row per person. Anyone who has interacted with Bootstrap, who ever
signed up for an event, even if they did not
attend. Anyone who joined the mailing list through
a web form, reached out directly to Bootstrap
staff, messaged through social media, requested
answer keys, or joined Discourse.

    CREATE TABLE IF NOT EXISTS "user" (
      "id"                 SERIAL PRIMARY KEY, --TEXT,
      "name_first"         TEXT, -- the legal first name, i.e. would appear on DL
      "name_last"          TEXT,
      "name_first_alt"     TEXT, -- usually shortened nick name, e.g. David -> Dave
      "name_last_alt"      TEXT, -- usually for married name change
      "email_personal"     TEXT, -- email that persists after job change
      "email_professional" TEXT, -- email that changes with job change
      "home_location"      INTEGER REFERENCES "location",
      "home_phone"         varchar(15),
      "cell_phone"         varchar(15),
      "work_phone"         varchar(15),
      "user_gender"             GENDER,
      "user_race"               RACE
    );


<a id="orgb367979"></a>

### Events

Bootstrap facilitates events for professional educators. These events focus on
the conceptual understanding and implementation of Bootstrap curriculum.

    --   
    CREATE TABLE IF NOT EXISTS "event" (
      "id"            TEXT PRIMARY KEY,
      "event_name"    TEXT NOT NULL,
      "location_id"   INTEGER,
      "event_days"    INTEGER CONSTRAINT "positive_days" GENERATED ALWAYS AS ("end_date" - "start_date") STORED CHECK (event_days > 0),
      --length in days
      "end_date"      INTEGER,
      "start_date"    INTEGER,
      "type"          INTEGER REFERENCES "event_type",
      "format"        INTEGER REFERENCES "event_type"
    );


<a id="orgba370f7"></a>

## Facts

    --------------------------------------------------------------------------------
    -- Fact Tables
    --------------------------------------------------------------------------------


<a id="org2a6a93f"></a>

### Implementation

-   Start Data
-   End Data
-   Class


<a id="org66e86d5"></a>

### Class

-   School
-   \# Students
-   Demographics
-   Grade Level
-   Course Name
-   Subject
-   Level

-   Comm Preferences
-   Feedbacks
    -   Confidence
    -   Appropriateness
-   Event Cohorts
    -   event<sub>id</sub>
    -   teacher<sub>id</sub>
-   Year Cohorts
-   Comments
    -   teacher<sub>id</sub>
    -   commenter<sub>id</sub>
    -   comment
    -   date
    -   time
    -   tags
    -   refer<sub>to</sub>
-   Attendances
    -   teacher<sub>id</sub>
    -   event<sub>id</sub>
    -   attendance<sub>value</sub>
    -   attenadance<sub>date</sub>
    -   attendance<sub>period</sub>
-   Assessments
    -   teacher<sub>id</sub>
    -   title
    -   context
    -   cohort<sub>id</sub>
    -   skill
    -   evidence
    -   rating
    -   rater
    -   date


<a id="org9ece295"></a>

### Communication Preferences (Opt In/Out)

    
    CREATE TABLE IF NOT EXISTS "comm_preference" (
      "user_id"    SERIAL PRIMARY KEY,
      "preference" TEXT,
      CONSTRAINT "comm_id" FOREIGN KEY ("user_id") REFERENCES "user"
    );


<a id="orgb7e80a4"></a>

### Teaching programs (schedule of classes)

    -- a class in a teachers program tells us the subject and grade level where the teacher will be interacticng with students
    CREATE TABLE IF NOT EXISTS "class" (
      "id" SERIAL PRIMARY KEY,
      "teacher_id" INTEGER,
      "name" TEXT NOT NULL,
      "subject" SUBJECT,
      "grade_level" TEXT,
      "start_date" DATE,
      "end_date"   DATE,
      "students"   INTEGER, -- the number of students enrolled in this class
      "pct_disability" NUMERIC,
      "pct_african_american" NUMERIC, --  Black or African American
      "pct_asian" NUMERIC, -- Percent Asian
      "pct_white" NUMERIC, -- Percent White
      "pct_american_indian" NUMERIC, -- American Indian or Alaska Native
      "pct_native_hawaiian" NUMERIC, -- Native Hawaiian or Other Pacific Islander
      CONSTRAINT "fk_teacher" FOREIGN KEY ("teacher_id") REFERENCES "user"
    );

    CREATE TABLE IF NOT EXISTS "certification" (
      -- tracks the certifications relative to state wide professional educators
      "teacher_id"   INTEGER,
      "cert_id"      TEXT,
      "state_ab"     varchar(2) REFERENCES "state",
      "title"        TEXT,
      "license_area" INTEGER REFERENCES "license_area",
      CONSTRAINT "fk_teacher" FOREIGN KEY ("teacher_id") REFERENCES "user"
    );


<a id="org8380787"></a>

### Roles

    -- One row per user organization relationship
    CREATE TABLE IF NOT EXISTS "role" (
        "id"        SERIAL PRIMARY KEY,
        "user_id"   INTEGER REFERENCES "user",
        "org_id"    INTEGER REFERENCES "organization",
        "title"     TEXT,
        "start_date" DATE,
        "end_date"   DATE,
        "is_teacher" BOOLEAN
      );


<a id="orgf443e0e"></a>

### Licences

    CREATE TABLE IF NOT EXISTS "license" (
      "id"      SERIAL PRIMARY KEY,
      "user_id" INTEGER REFERENCES "user",
      "license" INTEGER REFERENCES "license_area",
      "state"   varchar(2) REFERENCES "state"
    );


<a id="orgb350ce4"></a>

### Enrollments

    CREATE TABLE IF NOT EXISTS "enrollment" (
      "id"          SERIAL PRIMARY KEY,
      "user_id"     INTEGER,
      "event_id"    TEXT,
      "role"        INTEGER REFERENCES "event_role",
      "is_enrolled" BOOLEAN NOT NULL DEFAULT TRUE,
      CONSTRAINT "fk_user"  FOREIGN KEY ("user_id")  REFERENCES "user",
      CONSTRAINT "fk_event" FOREIGN KEY ("event_id") REFERENCES "event"
    );


<a id="org5574f06"></a>

### Comments

    
    CREATE TABLE IF NOT EXISTS "comments" (
      "id" SERIAL PRIMARY KEY,
      "comment_target" INTEGER, -- the user about which the comment refers
      "date" DATE, -- the date the comment was authored
      "comment_author" INTEGER,
      "tag_id" INTEGER[], -- the ids of any users who should track or follow up on the comment
      "comment_text" TEXT,
      CONSTRAINT "fk_user"   FOREIGN KEY ("comment_target") REFERENCES "user",
      CONSTRAINT "fk_author" FOREIGN KEY ("comment_author") REFERENCES "user"
    );


<a id="orgca32eca"></a>

### User-Event-Attendance (Attendance)

    
    CREATE TABLE IF NOT EXISTS "attendance" (
      "id" SERIAL PRIMARY KEY,
      "event_id"  TEXT NOT NULL,
      "user_id"   INTEGER NOT NULL,
      "date"      DATE    NOT NULL,
      "attendance_value" INTEGER REFERENCES "attendance_value",
      CONSTRAINT "fk_event" FOREIGN KEY ("event_id") REFERENCES "event",
      CONSTRAINT "fk_user"  FOREIGN KEY ("user_id")  REFERENCES "users"
    );


<a id="org69c3a8f"></a>

### Contracts

    CREATE TABLE IF NOT EXISTS "contract" (
      "id"  SERIAL PRIMARY KEY,
      "partner_id" INTEGER,
      "event_id"   TEXT,
      CONSTRAINT "fk_partner" FOREIGN KEY ("partner_id") REFERENCES "organization",
      CONSTRAINT "fk_event"   FOREIGN KEY ("event_id")   REFERENCES "event"
    );


<a id="org7c06aac"></a>

### Coaching

Coaching is included in some contracts. The
coaching table is a postive entry table. Users
present in the coaching table are invited to
coaching sessions throughout the year. Enrollment
in coaching is for one year and is specific to a
curriculum. Usually you are assigned coaching for
the curriculum in which you were trained in the
same calendar year.

    CREATE TABLE IF NOT EXISTS "coaching" (
      "user_id"    INTEGER REFERENCES "user", -- Coaching is a postive entry table. A user found in this table has -- coaching included in their contract
      "start_date" DATE,
      "end_date"   DATE GENERATED ALWAYS AS ("start_date" + 365) STORED
    );


<a id="orgedf8797"></a>

### Assessment Instrument Data

    
    CREATE TABLE IF NOT EXISTS "assessment" (
      "id"             SERIAL PRIMARY KEY,
      "assessment_id"  INTEGER,
      "user_id"        INTEGER,
      "assessment_value" INTEGER REFERENCES "assessment_value",
      "data"           TEXT,
      CONSTRAINT "fk_assessment" FOREIGN KEY ("assessment_id") REFERENCES "assessment_instrument",
      CONSTRAINT "fk_user"       FOREIGN KEY ("user_id")       REFERENCES "user"
    );

