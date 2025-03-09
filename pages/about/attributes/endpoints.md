# Endpoints

## List of End Points

### 1. create a new attribut

- **Endpoint**: `POST /api/v1/resource-management/attributs/create`
- **Request Body**: `AttributRequest`
- **Response**: `AttributResponse`

### 2. Get All attributs using or nor some filters

- **Endpoint**: `GET /api/v1/resource-management/attributs`
- **Response**: `List<AttributResponse>`

### 3. Get attribut by ID

- **Endpoint**: `GET /api/v1/resource-management/attributs/{id}`
- **Response**: `AttributResponse`
- **Path Variables**:
  - id (id of attribut) : UUID

### 4. Update attribut

- **Endpoint**: `PUT /api/v1/resource-management/attributs/update/{id}`
- **Request Body**: `AttributRequest`
- **Response**: `AttributResponse`
- **Path Variables**:
  - id (id of attribut) : UUID

### 5. Delete attribut

- **Endpoint**: `/api/v1/resource-management/attributs/delete/{id}`
- **Response**: `String`
- **Path Variables**:
  - id (id of attribut) : UUID

### 6. add new value of attribut to a product

- **Endpoint**: `POST /api/v1/resource-management/attributs/value/add`
- **Params**: 
  - productId : UUID
  - attributId : UUID
  - value : String
- **Response**: `AttributValueResponse`

### 7. Get all attributes values using some filters

- **Endpoint**: `GET /api/v1/resource-management/attributs/value`
- **params**:
  - productId : UUID
  - attributId : UUID
- **Response**: `List<AttributValueResponse>`