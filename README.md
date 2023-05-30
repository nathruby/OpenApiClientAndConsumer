# Generating the API Client

Doc Reference: https://openapi-generator.tech/docs/usage/

`openapi-generator-cli` requires an install of Java

Run the command `openapi-generator-cli generate -g typescript-axios -i ./apiClient/build/swagger.yaml -o ./apiClient/build/testClient`

The settings of the generated api client is dependent on the application settings at the time they generated the swagger.yaml file.
If no domain is provided in the swagger doc, the app's default url becomes the default.

# Running the App

Install modules with `npm i`.


Generated files like *.js should not be committed to keep the repo small.
Build apiClient and apiConsumer with `npm run build` ran to generate the js files.

To test the App both apiClient and apiConsumer need to be running. Can be done by going to the directories and running `npm start`. 

apiClient runs on `localhost:3000`, and apiConsumer runs on `localhost:3001`

