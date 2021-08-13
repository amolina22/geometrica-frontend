import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFigura } from '../models/figura';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GeometriaService {

  constructor(
    private _apiService: ApiService
  ) { }

  /**
   *
   * @param figura Inserta una figura nueva.
   */
  insertar(figura) {
    return this._apiService.post('api/figura', figura);
  }

  /**
  * Obtiene la lista de las figuras.
  */
  listaFiguras(): Observable<IFigura[]> {
    return this._apiService.get('api/figura');
  }

  /**
  * Obtiene las figuras de un tipo
  */
  consultaTipoFigura(tipoFigura): Observable<IFigura[]> {
    return this._apiService.get(`api/figura/${tipoFigura}`);
  }
}
