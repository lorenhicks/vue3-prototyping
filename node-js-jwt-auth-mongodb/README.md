### Start MongoDB Server
```
Make sure it is running in 'Services' of your computer
Run Node.js application with command: 'node server.js' from within 'node-js-jwt-auth-mongodb'
```

### Postman Payloads
```
Creating user roles
http://localhost:8080/api/auth/signup
{
    "username": "lolo",
    "email": "lo@lo.com",
    "password": "123456",
    "roles": ["user", "moderator"]
}
Postman payload to create new user 
- POST Request
- Body
- raw > JSON
- Send
Expected Response:
{
    "message": "User was registered successfully!"
}

Signing in user and generating access token
http://localhost:8080/api/auth/signin
{
    "username": "lolo",
    "password": "123456"
}
Postman payload to sign in
- POST Request
- Body
- raw > JSON
- Send
Expected Response:
{
    "id": "620aa5942acff608bc58a85d",
    "username": "lolo",
    "email": "lo@lo.com",
    "roles": [
        "ROLE_USER",
        "ROLE_MODERATOR"
    ],
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGFhNTk0MmFjZmY2MDhiYzU4YTg1ZCIsImlhdCI6MTY0NDk1NDMwNywiZXhwIjoxNjQ1MDQwNzA3fQ.nXF-fovR82zxh12kKJfn3LFxTMNQZav_-vpPUdwXghU"
}

Accessing public content
http://localhost:8080/api/test/all
No payload needed
- GET
Expected Response:
Public Content.

Accessing protected resource
http://localhost:8080/api/test/user
No payload sent
- GET
Expected behavior:
{
    "message": "No token provided!"
}

Accessing protected database
http://localhost:8080/api/test/user
Headers
Key: x-access-token
Value: User's unique 'accessToken' generated during signin
- GET
Expected response:
User Content.

Accessing moderator features
http://localhost:8080/api/test/mod
Headers
Key: x-access-token
Value: User's unique 'accessToken' generated during signin after refreshToken generated
- GET
Expected response:
Moderator Content.

```

### Multiple servers
Start MongoDB first and then npm run serve the codebase. It should start running on localhost:8081