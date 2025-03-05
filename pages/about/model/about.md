# Model Documentation

## Overview
The `Model` class represents a blueprint for a product within the resource management system. It defines essential metadata about a specific product model, including its unique identifier, creator, name, and description.

## Class Definition
```java
package com.yowyob.resource_management.domain.model;

import java.util.UUID;

import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Table("models")
public class Model{
    @PrimaryKey
    @Column("id")
    private UUID id;
    
    @Column("created_by_user_id")
    private UUID createdByUserId;
    
    @Column("name")
    private String name;
    
    @Column("description")
    private String description;
}
```

## Attributes

| Attribute           | Type      | Description |
|---------------------|----------|-------------|
| `id`               | UUID      | Unique identifier of the model. |
| `createdByUserId`  | UUID      | The ID of the user who created this model. |
| `name`             | String    | The name of the model. |
| `description`      | String    | A brief description of the model. |

## Usage Example

### Creating a Model Object
```java
Model productModel = Model.builder()
    .id(UUID.randomUUID())
    .createdByUserId(UUID.randomUUID())
    .name("Laptop X200")
    .description("High-performance business laptop")
    .build();
```

### Storing the Model in Cassandra
This class is mapped to a Cassandra table named `models` using Spring Data Cassandra.

```sql
CREATE TABLE models (
    id UUID PRIMARY KEY,
    created_by_user_id UUID,
    name TEXT,
    description TEXT
);
```

## Notes
- The `Model` class provides a structured way to categorize different product variations.
- It helps maintain a clear organization of product definitions in the system.
- This entity can be extended to include additional metadata, such as product specifications or attributes.

---
This documentation serves as a reference for developers integrating the `Model` entity into the resource management microservice.

