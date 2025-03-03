# DTO Structures

## 1. ProductPostRequest

This DTO is used when creating or updating a Product.

### Fields:

- **marchandId** (UUID) – Unique identifier of the merchant.
- **variationId** (UUID) – Unique identifier of the product variation.
- **name** (String) – Name of the product.
- **categorieId** (UUID) – Unique identifier of the product category.
- **saleUnit** (String) – Unit of measurement for sale (e.g., KG, L, unit).
- **basePrice** (BigDecimal) – Base price of the product.
- **weight** (BigDecimal) – Weight of the product.
- **defaultCurrency** (String) – The default currency for the product price (e.g., USD, EUR).
- **nextAvailableTime** (LocalDateTime) – Time when the product will be available next.
- **longDescription** (String) – Detailed description of the product.
- **shortDescription** (String) – Short description of the product.
- **lifespan** (Integer) – Lifespan of the product in days.
- **quantity** (Integer) – Quantity of the product available in stock.
- **status** (Enum) – Current status of the product (e.g., AVAILABLE, UNAVAILABLE).
- **productBrandId** (UUID) – Unique identifier of the product brand.
- **immatriculation** (String) – Product registration number.
- **modelId** (UUID) – Unique identifier of the product model.
- **organisationId** (UUID) – Unique identifier of the organization associated with the product.
- **defaultAgencyId** (UUID) – Unique identifier of the default agency managing the product.
- **defaultPrice** (BigDecimal) – Default price of the product.
- **alertQuantity** (Integer) – Minimum stock quantity to trigger an alert.
- **taxExemptForComTransactions** (Boolean) – Indicates whether the product is tax-exempt for commercial transactions.
- **expiresAt** (LocalDateTime) – Expiration date of the product, if applicable.

### Example:

```json
{
  "marchandId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "variationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "string",
  "categorieId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "saleUnit": "KG",
  "basePrice": 0,
  "weight": 0,
  "defaultCurrency": "string",
  "nextAvailableTime": "2025-03-03T12:31:01.704Z",
  "longDescription": "string",
  "shortDescription": "string",
  "lifespan": 0,
  "quantity": 0,
  "status": "AVAILABLE",
  "productBrandId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "immatriculation": "string",
  "modelId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "organisationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "defaultAgencyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "defaultPrice": 0,
  "alertQuantity": 0,
  "taxExemptForComTransactions": true,
  "expiresAt": "2025-03-03T12:31:01.704Z"
}


```

## 2. ProductPostResponse

This DTO is used to represent the response after creating or updating a product.

### Fields:

- **id** (UUID) – Unique identifier of the product.
- **marchandId** (UUID) – Unique identifier of the merchant.
- **variationId** (UUID) – Unique identifier of the product variation.
- **name** (String) – Name of the product.
- **longDescription** (String) – Detailed description of the product.
- **shortDescription** (String) – Short description of the product.
- **categorieId** (UUID) – Unique identifier of the product category.
- **saleUnit** (String) – Unit of measurement for sale (e.g., KG, L, unit).
- **basePrice** (BigDecimal) – Base price of the product.
- **weight** (BigDecimal) – Weight of the product.
- **defaultCurrency** (String) – The default currency for the product price (e.g., USD, EUR).
- **nextAvailableTime** (LocalDateTime) – Time when the product will be available next.
- **lifespan** (Integer) – Lifespan of the product in days.
- **quantity** (Integer) – Quantity of the product available in stock.
- **status** (Enum) – Current status of the product (e.g., AVAILABLE, UNAVAILABLE).
- **immatriculation** (String) – Product registration number.
- **organisationId** (UUID) – Unique identifier of the organization associated with the product.
- **defaultAgencyId** (UUID) – Unique identifier of the default agency managing the product.
- **defaultPrice** (BigDecimal) – Default price of the product.
- **alertQuantity** (Integer) – Minimum stock quantity to trigger an alert.
- **taxExemptForComTransactions** (Boolean) – Indicates whether the product is tax-exempt for commercial transactions.
- **createdAt** (LocalDateTime) – Date and time when the product was created.
- **updatedAt** (LocalDateTime) – Date and time when the product was last updated.
- **expiresAt** (LocalDateTime) – Expiration date of the product, if applicable.

#### productBrand
- **id** (UUID) – Unique identifier of the product brand.
- **name** (String) – Name of the product brand.
- **description** (String) – Description of the product brand.
- **brandCode** (String) – Code for the product brand.
- **brandImageId** (UUID) – Unique identifier for the brand image.
- **createdByUserId** (UUID) – Unique identifier of the user who created the brand.
- **notes** (String) – Notes associated with the product brand.
- **createdAt** (LocalDateTime) – Date and time when the product brand was created.
- **updatedAt** (LocalDateTime) – Date and time when the product brand was last updated.

#### model
- **id** (UUID) – Unique identifier of the product model.
- **createdByUserId** (UUID) – Unique identifier of the user who created the model.
- **name** (String) – Name of the product model.
- **description** (String) – Description of the product model.

#### medias
- **id** (UUID) – Unique identifier of the media.
- **targetId** (UUID) – Unique identifier of the product associated with the media.
- **name** (String) – Name of the media file.
- **realName** (String) – Actual name of the media file.
- **size** (Integer) – Size of the media file.
- **fileType** (String) – Type of the media file (e.g., image, video).
- **primary** (Boolean) – Indicates whether the media is the primary image for the product.

### Example:

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "marchandId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "variationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "string",
  "longDescription": "string",
  "shortDescription": "string",
  "categorieId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "saleUnit": "KG",
  "basePrice": 0,
  "weight": 0,
  "defaultCurrency": "string",
  "nextAvailableTime": "2025-03-03T12:31:01.705Z",
  "lifespan": 0,
  "quantity": 0,
  "status": "AVAILABLE",
  "immatriculation": "string",
  "organisationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "defaultAgencyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "defaultPrice": 0,
  "alertQuantity": 0,
  "taxExemptForComTransactions": true,
  "createdAt": "2025-03-03T12:31:01.705Z",
  "updatedAt": "2025-03-03T12:31:01.705Z",
  "expiresAt": "2025-03-03T12:31:01.705Z",
  "productBrand": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string",
    "description": "string",
    "brandCode": "string",
    "brandImageId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "createdByUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "notes": "string",
    "createdAt": "2025-03-03T12:31:01.705Z",
    "updatedAt": "2025-03-03T12:31:01.705Z"
  },
  "model": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "createdByUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string",
    "description": "string"
  },
  "medias": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "targetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "string",
      "realName": "string",
      "size": 0,
      "fileType": "string",
      "primary": true
    }
  ]
}
```