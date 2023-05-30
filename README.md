# Generating the API Client

Doc Reference: https://openapi-generator.tech/docs/usage/

Run the command `openapi-generator-cli generate -g typescript-axios -i ./apiClient/build/swagger.yaml -o ./apiClient/build/testClient`

The settings of the generated api client is dependent on the application settings at the time they generated the swagger.yaml file.
If no domain is provided in the swagger doc, the app's default url becomes the default.
