# Endpoints

## List of End Points

### 1. Create a new variation of a product

- **Endpoint**: `POST /api/v1/resource-management/variations/create`
- **Request Body**: `VariationRequest`
- **Response**: `VariationResponce`

### 2. Get some variation with not required parameters

- **Endpoint**: `GET /api/v1/resource-management/variations`
- **Response**: `List<VariationResponce>`
- **Params**:
  - productId: UUID
  - key: string

### 3. Get Product variation ID

- **Endpoint**: `GET /api/v1/resource-management/variations/{id}`
- **Response**: `VariationResponce`
- **Path Variables**:
  - id (id of service) : UUID

### 4. Update variation

- **Endpoint**: `PUT /api/v1/resource-management/variations/update/{id}`
- **Request Body**: `VariationRequest`
- **Response**: `VariationResponce`
- **Path Variables**:
  - id (id of service) : UUID

### 5. Delete variation

- **Endpoint**: `DELETE /api/v1/resource-management/variations/delete/{id}`
- **Response**: `String`
- **Path Variables**:
  - id (id of service) : UUID
