# Reviews Model Documentation

## Overview
The `Reviews` class represents user reviews for a specific target entity (such as a product, service, or other resource) within the resource management microservice. It captures details about the user, the target entity, the rating given, comments, and timestamps for when the review was created and last updated.

## Table Mapping
This class is mapped to the `reviews` table in a Cassandra database.

## Attributes

- **id (UUID)**: The unique identifier for the review entry.
- **userId (UUID)**: The ID of the user who submitted the review.
- **targetId (UUID)**: The ID of the entity (e.g., product, service) being reviewed.
- **rating (int)**: The rating given by the user, typically on a scale (e.g., 1 to 5).
- **comment (String)**: The textual feedback or comment provided by the user in the review.
- **createdAt (LocalDateTime)**: The timestamp when the review was created.
- **updatedAt (LocalDateTime)**: The timestamp when the review was last updated.

## Usage
The `Reviews` model is used to collect user feedback on various entities in the system. It supports capturing ratings and comments, which can be valuable for assessing user satisfaction and engagement with products, services, or other resources.

## Example Usage
```java
Reviews review = Reviews.builder()
    .id(UUID.randomUUID())
    .userId(UUID.randomUUID())       // User who submitted the review
    .targetId(UUID.randomUUID())     // Target entity being reviewed (e.g., product ID)
    .rating(5)                       // Rating (e.g., 1 to 5)
    .comment("Excellent product, highly recommend!") // Review comment
    .createdAt(LocalDateTime.now())  // Timestamp when the review was created
    .updatedAt(LocalDateTime.now())  // Timestamp when the review was last updated
    .build();
