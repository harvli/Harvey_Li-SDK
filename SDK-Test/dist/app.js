"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const harvey_li_sdk_1 = __importDefault(require("@harvli/harvey_li-sdk"));
const client = new harvey_li_sdk_1.default({});
client.getAllBooks().then((books) => {
    console.log('Getting all books');
    console.log(books);
});
client.getBookById('5cf5805fb53e011a64671582').then((book) => {
    console.log('Getting books with ID argument');
    console.log(book);
});
client.getAllChaptersOfBook('5cf5805fb53e011a64671582').then((chapters) => {
    console.log('Getting all chapters of book');
    console.log(chapters);
});
