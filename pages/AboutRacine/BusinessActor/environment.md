## Structure des DTOs pour les requêtes et réponses lors de l'utilisation des endpoints liés aux Business Actors. Je vais décrire les variables sans inclure le code Java complet, en fournissant ensuite des exemples de JSON.

## Endpoints

### 1. Create Business Actor

- **Endpoint**: `POST /api/v1/business_actor/create`
- **Request Body**: `BusinessActorRequest`
- **Response**: `BusinessActorResponse`

### 2. Get All Business Actors

- **Endpoint**: `GET /api/v1/business_actor`
- **Response**: `List<BusinessActorResponse>`

### 3. Get Business Actor by ID

- **Endpoint**: `GET /api/v1/business_actor/{id}`
- **Response**: `BusinessActorResponse`

### 4. Get Business Actors by Type

- **Endpoint**: `GET /api/v1/business_actor/ba_type`
- **Request Param**: `type`
- **Response**: `List<BusinessActorResponse>`

### 5. Update Business Actor

- **Endpoint**: `PUT /api/v1/business_actor/update/{id}`
- **Request Body**: `BusinessActorRequest`
- **Response**: `BusinessActorResponse`

### 6. Delete Business Actor

- **Endpoint**: `DELETE /api/v1/business_actor/delete/{id}`
- **Response**: `String`

## DTO Structures

### 1. BusinessActorRequest

This DTO is used when creating or updating a Business Actor.

#### Fields:

- **userId**: UUID — User ID associated with the Business Actor.
- **phoneNumber**: String — Phone number of the Business Actor.
- **email**: String — Email address of the Business Actor.
- **avatarPicture**: String — URL or path of the avatar picture.
- **profilePicture**: String — URL or path of the profile picture.
- **businessActorName**: String — Name of the Business Actor.
- **isIndividualBA**: Boolean — Indicator if the actor is an individual.
- **type**: BAType — Type of the Business Actor.
- **isAvailable**: Boolean — Availability status.
- **dateOfBirth**: LocalDateTime — Date of birth.
- **age**: int — Age.
- **gender**: String — Gender.
- **nationality**: String — Nationality of the actor.
- **profession**: String — Actor's profession.
- **paymentMethods**: Set<String> — Set of payment methods.
- **password**: String — Cipher text for password.
- **description**: String — Description of the Business Actor.
- **businessActorId**: UUID — Unique identifier for the Business Actor.

#### Example:

```json
{
  "userId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "phoneNumber": "+1234567890",
  "email": "john.doe@example.com",
  "avatarPicture": "http://example.com/avatar.jpg",
  "profilePicture": "http://example.com/profile.jpg",
  "businessActorName": "John Doe",
  "isIndividualBA": true,
  "type": "PROVIDER",
  "isAvailable": true,
  "dateOfBirth": "1985-07-25T00:00:00",
  "age": 37,
  "gender": "male",
  "nationality": "American",
  "profession": "Businessman",
  "paymentMethods": ["CREDIT_CARD", "PAYPAL"],
  "password": "encrypted_password",
  "description": "A brief description about John Doe.",
  "businessActorId": "a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1"
}
```

### 2. BusinessActorResponse

This DTO is used to return information about a Business Actor after creation or retrieval.

#### Fields:

- **businessActorId**: UUID — Unique identifier for the Business Actor.
- **businessActorName**: String — Name of the Business Actor.
- **userId**: UUID — User ID associated with the Business Actor.
- **phoneNumber**: String — Phone number of the Business Actor.
- **email**: String — Email address of the Business Actor.
- **avatarPicture**: String — URL or path of the avatar picture.
- **profilePicture**: String — URL or path of the profile picture.
- **isIndividualBA**: Boolean — Indicator if the actor is an individual.
- **type**: BAType — Type of the Business Actor.
- **isAvailable**: Boolean — Availability status.
- **dateOfBirth**: LocalDateTime — Date of birth.
- **age**: int — Age.
- **gender**: String — Gender.
- **nationality**: String — Nationality of the actor.
- **profession**: String — Actor's profession.
- **paymentMethods**: Set<String> — Set of payment methods.
- **isVerified**: Boolean — Verification status.
- **isActive**: Boolean — Lock status.
- **description**: String — Description of the Business Actor.
- **reviews**: String — Reviews in JSON format or text representation.
- **password**: String — Cipher text for password.

#### Example:

```json
{
  "businessActorId": "a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1",
  "businessActorName": "John Doe",
  "userId": "d2d2d2d2-d2d2-4d2d-b2d2-d2d2d2d2d2d",
  "phoneNumber": "+1234567890",
  "email": "john.doe@example.com",
  "avatarPicture": "http://example.com/avatar.jpg",
  "profilePicture": "http://example.com/profile.jpg",
  "isIndividualBA": true,
  "type": "PROVIDER",
  "isAvailable": true,
  "dateOfBirth": "1985-07-25T00:00:00",
  "age": 37,
  "gender": "male",
  "nationality": "American",
  "profession": "Businessman",
  "paymentMethods": ["CREDIT_CARD", "PAYPAL"],
  "isVerified": true,
  "isActive": true,
  "description": "A brief description about John Doe.",
  "reviews": "No reviews yet.",
  "password": "encrypted_password"
}
```

## Conclusion

This document outlines the necessary DTOs for managing Business Actors within the application. Ensure that your requests and responses adhere to these structures for proper functionality.
```

### Key Changes:
- **Fields Described**: The fields for each DTO are listed without Java code, focusing on their purpose.
- **JSON Examples Provided**: Each DTO section includes a JSON example to illustrate how the data should be structured.