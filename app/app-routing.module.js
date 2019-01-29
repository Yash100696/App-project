"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var order_list_component_1 = require("./order-list/order-list.component");
var order_detail_component_1 = require("./order-detail/order-detail.component");
var home_component_1 = require("./home/home.component");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "order-list", component: order_list_component_1.OrderListComponent },
    { path: "order-detail", component: order_detail_component_1.OrderDetailComponent },
    { path: "home", component: home_component_1.HomeComponent }
];
exports.navigatableComponents = [
    order_list_component_1.OrderListComponent,
    order_detail_component_1.OrderDetailComponent,
    home_component_1.HomeComponent
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSwwRUFBdUU7QUFDdkUsZ0ZBQTZFO0FBQzdFLHdEQUFzRDtBQUV0RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUU7SUFDckQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTtJQUN6RCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7Q0FDN0MsQ0FBQztBQUVXLFFBQUEscUJBQXFCLEdBQUc7SUFDakMseUNBQWtCO0lBQ2xCLDZDQUFvQjtJQUNwQiw4QkFBYTtDQUNoQixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPcmRlckxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9vcmRlci1saXN0L29yZGVyLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmRlckRldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJvcmRlci1saXN0XCIsIGNvbXBvbmVudDogT3JkZXJMaXN0Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIm9yZGVyLWRldGFpbFwiLCBjb21wb25lbnQ6IE9yZGVyRGV0YWlsQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl07XG5cbmV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXG4gICAgT3JkZXJMaXN0Q29tcG9uZW50LFxuICAgIE9yZGVyRGV0YWlsQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=