
# Table of Contents

1.  [Introduction](#orgc259242)
    1.  [This file](#org0a72aec)
    2.  [Bootstrap](#orgda6924e)
    3.  [Goals](#orgdfefe1f)
    4.  [Reporting Needs](#orgb6d6c46)
        1.  [Partners](#org7c54ad8)
        2.  [Internal analysis](#org16b291d)
2.  [Data Model](#org3d62e25)
    1.  [Business requirements and relationships between them:](#orgb6e4d5f)
        1.  [Products and Services](#org5d73f2f)
        2.  [Reporting](#orgeaeb95c)
        3.  [Analysis](#org5b17a63)
    2.  [Definitions](#orgf0797cd)
        1.  [Curriculum End User](#org66dbd5f)
        2.  [Training End User](#orgdbb0830)
        3.  [Teacher and Student](#orgb9a3a0b)
        4.  [Admin](#org5a3da8c)
        5.  [Cohort](#org0ebdfa6)
        6.  [Facilitator, Master Teacher, and Master Teacher in Training](#org71bbe60)
        7.  [Coach](#org7f81d6f)
        8.  [Professional Development](#org4770178)
        9.  [Participant Life Cycle](#org3eafd89)
    3.  [Grain](#org72392b3)
    4.  [Dimensions](#orgbd88b42)
        1.  [Dimension Hierarchy](#org35b2136)
        2.  [Dimension Tables and Attributes](#org3834cf2)
        3.  [Explanation](#org0327325)
    5.  [Measures](#orgae7e635)
    6.  [Facts](#orgb328ac6)
3.  [The Teacher Journey](#org67f7017)
    1.  [The Timespan of a Teacher Journey](#org937deec)
    2.  [Communication Plan](#org04a4bfe)
        1.  [First Contact](#org0fad234)
        2.  [Contacts](#org8698df8)
        3.  [Preworkshop Intake Data](#org1c6f9e2)
        4.  [Intake data](#orgdc81c2c)
    3.  [On-going Support and Monitoring](#orgb498754)
    4.  [The Journey to Master Teacher](#org82e2d14)
4.  [Custom Data Types](#org903a2ac)
    1.  [Enrollment Roles](#orge39f170)
    2.  [Race and Ethnicity](#org0360a14)
    3.  [Gender](#org342f59e)
    4.  [License](#orgf2676a3)
    5.  [Organization Types](#org11a9dec)
    6.  [Subjects Taught](#org38f91c8)
    7.  [Grades Taught](#org3f13575)
    8.  [Event Formats](#orgbc9d329)
    9.  [Event Types](#org6c38b9f)
    10. [Curricula](#orga7a4f7a)
5.  [Core Entity (Primary Dimension) Tables](#org1b1b73e)
    1.  [Contacts](#org2066ef8)
    2.  [Users](#org2016988)
    3.  [Events](#org09cd825)
    4.  [Organizations](#orgcb6cb15)
    5.  [Assessment Instruments](#org73ce3d7)
    6.  [Feedback Instruments](#orgb9b6df7)
    7.  [Intake Instruments](#org0706c13)
6.  [Attribute (Derived) Tables](#org59573d1)
    1.  [Locations](#orga6d5de2)
    2.  [Licenses](#orgd3d0939)
    3.  [Schools](#orgf2aa406)
    4.  [Districts](#org2b5a4ec)
    5.  [Roles](#org39cfeeb)
    6.  [Textbooks](#orgaa3f0fb)
7.  [Relationship Tables](#org44ba1a9)
    1.  [Internal and external roles](#org0dbbc31)
    2.  [User-Event Roles (Enrollments)](#org4f63257)
    3.  [User-Organization Roles (OrgRoles)](#org850456c)
    4.  [User-Organization Roles (UserOrganizationRoles)](#orgc549c2c)
    5.  [Comments](#org9387784)
    6.  [User-Event-Attendance (Attendance)](#org72c4eee)
    7.  [Contracts](#orgecb6dc7)
    8.  [Coaching](#org14c5a2c)
    9.  [Assessment Instrument Data](#orga653c9c)



<a id="orgc259242"></a>

# Introduction


<a id="org0a72aec"></a>

## This file

This is the data definition and architecture expressed in POSTGRESQL
for Bootstrap facilitated training events and participant
tracking. This is a literate file written in Orgmode and tangled using
org-babel.


<a id="orgda6924e"></a>

## Bootstrap

Bootstrap develops curriculum and facilitates training for professional
educators and the organizations that support. Bootstrap delivers
pedagogical strategies to participant educators through in-person or
virtual learning sessions. Bootstrap seeks to support teacher from
novice learners until they can confidently implement Bootstrap
curriculum in their classrooms.


<a id="orgdfefe1f"></a>

## Goals

This data models primary goal is to track and analyze the efficacy
of learning supports. Bootstrap hopes to continually improve the
learning model for professional educators. Support for educators are
successful if the educator feels confident to use Bootstrap curriculum
with their students. Bootstrap further measures success through the
achievement of students who received Bootstrap curriculum.

Many factors affect

Good reasons vs within our control

Implementers vs non-implementers within teachers.

Teachers have a role to their organization that places them in front
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


<a id="orgb6d6c46"></a>

## Reporting Needs


<a id="org7c54ad8"></a>

### Partners

Reports for partners include

-   a teacher level attendance report
-   a teacher level proficiency report
-   cohort aggregations
-   implementation reports


<a id="org16b291d"></a>

### Internal analysis

-   Interventions over time
-   Teacher retention
-   Types of facilitation experience vs implementation
-   Teaching context vs implementation


<a id="org3d62e25"></a>

# Data Model


<a id="orgb6e4d5f"></a>

## Business requirements and relationships between them:


<a id="org5d73f2f"></a>

### Products and Services

Bootstrap develops curriculum for k-12 classrooms and trains teachers
to use it with their students. Bootstrap trainings prepare teachers to
deliver the curriculum such that their students can demonstrate
certain skills.

Bootstrap has some activities that can be accessed by the student
directly. However, the primary market for Bootstrap products and
services is the teacher student classroom where one teacher will
typically work with a groups of fifteen to thirty students.

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
assistants and para professional on the one hand and teacher
supervisors, administrators, and coaches on the other. We also note
the attendance of participants and observers who do not interact with
classrooms in their daily work, but are otherwise connect to Bootstrap.

The Bootstrap data model collects data for improving the curriculum, track
student academic achievement, and analyzing the relationship between changes to
curriculum, training, and on-going teacher supports. Over time the trainings and
curriculum becomes better suited to the needs of teachers and student
achievement. 


<a id="orgeaeb95c"></a>

### Reporting

Bootstrap partners are in the business of supporting student
learning. Additionally partners may have special interest in a particular
student grouping.

Partners may employ teachers and run schools or they may be an organization or
foundation that is interested in education, technology, equity, or other special
interest that overlaps with Bootstrap products and service

Partners are interested in how well the curriculum supports student
achievement. Bootstrap's niche is supporting student learning in traditional
core subjects such as Algebra.

1.  Attendance Reports

2.  Pre Post Diagnostic Results

3.  Implementation Reports

4.  Standardized Achievement Reports


<a id="org5b17a63"></a>

### Analysis

1.  Confidence, Implementation, Growth

2.  Correlation Questions

    -   Curriculum Change vs Teacher Confidence
    -   Training Change vs Confidence
    -   Facilitator or Event vs Confidence


<a id="orgf0797cd"></a>

## Definitions


<a id="org66dbd5f"></a>

### Curriculum End User

The end users of Bootstrap curriculum are students, who will be using tools like
the Pyret or CODAP to build projects.


<a id="orgdbb0830"></a>

### Training End User

The end users of Bootsrap trainings are
teachers. In most cases the person in the chair is
a teacher, who will bring the training, pedagogy,
and curriculum back to students in their
classroom.

Sometimes the person in the chair works alongside teachers and will take the
learning from Bootstrap back to their teachers in their own professional
enrichment setting.


<a id="orgb9a3a0b"></a>

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


<a id="org5a3da8c"></a>

### Admin

Within a Bootstrap contract the point persons for the partner
organization are the admins of the contracted event. Admins receive
reporting and communication about their cohort.


<a id="org0ebdfa6"></a>

### Cohort

A cohort is a group of teachers supported by a particular
contract. Cohorts begin with a training event and a certain date. 


<a id="org71bbe60"></a>

### Facilitator, Master Teacher, and Master Teacher in Training

Training events are facilitated by Bootstrap Master Teachers. A
facilitator is the primary point person for training participants
during and immediately after the training event.


<a id="org7f81d6f"></a>

### Coach

A coach is a Bootstrap Master teacher supporting groups of teachers
through short regular sessions. These sessions are largely driven by
the questions and needs of teachers in the process of using Bootstrap
curriculum in their classrooms.


<a id="org4770178"></a>

### Professional Development

A training event that covers an entire curriculum is considered
professional development. Participants in professional development
events are trained as both student and teacher. They must understand
the curriculum and the pedagogy behind key point in the curriculum.


<a id="org3eafd89"></a>

### Participant Life Cycle

-   Intake
-   Onboarding
-   Training
-   Implementation with Support
-   Solo Implementation
-   Master Teacher in Training
-   Master Teacher


<a id="org72392b3"></a>

## Grain

The grain in our data model is the professional educator. We measure the
efficacy of the training experience as it relates to various factors in the life
of a professional educator. We collect reactions to our trainings and followup
for a period of time as the teacher attempts to bring Bootstrap curriculum into
the classroom. Pre and post test student data stops at the teacher level. We do
not track students as entities or store any individual student data.


<a id="orgbd88b42"></a>

## Dimensions


<a id="org35b2136"></a>

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
-   States
    -   Districts
        -   Schools
            -   Classes
                -   Teachers


<a id="org3834cf2"></a>

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


<a id="org0327325"></a>

### Explanation

All (most) schools have districts or other support organizations.  Partner
organizations build contracts with Bootstrap to train cohorts of educators. A
partner organization could also be a district and referenced with a foreign key.


<a id="orgae7e635"></a>

## Measures

-   Implementation
-   Attendance
-   Interaction
-   Workbooks
-   Assessment
-   Pathway


<a id="orgb328ac6"></a>

## Facts

-   Implementation
    -   State
    -   District
    -   School
    -   Teacher
    -   Student
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


<a id="org67f7017"></a>

# The Teacher Journey

Professional educators find themselves in a Bootsrap training from a variety of
pathways. Bootstrap curriculum is freely available on the internet. Bootstrap
has trained teachers across the country for many years and teachers generally
love their experience, hence word of mouth brings teachers in. Partner
organizations build training contracts for cohorts of teachers for a variety of
reasons, which lead to participants with a range of motivation and contextual
appropriateness.


<a id="org937deec"></a>

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


<a id="org04a4bfe"></a>

## Communication Plan


<a id="org0fad234"></a>

### First Contact

First contact can be casual or formal. Casual contacts include requests for
information through web forms, posting or emailing questions, and tags on social
media. Formal contacts are typically enrolled in a workshop; the first they hear
from us would be a formal welcome to a training event with logistic information.


<a id="org8698df8"></a>

### Contacts

Contact data allows us to send a message with a
general idea of who the person is. At minimum a
first contact is an email address, a first and
last name, a job title, and a what brings you
here.

        CREATE TABLE IF NOT EXISTS "contacts" ( "id" SERIAL PRIMARY KEY,
    
    );


<a id="org1c6f9e2"></a>

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


<a id="orgdc81c2c"></a>

### Intake data

1.  Teacher program

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


<a id="orgb498754"></a>

## On-going Support and Monitoring


<a id="org82e2d14"></a>

## The Journey to Master Teacher


<a id="org903a2ac"></a>

# Custom Data Types

I'm still working out which helper collections are ENUMs.

types and which we add to a helper table. My intuition is that there are short
sets that we know already and that aren't likely to change, such as race, and
there are longer sets like the textbooks that might continue to grow.


<a id="orge39f170"></a>

## Enrollment Roles

These are the roles with respect to our enrollment relationship. They answer the
question what are you doing as part of this event. This list could grow as the
type and complexity of event planning changes.

Some rules attached to these roles. For example, perhaps a participant cannot be
enrolled to an event before a facilitator has first been enrolled.

    CREATE TYPE "enrollment_roles" AS ENUM ('facilitator', 'participant',
    'admin', 'master teacher in training' );


<a id="org0360a14"></a>

## Race and Ethnicity

    CREATE TYPE race AS ENUM ('American Indian or Alaska Native', 'Asian',
    'Black or African American', 'Native Hawaiian or Other Pacific
    Islander', 'White' );
    
    CREATE TYPE ethnicity AS ENUM ('Hispanic or Latino', 'Not Hispanic or
    Latino' );


<a id="org342f59e"></a>

## Gender

    CREATE TYPE gender AS ENUM ('Male', 'Female', 'Transgender', 'None of
    these');


<a id="orgf2676a3"></a>

## License

    CREATE TYPE license AS ENUM ('Math', 'Science', 'Social Studies',
    'English', 'Language other than English', 'Elementary General Ed',
    'Special Education');
    
    CREATE TABLE license ( userID varchar(255) REFERENCES users (userID),
      license varchar(255), licenseState varchar(255) );


<a id="org11a9dec"></a>

## Organization Types

    CREATE TYPE orgTypes AS ENUM ('Non-profit', 'For-profit', 'School',
    'District', 'State Government Office', 'Foundation');


<a id="org38f91c8"></a>

## Subjects Taught

    CREATE TYPE subjectsTaught AS ENUM ('AP', 'Algebra', 'Geometry',
    'Biology' );


<a id="org3f13575"></a>

## Grades Taught

    
    CREATE TYPE "grades_taught" AS ENUM ('1st', '2nd', '3rd', '4th',
    '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th');


<a id="orgbc9d329"></a>

## Event Formats

    
    CREATE TYPE "event_formats" AS ENUM ('Intensive', 'Distributed',
    'One-day', '2-hour' );


<a id="org6c38b9f"></a>

## Event Types

    CREATE TYPE eventTypes AS ENUM ('Full PD', 'Intro PD', 'Coaching',
    'Academic Year Workshop' );


<a id="orga7a4f7a"></a>

## Curricula

    CREATE TYPE curricula AS ENUM ('Algebra', 'Data Science', 'Physics',
    'Algebra 2', 'Early Math', 'Data Science (CODAP)' );


<a id="org1b1b73e"></a>

# Core Entity (Primary Dimension) Tables

These tables are descriptive data elements that make up the relationships in our
system. They represent everything we know about the people, organizations, and
events in our facilitation ecosystem.


<a id="org2066ef8"></a>

## Contacts

Anyone who has interacted with Bootstrap, who ever
signed up for an event, even if they did not
attend. Anyone who joined the mailing list through
a web form, reached out directly to Bootstrap
staff, messaged through social media, requested
answer keys, or joined Discourse.

    CREATE TABLE contacts ( ContactID varchar(255), NameFirst
      varchar(255), NameLast varchar(255), AltNameFirst varchar(255),
      AltNameLast varchar(255), emailPersonal varchar(255),
      emailProfessional varchar(255) );


<a id="org2016988"></a>

## Users

All of the individual persons who make up the
Bootstrap event facilitation ecosystem. Users are
required to submit a full personal and
professional questionaire.

    CREATE TABLE users ( userID varchar(255), contactID varchar(255)
      REFERENCES contacts (contactID), lastName varchar(255), firstName
      varchar(255), userAddress varchar(255), userCity varchar(255),
      userState varchar(255), homePhone varchar(15), cellPhone
      varchar(15), workPhone varchar(15), gender varchar(255) REFERENCES
      gender (genderID), race varchar(255) REFERENCES race (raceID) );


<a id="org09cd825"></a>

## Events

Bootstrap facilitates events for professional educators. These events focus on
the conceptual understanding and implementation of Bootstrap curriculum.

    CREATE TABLE "events" ( "event_id" varchar(255), eventName
      varchar(255), eventDays int CONSTRAINT positive_days CHECK
      (eventDays > 0),
      --length in days eventType varchar(255) REFERENCES eventTypes
      (typeID), eventFormat varchar(255) REFERENCES eventFormats
      (formatID), );


<a id="orgcb6cb15"></a>

## Organizations

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


<a id="org73ce3d7"></a>

## Assessment Instruments

    CREATE TABLE assessments ( assessmentID varchar(255) );


<a id="orgb9b6df7"></a>

## Feedback Instruments


<a id="org0706c13"></a>

## Intake Instruments


<a id="org59573d1"></a>

# Attribute (Derived) Tables


<a id="orga6d5de2"></a>

## Locations


<a id="orgd3d0939"></a>

## Licenses


<a id="orgf2aa406"></a>

## Schools


<a id="org2b5a4ec"></a>

## Districts


<a id="org39cfeeb"></a>

## Roles


<a id="orgaa3f0fb"></a>

## Textbooks

    CREATE TABLE Textbooks ( textBookID varchar(255), textBookName
      varchar(255), textBookPublisher varchar(255) );


<a id="org44ba1a9"></a>

# Relationship Tables


<a id="org0dbbc31"></a>

## Internal and external roles

People have different relationships to our facilitated events. Current roles
relative to events are Facilitator, Participant, Admin, and Master Teacher in
Training.


<a id="org4f63257"></a>

## User-Event Roles (Enrollments)

    
    --Relationship Tables
    
    CREATE TABLE enrollments ( enrollmentID varchar(255), userID
      varchar(255) REFERENCES Users (UserID) );


<a id="org850456c"></a>

## User-Organization Roles (OrgRoles)

    CREATE TABLE orgRoles ( userID varchar(255) REFERENCES users (UserID),
      orgID varchar(255) REFERENCES organizations (OrgID), roleID
      varchar(255) REFERENCES roles (RoleID)
    
    CREATE TABLE Enrollments ( EnrollmentID varchar(255), UserID
      varchar(255) REFERENCES Users (UserID) );


<a id="orgc549c2c"></a>

## User-Organization Roles (UserOrganizationRoles)

    CREATE TABLE UserOrganizationRoles ( UserID varchar(255) REFERENCES
      Users (UserID), OrgID varchar(255) REFERENCES Organizations (OrgID),
      RoleID varchar(255) REFERNCES Roles (RoleID)
    
    );


<a id="org9387784"></a>

## Comments

    
    CREATE TABLE comments ( authorUserID varchar(255), regardingUserID
      varchar(255), commentDate varchar(255), tagUserID varchar(255),
      commentType varchar(255)
    
    );


<a id="org72c4eee"></a>

## User-Event-Attendance (Attendance)

    
    CREATE TABLE attendance ( serID varchar(255), eventID varchar(255),
      attendanceDate Date, attendancePeriod varchar(255), attendanceValue
      varchar(255)
    
    );


<a id="orgecb6dc7"></a>

## Contracts

Organizations and individual create contracts with
Bootsrap that lead to the create

    CREATE TABLE Contracts ( ContractID varchar(255), OrgID varchar(255)
      REFERENCES Organizations (OrgID), EventID varchar(255) REFERENCES
      Events (EventID) );


<a id="org14c5a2c"></a>

## Coaching

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


<a id="orga653c9c"></a>

## Assessment Instrument Data

    
    CREATE TABLE instrumentData ( instrumentDataID varchar(255), userID
      varchar(255) REFERENCES Users (userID), submitted varchar(255)
      timestamp with time zone, instrumentData text );

