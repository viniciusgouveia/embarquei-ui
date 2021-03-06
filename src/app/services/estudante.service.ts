import { ErrorHandlerService } from '../modulos/core/error-handler.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Estudante } from '../modulos/core/model';

@Injectable()
export class EstudanteService 
{
  estudantesUrl: string;

  constructor(private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService)
  {
    this.estudantesUrl = `${environment.apiUrl}/estudantes`;
  }

  cadastrarEstudante(estudante: Estudante): Promise<Estudante>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded'
      }),
      withCredentials: true
    };
    const body = JSON.stringify(estudante);

    return this.httpClient.post(this.estudantesUrl, body, httpOptions)
      .toPromise()
      .then(response => {
        const estudante = response as Estudante;

        return estudante;
      });
  }

  getById(id): Promise<Estudante>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      withCredentials: true
    };
    return this.httpClient.get(`${this.estudantesUrl}/${id}`, httpOptions)
      .toPromise()
      .then(response => {
        const estudante = response as Estudante;

        return estudante;
      });
  }

  atualizar(id, dados): Promise<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    const body = JSON.stringify(dados);

    return this.httpClient.put(`${this.estudantesUrl}/${id}`, body, httpOptions)
      .toPromise()
      .then((response) => {
        const estudante = response as Estudante;

        return estudante;
      });
  }

}
