# Ressource

## Overview
The `Ressource` class represents a resource entity in the Yowyob resource management microservice. It implements the `Product` interface and is annotated as a Cassandra table.

## Package
```java
package com.yowyob.resource_management.domain.model;
```

## Imports
The class imports necessary libraries for UUID handling, date-time management, and mapping annotations from Spring Data Cassandra. It also includes various enumerations representing product attributes.

## Class Definition
```java
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Builder
@Table("ressources")
public class Ressource implements Product {
```
The class is annotated with Lombok annotations for automatic generation of getters, setters, constructors, and builder methods. The `@Table("ressources")` annotation defines the Cassandra table name.

## Attributes
The `Ressource` class contains multiple attributes representing product details, categorized as follows:

### Identifiers
- `UUID id`: Primary key of the resource.
- `UUID productBrandId`: Identifier of the product's brand.
- `UUID modelId`: Identifier of the product's model.
- `UUID organisationId`: Identifier of the owning organization.
- `UUID defaultAgencyId`: Identifier of the default agency managing the resource.
- `UUID parentId`: Identifier of a parent resource (if applicable).

### Descriptions
- `String name`: Name of the resource.
- `String shortDescription`: Short description.
- `String longDescription`: Detailed description.

### Codes & Identification
- `String immatriculation`: Registration number.
- `String serialNumber`: Serial number.
- `String skuCode`: Stock Keeping Unit (SKU) code.
- `String barCode`: Barcode.
- `String qrCode`: QR code.
- `String iotNumber`: IoT device number (if applicable).

### Availability & Pricing
- `Integer availableQuantity`: Quantity available.
- `BigDecimal basePrice`: Base price of the resource.
- `Integer maxReservation`: Maximum number of reservations allowed.

### Classification & Attributes
- `ProductType productType`: Type of product (enum).
- `Accessibility accessibility`: Accessibility status (enum).
- `PackagingType packagingVente`: Packaging type for sales (enum).
- `PackagingType packagingAchat`: Packaging type for purchases (enum).
- `ProductState state`: Current state of the product (enum).
- `Boolean isTangible`: Indicates if the resource is a tangible asset.
- `Boolean transferable`: Indicates if the resource is transferable.
- `Integer numberUsage`: Number of times the resource can be used.

### Storage & Expiration
- `String storageCondition`: Storage conditions required.
- `LocalDateTime createdAt`: Timestamp of creation.
- `LocalDateTime updatedAt`: Timestamp of last update.
- `LocalDateTime expiresAt`: Expiration date.

## Methods
### `getOwnerId()`
```java
@Override
public UUID getOwnerId() {
    throw new UnsupportedOperationException("Unimplemented method 'getOwnerId'");
}
```
Retrieves the owner ID of the resource (not yet implemented).

### `setOwnerId(UUID ownerId)`
```java
@Override
public void setOwnerId(UUID ownerId) {
    throw new UnsupportedOperationException("Unimplemented method 'setOwnerId'");
}
```
Sets the owner ID of the resource (not yet implemented).

## Summary
The `Ressource` class models the key attributes and behaviors of a resource within the microservice. It is designed for efficient storage and retrieval in a Cassandra database, with various attributes covering identification, classification, availability, and ownership details.

