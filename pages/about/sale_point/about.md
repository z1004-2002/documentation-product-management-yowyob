# SalePoint Model Documentation

## Overview
The `SalePoint` class represents a sales point in the resource management microservice. It includes attributes to define the relationship between a sales point, the product variation being sold, and the agency managing the sale, as well as additional notes relevant to the sales point.

## Table Mapping
This class is mapped to the `sale_points` table in a Cassandra database.

## Attributes

- **id (UUID)**: The unique identifier for the sales point entry.
- **variationId (UUID)**: The ID of the product variation associated with this sales point.
- **agencyId (UUID)**: The ID of the agency responsible for managing the sales point.
- **notes (String)**: Additional information or remarks about the sales point.

## Usage
The `SalePoint` model is used to store and manage information about sales locations, the associated product variations, and the managing agency. It is essential for tracking the specific points where products are sold and for associating those points with relevant product variations and agencies.

## Example Usage
```java
SalePoint salePoint = SalePoint.builder()
    .id(UUID.randomUUID())
    .variationId(UUID.randomUUID())
    .agencyId(UUID.randomUUID())
    .notes("This is a high-traffic sales location.")
    .build();
