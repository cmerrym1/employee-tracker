INSERT INTO departments (department_name)
VALUES
    ('Sales'),
    ('Order Entry'),
    ('Graphics'),
    ('Job Builder'),
    ('Production'),
    ('Stuffing'),
    ('Shipping');

INSERT INTO roles (role_name, department_name, salary)
VALUES
    ('Salesman', 'Sales', '50000'),
    ('Order Specialist', 'Order Entry', '30000'),
    ('Designer', 'Graphics', '36000'),
    ('Order Builder', 'Job Builder', '30000'),
    ('Press Operator', 'Production', '28000'),
    ('Stuffer', 'Stuffing', '28000'),
    ('Shipper', 'Shipping', '35000');

INSERT INTO employees (employee_firstName, employee_lastName, role_name, department_name, salary, supervisor_name)
VALUES
    ('Scott', 'Smaltz', 'Salesman', 'Sales', '50000', 'Brooke Pidgeon'),
    ('Willia', 'Flannigan', 'Order Specialist', 'Order Entry', '30000', 'Heather Desarro'),
    ('Cheri', 'Merryman', 'Designer', 'Graphics', '36000', 'Brooke Pidgeon'),
    ('Shelly', 'Jones', 'Order Builder', 'Job Builder', '30000', 'Brooke Pidgeon'),
    ('Juile', 'Smith', 'Press Operator', 'Production', '28000', 'Heather Desarro'),
    ('Carol', 'Harris', 'Stuffer', 'Stuffing', '28000', 'Heather Desarro'),
    ('Jason', 'Jackson', 'Shipper', 'Shipping', '35000', 'Heather Desarro');