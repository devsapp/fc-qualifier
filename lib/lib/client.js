"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fc2_1 = __importDefault(require("@alicloud/fc2"));
fc2_1.default.prototype.version_list = function (serviceName, headers) {
    return __awaiter(this, void 0, void 0, function () {
        var data, query, res, _a, _b, versions, nextToken;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    data = [];
                    query = {};
                    _c.label = 1;
                case 1: return [4 /*yield*/, Client.fcClient.get("/services/" + serviceName + "/versions", query, headers)];
                case 2:
                    res = _c.sent();
                    _a = res.data || {}, _b = _a.versions, versions = _b === void 0 ? [] : _b, nextToken = _a.nextToken;
                    query.nextToken = nextToken;
                    data = data.concat(versions);
                    _c.label = 3;
                case 3:
                    if (query.nextToken) return [3 /*break*/, 1];
                    _c.label = 4;
                case 4: return [2 /*return*/, data];
            }
        });
    });
};
fc2_1.default.prototype.alias_list = function (serviceName, headers) {
    return __awaiter(this, void 0, void 0, function () {
        var data, query, res, _a, _b, aliases, nextToken;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    data = [];
                    query = {};
                    _c.label = 1;
                case 1: return [4 /*yield*/, Client.fcClient.get("/services/" + serviceName + "/aliases", query, headers)];
                case 2:
                    res = _c.sent();
                    _a = res.data || {}, _b = _a.aliases, aliases = _b === void 0 ? [] : _b, nextToken = _a.nextToken;
                    query.nextToken = nextToken;
                    data = data.concat(aliases);
                    _c.label = 3;
                case 3:
                    if (query.nextToken) return [3 /*break*/, 1];
                    _c.label = 4;
                case 4: return [2 /*return*/, data];
            }
        });
    });
};
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.setFcClient = function (region, credentials) {
        var AccountID = credentials.AccountID, AccessKeyID = credentials.AccessKeyID, AccessKeySecret = credentials.AccessKeySecret, SecurityToken = credentials.SecurityToken;
        var fcClient = new fc2_1.default(AccountID, {
            accessKeyID: AccessKeyID,
            accessKeySecret: AccessKeySecret,
            securityToken: SecurityToken,
            region: region,
            timeout: 6000000,
        });
        this.fcClient = fcClient;
        return fcClient;
    };
    return Client;
}());
exports.default = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBK0I7QUFFL0IsYUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsVUFBZSxXQUFXLEVBQUUsT0FBUTs7Ozs7O29CQUMxRCxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNSLEtBQUssR0FBUSxFQUFFLENBQUM7O3dCQUdSLHFCQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWEsV0FBVyxjQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFBOztvQkFBcEYsR0FBRyxHQUFHLFNBQThFO29CQUVwRixLQUErQixHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBM0MsZ0JBQWEsRUFBYixRQUFRLG1CQUFHLEVBQUUsS0FBQSxFQUFFLFNBQVMsZUFBQSxDQUFvQjtvQkFDcEQsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzVCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7d0JBQ3ZCLEtBQUssQ0FBQyxTQUFTOzt3QkFFdkIsc0JBQU8sSUFBSSxFQUFDOzs7O0NBQ2IsQ0FBQTtBQUNELGFBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQWUsV0FBVyxFQUFFLE9BQVE7Ozs7OztvQkFDeEQsSUFBSSxHQUFHLEVBQUUsQ0FBQztvQkFDUixLQUFLLEdBQVEsRUFBRSxDQUFDOzt3QkFHUixxQkFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxlQUFhLFdBQVcsYUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBQTs7b0JBQW5GLEdBQUcsR0FBRyxTQUE2RTtvQkFDbkYsS0FBOEIsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQTFDLGVBQVksRUFBWixPQUFPLG1CQUFHLEVBQUUsS0FBQSxFQUFFLFNBQVMsZUFBQSxDQUFvQjtvQkFDbkQsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzVCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7d0JBQ3RCLEtBQUssQ0FBQyxTQUFTOzt3QkFFdkIsc0JBQU8sSUFBSSxFQUFDOzs7O0NBQ2IsQ0FBQTtBQUVEO0lBQUE7SUF1QkEsQ0FBQztJQXBCUSxrQkFBVyxHQUFsQixVQUFtQixNQUFjLEVBQUUsV0FBVztRQUUxQyxJQUFBLFNBQVMsR0FJUCxXQUFXLFVBSkosRUFDVCxXQUFXLEdBR1QsV0FBVyxZQUhGLEVBQ1gsZUFBZSxHQUViLFdBQVcsZ0JBRkUsRUFDZixhQUFhLEdBQ1gsV0FBVyxjQURBLENBQ0M7UUFFaEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxhQUFFLENBQUMsU0FBUyxFQUFFO1lBQ2pDLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLGVBQWUsRUFBRSxlQUFlO1lBQ2hDLGFBQWEsRUFBRSxhQUFhO1lBQzVCLE1BQU0sUUFBQTtZQUNOLE9BQU8sRUFBRSxPQUFPO1NBQ2pCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQyJ9