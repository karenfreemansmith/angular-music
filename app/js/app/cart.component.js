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
var CartComponent = (function () {
    function CartComponent() {
    }
    return CartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CartComponent.prototype, "albumsList", void 0);
CartComponent = __decorate([
    core_1.Component({
        selector: 'show-cart',
        template: "\n    \n    <h3>Your Cart:</h3>\n    <div *ngFor=\"let currentAlbum of albumsList\" class=\"row\">\n      <h2>{{currentAlbum.name}}</h2>\n      <h3>By <strong>{{currentAlbum.artist}}</strong>({{currentAlbum.genre}})</h3>\n      <p> {{currentAlbum.amountInCart}} x = {{currentAlbum.amountInCart * (currentAlbum.price | currency:'USD':true:'1.2-2')}} </p>\n      <p></p>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map