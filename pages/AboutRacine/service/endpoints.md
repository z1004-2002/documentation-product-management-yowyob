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

### 4. Update Agency

- **Endpoint**: `PUT /api/v1/resource-management/service/update/{id}`
- **Request Body**: `ServiceRequest`
- **Response**: `ServiceResponse`
- **Path Variables**:
  - id (id of service) : UUID

### 5. Delete Agency

- **Endpoint**: `DELETE /api/v1/resource-management/service/delete/{id}`
- **Response**: `String`
- **Path Variables**:
  - id (id of service) : UUID


## DTO Structures

### 1. ServiceRequest

This DTO is used when creating or updating an Service.

#### Fields:

- **organisationId**: UUID — ID of the organization associated with the agency.
- **shortName**: String — Short name of the agency.
- **longName**: String — Long name of the agency.
- **description**: String — Description of the agency.
- **isActive**: Boolean — Indicator if the agency is active.
- **agencyLocation**: String — Location of the agency.
- **transferable**: boolean — Indicator if the agency is transferable.
- **images**: Set<String> — Set of image URLs associated with the agency.
- **greetingMessage**: String — Greeting message for the agency.
- **registrationDate**: LocalDateTime — Date of registration.
- **averageRevenue**: BigDecimal — Average revenue of the agency.
- **capitalShare**: BigDecimal — Capital share of the agency.
- **registrationNumber**: String — Registration number of the agency.
- **socialNetwork**: String — Social network links.
- **taxNumber**: String — Tax number of the agency.

#### Example:

```json
{
  "productBrandId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "immatriculation": "string",
  "serialNumber": "string",
  "skuCode": "string",
  "barCode": "string",
  "qrCode": "string",
  "name": "string",
  "shortDescription": "string",
  "longDescription": "string",
  "storageCondition": "string",
  "modelId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "iotNumber": "string",
  "availableQuantity": 0,
  "productType": "TANGIBLE",
  "basePrice": 0,
  "accessibility": "PUBLIC",
  "organisationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "defaultAgencyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "packagingVente": "KG",
  "packagingAchat": "KG",
  "categorieId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "numberUsage": 0,
  "transferable": true,
  "state": "AVAILABLE",
  "maxReservation": 0,
  "isTangible": true,
  "expiresAt": "2025-02-20T11:03:57.775Z",
  "ressources": [{"ressourceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"}]
}
```

### 2. ServiceResponse

This DTO is used to return information about an Agency after creation or retrieval.

#### Fields:

    agencyId: UUID — Unique identifier for the agency.
    shortName: String — Short name of the agency.
    longName: String — Long name of the agency.
    isActive: Boolean — Indicator if the agency is active.
    description: String — Description of the agency.
    agencyLocation: String — Location of the agency.
    greetingMessage: String — Greeting message for the agency.
    registrationDate: LocalDateTime — Date of registration.
    averageRevenue: BigDecimal — Average revenue of the agency.
    capitalShare: BigDecimal — Capital share of the agency.
    registrationNumber: String — Registration number of the agency.
    socialNetwork: String — Social network links.
    taxNumber: String — Tax number of the agency.
    
#### Example:

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "immatriculation": "string",
  "serialNumber": "string",
  "skuCode": "string",
  "barCode": "string",
  "qrCode": "string",
  "name": "string",
  "shortDescription": "string",
  "longDescription": "string",
  "storageCondition": "string",
  "iotNumber": "string",
  "availableQuantity": 0,
  "productType": "TANGIBLE",
  "basePrice": 0,
  "accessibility": "PUBLIC",
  "organisationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "defaultAgencyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "packagingVente": "KG",
  "packagingAchat": "KG",
  "categorieId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "numberUsage": 0,
  "transferable": true,
  "state": "AVAILABLE",
  "maxReservation": 0,
  "isTangible": true,
  "createdAt": "2025-02-20T11:03:57.787Z",
  "updatedAt": "2025-02-20T11:03:57.787Z",
  "expiresAt": "2025-02-20T11:03:57.787Z",
  "model": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "createdByUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string",
    "description": "string"
  },
  "productBrand": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string",
    "description": "string",
    "brandCode": "string",
    "brandImageId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "createdByUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "notes": "string",
    "createdAt": "2025-02-20T11:03:57.787Z",
    "updatedAt": "2025-02-20T11:03:57.787Z"
  },
  "ressources": [{
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "skuCode": "string",
      "qrCode": "string",
      "name": "string",
      "shortDescription": "string",
      "longDescription": "string"
  }],
  "medias": [{
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "targetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "string",
      "realName": "string",
      "size": 0,
      "fileType": "string",
      "primary": true
    }]
}
```