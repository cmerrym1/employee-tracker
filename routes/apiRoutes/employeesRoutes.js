const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// Get all employees and their roles
router.get('/employees', (req, res) => {
  const sql = `SELECT employees.*, roles.name 
                AS role_name 
                FROM employees 
                LEFT JOIN role 
                ON employees.role_id = roles.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Get single employee with role
router.get('/employee/:id', (req, res) => {
  const sql = `SELECT employees.*, roles.name 
               AS role_name 
               FROM employees 
               LEFT JOIN roles 
               ON employees.role_id = roless.id 
               WHERE employee.id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});

// Create an employee
router.post('/employee', ({ body }, res) => {
  const errors = inputCheck(
    body,
    'first_name',
    'last_name',
    'role_name',
    'department_name',
    'salary',
    'manager_name'
  );
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO candidates (first_name, last_name, role_name, department_name, salary, manager_name) VALUES (?,?,?,?,?,?)`;
  const params = [
    body.first_name,
    body.last_name,
    body.role_name,
    body.department_name,
    body.salary,
    body.manager_name
  ];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

// Update a employees's role
router.put('/employee/:id', (req, res) => {
  const errors = inputCheck(req.body, 'role_id');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `UPDATE employee SET role_id = ? 
               WHERE id = ?`;
  const params = [req.body.role_id, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Employee not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});

// Delete an employee
router.delete('/employee/:id', (req, res) => {
  const sql = `DELETE FROM employees WHERE id = ?`;

  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Employee not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

module.exports = router;
