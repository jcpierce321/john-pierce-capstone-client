Program Diploma - Capstone Project
Project Title: DUBLR
Author:	John Carlo Pierce
Cohort: Software Engineering, June 2023


1. Project Overview

Description
DUBLR helps music directors and conductors looking to hire musicians for their productions connect to instrumentalists in their area who are open to play. Not only will music directors have access to competent, experienced pit musicians, but they will be able to find players who possess the skills to double on multiple instruments, a requirement for most Broadway musicals.

Problem
Doubler (n): a highly-skilled instrumentalist who plays more than one instrument with relatively equal competence.
Broadway instrumentation often calls for musicians who can play multiple instruments. For example, one musician may cover flute, clarinet, and alto saxophone. Another may be called on to play both trumpet and flugelhorn. In the past, when I’ve been looking for musicians to fill out my pit orchestra, I’ve relied on word of mouth and personal recommendations. This grass-roots network is time-tested; however, an application that can connect me with musicians who double on specific instruments will get me quicker to my goal of hiring the musicians I need for my production.

User Profile
There are two groups of end-users.
Music directors: we are busy musicians ourselves, working several jobs simultaneously, and need an expeditious way to fill their pit requirements while working within our budget.
Musicians: most musicians are at least semi-reliant on the gig economy and are open to taking a gig if the time / travel / pay ratio seems to be worthwhilel. 

Requirements: Use Cases and Features
This app will allow musicians to upload contact information and a link to a personal website profile (e.g LinkedIn). The UI will include a list of checkboxes that users can activate to indicate which instruments they play. Music directors looking to hire doublers can filter the database according to their needs and reach out directly to musicians with dates, times, location, and compensation details.

Tech Stack and APIs
HTML, CSS, JavaScript, Sass, Node.js, ExpressJS, MySQL  
React.js


2. Client-Side Implementation
Site Map (In list format:)

Homepage
*Cards with user profile information, primary instrument, and secondary instruments (dynamically populated)

Submit Form
*Input fields for personal data
*Dropdrop menu with options to indicate primary instrument
*Checkboxes to indicate secondary instruments
*Submit button

Search Form
*Checkboxes of instrument options
*Search button
*Search results on click (clickable links to profile cards)

Profile card
*Identical to profile card on Homepage, now with Contact button (presently not operable)


3. Server-Side Implementation

End-Point Descriptions
User will be able to GET filtered information about all users, about users based on which instruments they indicated, and about one user
Users will be able to POST contact information and information regarding which instruments they play

End-point
Response Format
HTTP GET - /users
HTTP GET - /users/search
HTTP GET - /users/:id 
{ users : [
{user_Id : NUMBER
name : ‘STRING’,
email: ‘STRING’,
telephone: ‘STRING’,
city: ‘STRING’
website_URL: ‘STRING’
primary_instrument: ‘STRING’}
]
HTTP POST -/users
{ users : [
{user_Id : NUMBER
name : ‘STRING’,
email: ‘STRING’,
telephone: ‘STRING’,
city: ‘STRING’
website_URL: ‘STRING’
primary_instrument: ‘STRING’}
]

Database Structure
USERS
user_id
name
email
telephone
city
primary_inst
webiste_url
flute
Piccolo
oboe,
bassoon,
clarinetBb,
clarinetEb,
saxAlto,
saxTenor,
saxBaritone
					

4. Project Roadmap
Phase 1

Milestones
Goal
1
Create database and design models
2
Build server boilerplate and hook up to database
3 
Define all Endpoints in express
4 
Implement functionality of endpoints - create JSON response and verify endpoint responses
5
Build React App overall structure and high-level components
6 
Connect smart components to end-point APIs
7 
Test/debug end-to-end functionality of app
8 
Implement CSS/Styling 
9
Code Clean up, last minute testing/debugging
10 
DEPLOYMENT
11
DEMO DAY


Phase 2
Allow user to upload a photo and/or sound clip

Phase 3
Allow music directors to leave testimonials for musicians they’ve hired and worked with.

