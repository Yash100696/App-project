"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AvatarComponent = /** @class */ (function () {
    function AvatarComponent() {
        this.displayName = true;
        this.width = 42;
        this.height = 42;
    }
    AvatarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AvatarComponent.prototype, "person", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AvatarComponent.prototype, "displayName", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AvatarComponent.prototype, "width", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AvatarComponent.prototype, "height", void 0);
    AvatarComponent = __decorate([
        core_1.Component({
            selector: "Avatar",
            moduleId: module.id,
            templateUrl: "./avatar.component.html",
            styleUrls: ['./avatar.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AvatarComponent);
    return AvatarComponent;
}());
exports.AvatarComponent = AvatarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF2YXRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFTekQ7SUFNQztRQUpTLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxXQUFNLEdBQUcsRUFBRSxDQUFDO0lBR3JCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVRRO1FBQVIsWUFBSyxFQUFFOzttREFBaUI7SUFDaEI7UUFBUixZQUFLLEVBQUU7O3dEQUFvQjtJQUNuQjtRQUFSLFlBQUssRUFBRTs7a0RBQVk7SUFDWDtRQUFSLFlBQUssRUFBRTs7bURBQWE7SUFKVCxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUNyQyxDQUFDOztPQUNXLGVBQWUsQ0FXM0I7SUFBRCxzQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tIFwiLi4vc2VydmljZXMvY29udGFjdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJBdmF0YXJcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9hdmF0YXIuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vYXZhdGFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBwZXJzb246IENvbnRhY3Q7XG5cdEBJbnB1dCgpIGRpc3BsYXlOYW1lID0gdHJ1ZTtcblx0QElucHV0KCkgd2lkdGggPSA0Mjtcblx0QElucHV0KCkgaGVpZ2h0ID0gNDI7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0fVxufSJdfQ==