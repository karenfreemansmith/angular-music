import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';
import { Cart } from './cart.model';

@Component ({
  selector: "list-albums",
  template: `

    <div class="row">
      <div class="col-xs-12">
        <select (change)="onChange($event.target.value)" class="form-control">
          <option value = "All" selected>All Genres</option>
          <option value = "Rock">Rock</option>
          <option value = "Folk">Folk</option>
          <option value = "Country">Country</option>
        </select>
      </div>
    </div>

    <div *ngFor="let currentAlbum of albumsList | genrePipe:selectedGenre" (click)="selectAlbum(currentAlbum)">
      <h2>{{currentAlbum.name}} ({{currentAlbum.genre}})</h2>
      <img src='build/images/{{currentAlbum.albumArtFilePath}}' alt='album cover' class='image-albumCover'>
      <p>By <strong>{{currentAlbum.artist}}</strong>: {{currentAlbum.price | currency:'USD':true:'1.2-2'}} </p>
      <p *ngIf="currentAlbum.amountInStock>0">Only {{currentAlbum.amountInStock}} left in stock!
         <!--<button *ngIf="currentUserCart.userName==='guest'" type="button">Add to Cart</button>-->
      </p>
      <!--<p>{{currentUserCart.userName}}</p>-->
      <p *ngIf="currentAlbum.amountInStock<=0" class="warning">CURRENTLY OUT OF STOCK</p>
    </div>
    `
})

export class ListAlbumsComponent {
  @Input() albumsList: Album[];
  //@Input() currentUserCart: Cart;
  @Output() selectedAlbumSender = new EventEmitter();

  selectedGenre: string = "All";

  selectAlbum(albumToEdit: Album) {
    this.selectedAlbumSender.emit(albumToEdit);
  }
  onChange(optionFromMenu) {
    this.selectedGenre = optionFromMenu;
  }
}
