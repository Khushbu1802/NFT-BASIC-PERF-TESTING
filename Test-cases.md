Test Case: Validate /accounts Endpoint
Test Objective
Verify that the /accounts endpoint returns the correct account details for an authenticated user.
Precondition

User is authenticated with a valid JWT token.
User has at least one account.

Test Steps

Send a GET request to /accounts?userId=12345 with a valid Authorization header.
Verify the response status code is 200.
Validate the response body contains:
status: "success"
data: Array of account objects with accountId, accountType, balance, and currency.


Send a GET request with an invalid userId.
Verify the response status code is 400 or 401 and contains an error message.

Assertions

Response status code for valid request: 200
Response contains status: "success" and non-empty data array.
Each account object in data has required fields: accountId (string), accountType (string), balance (number), currency (string).
Invalid userId returns 400/401 with an error message.

Test Data

Valid userId: "12345"
Invalid userId: "invalid_user"
Valid JWT token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NSIsInVzZXJJZCI6IjEyMzQ1IiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

