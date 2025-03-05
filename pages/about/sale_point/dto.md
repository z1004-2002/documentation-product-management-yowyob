# DTO Structures

## 1. SalePointRequest

This DTO is used when creating or updating a sale point associated with a product variation.

### Fields:

- **variationId** (UUID) – Unique identifier of the product variation.
- **agencyId** (UUID) – Unique identifier of the agency managing the sale point.
- **notes** (String) – Additional notes or details related to the sale point.

### Example:

```json
{
  "variationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "agencyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "notes": "string"
}
```

## 2. SalePointResponse DTO

This DTO is used to represent the sale point information associated with a product variation.

### Fields:

- **id** (UUID) – Unique identifier of the sale point.
- **variationId** (UUID) – Unique identifier of the product variation.
- **agencyId** (UUID) – Unique identifier of the agency managing the sale point.
- **notes** (String) – Additional notes or details related to the sale point.

### Example:

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "variationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "agencyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "notes": "Sale point is located in Agency A, available for retail sales."
}
