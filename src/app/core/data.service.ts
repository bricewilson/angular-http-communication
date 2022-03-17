import { Injectable } from '@angular/core';

import { allBooks, allReaders } from 'app/data';
import { Reader } from "app/models/reader";
import { Book } from "app/models/book";
import { BookTrackerError } from 'app/models/bookTrackerError';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { OldBook } from 'app/models/oldBook';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  mostPopularBook: Book = allBooks[0];

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  // get 成功返回 200 OK 或者 命中缓存 304 OK
  // body 是 JSON 对象，可以被序列化为 <> 泛型里指定的对象
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`/api/books/${id}`, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'my-toooooooken'
      })
    })
  }

  getOldBookById(id: number): Observable<OldBook> {
    return this.http.get<Book>(`/api/books/${id}`)
      .pipe(
        map((b: Book) => <OldBook>{
          oldTitle: b.title,
          year: b.publicationYear
        }),
        tap(
          classicBook => console.log(classicBook)
        )
      )
  }

  // post 成功返回 201 Created
  // body 是已经包含 id 的 Book JSON 对象，这里被序列化为 Book 对象
  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>('/api/books', newBook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' // 不加也是这个，猜测是 Http 协议默认的取值
      })
    });
  }

  // put 成功返回 204 No Content
  // body 没有
  updateBook(updateBook: Book): Observable<void> {
    return this.http.put<void>(`/api/books/${updateBook.bookID}`, updateBook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  // delete 成功返回 204 No Content
  deleteBook(bookID: number): Observable<void> {
    return this.http.delete<void>(`/api/books/${bookID}`)
  }
}
