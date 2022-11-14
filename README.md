# API Specification

# User Atrributes (Authentication and Authorization)

| Atrributes    | Data Type | Description                        |
| ------------- | --------- | ----------------------------       |
| name          | String    | Contains the user account name     |      
| username      | String    | Contains the user's username       |
| password      | String    | Contains the user password         |
| createdAt     | Date      | contains the account creation date |

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
  
# List Atrributes (To Do List)

| Atrributes    | Data Type | Description                        |
| ------------- | --------- | ----------------------------       |   
| title         | String    | Contains the list title            |
| content       | String    | Contains the list content          |
| createdAt     | Date      | contains the list creation date    |

## Retrive All List Datas

- Method : GET
- Endpoint : /list
- Header :
  - Accept : application/json
  - authorization : JSON Web Token
- Response :

```javascript
   {
        "status" : "200 OK",
        "data" : [{
                      "_id":"String",
                      "title":"String",
                      "content":"String",
                      "createdAt":"Date",
                 }],
        "message" : "You retrieve all data",
    }
```

## Retrive List Data By ID

- Method : GET
- Endpoint : /list/:id
- Header :
  - Accept : application/json
  - authorization : JSON Web Token
- Response :

```javascript
   {
        "status" : "200 OK",
        "data" : {
                      "_id":"String",
                      "title":"String",
                      "content":"String"
                      "createdAt":"Date",
                 },
        "message" : "You retrieve data by ID",
    }
```

## Store New List Data

- Method : POST
- Endpoint : /list
- Header :
  - Content-Type : application/json
  - Accept : application/json
  - authorization : JSON Web Token
  
- Body :

```javascript
    {
        "title" : "String",
        "content" : "String"
    }
```

- Response :

```javascript
   {
        "status" : "201 Created",
        "data" : {
                      "title":"String",
                      "content":"String",
                 },
        "message" : "You store data",
    }
```

## Update List Data By ID

- Method : PUT
- Endpoint : /list/:id
- Header :
  - Content-Type : application/json
  - Accept : application/json
  - authorization : JSON Web Token
  
- Body :

```javascript
    {
        "title" : "String",
        "content" : "String"
    }
```

- Response :

```javascript
   {
        "status" : "200 OK",
        "data" : {
                      "title":"String",
                      "content":"String",
                 },
        "message" : "You update data by ID",
    }
```

## Delete List Data By ID

- Method : DELETE
- Endpoint : /list/:id
- Header :
  - Content-Type : application/json
  - Accept : application/json
  - authorization : JSON Web Token
  
- Response :

```javascript
   {
        "status" : "200 OK",
        "message" : "You delete data by ID",
    }
```

## Delete All List Data

- Method : DELETE
- Endpoint : /list
- Header :
  - Content-Type : application/json
  - Accept : application/json
  - authorization : JSON Web Token
  
- Response :

```javascript
   {
        "status" : "200 OK",
        "message" : "You delete all data",
    }
```
