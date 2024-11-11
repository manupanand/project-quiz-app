# Testing procedures for quiz app api on local
-use postman or curl
-use mongodb local- url
-create .env 
    -write secrets
        -MONGO_ATLAS="mongodb://localhost:27017/testdb"
        -MONGO_ATLAS= your mongo atlas url
        -ENCRYPT_SECRET_KEY=
        -JWT_SECRET_KEY=
    -test locally in following format
    

### Test routes
- getting all question for user/admin 

      ```use http://localhost:2500/user/question/all
             http://localhost:2500/admin/question/all

      use sample bearer token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzMxYjg1ZmU0ZTZjOTkzZGU5MzU2NTMiLCJpYXQiOjE3MzEzMTE3MTF9.YqquIuSsDwhHCDid8cywL2qlnocSDdOOyMqgZi_g-i4
      ```
### syntax signup body -POST request

##### Admin body
```
{
  "username": "admin@example.com",
  "password": "SecurePassword123",
  "firstName": "John",
  "lastName": "Doe",
  "privilege": true
}
```
#### user body
```
{
  "username": "user@example.com",
  "password": "SecurePassword123",
  "firstName": "John",
  "lastName": "Doe",
  "privilege": false
}
```
#### user body -sign in
```
{
  "username": "user@example.com",
  "password": "SecurePassword123",
  
}
```

#### admin body -sign in
```
{
  "username": "user@example.com",
  "password": "SecurePassword123",
  
}
```

use token generated for further use

### sample question document

```
{
  "question": "What is the capital of France?",
  "answer": ["Berlin", "Madrid", "Paris", "Rome"],
  "correctAnswer": "Paris",
  
 
},
{
  "question": "What is the capital of Israel?",
  "answer": ["London", "Washington", "Sydney", "Tel Aviv"],
  "correctAnswer": "Tel Aviv",
        
}  
```
CRUD-
delete- http://localhost:2500/admin/question/delete 
pass in body as shown
```{
   " id":"id of question",
   "update":{
                "question":"What is the capital of Estonia?",
                "answer":["Seoul","Dhaka","Delhi","Tallin"],
                "correctAnswer":"Tallinn"
   }


}
```

update-put request in body  http://localhost:2500/admin/question/update
```{
   "id":"question id",
   "update":{
                "question":"What is the capital of Estonia?",
                "answer":["Seoul","Dhaka","Delhi","Tallin"],
                "correctAnswer":"Tallinn"
   }


}
```

sample question  is post request -use bearer token of admin as authorization



Sample token for testing purpose

```user-token :eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzMxYjg1ZmU0ZTZjOTkzZGU5MzU2NTMiLCJpYXQiOjE3MzEzMTE3MTF9.YqquIuSsDwhHCDid8cywL2qlnocSDdOOyMqgZi_g-i4


admin-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzMwZDMxNTQwMzMxYmEwNmI1NTg3NjEiLCJpYXQiOjE3MzEyNTMwMTN9.Y_LzgaSqLeBqwvlplAcTzfmd63jR7oRPK5zFZrzHJ9w
```



answer submit -http://localhost:2500/user/answer/submit -

use user token 
```
{
    "userId": "6731b85fe4e6c993de935653",
    "answers": [
        {
            "questionId": "6730a8d3626ce944cf4e5cb0",
            "selectedAnswer": "Tel Aviv"
        },
        {
            "questionId": "6730df0991d3a00c6377a4ff",
            "selectedAnswer": "Kabul"
        }
    ]
}
```