# ProductPost Class

## Overview
The `ProductPost` class represents a product listing that a merchant can post in the resource management system. It includes information such as pricing, availability, categorization, and status.

## Attributes

| Attribute                        | Type             | Description |
|----------------------------------|-----------------|-------------|
| `id`                             | `UUID`          | Unique identifier of the product post. |
| `marchandId`                     | `UUID`          | ID of the merchant posting the product. |
| `variationId`                    | `UUID`          | ID of the product variation. |
| `productId`                      | `UUID`          | ID of the associated product. |
| `categorieId`                    | `UUID`          | ID of the product category. |
| `name`                           | `String`        | Name of the product. |
| `longDescription`                | `String`        | Detailed description of the product. |
| `shortDescription`               | `String`        | Short description of the product. |
| `saleUnit`                        | `PackagingType` | The unit in which the product is sold. |
| `basePrice`                      | `BigDecimal`    | Base price of the product. |
| `weight`                         | `BigDecimal`    | Weight of the product. |
| `defaultCurrency`                | `String`        | Default currency for the product pricing. |
| `nextAvailableTime`              | `LocalDateTime` | The next time the product will be available. |
| `lifespan`                       | `Integer`       | Lifespan of the product in days. |
| `quantity`                       | `Integer`       | Available quantity of the product. |
| `status`                         | `StatusPost`    | Current status of the product post. |
| `createdAt`                      | `LocalDateTime` | Timestamp of when the product post was created. |
| `updatedAt`                      | `LocalDateTime` | Timestamp of the last update to the product post. |
| `expiresAt`                      | `LocalDateTime` | Expiration date of the product post. |
| `productBrandId`                 | `UUID`          | ID of the product's brand. |
| `immatriculation`                | `String`        | Registration or unique identifier for the product. |
| `modelId`                        | `UUID`          | ID of the product model. |
| `organisationId`                 | `UUID`          | ID of the organization that owns the product. |
| `defaultAgencyId`                | `UUID`          | ID of the default agency handling the product. |
| `defaultPrice`                   | `BigDecimal`    | Default price for the product. |
| `alertQuantity`                  | `int`           | Minimum quantity before triggering a stock alert. |
| `taxExemptForComTransactions`    | `boolean`       | Whether the product is tax-exempt for commercial transactions. |

## Notes
- This entity is mapped to the `product_post` table in Cassandra.
- The `status` field defines whether the product post is active, pending, or archived.
- The `taxExemptForComTransactions` field helps in financial calculations based on tax applicability.

---
This documentation serves as a reference for developers working with the `ProductPost` class in the resource management microservice.

