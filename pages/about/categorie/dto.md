# DTO Structures

## 1. CategorieRequest

This DTO is used to represent the request payload for creating or updating a product category.

### Fields:

- **name** (String) – The name of the category.
- **description** (String) – A detailed description of the category.
- **ownerId** (UUID) – Unique identifier of the owner of the category.
- **imageIconId** (UUID) – Unique identifier of the category's icon image.
- **parentId** (UUID) – Unique identifier of the parent category, if applicable.
- **shortCode** (String) – A short code used to identify the category.
- **etat** (Enum) – The status of the category (e.g., AVAILABLE).

###  Example:

```json
{
  "name": "string",
  "description": "string",
  "ownerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "imageIconId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "parentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "shortCode": "string",
  "etat": "AVAILABLE"
}
```

## 2. CategorieResponse

This DTO is used to represent the response payload for a product category.

### Fields:

- **id** (UUID) – Unique identifier of the category.
- **name** (String) – The name of the category.
- **description** (String) – A detailed description of the category.
- **shortCode** (String) – A short code used to identify the category.
- **imageIcon** (Object) – The icon image associated with the category.
  - **id** (UUID) – Unique identifier of the image.
  - **targetId** (UUID) – Unique identifier of the target associated with the image.
  - **name** (String) – Name of the image.
  - **realName** (String) – Original name of the image.
  - **size** (Integer) – Size of the image file in bytes.
  - **fileType** (String) – Type of the image file.
  - **primary** (Boolean) – Indicates if this is the primary image.
- **createdAt** (LocalDateTime) – Timestamp when the category was created.
- **updatedAt** (LocalDateTime) – Timestamp when the category was last updated.
- **etat** (Enum) – The status of the category (e.g., AVAILABLE).
- **sousCategorie** (List) – List of subcategories under this category.

### Example:

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "string",
  "description": "string",
  "shortCode": "string",
  "imageIcon": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "targetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string",
    "realName": "string",
    "size": 0,
    "fileType": "string",
    "primary": true
  },
  "createdAt": "2025-03-04T11:52:34.507Z",
  "updatedAt": "2025-03-04T11:52:34.507Z",
  "etat": "AVAILABLE",
  "sousCategorie": [
    "string"
  ]
}
```
