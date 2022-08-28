# ECommerce

This project is created to help beginner front-end developers to learn working with real life-like back-end servers and show off their skills.

The API is built with GraphQL Apollo Server. To consume it you can use [GraphQL Apollo Client](https://www.apollographql.com/docs/react/).

> **This project is not production ready by any means and should not contain any sensitive data.**

## What you can build

A front-end app around this API. This will be an E-commerce website.

- There can be an admin panel
  to create warehouses (where goods will are stored), products (that users can buy), see all orders
  that were made and update their statuses.
- There will be a "gallery" of all goods and users will be able to pick the goods and then checkout.

## Starting the project

```bash
git clone https://github.com/gultyaev/e-commerce-nest-graphql.git
cd e-commerce-nest-graphql
npm i
npm start
```

This will:

1. Clone the repo
2. Install packages
3. Launch dev server

API URL is `http://localhost:3333/graphq`. The same URL can be opened in the browser to discover all available queries and mutations.

## Prerequisites

- Understanding of [what GraphQL is](https://graphql.org/) and how to work with it.
- Understanding of [JWT](https://jwt.io/).

## Authenticating

Server provides you with the mutation `createUser` to create a new user.
This user credentials are used then to authenticate using the `authenticateUser` mutation.

Then authentication is done by providing JWT in the headers for requests.

**All mutations** but `createUser`, `authenticateUser`, `createOrder` require user to be authenticated.

Queries **don't need** authentication but `order`, `orders`.
