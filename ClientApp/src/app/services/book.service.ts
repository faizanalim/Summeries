import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../interfaces/Book'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  _baseURL: string = "api/Books";
  //_baseURL: string = "https://localhost:7074/";
  constructor(private http: HttpClient) { }

  getAllBooks(){
    return this.http.get<Book[]>(this._baseURL+"/GetBooks");
  }
}
