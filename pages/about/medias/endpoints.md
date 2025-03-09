# Endpoints

## List of End Points

### 1. Add image to a product or any other items

- **Endpoint**: `POST /api/v1/resource-management/media/add/product/{productId}`
- **Path Variables**:
  - productId (id of target) : UUID
- **file** : list of media for the target
- **Response**: `List<MediaResponse>`

### 2. Get All Media using or not some filters

- **Endpoint**: `GET /api/v1/resource-management/media` 
- **Response**: `List<MediaResponse>`
- **Params**:
  - productId: UUID

### 3. Download Media

- **Endpoint**: `GET /api/v1/resource-management/media/download/{realName}/{fileName}`
- **Response**: `ProductPostResponse`
- **Path Variables**:
  - realName (name of the media when you will download it) : String
  - fileName (name of the image on the server) : String

### 5. Delete a media by his id

- **Endpoint**: `DELETE /api/v1/resource-management/media/delete/{id}`
- **Response**: `String`
- **Path Variables**:
  - id (id of service) : UUID
