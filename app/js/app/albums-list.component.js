"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var cart_model_1 = require("./cart.model");
var ListAlbumsComponent = (function () {
    function ListAlbumsComponent() {
        this.selectedAlbumSender = new core_1.EventEmitter();
        this.addAlbumToCartSender = new core_1.EventEmitter();
        this.selectedGenre = "All";
        this.selectedArtist = "All";
    }
    ListAlbumsComponent.prototype.selectAlbum = function (albumToEdit) {
        this.selectedAlbumSender.emit(albumToEdit);
    };
    ListAlbumsComponent.prototype.onChangeGenre = function (optionFromMenu) {
        this.selectedGenre = optionFromMenu;
    };
    ListAlbumsComponent.prototype.onChangeArtist = function (optionFromMenu) {
        this.selectedArtist = optionFromMenu;
    };
    ListAlbumsComponent.prototype.addToCartChild = function (chosenAlbum) {
        this.addAlbumToCartSender.emit(chosenAlbum);
    };
    return ListAlbumsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListAlbumsComponent.prototype, "albumsList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", cart_model_1.Cart)
], ListAlbumsComponent.prototype, "currentUserCart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ListAlbumsComponent.prototype, "selectedAlbumSender", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ListAlbumsComponent.prototype, "addAlbumToCartSender", void 0);
ListAlbumsComponent = __decorate([
    core_1.Component({
        selector: "list-albums",
        template: "\n\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <select (change)=\"onChangeGenre($event.target.value)\" class=\"form-control\">\n          <option value = \"All\" selected>All Genres</option>\n          <option value = \"Rock\">Rock</option>\n          <option value = \"Folk\">Folk</option>\n          <option value = \"Country\">Country</option>\n        </select>\n      </div>\n      <div class=\"col-xs-6\">\n        <select (change)=\"onChangeArtist($event.target.value)\" class=\"form-control\">\n          <option value = \"All\" selected>All Artists</option>\n          <option *ngFor=\"let album of albumsList\" value=\"{{album.artist}}\">{{album.artist}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div *ngFor=\"let currentAlbum of albumsList | genrePipe:selectedGenre | artistPipe:selectedArtist\" class=\"row\">\n      <hr>\n      <div class=\"col-md-8 clickable\" (click)=\"selectAlbum(currentAlbum)\">\n        <h2>{{currentAlbum.name}}</h2>\n        <h3>By <strong>{{currentAlbum.artist}}</strong>({{currentAlbum.genre}})</h3>\n        <img src='build/images/{{currentAlbum.albumArtFilePath}}' alt='album cover' class='image-albumCover'>\n      </div>\n      <div class=\"col-md-4 purchase-info\">\n        <h3>{{currentAlbum.price | currency:'USD':true:'1.2-2'}} </h3>\n        <h4 *ngIf=\"currentAlbum.amountInStock>0\">Only {{currentAlbum.amountInStock}} left in stock!</h4>\n        <br>\n        <button type=\"button\" (click)=\"addToCartChild(currentAlbum)\" class=\"form-control\">Add to Cart</button>\n        <h4 *ngIf=\"currentAlbum.amountInStock<=0\" class=\"warning\">CURRENTLY OUT OF STOCK</h4>\n      </div>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], ListAlbumsComponent);
exports.ListAlbumsComponent = ListAlbumsComponent;
//# sourceMappingURL=albums-list.component.js.map