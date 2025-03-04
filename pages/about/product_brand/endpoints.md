# Endpoints

## List of End Points

### 1. Post a new product brand

- **Endpoint**: `POST /api/v1/resource-management/product_brand/create`
- **Request Body**: `ProductBrandRequest`
- **Response**: `string`

### 2. Get some product brand with not required parameters

- **Endpoint**: `GET /api/v1/resource-management/product_brand`
- **Response**: `List<ProductBrand>`
- **Params**:
  - createdByUserId: UUID

### 3. Get Product product brand ID

- **Endpoint**: `GET /api/v1/resource-management/product_brand/{id}`
- **Response**: `ProductBrand`
- **Path Variables**:
  - id (id of service) : UUID

### 4. Update product brand

- **Endpoint**: `PUT /api/v1/resource-management/product_brand/update/{id}`
- **Request Body**: `ProductBrandRequest`
- **Response**: `ProductBrand`
- **Path Variables**:
  - id (id of service) : UUID

### 5. Delete Product brand

- **Endpoint**: `DELETE /api/v1/resource-management/product_brand/delete/{id}`
- **Response**: `String`
- **Path Variables**:
  - id (id of service) : UUID
