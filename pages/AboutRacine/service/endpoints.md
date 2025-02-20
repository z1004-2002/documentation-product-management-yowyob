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

### 1. Ser

This DTO is used when creating or updating an Agency.

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
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "shortName": "Quick Services",
  "longName": "Quick Services Agency",
  "description": "A brief description of the agency.",
  "isActive": true,
  "agencyLocation": "123 Main St, City, Country",
  "transferable": false,
  "images": ["http://example.com/image1.jpg", "http://example.com/image2.jpg"],
  "greetingMessage": "Welcome to Quick Services!",
  "registrationDate": "2023-01-01T00:00:00",
  "averageRevenue": 100000.00,
  "capitalShare": 50000.00,
  "registrationNumber": "REG123456",
  "socialNetwork": "http://facebook.com/quickservices",
  "taxNumber": "TAX123456"
}
```

2. AgenceResponse

This DTO is used to return information about an Agency after creation or retrieval.
```Fields:

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
```
Example:
```json

{
  "agencyId": "a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1",
  "shortName": "Quick Services",
  "longName": "Quick Services Agency",
  "isActive": true,
  "description": "A brief description of the agency.",
  "agencyLocation": "123 Main St, City, Country",
  "greetingMessage": "Welcome to Quick Services!",
  "registrationDate": "2023-01-01T00:00:00",
  "averageRevenue": 100000.00,
  "capitalShare": 50000.00,
  "registrationNumber": "REG123456",
  "socialNetwork": "http://facebook.com/quickservices",
  "taxNumber": "TAX123456"
}
```