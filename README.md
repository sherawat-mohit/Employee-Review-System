# Employee Review System
This *Employee review System* is a web application created to manage the performance ratings of employees. Here, employees can submit feedback toward each other's performance. User's could have either **Employee** or **Admin** role. There are two dashboard pages based on the role of the employee those dashboard pages will be rendered, User with role of **Admin** can assign employees to participate in review of other employees. Employees can submit feedback required by assigned reviews.

## Steps for setting up Employee Review System
1. Clone this repository using the following command:
`gh repo clone sherawat-mohit/Employee-Review-System`

2. Install the required dependencies using the following command:
`npm install` 

3. Start the application using the following command:
`node index.js` 

4. Open the application in your web browser by visiting the following URL:
`http://localhost:3000` 

## From Admin's panel
- Add employee
- Delete employee
- Update employee details
- Assign review to employee
- Update review of employee

### From Employee's panel
- Submit reviews assigned to it
- View reviews given by others

## How to setup the project on local system
- Clone this project from https://github.com/
- Start by installing npm if you don't have it already.
- Navigate to Project Directory and run the following the command.
```bash
npm install
```
- Run project
```bash
npm start or nodemon index.js
```
- visit in your local browser- http://localhost:3000/
 
## TECHSTACK
* Node.js
* MongoDB
* Express.js
* passport.js
* Bootstrap
