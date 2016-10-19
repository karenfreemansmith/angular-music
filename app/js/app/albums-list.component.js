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
var ListAlbumsComponent = (function () {
    function ListAlbumsComponent() {
        this.selectedAlbumSender = new core_1.EventEmitter();
        this.selectedGenre = "All";
    }
    ListAlbumsComponent.prototype.selectAlbum = function (albumToEdit) {
        this.selectedAlbumSender.emit(albumToEdit);
    };
    ListAlbumsComponent.prototype.onChange = function (optionFromMenu) {
        this.selectedGenre = optionFromMenu;
    };
    return ListAlbumsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListAlbumsComponent.prototype, "albumsList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ListAlbumsComponent.prototype, "selectedAlbumSender", void 0);
ListAlbumsComponent = __decorate([
    core_1.Component({
        selector: "list-albums",
        template: "\n\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <select (change)=\"onChange($event.target.value)\" class=\"form-control\">\n          <option value = \"All\" selected>All Genres</option>\n          <option value = \"Rock\">Rock</option>\n          <option value = \"Folk\">Folk</option>\n          <option value = \"Country\">Country</option>\n        </select>\n      </div>\n    </div>\n\n    <div *ngFor=\"let currentAlbum of albumsList | genrePipe:selectedGenre\" (click)=\"selectAlbum(currentAlbum)\">\n      <h2>{{currentAlbum.name}} ({{currentAlbum.genre}})</h2>\n      <img src='build/images/{{currentAlbum.albumArtFilePath}}' alt='album cover' class='image-albumCover'>\n      <p>By <strong>{{currentAlbum.artist}}</strong>: {{currentAlbum.price | currency:'USD':true:'1.2-2'}} </p>\n      <p *ngIf=\"currentAlbum.amountInStock>0\">IN STOCK</p>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], ListAlbumsComponent);
exports.ListAlbumsComponent = ListAlbumsComponent;
//# sourceMappingURL=albums-list.component.js.map