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

- Status: 200 OK
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

- Status: 201 Created
- Body:
```json
{
"message": "User has been created"
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

- Status: 200 OK
- Body:
```json
{
"message": "succes login",
"access_token": "<access_token>"
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
"userId": 1,
"imageUrl": "https://images.unsplash.com/photo-1499114794761-d2743d4eb6f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"likes": 0,
"description": "kuak, uak, wak, kang, kwebek"
}
```
### Response

- Status: 201 Created
- Body:
```json
{
"success": true,
"post": {
"id": 3,
"userId": 1,
"imageUrl": "https://res.cloudinary.com/de8km9ts7/image/upload/v1708474326/posts/gw6vc51tddvgedljstxb.jpg",
"likes": 0,
"description": "kuak, uak, wak, kang, kwebek",
"updatedAt": "2024-02-21T00:20:15.330Z",
"createdAt": "2024-02-21T00:20:15.330Z"
}
}
```

## `GET` /post

This endpoint is used to retrieve all posts.

### Request

- Method: GET
- Endpoint: /post

### Response

- Status: 200 OK
- Body:
```json
"message": "Success Get Data All Post",
"data": [
{
"id": 1,
"userId": 1,
"imageUrl": "https://res.cloudinary.com/de8km9ts7/image/upload/v1708473804/posts/v5mipl1nqikvw1txhju3.jpg",
"likes": 0,
"description": "kuak, uak, wak, kang, kwebek",
"createdAt": "2024-02-21T00:11:32.948Z",
"updatedAt": "2024-02-21T00:11:32.948Z"
}];
```
  ## `PATCH` /post/:id/cover-url

This endpoint is used to update the cover URL of a post by ID.

### Request

- Method: PATCH
- Endpoint: /post/:id/cover-url
- Parameters:
id: ID of the post to be updated
- Body: Form data with key image containing the image file to be uploaded as the new cover URL.
### Response
- Status: 200 OK
- Body:
```json

{
  "message": "Image successfully updated"
}
```

### Error Handling
Here are some error responses

- Status Code: 400 Bad Request

- Body: { "message": "Email is required" }
Status Code: 401 Unauthorized

- Body: { "message": "Invalid Token, Please login first" }
Status Code: 404 Not Found

- Body: { "message": "Post id {postId} not found" }
- Status Code: 500 Internal Server Error

- Body: { "message": "Internal server error" }
