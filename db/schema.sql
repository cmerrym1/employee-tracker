DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS employees;

CREATE TABLE roles (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  role_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  salary INTEGER
);

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    employee_firstName VARCHAR(50) NOT NULL,
    employee_lastName VARCHAR(50) NOT NULL,
    role_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    department_name VARCHAR (30) NOT NULL,
    department_id INTEGER,
    salary INTEGER NOT NULL,
    supervisor_name VARCHAR(60) NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);