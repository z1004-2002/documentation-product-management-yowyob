# Categorie Class Documentation

## Overview
The `Categorie` class represents a category in the resource management microservice. It implements the `CatalogueComponent` interface, allowing it to be part of a hierarchical catalog structure.

## Class Definition
```java
@Table("categories")
public class Categorie implements CatalogueComponent {
```
This class is mapped to the `categories` table in Cassandra.

## Fields
| Field Name       | Type              | Description |
|-----------------|------------------|-------------|
| `id`            | `UUID`            | Unique identifier of the category. |
| `name`          | `String`          | Name of the category. |
| `description`   | `String`          | Detailed description of the category. |
| `shortCode`     | `String`          | Short code identifier for the category. |
| `ownerId`       | `UUID`            | Identifier of the category's owner. |
| `imageIconId`   | `UUID`            | ID of the associated category icon image. |
| `parentId`      | `UUID`            | ID of the parent category (for hierarchical structure). |
| `createdAt`     | `LocalDateTime`    | Timestamp when the category was created. |
| `updatedAt`     | `LocalDateTime`    | Timestamp when the category was last updated. |
| `root`          | `Boolean`         | Indicates if this is a root category. |
| `etat`          | `EtatCatalogue`   | Status of the category. |

## Annotations
- `@Table("categories")` - Specifies that this class is mapped to the `categories` table in Cassandra.
- `@PrimaryKey` - Marks `id` as the primary key.
- `@Column("column_name")` - Maps each field to a corresponding column in the database.

## Lombok Annotations
- `@NoArgsConstructor` - Generates a no-argument constructor.
- `@AllArgsConstructor` - Generates an all-arguments constructor.
- `@Getter` / `@Setter` - Automatically generates getter and setter methods.
- `@Builder` - Enables the builder pattern for object creation.

## Usage Example
```java
Categorie categorie = Categorie.builder()
        .id(UUID.randomUUID())
        .name("Electronics")
        .description("Category for electronic products")
        .shortCode("ELEC")
        .createdAt(LocalDateTime.now())
        .updatedAt(LocalDateTime.now())
        .root(true)
        .etat(EtatCatalogue.ACTIVE)
        .build();
```

## Notes
- The `parentId` field allows for nested category structures.
- The `etat` field helps track the current state of a category.

This class is essential for organizing resources in a structured catalog format within the microservice.

