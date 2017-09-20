import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino: string = '';

  constructor(
    private _spotifyService: SpotifyService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  buscarArtista() {
    // El subscribe es el observable que lanza la peticion http
    if (this.termino) {
      this._spotifyService.getArtistas(this.termino).subscribe();
    }

  }

  verArtista(id: string) {
    this.router.navigate(['/artista', id])
  }

}
