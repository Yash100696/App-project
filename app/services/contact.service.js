"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
;
var ContactService = /** @class */ (function () {
    function ContactService() {
        this._contacts = [
            {
                id: 0,
                name: {
                    firstName: "Susmita",
                    lastName: "Kujur"
                },
                photo: "~/assets/susu.jpg"
            },
            {
                id: 1,
                name: {
                    firstName: "Neelam",
                    lastName: "Kullu"
                },
                photo: "~/assets/neelam.jpg"
            },
            {
                id: 2,
                name: {
                    firstName: "Ruby",
                    lastName: "Ekka"
                },
                photo: "~/assets/ruby.jpg"
            },
            {
                id: 3,
                name: {
                    firstName: "Yash",
                    lastName: "Sinha"
                },
                photo: "~/assets/yash.jpg"
            },
            {
                id: 4,
                name: {
                    firstName: "Suchitra",
                    lastName: "Aind"
                },
                photo: "~/assets/suchi.jpg"
            },
            {
                id: 5,
                name: {
                    firstName: "Bandana",
                    lastName: "Bar"
                },
                photo: "~/assets/bandana.jpg"
            },
            {
                id: 6,
                name: {
                    firstName: "Lawrence",
                    lastName: "Kerketta"
                },
                photo: "~/assets/lawrence.jpg"
            }
        ];
    }
    Object.defineProperty(ContactService.prototype, "contacts", {
        get: function () {
            return this._contacts;
        },
        enumerable: true,
        configurable: true
    });
    ContactService.prototype.findContact = function (id) {
        return this._contacts.find(function (contact) { return contact.id === parseInt(id); });
    };
    ContactService = __decorate([
        core_1.Injectable()
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBUzFDLENBQUM7QUFHRjtJQURBO1FBRVksY0FBUyxHQUFjO1lBQzNCO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRTtvQkFDRixTQUFTLEVBQUUsU0FBUztvQkFDcEIsUUFBUSxFQUFFLE9BQU87aUJBQ3BCO2dCQUNELEtBQUssRUFBRSxtQkFBbUI7YUFDN0I7WUFDRDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUU7b0JBQ0YsU0FBUyxFQUFFLFFBQVE7b0JBQ25CLFFBQVEsRUFBRSxPQUFPO2lCQUNwQjtnQkFDRCxLQUFLLEVBQUUscUJBQXFCO2FBQy9CO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFO29CQUNGLFNBQVMsRUFBRSxNQUFNO29CQUNqQixRQUFRLEVBQUUsTUFBTTtpQkFDbkI7Z0JBQ0QsS0FBSyxFQUFFLG1CQUFtQjthQUM3QjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRTtvQkFDRixTQUFTLEVBQUUsTUFBTTtvQkFDakIsUUFBUSxFQUFFLE9BQU87aUJBQ3BCO2dCQUNELEtBQUssRUFBRSxtQkFBbUI7YUFDN0I7WUFDRDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUU7b0JBQ0YsU0FBUyxFQUFFLFVBQVU7b0JBQ3JCLFFBQVEsRUFBRSxNQUFNO2lCQUNuQjtnQkFDRCxLQUFLLEVBQUUsb0JBQW9CO2FBQzlCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFO29CQUNGLFNBQVMsRUFBRSxTQUFTO29CQUNwQixRQUFRLEVBQUUsS0FBSztpQkFDbEI7Z0JBQ0QsS0FBSyxFQUFFLHNCQUFzQjthQUNoQztZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRTtvQkFDRixTQUFTLEVBQUUsVUFBVTtvQkFDckIsUUFBUSxFQUFFLFVBQVU7aUJBQ3ZCO2dCQUNELEtBQUssRUFBRSx1QkFBdUI7YUFDakM7U0FDSixDQUFDO0lBU04sQ0FBQztJQVBHLHNCQUFJLG9DQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxvQ0FBVyxHQUFYLFVBQVksRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFsRVEsY0FBYztRQUQxQixpQkFBVSxFQUFFO09BQ0EsY0FBYyxDQW1FMUI7SUFBRCxxQkFBQztDQUFBLEFBbkVELElBbUVDO0FBbkVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdCB7XG4gICAgaWQ6IG51bWJlcixcbiAgICBuYW1lOiB7XG4gICAgICAgIGZpcnN0TmFtZTogc3RyaW5nLFxuICAgICAgICBsYXN0TmFtZTogc3RyaW5nXG4gICAgfSxcbiAgICBwaG90bz86IHN0cmluZ1xufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRhY3RTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9jb250YWN0czogQ29udGFjdFtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IFwiU3VzbWl0YVwiLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBcIkt1anVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaG90bzogXCJ+L2Fzc2V0cy9zdXN1LmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJOZWVsYW1cIixcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogXCJLdWxsdVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGhvdG86IFwifi9hc3NldHMvbmVlbGFtLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJSdWJ5XCIsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IFwiRWtrYVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGhvdG86IFwifi9hc3NldHMvcnVieS5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IFwiWWFzaFwiLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBcIlNpbmhhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaG90bzogXCJ+L2Fzc2V0cy95YXNoLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJTdWNoaXRyYVwiLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBcIkFpbmRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBob3RvOiBcIn4vYXNzZXRzL3N1Y2hpLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJCYW5kYW5hXCIsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IFwiQmFyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaG90bzogXCJ+L2Fzc2V0cy9iYW5kYW5hLmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJMYXdyZW5jZVwiLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBcIktlcmtldHRhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaG90bzogXCJ+L2Fzc2V0cy9sYXdyZW5jZS5qcGdcIlxuICAgICAgICB9XG4gICAgXTtcblxuICAgIGdldCBjb250YWN0cygpOiBDb250YWN0W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29udGFjdHM7XG4gICAgfVxuXG4gICAgZmluZENvbnRhY3QoaWQpOiBDb250YWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhY3RzLmZpbmQoY29udGFjdCA9PiBjb250YWN0LmlkID09PSBwYXJzZUludChpZCkpO1xuICAgIH1cbn1cbiJdfQ==