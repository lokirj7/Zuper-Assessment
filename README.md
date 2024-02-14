# User and Post API

This is a RESTful API for performing CRUD (Create, Read, Update, Delete) operations on users and posts, as well as adding comments to posts.

## Endpoints

### Users

- `GET /users/{id}`: Get user by ID.
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

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Post
```json
{
  "id": 1,
  "title": "Sample Post",
  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}
```

### Comment
```json
{
  "id": 1,
  "postId": 1,
  "text": "This is a comment on the sample post."
}
```


## Running the API

1. **Install dependencies:** `npm install`
2. **Start the server:** `npm start`
3. The Server will be available at [http://localhost:3000](http://localhost:3000)

## Dependencies

- Node.js
- Express.js
- MongoDB


## Contributors

- [Lokesh R](https://github.com/lokirj7)





