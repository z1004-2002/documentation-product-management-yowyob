# Business Domain Management

This guide provides an overview of the Data Transfer Objects (DTOs) used in the Business Domain management endpoints, including the structure for requests and responses.

## Prerequisites

1. You must be a registered user through the user service.
2. You must have a valid form submission.

## Endpoints

### 1. Create Business Domain

- **Endpoint**: `POST /api/v1/business-domain/create`
- **Request Body**: `BusinessDomainRequest`
- **Response**: `BusinessDomainResponse`

### 2. Get All Business Domains

- **Endpoint**: `GET /api/v1/business-domain`
- **Response**: `List<BusinessDomainResponse>`

### 3. Get Business Domain by ID

- **Endpoint**: `GET /api/v1/business-domain/{id}`
- **Response**: `BusinessDomainResponse`

### 4. Update Business Domain

- **Endpoint**: `PUT /api/v1/business-domain/update/{id}`
- **Request Body**: `BusinessDomainRequest`
- **Response**: `BusinessDomainResponse`

### 5. Delete Business Domain

- **Endpoint**: `DELETE /api/v1/business-domain/delete/{id}`
- **Response**: `String`

## DTO Structures

### 1. BusinessDomainRequest

This DTO is used when creating or updating a Business Domain.

#### Fields:

- **domainName**: String — Name of the business domain.
- **description**: String — Description of the business domain.

#### Example:

```json
{
  "domainName": "E-commerce",
  "description": "A domain focused on buying and selling goods online."
}

2. BusinessDomainResponse

This DTO is used to return information about a Business Domain after creation or retrieval.
Fields:

    id: UUID — Unique identifier for the business domain.
    domainName: String — Name of the business domain.
    description: String — Description of the business domain.

Example:
json

{
  "id": "a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1",
  "domainName": "E-commerce",
  "description": "A domain focused on buying and selling goods online."
}
