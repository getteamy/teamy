# 👩🏼‍🔧👨🏼‍🔧👩🏼‍🔬👨🏼‍🔬 Teamy

Here is the main repository of the Teamy webapp.

## Structure

```
.
├── client             # Web application, wrote with React 
├── server             # GraphQL server used by clients
```

## Working on teamy

```
cd server
prisma generate      # Generate db
docker-compose up -d # Start Postgres and the prisma containers
yarn                 # Install dependencies
yarn start           # Spin-up the GraphQL server

cd client
yarn                 # Install dependencies
yarn start           # Start the webapp
```

## Contribution

Open PRs to the master branch. They will be reviewed shortly after.
Linters are very strict so it is easy to follow our style conventions
