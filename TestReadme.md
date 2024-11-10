# Testing procedures for quiz app api on local
-use postman or curl
-use mongodb local- url
-create .env 
    -write secrets


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

### sample question document

```
{
  "question": "What is the capital of France?",
  "answer": ["Berlin", "Madrid", "Paris", "Rome"],
  "correctAnswer": "Paris",
  "createdBy": { "$oid": "6730469b56b7541e4d418b4a" },  // Replace with actual Admin ObjectId
 
},
{
        "question": "What is the capital of Israel?",
        "answer": ["London", "Washington", "Sydney", "Tel Aviv"],
        "correctAnswer": "Tel Aviv",
        "createdBy": new mongoose.Types.ObjectId("6730469b56b7541e4d418b4a") // Use actual Admin ObjectId here
    
```
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