"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_linkedin_oauth2_1 = require("nativescript-linkedin-oauth2");
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.client = null;
    }
    AuthService.prototype.tnsOauthLogin = function () {
        var _this = this;
        this.client = new nativescript_linkedin_oauth2_1.TnsOAuthClient();
        return new Promise(function (resolve, reject) {
            _this.client.loginWithCompletion(function (accessCode, error) {
                if (error) {
                    console.error('back to main page with error: ');
                    console.error(error);
                    reject(error);
                }
                else {
                    console.log('back to main page with access token: ');
                    console.log(accessCode);
                    resolve(accessCode);
                }
            });
        });
    };
    AuthService.prototype.tnsOauthLogout = function () {
        if (this.client) {
            this.client.logout();
        }
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZFQUVzQztBQUd0QztJQUdFO1FBRlEsV0FBTSxHQUFtQixJQUFJLENBQUM7SUFFdEIsQ0FBQztJQUVWLG1DQUFhLEdBQXBCO1FBQUEsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSw2Q0FBYyxFQUFFLENBQUM7UUFFbkMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDekMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FDN0IsVUFBQyxVQUFrQixFQUFFLEtBQUs7Z0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO29CQUNoRCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO29CQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN4QixPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7WUFDSCxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG9DQUFjLEdBQXJCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQTdCVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7O09BQ0EsV0FBVyxDQThCdkI7SUFBRCxrQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUbnNPQXV0aENsaWVudFxufSBmcm9tICduYXRpdmVzY3JpcHQtbGlua2VkaW4tb2F1dGgyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjbGllbnQ6IFRuc09BdXRoQ2xpZW50ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyB0bnNPYXV0aExvZ2luKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdGhpcy5jbGllbnQgPSBuZXcgVG5zT0F1dGhDbGllbnQoKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY2xpZW50LmxvZ2luV2l0aENvbXBsZXRpb24oXG4gICAgICAgIChhY2Nlc3NDb2RlOiBzdHJpbmcsIGVycm9yKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdiYWNrIHRvIG1haW4gcGFnZSB3aXRoIGVycm9yOiAnKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JhY2sgdG8gbWFpbiBwYWdlIHdpdGggYWNjZXNzIHRva2VuOiAnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY2Vzc0NvZGUpO1xuICAgICAgICAgICAgcmVzb2x2ZShhY2Nlc3NDb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdG5zT2F1dGhMb2dvdXQoKSB7XG4gICAgaWYgKHRoaXMuY2xpZW50KSB7XG4gICAgICB0aGlzLmNsaWVudC5sb2dvdXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==