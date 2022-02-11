const fs = require('fs');
const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');
const promptMenu =() => {
    return inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "What would you like to do?",
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Role"],
        },
    ])
    .then(userAnswer => {
        switch (userAnswer.memberChoice) {
            case "View All Departments":
                viewDep() ;
                break;

            case "View All Roles":
                viewRoles();
                break;

            case "View All Employees":
                viewEmp();
                break;

            case "Add a Department":
                addDep();
                break;

            case "Add a Role":
                addRoles();
                break;

            case "Add an Employee":
                addEmp();
                break;

            case "Update Employee Role":
                updateRole();
                break;
        }
    });
  };

  const viewDep =() => {
    db.connect(function(err){
        if(err)throw err;
        db.query("SELECT * FROM departments", function(err, result, fields){
            if(err)throw err;
            console.table(result);
        })
      });
    promptMenu();
  }

  const viewRoles =() => {
    db.connect(function(err){
        if(err)throw err;
        db.query("SELECT * FROM roles", function(err, result, fields){
            if(err)throw err;
            console.table(result);
        })
      });
      promptMenu();
  }

  const viewEmp =() => {
    db.connect(function(err){
        if(err)throw err;
        db.query("SELECT * FROM employees", function(err, result, fields){
            if(err)throw err;
            console.table(result);
        })
      });
      promptMenu();
    }

  const addDep =() => {
    console.log('What is the name of the new Department?');
  }

  const addRoles =() => {
    console.log('What is the name of the new Role?');
  }
    
  const addEmp =() => {
    console.log('What is the name of the new Employee?');
}

    const updateRole =() => {
    console.log('Whos role do you want to update?');
}
    promptMenu();