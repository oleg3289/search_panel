import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private http: HttpClient) {}

    getUser(userName: string): Observable<any> {
        return this.http.get(`http://api.github.com/users/${userName}?client_id=b05c2048d78879b5e92a&client_secret=ea2e2d2f3be39ba74d4727894be2714ac1381b04`)
    }
}