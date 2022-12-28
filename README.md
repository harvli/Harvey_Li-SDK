# Harvey Li - SDK

To install the SDK, in your application directory, run in the terminal:

```
npm install @harvli/harvey_li-sdk
```

To use the SDK:
Import Typicode from the package in your file and create a client

```
import Typicode from '@harvli/harvey_li-sdk'

const client = new Typicode({});
```

You can now use any of the three methods to extract data from the LOTR API:

```
client.getAllBooks()

client.getBookById('id')

client.getAllChaptersOfBook('id')
```

# Testing
To test the SDK, you can fork and clone this repo and then go into the Harvey-SDK directory and run:

```
npm run build
```

Next, you can now leave the Harvey-SDK directory and go into the SDK-Test, and run in your terminal: (ensure that you have typescript installed globally, or else tsc will not run)

```
tsc

node dist/app.js
```

The results should print in your terminal now!
