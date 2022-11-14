# API Specification

# User (Authentication and Authorization)

## Register
| Atrributes    | Data Type | Description                        |
| ------------- | --------- | ----------------------------       |
| name          | String    | Contains the user account name     |      
| username      | String    | Contains the user's username       |
| password      | String    | Contains the user password         |
| createdAt     | Date      | contains the account creation date |

Request :

- Method : POST
- Endpoint : /user/register
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```javascript
    {
        "name" : "String - mininum length 3 - required",
        "username" : "String - mininum length 8 - required",
        "password" : "String - mininum length 8 - required",
    }
```

- Response :

  - 201 Created

  ```javascript
      {
          "status":"201 Created",
          "message":"Your Account was registered"
      }
  ```
  
## Login
| Atrributes    | Data Type | Description                        |
| ------------- | --------- | ----------------------------       |   
| username      | String    | Contains the user's username       |
| password      | String    | Contains the user password         |

Request :

- Method : POST
- Endpoint : /user/login
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```javascript
    {
        "username" : "String - mininum length 8 - required",
        "password" : "String - mininum length 8 - required",
    }
```

- Response :

  - 200 OK

  ```javascript
      {
          "status":"200 OK",
          "data":"String"
          "message":"You was login"
      }
  ```
  
# List (To Do List)
