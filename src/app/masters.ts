import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Masters {
   private apiUrl = 'https://api.example.com'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  async postData(data: any): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    try {
      const response = await firstValueFrom(this.http.post(`${this.apiUrl}/endpoint`, data, { headers }));
      return response;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  }
}
