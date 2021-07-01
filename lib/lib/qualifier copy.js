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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbGlmaWVyIGNvcHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3F1YWxpZmllciBjb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBOEI7QUFDOUIsb0RBQThCO0FBRTlCLGdGQUF5RDtBQUN6RCw0REFBc0M7QUFFdEMsSUFBTSxTQUFTLEdBQUcsVUFBQyxJQUFJLEVBQUUsT0FBTztJQUM5QixJQUFNLE9BQU8sR0FBRztRQUNkLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLFdBQVcsRUFBRSxNQUFNO1FBQ25CLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLEtBQUssRUFBRSxNQUFNO1FBQ2IsS0FBSyxFQUFFLE1BQU07UUFDYixLQUFLLEVBQUUsTUFBTTtLQUNkLENBQUM7SUFDRixJQUFNLGFBQWEsR0FBRztRQUNwQixXQUFXLEVBQUUsTUFBTTtRQUNuQixLQUFLLEVBQUUsTUFBTTtRQUNiLEtBQUssRUFBRSxNQUFNO1FBQ2IsS0FBSyxFQUFFLE1BQU07UUFDYixTQUFTLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEVBQUwsQ0FBSztLQUMxQixDQUFBO0lBQ0QsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsdUJBQzNELGFBQWEsS0FDaEIsS0FBSyxPQUFBLElBQ0wsQ0FBQyxDQUFDLENBQUMsdUJBQU8sYUFBYSxHQUFLLEtBQUssRUFBSSxFQUhILENBR0csQ0FBQyxDQUFDO0lBRXpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFBO0FBRUQ7SUFDRSxlQUFZLEVB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