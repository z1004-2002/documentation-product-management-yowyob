# Endpoints

## List of End Points

### 1. Add new sale price to a product

- **Endpoint**: `POST /api/v1/resource-management/sale_price/create`
- **Request Body**: `SalePriceRequest`
- **Response**: `SalePriceResponse`

### 2. Get All Sale Price

- **Endpoint**: `GET /api/v1/resource-management/sale_price`
- **Response**: `List<SalePriceResponse>`
- **Params**:
  - postId: UUID

### 3. Get sale prices by ID

- **Endpoint**: `GET /api/v1/resource-management/sale_price/{id}`
- **Response**: `SalePriceResponse`
- **Path Variables**:
  - id (id of service) : UUID

### 4. Update a sale price

- **Endpoint**: `PUT /api/v1/resource-management/sale_price/update/{id}`
- **Request Body**: `SalePriceRequest`
- **Response**: `SalePriceResponse`
- **Path Variables**:
  - id (id of service) : UUID

### 5. Delete sale price

- **Endpoint**: `DELETE /api/v1/resource-management/sale_price/delete/{id}`
- **Response**: `String`
- **Path Variables**:
  - id (id of service) : UUID
