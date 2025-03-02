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

- serviceBrandId (UUID) – Unique identifier of the service brand.
- immatriculation (String) – service registration number.
- serialNumber (String) – Serial number of the service.
- skuCode (String) – SKU (Stock Keeping Unit) code used for inventory management.
- barCode (String) – Barcode of the service.
- qrCode (String) – QR code of the service.
- name (String) – Name of the service.
- shortDescription (String) – Short description of the service.
- longDescription (String) – Detailed description of the service.
- storageCondition (String) – Storage conditions for the service.
- modelId (UUID) – Unique identifier of the service model.
- iotNumber (String) – IoT (Internet of Things) number of the service, if applicable.
- availableQuantity (Integer) – Quantity of the service available in stock.
- serviceType (Enum) – Type of service, here "TANGIBLE" (physical service).
- basePrice (BigDecimal) – Base price of the service.
- accessibility (Enum) – Accessibility level of the service (e.g., PUBLIC, PRIVATE).
- organisationId (UUID) – Unique identifier of the organization associated with the service.
- defaultAgencyId (UUID) – Unique identifier of the default agency managing the service.
- packagingVente (String) – Unit of measurement for sales (e.g., KG, L, unit).
- packagingAchat (String) – Unit of measurement for purchase.
- categorieId (UUID) – Unique identifier of the service category.
- numberUsage (Integer) – Number of times the service has been used.
- transferable (Boolean) – Indicates whether the service can be transferred between agencies.
- state (Enum) – Current state of the service (e.g., AVAILABLE, UNAVAILABLE).
- maxReservation (Integer) – Maximum number of reservations allowed.
- isTangible (Boolean) – Indicates whether the service is tangible (physical) or not.
- expiresAt (LocalDateTime) – Expiration date of the service, if applicable.
- ressources (List) – List of resources associated with the service.
  - ressourceId (UUID) – Unique identifier of a resource linked to the service.

#### Example:

```json
{
  "serviceBrandId": "123e4567-e89b-12d3-a456-426614174000",
  "immatriculation": "SN-2024-001",
  "serialNumber": "A1B2C3D4E5F6",
  "skuCode": "SMARTPHONE-X1-BLACK",
  "barCode": "0123456789123",
  "qrCode": "https://example.com/service/SMARTPHONE-X1",
  "name": "Smartphone X1",
  "shortDescription": "5G smartphone with OLED display",
  "longDescription": "The Smartphone X1 features a 6.5-inch OLED display, an Octa-Core processor, and a 108 MP camera.",
  "storageCondition": "Store at room temperature, avoid humidity.",
  "modelId": "456e7890-e12b-34d5-c678-901234567890",
  "iotNumber": "IOT-987654321",
  "availableQuantity": 150,
  "serviceType": "TANGIBLE",
  "basePrice": 799.99,
  "accessibility": "PUBLIC",
  "organisationId": "789e1234-e56b-78d9-c012-345678901234",
  "defaultAgencyId": "567e9012-e34b-56d7-c890-123456789012",
  "packagingVente": "UNIT",
  "packagingAchat": "UNIT",
  "categorieId": "234e5678-e90b-12d3-c456-789012345678",
  "numberUsage": 0,
  "transferable": true,
  "state": "AVAILABLE",
  "maxReservation": 5,
  "isTangible": true,
  "expiresAt": "2026-12-31T23:59:59.000Z",
  "ressources": [
    {
      "ressourceId": "678e9012-e34b-56d7-c890-123456789012"
    }
  ]
}


```

### 2. ServiceResponse

This DTO is used to return information about an Agency after creation or retrieval.

#### Fields:

Main service Attributes
- id (UUID) – Unique identifier of the service.
- immatriculation (String) – service registration number.
- serialNumber (String) – Unique serial number assigned to the service.
- skuCode (String) – Stock Keeping Unit (SKU) code used for inventory tracking.
- barCode (String) – Barcode associated with the service.
- qrCode (String) – QR code for quick identification.
- name (String) – Name of the service.
- shortDescription (String) – Brief description of the service.
- longDescription (String) – Detailed description of the service.
- storageCondition (String) – Specifies how the service should be stored (e.g., temperature, humidity).
- iotNumber (String) – IoT number assigned if the service is IoT-enabled.
- availableQuantity (Integer) – Number of units available in stock.
- serviceType (Enum) – Defines if the service is "TANGIBLE" or "INTANGIBLE".
- basePrice (BigDecimal) – Base price of the service.
- accessibility (Enum) – Defines who can access the service (e.g., PUBLIC, PRIVATE).
- organisationId (UUID) – ID of the organization managing the service.
- defaultAgencyId (UUID) – ID of the default agency managing the service.
- packagingVente (String) – Unit of measurement for sales (e.g., KG, L, UNIT).
- packagingAchat (String) – Unit of measurement for purchase.
- categorieId (UUID) – ID of the service category.
- numberUsage (Integer) – Number of times the service has been used.
- transferable (Boolean) – Indicates whether the service can be transferred between agencies.
- state (Enum) – Status of the service (e.g., AVAILABLE, OUT_OF_STOCK).
- maxReservation (Integer) – Maximum number of reservations allowed.
- isTangible (Boolean) – Indicates whether the service is physical or not.
- Timestamps
- createdAt (LocalDateTime) – Date and time when the service was created.
- updatedAt (LocalDateTime) – Date and time when the service was last updated.
- expiresAt (LocalDateTime) – Expiration date of the service, if applicable.
##### Model Information
- model (Object) – Represents the service model.
  -  id (UUID) – ID of the model.
  -  createdByUserId (UUID) – ID of the user who created the model.
  -  name (String) – Name of the model.
  -  description (String) – Description of the model.
##### service Brand Information
- serviceBrand (Object) – Represents the service brand.
  - id (UUID) – ID of the brand.
  - name (String) – Name of the brand.
  - description (String) – Description of the brand.
  - brandCode (String) – Unique brand code.
  - brandImageId (UUID) – ID of the brand's image.
  - createdByUserId (UUID) – ID of the user who created the brand.
  - notes (String) – Additional notes about the brand.
  - createdAt (LocalDateTime) – Timestamp when the brand was created.
  - updatedAt (LocalDateTime) – Timestamp when the brand was last updated.
##### Associated Resources
- ressources (Array) – List of resources associated with the service.
  - id (UUID) – Unique identifier of the resource.
  - skuCode (String) – SKU code of the resource.
  - qrCode (String) – QR code of the resource.
  - name (String) – Name of the resource.
  - shortDescription (String) – Short description of the resource.
  - longDescription (String) – Detailed description of the resource.
##### Media Files
- medias (Array) – List of media files associated with the service.
  - id (UUID) – Unique identifier of the media file.
  - targetId (UUID) – ID of the entity the media file is related to.
  - name (String) – Name of the media file.
  - realName (String) – Original name of the file.
  - size (Integer) – Size of the file in bytes.
  - fileType (String) – Type of file (e.g., image, video, document).
  - primary (Boolean) – Indicates if this media is the primary image or file for the service.
    
#### Example:

```json
{
  "id": "a1b2c3d4-e5f6-7890-ab12-cd34ef567890",
  "immatriculation": "LAPTOP-2024-001",
  "serialNumber": "SN123456789",
  "skuCode": "LAPTOP-GAMING-X100",
  "barCode": "0123456789012",
  "qrCode": "https://example.com/service/LAPTOP-GAMING-X100",
  "name": "Gaming Laptop X100",
  "shortDescription": "High-performance gaming laptop",
  "longDescription": "The Gaming Laptop X100 features an Intel i9 processor, RTX 4090 graphics, and a 17-inch 4K display.",
  "storageCondition": "Store in a dry place, avoid direct sunlight.",
  "iotNumber": "IOT-987654321",
  "availableQuantity": 50,
  "serviceType": "TANGIBLE",
  "basePrice": 1999.99,
  "accessibility": "PUBLIC",
  "organisationId": "123e4567-e89b-12d3-a456-426614174000",
  "defaultAgencyId": "456e7890-e12b-34d5-c678-901234567890",
  "packagingVente": "UNIT",
  "packagingAchat": "UNIT",
  "categorieId": "567e9012-e34b-56d7-c890-123456789012",
  "numberUsage": 0,
  "transferable": true,
  "state": "AVAILABLE",
  "maxReservation": 10,
  "isTangible": true,
  "createdAt": "2025-02-20T11:03:57.787Z",
  "updatedAt": "2025-02-20T11:03:57.787Z",
  "expiresAt": "2027-12-31T23:59:59.000Z",
  "model": {
    "id": "789e1234-e56b-78d9-c012-345678901234",
    "createdByUserId": "678e9012-e34b-56d7-c890-123456789012",
    "name": "Gaming Model X",
    "description": "Designed for high-performance gaming."
  },
  "serviceBrand": {
    "id": "345e6789-e12b-34d5-c678-901234567890",
    "name": "HyperTech",
    "description": "Leading brand in gaming technology.",
    "brandCode": "HTG",
    "brandImageId": "901e2345-e12b-34d5-c678-567890123456",
    "createdByUserId": "567e9012-e34b-56d7-c890-123456789012",
    "notes": "High-end gaming brand",
    "createdAt": "2025-02-20T11:03:57.787Z",
    "updatedAt": "2025-02-20T11:03:57.787Z"
  },
  "ressources": [
    {
      "id": "678e9012-e34b-56d7-c890-123456789012",
      "skuCode": "LAPTOP-BAG-X100",
      "qrCode": "https://example.com/service/LAPTOP-BAG-X100",
      "name": "Laptop Bag X100",
      "shortDescription": "Durable laptop carrying bag",
      "longDescription": "Premium waterproof laptop bag designed for the Gaming Laptop X100."
    }
  ],
  "medias": [
    {
      "id": "901e2345-e12b-34d5-c678-567890123456",
      "targetId": "a1b2c3d4-e5f6-7890-ab12-cd34ef567890",
      "name": "laptop_image.jpg",
      "realName": "gaming_laptop_x100.jpg",
      "size": 512000,
      "fileType": "image/jpeg",
      "primary": true
    }
  ]
}

```