# DTO Structures

## 1. UnitRequest DTO

This DTO is used to define a unit of measurement for a product, specifying its pricing and whether fractional quantities are allowed.

### Fields:

- **productId** (UUID) – Unique identifier of the product associated with this unit.
- **name** (String) – Name of the unit (e.g., Kilogram, Liter, Box).
- **baseUnitPrice** (Decimal) – Price per unit.
- **isDecimal** (Boolean) – Indicates whether the unit supports decimal values (e.g., weight-based products like fruits or liquids).

### Example:

```json
{
  "productId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "Kilogram",
  "baseUnitPrice": 5.99,
  "isDecimal": true
}
```

## 2. UnitResponse

This DTO represents the response structure for a unit of measurement associated with a product.

### Fields:

- **id** (UUID) – Unique identifier of the unit.
- **productId** (UUID) – Unique identifier of the product associated with this unit.
- **name** (String) – Name of the unit (e.g., Kilogram, Liter, Box).
- **baseUnitPrice** (Decimal) – Price per unit.
- **isDecimal** (Boolean) – Indicates whether the unit supports decimal values (e.g., weight-based products like fruits or liquids).

### Example:

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "productId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "Kilogram",
  "baseUnitPrice": 5.99,
  "isDecimal": true
}
