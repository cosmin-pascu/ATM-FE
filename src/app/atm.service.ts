import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { banknote } from "./banknote";

@Injectable({
    providedIn: 'root'
  })
export class AtmService {
    private apiBaseUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    public withdrawMoney(currency: string, sum: number): Observable<banknote[]> {
        return this.http.get<banknote[]>(`${this.apiBaseUrl}/withdraw?currency=${currency}&sum=${sum}`);
    }

    public getAllBanknotes(): Observable<banknote[]> {
        return this.http.get<banknote[]>(`${this.apiBaseUrl}/all-banknotes`);
    }
}