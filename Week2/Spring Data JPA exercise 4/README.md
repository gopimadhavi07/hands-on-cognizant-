# Hands-on 4

## Difference between JPA, Hibernate and Spring Data JPA

### Java Persistence API (JPA)

Java Persistence API (JPA) is a Java specification used to persist, retrieve, update, and delete data from relational databases.

#### Features
- JPA is a specification.
- It does not provide implementation.
- It defines standard APIs for Object Relational Mapping (ORM).
- Hibernate is one of the implementations of JPA.

#### Advantages
- Database independent
- Standard persistence API
- Reduces JDBC code
- Easy to switch between ORM providers

---

### Hibernate

Hibernate is an Object Relational Mapping (ORM) framework that implements the JPA specification.

#### Features
- Maps Java classes to database tables.
- Automatically generates SQL queries.
- Supports CRUD operations.
- Supports caching and lazy loading.

#### Advantages
- Reduces boilerplate code
- Automatic table mapping
- Better performance
- Easy transaction handling

---

### Spring Data JPA

Spring Data JPA is a Spring framework module built on top of JPA.

It is **not** a JPA implementation. Instead, it uses Hibernate (or another JPA implementation) internally.

#### Features
- Reduces boilerplate code
- Automatic repository implementation
- Built-in CRUD methods
- Pagination and sorting support
- Automatic transaction management

#### Advantages
- Less coding
- Easy integration with Spring Boot
- Faster application development
- Easier maintenance

---

## Relationship

Spring Boot

↓

Spring Data JPA

↓

JPA Specification

↓

Hibernate

↓

MySQL Database

---

## Comparison

| Feature | JPA | Hibernate | Spring Data JPA |
|---------|-----|-----------|-----------------|
| Type | Specification | Framework | Spring Module |
| Implementation | No | Yes | No |
| ORM Support | Defines ORM | Implements ORM | Uses Hibernate |
| CRUD Operations | Manual | Easier | Automatic |
| Transaction Management | Manual | Manual | Automatic |
| Boilerplate Code | More | Less | Very Less |

---

## Hibernate Example

```java
Session session = factory.openSession();
Transaction tx = session.beginTransaction();

session.save(employee);

tx.commit();
session.close();
```

### Explanation

- Opens a session.
- Begins a transaction.
- Saves the employee.
- Commits the transaction.
- Closes the session.

---

## Spring Data JPA Example

```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);
}
```

### Explanation

- Repository is injected automatically.
- save() persists the employee.
- Transaction management is handled automatically.
- No Session or Transaction object is required.

---

## Conclusion

- **JPA** is a specification.
- **Hibernate** is an implementation of JPA.
- **Spring Data JPA** is a Spring module that simplifies JPA by reducing boilerplate code and providing repository support.
