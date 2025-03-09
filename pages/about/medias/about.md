# Media Model Documentation

## Overview
The `Media` class represents media files associated with different entities in the resource management microservice. It includes details about the media file, such as its name, size, type, and whether it is the primary media for a target entity.

## Table Mapping
This class is mapped to the `medias` table in a Cassandra database.

## Attributes

- **id (UUID)**: The unique identifier for the media entry.
- **targetId (UUID)**: The ID of the entity to which this media file is associated.
- **name (String)**: The stored name of the media file.
- **realName (String)**: The original name of the uploaded media file.
- **size (Long)**: The size of the media file in bytes.
- **fileType (String)**: The MIME type of the file (e.g., "image/png", "video/mp4").
- **isPrimary (boolean)**: Indicates whether this media file is the primary one for the associated entity.

## Usage
The `Media` model is used to store metadata about media files uploaded to the system. It helps manage different types of media, including images, videos, and documents, while ensuring that a primary media file can be set for each entity.

## Example Usage
```java
Media media = new Media(
    UUID.randomUUID(),              // Unique ID for the media
    UUID.randomUUID(),              // Associated entity ID
    "stored_image.png",             // Name of the stored file
    "user_uploaded_image.png",      // Original file name
    204800L,                        // File size in bytes (200KB)
    "image/png",                    // MIME type
    true                            // Is this the primary media?
);
```