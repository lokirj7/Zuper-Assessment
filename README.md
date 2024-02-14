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

![WhatsApp Image 2024-02-14 at 10 18 13 AM](https://github.com/lokirj7/Zuper-Assessment/assets/87615276/3fe3c88c-511e-4341-bf62-22871736c0cb)

```json
{
  "username": LokeshR,
  "email": "iamloki765@gmail.com",
  "password": "lokesh"
}
```

##### User Signin

![WhatsApp Image 2024-02-14 at 10 18 13 AM (1)](https://github.com/lokirj7/Zuper-Assessment/assets/87615276/fc28aed7-f006-4307-9501-0eaf689a852d)

```json
{
  "email": "iamloki765@gmail.com",
  "password": "lokesh"
}
```

### Post

##### Create Post

![WhatsApp Image 2024-02-14 at 10 18 14 AM](https://github.com/lokirj7/Zuper-Assessment/assets/87615276/e2e8970d-49e3-4957-83f1-704009dd37ee)

```json
{
  "title": "Pets",
  "body": "Dog",
  "location": "Chennai."
}
```

##### View All Posts
Registered users can view all posts
![WhatsApp Image 2024-02-14 at 10 18 13 AM (2)](https://github.com/lokirj7/Zuper-Assessment/assets/87615276/dcdb4356-bbaf-4e1c-826b-7617b6190f2a)


### Comment

##### Create Comment

![WhatsApp Image 2024-02-14 at 10 18 14 AM (1)](https://github.com/lokirj7/Zuper-Assessment/assets/87615276/e0aefbce-8231-4b0e-bd05-208fd318ab9d)

```json
{
  "postId": "65cc441598f1745a55f1feef",
  "comment": "Beautiful Dog"
}
```


## Running the API

1. **Install dependencies:** `npm install`
2. **Start the server:** `npm start`
3. The Server will be available at [http://localhost:8001](http://localhost:8001)

## Dependencies

- Node.js
- Express.js
- MongoDB


## Contributors

- [Lokesh R](https://github.com/lokirj7)





