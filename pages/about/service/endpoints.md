# Endpoints

## List of End Points

### 1. Create a new service 

- **Endpoint**: `POST /api/v1/resource-management/service/create`
- **Request Body**: `ServiceRequest` 
- **Response**: `ServiceResponse`
- **Params**: 
  - organisationId (required): UUID 
  - categorieId (required): UUID


### 2. Get All Services

- **Endpoint**: `GET /api/v1/resource-management/service`
- **Response**: `List<ServiceResponse>`
- **Params**: 
  - organisationId: UUID
  - categorieId: UUID

### 3. Get Service by ID

- **Endpoint**: `GET /api/v1/resource-management/service/{id}`
- **Response**: `ServiceResponse`
- **Path Variables**:
  - id (id of service) : UUID

### 4. Update Service

- **Endpoint**: `PUT /api/v1/resource-management/service/update/{id}`
- **Request Body**: `ServiceRequest`
- **Response**: `ServiceResponse`
- **Path Variables**:
  - id (id of service) : UUID

### 5. Delete Service

- **Endpoint**: `DELETE /api/v1/resource-management/service/delete/{id}`
- **Response**: `String`
- **Path Variables**:
  - id (id of service) : UUID

