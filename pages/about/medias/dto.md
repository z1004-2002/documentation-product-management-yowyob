# DTO Structures

## 1. # MediaResponse

This DTO is used to represent media files associated with a target (e.g., product, service, user profile).

### Fields:

- **id** (UUID) – Unique identifier of the media file.
- **targetId** (UUID) – Unique identifier of the target the media file is associated with (e.g., product, service, post).
- **name** (String) – Display name of the media file.
- **realName** (String) – Original file name.
- **size** (Integer) – Size of the media file in bytes.
- **fileType** (String) – MIME type or format of the media file (e.g., image/png, video/mp4).
- **primary** (Boolean) – Indicates whether this is the primary media file for the target.

### Example:

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "targetId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "product_image_1",
  "realName": "smartphone.jpg",
  "size": 204800,
  "fileType": "image/jpeg",
  "primary": true
}
```