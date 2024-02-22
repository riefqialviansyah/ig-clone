# Ig-clone App Api Docs

## LINK

- `https://ig-clone.riefqialviansyah.com/`
- `https://ig-clone-f166b.web.app/`

## Available Endpoints

- `get` / `ok`
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

````json

{
    "message": "Username must be unique"
}
OR
{
    "message": "Username is required"
}
OR
{
    "message": "Email must be unique"
}
OR
{
    "message": "Email is required"
}
OR
{
    "message": "Invalid email format"
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
````

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
  "username": "string",
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
```

_401 - Unauthorized_

```json
{
  "message": "Invalid email or password"
}
```

_500 - Internal Server Error_

```json
{
  "message": "Internal server error"
}
```

## `POST` /post

This endpoint is used to create a new post.

### Request

- Method: POST
- Endpoint: /post

- Header:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

- Body:

```json
{
  "imageUrl": "string",
  "description": "string"
}
```

### Response

_201 - Created_

- Body:

```json
{
  "success": "Success to create post"
}
```

_400 - Bad Request_

```json
{
  "message": "userId Is Required"
}
OR
{
  "message": "imageUrl is required"
}
OR
{
  "message": "description is required"
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

- Header:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

### Response

_200 - OK_

- Body:

```json
[
  {
    "id": "integer",
    "userId": "integer",
    "imageUrl": "string",
    "likes": "integer",
    "description": "text",
    "createdAt": "string",
    "updatedAt": "string",
    "User": {
      "id": "integer",
      "username": "string",
      "email": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  },
  ...
]
```

_500 - Internal Server Error_

```json
{
  "message": "Internal server error"
}
```

## `PATCH` /post/cover-url

This endpoint is used to upload image to 3rd party API.

### Request

- Header:

```json
{
  "Authorization": "Bearer <access_token>",
  "Content-Type": "multipart/form-data"
}
```

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
  "cover_url": "string"
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

## `GET` /post/coment/:postId

This endpoint is used to get coment on post.

### Request

- Header:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

### Response

_200 - OK_

```json
[
  {
    "id": "integer",
    "message": "string",
    "userId": "integer",
    "postId": "integer",
    "createdAt": "string",
    "updatedAt": "string",
    "User": {
      "id": "integer",
      "username": "string",
      "email": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  },
  ...
]
```

_500 - Internal Server Error_

```json
{
  "message": "Internal server error"
}
```

## `GET` /post/likes/:postId

This endpoint is used to add like to post.

### Request

- Header:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

### Response

_200 - OK_

```json
{
  "message": "Success to like this post"
}
```

_400 - Bad Request_

```json
{
  "message": "You only allow likes this post once"
}
```

_500 - Internal Server Error_

```json
{
  "message": "Internal server error"
}
```

## GLobal Error

### Response

- _401 - Unauthorized_

```json
{
  "message": "Invalid Token, Please login first"
}
```
