"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.onTapLogin = function () {
        this.authService
            .tnsOauthLogin()
            .then(function (result) {
            console.log('back to app component with token' + result);
        });
    };
    AppComponent.prototype.onTapLogout = function () {
        this.authService.tnsOauthLogout();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ns-app',
            moduleId: module.id,
            templateUrl: './app.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsK0NBQTZDO0FBTzdDO0lBQ0Usc0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUV6QyxpQ0FBVSxHQUFqQjtRQUNFLElBQUksQ0FBQyxXQUFXO2FBQ2IsYUFBYSxFQUFFO2FBQ2YsSUFBSSxDQUFDLFVBQUMsTUFBYztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGtDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBYlUsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDcEMsQ0FBQzt5Q0FFaUMsMEJBQVc7T0FEakMsWUFBWSxDQWN4QjtJQUFELG1CQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hcHAnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuICBwdWJsaWMgb25UYXBMb2dpbigpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAudG5zT2F1dGhMb2dpbigpXG4gICAgICAudGhlbigocmVzdWx0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2JhY2sgdG8gYXBwIGNvbXBvbmVudCB3aXRoIHRva2VuJyArIHJlc3VsdCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblRhcExvZ291dCgpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnRuc09hdXRoTG9nb3V0KCk7XG4gIH1cbn1cbiJdfQ==