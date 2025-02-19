## Endpoints

### 1. Create Contact

- **Endpoint**: `POST /api/v1/contact/create`
- **Request Body**: `ContactDTO`
- **Response**: `ContactDTO`

### 2. Get All Contacts

- **Endpoint**: `GET /api/v1/contact`
- **Response**: `List<ContactDTO>`

### 3. Get Contact by ID

- **Endpoint**: `GET /api/v1/contact/{id}`
- **Response**: `ContactDTO`

### 4. Update Contact _(currently commented out)_

- **Endpoint**: `PUT /api/v1/contact/update/{id}`
- **Request Body**: `ContactDTO`
- **Response**: `ContactDTO`

### 5. Delete Contact _(currently commented out)_

- **Endpoint**: `DELETE /api/v1/contact/delete/{id}`
- **Response**: `String`

## DTO Structure

### ContactDTO

This DTO is used for representing contact information.

#### Fields:

- **contactId**: UUID — Unique identifier for the contact.
- **addressId**: UUID — ID of the associated address.
- **organisationId**: UUID — ID of the associated organization.
- **agencyId**: UUID — ID of the associated agency.
- **name**: String — Name of the contact.
- **typeId**: UUID — ID of the contact type.
- **type**: String — Type of the contact (e.g., personal, business).
- **isVerified**: boolean — Indicator if the contact is verified.
- **isFavorite**: boolean — Indicator if the contact is marked as favorite.
- **phoneNumber**: String — Primary phone number.
- **secondaryPhoneNumber**: String — Secondary phone number.
- **faxNumber**: String — Fax number.
- **email**: String — Primary email address.
- **secondaryEmail**: String — Secondary email address.
- **verifiedAt**: LocalDateTime — Timestamp of when the contact was verified.
- **createdAt**: LocalDateTime — Timestamp of when the contact was created.
- **updatedAt**: LocalDateTime — Timestamp of when the contact was last updated.

#### Example:

```json
{
  "contactId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "addressId": "c3c3c3c3-c3c3-4c3c-c3c3-c3c3c3c3c3c3",
  "organisationId": "b4b4b4b4-b4b4-4b4b-b4b4-b4b4b4b4b4b4",
  "agencyId": "a5a5a5a5-a5a5-4a5a-a5a5-a5a5a5a5a5a5",
  "name": "John Doe",
  "typeId": "e6e6e6e6-e6e6-4e6e-e6e6-e6e6e6e6e6e6",
  "type": "personal",
  "isVerified": true,
  "isFavorite": false,
  "phoneNumber": "+1234567890",
  "secondaryPhoneNumber": "+0987654321",
  "faxNumber": "123-456-7890",
  "email": "john.doe@example.com",
  "secondaryEmail": "john.doe.secondary@example.com",
  "verifiedAt": "2023-01-01T00:00:00",
  "createdAt": "2023-01-01T00:00:00",
  "updatedAt": "2023-01-01T00:00:00"
}

Conclusion

This document outlines the necessary endpoints and DTOs for managing contacts within the application. Ensure that your requests and responses adhere to these structures for proper functionality.


### Key Features:
- **Overview**: Explains the purpose of the contact management system.
- **Endpoints**: Clearly defined endpoints for managing contacts.
- **DTO Structure**: Details the `ContactDTO` with examples to clarify the expected data format.

