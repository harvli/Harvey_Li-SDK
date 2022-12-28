# SDK Design

This SDK Design is composed of setup files under the src folder and action files needed to extract data from the API.

base.ts file under src folder handles the setup, fetch calls, headers, and base URL directory of the API for the SDK.

./src/read/index.ts file handles the methods needed to extract the data from the API, for the '/book' endpoint and its respective routes with the given ID.

./src/index.ts file bundles together all of our components of our SDK.