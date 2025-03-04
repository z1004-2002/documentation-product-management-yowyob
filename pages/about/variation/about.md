# Variation Class Documentation

## Overview
The `Variation` class represents a product variation in the resource management microservice. It defines unique attributes that differentiate one product variation from another within the system.

## Table Mapping
The class is mapped to the `variations` table in Cassandra.

## Fields

| Field Name  | Type    | Column Name | Description |
|------------|--------|------------|-------------|
| `id` | `UUID` | `id` | Primary key of the variation. |
| `productId` | `UUID` | `product_id` | Identifier of the associated product. |
| `key` | `String` | `key` | Attribute name of the variation (e.g., size, color). |
| `value` | `String` | `value` | Attribute value of the variation (e.g., "Red", "Large"). |

## Lombok Annotations
- `@Getter` and `@Setter`: Automatically generate getter and setter methods.
- `@AllArgsConstructor`: Generates a constructor with all fields as parameters.
- `@NoArgsConstructor`: Generates a no-argument constructor.
- `@Builder`: Provides a builder pattern for object creation.

## Cassandra Annotations
- `@Table("variations")`: Specifies the table name in the Cassandra database.
- `@PrimaryKey`: Marks `id` as the primary key.
- `@Column("column_name")`: Maps fields to their respective column names in the database.

## Usage Example
```java
Variation variation = Variation.builder()
    .id(UUID.randomUUID())
    .productId(UUID.randomUUID())
    .key("Color")
    .value("Blue")
    .build();
```

This example creates a new `Variation` instance representing a blue-colored product variation.

