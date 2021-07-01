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
var client_1 = __importDefault(require("./client"));
var stdout_formatter_1 = __importDefault(require("../common/stdout-formatter"));
var logger_1 = __importDefault(require("../common/logger"));
var show_table_1 = __importDefault(require("./show-table"));
var Layer = /** @class */ (function () {
    function Layer(_a) {
        var region = _a.region, credentials = _a.credentials;
        client_1.default.setFcClient(region, credentials);
    }
    Layer.prototype.list = function (_a, table) {
        var serviceName = _a.serviceName;
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.get('listVersions', serviceName));
                        return [4 /*yield*/, client_1.default.fcClient.version_list(serviceName)];
                    case 1:
                        data = _b.sent();
                        if (table) {
                            show_table_1.default(data, ['versionId', 'description', 'createdTime', 'lastModifiedTime']);
                        }
                        else {
                            return [2 /*return*/, data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Layer.prototype.publish = function (_a) {
        var serviceName = _a.serviceName, description = _a.description;
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.create('service version', serviceName));
                        return [4 /*yield*/, client_1.default.fcClient.publishVersion(serviceName, description)];
                    case 1:
                        data = (_b.sent()).data;
                        logger_1.default.debug("publish version: " + JSON.stringify(data));
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Layer.prototype.delete = function (_a) {
        var serviceName = _a.serviceName, versionId = _a.versionId;
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!versionId) {
                            throw new Error('Not fount versionId');
                        }
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.remove('service version', serviceName + "." + versionId));
                        return [4 /*yield*/, client_1.default.fcClient.deleteVersion(serviceName, versionId)];
                    case 1:
                        res = _b.sent();
                        logger_1.default.debug("delete version: " + JSON.stringify(res));
                        return [2 /*return*/];
                }
            });
        });
    };
    Layer.prototype.deleteAll = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var listData, serviceName, _i, listData_1, versionId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.list(props)];
                    case 1:
                        listData = _a.sent();
                        serviceName = props.serviceName;
                        _i = 0, listData_1 = listData;
                        _a.label = 2;
                    case 2:
                        if (!(_i < listData_1.length)) return [3 /*break*/, 5];
                        versionId = listData_1[_i].versionId;
                        return [4 /*yield*/, this.delete({ serviceName: serviceName, versionId: versionId })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return Layer;
}());
exports.default = Layer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdmVyc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE4QjtBQUU5QixnRkFBeUQ7QUFDekQsNERBQXNDO0FBQ3RDLDREQUFxQztBQUVyQztJQUNFLGVBQVksRUFBdUI7WUFBckIsTUFBTSxZQUFBLEVBQUUsV0FBVyxpQkFBQTtRQUMvQixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVLLG9CQUFJLEdBQVYsVUFBVyxFQUFlLEVBQUUsS0FBTTtZQUFyQixXQUFXLGlCQUFBOzs7Ozs7d0JBQ3RCLGdCQUFNLENBQUMsSUFBSSxDQUFDLDBCQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDakUscUJBQU0sZ0JBQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFBOzt3QkFBdEQsSUFBSSxHQUFHLFNBQStDO3dCQUM1RCxJQUFJLEtBQUssRUFBRTs0QkFDVCxvQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQTt5QkFDakY7NkJBQU07NEJBQ0wsc0JBQU8sSUFBSSxFQUFDO3lCQUNiOzs7OztLQUNGO0lBRUssdUJBQU8sR0FBYixVQUFjLEVBQTRCO1lBQTFCLFdBQVcsaUJBQUEsRUFBRSxXQUFXLGlCQUFBOzs7Ozs7d0JBQ3RDLGdCQUFNLENBQUMsSUFBSSxDQUFDLDBCQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUNuRSxxQkFBTSxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUFBOzt3QkFBdkUsSUFBSSxHQUFLLENBQUEsU0FBOEQsQ0FBQSxLQUFuRTt3QkFDWixnQkFBTSxDQUFDLEtBQUssQ0FBQyxzQkFBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUcsQ0FBQyxDQUFDO3dCQUN6RCxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDYjtJQUVLLHNCQUFNLEdBQVosVUFBYSxFQUEwQjtZQUF4QixXQUFXLGlCQUFBLEVBQUUsU0FBUyxlQUFBOzs7Ozs7d0JBQ25DLElBQUksQ0FBQyxTQUFTLEVBQUU7NEJBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO3lCQUN4Qzt3QkFDRCxnQkFBTSxDQUFDLElBQUksQ0FBQywwQkFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUssV0FBVyxTQUFJLFNBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzFGLHFCQUFNLGdCQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLEVBQUE7O3dCQUFqRSxHQUFHLEdBQUcsU0FBMkQ7d0JBQ3ZFLGdCQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFtQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7Ozs7O0tBQ3hEO0lBRUsseUJBQVMsR0FBZixVQUFnQixLQUFhOzs7Ozs0QkFDVixxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBakMsUUFBUSxHQUFHLFNBQXNCO3dCQUMvQixXQUFXLEdBQUssS0FBSyxZQUFWLENBQVc7OEJBQ00sRUFBUixxQkFBUTs7OzZCQUFSLENBQUEsc0JBQVEsQ0FBQTt3QkFBdkIsU0FBUywyQkFBQTt3QkFDcEIscUJBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsYUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsRUFBQTs7d0JBQTdDLFNBQTZDLENBQUM7Ozt3QkFEcEIsSUFBUSxDQUFBOzs7Ozs7S0FHckM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXRDRCxJQXNDQyJ9