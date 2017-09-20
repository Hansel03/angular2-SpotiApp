import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {


  artistas: any[] = [];

  urlBusqueda: string = 'https://api.spotify.com/v1/search';
  urlArtista: string = 'https://api.spotify.com/v1/artists';

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

    headers.append('authorization', 'Bearer BQA5paxK8x6jfAsfGEZm4YvCAEBcrK6T5ot7BzxC0B5pwmM0_GshMnx8y3IB0ns9p77wGepnpL9gAVJki_WJdQ');

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

    headers.append('authorization', 'Bearer BQA5paxK8x6jfAsfGEZm4YvCAEBcrK6T5ot7BzxC0B5pwmM0_GshMnx8y3IB0ns9p77wGepnpL9gAVJki_WJdQ');

    let query = `/${id}`
    let url = this.urlArtista + query;

    return this.http.get(url, { headers })
      .map(res => {
        // console.log(res.json());
        // this.artistas = res.json().artists.items;
        return res.json();
      })

  }

}
