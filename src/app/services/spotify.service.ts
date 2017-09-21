import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {


  artistas: any[] = [];

  urlBusqueda: string = 'https://api.spotify.com/v1/search';
  urlArtista: string = 'https://api.spotify.com/v1/artists';
  token: string = 'BQAInqJ1p1sGrbMPpSxT0jbhKUb3JOeYym2FH-2GJqQ2e4Ni9RYga70Jtb6SEmPnCALNLjuM-8yHAvW4T43O9A';

  constructor(private http: Http) { }

  /**
   * Servicio que busca los distintos artistas en Spotify
   * 
   * @param {string} termino, de la busqueda 
   * @returns Lista de artistas encontrados en la busqueda
   * @memberof SpotifyService.getArtistas
   */
  getArtistas(termino: string) {

    let headers = new Headers();

    headers.append('authorization', 'Bearer ' + this.token);

    let query = `?q=${termino}&type=artist`
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers })
      .map(res => {
        //console.log(res);
        this.artistas = res.json().artists.items;
      })

  }

  /**
   * 
   * 
   * @param {string} id  
   * @returns los datos de un artista
   * @memberof SpotifyService
   */
  getArtista(id: string) {

    let headers = new Headers();

    headers.append('authorization', 'Bearer ' + this.token);

    let query = `/${id}`
    let url = this.urlArtista + query;

    return this.http.get(url, { headers })
      .map(res => {
        // console.log(res.json());
        return res.json();
      })

  }


  getTop(id: string) {

    let headers = new Headers();

    headers.append('authorization', 'Bearer ' + this.token);

    let query = `/${id}/top-tracks?country=US`
    let url = this.urlArtista + query;

    return this.http.get(url, { headers })
      .map(res => {
        console.log(res.json().tracks);
        return res.json().tracks;
      })

  }

}
