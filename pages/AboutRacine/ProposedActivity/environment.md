## Endpoints

### 1. Create Proposed Activity

- **Endpoint**: `POST /api/v1/proposed-activity/create`
- **Request Body**: `ProposedActivityRequest`
- **Response**: `ProposedActivityResponse`

### 2. Get All Proposed Activities

- **Endpoint**: `GET /api/v1/proposed-activity`
- **Response**: `List<ProposedActivityResponse>`

### 3. Get Proposed Activity by ID

- **Endpoint**: `GET /api/v1/proposed-activity/{id}`
- **Response**: `ProposedActivityResponse`

### 4. Update Proposed Activity

- **Endpoint**: `PUT /api/v1/proposed-activity/update/{id}`
- **Request Body**: `ProposedActivityRequest`
- **Response**: `ProposedActivityResponse`

### 5. Delete Proposed Activity

- **Endpoint**: `DELETE /api/v1/proposed-activity/delete/{id}`
- **Response**: `String`

## DTO Structures

### ProposedActivityRequest

This DTO is used when creating or updating a proposed activity.

#### Fields:

- **organisationId**: UUID — ID of the associated organization.
- **activityType**: String — Type of the proposed activity (e.g., workshop, seminar).
- **activityName**: String — Name of the proposed activity.
- **activityRate**: BigDecimal — Rate for the proposed activity.
- **activityDescription**: String — Description of the proposed activity.

#### Example:

```json
{
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "activityType": "Workshop",
  "activityName": "Leadership Training",
  "activityRate": 500.00,
  "activityDescription": "A training session focused on leadership skills."
}

ProposedActivityResponse

This DTO is used to return information about a proposed activity after creation or retrieval.
Fields:

    id: UUID — Unique identifier for the proposed activity.
    organisationId: UUID — ID of the associated organization.
    activityType: String — Type of the proposed activity.
    activityName: String — Name of the proposed activity.
    activityRate: BigDecimal — Rate for the proposed activity.
    activityDescription: String — Description of the proposed activity.

Example:
json

{
  "id": "a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1",
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "activityType": "Workshop",
  "activityName": "Leadership Training",
  "activityRate": 500.00,
  "activityDescription": "A training session focused on leadership skills."
}

Conclusion

This document outlines the necessary endpoints and DTOs for managing proposed activities within the application. Ensure that your requests and responses adhere to these structures for proper functionality.


### Key Features:
- **Overview**: Provides context about the proposed activity management system.
- **Endpoints**: Clearly defined endpoints for managing proposed activities.
- **DTO Structures**: Details the `ProposedActivityRequest` and `ProposedActivityResponse` with examples to clarify the expected data format.
