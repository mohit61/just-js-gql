# JustJs-Graphql

## Installation

- Clone the repo
- Build the app using `just build server.js --static --clean`
- Execute the build `./server`

### Note
- `process.env.NODE_ENV` is changed to `just.env().NODE_ENV` in the instanceOf.js file of graphql library to make it work in just-js, do not re-install the npm module.
