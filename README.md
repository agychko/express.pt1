## Find All Users
```bash
    curl --location --request GET 'localhost:3000/v1/user'
```   
## Find User
```bash
    curl --location --request GET 'localhost:3000/v1/user' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com"
    }'
```  
## Create User
```bash
    curl --location --request POST 'localhost:3000/v1/user' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com",
        "name": "testUser"
    }'
```
## Update Users
```bash
    curl --location --request PATCH 'localhost:3000/v1/user' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "newTestUser"
    }'
```
## Delete User
```bash
    curl --location --request DELETE 'localhost:3000/v1/user' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "test@gmail.com"
    }'
```