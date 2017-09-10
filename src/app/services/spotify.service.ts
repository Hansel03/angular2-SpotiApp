import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {


  artistas: any[] = [];

  urlBusqueda: string = 'https://api.spotify.com/v1/search';
  urlArtista: string = 'https://api.spotify.com/v1/artists';

  constructor(private http: Http) { }


  getArtistas(termino: string) {

    let headers = new Headers();

    headers.append('authorization', 'Bearer BQBuseiUlUOFkaqqUTp8Z1bJzr6BMvru9exVtElB9sFMLC5hx2Mt96JxZZ0VAA2qcG2Re1y5kyRg0RBrkE1pyA');

    let query = `?q=${termino}&type=artist`
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers })
      .map(res => {
        //console.log(res);
        this.artistas = res.json().artists.items;
      })

  }

}
