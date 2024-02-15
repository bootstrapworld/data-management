
# Table of Contents

1.  [Overview](#orga482912)
    1.  [This file](#orgfef79e4)
    2.  [Bootstrap](#org3510688)
    3.  [Goals](#orge6cfc0f)
        1.  [What am I doing?](#org86eb1d8)
        2.  [This data model](#org2e65cef)
    4.  [Non-goals](#org541e9ef)
    5.  [Measures of Success](#orgc0af669)
        1.  [Is our org growing?](#orgef63262)
        2.  [Are teachers growing and gaining?](#orgcce5212)
        3.  [Are students learning and growing?](#org7d33b99)
        4.  [Connect a particular change to growth/usage.](#orgca3aab5)
        5.  [Include in Bootstrap overview the essential nature of integrate curriculum](#org7dfb29f)
    6.  [Analysis](#org45e8e46)
        1.  [Appropriateness (Fitness) of Training to Participant](#orgfb7e265)
        2.  [Confidence, Implementation, Growth Sentiment Analysis](#org7a3d188)
        3.  [Skills Analysis](#orgab74fc2)
        4.  [Students](#org88ae857)
        5.  [Correlation Questions](#orgf3573d2)
        6.  [Factors toward implementation](#org30fc56a)
    7.  [Reporting](#org19d2788)
        1.  [Attendance Reports](#orgba6417b)
        2.  [Pre Post Diagnostic Results Analysis](#org1ff1923)
        3.  [Implementation Reports](#orge8506e7)
        4.  [Standardized Achievement](#org222f5fe)
2.  [Data Model](#org782bb83)
    1.  [Grain](#orgc6314bf)
    2.  [Definitions](#org4e0cad1)
        1.  [Contact](#org3d6ae87)
        2.  [User](#org1e0a574)
        3.  [Educator](#org5d16106)
        4.  [Participant](#orgb7d3c94)
        5.  [Teacher](#org2bdeaca)
        6.  [Student](#orgf504026)
        7.  [Partner](#org5b73386)
        8.  [Contract](#orgbb7d481)
        9.  [Stipend](#org4f9a601)
        10. [Administrator](#orgec01313)
        11. [Implementation](#orgda1168c)
        12. [Student achievement](#org60bdfab)
        13. [Curriculum End User](#orgc30f0a7)
        14. [Participant Life Cycle](#org25b9690)
        15. [Training End User](#orgdf1fa05)
        16. [Year Cohort](#org36b1148)
        17. [Partner Cohort](#orga95dd26)
        18. [Curriculum Cohort](#org66e15a5)
        19. [State Cohort](#orgf990609)
        20. [Cohort Admin](#orgb804eb7)
        21. [Master Teacher in Training](#orgbdff7b0)
        22. [Master Teacher](#org492a7cb)
        23. [Facilitator](#orgc25935a)
        24. [Coach](#orgc32b02a)
        25. [Professional Development](#org883fdad)
        26. [Partner Reports](#org4de387e)
        27. [Internal Reports](#orgfecfd69)
    3.  [Dimensions](#org65e769e)
        1.  [Dimension Hierarchy](#orga16b460)
        2.  [Dimension Tables and Attributes](#org7cce18b)
        3.  [Data Tables](#orgddb45c9)
        4.  [Curricula](#org47c0522)
        5.  [Event Types](#orgd56e5ad)
        6.  [Event Formats](#org68e360a)
        7.  [Event Roles](#org51d0991)
        8.  [Race and Ethnicity](#org054ee9e)
        9.  [Gender](#orgd664580)
        10. [Teacher License Area](#org6550dd7)
        11. [Organization Types](#org2045683)
        12. [Subjects](#org90bb936)
        13. [Grades](#org151d916)
        14. [Skills](#orgea4967c)
        15. [Attendance Values](#org9ea209b)
        16. [Assessment Values](#orgd7aef0a)
        17. [States](#org88db11e)
        18. [Locations](#org2a273d4)
        19. [Districts](#org8c6d3e4)
        20. [Schools](#orgf62cade)
        21. [Textbooks](#orgfa4a2b7)
        22. [Assessment Instruments](#orgbf3ae68)
        23. [Feedback Instruments](#org95a2002)
        24. [Partner Organizations](#org1554c2b)
    4.  [User & Event Data](#orge46b116)
        1.  [Users](#orga1916c9)
        2.  [Events](#org1a304ad)
    5.  [Facts](#org006ce20)
        1.  [Implementation](#orgcd7c8f7)
        2.  [Class](#orgaec4be8)
        3.  [Communication Preferences (Opt In/Out)](#org9b43613)
        4.  [Teaching programs (schedule of classes)](#org3902660)
        5.  [Roles](#org125271d)
        6.  [Licences](#org57eb318)
        7.  [Enrollments](#orgaa38b2b)
        8.  [Comments](#orgdea643e)
        9.  [User-Event-Attendance (Attendance)](#org98010a6)
        10. [Contracts](#org0f7c20e)
        11. [Coaching](#org909d731)
        12. [Assessment Instrument Data](#org1dfbf7a)



<a id="orga482912"></a>

# Overview


<a id="orgfef79e4"></a>

## This file

This is the data definition and architecture expressed in POSTGRESQL
for Bootstrap facilitated training events and participant
tracking. This is a literate file written in Orgmode and tangled using
org-babel.


<a id="org3510688"></a>

## Bootstrap

Bootstrap develops curriculum and facilitates training for
professional educators and the organizations that support
them. Bootstrap delivers pedagogical strategies to participant
educators through in-person or virtual learning sessions. Bootstrap
seeks to support teacher from novice learners until they can
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
of teacher's deployment.

Some of Bootstrap's activities can be accessed by the student
directly. However, the primary market for Bootstrap products and
services is the teacher-student classroom where one teacher will
typically work with a groups of fifteen to thirty students. Bootstrap
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
track student academic achievement, and analyzing the relationship
between changes to curriculum, training, and on-going teacher
supports. We hope to facilitate analysis and lead to improvements in
training and curriculum, which become measurably better suited to the
needs of teachers and student achievement over time.

These relationships to outside organizations are orthogonal to the
relationships to Bootstrap. A principal could be a participant
learning Data Science. However, the relationship to the outside
organization affects how the user receives the material and our
expectations of them.


<a id="orge6cfc0f"></a>

## Goals


<a id="org86eb1d8"></a>

### What am I doing?

I am trying to capture the ways Bootstrap is working to grow through a
relational data model.  This model should enable facilitation of
training events, particularly the communication required of
facilitation.  This model should answer key question for the Bootstrap
organization such as how should it grow its trainee support
offerings. This model should hold rolling data for years and
facilitate slicing by year, cohort, etc.


<a id="org2e65cef"></a>

### This data model

The primary goal of this data model is to track and analyze the
efficacy of learning supports created by Bootstrap: curriculum
materials and facilitated trainings events.  Bootstrap hopes to
improve the learning model for professional educators. Support for
educators are successful, if the educator feels confident enough to
actually bring a set of Bootstrap lessons into their
classrooms. Bootstrap further measures success through the achievement
of students who received Bootstrap curriculum.


<a id="org541e9ef"></a>

## Non-goals

It is not a goal at this time to hold curriculum and financial change
records.  Certain aspects of curriculum are represented here in the
assessment model. Lesson titles and curriculum are here and one can
imagine other aspects such as pathway could be stored here.  Contracts
(in the business sense) are represented for the purpose of turning on
services for client cohorts and for reporting back to stakeholders.


<a id="orgc0af669"></a>

## Measures of Success

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


<a id="orgef63262"></a>

### Is our org growing?

1.  Are we bringing in more money?

2.  Are more teachers using our stuff?


<a id="orgcce5212"></a>

### Are teachers growing and gaining?

1.  Are teachers demonstrating growth in skills?

2.  Are teachers reporting growth in confidence?


<a id="org7d33b99"></a>

### Are students learning and growing?

1.  Are teachers submitting artifacts?

2.  Are students demonstrating growth on pre and post tests?


<a id="orgca3aab5"></a>

### Connect a particular change to growth/usage.


<a id="org7dfb29f"></a>

### TODO Include in Bootstrap overview the essential nature of integrate curriculum

Bootstrap's essential nature invite complexities and constraints. Our
target audience is much more reluctant to change because their courses
are standardized and measured. In effect we have chosen the most
difficult teaching population. This plays directly into our
understanding of the free choice spectrum of our teachers. **see Reporting section**


<a id="org45e8e46"></a>

## Analysis


<a id="orgfb7e265"></a>

### Appropriateness (Fitness) of Training to Participant

-   Participant computing background vs implementation
-   Participant subject/license vs implementation
-   Which facilitation techniques are most effective?
-   Which training formats are most appropriate for which participants?
-   How do we track the impact of non-teacher participants? Coaches who may be training others, should we attempt to get those names?
-   How does years of teaching experience affect implementation after training?
-   Which interventions have led to training more teachers to reach more students?
-   Which curriculum is most effective at training teachers to implement?


<a id="org7a3d188"></a>

### Confidence, Implementation, Growth Sentiment Analysis


<a id="orgab74fc2"></a>

### Skills Analysis


<a id="org88ae857"></a>

### Students

-   How many students are we reaching?
    -   How accurate can we get this number?
    -   How can we define a range of students reached?
    -   Can we define an error within which we know a student is reached?
    -   How many students are we reaching per lesson?


<a id="orgf3573d2"></a>

### Correlation Questions

1.  Curriculum Change vs Teacher Confidence

    Curriculum changes aim to increase efficacy of lesson materials. More teachers would be able to navigate more quickly and more lessons would be delivered to more students.
    
    -   Has a given curriculum change increased the efficacy of the lesson materials in a measurable way?
    -   Training Change vs Confidence
    -   Facilitator or Event vs Confidence


<a id="org30fc56a"></a>

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


<a id="org19d2788"></a>

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


<a id="orgba6417b"></a>

### Attendance Reports

-   Cohort attendance, sent to cohort admins (unified by contract)
-   


<a id="org1ff1923"></a>

### Pre Post Diagnostic Results Analysis

-   teacher/participant pre/post from trainings
-   aggregated classroom pre/post on Bootstrap diagnostics
-   pre/post diagnostics from classroom final exam


<a id="orge8506e7"></a>

### Implementation Reports


<a id="org222f5fe"></a>

### Standardized Achievement

Are students achieving higher outcomes on standardized exams that they would already be required to take?
Some teachers administer their own diagnostics, and this practice is increasingly more common in administrative mandates.


<a id="org782bb83"></a>

# Data Model


<a id="orgc6314bf"></a>

## Grain

The grain in our data model is the professional educator and the
classrooms they work in. We measure the efficacy of the training
experience as it relates to various factors in the life of a
professional educator. We collect reactions to our trainings and
followup for a period of time as the teacher attempts to bring
Bootstrap curriculum into the classroom. Pre and post test student
data stops at the teacher level. We do not track students as entities
or store any individual student data.


<a id="org4e0cad1"></a>

## Definitions


<a id="org3d6ae87"></a>

### Contact


<a id="org1e0a574"></a>

### User


<a id="org5d16106"></a>

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


<a id="orgb7d3c94"></a>

### Participant

Is enrolled in a training event in order to learning skills and
content. Not facilitating, observing, or supervising.


<a id="org2bdeaca"></a>

### Teacher

has a role within their organization that places them in front of
students for the majority of their day.  Teachers spend the majority
of their professional time interacting with students, and have the
largest and most direct role in affecting student outcomes and the
quality of the Bootstrap implementation.


<a id="orgf504026"></a>

### Student

Bootstrap students are 10-17 years old, live primarily in the lower 48
states, and attend school in grades 5-12.


<a id="org5b73386"></a>

### Partner

Bootstrap interacts with partners who develop or
support teacher excellence through continued
education or "professional development" for
teachers. Partners include districts, non-profit,
private foundations, corporations, states, and
schools. Individual teachers also join open
enrollment events and may be paying out of pocket.


<a id="orgbb7d481"></a>

### Contract


<a id="org4f9a601"></a>

### Stipend

Teachers often receive some form of compensation
from their school, district, or supporting
organization.


<a id="orgec01313"></a>

### Administrator

Administrators have a role to their organization that places them
supporting teachers for the majority of their day. They are sometimes
the point persons on the contracts (cohort admin), who create training
events and build cohorts. More often teachers are beholden to
administrators who are not directly connected to Bootstrap, but who
may have a large role in the teacher's implementation.


<a id="orgda1168c"></a>

### Implementation

describes a teacher using Bootstrap curriculum with
their students. Bootstrap curriculum is designed to fit in as a module
into existing classes with established goals. Teachers using Bootstrap
in their classes have identified a learning goal or series of goals
that Bootstrap curriculum covers. Depending on the course objectives
and grade band of students different swaths of curriculum are
available. Implementation is a description of the context in which a
teacher is using Boostrap, to what depth and what breadth.


<a id="org60bdfab"></a>

### Student achievement

measures show gains through
pre and post diagnostics of skills covered by the
Bootstrap curriculum. These skills overlap between
Bootstrap curriculum, but have different contexts
that they support. Student learning requires both
high quality curriculum and high quality
deployment by the teacher.


<a id="orgc30f0a7"></a>

### Curriculum End User

The end users of Bootstrap curriculum are students, who will be using tools like
the Pyret or CODAP to build projects.


<a id="org25b9690"></a>

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


<a id="orgdf1fa05"></a>

### Training End User

The end users of Bootsrap trainings are
teachers. In most cases the person in the chair is
a teacher, who will bring the training, pedagogy,
and curriculum back to students in their
classroom.


<a id="org36b1148"></a>

### Year Cohort


<a id="orga95dd26"></a>

### Partner Cohort


<a id="org66e15a5"></a>

### Curriculum Cohort


<a id="orgf990609"></a>

### State Cohort

A partner cohort is a group of teachers supported by a particular
contract. Cohorts begin with a training event and end at a certain date. 


<a id="orgb804eb7"></a>

### Cohort Admin

Within a Bootstrap contract the point persons for the partner
organization are the admins of the contracted event. Admins receive
reporting and communication about their cohort. Cohort admins track teacher
attendance at training events and may disperse stipends to teachers
based on deliverables.


<a id="orgbdff7b0"></a>

### Master Teacher in Training

Has been in trainings for several years and demonstrated proficiency across the concept map


<a id="org492a7cb"></a>

### Master Teacher

Can co-lead a professional development, run coaching sessions, and moderate on the question forum.


<a id="orgc25935a"></a>

### Facilitator

Training events are facilitated by Bootstrap Master Teachers who have
been trained to facilitate events. Typically Master Teachers co-lead
for a period of time before they facilitate events by themselves. A
facilitator is the primary point person for training participants
during and immediately after the training event.


<a id="orgc32b02a"></a>

### Coach

A coach is a Bootstrap Master teacher supporting groups of teachers
through short regular sessions. These sessions are largely driven by
the questions and needs of teachers in the process of using Bootstrap
curriculum in their classrooms.


<a id="org883fdad"></a>

### Professional Development

A training event that covers an entire curriculum is considered
professional development. Participants in professional development
events are trained as both student and teacher. They must understand
the curriculum and the pedagogy behind key point in the curriculum.


<a id="org4de387e"></a>

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


<a id="orgfecfd69"></a>

### Internal Reports

-   Interventions over time
-   Teacher retention
-   Types of facilitation experience vs implementation
-   Teaching context vs implementation


<a id="org65e769e"></a>

## Dimensions

Most schools are members of districts or other support organizations.  Partner
organizations build contracts with Bootstrap to train cohorts of educators. A
partner organization may or may not be a district.


<a id="orga16b460"></a>

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


<a id="org7cce18b"></a>

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


<a id="orgddb45c9"></a>

### Data Tables

    --------------------------------------------------------------------------
    -- Dimensional Data
    --------------------------------------------------------------------------


<a id="org47c0522"></a>

### Curricula

      -- These are internal curricula used in trainings. Participants are associated with their most recent training enrollment curricula.
      -- Currently a training is based on a single curriculum.
    CREATE TABLE IF NOT EXISTS "curricula" (
      "id" SERIAL,
      "name" TEXT
    );


<a id="orgd56e5ad"></a>

### Event Types

    -- The scope of the event    "full", "intro", "coaching", "one-on-one", "office_hour", "review"
    CREATE TABLE IF NOT EXISTS "event_type" (
      "id" SERIAL PRIMARY KEY,
      "event_type" TEXT,
      "date_added" DATE
    );


<a id="org68e360a"></a>

### Event Formats

      --     "intensive",    "distributed",    "one-day",    "half-day"
    CREATE TABLE IF NOT EXISTS "event_format" (
      "id" SERIAL PRIMARY KEY,
      "format" TEXT,
      "date_added" DATE
    );


<a id="org51d0991"></a>

### Event Roles

These are the roles are used with respect to enrollment in an event. They answer the
question what are you doing as part of this event. This list could
grow as the type and complexity of event planning changes.

    CREATE TABLE IF NOT EXISTS "event_role" (
      "id" SERIAL PRIMARY KEY,
      "role" TEXT -- "facilitator", "administrator", "participant", "observer"
    );


<a id="org054ee9e"></a>

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


<a id="orgd664580"></a>

### Gender

    --     "female",    "male",    "transgender",    "none of these"
    CREATE TABLE IF NOT EXISTS "gender" (
      "id" SERIAL PRIMARY KEY,
      "description" TEXT
    );


<a id="org6550dd7"></a>

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


<a id="org2045683"></a>

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


<a id="org90bb936"></a>

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


<a id="org151d916"></a>

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


<a id="orgea4967c"></a>

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


<a id="org9ea209b"></a>

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


<a id="orgd7aef0a"></a>

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


<a id="org88db11e"></a>

### States

    CREATE TABLE IF NOT EXISTS "state" (
      "name_jurisdiction" TEXT,
      "ansi_code"         INTEGER,
      "abbreviation"      varchar(2) PRIMARY KEY
    );


<a id="org2a273d4"></a>

### Locations

    CREATE TABLE IF NOT EXISTS "location" (
      "id" SERIAL PRIMARY KEY,
      "address" TEXT UNIQUE,
      "city"    TEXT,
      "state"   TEXT REFERENCES "state",
      "lat"     NUMERIC,
      "lon"     NUMERIC
    );


<a id="org8c6d3e4"></a>

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


<a id="orgf62cade"></a>

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


<a id="orgfa4a2b7"></a>

### Textbooks

    CREATE TABLE IF NOT EXISTS "textbooks" (
      "id" SERIAL PRIMARY KEY,
      "name"      TEXT,
      "publisher" TEXT,
      "year_published" INTEGER
      );


<a id="orgbf3ae68"></a>

### Assessment Instruments

    CREATE TABLE IF NOT EXISTS "assessment_instrument" (
      "id" SERIAL PRIMARY KEY,
      "name" TEXT,
      "curricula" TEXT REFERENCES "curricula", 
      "skills" TEXT REFERENCES "skill"
    );


<a id="org95a2002"></a>

### Feedback Instruments

    CREATE TABLE IF NOT EXISTS "feedback" (
      "id" SERIAL PRIMARY KEY,
      "name" TEXT,
      "curricula" CURRICULA, 
      "skills" SKILL[]
    );


<a id="org1554c2b"></a>

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


<a id="orge46b116"></a>

## User & Event Data

    --------------------------------------------------------------------------------
    -- User & Event Data
    --------------------------------------------------------------------------------


<a id="orga1916c9"></a>

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


<a id="org1a304ad"></a>

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


<a id="org006ce20"></a>

## Facts

    --------------------------------------------------------------------------------
    -- Fact Tables
    --------------------------------------------------------------------------------


<a id="orgcd7c8f7"></a>

### Implementation

-   Start Data
-   End Data
-   Class


<a id="orgaec4be8"></a>

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


<a id="org9b43613"></a>

### Communication Preferences (Opt In/Out)

    
    CREATE TABLE IF NOT EXISTS "comm_preference" (
      "user_id"    SERIAL PRIMARY KEY,
      "preference" TEXT,
      CONSTRAINT "comm_id" FOREIGN KEY ("user_id") REFERENCES "user"
    );


<a id="org3902660"></a>

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


<a id="org125271d"></a>

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


<a id="org57eb318"></a>

### Licences

    CREATE TABLE IF NOT EXISTS "license" (
      "id"      SERIAL PRIMARY KEY,
      "user_id" INTEGER REFERENCES "user",
      "license" INTEGER REFERENCES "license_area",
      "state"   varchar(2) REFERENCES "state"
    );


<a id="orgaa38b2b"></a>

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


<a id="orgdea643e"></a>

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


<a id="org98010a6"></a>

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


<a id="org0f7c20e"></a>

### Contracts

    CREATE TABLE IF NOT EXISTS "contract" (
      "id"  SERIAL PRIMARY KEY,
      "partner_id" INTEGER,
      "event_id"   TEXT,
      CONSTRAINT "fk_partner" FOREIGN KEY ("partner_id") REFERENCES "organization",
      CONSTRAINT "fk_event"   FOREIGN KEY ("event_id")   REFERENCES "event"
    );


<a id="org909d731"></a>

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


<a id="org1dfbf7a"></a>

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

