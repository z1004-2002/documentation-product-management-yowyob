# Attribut and AttributValue Model Documentation

## Overview
The `Attribut` and `AttributValue` classes define a flexible attribute system for products in the resource management microservice. Attributes allow products to have custom properties, such as color, size, or material.

## Table Mapping
- `Attribut` is mapped to the `attributs` table in Cassandra.
- `AttributValue` is mapped to the `attribut_values` table in Cassandra.

## Attribut Model

### Attributes
- **id (UUID)**: The unique identifier for the attribute.
- **name (String)**: The name of the attribute (e.g., "Color", "Size").
- **description (String)**: A description of what the attribute represents.

### Example Usage
```java
Attribut colorAttribute = Attribut.builder()
    .id(UUID.randomUUID())
    .name("Color")
    .description("Defines the product's color")
    .build();
```

---

## AttributValue Model

### Attributes
- **id (UUID)**: The unique identifier for the attribute value.
- **productId (UUID)**: The ID of the associated product.
- **attributId (UUID)**: The ID of the related attribute.
- **value (String)**: The value of the attribute for the product (e.g., "Red", "Large").

### Example Usage
```java
AttributValue colorValue = AttributValue.builder()
    .id(UUID.randomUUID())
    .productId(UUID.randomUUID())
    .attributId(colorAttribute.getId())
    .value("Red")
    .build();
```

---

## Usage
These models allow the system to handle dynamic product attributes efficiently. The `Attribut` model defines reusable attributes, while the `AttributValue` model links specific attribute values to products.

## Conclusion
The `Attribut` and `AttributValue` models enhance product flexibility, enabling the definition of custom product properties in the resource management system.

