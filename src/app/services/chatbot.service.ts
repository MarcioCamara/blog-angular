import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  private baseURL: string = 'https://api.dialogflow.com/v1/query?v=20150910';
  private token: string = '08d2c8743d9a41ac89b758468c403f79';

  constructor(private http: HttpClient) { }

  public getResponse(query: string) {
    const data = {
      query,
      lang: 'en',
      sessionId: '12345',
    };

    return this.http
      .post(`${this.baseURL}`, data, { headers: this.getHeaders() });
  }

  public getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}
