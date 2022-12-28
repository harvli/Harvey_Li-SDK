# Harvey Li - SDK

### Built with:
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

### To install the SDK, in your application directory, run in the terminal:

```
npm install @harvli/harvey_li-sdk
```
<br/>

### To use the SDK:
Import Typicode from the package in your file and create a client

```
import Typicode from '@harvli/harvey_li-sdk'

const client = new Typicode({});
```
<br/>

You can now use any of the three methods to extract data from the [LOTR API](https://the-one-api.dev/):

```
client.getAllBooks()

client.getBookById('id')

client.getAllChaptersOfBook('id')
```
<br/>

# Testing

To test the SDK, you can fork and clone this repo and then go into the Harvey-SDK directory and run:

```
npm run build
```
<br/>
Next, leave the Harvey-SDK directory and go to the SDK-Test directory, then run in your terminal: (ensure that you have typescript installed globally, or else tsc will not run)

```
tsc

node dist/app.js
```
<br/>

### The results should print in your terminal now!

<br/>

### Connect with me on LinkedIn and GitHub!
- Harvey Li [LinkedIn](https://www.linkedin.com/in/harvey-li/) | [GitHub](https://github.com/harvli)
