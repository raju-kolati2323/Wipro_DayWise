// Simple Employee Management System (Nodejs + MySQL)

//create database employeeDB;
// use employeeDB;
// create table employeeDB.employees(id INT auto_increment primary key, name varchar(100) NOT NULL, email varchar(100) NOT NULL UNIQUE, department varchar(50), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);


const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeeDB'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!')
})

//add
const insertQuery = `INSERT INTO employees(name, email, department) VALUES(?, ?, ?)`
connection.query(insertQuery, ['Random', 'random@gmail.com', 'Doctor'], (err, result) => {
    if (err) throw err;
    console.log('Employee inserted: ', result.insertId)
})

//get all
connection.query('SELECT * FROM employees', (err, rows) => {
    if (err) throw err;
    console.log('Employees List : ', rows)
})

// update 
const updateQuery = `UPDATE employees SET name = ?, email = ?, department = ? WHERE id = ?`;
connection.query(updateQuery, ['Bob', 'fgj@gmail.com', 'HR', 1], (err, result) => {
    if (err) throw err;

    if (result.affectedRows === 0) {
        console.error(`No employee found with ID to update`);
    } else {
        console.log(`Employee updated successfully.`);
    }
});

// delete employee by id
const deleteQuery = `DELETE FROM employees WHERE id = ?`;
connection.query(deleteQuery, [1], (err, result) => {
    if (err) throw err;

    if (result.affectedRows === 0) {
        console.error(`No employee found with ID to delete`);
    } else {
        console.log(`Employee deleted successfully.`);
    }
});

connection.end()