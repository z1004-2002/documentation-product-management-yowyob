## Endpoints

### 1. Create Customer

- **Endpoint**: `POST /api/v1/customers`
- **Request Body**: `CustomerRequest`
- **Response**: `CustomerResponse`

### 2. Get All Customers

- **Endpoint**: `GET /api/v1/customers`
- **Response**: `List<CustomerResponse>`

### 3. Get Customer by ID

- **Endpoint**: `GET /api/v1/customers/{id}`
- **Response**: `CustomerResponse`

### 4. Update Customer

- **Endpoint**: `PUT /api/v1/customers/{id}`
- **Request Body**: `CustomerRequest`
- **Response**: `CustomerResponse`

### 5. Delete Customer

- **Endpoint**: `DELETE /api/v1/customers/{id}`
- **Response**: `String`

### 6. Find Customers by Organisation ID

- **Endpoint**: `GET /api/v1/customers/organisation/{organisationId}`
- **Response**: `List<CustomerResponse>`

### 7. Find Customers by Agency ID

- **Endpoint**: `GET /api/v1/customers/agency/{agencyId}`
- **Response**: `List<CustomerResponse>`

## DTO Structures

### CustomerRequest

This DTO is used when creating or updating a customer.

#### Fields:

- **name**: String — Name of the customer.
- **email**: String — Email address of the customer.
- **phone**: String — Phone number of the customer.
- **transactionID**: Float — Transaction ID associated with the customer.
- **customerName**: String — Additional name information for the customer.
- **organisationId**: UUID — ID of the associated organization.
- **agencyId**: UUID — ID of the associated agency.
- **amountPaid**: String — Amount paid by the customer.
- **paymentMethod**: String — Method of payment used.

#### Example:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "transactionID": 123456.78,
  "customerName": "John",
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "agencyId": "e3e3e3e3-e3e3-4e3e-e3e3-e3e3e3e3e3e",
  "amountPaid": "150.00",
  "paymentMethod": "Credit Card"
}

CustomerResponse

This DTO is used to return information about a customer after creation or retrieval.
Fields:

    id: UUID — Unique identifier for the customer.
    name: String — Name of the customer.
    email: String — Email address of the customer.
    phone: String — Phone number of the customer.
    transactionID: Float — Transaction ID associated with the customer.
    customerName: String — Additional name information for the customer.
    organisationId: UUID — ID of the associated organization.
    agencyId: UUID — ID of the associated agency.
    amountPaid: String — Amount paid by the customer.
    paymentMethod: String — Method of payment used.

Example:
json

{
  "id": "a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "transactionID": 123456.78,
  "customerName": "John",
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "agencyId": "e3e3e3e3-e3e3-4e3e-e3e3-e3e3e3e3e3e",
  "amountPaid": "150.00",
  "paymentMethod": "Credit Card"
}

Conclusion

This document outlines the necessary endpoints and DTOs for managing customers within the application. Ensure that your requests and responses adhere to these structures for proper functionality.


### Key Features:
- **Overview**: Explains the purpose of the customer management system.
- **Endpoints**: Clearly defined endpoints for managing customers.
- **DTO Structures**: Details the `CustomerRequest` and `CustomerResponse` with examples to clarify the expected data format.

