CREATE TABLE IF NOT EXISTS "contacts" (
  "id" SERIAL PRIMARY KEY, --varchar(255),
  NameFirst varchar(255),
  NameLast varchar(255),
  AltNameFirst varchar(255),
  AltNameLast varchar(255),
  emailPersonal varchar(255),
  emailProfessional varchar(255)
);

CREATE TABLE users ( userID varchar(255), contactID varchar(255)
  REFERENCES contacts (contactID), lastName varchar(255), firstName
  varchar(255), userAddress varchar(255), userCity varchar(255),
  userState varchar(255), homePhone varchar(15), cellPhone
  varchar(15), workPhone varchar(15), gender varchar(255) REFERENCES
  gender (genderID), race varchar(255) REFERENCES race (raceID) );

CREATE TABLE "events" ( "event_id" varchar(255), eventName
  varchar(255), eventDays int CONSTRAINT positive_days CHECK
  (eventDays > 0),
  --length in days eventType varchar(255) REFERENCES eventTypes
  (typeID), eventFormat varchar(255) REFERENCES eventFormats
  (formatID), );

--Main Tables Users, Organizations, Events CREATE TABLE organizations
( orgID varchar(255), orgAddress varchar(255), orgCity varchar(255),
orgState varchar(255) );

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

CREATE TABLE assessments ( assessmentID varchar(255) );

CREATE TABLE Textbooks ( textBookID varchar(255), textBookName
  varchar(255), textBookPublisher varchar(255) );

--Relationship Tables

CREATE TABLE enrollments ( enrollmentID varchar(255), userID
  varchar(255) REFERENCES Users (UserID) );

CREATE TABLE orgRoles ( userID varchar(255) REFERENCES users (UserID),
  orgID varchar(255) REFERENCES organizations (OrgID), roleID
  varchar(255) REFERENCES roles (RoleID)

CREATE TABLE Enrollments ( EnrollmentID varchar(255), UserID
  varchar(255) REFERENCES Users (UserID) );

CREATE TABLE UserOrganizationRoles ( UserID varchar(255) REFERENCES
  Users (UserID), OrgID varchar(255) REFERENCES Organizations (OrgID),
  RoleID varchar(255) REFERNCES Roles (RoleID)

);

CREATE TABLE comments ( authorUserID varchar(255), regardingUserID
  varchar(255), commentDate varchar(255), tagUserID varchar(255),
  commentType varchar(255)

);

CREATE TABLE attendance ( serID varchar(255), eventID varchar(255),
  attendanceDate Date, attendancePeriod varchar(255), attendanceValue
  varchar(255)

);

CREATE TABLE Contracts ( ContractID varchar(255), OrgID varchar(255)
  REFERENCES Organizations (OrgID), EventID varchar(255) REFERENCES
  Events (EventID) );

CREATE TABLE Coaching ( -- Coaching is a postive entry table. A user
found in this table has -- coaching included in their contract );

CREATE TABLE instrumentData ( instrumentDataID varchar(255), userID
  varchar(255) REFERENCES Users (userID), submitted varchar(255)
  timestamp with time zone, instrumentData text );

CREATE TYPE "enrollment_roles" AS ENUM ('facilitator', 'participant',
'admin', 'master teacher in training' );

CREATE TYPE race AS ENUM ('American Indian or Alaska Native', 'Asian',
'Black or African American', 'Native Hawaiian or Other Pacific
Islander', 'White' );

CREATE TYPE ethnicity AS ENUM ('Hispanic or Latino', 'Not Hispanic or
Latino' );

CREATE TYPE gender AS ENUM ('Male', 'Female', 'Transgender', 'None of
these');

CREATE TYPE license AS ENUM ('Math', 'Science', 'Social Studies',
'English', 'Language other than English', 'Elementary General Ed',
'Special Education');

CREATE TABLE license ( userID varchar(255) REFERENCES users (userID),
  license varchar(255), licenseState varchar(255) );

CREATE TYPE orgTypes AS ENUM ('Non-profit', 'For-profit', 'School',
'District', 'State Government Office', 'Foundation');

CREATE TYPE subjectsTaught AS ENUM ('AP', 'Algebra', 'Geometry',
'Biology' );

CREATE TYPE "grades_taught" AS ENUM ('1st', '2nd', '3rd', '4th',
'5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th');

CREATE TYPE "event_formats" AS ENUM ('Intensive', 'Distributed',
'One-day', '2-hour' );

CREATE TYPE eventTypes AS ENUM ('Full PD', 'Intro PD', 'Coaching',
'Academic Year Workshop' );

CREATE TYPE curricula AS ENUM ('Algebra', 'Data Science', 'Physics',
'Algebra 2', 'Early Math', 'Data Science (CODAP)' );
