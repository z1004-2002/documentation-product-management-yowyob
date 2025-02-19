## Endpoints

### 1. Create Sales Person

- **Endpoint**: `POST /api/v1/salespersons`
- **Request Body**: `SalesPersonRequest`
- **Response**: `SalesPersonResponse`

### 2. Get Sales Person by ID

- **Endpoint**: `GET /api/v1/salespersons/{id}`
- **Response**: `SalesPersonResponse`

### 3. Get All Sales Persons

- **Endpoint**: `GET /api/v1/salespersons`
- **Response**: `List<SalesPersonResponse>`

### 4. Update Sales Person

- **Endpoint**: `PUT /api/v1/salespersons/{id}`
- **Request Body**: `SalesPersonRequest`
- **Response**: `SalesPersonResponse`

### 5. Delete Sales Person

- **Endpoint**: `DELETE /api/v1/salespersons/delete/{id}`
- **Response**: `String`

## DTO Structures

### SalesPersonRequest

This DTO is used when creating or updating a sales person.

#### Fields:

- **name**: String — Name of the salesperson.
- **assignedCustomerIds**: List<Customer> — List of assigned customer IDs.
- **assignedProspectIds**: List<Prospect> — List of assigned prospect IDs.
- **commissionRate**: Float — Commission rate for the salesperson.
- **credit**: Float — Credit limit for the salesperson.
- **currentBalance**: Float — Current balance for the salesperson.
- **organisationId**: UUID — ID of the associated organization.
- **agencyId**: UUID — ID of the associated agency.
- **expiredAt**: LocalDate — Expiration date for the salesperson.

#### Example:

```json
{
  "name": "John Smith",
  "assignedCustomerIds": [],
  "assignedProspectIds": [],
  "commissionRate": 5.0,
  "credit": 1000.0,
  "currentBalance": 500.0,
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "agencyId": "e3e3e3e3-e3e3-4e3e-e3e3-e3e3e3e3e3e",
  "expiredAt": "2025-12-31"
}

SalesPersonResponse

This DTO is used to return information about a sales person after creation or retrieval.
Fields:

    id: UUID — Unique identifier for the salesperson.
    name: String — Name of the salesperson.
    assignedCustomerIds: List<Customer> — List of assigned customer IDs.
    assignedProspectIds: List<Prospect> — List of assigned prospect IDs.
    commissionRate: Float — Commission rate for the salesperson.
    credit: Float — Credit limit for the salesperson.
    currentBalance: Float — Current balance for the salesperson.
    organisationId: UUID — ID of the associated organization.
    agencyId: UUID — ID of the associated agency.
    expiredAt: LocalDate — Expiration date for the salesperson.

Example:
json

{
  "id": "a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1",
  "name": "John Smith",
  "assignedCustomerIds": [],
  "assignedProspectIds": [],
  "commissionRate": 5.0,
  "credit": 1000.0,
  "currentBalance": 500.0,
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "agencyId": "e3e3e3e3-e3e3-4e3e-e3e3-e3e3e3e3e3e",
  "expiredAt": "2025-12-31"
}

Conclusion

This document outlines the necessary endpoints and DTOs for managing sales persons within the application. Ensure that your requests and responses adhere to these structures for proper functionality.


### Key Features:
- **Overview**: Provides context about the sales person management system.
- **Endpoints**: Clearly defined endpoints for managing sales persons.
- **DTO Structures**: Details the `SalesPersonRequest` and `SalesPersonResponse` with examples to clarify the expected data format.

