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
{
  "message": "Welcome to KOPI (Kumpulan Orang Paling Imut) API",
  "description": "This is web API for group project Hactiv8 RMT45 Phase2"
}

