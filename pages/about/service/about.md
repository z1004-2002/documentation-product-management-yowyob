# ServiceEntity

## Overview
The `ServiceEntity` class represents a service in the resource management microservice. It implements the `Product` interface and is mapped to the Cassandra `services` table.

## Class Definition
```java
@Table("services")
public class ServiceEntity implements Product
```

## Fields and Annotations

| Field Name         | Type              | Column Name           | Description |
|-------------------|------------------|----------------------|-------------|
| `id`              | `UUID`            | `id`                 | Primary key for identifying the service |
| `productBrandId`  | `UUID`            | `product_brand_id`   | Brand associated with the service |
| `immatriculation` | `String`          | `immatriculation`    | Registration number |
| `serialNumber`    | `String`          | `serial_number`      | Unique serial number |
| `skuCode`         | `String`          | `sku_code`           | Stock-keeping unit code |
| `barCode`         | `String`          | `bar_code`           | Barcode identifier |
| `qrCode`          | `String`          | `qr_code`            | QR code for scanning |
| `name`            | `String`          | `name`               | Name of the service |
| `shortDescription`| `String`          | `short_description`  | Brief description |
| `longDescription` | `String`          | `long_description`   | Detailed description |
| `storageCondition`| `String`          | `storage_condition`  | Storage conditions |
| `modelId`         | `UUID`            | `model_id`           | Associated model ID |
| `iotNumber`       | `String`          | `iot_number`         | IoT identifier |
| `availableQuantity`| `Integer`        | `available_quantity` | Available quantity |
| `productType`     | `ProductType`     | `product_type`       | Type of product |
| `basePrice`       | `BigDecimal`      | `base_price`         | Base price of the service |
| `accessibility`   | `Accessibility`   | `accessibility`      | Access level |
| `organisationId`  | `UUID`            | `organisation_id`    | Organization owning the service |
| `defaultAgencyId` | `UUID`            | `default_agency_id`  | Default agency handling the service |
| `packagingVente`  | `PackagingType`   | `packaging_vente`    | Sales packaging type |
| `packagingAchat`  | `PackagingType`   | `packaging_achat`    | Purchase packaging type |
| `parentId`        | `UUID`            | `parent_id`          | Parent entity reference |
| `numberUsage`     | `Integer`         | `number_usage`       | Number of times used |
| `transferable`    | `Boolean`         | `transferable`       | Whether the service is transferable |
| `state`           | `ProductState`    | `state`              | Current state of the service |
| `maxReservation`  | `Integer`         | `max_reservation`    | Maximum reservations allowed |
| `isTangible`      | `Boolean`         | `is_tangible`        | Defines if the service is tangible |
| `createdAt`       | `LocalDateTime`   | `created_at`         | Creation timestamp |
| `updatedAt`       | `LocalDateTime`   | `updated_at`         | Last update timestamp |
| `expiresAt`       | `LocalDateTime`   | `expires_at`         | Expiration date |

## Methods

### `getOwnerId()`
```java
@Override
public UUID getOwnerId()
```
Throws an `UnsupportedOperationException`. Should be implemented to return the owner ID.

### `setOwnerId(UUID ownerId)`
```java
@Override
public void setOwnerId(UUID ownerId)
```
Throws an `UnsupportedOperationException`. Should be implemented to set the owner ID.

## Annotations Used
- `@Table("services")`: Maps the class to the `services` table in Cassandra.
- `@PrimaryKey`: Defines the primary key field.
- `@Column("column_name")`: Maps Java fields to database columns.
- Lombok annotations (`@Getter`, `@Setter`, `@AllArgsConstructor`, `@NoArgsConstructor`, `@Builder`) are used to reduce boilerplate code.

## Summary
The `ServiceEntity` class is an essential model in the resource management system, encapsulating various attributes related to a service while leveraging Cassandra for storage. The class structure ensures extensibility, with placeholders for ownership management methods to be implemented as needed.

