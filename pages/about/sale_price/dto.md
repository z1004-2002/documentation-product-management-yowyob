# DTO Structures

## 1. SalePriceRequest

This DTO is used to define the sale price of a product, specifying pricing details, quantity constraints, and other relevant information.

### Fields:

- **productPostId** (UUID) – Unique identifier of the product post.
- **salePriceType** (Enum) – Type of sale price (e.g., RETAIL, WHOLESALE).
- **minQuantity** (Integer) – Minimum quantity required for this pricing.
- **maxQuantity** (Integer) – Maximum quantity allowed for this pricing.
- **value** (BigDecimal) – Price value.
- **maxReduction** (BigDecimal) – Maximum discount allowed.
- **currency** (String) – Currency used for the pricing.
- **isNegociable** (Boolean) – Indicates whether the price is negotiable.
- **validityDate** (LocalDateTime) – Expiration date of this pricing.
- **notes** (String) – Additional notes related to the price.

### Example:

```json
{
  "productPostId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "salePriceType": "RETAIL",
  "minQuantity": 0,
  "maxQuantity": 0,
  "value": 0,
  "maxReduction": 0,
  "currency": "string",
  "isNegociable": true,
  "validityDate": "2025-03-05T07:37:45.738Z",
  "notes": "string"
}
```

## 2. SalePriceResponse

This DTO is used to represent the sale price details of a product.

### Fields:

- **id** (UUID) – Unique identifier of the sale price entry.
- **productPostId** (UUID) – Unique identifier of the associated product post.
- **salePriceType** (String) – Type of the sale price (e.g., RETAIL, WHOLESALE).
- **minQuantity** (Integer) – Minimum quantity required for the sale price.
- **maxQuantity** (Integer) – Maximum quantity allowed for the sale price.
- **value** (BigDecimal) – Sale price value.
- **maxReduction** (BigDecimal) – Maximum allowed reduction for the sale price.
- **currency** (String) – Currency of the sale price (e.g., USD, EUR).
- **isNegociable** (Boolean) – Indicates if the sale price is negotiable.
- **validityDate** (LocalDateTime) – Date and time when the sale price becomes valid.
- **notes** (String) – Additional notes related to the sale price.

### Example:

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "productPostId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "salePriceType": "RETAIL",
  "minQuantity": 0,
  "maxQuantity": 0,
  "value": 0,
  "maxReduction": 0,
  "currency": "string",
  "isNegociable": true,
  "validityDate": "2025-03-05T07:37:45.740Z",
  "notes": "string"
}
