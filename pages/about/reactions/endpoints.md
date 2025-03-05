# Endpoints

## List of End Points

### 1. React to a post

- **Endpoint**: `POST /api/v1/resource-management/reactions/create`
- **Request Body**: `ReactionRequest`
- **Response**: `ReactionResponse`

### 2. Get All reactions

- **Endpoint**: `GET /api/v1/resource-management/reactions`
- **Response**: `List<ReationResponse>`
- **Params**:
  - targetId: UUID
  - reactionType: LIKE, LOVE, HAHA, WOW, SAD, ANGRY, CELEBRATE
  - userId: UUID


### 5. Delete reaction by his Id

- **Endpoint**: `DELETE /api/v1/resource-management/reactions/delete/{id}`
- **Response**: `String`
- **Params**: id (id of reaction) : UUID
