import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class FormService {
  constructor(private http: HttpClient) {}

  sendRequest(body: unknown): Observable<unknown> {
    return this.http.post('https://backend-designers.liberty.space/stellartech/form/', body);
  }
}
