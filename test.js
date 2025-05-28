pm.test("Verify /accounts endpoint returns account details", function () {
    // Send GET request
    pm.sendRequest({
        url: 'https://api.banksecure.com/accounts?userId=12345',
        method: 'GET',
        header: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NSIsInVzZXJJZCI6IjEyMzQ1IiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        }
    }, function (err, response) {
        // Check response status
        pm.expect(response.code).to.equal(200);

        // Parse response body
        const responseBody = response.json();
        
        // Assertions
        pm.expect(responseBody.status).to.equal('success');
        pm.expect(responseBody.data).to.be.an('array');
        pm.expect(responseBody.data.length).to.be.greaterThan(0);
        
        // Validate account object structure
        responseBody.data.forEach(account => {
            pm.expect(account).to.have.property('accountId').that.is.a('string');
            pm.expect(account).to.have.property('accountType').that.is.a('string');
            pm.expect(account).to.have.property('balance').that.is.a('number');
            pm.expect(account).to.have.property('currency').that.is.a('string');
        });
    });
});