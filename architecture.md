
# Table of Contents

1.  [Overview](#org004e27e)
    1.  [This file](#org351521b)
    2.  [Bootstrap](#org7d1b051)
    3.  [Goals](#orgaa3e4f9)
        1.  [What am I doing?](#orgc711bfe)
        2.  [This data model](#org22536fc)
    4.  [Non-goals](#orgd9722d9)
    5.  [Measures of Success](#orgedb86fa)
    6.  [Analysis](#org6e31aa8)
        1.  [Appropriateness (Fitness) of Training to Participant](#org75f9758)
        2.  [Confidence, Implementation, Growth Sentiment Analysis](#org25222e6)
        3.  [Skills Analysis](#org266c3c4)
        4.  [Students](#org46c8545)
        5.  [Correlation Questions](#orgb44ceec)
        6.  [Factors toward implementation](#orgbf43aef)
    7.  [Reporting](#org8c9e535)
        1.  [Attendance Reports](#orge80fbe7)
        2.  [Pre Post Diagnostic Results Analysis](#org70a6fc5)
        3.  [Implementation Reports](#org93c9f60)
        4.  [Standardized Achievement](#org09e56e0)
    8.  [Grain](#org0c589c7)
    9.  [Definitions](#orgebd410f)
        1.  [Teacher and Student](#org4845838)
        2.  [Admin](#orgd60bdfc)
        3.  [Cohort](#org3072487)
        4.  [Facilitator, Master Teacher, and Master Teacher in Training](#org6e7528b)
        5.  [Coach](#org3677ecc)
        6.  [Professional Development](#org3b90a8f)
        7.  [Participant Life Cycle](#org83d5a16)
        8.  [Teacher](#orgda62e13)
        9.  [Partners](#org94f8359)
        10. [Internal analysis](#org917f913)
    10. [Dimensions](#orga9e28f2)
        1.  [Dimension Hierarchy](#org5a8dea6)
        2.  [Dimension Tables and Attributes](#org07f466d)
        3.  [Explanation](#org8456d28)
        4.  [How to represent indepent schools?](#orgab1f3f4)
    11. [Facts](#org45c8476)
2.  [Data Model](#org6ff6203)
    1.  [Core Entity (Primary Dimensions) Tables](#org0bf5da3)
        1.  [Contacts](#org73fa1a0)
        2.  [Users](#orgc19dfc2)
        3.  [Events](#orgee24caf)
        4.  [Organizations](#org27b70e5)
        5.  [Teaching programs (schedule of classes)](#orge6d85df)
        6.  [Assessment Instruments](#orgd5c792d)
        7.  [Feedback Instruments](#org70be525)
        8.  [Attribute (Derived) Tables](#org2c5d4c4)
        9.  [Locations](#org85c0132)
        10. [Licenses](#orgbfba898)
        11. [Schools](#org6a8bd60)
        12. [Districts](#org1a371f1)
        13. [Roles](#orgb07a616)
        14. [Textbooks](#org3c19da0)
        15. [Communication Preferences (Opt In/Out)](#org13315f3)
    2.  [Relationship (Facts) Tables](#orgb6f3c02)
        1.  [Internal and external roles](#orgde0e340)
        2.  [User-Event Roles (Enrollments)](#org6ab55b0)
        3.  [User-Organization Roles (OrgRoles)](#orga416b64)
        4.  [User-Organization Roles (UserOrganizationRoles)](#org7828070)
        5.  [Comments](#org20b3dca)
        6.  [User-Event-Attendance (Attendance)](#orge63a3ed)
        7.  [Contracts](#org3679db5)
        8.  [Coaching](#orgb99138d)
        9.  [Assessment Instrument Data](#orge124271)
        10. [Custom Data Types](#org0bf4ebc)
        11. [Enrollment Roles](#orgdcdfd33)
        12. [Race and Ethnicity](#org8b0bb6b)
        13. [Gender](#org6678fa7)
        14. [License](#org39e3568)
        15. [Organization Types](#org510f3d3)
        16. [What are the organization types we interact with?](#org4cef02e)
        17. [Subjects Taught](#org13d6def)
        18. [Grades Taught](#org9d2ca50)
        19. [Event Formats](#orgeec8ab9)
        20. [Event Types](#org8b12cf8)
        21. [Curricula](#orgf9ef59c)
3.  [The Teacher Journey](#org0a42426)
    1.  [The Bootstrap Participant Landscape](#orgc8b4904)
    2.  [The Timespan of a Teacher Journey](#orgf2184dd)
    3.  [Milestones](#org3cd64f0)
        1.  [Year 1](#orgc2ac34b)
        2.  [Year 2](#orgcac058d)
        3.  [Year 3](#org8ba8061)
    4.  [Communication Plan](#org38b38b6)
        1.  [First Contact](#org03c0432)
        2.  [Preworkshop Intake Data](#org24461b2)
    5.  [On-going Support and Monitoring](#org90b905a)
    6.  [The Journey to Master Teacher](#org2f2be88)



<a id="org004e27e"></a>

# Overview


<a id="org351521b"></a>


## This file

This is the data definition and architecture expressed in POSTGRESQL
for Bootstrap facilitated training events and participant
tracking. This is a literate file written in Orgmode and tangled using
org-babel.

<a id="org7d1b051"></a>

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


<a id="orgaa3e4f9"></a>

## Goals


<a id="orgc711bfe"></a>

### What am I doing?

I am trying to capture the ways Bootstrap is working to grow through a
relational data model.  This model should enable facilitation of
training events, particularly the communication required of
facilitation.  This model should answer key question for the Bootstrap
organization such as how should it grow its trainee support
offerings. This model should hold rolling data for years and
facilitate slicing by year, cohort, etc.


<a id="org22536fc"></a>

### This data model

The primary goal of this data model is to track and analyze the
efficacy of learning supports created by Bootstrap: curriculum
materials and facilitated trainings events.  Bootstrap hopes to
improve the learning model for professional educators. Support for
educators are successful, if the educator feels confident enough to
actually bring a set of Bootstrap lessons into their
classrooms. Bootstrap further measures success through the achievement
of students who received Bootstrap curriculum.


<a id="orgd9722d9"></a>

## Non-goals

It is not a goal at this time to hold curriculum and financial change
records.  Certain aspects of curriculum are represented here in the
assessment model. Lesson titles and curriculum are here and one can
imagine other aspects such as pathway could be stored here.  Contracts
(in the business sense) are represented for the purpose of turning on
services for client cohorts and for reporting back to stakeholders.


<a id="orgedb86fa"></a>

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


<a id="org6e31aa8"></a>

## Analysis


<a id="org75f9758"></a>

### Appropriateness (Fitness) of Training to Participant

-   Participant computing background vs implementation
-   Participant subject/license vs implementation
-   Which facilitation techniques are most effective?
-   Which training formats are most appropriate for which participants?
-   How do we track the impact of non-teacher participants? Coaches who may be training others, should we attempt to get those names?
-   How does years of teaching experience affect implementation after training?
-   Which interventions have led to training more teachers to reach more students?
-   Which curriculum is most effective at training teachers to implement?


<a id="org25222e6"></a>

### Confidence, Implementation, Growth Sentiment Analysis


<a id="org266c3c4"></a>

### Skills Analysis


<a id="org46c8545"></a>

### Students

-   How many students are we reaching?
    -   How accurate can we get this number?
    -   How can we define a range of students reached?
    -   Can we define an error within which we know a student is reached?
    -   How many students are we reaching per lesson?


<a id="orgb44ceec"></a>

### Correlation Questions

1.  Curriculum Change vs Teacher Confidence

    Curriculum changes aim to increase efficacy of lesson materials. More teachers would be able to navigate more quickly and more lessons would be delivered to more students.
    
    -   Has a given curriculum change increased the efficacy of the lesson materials in a measurable way?
    -   Training Change vs Confidence
    -   Facilitator or Event vs Confidence


<a id="orgbf43aef"></a>

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


<a id="org8c9e535"></a>

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

<a id="orge80fbe7"></a>

### Attendance Reports

-   Cohort attendance, sent to cohort admins (unified by contract)
-   


<a id="org70a6fc5"></a>

### Pre Post Diagnostic Results Analysis

-   teacher/participant pre/post from trainings
-   aggregated classroom pre/post on Bootstrap diagnostics
-   pre/post diagnostics from classroom final exam


<a id="org93c9f60"></a>

### Implementation Reports


<a id="org09e56e0"></a>

### Standardized Achievement

Are students achieving higher outcomes on standardized exams that they would already be required to take?
Some teachers administer their own diagnostics, and this practice is increasingly more common in administrative mandates.


<a id="org0c589c7"></a>

## Grain

The grain in our data model is the professional educator and the
classrooms they work in. We measure the efficacy of the training
experience as it relates to various factors in the life of a
professional educator. We collect reactions to our trainings and
followup for a period of time as the teacher attempts to bring
Bootstrap curriculum into the classroom. Pre and post test student
data stops at the teacher level. We do not track students as entities
or store any individual student data.


<a id="orgebd410f"></a>

## Definitions


<a id="org4845838"></a>


### Teacher and Student

Teachers spend the majority of their professional
time interacting with students.

Bootstrap interacts with partners who develop or
support teacher excellence through continued
education or "professional development" for
teachers. Partners include districts, non-profit,
private foundations, corporations, states, and
schools. Individual teachers also join open
enrollment events and may be paying out of pocket.

Teachers often receive some form of compensation
from their school, district, or supporting
organization.

Partners often request reports, especially
attendance, which they use to track participant
participation and to validate stipends. The
partner may or may not have requirements for the
form of the report.

Professional educators are often teachers or have
had experience in the classroom, but can also be
administrators, paraprofessionals, learning
coaches, or department coordinators. We wish to
track the changing role our teachers have to their
profession and employer. We wish to know a
teachers current schedule and where in that
schedule they have been able to utilize Bootstrap
curricula or pedagogy.

Teachers have the largest and most direct role in
affecting student outcomes and the quality of the
Bootstrap implementation.

Bootstraps primary aim is to support student
learning in core academic skills, especially
mathematical reasoning. Teachers are the
professionals who deploy Bootstrap content. The
quality of that deployment directly correlates to
student achievement with Bootstrap.  Whether
Bootstrap curricula meets its aim to boost
standardized achievement relies on the quality of
teacher's deployment.

Administrators oversee teachers. They are the
point persons on the contracts the create training
events and build cohorts. Administrators track
teacher attendance at training events and may
disperse stipends to teachers based on
deliverables.

Implementation describes a teacher using Bootstrap
curriculum with their students. Bootstrap
curriculum is designed to fit in as a module into
existing classes with established goals. Teachers
using Bootstrap in their classes have identified a
learning goal or series of goals that Bootstrap
curriculum covers. Depending on the course
objectives and grade band of students different
swaths of curriculum are available. Implementation
is a description of the context in which a teacher
is using Boostrap, to what depth and what breadth.

Student achievement measures show gains through
pre and post diagnostics of skills covered by the
Bootstrap curriculum. These skills overlap between
Bootstrap curriculum, but have different contexts
that they support. Student learning requires both
high quality curriculum and high quality
deployment by the teacher.

Teacher learning &#x2026;

1.  Curriculum End User

    The end users of Bootstrap curriculum are students, who will be using tools like
    the Pyret or CODAP to build projects.

2.  Training End User

    The end users of Bootsrap trainings are
    teachers. In most cases the person in the chair is
    a teacher, who will bring the training, pedagogy,
    and curriculum back to students in their
    classroom.
    
    Sometimes the person in the chair works alongside teachers and will take the
    learning from Bootstrap back to their teachers in their own professional
    enrichment setting.


<a id="orgd60bdfc"></a>

### Admin

Within a Bootstrap contract the point persons for the partner
organization are the admins of the contracted event. Admins receive
reporting and communication about their cohort.

<a id="org3072487"></a>

### Cohort

A cohort is a group of teachers supported by a particular
contract. Cohorts begin with a training event and a certain date. 

<a id="org6e7528b"></a>

### Facilitator, Master Teacher, and Master Teacher in Training

Training events are facilitated by Bootstrap Master Teachers. A
facilitator is the primary point person for training participants
during and immediately after the training event.

<a id="org3677ecc"></a>

### Coach

A coach is a Bootstrap Master teacher supporting groups of teachers
through short regular sessions. These sessions are largely driven by
the questions and needs of teachers in the process of using Bootstrap
curriculum in their classrooms.

<a id="org3b90a8f"></a>

### Professional Development

A training event that covers an entire curriculum is considered
professional development. Participants in professional development
events are trained as both student and teacher. They must understand
the curriculum and the pedagogy behind key point in the curriculum.

<a id="org83d5a16"></a>

### Participant Life Cycle

-   Intake
-   Onboarding
-   Training
-   Implementation with Support
-   Solo Implementation
-   Master Teacher in Training
-   Master Teacher

<a id="orgda62e13"></a>

### Teacher

has a role within their organization that places them in front
of students for the majority of their day.

Administrators have a role to their organization that places them
supporting teachers for the majority of their day.

These relationships to the outside organization are orthogonal to the
relationships to Bootstrap trainings. However, the relationship to the
outside organization affects how the 

This data model seeks to capture the changing roles educators have to their external
organizations and to their students.  and how that affects their relationship
with us.

Things to change about the curriculum.

Things to change about training.

Things to change about on-going support.

Quality assurance 


<a id="org94f8359"></a>

### Partners

Reports for partners include

-   a teacher level attendance report
-   a teacher level proficiency report
-   cohort aggregations
-   implementation reports


<a id="org917f913"></a>

### Internal analysis

-   Interventions over time
-   Teacher retention
-   Types of facilitation experience vs implementation
-   Teaching context vs implementation


<a id="orga9e28f2"></a>


## Dimensions

<a id="org5a8dea6"></a>

### Dimension Hierarchy

-   Contact
    -   User #subset, rather than child
        -   Enrollment
-   Curriculum
    -   Skills
-   Partner
    -   Contract
-   Cohort
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


<a id="org07f466d"></a>

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


<a id="org8456d28"></a>


### Explanation

All (most) schools have districts or other support organizations.  Partner
organizations build contracts with Bootstrap to train cohorts of educators. A
partner organization could also be a district and referenced with a foreign key.

<a id="orgab1f3f4"></a>

### TODO How to represent indepent schools?

<a id="org45c8476"></a>

## Facts

-   Implementation
    -   Start Data
    -   End Data
    -   Class
-   Class
    -   School
    -   \# Students
    -   Demographics
    -   Grade Level
    -   Course Name
    -   Subject
    -   Level
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

<a id="org6ff6203"></a>

# Data Model


<a id="org0bf5da3"></a>

## Core Entity (Primary Dimensions) Tables

These tables are descriptive data elements that make up the relationships in our
system. They represent everything we know about the people, organizations, and
events in our facilitation ecosystem.


<a id="org73fa1a0"></a>

### Contacts

Anyone who has interacted with Bootstrap, who ever
signed up for an event, even if they did not
attend. Anyone who joined the mailing list through
a web form, reached out directly to Bootstrap
staff, messaged through social media, requested
answer keys, or joined Discourse.

    CREATE TABLE IF NOT EXISTS "contacts" (
      "id" SERIAL PRIMARY KEY, --varchar(255),
      NameFirst varchar(255),
      NameLast varchar(255),
      AltNameFirst varchar(255),
      AltNameLast varchar(255),
      emailPersonal varchar(255),
      emailProfessional varchar(255)
    );

<a id="orgc19dfc2"></a>

### Users

All of the individual persons who make up the Bootstrap event
facilitation ecosystem. Users are required to submit a full personal
and professional questionaire. Contacts become users when they have
completed training paperwork.

    CREATE TABLE users ( userID varchar(255), contactID varchar(255)
      REFERENCES contacts (contactID), lastName varchar(255), firstName
      varchar(255), userAddress varchar(255), userCity varchar(255),
      userState varchar(255), homePhone varchar(15), cellPhone
      varchar(15), workPhone varchar(15), gender varchar(255) REFERENCES
      gender (genderID), race varchar(255) REFERENCES race (raceID) );

<a id="orgee24caf"></a>

### Events

Bootstrap facilitates events for professional educators. These events focus on
the conceptual understanding and implementation of Bootstrap curriculum.

    CREATE TABLE "events" ( "event_id" varchar(255), eventName
      varchar(255), eventDays int CONSTRAINT positive_days CHECK
      (eventDays > 0),
      --length in days eventType varchar(255) REFERENCES eventTypes
      (typeID), eventFormat varchar(255) REFERENCES eventFormats
      (formatID), );


<a id="org27b70e5"></a>

### Organizations

Bootstrap partners with external organizations to build contracts
for facilitated events. Organizations can be municipal or state
level education districts, non-profits, individual schools, private
individuals, or Bootstrap itself.

-   State
-   Main Email
-   Type

    --Main Tables Users, Organizations, Events CREATE TABLE organizations
    ( orgID varchar(255), orgAddress varchar(255), orgCity varchar(255),
    orgState varchar(255) );


<a id="orge6d85df"></a>

### Teaching programs (schedule of classes)

    -- a class in a teachers program tells us the subject and grade level
    where the teacher will be interacticng with students CREATE TABLE IF
    NOT EXISTS "classes" ( "teacher_id" , "class_id" PRIMARY KEY,
    "class_name" , "class_subject" SUBJECT, "class_gradelevel" GRADELEVEL,
    "class_start_date" DATE, "class_end_date" DATE, CONSTRAINT
    "fk_teacher" FOREIGN KEY ("teacher_id") REFERENCES "users" ("user_id")
    );

    CREATE TABLE IF NOT EXISTS "certification" ( -- tracks the
    certifications relative to state wide professional educators
    "teacher_id" varchar(255), "cert_id" varchar(255), "state_ab"
    varchar(2), "title" varchar(255), "subject" varchar(255), CONTSTRAINT
    "fk_teacher" FOREIGN KEY ("teacher_id") REFERENCES "users" ("user_id")
    );


<a id="orgd5c792d"></a>

### Assessment Instruments

    CREATE TABLE assessments ( assessmentID varchar(255) );


<a id="org70be525"></a>

### Feedback Instruments


<a id="org2c5d4c4"></a>

### Attribute (Derived) Tables


<a id="org85c0132"></a>

### Locations


<a id="orgbfba898"></a>

### Licenses


<a id="org6a8bd60"></a>

### Schools


<a id="org1a371f1"></a>

### Districts


<a id="orgb07a616"></a>

### Roles


<a id="org3c19da0"></a>

### Textbooks

    CREATE TABLE Textbooks ( textBookID varchar(255), textBookName
      varchar(255), textBookPublisher varchar(255) );


<a id="org13315f3"></a>

### TODO Communication Preferences (Opt In/Out)


<a id="orgb6f3c02"></a>

## Relationship (Facts) Tables


<a id="orgde0e340"></a>

### Internal and external roles

People have different relationships to our facilitated events. Current roles
relative to events are Facilitator, Participant, Admin, and Master Teacher in
Training.


<a id="org6ab55b0"></a>

### User-Event Roles (Enrollments)

    
    --Relationship Tables
    
    CREATE TABLE enrollments ( enrollmentID varchar(255), userID
      varchar(255) REFERENCES Users (UserID) );


<a id="orga416b64"></a>

### User-Organization Roles (OrgRoles)

    CREATE TABLE orgRoles ( userID varchar(255) REFERENCES users (UserID),
      orgID varchar(255) REFERENCES organizations (OrgID), roleID
      varchar(255) REFERENCES roles (RoleID)
    
    CREATE TABLE Enrollments ( EnrollmentID varchar(255), UserID
      varchar(255) REFERENCES Users (UserID) );


<a id="org7828070"></a>

### User-Organization Roles (UserOrganizationRoles)

    CREATE TABLE UserOrganizationRoles ( UserID varchar(255) REFERENCES
      Users (UserID), OrgID varchar(255) REFERENCES Organizations (OrgID),
      RoleID varchar(255) REFERNCES Roles (RoleID)
    
    );


<a id="org20b3dca"></a>

### Comments

    
    CREATE TABLE comments ( authorUserID varchar(255), regardingUserID
      varchar(255), commentDate varchar(255), tagUserID varchar(255),
      commentType varchar(255)
    
    );


<a id="orge63a3ed"></a>

### User-Event-Attendance (Attendance)

    
    CREATE TABLE attendance ( serID varchar(255), eventID varchar(255),
      attendanceDate Date, attendancePeriod varchar(255), attendanceValue
      varchar(255)
    
    );


<a id="org3679db5"></a>

### Contracts

Organizations and individual create contracts with
Bootsrap that lead to the create

    CREATE TABLE Contracts ( ContractID varchar(255), OrgID varchar(255)
      REFERENCES Organizations (OrgID), EventID varchar(255) REFERENCES
      Events (EventID) );


<a id="orgb99138d"></a>

### Coaching

Coaching is included in some contracts. The
coaching table is a postive entry table. Users
present in the coaching table are invited to
coaching sessions throughout the year. Enrollment
in coaching is for one year and is specific to a
curriculum. Usually you are assigned coaching for
the curriculum in which you were trained in the
same calendar year.

    CREATE TABLE Coaching ( -- Coaching is a postive entry table. A user
    found in this table has -- coaching included in their contract );


<a id="orge124271"></a>

### Assessment Instrument Data

    
    CREATE TABLE instrumentData ( instrumentDataID varchar(255), userID
      varchar(255) REFERENCES Users (userID), submitted varchar(255)
      timestamp with time zone, instrumentData text );


<a id="org0bf4ebc"></a>

### Custom Data Types

I'm still working out which helper collections are ENUMs.

types and which we add to a helper table. My intuition is that there are short
sets that we know already and that aren't likely to change, such as race, and
there are longer sets like the textbooks that might continue to grow.


<a id="orgdcdfd33"></a>

### Enrollment Roles

These are the roles with respect to our enrollment relationship. They answer the
question what are you doing as part of this event. This list could grow as the
type and complexity of event planning changes.

Some rules attached to these roles. For example, perhaps a participant cannot be
enrolled to an event before a facilitator has first been enrolled.

    CREATE TYPE "enrollment_roles" AS ENUM ('facilitator', 'participant',
    'admin', 'master teacher in training' );


<a id="org8b0bb6b"></a>

### Race and Ethnicity

    CREATE TYPE race AS ENUM ('American Indian or Alaska Native', 'Asian',
    'Black or African American', 'Native Hawaiian or Other Pacific
    Islander', 'White' );
    
    CREATE TYPE ethnicity AS ENUM ('Hispanic or Latino', 'Not Hispanic or
    Latino' );


<a id="org6678fa7"></a>

### Gender

    CREATE TYPE gender AS ENUM ('Male', 'Female', 'Transgender', 'None of
    these');


<a id="org39e3568"></a>

### License

    CREATE TYPE license AS ENUM ('Math', 'Science', 'Social Studies',
    'English', 'Language other than English', 'Elementary General Ed',
    'Special Education');
    
    CREATE TABLE license ( userID varchar(255) REFERENCES users (userID),
      license varchar(255), licenseState varchar(255) );


<a id="org510f3d3"></a>

### Organization Types


<a id="org4cef02e"></a>

### TODO What are the organization types we interact with?

Is this redundant from Insightly?

    CREATE TYPE orgTypes AS ENUM ('Non-profit', 'For-profit', 'School',
    'District', 'State Government Office', 'Foundation');


<a id="org13d6def"></a>

### Subjects Taught

    CREATE TYPE subjectsTaught AS ENUM ('AP', 'Algebra', 'Geometry',
    'Biology' );


<a id="org9d2ca50"></a>

### Grades Taught

    
    CREATE TYPE "grades_taught" AS ENUM ('1st', '2nd', '3rd', '4th',
    '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th');


<a id="orgeec8ab9"></a>

### Event Formats

    
    CREATE TYPE "event_formats" AS ENUM ('Intensive', 'Distributed',
    'One-day', '2-hour' );


<a id="org8b12cf8"></a>

### Event Types

    CREATE TYPE eventTypes AS ENUM ('Full PD', 'Intro PD', 'Coaching',
    'Academic Year Workshop' );


<a id="orgf9ef59c"></a>

### Curricula

    CREATE TYPE curricula AS ENUM ('Algebra', 'Data Science', 'Physics',
    'Algebra 2', 'Early Math', 'Data Science (CODAP)' );


<a id="org0a42426"></a>

# The Teacher Journey


<a id="orgc8b4904"></a>

## The Bootstrap Participant Landscape

Professional educators find themselves in a Bootsrap training from a
variety of pathways. Typically, partner organizations build training
contracts for cohorts of teachers, which leads to participants with a
range of motivations and prior knowledge.

Bootstrap curriculum is freely available on the internet. Teachers
attend trainings (and have done so for many years), and those who have
been trained contiue to expose others. Teachers who attend Bootstrap
trainings generally love their experience, hence word of mouth brings
teachers in.

1.  TODO Add data table for how you connect to bootstrap

    This is to distinguish from the teacher added by an administrator without intrinsic interest


<a id="orgf2184dd"></a>

## The Timespan of a Teacher Journey

How long does a teacher receive support and monitoring? Educators can
attend multiple workshops. Does the clock reset? Do we track cohort
contracts, which may have different time lengths for continued
support? Do we continue to assess teaching confidence and strength of
implementation and offer support as long as the teacher is using
Bootstrap curricula? What is the average or typical journey? Are their
logical subsets that may have different typical journeys?

Analysis of our current implementers will help. We have responses to the
implementation survey. We have attendance at coaching and we have on-going
contact. In the future we hope to have users log into a website where we can
track lesson plan usage and custom pathways.


<a id="org3cd64f0"></a>

## Milestones


<a id="orgc2ac34b"></a>

### Year 1


<a id="orgcac058d"></a>

### Year 2


<a id="org8ba8061"></a>

### Year 3


<a id="org38b38b6"></a>

## Communication Plan


<a id="org03c0432"></a>

### First Contact

First contact can be casual or formal. Casual contacts include requests for
information through web forms, posting or emailing questions, and tags on social
media. Formal contacts are typically enrolled in a workshop; the first they hear
from us would be a formal welcome to a training event with logistic information.


<a id="org24461b2"></a>

### Preworkshop Intake Data

Information prior to enrolling in a full training scenario is used to
ensure the training is appropriate for the participant, the
training addresses participant needs, and . So, what do we want or need to know
about our teachers?

We want to know how to contact them. We want to know two email
addresses for each person: their school or organization based address
and a personal or persistent address that would not change if they
left their current position. Teachers may change schools, but they
remain Bootstrap teachers.

We want to know about their training and prior
experience. Professional educators typically hold certification and
licensure. Their state has typically granted and certification and
their municipallity has licensed them to teach in the district. A
teacher could work at an independent school and have no certification
or licensure. A teacher could be instructing classes within their
licensed area or outside of it.

We want to know about the classes they are currently teaching and the classes
they plan to teach next year. We want to know the subject and grade level of
those classes, which may be different for each class. Hence, we actually want a
siimplified class program for each of our participants.


<a id="org90b905a"></a>

## On-going Support and Monitoring


<a id="org2f2be88"></a>

## The Journey to Master Teacher


