Table Creation
CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(10)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE
);


Insert Data
INSERT INTO Customers VALUES (1,'John',65,15000,'FALSE');
INSERT INTO Customers VALUES (2,'Mary',45,8000,'FALSE');
INSERT INTO Customers VALUES (3,'David',70,25000,'FALSE');

INSERT INTO Loans VALUES (101,1,10,SYSDATE+20);
INSERT INTO Loans VALUES (102,2,8,SYSDATE+50);
INSERT INTO Loans VALUES (103,3,12,SYSDATE+15);

COMMIT;


Scenario 1
BEGIN
    FOR cust_rec IN (
        SELECT CustomerID
        FROM Customers
        WHERE Age > 60
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = cust_rec.CustomerID;
    END LOOP;

    COMMIT;
END;
/


Scenario 2
BEGIN
    FOR cust_rec IN (
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = cust_rec.CustomerID;
    END LOOP;

    COMMIT;
END;
/


Scenario 3
SELECT CustomerID,
       LoanID,
       DueDate
FROM Loans
WHERE DueDate BETWEEN SYSDATE
                  AND SYSDATE + 30;