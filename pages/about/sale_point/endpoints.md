# Endpoints

## List of End Points

### 1. Add new sale point to a variation

- **Endpoint**: `POST /api/v1/resource-management/sale_price/create`
- **Request Body**: `SalePointRequest`
- **Response**: `SalePointResponse`

### 2. Get All Sale point

- **Endpoint**: `GET /api/v1/resource-management/sale_price`
- **Response**: `List<SalePointResponse>`
- **Params**:
  - variationId: UUID

### 3. Get sale point by ID

- **Endpoint**: `GET /api/v1/resource-management/sale_price/{id}`
- **Response**: `SalePointResponse`
- **Path Variables**:
  - id (id of service) : UUID

### 4. Update a sale point

- **Endpoint**: `PUT /api/v1/resource-management/sale_price/update/{id}`
- **Request Body**: `SalePointRequest`
- **Response**: `SalePointResponse`
- **Path Variables**:
  - id (id of service) : UUID

### 5. Delete sale point

- **Endpoint**: `DELETE /api/v1/resource-management/sale_price/delete/{id}`
- **Response**: `String`
- **Path Variables**:
  - id (id of service) : UUID
