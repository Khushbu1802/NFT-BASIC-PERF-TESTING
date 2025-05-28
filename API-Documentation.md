API Documentation: /accounts Endpoint
Endpoint Description
Retrieves a list of all accounts associated with the authenticated user.
HTTP Method
GET
Mandatory Fields

Authorization Header: Bearer token (JWT) for authentication.

Query Parameters

userId (string, required): Unique identifier of the user.

Example Request
GET /accounts?userId=12345
Authorization: Bearer <JWT_TOKEN>

Example Response (Success)
{
  "status": "success",
  "data": [
    {
      "accountId": "ACC123",
      "accountType": "savings",
      "balance": 5000.00,
      "currency": "USD"
    },
    {
      "accountId": "ACC456",
      "accountType": "checking",
      "balance": 2500.00,
      "currency": "USD"
    }
  ]
}

Example Response (Error)
{
  "status": "error",
  "message": "Invalid userId or unauthorized access",
  "code": 401
}

Status Codes

200: Success
401: Unauthorized
400: Bad Request
500: Internal Server Error

