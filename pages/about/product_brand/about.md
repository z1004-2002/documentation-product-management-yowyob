# ProductBrand Class Documentation

## Overview
The `ProductBrand` class represents a brand of products within the resource management microservice. It stores information about the brand, including its name, description, brand code, and associated metadata.

## Class Definition
```java
public class ProductBrand {
    private UUID id;
    private String name;
    private String description;
    private String brandCode;
    private UUID brandImageId;
    private UUID createdByUserId;
    private String notes;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
```

## Attributes

| Attribute            | Type            | Description |
|----------------------|----------------|-------------|
| `id`                | `UUID`          | Unique identifier for the product brand. |
| `name`              | `String`        | The name of the brand. |
| `description`       | `String`        | A short description of the brand. |
| `brandCode`         | `String`        | A unique code associated with the brand. |
| `brandImageId`      | `UUID`          | Identifier for the brand image. |
| `createdByUserId`   | `UUID`          | The user ID who created this brand. |
| `notes`             | `String`        | Additional notes about the brand. |
| `createdAt`         | `LocalDateTime` | Timestamp when the brand was created. |
| `updatedAt`         | `LocalDateTime` | Timestamp when the brand was last updated. |

## Annotations
- `@Table("product_brand")` – Specifies the Cassandra table name where product brands are stored.
- `@PrimaryKey` – Marks the `id` field as the primary key.
- `@Column("...")` – Maps the class fields to Cassandra table columns.

## Usage
The `ProductBrand` class is used to manage product brand information within the system, ensuring consistency and providing metadata for product categorization and identification.

