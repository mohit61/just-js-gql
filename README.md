# JustJs-Graphql

## Installation

- Install [just](https://github.com/just-js/just)(note: just works in linux only)
- Clone the repo
- Build the app using `just build server.js --static --clean`
- Execute the build `./server`
- Hit the get api `http://localhost:3000/graphql?query={firstName,lastName}`

### Note
- `process.env.NODE_ENV` is changed to `just.env().NODE_ENV` in the instanceOf.js file of graphql library to make it work in just-js, do not re-install the npm module.
