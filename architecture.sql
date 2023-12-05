
--Helper Tables
CREATE TABLE Roles (
       RoleID varchar(255) -- Facilitator, Participant, Admin, Master Teacher in Training
);

CREATE TABLE Race (
       RaceID varchar(255)
);

CREATE TABLE Gender (
       GenderID varchar(255)
);


--Main Tables
-- Users, Organizations, Events

CREATE TABLE Users (
       UserID varchar(255),
       LastName varchar(255),
       FirstName varchar(255),
       UserAddress varchar(255),
       UserCity varchar(255),
       UserState varchar(255),
       HomePhone int,
       CellPhone int,
       WorkPhone int,
       Gender varchar(255),
       Race varchar(255)
);

CREATE TABLE Organizations (
       OrgID varchar(255),
       OrgAddress varchar(255),
       OrgCity varchar(255),
       OrgState varchar(255)
);

CREATE TABLE Events (
       EventID varchar(255),
);

--Relationship Tables
CREATE TABLE Enrollments (
       EnrollmentID varchar(255),
       UserID
);

CREATE TABLE Attendance (
       UserID varchar(255),
       EventID varchar(255),
       AttendanceDate Date,
       AttendancePeriod varchar(255),
       AttendanceValue varchar(255)
);

CREATE TABLE Comments (
       AuthorUserID varchar(255),
       RegardingUserID varchar(255),
       CommentDate varchar(255),
       TagUserID
);

list       

assessments
