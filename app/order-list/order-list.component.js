"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var platform_1 = require("platform");
var dialogs = require("tns-core-modules/ui/dialogs");
var services_1 = require("./../services");
var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(page, router, contact, order) {
        this.page = page;
        this.router = router;
        this.contact = contact;
        this.order = order;
        this.orders = this.order.orders;
        this.page.actionBarHidden = true;
    }
    OrderListComponent.prototype.ngOnInit = function () {
    };
    OrderListComponent.prototype.selectItem = function (orderTaker, item) {
        var _this = this;
        dialogs.action({
            message: item.name + " (" + item.quantity + ")",
            cancelButtonText: "Cancel",
            actions: ["Edit item", "Remove item"]
        }).then(function (result) {
            if (result == "Edit item") {
                _this.createAndUpdate(orderTaker, item);
            }
            else if (result == "Remove item") {
                _this.order.removeItem(orderTaker, item);
            }
            _this.orders = _this.order.orders;
        });
    };
    OrderListComponent.prototype.getContact = function (id) {
        return this.contact.findContact(id);
    };
    OrderListComponent.prototype.getSubTotal = function (order) {
        return this.order.subTotal(order);
    };
    OrderListComponent.prototype.getGrandTotal = function () {
        return this.order.grandTotal();
    };
    OrderListComponent.prototype.removeOrder = function (orderId) {
        this.order.removeOrder(orderId);
    };
    OrderListComponent.prototype.createAndUpdate = function (orderTaker, item) {
        var queryParams = {
            orderTaker: orderTaker,
            item: JSON.stringify(item)
        };
        this.router.navigate(['/order-detail'], {
            queryParams: queryParams,
            transition: {
                name: 'slideTop'
            },
            clearHistory: true
        });
    };
    OrderListComponent.prototype.close = function () {
        this.order.clear();
        this.router.navigate(['/home'], {
            animated: false,
            clearHistory: true
        });
    };
    OrderListComponent.prototype.onItemLoading = function (args) {
        if (platform_1.isIOS) {
            var iosCell = args.ios;
            iosCell.selectionStyle = UITableViewCellSelectionStyle.None;
        }
    };
    OrderListComponent = __decorate([
        core_1.Component({
            selector: "OrderList",
            moduleId: module.id,
            templateUrl: "./order-list.component.html",
            styleUrls: ['./order-list.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            services_1.ContactService,
            services_1.OrderService])
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0Isc0RBQStEO0FBQy9ELHFDQUFpQztBQUNqQyxxREFBdUQ7QUFFdkQsMENBQTBFO0FBVTFFO0lBR0MsNEJBQ1MsSUFBVSxFQUNWLE1BQXdCLEVBQ3hCLE9BQXVCLEVBQ3ZCLEtBQW1CO1FBSG5CLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBRTNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxVQUFrQixFQUFFLElBQVU7UUFBekMsaUJBYUM7UUFaQSxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ2QsT0FBTyxFQUFLLElBQUksQ0FBQyxJQUFJLFVBQUssSUFBSSxDQUFDLFFBQVEsTUFBRztZQUMxQyxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7U0FDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDYixJQUFJLE1BQU0sSUFBSSxXQUFXLEVBQUU7Z0JBQzFCLEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNLElBQUksTUFBTSxJQUFJLGFBQWEsRUFBRTtnQkFDbkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxLQUFZO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDBDQUFhLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxPQUFlO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLFVBQWtCLEVBQUUsSUFBVTtRQUM3QyxJQUFJLFdBQVcsR0FBRztZQUNqQixVQUFVLFlBQUE7WUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDMUIsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDdkMsV0FBVyxhQUFBO1lBQ1gsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxVQUFVO2FBQ2hCO1lBQ0QsWUFBWSxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGtDQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDL0IsUUFBUSxFQUFFLEtBQUs7WUFDZixZQUFZLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsMENBQWEsR0FBYixVQUFjLElBQUk7UUFDakIsSUFBSSxnQkFBSyxFQUFFO1lBQ1YsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN6QixPQUFPLENBQUMsY0FBYyxHQUFHLDZCQUE2QixDQUFDLElBQUksQ0FBQztTQUM1RDtJQUNGLENBQUM7SUEzRVcsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUN6QyxDQUFDO3lDQUtjLFdBQUk7WUFDRix5QkFBZ0I7WUFDZix5QkFBYztZQUNoQix1QkFBWTtPQVBoQixrQkFBa0IsQ0E0RTlCO0lBQUQseUJBQUM7Q0FBQSxBQTVFRCxJQTRFQztBQTVFWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cbmltcG9ydCB7IENvbnRhY3RTZXJ2aWNlLCBPcmRlclNlcnZpY2UsIE9yZGVyLCBJdGVtIH0gZnJvbSBcIi4vLi4vc2VydmljZXNcIjtcblxuZGVjbGFyZSB2YXIgVUlUYWJsZVZpZXdDZWxsU2VsZWN0aW9uU3R5bGU7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJPcmRlckxpc3RcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9vcmRlci1saXN0LmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL29yZGVyLWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHB1YmxpYyBvcmRlcnM6IE9yZGVyW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBwYWdlOiBQYWdlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuXHRcdHByaXZhdGUgY29udGFjdDogQ29udGFjdFNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBvcmRlcjogT3JkZXJTZXJ2aWNlXG5cdCkge1xuXHRcdHRoaXMub3JkZXJzID0gdGhpcy5vcmRlci5vcmRlcnM7XG5cdFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0fVxuXG5cdHNlbGVjdEl0ZW0ob3JkZXJUYWtlcjogbnVtYmVyLCBpdGVtOiBJdGVtKSB7XG5cdFx0ZGlhbG9ncy5hY3Rpb24oe1xuXHRcdFx0bWVzc2FnZTogYCR7aXRlbS5uYW1lfSAoJHtpdGVtLnF1YW50aXR5fSlgLFxuXHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcblx0XHRcdGFjdGlvbnM6IFtcIkVkaXQgaXRlbVwiLCBcIlJlbW92ZSBpdGVtXCJdXG5cdFx0fSkudGhlbihyZXN1bHQgPT4ge1xuXHRcdFx0aWYgKHJlc3VsdCA9PSBcIkVkaXQgaXRlbVwiKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlQW5kVXBkYXRlKG9yZGVyVGFrZXIsIGl0ZW0pO1xuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHQgPT0gXCJSZW1vdmUgaXRlbVwiKSB7XG5cdFx0XHRcdHRoaXMub3JkZXIucmVtb3ZlSXRlbShvcmRlclRha2VyLCBpdGVtKTtcblx0XHRcdH1cblx0XHRcdHRoaXMub3JkZXJzID0gdGhpcy5vcmRlci5vcmRlcnM7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXRDb250YWN0KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGFjdC5maW5kQ29udGFjdChpZCk7XG5cdH1cblxuXHRnZXRTdWJUb3RhbChvcmRlcjogT3JkZXIpIHtcblx0XHRyZXR1cm4gdGhpcy5vcmRlci5zdWJUb3RhbChvcmRlcik7XG5cdH1cblxuXHRnZXRHcmFuZFRvdGFsKCkge1xuXHRcdHJldHVybiB0aGlzLm9yZGVyLmdyYW5kVG90YWwoKTtcblx0fVxuXG5cdHJlbW92ZU9yZGVyKG9yZGVySWQ6IG51bWJlcikge1xuXHRcdHRoaXMub3JkZXIucmVtb3ZlT3JkZXIob3JkZXJJZCk7XG5cdH1cblxuXHRjcmVhdGVBbmRVcGRhdGUob3JkZXJUYWtlcjogbnVtYmVyLCBpdGVtOiBJdGVtKSB7XG5cdFx0bGV0IHF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0b3JkZXJUYWtlcixcblx0XHRcdGl0ZW06IEpTT04uc3RyaW5naWZ5KGl0ZW0pXG5cdFx0fTtcblxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL29yZGVyLWRldGFpbCddLCB7XG5cdFx0XHRxdWVyeVBhcmFtcyxcblx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0bmFtZTogJ3NsaWRlVG9wJ1xuXHRcdFx0fSxcblx0XHRcdGNsZWFySGlzdG9yeTogdHJ1ZVxuXHRcdH0pO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5vcmRlci5jbGVhcigpO1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSwge1xuXHRcdFx0YW5pbWF0ZWQ6IGZhbHNlLFxuXHRcdFx0Y2xlYXJIaXN0b3J5OiB0cnVlXG5cdFx0fSk7XG5cdH1cblxuXHRvbkl0ZW1Mb2FkaW5nKGFyZ3MpIHtcblx0XHRpZiAoaXNJT1MpIHtcblx0XHRcdGNvbnN0IGlvc0NlbGwgPSBhcmdzLmlvcztcblx0XHRcdGlvc0NlbGwuc2VsZWN0aW9uU3R5bGUgPSBVSVRhYmxlVmlld0NlbGxTZWxlY3Rpb25TdHlsZS5Ob25lO1xuXHRcdH1cblx0fVxufSJdfQ==import { Component, OnInit } from "@angular/core";
