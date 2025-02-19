## Endpoints

### 1. Create Organisation

- **Endpoint**: `POST /api/v1/organisation/create`
- **Request Body**: `OrganisationRequest`
- **Response**: `OrganisationResponse`

### 2. Get All Organisations

- **Endpoint**: `GET /api/v1/organisation`
- **Response**: `List<OrganisationResponse>`

### 3. Get All Organisations by Domain

- **Endpoint**: `GET /api/v1/organisation/all/domain`
- **Request Param**: `domainKey`
- **Response**: `List<OrganisationResponse>`

### 4. Get Organisation by ID

- **Endpoint**: `GET /api/v1/organisation/{organisation_id}`
- **Response**: `OrganisationResponse`

### 5. Update Organisation

- **Endpoint**: `PUT /api/v1/organisation/update/{organisation_id}`
- **Request Body**: `OrganisationRequest`
- **Response**: `OrganisationResponse`

### 6. Delete Organisation

- **Endpoint**: `DELETE /api/v1/organisation/delete/{organisation_id}`
- **Response**: `String`

## DTO Structures

### 1. OrganisationRequest

This DTO is used when creating or updating an Organization.

#### Fields:

- **organisationId**: UUID — Optional: ID of the organization for updates.
- **longName**: String — Full name of the organization.
- **shortName**: String — Abbreviated name of the organization.
- **email**: String — Email address of the organization.
- **orgDescription**: String — Description of the organization.
- **businessActorId**: UUID — ID of the business actor associated with the organization.
- **domainKey**: UUID — Key representing the domain of the organization.
- **logoUrl**: String — URL of the organization’s logo.
- **businessDomain**: DomainType — The business domain of the organization.
- **type**: orgType — The type of organization.
- **isActive**: Boolean — Indicator if the organization is active.
- **webSiteUrl**: String — URL of the organization’s website.
- **orgContact**: String — Contact information for the organization.
- **socialNetwork**: String — Social media information.
- **businessRegistrationNumber**: String — Business registration number.
- **taxNumber**: String — Tax number of the organization.
- **capitalShare**: BigDecimal — Capital share of the organization.
- **registrationDate**: LocalDateTime — Date of registration.
- **ceoName**: String — Name of the CEO.
- **yearFounded**: LocalDateTime — Year the organization was founded.
- **keywords**: Set<String> — Set of keywords associated with the organization.
- **numberOfEmployees**: Integer — Number of employees in the organization.

#### Example:

```json
{
  "organisationId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "longName": "Yowyob Technologies",
  "shortName": "Yowyob",
  "email": "contact@yowyob.com",
  "orgDescription": "A technology solutions provider.",
  "businessActorId": "d3d3d3d3-d3d3-4d3d-b3d3-d3d3d3d3d3d",
  "domainKey": "e4e4e4e4-e4e4-4e4e-b4e4-e4e4e4e4e4e4",
  "logoUrl": "http://example.com/logo.png",
  "businessDomain": "TECHNOLOGY",
  "type": "LLC",
  "isActive": true,
  "webSiteUrl": "http://yowyob.com",
  "orgContact": "123-456-7890",
  "socialNetwork": "http://facebook.com/yowyob",
  "businessRegistrationNumber": "BR123456",
  "taxNumber": "TAX123456",
  "capitalShare": 100000.00,
  "registrationDate": "2023-01-01T00:00:00",
  "ceoName": "John Doe",
  "yearFounded": "2020-01-01T00:00:00",
  "keywords": ["technology", "solutions", "innovation"],
  "numberOfEmployees": 50
}

2. OrganisationResponse

This DTO is used to return information about an Organization after creation or retrieval.
Fields:

    id: UUID — Unique identifier for the organization.
    longName: String — Full name of the organization.
    shortName: String — Abbreviated name of the organization.
    email: String — Email address of the organization.
    orgDescription: String — Description of the organization.
    businessActorId: UUID — ID of the business actor associated with the organization.
    domainKey: UUID — Key representing the domain of the organization.
    logoUrl: String — URL of the organization’s logo.
    businessDomain: DomainType — The business domain of the organization.
    type: orgType — The type of organization.
    isActive: Boolean — Indicator if the organization is active.
    webSiteUrl: String — URL of the organization’s website.
    orgContact: String — Contact information for the organization.
    socialNetwork: String — Social media information.
    businessRegistrationNumber: String — Business registration number.
    taxNumber: String — Tax number of the organization.
    capitalShare: BigDecimal — Capital share of the organization.
    registrationDate: LocalDateTime — Date of registration.
    ceoName: String — Name of the CEO.
    yearFounded: LocalDateTime — Year the organization was founded.
    keywords: Set<String> — Set of keywords associated with the organization.
    numberOfEmployees: Integer — Number of employees in the organization.

Example:
json

{
  "id": "a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1",
  "longName": "Yowyob Technologies",
  "shortName": "Yowyob",
  "email": "contact@yowyob.com",
  "orgDescription": "A technology solutions provider.",
  "businessActorId": "d3d3d3d3-d3d3-4d3d-b3d3-d3d3d3d3d3d",
  "domainKey": "e4e4e4e4-e4e4-4e4e-b4e4-e4e4e4e4e4e4",
  "logoUrl": "http://example.com/logo.png",
  "businessDomain": "TECHNOLOGY",
  "type": "LLC",
  "isActive": true,
  "webSiteUrl": "http://yowyob.com",
  "orgContact": "123-456-7890",
  "socialNetwork": "http://facebook.com/yowyob",
  "businessRegistrationNumber": "BR123456",
  "taxNumber": "TAX123456",
  "capitalShare": 100000.00,
  "registrationDate": "2023-01-01T00:00:00",
  "ceoName": "John Doe",
  "yearFounded": "2020-01-01T00:00:00",
  "keywords": ["technology", "solutions", "innovation"],
  "numberOfEmployees": 50
}

-- **Conclusion**

This document outlines the necessary DTOs for managing Organizations within the application. Ensure that your requests and responses adhere to these structures for proper functionality.



