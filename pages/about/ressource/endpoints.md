# Endpoints

## List of End Points

### 1. Create a new ressource

- **Endpoint**: `POST /api/v1/resource-management/ressource/create`
- **Request Body**: `RessourceRequest`
- **Response**: `RessourceResponse`
- **Params**:
  - organisationId (required): UUID
  - categorieId (required): UUID

### 2. Get All Ressources

- **Endpoint**: `GET /api/v1/resource-management/ressource`
- **Response**: `List<RessourceResponse>`
- **Params**:
  - organisationId: UUID
  - categorieId: UUID

### 3. Get ressource by ID

- **Endpoint**: `GET /api/v1/resource-management/ressource/{id}`
- **Response**: `RessourceResponse`
- **Path Variables**:
  - id (id of ressource) : UUID

### 4. Update ressource

- **Endpoint**: `PUT /api/v1/resource-management/ressource/update/{id}`
- **Request Body**: `RessourceRequest`
- **Response**: `RessourceResponse`
- **Path Variables**:
  - id (id of ressource) : UUID

### 5. Delete ressource

- **Endpoint**: `DELETE /api/v1/resource-management/ressource/delete/{id}`
- **Response**: `String`
- **Path Variables**:
  - id (id of ressource) : UUID

