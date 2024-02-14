# User and Post API

This is a RESTful API for performing CRUD (Create, Read, Update, Delete) operations on users and posts, as well as adding comments to posts.

## Endpoints

### Users

- `GET /users/{username}`: Get user by ID.
- `POST /users`: Create a new user.

### Posts

- `GET /posts`: Get all posts.
- `GET /posts/{id}`: Get post by ID.
- `POST /posts`: Create a new post.

### Comments

- `GET /posts/{postId}/comments`: Get all comments for a specific post.
- `POST /posts/{postId}/comments`: Add a new comment to a post.

## Request and Response Formats

### User

##### User Signup
```json
{
  "username": LokeshR,
  "email": "iamloki765@gmail.com",
  "password": "lokesh"
}
```

##### User Signin

```json
{
  "email": "iamloki765@gmail.com",
  "password": "lokesh"
}
```

### Post

##### Create Post

```json
{
  "title": "Pets",
  "body": "Dog",
  "location": "Chennai."
}
```

##### View All Posts
Registered users can view all posts

### Comment

##### Create Comment

```json
{
  "postId": "65cc441598f1745a55f1feef",
  "comment": "Beautiful Dog"
}
```


## Running the API

1. **Install dependencies:** `npm install`
2. **Start the server:** `npm start`
3. The Server will be available at [http://localhost:8001](http://localhost:3000)

## Dependencies

- Node.js
- Express.js
- MongoDB


## Contributors

- [Lokesh R](https://github.com/lokirj7)





