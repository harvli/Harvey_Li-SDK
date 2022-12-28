import { Base } from "../base";
import { Read } from "./types";

const endpoint = 'book';

// get functionality from the API, calling invoke method to fetch data from endpoints + routes
export class Get extends Base {
  getAllBooks(): Promise<Read>{
    return this.invoke(`/${endpoint}`)
  }
  getBookById(id: number): Promise<Read>{
    return this.invoke(`/${endpoint}/${id}`)
  }
  getAllChaptersOfBook(id: number): Promise<Read>{
    return this.invoke(`/${endpoint}/${id}/chapter`)
  }
}