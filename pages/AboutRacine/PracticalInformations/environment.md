## Endpoints

### 1. Create Practical Information

- **Endpoint**: `POST /api/v1/practical-information/create`
- **Request Body**: `PracticalInformationRequest`
- **Response**: `PracticalInformationResponse`

### 2. Get All Practical Information

- **Endpoint**: `GET /api/v1/practical-information`
- **Response**: `List<PracticalInformationResponse>`

### 3. Get Practical Information by ID

- **Endpoint**: `GET /api/v1/practical-information/{id}`
- **Response**: `PracticalInformationResponse`

### 4. Update Practical Information

- **Endpoint**: `PUT /api/v1/practical-information/update/{id}`
- **Request Body**: `PracticalInformationRequest`
- **Response**: `PracticalInformationResponse`

### 5. Delete Practical Information

- **Endpoint**: `DELETE /api/v1/practical-information/delete/{id}`
- **Response**: `String`

## DTO Structures

### PracticalInformationRequest

This DTO is used when creating or updating practical information.

#### Fields:

- **organisationId**: UUID — ID of the associated organization.
- **infoType**: String — Type of practical information (e.g., contact details, operational procedures).
- **infoValue**: String — Value of the practical information (stored as JSONB).
- **notes**: String — Additional notes about the practical information.

#### Example:

```json
{
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "infoType": "Contact Information",
  "infoValue": "{\"phone\": \"+1234567890\", \"email\": \"info@example.com\"}",
  "notes": "Primary contact details for the organization."
}

PracticalInformationResponse

This DTO is used to return information about practical information after creation or retrieval.
Fields:

    id: UUID — Unique identifier for the practical information entry.
    organisationId: UUID — ID of the associated organization.
    infoType: String — Type of practical information.
    infoValue: String — Value of the practical information.
    notes: String — Additional notes about the practical information.

Example:
json

{
  "id": "a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1",
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "infoType": "Contact Information",
  "infoValue": "{\"phone\": \"+1234567890\", \"email\": \"info@example.com\"}",
  "notes": "Primary contact details for the organization."
}

Conclusion

This document outlines the necessary endpoints and DTOs for managing practical information within the application. Ensure that your requests and responses adhere to these structures for proper functionality.


### Key Features:
- **Overview**: Provides context about the practical information management system.
- **Endpoints**: Clearly defined endpoints for managing practical information.
- **DTO Structures**: Details the `PracticalInformationRequest` and `PracticalInformationResponse` with examples to clarify the expected data format.

