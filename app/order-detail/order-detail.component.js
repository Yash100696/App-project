"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var page_1 = require("ui/page");
var platform_1 = require("platform");
var utils = require("utils/utils");
var frame = require("ui/frame");
var router_2 = require("nativescript-angular/router");
var contact_service_1 = require("./../services/contact.service");
var order_service_1 = require("./../services/order.service");
var AVATAR_LENGTH = 80;
var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(page, route, router, fb, contact, order) {
        var _this = this;
        this.page = page;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.contact = contact;
        this.order = order;
        this.orderTaker = 0;
        this.currentDetailType = 'profile';
        this.halfScreenHeight = (platform_1.screen.mainScreen.heightDIPs / 2) - 100;
        this.halfScreenWidth = (platform_1.screen.mainScreen.widthDIPs / 2) - 40;
        this.prevDeltaX = 0;
        this.page.actionBarHidden = true;
        this.persons = this.contact.contacts;
        this.setDefaultItem();
        this.route.queryParams.subscribe(function (params) {
            if (params['item']) {
                _this.item = JSON.parse(params['item']);
            }
            _this.defaultPersonX = _this.getSnapPosition(0, params['orderTaker'] || 0);
        });
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        this.container.nativeElement.translateY = this.halfScreenHeight;
    };
    OrderDetailComponent.prototype.setDefaultItem = function () {
        this.item = {
            id: null,
            name: '',
            price: '',
            quantity: ''
        };
    };
    OrderDetailComponent.prototype.saveOrder = function (item) {
        this.order.addOrder(this.orderTaker, item);
        this.goToList();
    };
    OrderDetailComponent.prototype.goToList = function () {
        this.router.navigate(['/order-list'], {
            transition: {
                name: 'slideBottom'
            },
            clearHistory: true
        });
    };
    OrderDetailComponent.prototype.newItem = function (item) {
        this.order.addOrder(this.orderTaker, item);
        this.setDefaultItem();
        this.selectItemDetail(null, 'profile');
    };
    OrderDetailComponent.prototype.setActiveInput = function (detailType) {
        if (detailType === 'profile') {
            this.selectItemDetail(null, detailType);
        }
    };
    OrderDetailComponent.prototype.onPanEvent = function (args, container) {
        var newX = container.translateX + args.deltaX - this.prevDeltaX;
        switch (args.state) {
            case 0:
                this.prevDeltaX;
                break;
            case 2:
                container.translateX = newX;
                this.prevDeltaX = args.deltaX;
                break;
            case 3:
                container.animate({
                    translate: { x: this.getSnapPosition(newX), y: 0 },
                    duration: 200
                });
                this.prevDeltaX = 0;
        }
    };
    OrderDetailComponent.prototype.getSnapPosition = function (positionX, index) {
        var closest = function (arr) { return function (val) { return arr.reduce(function (p, n) { return Math.abs(p) > Math.abs(n - val) ? n - val : p; }, Infinity) + val; }; };
        var snapList = [];
        var currentWidth = this.halfScreenWidth;
        for (var i = 0; i < this.persons.length; i++) {
            snapList.push(currentWidth);
            currentWidth -= AVATAR_LENGTH;
        }
        if (index !== undefined) {
            this.orderTaker = index;
            return snapList[index];
        }
        var position = closest(snapList)(positionX);
        this.orderTaker = snapList.indexOf(position);
        return position;
    };
    OrderDetailComponent.prototype.selectItemDetail = function (inputItem, selectedDetail) {
        var tmpHeight = this.halfScreenHeight;
        var currentHeight = {
            'profile': tmpHeight,
            'name': platform_1.isIOS ? 100 : 0,
            'quantity': -((tmpHeight / 2) + 30),
            'price': -(tmpHeight + (platform_1.isIOS ? 10 : 30))
        };
        if (this.currentDetailType === selectedDetail) {
            return;
        }
        this.currentDetailType = selectedDetail;
        if (inputItem && selectedDetail !== 'profile') {
            if (platform_1.isIOS) {
                inputItem.ios.inputAccessoryView = UIView.alloc().init();
            }
            inputItem.focus();
        }
        else {
            this.dismissSoftKeybaord();
        }
        this.container.nativeElement.animate({
            translate: { x: 0, y: currentHeight[selectedDetail] },
            duration: 200
        });
    };
    OrderDetailComponent.prototype.isSelected = function (name) {
        return this.currentDetailType === name;
    };
    OrderDetailComponent.prototype.getSelectedPerson = function () {
        var person = this.contact.findContact(this.orderTaker);
        return person ? person.name.firstName : 'PERSON';
    };
    OrderDetailComponent.prototype.dismissSoftKeybaord = function () {
        if (platform_1.isIOS) {
            frame.topmost().nativeView.endEditing(true);
        }
        else {
            utils.ad.dismissSoftInput();
        }
    };
    OrderDetailComponent.prototype.close = function () {
        this.dismissSoftKeybaord();
        if (this.order.orders.length) {
            return this.goToList();
        }
        this.router.navigate(['/home'], {
            animated: false,
            clearHistory: true
        });
    };
    __decorate([
        core_1.ViewChild('container'),
        __metadata("design:type", core_1.ElementRef)
    ], OrderDetailComponent.prototype, "container", void 0);
    OrderDetailComponent = __decorate([
        core_1.Component({
            selector: "OrderDetail",
            moduleId: module.id,
            templateUrl: "./order-detail.component.html",
            styleUrls: ['./order-detail.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            forms_1.FormBuilder,
            contact_service_1.ContactService,
            order_service_1.OrderService])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());
exports.OrderDetailComponent = OrderDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVyLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBaUQ7QUFDakQsc0NBQTBFO0FBQzFFLHdDQUFvRTtBQUNwRSxnQ0FBK0I7QUFDL0IscUNBQXlDO0FBQ3pDLG1DQUFxQztBQUNyQyxnQ0FBa0M7QUFHbEMsc0RBQStEO0FBRS9ELGlFQUF3RTtBQUN4RSw2REFBd0Y7QUFFeEYsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBVXpCO0lBWUMsOEJBQ1MsSUFBVSxFQUNWLEtBQXFCLEVBQ3JCLE1BQXdCLEVBQ3hCLEVBQWUsRUFDZixPQUF1QixFQUN2QixLQUFtQjtRQU41QixpQkFtQkM7UUFsQlEsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBYjVCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsc0JBQWlCLEdBQW1CLFNBQVMsQ0FBQztRQUM5QyxxQkFBZ0IsR0FBRyxDQUFDLGlCQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUQsb0JBQWUsR0FBRyxDQUFDLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekQsZUFBVSxHQUFXLENBQUMsQ0FBQztRQVd0QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxF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QUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2xELENBQUM7SUFFRCxrREFBbUIsR0FBbkI7UUFDQyxJQUFJLGdCQUFLLEVBQUU7WUFDVixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ04sS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzVCO0lBQ0YsQ0FBQztJQUVELG9DQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN2QjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDL0IsUUFBUSxFQUFFLEtBQUs7WUFDZixZQUFZLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7SUFDSixDQUFDO0lBeEt1QjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBWSxpQkFBVTsyREFBQztJQURsQyxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzNDLENBQUM7eUNBY2MsV0FBSTtZQUNILHVCQUFjO1lBQ2IseUJBQWdCO1lBQ3BCLG1CQUFXO1lBQ04sZ0NBQWM7WUFDaEIsNEJBQVk7T0FsQmhCLG9CQUFvQixDQTBLaEM7SUFBRCwyQkFBQztDQUFBLEFBMUtELElBMEtDO0FBMUtZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBzY3JlZW4sIGlzSU9TIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgUGFuR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IENvbnRhY3RTZXJ2aWNlLCBDb250YWN0IH0gZnJvbSBcIi4vLi4vc2VydmljZXMvY29udGFjdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBPcmRlclNlcnZpY2UsIE9yZGVyLCBJdGVtLCBJdGVtRGV0YWlsVHlwZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL29yZGVyLnNlcnZpY2VcIjtcblxuY29uc3QgQVZBVEFSX0xFTkdUSCA9IDgwO1xuXG5kZWNsYXJlIHZhciBVSVZpZXc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJPcmRlckRldGFpbFwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL29yZGVyLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9vcmRlci1kZXRhaWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG5cdGl0ZW06IEl0ZW07XG5cdHBlcnNvbnM6IENvbnRhY3RbXTtcblx0b3JkZXJUYWtlcjogbnVtYmVyID0gMDtcblx0Y3VycmVudERldGFpbFR5cGU6IEl0ZW1EZXRhaWxUeXBlID0gJ3Byb2ZpbGUnO1xuXHRoYWxmU2NyZWVuSGVpZ2h0ID0gKHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHMgLyAyKSAtIDEwMDtcblx0aGFsZlNjcmVlbldpZHRoID0gKHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDIpIC0gNDA7XG5cdHByZXZEZWx0YVg6IG51bWJlciA9IDA7XG5cdGRlZmF1bHRQZXJzb25YOiAwO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcGFnZTogUGFnZSxcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcblx0XHRwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcblx0XHRwcml2YXRlIGNvbnRhY3Q6IENvbnRhY3RTZXJ2aWNlLFxuXHRcdHByaXZhdGUgb3JkZXI6IE9yZGVyU2VydmljZVxuXHQpIHtcblx0XHR0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0XHR0aGlzLnBlcnNvbnMgPSB0aGlzLmNvbnRhY3QuY29udGFjdHM7XG5cdFx0dGhpcy5zZXREZWZhdWx0SXRlbSgpO1xuXHRcdHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG5cdFx0XHRpZiAocGFyYW1zWydpdGVtJ10pIHtcblx0XHRcdFx0dGhpcy5pdGVtID0gSlNPTi5wYXJzZShwYXJhbXNbJ2l0ZW0nXSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZGVmYXVsdFBlcnNvblggPSB0aGlzLmdldFNuYXBQb3NpdGlvbigwLCBwYXJhbXNbJ29yZGVyVGFrZXInXSB8fCAwKTtcblx0XHR9KTtcblxuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC50cmFuc2xhdGVZID0gdGhpcy5oYWxmU2NyZWVuSGVpZ2h0O1xuXHR9XG5cblx0c2V0RGVmYXVsdEl0ZW0oKSB7XG5cdFx0dGhpcy5pdGVtID0gPGFueT57XG5cdFx0XHRpZDogbnVsbCxcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0cHJpY2U6ICcnLFxuXHRcdFx0cXVhbnRpdHk6ICcnXG5cdFx0fTtcblx0fVxuXG5cdHNhdmVPcmRlcihpdGVtOiBJdGVtKSB7XG5cdFx0dGhpcy5vcmRlci5hZGRPcmRlcih0aGlzLm9yZGVyVGFrZXIsIGl0ZW0pO1xuXHRcdHRoaXMuZ29Ub0xpc3QoKTtcblx0fVxuXG5cdGdvVG9MaXN0KCkge1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL29yZGVyLWxpc3QnXSwge1xuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRuYW1lOiAnc2xpZGVCb3R0b20nXG5cdFx0XHR9LFxuXHRcdFx0Y2xlYXJIaXN0b3J5OiB0cnVlXG5cdFx0fSk7XG5cdH1cblxuXHRuZXdJdGVtKGl0ZW06IEl0ZW0pIHtcblx0XHR0aGlzLm9yZGVyLmFkZE9yZGVyKHRoaXMub3JkZXJUYWtlciwgaXRlbSk7XG5cdFx0dGhpcy5zZXREZWZhdWx0SXRlbSgpO1xuXHRcdHRoaXMuc2VsZWN0SXRlbURldGFpbChudWxsLCAncHJvZmlsZScpO1xuXHR9XG5cblx0c2V0QWN0aXZlSW5wdXQoZGV0YWlsVHlwZTogSXRlbURldGFpbFR5cGUpIHtcblx0XHRpZiAoZGV0YWlsVHlwZSA9PT0gJ3Byb2ZpbGUnKSB7XG5cdFx0XHR0aGlzLnNlbGVjdEl0ZW1EZXRhaWwobnVsbCwgZGV0YWlsVHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0b25QYW5FdmVudChhcmdzOiBQYW5HZXN0dXJlRXZlbnREYXRhLCBjb250YWluZXI6IFN0YWNrTGF5b3V0KSB7XG5cdFx0bGV0IG5ld1g6IG51bWJlciA9IGNvbnRhaW5lci50cmFuc2xhdGVYICsgYXJncy5kZWx0YVggLSB0aGlzLnByZXZEZWx0YVg7XG5cblx0XHRzd2l0Y2ggKGFyZ3Muc3RhdGUpIHtcblx0XHRcdGNhc2UgMDogdGhpcy5wcmV2RGVsdGFYOyBicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0Y29udGFpbmVyLnRyYW5zbGF0ZVggPSBuZXdYO1xuXHRcdFx0XHR0aGlzLnByZXZEZWx0YVggPSBhcmdzLmRlbHRhWDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdGNvbnRhaW5lci5hbmltYXRlKHtcblx0XHRcdFx0XHR0cmFuc2xhdGU6IHsgeDogdGhpcy5nZXRTbmFwUG9zaXRpb24obmV3WCksIHk6IDAgfSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnByZXZEZWx0YVggPSAwO1xuXHRcdH1cblx0fVxuXG5cdGdldFNuYXBQb3NpdGlvbihwb3NpdGlvblg6IG51bWJlciwgaW5kZXg/OiBudW1iZXIpIHtcblx0XHRsZXQgY2xvc2VzdCA9IChhcnIpID0+IHZhbCA9PiBhcnIucmVkdWNlKChwLCBuKSA9PiBNYXRoLmFicyhwKSA+IE1hdGguYWJzKG4gLSB2YWwpID8gbiAtIHZhbCA6IHAsIEluZmluaXR5KSArIHZhbDtcblx0XHRsZXQgc25hcExpc3QgPSBbXVxuXHRcdGxldCBjdXJyZW50V2lkdGggPSB0aGlzLmhhbGZTY3JlZW5XaWR0aDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wZXJzb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRzbmFwTGlzdC5wdXNoKGN1cnJlbnRXaWR0aClcblx0XHRcdGN1cnJlbnRXaWR0aCAtPSBBVkFUQVJfTEVOR1RIO1xuXHRcdH1cblxuXHRcdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLm9yZGVyVGFrZXIgPSBpbmRleDtcblx0XHRcdHJldHVybiBzbmFwTGlzdFtpbmRleF07XG5cdFx0fVxuXG5cdFx0bGV0IHBvc2l0aW9uID0gY2xvc2VzdChzbmFwTGlzdCkocG9zaXRpb25YKTtcblx0XHR0aGlzLm9yZGVyVGFrZXIgPSBzbmFwTGlzdC5pbmRleE9mKHBvc2l0aW9uKTtcblxuXHRcdHJldHVybiBwb3NpdGlvbjtcblx0fVxuXG5cdHNlbGVjdEl0ZW1EZXRhaWwoaW5wdXRJdGVtLCBzZWxlY3RlZERldGFpbCkge1xuXHRcdGxldCB0bXBIZWlnaHQgPSB0aGlzLmhhbGZTY3JlZW5IZWlnaHQ7XG5cdFx0bGV0IGN1cnJlbnRIZWlnaHQgPSB7XG5cdFx0XHQncHJvZmlsZSc6IHRtcEhlaWdodCxcblx0XHRcdCduYW1lJzogaXNJT1MgPyAxMDAgOiAwLFxuXHRcdFx0J3F1YW50aXR5JzogLSgodG1wSGVpZ2h0IC8gMikgKyAzMCksXG5cdFx0XHQncHJpY2UnOiAtKHRtcEhlaWdodCArIChpc0lPUyA/IDEwIDogMzApKVxuXHRcdH07XG5cblx0XHRpZiAodGhpcy5jdXJyZW50RGV0YWlsVHlwZSA9PT0gc2VsZWN0ZWREZXRhaWwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmN1cnJlbnREZXRhaWxUeXBlID0gc2VsZWN0ZWREZXRhaWw7XG5cblx0XHRpZiAoaW5wdXRJdGVtICYmIHNlbGVjdGVkRGV0YWlsICE9PSAncHJvZmlsZScpIHtcblx0XHRcdGlmIChpc0lPUykge1xuXHRcdFx0XHRpbnB1dEl0ZW0uaW9zLmlucHV0QWNjZXNzb3J5VmlldyA9IFVJVmlldy5hbGxvYygpLmluaXQoKTtcblx0XHRcdH1cblx0XHRcdGlucHV0SXRlbS5mb2N1cygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRpc21pc3NTb2Z0S2V5YmFvcmQoKTtcblx0XHR9XG5cdFx0dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcblx0XHRcdHRyYW5zbGF0ZTogeyB4OiAwLCB5OiBjdXJyZW50SGVpZ2h0W3NlbGVjdGVkRGV0YWlsXSB9LFxuXHRcdFx0ZHVyYXRpb246IDIwMFxuXHRcdH0pO1xuXHR9XG5cblx0aXNTZWxlY3RlZChuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudERldGFpbFR5cGUgPT09IG5hbWU7XG5cdH1cblxuXHRnZXRTZWxlY3RlZFBlcnNvbigpIHtcblx0XHRsZXQgcGVyc29uID0gdGhpcy5jb250YWN0LmZpbmRDb250YWN0KHRoaXMub3JkZXJUYWtlcik7XG5cblx0XHRyZXR1cm4gcGVyc29uID8gcGVyc29uLm5hbWUuZmlyc3ROYW1lIDogJ1BFUlNPTic7XG5cdH1cblxuXHRkaXNtaXNzU29mdEtleWJhb3JkKCkge1xuXHRcdGlmIChpc0lPUykge1xuXHRcdFx0ZnJhbWUudG9wbW9zdCgpLm5hdGl2ZVZpZXcuZW5kRWRpdGluZyh0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dXRpbHMuYWQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuXHRcdH1cblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuZGlzbWlzc1NvZnRLZXliYW9yZCgpO1xuXG5cdFx0aWYgKHRoaXMub3JkZXIub3JkZXJzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ29Ub0xpc3QoKTtcblx0XHR9XG5cblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10sIHtcblx0XHRcdGFuaW1hdGVkOiBmYWxzZSxcblx0XHRcdGNsZWFySGlzdG9yeTogdHJ1ZVxuXHRcdH0pO1xuXHR9XG59Il19