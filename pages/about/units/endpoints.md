# Endpoints

## List of End Points

### 1. create a new unit

- **Endpoint**: `POST /api/v1/resource-management/units/create`
- **Request Body**: `UnitRequest`
- **Response**: `UnitResponse`

### 2. Get All Units using or nor some filters

- **Endpoint**: `GET /api/v1/resource-management/units`
- **Response**: `List<UnitResponse>`
- **PathVatiable**:
  - ProductId: UUID

### 3. Get unit by ID

- **Endpoint**: `GET /api/v1/resource-management/units/{id}`
- **Response**: `UnitResponse`
- **Path Variables**:
  - id (id of unit) : UUID

### 4. Update unit

- **Endpoint**: `PUT /api/v1/resource-management/units/update/{id}`
- **Request Body**: `UnitRequest`
- **Response**: `UnitResponse`
- **Path Variables**:
  - id (id of unit) : UUID

### 5. Delete unit

- **Endpoint**: `/api/v1/resource-management/units/delete/{id}`
- **Response**: `String`
- **Path Variables**:
  - id (id of unit) : UUID
