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
  "createdAt": { "$date": "2024-11-10T12:00:00Z" }
}
```