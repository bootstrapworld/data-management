
# Table of Contents

1.  [Introduction](#org95ca3ed)
    1.  [This file](#org76cdd76)
        1.  [What am I doing?](#org2f4ff0f)
    2.  [Bootstrap](#org0381a14)
    3.  [Products and Services](#org38aeede)
    4.  [Goals](#org5e60ae9)
    5.  [Non-goals](#orgf9ed882)
    6.  [Reporting Needs](#org286cc87)
    7.  [Analysis](#orgbd6eadb)
        1.  [Appropriateness (Fitness) of Training to Participant](#org62d6402)
        2.  [Confidence, Implementation, Growth](#org2c08a4b)
        3.  [Students](#org1e1b7c1)
        4.  [Correlation Questions](#org6994479)
        5.  [Factors toward implementation](#org037ba1b)
    8.  [Reporting](#orgad86be6)
        1.  [Attendance Reports](#org9068232)
        2.  [Pre Post Diagnostic Results Analysis](#orgb7d6b98)
        3.  [Implementation Reports](#orga05cfec)
        4.  [Standardized Achievement](#org44a4499)
    9.  [Definitions](#org4c4fae2)
        1.  [End Users](#orgbb59260)
        2.  [Teacher and Student](#org0888ad6)
        3.  [Admin](#orgc661b70)
        4.  [Cohort](#org4700438)
        5.  [Facilitator, Master Teacher, and Master Teacher in Training](#org02059cf)
        6.  [Coach](#orgc9a79c0)
        7.  [Professional Development](#org0bfe5e7)
        8.  [Participant Life Cycle](#orgf40f984)
        9.  [Teacher](#org85d9d62)
        10. [Partners](#org6c76698)
        11. [Internal analysis](#org756bb2a)
    10. [Grain](#org753095a)
    11. [Dimensions](#org63e5a79)
        1.  [Dimension Hierarchy](#orgb441b62)
        2.  [Dimension Tables and Attributes](#org6ea01ae)
        3.  [Explanation](#org4fcf8ae)
    12. [Measures](#org475edfd)
    13. [Facts](#org10a7fd1)
    14. [Core Entity (Primary Dimension) Tables](#org46000c7)
    15. [Introduction](#orgf88474d)
    16. [Contacts](#org319297e)
    17. [Users](#orgdb7ce81)
    18. [Events](#org71ddcfe)
    19. [Organizations](#orgf9b5c28)
    20. [Assessment Instruments](#org0ccb628)
    21. [Feedback Instruments](#org3958783)
    22. [Intake Instruments](#orga0f68a4)
    23. [Attribute (Derived) Tables](#org03b428a)
    24. [Locations](#orgebb529f)
    25. [Licenses](#orga3f219d)
    26. [Schools](#org1d6da77)
    27. [Districts](#orgbca7929)
    28. [Roles](#org7b7454b)
    29. [Textbooks](#orga00b988)
    30. [Communication Preferences (Opt In/Out)](#org93edadf)
    31. [Relationship (Fact) Tables](#orga296c1c)
    32. [Internal and external roles](#org58502d0)
    33. [User-Event Roles (Enrollments)](#orgc418c01)
    34. [User-Organization Roles (OrgRoles)](#org8fb6c22)
    35. [User-Organization Roles (UserOrganizationRoles)](#org05123f3)
    36. [Comments](#org621952d)
    37. [User-Event-Attendance (Attendance)](#orge96fa90)
    38. [Contracts](#orgdc75e47)
    39. [Coaching](#org73b57b5)
    40. [Assessment Instrument Data](#org5c64b27)
    41. [Custom Data Types](#org43aff04)
    42. [Enrollment Roles](#org181d48f)
    43. [Race and Ethnicity](#orgeeeb783)
    44. [Gender](#org7ac7878)
    45. [License](#org581f6cc)
    46. [Organization Types](#orgc89ddc0)
        1.  [What are the organization types we interact with?](#org75b23ee)
    47. [Subjects Taught](#org106d4d4)
    48. [Grades Taught](#org34e6f50)
    49. [Event Formats](#org28e10ec)
    50. [Event Types](#org182fb09)
    51. [Curricula](#org7a1afe9)
2.  [Data Model](#orgc5e46f5)
3.  [The Teacher Journey](#orgce0e331)
    1.  [The Bootstrap Participant Landscape](#orgcd45f5e)
    2.  [The Timespan of a Teacher Journey](#org4987452)
    3.  [Milestones](#org0fb648f)
        1.  [Year 1](#orgd8bb71c)
        2.  [Year 2](#org43edebd)
        3.  [Year 3](#org71f4a86)
    4.  [Communication Plan](#org5d1cc96)
        1.  [First Contact](#org5d0fc24)
        2.  [Contacts](#orgc30c936)
        3.  [Preworkshop Intake Data](#org3efad33)
        4.  [Intake data](#org126b0ab)
    5.  [On-going Support and Monitoring](#org0e19560)
    6.  [The Journey to Master Teacher](#org0082cba)



<a id="org95ca3ed"></a>

# Introduction


<a id="org76cdd76"></a>

## This file

This is the data definition and architecture expressed in POSTGRESQL
for Bootstrap facilitated training events and participant
tracking. This is a literate file written in Orgmode and tangled using
org-babel.


<a id="org2f4ff0f"></a>

### What am I doing?


<a id="org0381a14"></a>

## Bootstrap

Bootstrap develops curriculum and facilitates training for professional
educators and the organizations that support. Bootstrap delivers
pedagogical strategies to participant educators through in-person or
virtual learning sessions. Bootstrap seeks to support teacher from
novice learners until they can confidently implement Bootstrap
curriculum in their classrooms.


<a id="org38aeede"></a>

## Products and Services

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


<a id="org5e60ae9"></a>

## Goals

This data models primary goal is to track and analyze the efficacy of
learning supports created by Bootstrap: curriculum materials and
facilitated trainings events.  Bootstrap hopes to continually improve
the learning model for professional educators. Support for educators
are successful if the educator feels confident enough to actually
bring a set of Bootstrap lessons into their classrooms. Bootstrap
further measures success through the achievement of students who
received Bootstrap curriculum.


<a id="orgf9ed882"></a>

## Non-goals


<a id="org286cc87"></a>

## Reporting Needs


<a id="orgbd6eadb"></a>

## Analysis


<a id="org62d6402"></a>

### Appropriateness (Fitness) of Training to Participant

-   Participant computing background vs implementation
-   Participant subject/license vs implementation
-   Which facilitation techniques are most effective?
-   Which training formats are most appropriate for which participants?
-   How do we track the impact of non-teacher participants? Coaches who may be training others, should we attempt to get those names?
-   How does years of teaching experience affect implementation after training?
-   Which interventions have led to training more teachers to reach more students?
-   Which curriculum is most effective at training teachers to implement?


<a id="org2c08a4b"></a>

### Confidence, Implementation, Growth


<a id="org1e1b7c1"></a>

### Students

-   How many students are we reaching?
    -   How accurate can we get this number?
    -   How can we define a range of students reached?
    -   Can we define an error within which we know a student is reached?
    -   How many students are we reaching per lesson?


<a id="org6994479"></a>

### Correlation Questions

1.  Curriculum Change vs Teacher Confidence

    Curriculum changes aim to increase efficacy of lesson materials. More teachers would be able to navigate more quickly and more lessons would be delivered to more students.
    
    -   Has a given curriculum change increased the efficacy of the lesson materials in a measurable way?
    -   Training Change vs Confidence
    -   Facilitator or Event vs Confidence


<a id="org037ba1b"></a>

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


<a id="orgad86be6"></a>

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


<a id="org9068232"></a>

### Attendance Reports

-   Cohort attendance, sent to cohort admins (unified by contract)
-   


<a id="orgb7d6b98"></a>

### Pre Post Diagnostic Results Analysis

-   teacher/participant pre/post from trainings
-   aggregated classroom pre/post on Bootstrap diagnostics
-   pre/post diagnostics from classroom final exam


<a id="orga05cfec"></a>

### Implementation Reports


<a id="org44a4499"></a>

### Standardized Achievement

Are students achieving higher outcomes on standardized exams that they would already be required to take?
Some teachers administer their own diagnostics, and this practice is increasingly more common in administrative mandates.


<a id="org4c4fae2"></a>

## Definitions


<a id="orgbb59260"></a>

### End Users

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


<a id="org0888ad6"></a>

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


<a id="orgc661b70"></a>

### Admin

Within a Bootstrap contract the point persons for the partner
organization are the admins of the contracted event. Admins receive
reporting and communication about their cohort.


<a id="org4700438"></a>

### Cohort

A cohort is a group of teachers supported by a particular
contract. Cohorts begin with a training event and a certain date. 


<a id="org02059cf"></a>

### Facilitator, Master Teacher, and Master Teacher in Training

Training events are facilitated by Bootstrap Master Teachers. A
facilitator is the primary point person for training participants
during and immediately after the training event.


<a id="orgc9a79c0"></a>

### Coach

A coach is a Bootstrap Master teacher supporting groups of teachers
through short regular sessions. These sessions are largely driven by
the questions and needs of teachers in the process of using Bootstrap
curriculum in their classrooms.


<a id="org0bfe5e7"></a>

### Professional Development

A training event that covers an entire curriculum is considered
professional development. Participants in professional development
events are trained as both student and teacher. They must understand
the curriculum and the pedagogy behind key point in the curriculum.


<a id="orgf40f984"></a>

### Participant Life Cycle

-   Intake
-   Onboarding
-   Training
-   Implementation with Support
-   Solo Implementation
-   Master Teacher in Training
-   Master Teacher


<a id="org85d9d62"></a>

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


<a id="org6c76698"></a>

### Partners

Reports for partners include

-   a teacher level attendance report
-   a teacher level proficiency report
-   cohort aggregations
-   implementation reports


<a id="org756bb2a"></a>

### Internal analysis

-   Interventions over time
-   Teacher retention
-   Types of facilitation experience vs implementation
-   Teaching context vs implementation


<a id="org753095a"></a>

## Grain

The grain in our data model is the professional educator. We measure the
efficacy of the training experience as it relates to various factors in the life
of a professional educator. We collect reactions to our trainings and followup
for a period of time as the teacher attempts to bring Bootstrap curriculum into
the classroom. Pre and post test student data stops at the teacher level. We do
not track students as entities or store any individual student data.


<a id="org63e5a79"></a>

## Dimensions


<a id="orgb441b62"></a>

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


<a id="org6ea01ae"></a>

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


<a id="org4fcf8ae"></a>

### Explanation

All (most) schools have districts or other support organizations.  Partner
organizations build contracts with Bootstrap to train cohorts of educators. A
partner organization could also be a district and referenced with a foreign key.


<a id="org475edfd"></a>

## Measures

-   Implementation
-   Attendance
-   Interaction
-   Workbooks
-   Assessment
-   Pathway


<a id="org10a7fd1"></a>

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


<a id="org46000c7"></a>

## Core Entity (Primary Dimension) Tables


<a id="orgf88474d"></a>

## Introduction

These tables are descriptive data elements that make up the relationships in our
system. They represent everything we know about the people, organizations, and
events in our facilitation ecosystem.


<a id="org319297e"></a>

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


<a id="orgdb7ce81"></a>

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


<a id="org71ddcfe"></a>

## Events

Bootstrap facilitates events for professional educators. These events focus on
the conceptual understanding and implementation of Bootstrap curriculum.

    CREATE TABLE "events" ( "event_id" varchar(255), eventName
      varchar(255), eventDays int CONSTRAINT positive_days CHECK
      (eventDays > 0),
      --length in days eventType varchar(255) REFERENCES eventTypes
      (typeID), eventFormat varchar(255) REFERENCES eventFormats
      (formatID), );


<a id="orgf9b5c28"></a>

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


<a id="org0ccb628"></a>

## Assessment Instruments

    CREATE TABLE assessments ( assessmentID varchar(255) );


<a id="org3958783"></a>

## Feedback Instruments


<a id="orga0f68a4"></a>

## Intake Instruments


<a id="org03b428a"></a>

## Attribute (Derived) Tables


<a id="orgebb529f"></a>

## Locations


<a id="orga3f219d"></a>

## Licenses


<a id="org1d6da77"></a>

## Schools


<a id="orgbca7929"></a>

## Districts


<a id="org7b7454b"></a>

## Roles


<a id="orga00b988"></a>

## Textbooks

    CREATE TABLE Textbooks ( textBookID varchar(255), textBookName
      varchar(255), textBookPublisher varchar(255) );


<a id="org93edadf"></a>

## TODO Communication Preferences (Opt In/Out)


<a id="orga296c1c"></a>

## Relationship (Fact) Tables


<a id="org58502d0"></a>

## Internal and external roles

People have different relationships to our facilitated events. Current roles
relative to events are Facilitator, Participant, Admin, and Master Teacher in
Training.


<a id="orgc418c01"></a>

## User-Event Roles (Enrollments)

    
    --Relationship Tables
    
    CREATE TABLE enrollments ( enrollmentID varchar(255), userID
      varchar(255) REFERENCES Users (UserID) );


<a id="org8fb6c22"></a>

## User-Organization Roles (OrgRoles)

    CREATE TABLE orgRoles ( userID varchar(255) REFERENCES users (UserID),
      orgID varchar(255) REFERENCES organizations (OrgID), roleID
      varchar(255) REFERENCES roles (RoleID)
    
    CREATE TABLE Enrollments ( EnrollmentID varchar(255), UserID
      varchar(255) REFERENCES Users (UserID) );


<a id="org05123f3"></a>

## User-Organization Roles (UserOrganizationRoles)

    CREATE TABLE UserOrganizationRoles ( UserID varchar(255) REFERENCES
      Users (UserID), OrgID varchar(255) REFERENCES Organizations (OrgID),
      RoleID varchar(255) REFERNCES Roles (RoleID)
    
    );


<a id="org621952d"></a>

## Comments

    
    CREATE TABLE comments ( authorUserID varchar(255), regardingUserID
      varchar(255), commentDate varchar(255), tagUserID varchar(255),
      commentType varchar(255)
    
    );


<a id="orge96fa90"></a>

## User-Event-Attendance (Attendance)

    
    CREATE TABLE attendance ( serID varchar(255), eventID varchar(255),
      attendanceDate Date, attendancePeriod varchar(255), attendanceValue
      varchar(255)
    
    );


<a id="orgdc75e47"></a>

## Contracts

Organizations and individual create contracts with
Bootsrap that lead to the create

    CREATE TABLE Contracts ( ContractID varchar(255), OrgID varchar(255)
      REFERENCES Organizations (OrgID), EventID varchar(255) REFERENCES
      Events (EventID) );


<a id="org73b57b5"></a>

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


<a id="org5c64b27"></a>

## Assessment Instrument Data

    
    CREATE TABLE instrumentData ( instrumentDataID varchar(255), userID
      varchar(255) REFERENCES Users (userID), submitted varchar(255)
      timestamp with time zone, instrumentData text );


<a id="org43aff04"></a>

## Custom Data Types

I'm still working out which helper collections are ENUMs.

types and which we add to a helper table. My intuition is that there are short
sets that we know already and that aren't likely to change, such as race, and
there are longer sets like the textbooks that might continue to grow.


<a id="org181d48f"></a>

## Enrollment Roles

These are the roles with respect to our enrollment relationship. They answer the
question what are you doing as part of this event. This list could grow as the
type and complexity of event planning changes.

Some rules attached to these roles. For example, perhaps a participant cannot be
enrolled to an event before a facilitator has first been enrolled.

    CREATE TYPE "enrollment_roles" AS ENUM ('facilitator', 'participant',
    'admin', 'master teacher in training' );


<a id="orgeeeb783"></a>

## Race and Ethnicity

    CREATE TYPE race AS ENUM ('American Indian or Alaska Native', 'Asian',
    'Black or African American', 'Native Hawaiian or Other Pacific
    Islander', 'White' );
    
    CREATE TYPE ethnicity AS ENUM ('Hispanic or Latino', 'Not Hispanic or
    Latino' );


<a id="org7ac7878"></a>

## Gender

    CREATE TYPE gender AS ENUM ('Male', 'Female', 'Transgender', 'None of
    these');


<a id="org581f6cc"></a>

## License

    CREATE TYPE license AS ENUM ('Math', 'Science', 'Social Studies',
    'English', 'Language other than English', 'Elementary General Ed',
    'Special Education');
    
    CREATE TABLE license ( userID varchar(255) REFERENCES users (userID),
      license varchar(255), licenseState varchar(255) );


<a id="orgc89ddc0"></a>

## Organization Types


<a id="org75b23ee"></a>

### TODO What are the organization types we interact with?

Is this redundant from Insightly?

    CREATE TYPE orgTypes AS ENUM ('Non-profit', 'For-profit', 'School',
    'District', 'State Government Office', 'Foundation');


<a id="org106d4d4"></a>

## Subjects Taught

    CREATE TYPE subjectsTaught AS ENUM ('AP', 'Algebra', 'Geometry',
    'Biology' );


<a id="org34e6f50"></a>

## Grades Taught

    
    CREATE TYPE "grades_taught" AS ENUM ('1st', '2nd', '3rd', '4th',
    '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th');


<a id="org28e10ec"></a>

## Event Formats

    
    CREATE TYPE "event_formats" AS ENUM ('Intensive', 'Distributed',
    'One-day', '2-hour' );


<a id="org182fb09"></a>

## Event Types

    CREATE TYPE eventTypes AS ENUM ('Full PD', 'Intro PD', 'Coaching',
    'Academic Year Workshop' );


<a id="org7a1afe9"></a>

## Curricula

    CREATE TYPE curricula AS ENUM ('Algebra', 'Data Science', 'Physics',
    'Algebra 2', 'Early Math', 'Data Science (CODAP)' );


<a id="orgc5e46f5"></a>

# Data Model


<a id="orgce0e331"></a>

# The Teacher Journey


<a id="orgcd45f5e"></a>

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


<a id="org4987452"></a>

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


<a id="org0fb648f"></a>

## Milestones


<a id="orgd8bb71c"></a>

### Year 1


<a id="org43edebd"></a>

### Year 2


<a id="org71f4a86"></a>

### Year 3


<a id="org5d1cc96"></a>

## Communication Plan


<a id="org5d0fc24"></a>

### First Contact

First contact can be casual or formal. Casual contacts include requests for
information through web forms, posting or emailing questions, and tags on social
media. Formal contacts are typically enrolled in a workshop; the first they hear
from us would be a formal welcome to a training event with logistic information.


<a id="orgc30c936"></a>

### Contacts

Contact data allows us to send a message with a
general idea of who the person is. At minimum a
first contact is an email address, a first and
last name, a job title, and a what brings you
here.

        CREATE TABLE IF NOT EXISTS "contacts" ( "id" SERIAL PRIMARY KEY,
    
    );


<a id="org3efad33"></a>

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


<a id="org126b0ab"></a>

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


<a id="org0e19560"></a>

## On-going Support and Monitoring


<a id="org0082cba"></a>

## The Journey to Master Teacher

