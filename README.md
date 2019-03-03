# 👩🏼‍🔧👨🏼‍🔧👩🏼‍🔬👨🏼‍🔬 Teamy

Here is the main repository of the Teamy webapp.

## Structure

```
.
├── client             # React client 
├── server             # Server
```

## Working on teamy

```
cd server
docker compose up -d # Start Postgres and the prisma client
yarn start

cd client
yarn start
```

## Contribution

Open PRs to the master branch. They will be reviewed shortly after
Linters are very strict so it is easy to follow our style conventions
