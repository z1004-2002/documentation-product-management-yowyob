## Endpoints

### 1. Create Prospect

- **Endpoint**: `POST /api/v1/prospect`
- **Request Body**: `ProspectRequest`
- **Response**: `ProspectResponse`

### 2. Get All Prospects

- **Endpoint**: `GET /api/v1/prospect`
- **Response**: `List<ProspectResponse>`

### 3. Get Prospect by ID

- **Endpoint**: `GET /api/v1/prospect/{id}`
- **Response**: `ProspectResponse`

### 4. Update Prospect

- **Endpoint**: `PUT /api/v1/prospect/update/{id}`
- **Request Body**: `ProspectRequest`
- **Response**: `ProspectResponse`

### 5. Delete Prospect

- **Endpoint**: `DELETE /api/v1/prospect/delete/{id}`
- **Response**: `String`

## DTO Structures

### ProspectRequest

This DTO is used when creating or updating a prospect.

#### Fields:

- **transactionId**: Float — Transaction ID associated with the prospect.
- **customerName**: String — Name of the prospect.
- **organisationId**: UUID — ID of the associated organization.
- **agencyId**: UUID — ID of the associated agency.
- **paymentMethod**: String — Payment method used by the prospect.
- **amountPaid**: String — Amount paid by the prospect.
- **interestLevel**: String — Level of interest shown by the prospect (e.g., low, medium, high).

#### Example:

```json
{
  "transactionId": 123456.78,
  "customerName": "Jane Doe",
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "agencyId": "e3e3e3e3-e3e3-4e3e-e3e3-e3e3e3e3e3e",
  "paymentMethod": "Credit Card",
  "amountPaid": "250.00",
  "interestLevel": "High"
}

ProspectResponse

This DTO is used to return information about a prospect after creation or retrieval.
Fields:

    id: UUID — Unique identifier for the prospect.
    transactionId: Float — Transaction ID associated with the prospect.
    customerName: String — Name of the prospect.
    organisationId: UUID — ID of the associated organization.
    agencyId: UUID — ID of the associated agency.
    paymentMethod: String — Payment method used by the prospect.
    amountPaid: String — Amount paid by the prospect.
    interestLevel: String — Level of interest shown by the prospect.

Example:
json

{
  "id": "a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1",
  "transactionId": 123456.78,
  "customerName": "Jane Doe",
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "agencyId": "e3e3e3e3-e3e3-4e3e-e3e3-e3e3e3e3e3e",
  "paymentMethod": "Credit Card",
  "amountPaid": "250.00",
  "interestLevel": "High"
}

Conclusion

This document outlines the necessary endpoints and DTOs for managing prospects within the application. Ensure that your requests and responses adhere to these structures for proper functionality.


### Key Features:
- **Overview**: Provides context about the prospect management system.
- **Endpoints**: Clearly defined endpoints for managing prospects.
- **DTO Structures**: Details the `ProspectRequest` and `ProspectResponse` with examples to clarify the expected data format.

