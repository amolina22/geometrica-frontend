import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Petición GET.
   * @param path endpoint
   * @param params parametror
   */
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params })
      .pipe();
  }

  /**
   * Petición PUT
   * @param path endpoint
   * @param params parametror
   */
  put(path: string, body: Object = {}, headers: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`, body, headers
    ).pipe(catchError(this.formatErrors));
  }

  /**
   * Petición POST.
   * @param path endpoint
   * @param params parametror
   */
  post(path: string, body: Object = {}, headers: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`, body, headers
    ).pipe(catchError(this.formatErrors));
  }

  /**
   * Petición DELETE.
   * @param path endpoint
   */
  delete(path: string, body: Object = {}): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`, body
    ).pipe(catchError(this.formatErrors));
  }

  /**
     * Notificación de error.
     * @param error Error
     */
  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
