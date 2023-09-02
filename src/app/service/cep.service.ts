import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }


getEnderecoPorCep(cep: string): Observable<any> {
  // Construa a URL da API do ViaCEP com o CEP fornecido.
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  // Faça a solicitação HTTP GET e mapeie a resposta para retornar apenas os dados de endereço.
  return this.http.get(url).pipe(
    map((data: any) => {
      return {
        cep: data.cep,
        logradouro: data.logradouro,
        complemento: data.complemento,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf,
        ibge: data.ibge,
      };
    })
  );
}
}
