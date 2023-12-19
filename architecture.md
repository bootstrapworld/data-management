
# Table of Contents

1.  [Introduction](#org865c6d2)
    1.  [This file](#org98d99e2)
    2.  [Bootstrap](#orge5a9e76)
    3.  [Goals](#org4bd96ce)
    4.  [Reporting Needs](#org83d9c32)
        1.  [Partners](#orgefcaa40)
        2.  [Internal analysis](#orgb82af86)
2.  [Data Model](#org2f73058)
    1.  [Business requirements and relationships between them:](#orgdd93351)
        1.  [Products and Services](#org2976d69)
        2.  [Reporting](#org094c321)
        3.  [Analysis](#org7c24329)
    2.  [Definitions](#orgdf6fb91)
        1.  [Curriculum End User](#org626e273)
        2.  [Training End User](#org0f5db61)
        3.  [Teachers](#orgc2380c1)
    3.  [Grain](#org200a03d)
    4.  [Dimensions](#org8dd3910)
        1.  [Dimension Hierarchy](#org8c49bb0)
        2.  [Dimension Tables and Attributes](#org39dea66)
        3.  [Explanation](#orgfd15f53)
    5.  [Measures](#org310d6b9)
    6.  [Facts](#orgbadeca7)
3.  [The Teacher Journey](#org4de655e)
    1.  [The Timespan of a Teacher Journey](#org45a7d42)
    2.  [Communication Plan](#orgd7fd974)
        1.  [First Contact](#org8f16860)
        2.  [Contacts](#org4b3e73a)
        3.  [Preworkshop Intake Data](#orgbc18dfd)
        4.  [Intake data](#org66c3952)
    3.  [On-going Support and Monitoring](#orge7ce60c)
    4.  [The Journey to Master Teacher](#org6060215)
4.  [Custom Data Types](#orgc859ce5)
    1.  [Enrollment Roles](#orgc1d21f6)
    2.  [Race and Ethnicity](#org9017ca4)
    3.  [Gender](#orged305ed)
    4.  [License](#orgf573783)
    5.  [Organization Types](#orgea121b6)
    6.  [Subjects Taught](#org91fb932)
    7.  [Grades Taught](#orgc22ebf4)
    8.  [Event Formats](#org64500e4)
    9.  [Event Types](#orgf2900f9)
    10. [Curricula](#orgb19251d)
5.  [Core Entity (Primary Dimension) Tables](#orgaf225ed)
    1.  [Contacts](#org2f7404c)
    2.  [Users](#org8e1cda8)
    3.  [Events](#org5de698d)
    4.  [Organizations](#org8037409)
    5.  [Assessment Instruments](#orgc78e46c)
    6.  [Feedback Instruments](#orgb72491c)
    7.  [Intake Instruments](#orgf9c64aa)
6.  [Attribute (Derived) Tables](#orgb2d1f7b)
    1.  [Locations](#orgaa5147f)
    2.  [Licenses](#org281e71a)
    3.  [Schools](#org4c15727)
    4.  [Districts](#org8749376)
    5.  [Roles](#org29552c2)
    6.  [Textbooks](#orgcce1422)
7.  [Relationship Tables](#org63f042f)
    1.  [Internal and external roles](#org39b232a)
    2.  [User-Event Roles (Enrollments)](#org3628db1)
    3.  [User-Organization Roles (OrgRoles)](#orga4549ab)
    4.  [User-Organization Roles (UserOrganizationRoles)](#org2489a3d)
    5.  [Comments](#orgcbcebf6)
    6.  [User-Event-Attendance (Attendance)](#org7d93315)
    7.  [Contracts](#org3b82e10)
    8.  [Coaching](#org110515a)
    9.  [Assessment Instrument Data](#org78538be)



<a id="org865c6d2"></a>

# Introduction


<a id="org98d99e2"></a>

## This file

This is the data definition and architecture expressed in POSTGRESQL
for Bootstrap facilitated training events and participant
tracking. This is a literate file written in Orgmode and tangled using
org-babel.


<a id="orge5a9e76"></a>

## Bootstrap

Bootstrap develops curriculum and facilitates training for professional
educators and the organizations that support. Bootstrap delivers
pedagogical strategies to participant educators through in-person or
virtual learning sessions. Bootstrap seeks to support teacher from
novice learners until they can confidently implement Bootstrap
curriculum in their classrooms.


<a id="org4bd96ce"></a>

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


<a id="org83d9c32"></a>

## Reporting Needs


<a id="orgefcaa40"></a>

### Partners

Reports for partners include

-   a teacher level attendance report
-   a teacher level proficiency report
-   cohort aggregations
-   implementation reports


<a id="orgb82af86"></a>

### Internal analysis

-   Interventions over time
-   Teacher retention
-   Types of facilitation experience vs implementation
-   Teaching context vs implementation


<a id="org2f73058"></a>

# Data Model


<a id="orgdd93351"></a>

## Business requirements and relationships between them:


<a id="org2976d69"></a>

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


<a id="org094c321"></a>

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


<a id="org7c24329"></a>

### Analysis

1.  Confidence, Implementation, Growth

2.  Correlation Questions

    -   Curriculum Change vs Teacher Confidence
    -   Training Change vs Confidence
    -   Facilitator or Event vs Confidence


<a id="orgdf6fb91"></a>

## Definitions


<a id="org626e273"></a>

### Curriculum End User

The end users of Bootstrap curriculum are students, who will be using tools like
the Pyret or CODAP to build projects.


<a id="org0f5db61"></a>

### Training End User

The end users of Bootsrap trainings are
teachers. In most cases the person in the chair is
a teacher, who will bring the training, pedagogy,
and curriculum back to students in their
classroom.

Sometimes the person in the chair works alongside teachers and will take the
learning from Bootstrap back to their teachers in their own professional
enrichment setting.


<a id="orgc2380c1"></a>

### Teachers

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


<a id="org200a03d"></a>

## Grain

The grain in our data model is the professional educator. We measure the
efficacy of the training experience as it relates to various factors in the life
of a professional educator. We collect reactions to our trainings and followup
for a period of time as the teacher attempts to bring Bootstrap curriculum into
the classroom. Pre and post test student data stops at the teacher level. We do
not track students as entities or store any individual student data.


<a id="org8dd3910"></a>

## Dimensions


<a id="org8c49bb0"></a>

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


<a id="org39dea66"></a>

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


<a id="orgfd15f53"></a>

### Explanation

All (most) schools have districts or other support organizations.  Partner
organizations build contracts with Bootstrap to train cohorts of educators. A
partner organization could also be a district and referenced with a foreign key.


<a id="org310d6b9"></a>

## Measures

-   Implementation
-   Attendance
-   Interaction
-   Workbooks
-   Assessment
-   Pathway


<a id="orgbadeca7"></a>

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


<a id="org4de655e"></a>

# The Teacher Journey

Professional educators find themselves in a Bootsrap training from a variety of
pathways. Bootstrap curriculum is freely available on the internet. Bootstrap
has trained teachers across the country for many years and teachers generally
love their experience, hence word of mouth brings teachers in. Partner
organizations build training contracts for cohorts of teachers for a variety of
reasons, which lead to participants with a range of motivation and contextual
appropriateness.


<a id="org45a7d42"></a>

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


<a id="orgd7fd974"></a>

## Communication Plan


<a id="org8f16860"></a>

### First Contact

First contact can be casual or formal. Casual contacts include requests for
information through web forms, posting or emailing questions, and tags on social
media. Formal contacts are typically enrolled in a workshop; the first they hear
from us would be a formal welcome to a training event with logistic information.


<a id="org4b3e73a"></a>

### Contacts

Contact data allows us to send a message with a
general idea of who the person is. At minimum a
first contact is an email address, a first and
last name, a job title, and a what brings you
here.

        CREATE TABLE IF NOT EXISTS "contacts" ( "id" SERIAL PRIMARY KEY,
    
    );


<a id="orgbc18dfd"></a>

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


<a id="org66c3952"></a>

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


<a id="orge7ce60c"></a>

## On-going Support and Monitoring


<a id="org6060215"></a>

## The Journey to Master Teacher


<a id="orgc859ce5"></a>

# Custom Data Types

I'm still working out which helper collections are ENUMs.

types and which we add to a helper table. My intuition is that there are short
sets that we know already and that aren't likely to change, such as race, and
there are longer sets like the textbooks that might continue to grow.


<a id="orgc1d21f6"></a>

## Enrollment Roles

These are the roles with respect to our enrollment relationship. They answer the
question what are you doing as part of this event. This list could grow as the
type and complexity of event planning changes.

Some rules attached to these roles. For example, perhaps a participant cannot be
enrolled to an event before a facilitator has first been enrolled.

    CREATE TYPE "enrollment_roles" AS ENUM ('facilitator', 'participant',
    'admin', 'master teacher in training' );


<a id="org9017ca4"></a>

## Race and Ethnicity

    CREATE TYPE race AS ENUM ('American Indian or Alaska Native', 'Asian',
    'Black or African American', 'Native Hawaiian or Other Pacific
    Islander', 'White' );
    
    CREATE TYPE ethnicity AS ENUM ('Hispanic or Latino', 'Not Hispanic or
    Latino' );


<a id="orged305ed"></a>

## Gender

    CREATE TYPE gender AS ENUM ('Male', 'Female', 'Transgender', 'None of
    these');


<a id="orgf573783"></a>

## License

    CREATE TYPE license AS ENUM ('Math', 'Science', 'Social Studies',
    'English', 'Language other than English', 'Elementary General Ed',
    'Special Education');
    
    CREATE TABLE license ( userID varchar(255) REFERENCES users (userID),
      license varchar(255), licenseState varchar(255) );


<a id="orgea121b6"></a>

## Organization Types

    CREATE TYPE orgTypes AS ENUM ('Non-profit', 'For-profit', 'School',
    'District', 'State Government Office', 'Foundation');


<a id="org91fb932"></a>

## Subjects Taught

    CREATE TYPE subjectsTaught AS ENUM ('AP', 'Algebra', 'Geometry',
    'Biology' );


<a id="orgc22ebf4"></a>

## Grades Taught

    
    CREATE TYPE "grades_taught" AS ENUM ('1st', '2nd', '3rd', '4th',
    '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th');


<a id="org64500e4"></a>

## Event Formats

    
    CREATE TYPE "event_formats" AS ENUM ('Intensive', 'Distributed',
    'One-day', '2-hour' );


<a id="orgf2900f9"></a>

## Event Types

    CREATE TYPE eventTypes AS ENUM ('Full PD', 'Intro PD', 'Coaching',
    'Academic Year Workshop' );


<a id="orgb19251d"></a>

## Curricula

    CREATE TYPE curricula AS ENUM ('Algebra', 'Data Science', 'Physics',
    'Algebra 2', 'Early Math', 'Data Science (CODAP)' );


<a id="orgaf225ed"></a>

# Core Entity (Primary Dimension) Tables

These tables are descriptive data elements that make up the relationships in our
system. They represent everything we know about the people, organizations, and
events in our facilitation ecosystem.


<a id="org2f7404c"></a>

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


<a id="org8e1cda8"></a>

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


<a id="org5de698d"></a>

## Events

Bootstrap facilitates events for professional educators. These events focus on
the conceptual understanding and implementation of Bootstrap curriculum.

    CREATE TABLE "events" ( "event_id" varchar(255), eventName
      varchar(255), eventDays int CONSTRAINT positive_days CHECK
      (eventDays > 0),
      --length in days eventType varchar(255) REFERENCES eventTypes
      (typeID), eventFormat varchar(255) REFERENCES eventFormats
      (formatID), );


<a id="org8037409"></a>

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


<a id="orgc78e46c"></a>

## Assessment Instruments

    CREATE TABLE assessments ( assessmentID varchar(255) );


<a id="orgb72491c"></a>

## Feedback Instruments


<a id="orgf9c64aa"></a>

## Intake Instruments


<a id="orgb2d1f7b"></a>

# Attribute (Derived) Tables


<a id="orgaa5147f"></a>

## Locations


<a id="org281e71a"></a>

## Licenses


<a id="org4c15727"></a>

## Schools


<a id="org8749376"></a>

## Districts


<a id="org29552c2"></a>

## Roles


<a id="orgcce1422"></a>

## Textbooks

    CREATE TABLE Textbooks ( textBookID varchar(255), textBookName
      varchar(255), textBookPublisher varchar(255) );


<a id="org63f042f"></a>

# Relationship Tables


<a id="org39b232a"></a>

## Internal and external roles

People have different relationships to our facilitated events. Current roles
relative to events are Facilitator, Participant, Admin, and Master Teacher in
Training.


<a id="org3628db1"></a>

## User-Event Roles (Enrollments)

    
    --Relationship Tables
    
    CREATE TABLE enrollments ( enrollmentID varchar(255), userID
      varchar(255) REFERENCES Users (UserID) );


<a id="orga4549ab"></a>

## User-Organization Roles (OrgRoles)

    CREATE TABLE orgRoles ( userID varchar(255) REFERENCES users (UserID),
      orgID varchar(255) REFERENCES organizations (OrgID), roleID
      varchar(255) REFERENCES roles (RoleID)
    
    CREATE TABLE Enrollments ( EnrollmentID varchar(255), UserID
      varchar(255) REFERENCES Users (UserID) );


<a id="org2489a3d"></a>

## User-Organization Roles (UserOrganizationRoles)

    CREATE TABLE UserOrganizationRoles ( UserID varchar(255) REFERENCES
      Users (UserID), OrgID varchar(255) REFERENCES Organizations (OrgID),
      RoleID varchar(255) REFERNCES Roles (RoleID)
    
    );


<a id="orgcbcebf6"></a>

## Comments

    
    CREATE TABLE comments ( authorUserID varchar(255), regardingUserID
      varchar(255), commentDate varchar(255), tagUserID varchar(255),
      commentType varchar(255)
    
    );


<a id="org7d93315"></a>

## User-Event-Attendance (Attendance)

    
    CREATE TABLE attendance ( serID varchar(255), eventID varchar(255),
      attendanceDate Date, attendancePeriod varchar(255), attendanceValue
      varchar(255)
    
    );


<a id="org3b82e10"></a>

## Contracts

Organizations and individual create contracts with
Bootsrap that lead to the create

    CREATE TABLE Contracts ( ContractID varchar(255), OrgID varchar(255)
      REFERENCES Organizations (OrgID), EventID varchar(255) REFERENCES
      Events (EventID) );


<a id="org110515a"></a>

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


<a id="org78538be"></a>

## Assessment Instrument Data

    
    CREATE TABLE instrumentData ( instrumentDataID varchar(255), userID
      varchar(255) REFERENCES Users (userID), submitted varchar(255)
      timestamp with time zone, instrumentData text );

