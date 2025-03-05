# DTO Structures

## 1. ReactionRequest

This DTO is used when a user reacts to a target (e.g., a product, post, or content).

### Fields:

- **targetId** (UUID) – Unique identifier of the target being reacted to (e.g., product, post, etc.).
- **userId** (UUID) – Unique identifier of the user making the reaction.
- **reactionType** (String) – Type of reaction (e.g., LIKE, DISLIKE, LOVE).
- **createdAt** (LocalDateTime) – Date and time when the reaction was created.

### Example:

```json
{
  "targetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "reactionType": "LIKE",
  "createdAt": "2025-03-05T08:05:24.508Z"
}
```

## 2. ReactionResponse

This DTO is used to represent the details of a user's reaction to a target (e.g., a product, post, or content).

### Fields:

- **id** (UUID) – Unique identifier of the reaction.
- **targetId** (UUID) – Unique identifier of the target being reacted to (e.g., product, post, etc.).
- **userId** (UUID) – Unique identifier of the user who made the reaction.
- **reactionType** (String) – Type of reaction (e.g., LIKE, DISLIKE, LOVE).
- **createdAt** (LocalDateTime) – Date and time when the reaction was created.

### Example:

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "targetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "reactionType": "LIKE",
  "createdAt": "2025-03-05T08:05:24.509Z"
}
