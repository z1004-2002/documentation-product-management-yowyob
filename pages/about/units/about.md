# Units Model Documentation

## Overview
The `Units` class represents different units of measurement for a product in the resource management microservice. It defines unit-specific pricing and measurement properties.

## Table Mapping
This class is mapped to the `units` table in a Cassandra database.

## Attributes

- **id (UUID)**: The unique identifier for the unit entry.
- **productId (UUID)**: The ID of the associated product.
- **name (String)**: The name of the unit (e.g., "Kilogram", "Liter", "Piece").
- **baseUnitPrice (BigDecimal)**: The price per unit of measurement.
- **isDecimal (Boolean)**: Indicates whether the unit can be fractional (e.g., weight-based units like kilograms) or only whole numbers (e.g., pieces).

## Usage
The `Units` model allows the system to manage various measurement units and their pricing, making it flexible for handling products sold in different formats.

## Example Usage
```java
Units unit = Units.builder()
    .id(UUID.randomUUID())
    .productId(UUID.randomUUID())
    .name("Kilogram")
    .baseUnitPrice(new BigDecimal("5.99"))
    .isDecimal(true)
    .build();
```