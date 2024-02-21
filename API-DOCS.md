# Ig-clone App Api Docs

## Available Endpoints

- `get` /
- `post` /register
- `post` /login
- `post` /post
- `get` /post
- `patch` /post/:id/cover-url

## `GET` /

This endpoint is used to retrieve information about the API.

### Request

- Method: GET
- Endpoint: /

### Response

_200 - OK_
- Body:
```json
  {
  "message": "Welcome to KOPI (Kumpulan Orang Paling Imut) API",
  "description": "This is web API for group project Hactiv8 RMT45 Phase2"
  }
  ```

## `POST` /register

This endpoint is used to register a new user in the system.

### Request

- Method: POST
- Endpoint: /register
- Body:
```json
{
"username": "string",
"email": "string",
"password": "string"
}
```
### Response

_201 - Created_
- Body:
```json
{
"message": "User has been created"
}
```

_400 - Bad Request_
```json

{
    "message": "Email is required"
}
OR
{
    "message": "Password is required"
}

_500 - Internal Server Error_
``` json
{
  "message": "Internal server error"
}
```

## `POST` /login

This endpoint is used for the user login process into the system.

### Request

- Method: POST
- Endpoint: /login
- Body:
```json
{
"email": "string",
"password": "string"
}
```
### Response

_200 - OK_
- Body:
```json
{
"message": "succes login",
"access_token": "<access_token>"
}
```

_400 - Bad Request_
```json

{
    "message": "Email is required"
}
OR
{
    "message": "Password is required"
}

_401 - Unauthorized_

```json
{
  "message": "Invalid email or password"
}
```

_500 - Internal Server Error_
``` json
{
  "message": "Internal server error"
}
```

## `POST` /post

This endpoint is used to create a new post.

### Request

- Method: POST
- Endpoint: /post
- Body:
```json
{
  "userId": "string",
  "imageUrl": "string",
  "likes": "integer",
  "description": "string"
}
```
### Response

 _201 - Created_
- Body:
```json
{
  "success": true,
  "post": {
    "userId": "string",
    "imageUrl": "string",
    "likes": "integer",
    "description": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
}
```
_400 - Bad Request_

```json
{
    "message": "File is required"
}
```

_500 - Internal Server Error_

```json
{
  "message": "Internal server error"
}
```


## `GET` /post

This endpoint is used to retrieve all posts.

### Request

- Method: GET
- Endpoint: /post

### Response

 _200 - OK_
- Body:
```json
{
  "message": "Success Get Data All Post",
  "data": [
    {
      "userId": "string",
      "imageUrl": "string",
      "likes": "integer",
      "description": "string",
      "createdAt": "string",
      "updatedAt": "string"
    },
    {
      "userId": "string",
      "imageUrl": "string",
      "likes": "integer",
      "description": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
}
```

_500 - Internal Server Error_
```json
{
  "message": "Internal server error"
}
```

## `PATCH` /post/:id/cover-url

This endpoint is used to update the cover URL of a post by ID.

### Request Body
- Body:
```json
{
  "image": "file"
}
```
### Responses
_200 - OK_
```json
{
  "message": "Image successfully updated"
}
```
_400 - Bad Request_
```json
{
    "message": "File is required"
}
```

_404 - Not Found_
```json
{
    "message": "Post id <post_id> not found"
}
```

_500 - Internal Server Error_

```json
{
  "message": "Internal server error"
}
```