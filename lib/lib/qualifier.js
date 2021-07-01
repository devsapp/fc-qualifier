"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var tty_table_1 = __importDefault(require("tty-table"));
var client_1 = __importDefault(require("./client"));
var stdout_formatter_1 = __importDefault(require("../common/stdout-formatter"));
var logger_1 = __importDefault(require("../common/logger"));
var tableShow = function (data, showKey) {
    var options = {
        borderStyle: "solid",
        borderColor: "blue",
        headerAlign: "center",
        align: "left",
        color: "cyan",
        width: "100%"
    };
    var header_option = {
        headerColor: "cyan",
        color: "cyan",
        align: "left",
        width: "auto",
        formatter: function (value) { return value; },
    };
    var header = showKey.map(function (value) { return typeof value === 'string' ? (__assign(__assign({}, header_option), { value: value })) : (__assign(__assign({}, header_option), value)); });
    console.log(tty_table_1.default(header, data, options).render());
};
var Layer = /** @class */ (function () {
    function Layer(_a) {
        var region = _a.region, credentials = _a.credentials;
        client_1.default.setFcClient(region, credentials);
    }
    Layer.prototype.version_list = function (_a, table) {
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
                            tableShow(data, ['versionId', 'description', 'createdTime', 'lastModifiedTime']);
                        }
                        else {
                            return [2 /*return*/, data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Layer.prototype.version_publish = function (_a) {
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
    Layer.prototype.version_delete = function (_a) {
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
    Layer.prototype.version_deleteAll = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var listData, serviceName, _i, listData_1, versionId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.version_list(props)];
                    case 1:
                        listData = _a.sent();
                        serviceName = props.serviceName;
                        _i = 0, listData_1 = listData;
                        _a.label = 2;
                    case 2:
                        if (!(_i < listData_1.length)) return [3 /*break*/, 5];
                        versionId = listData_1[_i].versionId;
                        return [4 /*yield*/, this.version_delete({ serviceName: serviceName, versionId: versionId })];
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
    Layer.prototype.findAlias = function (_a) {
        var serviceName = _a.serviceName, aliasName = _a.aliasName;
        return __awaiter(this, void 0, void 0, function () {
            var aliasList, _i, aliasList_1, aliasItem;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.alias_list({ serviceName: serviceName })];
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
    Layer.prototype.alias_publish = function (_a) {
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
    Layer.prototype.alias_list = function (_a, table) {
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
                            tableShow(data, ['aliasName', 'versionId', 'description', 'createdTime', 'lastModifiedTime', showWeight]);
                        }
                        else {
                            return [2 /*return*/, data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Layer.prototype.alias_get = function (_a) {
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
    Layer.prototype.alias_delete = function (_a) {
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
    Layer.prototype.alias_deleteAll = function (_a) {
        var serviceName = _a.serviceName;
        return __awaiter(this, void 0, void 0, function () {
            var aliasList, _i, aliasList_2, aliasName;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.alias_list({ serviceName: serviceName })];
                    case 1:
                        aliasList = _b.sent();
                        _i = 0, aliasList_2 = aliasList;
                        _b.label = 2;
                    case 2:
                        if (!(_i < aliasList_2.length)) return [3 /*break*/, 5];
                        aliasName = aliasList_2[_i].aliasName;
                        return [4 /*yield*/, this.alias_delete({ serviceName: serviceName, aliasName: aliasName })];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbGlmaWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9xdWFsaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUE4QjtBQUM5QixvREFBOEI7QUFFOUIsZ0ZBQXlEO0FBQ3pELDREQUFzQztBQUV0QyxJQUFNLFNBQVMsR0FBRyxVQUFDLElBQUksRUFBRSxPQUFPO0lBQzlCLElBQU0sT0FBTyxHQUFHO1FBQ2QsV0FBVyxFQUFFLE9BQU87UUFDcEIsV0FBVyxFQUFFLE1BQU07UUFDbkIsV0FBVyxFQUFFLFFBQVE7UUFDckIsS0FBSyxFQUFFLE1BQU07UUFDYixLQUFLLEVBQUUsTUFBTTtRQUNiLEtBQUssRUFBRSxNQUFNO0tBQ2QsQ0FBQztJQUNGLElBQU0sYUFBYSxHQUFHO1FBQ3BCLFdBQVcsRUFBRSxNQUFNO1FBQ25CLEtBQUssRUFBRSxNQUFNO1FBQ2IsS0FBSyxFQUFFLE1BQU07UUFDYixLQUFLLEVBQUUsTUFBTTtRQUNiLFNBQVMsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssRUFBTCxDQUFLO0tBQzFCLENBQUE7SUFDRCxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyx1QkFDM0QsYUFBYSxLQUNoQixLQUFLLE9BQUEsSUFDTCxDQUFDLENBQUMsQ0FBQyx1QkFBTyxhQUFhLEdBQUssS0FBSyxFQUFJLEVBSEgsQ0FHRyxDQUFDLENBQUM7SUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUE7QUFFRDtJQUNFLGVBQVksRUFBdUI7WUFBckIs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