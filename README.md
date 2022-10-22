# RICK and MORTY WORKSHOP 👾 🤖 💩 👽

Website using Rick and Morty APIs. It lists Rick and Morty's characters.

### 👉 [Live Preview](https://morty-smith.netlify.app)

## Specification

#### System Specification

- Node: 14.17.6
- npm: 7.22.0

#### .env Variables

- `REACT_APP_RM_API` : Rick and Morty api gateway url (https://rickandmortyapi.com/graphql)

## Setup Steps

Install package with `yarn`

Copy example environment `cp .env.example .env`

Fill blank fields on `.env`

Start the project with `yarn start`

Test the project `yarn test`

## Structure

├─ **assets** : images & styles resources

├─ **components** : pure components

├─ **containers** : complex components with store access

├─ **graphql** : grapqhl client configurations & queries

├─ **layout** : layout components & template

├─ **screens** : main screens

├─ **types** : typescript type definition
