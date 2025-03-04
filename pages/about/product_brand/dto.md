# DTO Structures

## 1. ProductBrandRequest

This DTO is used to represent the request payload for creating or updating a product brand.

### Fields:

- **name** (String) – The name of the product brand.
- **description** (String) – A brief description of the product brand.
- **brandCode** (String) – A unique identifier code for the product brand.
- **brandImageId** (UUID) – Unique identifier of the brand's image.
- **createdByUserId** (UUID) – Unique identifier of the user who created the brand.
- **notes** (String) – Additional notes about the product brand.

### Example:

```json
{
  "name": "string",
  "description": "string",
  "brandCode": "string",
  "brandImageId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "createdByUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "notes": "string"
}
```