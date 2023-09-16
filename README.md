# Employee Review System
This *Employee review System* is a web application created to manage the performance ratings of employees. Here, employees can submit feedback toward each other's performance. User's could have either **Employee** or **Admin** role. There are two dashboard pages based on the role of the employee those dashboard pages will be rendered, User with role of **Admin** can assign employees to participate in review of other employees. Employees can submit feedback required by assigned reviews.

## Steps for setting up Employee Review System
1. Clone this repository using the following command:
```gh repo clone sherawat-mohit/Employee-Review-System```

2. Install the required dependencies using the following command:
```
npm install
``` 

3. Start the application using the following command:
```
node index.js
``` 

4. Open the application in your web browser by visiting the following URL:
```
http://localhost:3000
``` 

## Steps to use Employee Review System
1. User have to *log in* or *Sign up* as an **Admin** or **Employee** 
2. Certain Panel with different set of features will be opened based on the *role of the employee*.
3. From **Admin Panel**:
    * Add Employee
    * Delete Employee
    * Update Employee details
    * Assign review to Employee
    * Update review of Employee
4. From **Employee Panel**:
    * Submit reviews assigned to it
    * View reviews given by others

## Tech Stack
* Node.js
* MongoDB
* Express.js
* passport.js
* Bootstrap
