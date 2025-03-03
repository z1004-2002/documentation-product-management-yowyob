# Endpoints

## List of End Points

### 1. Post a new product

- **Endpoint**: `POST /api/v1/resource-management/product_post/create`
- **Request Body**: `ProductPostRequest`
- **Response**: `ProductPostResponse`

### 2. Get All Product Post

- **Endpoint**: `GET /api/v1/resource-management/product_post`
- **Response**: `List<ProductPostResponse>`
- **Params**:
  - marchandId: UUID
  - variationId: UUID
  - categorieId: UUID
  - status: AVAILABLE, UNNAVAILABLE

### 3. Get Product Post by ID

- **Endpoint**: `GET /api/v1/resource-management/product_post/{id}`
- **Response**: `ProductPostResponse`
- **Path Variables**:
  - id (id of service) : UUID

### 4. Update Post Product

- **Endpoint**: `PUT /api/v1/resource-management/product_post/update/{id}`
- **Request Body**: `ProductPostRequest`
- **Response**: `ProductPostResponse`
- **Path Variables**:
  - id (id of service) : UUID

### 5. Delete Post Product

- **Endpoint**: `DELETE /api/v1/resource-management/product_post/delete/{id}`
- **Response**: `String`
- **Path Variables**:
  - id (id of service) : UUID
