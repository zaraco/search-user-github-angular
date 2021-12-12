import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {endpoints} from "../config/config-api";
import {Observable} from "rxjs";
import {SearchResponse} from "../models";


@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpClient: HttpClient) {
  }

  search(username: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(endpoints.search(username))
  }
}
