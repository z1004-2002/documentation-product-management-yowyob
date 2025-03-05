# SalePrice Model Documentation

## Overview
The `SalePrice` class represents the pricing structure for a product post in the resource management microservice. It includes various attributes to define different pricing levels, negotiation possibilities, and validity constraints.

## Table Mapping
This class is mapped to the `sale_prices` table in a Cassandra database.

## Attributes

- **id (UUID)**: The unique identifier for the sale price entry.
- **productPostId (UUID)**: The ID of the related product post.
- **salePriceType (SalePriceType)**: The type of sale price (e.g., discount, bulk price, etc.).
- **minQuantity (Integer)**: The minimum quantity required to apply this pricing.
- **maxQuantity (Integer)**: The maximum quantity limit for this pricing.
- **value (BigDecimal)**: The price value for the specified quantity range.
- **maxReduction (BigDecimal)**: The maximum discount allowed.
- **currency (String)**: The currency in which the price is defined.
- **isNegociable (Boolean)**: Indicates whether the price is negotiable.
- **validityDate (LocalDateTime)**: The date until which this pricing is valid.
- **notes (String)**: Additional information or remarks about the pricing.

## Usage
The `SalePrice` model is used to define flexible pricing strategies for products, allowing configurations for bulk pricing, discounts, and negotiations. It is associated with a `ProductPost` and helps in determining the applicable sale price for different transaction scenarios.

## Example Usage
```java
SalePrice salePrice = SalePrice.builder()
    .id(UUID.randomUUID())
    .productPostId(UUID.randomUUID())
    .salePriceType(SalePriceType.DISCOUNT)
    .minQuantity(10)
    .maxQuantity(100)
    .value(new BigDecimal("99.99"))
    .maxReduction(new BigDecimal("10.00"))
    .currency("USD")
    .isNegociable(true)
    .validityDate(LocalDateTime.now().plusMonths(1))
    .notes("Limited-time discount offer")
    .build();
```

This example creates a `SalePrice` object with a discount pricing strategy for bulk purchases.

## Conclusion
The `SalePrice` model provides a structured way to define and manage pricing rules in the resource management system, supporting flexible pricing strategies and business rules.

