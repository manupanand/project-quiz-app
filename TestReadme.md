# Testing procedures for quiz app api on local
-use postman or curl
-use mongodb local- url
-create .env 
    -write secrets
    -test locally in following format
    


### use similar syntax signup body
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
delete-admin/question/delete 
pass in body as shown
{
   " id":"id of question",
   "update":{
                "question":"What is the capital of Estonia?",
                "answer":["Seoul","Dhaka","Delhi","Tallin"],
                "correctAnswer":"Tallinn"
   }


}

update-put request in body  admin/question/update
{
   "id":"question id",
   "update":{
                "question":"What is the capital of Estonia?",
                "answer":["Seoul","Dhaka","Delhi","Tallin"],
                "correctAnswer":"Tallinn"
   }


}

sample question  is post request -use beare token of admin as header

answers = [
            {
                questionId: mongoose.Types.ObjectId("questionId1"), // Replace with an actual questionId
                selectedAnswer: "Paris"
            },
            {
                questionId: mongoose.Types.ObjectId("questionId2"), // Replace with another questionId
                selectedAnswer: "Madrid"
            }
        ];


user-token :eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzMxYjg1ZmU0ZTZjOTkzZGU5MzU2NTMiLCJpYXQiOjE3MzEzMTE3MTF9.YqquIuSsDwhHCDid8cywL2qlnocSDdOOyMqgZi_g-i4


admin-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzMwZDMxNTQwMzMxYmEwNmI1NTg3NjEiLCJpYXQiOjE3MzEyNTMwMTN9.Y_LzgaSqLeBqwvlplAcTzfmd63jR7oRPK5zFZrzHJ9w



answer submit -user/answer/submit -

use suer token 

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