# DTO Structures

## 1. VariationRequest

This DTO is used to represent the request payload for creating or updating a product variation.

### Fields:

- **productId** (UUID) – Unique identifier of the associated product.
- **key** (String) – The attribute name defining the variation (e.g., color, size).
- **value** (String) – The attribute value corresponding to the key.

### Example:

```json
{
  "productId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "key": "string",
  "value": "string"
}
```

## 2. VariationResponse

This DTO is used to represent the response payload for a product variation.

### Fields:

- **id** (UUID) – Unique identifier of the variation.
- **productId** (UUID) – Unique identifier of the associated product.
- **key** (String) – The attribute name defining the variation (e.g., color, size).
- **value** (String) – The attribute value corresponding to the key.

### Example:

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "productId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "key": "string",
  "value": "string"
}
```

