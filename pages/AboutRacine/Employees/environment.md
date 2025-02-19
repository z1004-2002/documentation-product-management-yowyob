## Endpoints

### 1. Create Employee

- **Endpoint**: `POST /api/v1/employee/create`
- **Request Body**: `EmployeeRequest`
- **Response**: `EmployeeResponse`

### 2. Get All Employees

- **Endpoint**: `GET /api/v1/employee`
- **Response**: `List<EmployeeResponse>`

### 3. Get Employee by ID

- **Endpoint**: `GET /api/v1/employee/{id}`
- **Response**: `EmployeeResponse`

### 4. Update Employee

- **Endpoint**: `PUT /api/v1/employee/update/{id}`
- **Request Body**: `EmployeeRequest`
- **Response**: `EmployeeResponse`

### 5. Delete Employee

- **Endpoint**: `DELETE /api/v1/employee/delete/{id}`
- **Response**: `String`

### 6. Get Employees by Organisation ID

- **Endpoint**: `GET /api/v1/employee/employees/{organisationId}`
- **Response**: `List<EmployeeResponse>`

## DTO Structures

### EmployeeRequest

This DTO is used when creating or updating an employee.

#### Fields:

- **agencyId**: UUID — ID of the associated agency.
- **organisationId**: UUID — ID of the associated organization.
- **lastName**: String — Last name of the employee.
- **firstName**: String — First name of the employee.
- **department**: String — Department of the employee.
- **employeeRole**: Role — Position of the employee.

#### Example:

```json
{
  "agencyId": "e1e1e1e1-e1e1-4e1e-e1e1-e1e1e1e1e1e1",
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "lastName": "Doe",
  "firstName": "John",
  "department": "Engineering",
  "employeeRole": "ENGINEER"
}

EmployeeResponse

This DTO is used to return information about an employee after creation or retrieval.
Fields:

    id: UUID — Unique identifier for the employee.
    agencyId: UUID — ID of the associated agency.
    organisationId: UUID — ID of the associated organization.
    lastName: String — Last name of the employee.
    firstName: String — First name of the employee.
    department: String — Department of the employee.
    employeeRole: Role — Position of the employee.

Example:
json

{
  "id": "a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1",
  "agencyId": "e1e1e1e1-e1e1-4e1e-e1e1-e1e1e1e1e1e1",
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "lastName": "Doe",
  "firstName": "John",
  "department": "Engineering",
  "employeeRole": "ENGINEER"
}

Conclusion

This document outlines the necessary endpoints and DTOs for managing employees within the application. Ensure that your requests and responses adhere to these structures for proper functionality.


### Key Features:
- **Overview**: Provides context about the employee management system.
- **Endpoints**: Clearly defined endpoints for managing employees.
- **DTO Structures**: Details the `EmployeeRequest` and `EmployeeResponse` with examples to clarify the expected data format.

