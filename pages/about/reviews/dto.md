# DTO Structures

## 1. ReviewsRequest

This DTO is used when submitting a review for a target (e.g., product, service, post).

### Fields:

- **userId** (UUID) – Unique identifier of the user submitting the review.
- **targetId** (UUID) – Unique identifier of the target being reviewed (e.g., product, service, post).
- **rating** (Integer) – Rating given by the user, usually on a scale from 1 to 5.
- **comment** (String) – The text of the review or feedback provided by the user.

### Example:

```json
{
  "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "targetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "rating": 5,
  "comment": "Great product! Highly recommend it to everyone."
}
``` 

## 2. ReviewsResponse

This DTO is used to represent the details of a submitted review for a target (e.g., product, service, post).

### Fields:

- **id** (UUID) – Unique identifier of the review.
- **userId** (UUID) – Unique identifier of the user who submitted the review.
- **targetId** (UUID) – Unique identifier of the target being reviewed (e.g., product, service, post).
- **rating** (Integer) – Rating given by the user, usually on a scale from 1 to 5.
- **comment** (String) – The text of the review or feedback provided by the user.
- **createdAt** (LocalDateTime) – Date and time when the review was created.
- **updatedAt** (LocalDateTime) – Date and time when the review was last updated.

### Example:

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "targetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "rating": 5,
  "comment": "Great product! Highly recommend it to everyone.",
  "createdAt": "2025-03-05T08:23:54.337Z",
  "updatedAt": "2025-03-05T08:23:54.337Z"
}
```