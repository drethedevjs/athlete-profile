Athlete Profile Input Form
===============================

## Azure
View Deployed App at [Athlete Profile App](https://athleteprofileapp.azurewebsites.net)

### Overview
In this task you'll be creating and deploying a simple, full-stack, responsive, single-page application in Node and Angular 1/ AngularJS.

### Requirements

Create a **multi-step** or **multi-screen** athlete profile form that gathers standard demographic, sports and event data. Here is a list of data points and sports you might want to use:

#### Data Points

* `Name`
* `Date of Birth`
* `Location`
* `Team` (e.g. New York Giants)
* `Gender`
* `Sports` (Can Multiple)
* `About`
* `Interests`
* `Profile Image`

#### Sports

* Golf
* Tennis
* Cricket
* Basketball
* Baseball
* American Football
* Aquatics
* Archery
* Automobile Racing
* Badminton
* Beach Volleyball
* Bobsleigh
* Body Building
* Boxing
* Cross Country Running
* Cross Country Skiing
* Curling
* Cycling
* Darts
* Decathlon
* Down Hill Skiing
* Equestrianism
* eSports
* Fencing
* Field Hockey
* Figure Skating
* Gymnastics
* Ice Hockey
* Martial Arts
* Mixed Martial Arts
* Modern Pentathlon
* Motorcycle Racing
* Netball
* Polo
* Racquetball
* Rowing
* Rugby
* Sailing
* Softball
* Shooting
* Skateboarding
* Skeet Shooting
* Skeleton
* Snow Boarding
* Soccer (Football)
* Squash
* Surfing
* Swimming
* Track and Field

Here is a suggested organization of the form but use your best judgement and creativity:

1. **Basic Info**: name, sport, gender, date of birth 
2. **About**: description, location, team etc
3. **Summary**: show the athlete a wrap-up screen with the info they added, and give them a way to go back and edit if there are any mistake
4. **Submit**: On submit, the payload should be sent to a simple end point which persists the profile. This should be saved to a simple free MongoDB instance, such as mongoAtlas.
5. **Profile**: A well styled profile displaying all the information gathered about the user
6. **List**: After submission I should see a list of all profiles I have created 

Here are the requirements for the API

1. **Node/Express**
2. **Mongoose ORM** (MongoDB)
3. **3 End Points - POST, GET, PUT**
4. **Request Param Validation - express-validator** (Bonus Feature)

Please note:
* This is a **single-page application**. There shouldn't be page reloads between screens.

### Evaluation & priorities

Within your brief **5 hour time limit** I hope you'll prioritize the following, in this order. Consider this an iterative process � get it working on sound principles first, then refine and polish as time allows.

1. Make it work!
2. Clean and clear code (hopefully you didn't sacrifice this to make it work)
3. Project organization
4. Planning: tools used, implementation strategy, basic UX concerns like what to ask for where
5. Make it look good - just use Bootstrap, a Material theme, or whatever you're comfortable with
6. Management of data, state, and events internally
7. Code quality details
  - Type, variable, property checking
  - Failing fast, for better debugging
8. Extra polish, concern and care will be noticed

Less important details:

* How you host your project. Please consider a simple cheap (or free) host like Heroku. 
* Tests are great, but I doubt you'll have time.

### Delivery of project

* Please place your finished source code on GitHub
* Please host your finished application somewhere (Heroku)
* Email me the repository URL and application URL