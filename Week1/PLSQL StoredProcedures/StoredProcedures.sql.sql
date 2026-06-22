Scenario 1: Process Monthly Interest
Create SavingsAccounts Table


CREATE TABLE SavingsAccounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Balance NUMBER
);

Insert Sample Data
INSERT INTO SavingsAccounts VALUES (1,'John',10000);
INSERT INTO SavingsAccounts VALUES (2,'Mary',20000);
INSERT INTO SavingsAccounts VALUES (3,'David',15000);

COMMIT;


Create Stored Procedure

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE SavingsAccounts
    SET Balance = Balance + (Balance * 0.01);

    COMMIT;
END;
/

Execute Procedure
BEGIN
    ProcessMonthlyInterest;
END;
/

Verify Output
SELECT * FROM SavingsAccounts;


Scenario 2: Employee Bonus
Create Employee Table

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    Department VARCHAR2(50),
    Salary NUMBER
);


Insert Data
INSERT INTO Employees VALUES (1,'Alice','IT',50000);
INSERT INTO Employees VALUES (2,'Bob','IT',60000);
INSERT INTO Employees VALUES (3,'Charlie','HR',45000);

COMMIT;


Create Procedure
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
)
AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus_percent/100)
    WHERE Department = p_department;

    COMMIT;
END;
/


Execute Procedure
BEGIN
    UpdateEmployeeBonus('IT',10);
END;
/


Verify Output
SELECT * FROM Employees;




Scenario 3: Transfer Funds
Create Accounts Table


CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Balance NUMBER
);


Insert Data
INSERT INTO Accounts VALUES (101,'John',10000);
INSERT INTO Accounts VALUES (102,'Mary',5000);

COMMIT;


Create Procedure
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
)
AS
    v_balance NUMBER;
BEGIN

    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_account;

    IF v_balance >= p_amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_from_account;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_to_account;

        COMMIT;

    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');
    END IF;

END;
/


Execute Procedure
BEGIN
    TransferFunds(101,102,2000);
END;
/


Verify Output
SELECT * FROM Accounts;