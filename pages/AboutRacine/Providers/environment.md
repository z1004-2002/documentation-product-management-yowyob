# Endpoints

### 1. Create Supplier

- **Endpoint**: `POST /api/v1/supplier/create`
- **Request Body**: `ProviderRequest`
- **Response**: `ProviderResponse`

### 2. Get All Suppliers

- **Endpoint**: `GET /api/v1/supplier`
- **Response**: `List<ProviderResponse>`

### 3. Get Supplier by ID

- **Endpoint**: `GET /api/v1/supplier/{id}`
- **Response**: `ProviderResponse`

### 4. Update Supplier

- **Endpoint**: `PUT /api/v1/supplier/update/{id}`
- **Request Body**: `ProviderRequest`
- **Response**: `ProviderResponse`

### 5. Delete Supplier

- **Endpoint**: `DELETE /api/v1/supplier/delete/{id}`
- **Response**: `String`

### 6. Create Resource for Supplier

- **Endpoint**: `POST /api/v1/supplier/{supplierId}/resources`
- **Request Body**: `ProductResourceRequest`
- **Response**: `ResponseEntity<String>`

### 7. Remove Resource for Supplier

- **Endpoint**: `DELETE /api/v1/supplier/{supplierId}/resources/{resourceId}`
- **Response**: `ResponseEntity<String>`

### 8. Create Service for Supplier

- **Endpoint**: `POST /api/v1/supplier/{supplierId}/services`
- **Request Body**: `ProductServiceRequest`
- **Response**: `ResponseEntity<String>`

### 9. Remove Service for Supplier

- **Endpoint**: `DELETE /api/v1/supplier/{supplierId}/services/{serviceId}`
- **Response**: `ResponseEntity<String>`

## DTO Structures

### ProviderRequest

This DTO is used when creating or updating a supplier.

#### Fields:

- **serviceList**: List<ProductService> — List of services supplied by the supplier.
- **resourceList**: List<ProductResource> — List of resources supplied by the supplier.
- **organisationId**: UUID — ID of the associated organization.
- **agencyId**: UUID — ID of the associated agency.
- **name**: String — Name of the supplier.
- **contactInfo**: String — Contact information for the supplier.
- **address**: String — Address of the supplier.
- **isActive**: boolean — Status indicating if the supplier is active.
- **productServiceType**: String — Type of products or services offered.
- **createdAt**: LocalDateTime — Timestamp of creation.
- **updatedAt**: LocalDateTime — Timestamp of the last update.
- **expiredAt**: LocalDateTime — Expiration timestamp.

#### Example:

```json
{
  "serviceList": [],
  "resourceList": [],
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "agencyId": "e3e3e3e3-e3e3-4e3e-e3e3-e3e3e3e3e3e",
  "name": "ABC Supplies",
  "contactInfo": "contact@abcsupplies.com",
  "address": "123 Supply St, City, Country",
  "isActive": true,
  "productServiceType": "Office Supplies",
  "createdAt": "2023-01-01T00:00:00",
  "updatedAt": "2023-01-01T00:00:00",
  "expiredAt": "2024-01-01T00:00:00"
}

ProviderResponse

This DTO is used to return information about a supplier after creation or retrieval.
Fields:

    id: UUID — Unique identifier for the supplier.
    serviceList: List<ProductService> — List of services supplied by the supplier.
    resourceList: List<ProductResource> — List of resources supplied by the supplier.
    organisationId: UUID — ID of the associated organization.
    agencyId: UUID — ID of the associated agency.
    name: String — Name of the supplier.
    contactInfo: String — Contact information for the supplier.
    address: String — Address of the supplier.
    isActive: boolean — Status indicating if the supplier is active.
    productServiceType: String — Type of products or services offered.
    createdAt: LocalDateTime — Timestamp of creation.
    updatedAt: LocalDateTime — Timestamp of the last update.
    expiredAt: LocalDateTime — Expiration timestamp.

Example:
json

{
  "id": "a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1",
  "serviceList": [],
  "resourceList": [],
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "agencyId": "e3e3e3e3-e3e3-4e3e-e3e3-e3e3e3e3e3e",
  "name": "ABC Supplies",
  "contactInfo": "contact@abcsupplies.com",
  "address": "123 Supply St, City, Country",
  "isActive": true,
  "productServiceType": "Office Supplies",
  "createdAt": "2023-01-01T00:00:00",
  "updatedAt": "2023-01-01T00:00:00",
  "expiredAt": "2024-01-01T00:00:00"
}

Conclusion

This document outlines the necessary endpoints and DTOs for managing suppliers within the application. Ensure that your requests and responses adhere to these structures for proper functionality.


### Key Features:
- **Overview**: Provides context about the supplier management system.
- **Endpoints**: Clearly defined endpoints for managing suppliers and their resources/services.
- **DTO Structures**: Details the `ProviderRequest` and `ProviderResponse` with examples to clarify the expected data format.

