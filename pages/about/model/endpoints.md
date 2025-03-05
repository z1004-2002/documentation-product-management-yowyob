# Endpoints

## List of End Points

### 1. Create a new Model of a product

- **Endpoint**: `POST /api/v1/resource-management/models/create`
- **Request Body**: `Model`
- **Response**: `Model`

### 2. Get some model with not required parameters

- **Endpoint**: `GET /api/v1/resource-management/models`
- **Response**: `List<Model>`
- **Params**:
  - createdByUserId: UUID

### 3. Get Product model by ID

- **Endpoint**: `GET /api/v1/resource-management/models/{id}`
- **Response**: `Model`
- **Path Variables**:
  - id (id of service) : UUID

### 4. Update model

- **Endpoint**: `PUT /api/v1/resource-management/models/update/{id}`
- **Request Body**: `Model`
- **Response**: `Model`
- **Path Variables**:
  - id (id of service) : UUID

### 5. Delete model

- **Endpoint**: `DELETE /api/v1/resource-management/models/delete/{id}`
- **Response**: `String`
- **Path Variables**:
  - id (id of service) : UUID
