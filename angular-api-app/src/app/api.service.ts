import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://gist.githubusercontent.com/krishna1234/94a8746a241ec6784a4c694d10c6d915/raw/c2ab14129870ae016e8bdc42b38e0dc6d0837177/gistfile1.txt';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
