import { Base } from '../base';
import { NewRead, Read } from "./types";

const endpoint = 'book';

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