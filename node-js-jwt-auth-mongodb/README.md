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