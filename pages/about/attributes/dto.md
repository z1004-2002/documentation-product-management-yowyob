# DTO Structures

## 1. AttributRequest DTO

This DTO is used to define the attributes of a product, service, or other entity, including their name and description.

### Fields:

- **name** (String) – Name of the attribute (e.g., Color, Size, Material).
- **description** (String) – A detailed description of the attribute (e.g., Red color, Large size).

### Example:

```json
{
  "name": "Color",
  "description": "The color of the product, available in red, blue, and green."
}
```

## 2. AttributResponse DTO

This DTO represents the response structure for an attribute of a product, service, or other entity, including its ID, name, and description.

### Fields:

- **id** (UUID) – Unique identifier of the attribute.
- **name** (String) – Name of the attribute (e.g., Color, Size, Material).
- **description** (String) – A detailed description of the attribute (e.g., Red color, Large size).

### Example:

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "Color",
  "description": "The color of the product, available in red, blue, and green."
}
``` 

## 3. AttributValueResponse DTO

This DTO represents the response structure for an attribute value associated with a product, including the attribute's details and its value.

### Fields:

- **id** (UUID) – Unique identifier of the attribute value.
- **productId** (UUID) – Unique identifier of the product associated with this attribute value.
- **attribut** (Object) – The attribute associated with the product. This includes:
  - **id** (UUID) – Unique identifier of the attribute.
  - **name** (String) – Name of the attribute (e.g., Color, Size, Material).
  - **description** (String) – A detailed description of the attribute (e.g., Red color, Large size).
- **value** (String) – The value of the attribute for the specific product (e.g., "Red", "Large", "Plastic").

### Example:

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "productId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "attribut": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "Color",
    "description": "The color of the product, available in red, blue, and green."
  },
  "value": "Red"
}
```