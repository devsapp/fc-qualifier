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
    Layer.prototype.findAlias = function (_a) {
        var serviceName = _a.serviceName, aliasName = _a.aliasName;
        return __awaiter(this, void 0, void 0, function () {
            var aliasList, _i, aliasList_1, aliasItem;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.list({ serviceName: serviceName })];
                    case 1:
                        aliasList = _b.sent();
                        for (_i = 0, aliasList_1 = aliasList; _i < aliasList_1.length; _i++) {
                            aliasItem = aliasList_1[_i];
                            if (aliasItem.aliasName === aliasName) {
                                return [2 /*return*/, aliasItem];
                            }
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    Layer.prototype.publish = function (_a) {
        var serviceName = _a.serviceName, description = _a.description, aliasName = _a.aliasName, versionId = _a.versionId, gversion = _a.gversion, weight = _a.weight;
        return __awaiter(this, void 0, void 0, function () {
            var hasWeight, parames, aliasConfig;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!versionId) {
                            throw new Error('Not fount versionId');
                        }
                        hasWeight = typeof weight === 'number';
                        if (hasWeight && !gversion) {
                            throw new Error('weight exists, gversion is required');
                        }
                        if (gversion && !hasWeight) {
                            throw new Error('gversion exists,weight is required');
                        }
                        parames = {
                            description: description,
                            additionalVersionWeight: {}
                        };
                        if (hasWeight) {
                            parames.additionalVersionWeight = (_b = {}, _b[gversion] = weight / 100, _b);
                        }
                        return [4 /*yield*/, this.findAlias({ serviceName: serviceName, aliasName: aliasName })];
                    case 1:
                        aliasConfig = _c.sent();
                        if (!aliasConfig) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.updateAlias({ aliasName: aliasName, serviceName: serviceName, versionId: versionId, parames: parames })];
                    case 2: return [2 /*return*/, _c.sent()];
                    case 3: return [4 /*yield*/, this.createAlias({ aliasName: aliasName, serviceName: serviceName, versionId: versionId, parames: parames })];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    Layer.prototype.list = function (_a, table) {
        var serviceName = _a.serviceName;
        return __awaiter(this, void 0, void 0, function () {
            var data, showWeight;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.get('listAliases', serviceName));
                        return [4 /*yield*/, client_1.default.fcClient.alias_list(serviceName)];
                    case 1:
                        data = _b.sent();
                        if (table) {
                            showWeight = {
                                value: 'additionalVersionWeight',
                                formatter: function (value) {
                                    var gversion = Object.keys(value)[0];
                                    if (gversion) {
                                        return "additionalVersion: " + gversion + "\nWeight: " + value[gversion] * 100 + "%";
                                    }
                                    return '';
                                },
                            };
                            show_table_1.default(data, ['aliasName', 'versionId', 'description', 'createdTime', 'lastModifiedTime', showWeight]);
                        }
                        else {
                            return [2 /*return*/, data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Layer.prototype.get = function (_a) {
        var serviceName = _a.serviceName, aliasName = _a.aliasName;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.get('alias', aliasName));
                        return [4 /*yield*/, client_1.default.fcClient.getAlias(serviceName, aliasName)];
                    case 1: return [2 /*return*/, (_b.sent()).data];
                }
            });
        });
    };
    Layer.prototype.delete = function (_a) {
        var serviceName = _a.serviceName, aliasName = _a.aliasName;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.remove('alias', aliasName));
                        return [4 /*yield*/, client_1.default.fcClient.deleteAlias(serviceName, aliasName)];
                    case 1: return [2 /*return*/, (_b.sent()).data];
                }
            });
        });
    };
    Layer.prototype.deleteAll = function (_a) {
        var serviceName = _a.serviceName;
        return __awaiter(this, void 0, void 0, function () {
            var aliasList, _i, aliasList_2, aliasName;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.list({ serviceName: serviceName })];
                    case 1:
                        aliasList = _b.sent();
                        _i = 0, aliasList_2 = aliasList;
                        _b.label = 2;
                    case 2:
                        if (!(_i < aliasList_2.length)) return [3 /*break*/, 5];
                        aliasName = aliasList_2[_i].aliasName;
                        return [4 /*yield*/, this.delete({ serviceName: serviceName, aliasName: aliasName })];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Layer.prototype.updateAlias = function (_a) {
        var aliasName = _a.aliasName, serviceName = _a.serviceName, versionId = _a.versionId, parames = _a.parames;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.update('alias', aliasName));
                        return [4 /*yield*/, client_1.default.fcClient.updateAlias(serviceName, aliasName, versionId, parames)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Layer.prototype.createAlias = function (_a) {
        var aliasName = _a.aliasName, serviceName = _a.serviceName, versionId = _a.versionId, parames = _a.parames;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logger_1.default.info(stdout_formatter_1.default.stdoutFormatter.create('alias', aliasName));
                        return [4 /*yield*/, client_1.default.fcClient.createAlias(serviceName, aliasName, versionId, parames)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Layer;
}());
exports.default = Layer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2FsaWFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQThCO0FBRTlCLGdGQUF5RDtBQUN6RCw0REFBc0M7QUFDdEMsNERBQXFDO0FBRXJDO0lBQ0UsZUFBWSxFQUF1QjtZQUFyQixNQUFNLFlBQUEsRUFBRSxXQUFXLGlCQUFBO1FBQy9CLGdCQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUsseUJBQVMsR0FBZixVQUFnQixFQUEwQjtZQUF4QixXQUFXLGlCQUFBLEVBQUUsU0FBUyxlQUFBOzs7Ozs0QkFDcEIscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsRUFBQTs7d0JBQTVDLFNBQVMsR0FBRyxTQUFnQzt3QkFDbEQsV0FBaUMsRUFBVCx1QkFBUyxFQUFULHVCQUFTLEVBQVQsSUFBUyxFQUFFOzRCQUF4QixTQUFTOzRCQUNsQixJQUFJLFNBQVMsQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO2dDQUNyQyxzQkFBTyxTQUFTLEVBQUM7NkJBQ2xCO3lCQUNGO3dCQUNELHNCQUFPLEtBQUssRUFBQzs7OztLQUNkO0lBRUssdUJBQU8sR0FBYixVQUFjLEVBQTRFO1lBQTFFLFdBQVcsaUJBQUEsRUFBRSxXQUFXLGlCQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsTUFBTSxZQUFBOzs7Ozs7O3dCQUM5RSxJQUFJLENBQUMsU0FBUyxFQUFFOzRCQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQzt5QkFDeEM7d0JBQ0ssU0FBUyxHQUFHLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQzt3QkFDN0MsSUFBSSxTQUFTLElB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