"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
;
var OrderService = /** @class */ (function () {
    function OrderService() {
        this._orders = [];
    }
    OrderService.prototype.getOrder = function (orderTaker) {
        return this._orders.find(function (order) { return order.orderTaker === parseInt(orderTaker); });
    };
    OrderService.prototype.clear = function () {
        this._orders = [];
    };
    OrderService.prototype.addOrder = function (orderTaker, newItem) {
        var hasOrder = this.getOrder(orderTaker);
        if (!hasOrder) {
            newItem.id = 0;
            var newOrder = {
                id: this._orders.length + 1,
                orderTaker: orderTaker,
                items: [newItem]
            };
            this._orders.push(newOrder);
        }
        else {
            var existingItem = this.getOrder(orderTaker).items.find(function (item) { return item.id === newItem.id; });
            if (existingItem) {
                Object.assign(this.getOrder(orderTaker).items
                    .find(function (item) { return item.id === newItem.id; }), newItem);
            }
            else {
                var newItemId = this.getOrder(orderTaker).items.length + 1;
                newItem.id = newItemId;
                this.getOrder(orderTaker).items.push(newItem);
            }
        }
    };
    OrderService.prototype.removeItem = function (orderTaker, item) {
        this.getOrder(orderTaker).items = this.getOrder(orderTaker).items
            .filter(function (existedItem) { return existedItem.name !== item.name; });
    };
    OrderService.prototype.updateOrder = function (updatedOrder) {
        this._orders = this._orders
            .map(function (order) { return order.id === updatedOrder.id ? order : updatedOrder; });
    };
    OrderService.prototype.removeOrder = function (orderId) {
        this._orders = this._orders
            .filter(function (order) { return order.id === orderId; });
    };
    Object.defineProperty(OrderService.prototype, "orders", {
        get: function () {
            return this._orders.filter(function (order) { return order.items.length; });
        },
        enumerable: true,
        configurable: true
    });
    OrderService.prototype.subTotal = function (order) {
        return order.items
            .reduce(function (accumulator, currentValue) { return accumulator + (currentValue.price * currentValue.quantity); }, 0);
    };
    OrderService.prototype.grandTotal = function () {
        var _this = this;
        return this.orders.reduce(function (accumalator, currentValue) { return accumalator + _this.subTotal(currentValue); }, 0);
    };
    OrderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFhMUMsQ0FBQztBQUtGO0lBR0k7UUFGUSxZQUFPLEdBQVksRUFBRSxDQUFDO0lBRzlCLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUFBO0lBQ2hGLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxVQUFrQixFQUFFLE9BQWE7UUFDdEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLFFBQVEsR0FBRztnQkFDWCxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDM0IsVUFBVSxZQUFBO2dCQUNWLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUNuQixDQUFDO1lBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNILElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1lBRXhGLElBQUksWUFBWSxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLO3FCQUN4QyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxFQUFFLEVBQXRCLENBQXNCLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUN2RDtpQkFBTTtnQkFDSCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUMzRCxPQUFPLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pEO1NBQ0o7SUFDTCxDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLFVBQWtCLEVBQUUsSUFBVTtRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUs7YUFDNUQsTUFBTSxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxZQUFtQjtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxFQUFFLEtBQUssWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQW5ELENBQW1ELENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLE9BQWU7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTzthQUN0QixNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsRUFBRSxLQUFLLE9BQU8sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxzQkFBSSxnQ0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDNUQsQ0FBQzs7O09BQUE7SUFFRCwrQkFBUSxHQUFSLFVBQVMsS0FBWTtRQUNqQixPQUFPLEtBQUssQ0FBQyxLQUFLO2FBQ2IsTUFBTSxDQUFDLFVBQUMsV0FBVyxFQUFFLFlBQVksSUFBSyxPQUFBLFdBQVcsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUExRCxDQUEwRCxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlHLENBQUM7SUFFRCxpQ0FBVSxHQUFWO1FBQUEsaUJBRUM7UUFERyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsV0FBVyxFQUFFLFlBQVksSUFBSyxPQUFBLFdBQVcsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUF6QyxDQUF5QyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUFsRVEsWUFBWTtRQUR4QixpQkFBVSxFQUFFOztPQUNBLFlBQVksQ0FtRXhCO0lBQUQsbUJBQUM7Q0FBQSxBQW5FRCxJQW1FQztBQW5FWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW0ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcmRlciB7XG4gICAgaWQ6IG51bWJlcixcbiAgICBpdGVtczogSXRlbVtdLFxuICAgIG9yZGVyVGFrZXI6IG51bWJlclxufTtcblxuZXhwb3J0IHR5cGUgSXRlbURldGFpbFR5cGUgPSAncHJvZmlsZScgfCAnbmFtZScgfCAncXVhbnRpdHknIHwgJ3ByaWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfb3JkZXJzOiBPcmRlcltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBnZXRPcmRlcihvcmRlclRha2VyKTogT3JkZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3JkZXJzLmZpbmQob3JkZXIgPT4gb3JkZXIub3JkZXJUYWtlciA9PT0gcGFyc2VJbnQob3JkZXJUYWtlcikpXG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuX29yZGVycyA9IFtdO1xuICAgIH1cblxuICAgIGFkZE9yZGVyKG9yZGVyVGFrZXI6IG51bWJlciwgbmV3SXRlbTogSXRlbSkge1xuICAgICAgICBsZXQgaGFzT3JkZXIgPSB0aGlzLmdldE9yZGVyKG9yZGVyVGFrZXIpO1xuXG4gICAgICAgIGlmICghaGFzT3JkZXIpIHtcbiAgICAgICAgICAgIG5ld0l0ZW0uaWQgPSAwO1xuICAgICAgICAgICAgbGV0IG5ld09yZGVyID0ge1xuICAgICAgICAgICAgICAgIGlkOiB0aGlzLl9vcmRlcnMubGVuZ3RoICsgMSxcbiAgICAgICAgICAgICAgICBvcmRlclRha2VyLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbbmV3SXRlbV1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuX29yZGVycy5wdXNoKG5ld09yZGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0l0ZW0gPSB0aGlzLmdldE9yZGVyKG9yZGVyVGFrZXIpLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBuZXdJdGVtLmlkKTtcblxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nSXRlbSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5nZXRPcmRlcihvcmRlclRha2VyKS5pdGVtc1xuICAgICAgICAgICAgICAgICAgICAuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IG5ld0l0ZW0uaWQpLCBuZXdJdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0l0ZW1JZCA9IHRoaXMuZ2V0T3JkZXIob3JkZXJUYWtlcikuaXRlbXMubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICAgICBuZXdJdGVtLmlkID0gbmV3SXRlbUlkO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3JkZXIob3JkZXJUYWtlcikuaXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUl0ZW0ob3JkZXJUYWtlcjogbnVtYmVyLCBpdGVtOiBJdGVtKSB7XG4gICAgICAgIHRoaXMuZ2V0T3JkZXIob3JkZXJUYWtlcikuaXRlbXMgPSB0aGlzLmdldE9yZGVyKG9yZGVyVGFrZXIpLml0ZW1zXG4gICAgICAgICAgICAuZmlsdGVyKGV4aXN0ZWRJdGVtID0+IGV4aXN0ZWRJdGVtLm5hbWUgIT09IGl0ZW0ubmFtZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlT3JkZXIodXBkYXRlZE9yZGVyOiBPcmRlcikge1xuICAgICAgICB0aGlzLl9vcmRlcnMgPSB0aGlzLl9vcmRlcnNcbiAgICAgICAgICAgIC5tYXAob3JkZXIgPT4gb3JkZXIuaWQgPT09IHVwZGF0ZWRPcmRlci5pZCA/IG9yZGVyIDogdXBkYXRlZE9yZGVyKTtcbiAgICB9XG5cbiAgICByZW1vdmVPcmRlcihvcmRlcklkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fb3JkZXJzID0gdGhpcy5fb3JkZXJzXG4gICAgICAgICAgICAuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkID09PSBvcmRlcklkKTtcbiAgICB9XG5cbiAgICBnZXQgb3JkZXJzKCk6IE9yZGVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3JkZXJzLmZpbHRlcihvcmRlciA9PiBvcmRlci5pdGVtcy5sZW5ndGgpO1xuICAgIH1cblxuICAgIHN1YlRvdGFsKG9yZGVyOiBPcmRlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBvcmRlci5pdGVtc1xuICAgICAgICAgICAgLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSkgPT4gYWNjdW11bGF0b3IgKyAoY3VycmVudFZhbHVlLnByaWNlICogY3VycmVudFZhbHVlLnF1YW50aXR5KSwgMCk7XG4gICAgfVxuXG4gICAgZ3JhbmRUb3RhbCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmRlcnMucmVkdWNlKChhY2N1bWFsYXRvciwgY3VycmVudFZhbHVlKSA9PiBhY2N1bWFsYXRvciArIHRoaXMuc3ViVG90YWwoY3VycmVudFZhbHVlKSwgMCk7XG4gICAgfVxufVxuIl19