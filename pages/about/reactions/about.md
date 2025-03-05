# Reaction Model Documentation

## Overview
The `Reaction` class represents a user's reaction to a specific target (such as a post, comment, or media) within the resource management microservice. It captures details about the user, the target entity, the type of reaction, and the timestamp when the reaction was made.

## Table Mapping
This class is mapped to the `reactions` table in a Cassandra database.

## Attributes

- **id (UUID)**: The unique identifier for the reaction entry.
- **targetId (UUID)**: The ID of the entity (e.g., post, comment) to which the reaction is associated.
- **userId (UUID)**: The ID of the user who made the reaction.
- **reactionType (ReactionType)**: The type of reaction (e.g., like, love, dislike, etc.), represented by the `ReactionType` enumeration.
- **createdAt (LocalDateTime)**: The timestamp when the reaction was created.

## Usage
The `Reaction` model is used to capture and store user interactions with various targets. It allows tracking of different types of reactions (such as likes, dislikes, etc.) and associates them with specific users and targets.

## Example Usage
```java
Reaction reaction = Reaction.builder()
    .id(UUID.randomUUID())
    .targetId(UUID.randomUUID())  // Target entity ID (e.g., post ID)
    .userId(UUID.randomUUID())    // User who made the reaction
    .reactionType(ReactionType.LIKE) // Reaction type (e.g., LIKE, LOVE)
    .createdAt(LocalDateTime.now()) // Timestamp when the reaction was made
    .build();
