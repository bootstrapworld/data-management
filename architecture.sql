--------------------------------------------------------------------------------
-- Dimensional Data
--------------------------------------------------------------------------------

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

-- These are internal curricula used in trainings. Participants are associated with their most recent training enrollment curricula.
  -- Currently a training is based on a single curriculum.
CREATE TABLE IF NOT EXISTS "curricula" (
  "id" SERIAL,
  "name" TEXT
);

-- The scope of the event    "full", "intro", "coaching", "one-on-one", "office_hour", "review"
CREATE TABLE IF NOT EXISTS "event_type" (
  "id" SERIAL PRIMARY KEY,
  "event_type" TEXT,
  "date_added" DATE
);

--     "intensive",    "distributed",    "one-day",    "half-day"
CREATE TABLE IF NOT EXISTS "event_format" (
  "id" SERIAL PRIMARY KEY,
  "format" TEXT,
  "date_added" DATE
);

CREATE TABLE IF NOT EXISTS "event_role" (
  "id" SERIAL PRIMARY KEY,
  "role" TEXT -- "facilitator", "administrator", "participant", "observer"
);

--     "American Indian or Alaska Native",    "Asian",    "Black or African American",    "Native Hawaiian or Other Pacific Islander",    "White"
CREATE TABLE IF NOT EXISTS "race" (
  "id" SERIAL PRIMARY KEY,
  "description" TEXT
);

CREATE TABLE IF NOT EXISTS "ethnicity" (
  "id" SERIAL PRIMARY KEY,
  "description" TEXT
);

--     "female",    "male",    "transgender",    "none of these"
CREATE TABLE IF NOT EXISTS "gender" (
  "id" SERIAL PRIMARY KEY,
  "description" TEXT
);

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

/*"S1",
  "S2",
  "S3",
  "S4"
*/
CREATE TABLE IF NOT EXISTS "skill" (
  "id" SERIAL PRIMARY KEY,
  "descrition" TEXT
);

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

CREATE TABLE IF NOT EXISTS "state" (
  "name_jurisdiction" TEXT,
  "ansi_code"         INTEGER,
  "abbreviation"      varchar(2) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS "location" (
  "id" SERIAL PRIMARY KEY,
  "address" TEXT UNIQUE,
  "city"    TEXT,
  "state"   TEXT REFERENCES "state",
  "lat"     NUMERIC,
  "lon"     NUMERIC
);

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

CREATE TABLE IF NOT EXISTS "textbooks" (
  "id" SERIAL PRIMARY KEY,
  "name"      TEXT,
  "publisher" TEXT,
  "year_published" INTEGER
  );

CREATE TABLE IF NOT EXISTS "assessment_instrument" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "curricula" TEXT REFERENCES "curricula", 
  "skills" TEXT REFERENCES "skill"
);

CREATE TABLE IF NOT EXISTS "feedback" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "curricula" CURRICULA, 
  "skills" SKILL[]
);

CREATE TABLE IF NOT EXISTS "organization" (
  "id"           SERIAL PRIMARY KEY,
  "name"         TEXT NOT NULL UNIQUE,
  "location_id"  INTEGER,
  "url"          TEXT,
  "district_id"  TEXT,
  CONSTRAINT "fk_location" FOREIGN KEY ("location_id") REFERENCES "location",
  CONSTRAINT "fk_district" FOREIGN KEY ("district_id") REFERENCES "district"
);
