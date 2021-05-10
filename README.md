# Boilerplate para proyecto con useContext

Un proyecto base como alternativa a usar Redux

## Run Locally

Clone the project

```bash
  git clone https://github.com/oscarvalenzuela25/boilerplate_useContext
```

Go to the project directory

```bash
  cd boilerplate_useContext
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn start
```

## API Reference

#### Get all posts

```http
  GET https://jsonplaceholder.typicode.com/posts
```

#### Get post

```http
  GET https://jsonplaceholder.typicode.com/posts/${postId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `postId`  | `string` | **Required**. Id of item to fetch |

#### Get comments

```http
  GET https://jsonplaceholder.typicode.com/posts/${postId}/comments
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `postId`  | `string` | **Required**. Id of item to fetch |

## Authors

-   [@oscarvalenzuela25](https://github.com/oscarvalenzuela25)

## Documentation

[Api jsonplaceholder Documentation](https://jsonplaceholder.typicode.com/)
