"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page, router) {
        this.page = page;
        this.router = router;
        this.opening = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    HomeComponent.prototype.newOrder = function () {
        var _this = this;
        this.opening = !this.opening;
        setTimeout(function () {
            _this.router.navigate(['/order-detail'], {
                animated: false,
                clearHistory: true
            });
        }, 300);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0Isc0RBQStEO0FBUS9EO0lBR0MsdUJBQ1MsSUFBVSxFQUNWLE1BQXdCO1FBRHhCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUoxQixZQUFPLEdBQUcsSUFBSSxDQUFDO0lBTXRCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixVQUFVLENBQUM7WUFDVixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUN2QyxRQUFRLEVBQUUsS0FBSztnQkFDZixZQUFZLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7UUFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBckJXLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ25DLENBQUM7eUNBS2MsV0FBSTtZQUNGLHlCQUFnQjtPQUxyQixhQUFhLENBc0J6QjtJQUFELG9CQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJIb21lXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0cHVibGljIG9wZW5pbmcgPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcGFnZTogUGFnZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9uc1xuXHQpIHtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHR9XG5cblx0bmV3T3JkZXIoKSB7XG5cdFx0dGhpcy5vcGVuaW5nID0gIXRoaXMub3BlbmluZztcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL29yZGVyLWRldGFpbCddLCB7XG5cdFx0XHRcdGFuaW1hdGVkOiBmYWxzZSxcblx0XHRcdFx0Y2xlYXJIaXN0b3J5OiB0cnVlXG5cdFx0XHR9KVxuXHRcdH0sIDMwMCk7XG5cdH1cbn0iXX0=