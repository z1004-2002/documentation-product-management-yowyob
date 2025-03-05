# Endpoints

## List of End Points

### 1. Add new review to a product

- **Endpoint**: `POST /api/v1/resource-management/reviews/create`
- **Request Body**: `ReviewsRequest`
- **Response**: `ReviewsResponse`

### 2. Get All reviews

- **Endpoint**: `GET /api/v1/resource-management/reviews`
- **Response**: `List<ReviewsResponse>`
- **Params**:
  - userId: UUID
  - targetId: UUID

### 3. Get reviews by ID

- **Endpoint**: `GET /api/v1/resource-management/reviews/{id}`
- **Response**: `ReviewsResponse`
- **Path Variables**:
  - id (id of service) : UUID

### 4. Update a review

- **Endpoint**: `PUT /api/v1/resource-management/reviews/update/{id}`
- **Request Body**: `ReviewsRequest`
- **Response**: `ReviewsResponse`
- **Path Variables**:
  - id (id of review) : UUID

### 5. Delete review

- **Endpoint**: `DELETE /api/v1/resource-management/reviews/delete/{id}`
- **Response**: `String`
- **Path Variables**:
  - id (id of service) : UUID
