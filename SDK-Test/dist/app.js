"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Harvey_SDK_1 = __importDefault(require("../../Harvey-SDK"));
const client = new Harvey_SDK_1.default({});
client.getAllBooks().then((books) => {
    console.log(books);
});
client.getBookById('5cf5805fb53e011a64671582').then((book) => {
    console.log(book);
});
client.getAllChaptersOfBook('5cf5805fb53e011a64671582').then((chapters) => {
    console.log(chapters);
});
