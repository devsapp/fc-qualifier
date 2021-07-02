"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var core = __importStar(require("@serverless-devs/core"));
var base_1 = __importDefault(require("./common/base"));
var logger_1 = __importDefault(require("./common/logger"));
var help_constant = __importStar(require("./lib/help"));
var stdout_formatter_1 = __importDefault(require("./common/stdout-formatter"));
var version_1 = __importDefault(require("./lib/version"));
var alias_1 = __importDefault(require("./lib/alias"));
var COMPONENT_NMAE = 'fc-qualifier';
var VERSION_COMMAND = ['list', 'publish', 'delete', 'deleteAll'];
var ALIAS_COMMAND = ['list', 'get', 'publish', 'delete', 'deleteAll'];
var ComponentDemo = /** @class */ (function (_super) {
    __extends(ComponentDemo, _super);
    function ComponentDemo(props) {
        return _super.call(this, props) || this;
    }
    ComponentDemo.prototype.version = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, credentials, help, props, subCommand, table, versionSubCommand, qualifier;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.handlerInputs(inputs, 'version')];
                    case 1:
                        _a = _b.sent(), credentials = _a.credentials, help = _a.help, props = _a.props, subCommand = _a.subCommand, table = _a.table;
                        if (!VERSION_COMMAND.includes(subCommand)) {
                            core.help(help_constant.VERSION);
                            throw new Error("Does not support " + subCommand + " command");
                        }
                        versionSubCommand = "version_" + subCommand;
                        if (help) {
                            core.help(help_constant[versionSubCommand.toLocaleUpperCase()]);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, stdout_formatter_1.default.initStdout()];
                    case 2:
                        _b.sent();
                        qualifier = new version_1.default({ region: props.region, credentials: credentials });
                        return [4 /*yield*/, qualifier[subCommand](props, table)];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ComponentDemo.prototype.alias = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, credentials, help, props, subCommand, table, aliasSubCommand, qualifier;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.handlerInputs(inputs, 'alias')];
                    case 1:
                        _a = _b.sent(), credentials = _a.credentials, help = _a.help, props = _a.props, subCommand = _a.subCommand, table = _a.table;
                        if (!ALIAS_COMMAND.includes(subCommand)) {
                            core.help(help_constant.ALIAS);
                            throw new Error("Does not support " + subCommand + " command");
                        }
                        aliasSubCommand = "alias_" + subCommand;
                        if (help) {
                            core.help(help_constant[aliasSubCommand.toLocaleUpperCase()]);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, stdout_formatter_1.default.initStdout()];
                    case 2:
                        _b.sent();
                        qualifier = new alias_1.default({ region: props.region, credentials: credentials });
                        return [4 /*yield*/, qualifier[subCommand](props, table)];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ComponentDemo.prototype.handlerInputs = function (inputs, command) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var parsedArgs, parsedData, rawData, subCommand, props, endProps, credentials, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        logger_1.default.setContent(COMPONENT_NMAE.toLocaleUpperCase());
                        logger_1.default.debug("inputs.props: " + JSON.stringify(inputs.props));
                        parsedArgs = core.commandParse(inputs, {
                            boolean: ['help', 'table'],
                            string: ['region', 'service-name', 'description', 'alias-name', 'id', 'gversion'],
                            number: ['weight'],
                            alias: { help: 'h', 'version-id': 'id' }
                        });
                        parsedData = (parsedArgs === null || parsedArgs === void 0 ? void 0 : parsedArgs.data) || {};
                        rawData = parsedData._ || [];
                        if (!rawData.length) {
                            core.help(help_constant[command.toLocaleUpperCase()]);
                            process.exit();
                        }
                        subCommand = rawData[0];
                        logger_1.default.debug(command + " subCommand: " + subCommand);
                        if (parsedData.help) {
                            core.reportComponent(COMPONENT_NMAE, {
                                command: command + " " + subCommand,
                                uid: ((_a = inputs.credentials) === null || _a === void 0 ? void 0 : _a.AccountID) || '',
                            });
                            return [2 /*return*/, { help: true, subCommand: subCommand }];
                        }
                        props = inputs.props || {};
                        endProps = {
                            region: parsedData.region || props.region,
                            serviceName: parsedData['service-name'] || props.serviceName,
                            description: parsedData.description || props.description,
                            versionId: parsedData.id || props.versionId,
                            aliasName: parsedData['alias-name'] || props.aliasName,
                            gversion: parsedData.gversion || props.gversion,
                            weight: parsedData.weight || props.weight,
                        };
                        if (!endProps.region) {
                            throw new Error("Not fount region");
                        }
                        if (!endProps.serviceName) {
                            throw new Error("Not fount serviceName");
                        }
                        _b = inputs.credentials;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, core.getCredential(inputs.project.access)];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        credentials = _b;
                        core.reportComponent(COMPONENT_NMAE, { command: command + " " + subCommand, uid: credentials.AccountID });
                        logger_1.default.debug("handler inputs props: " + JSON.stringify(endProps));
                        return [2 /*return*/, {
                                credentials: credentials,
                                subCommand: subCommand,
                                props: endProps,
                                table: parsedData.table,
                            }];
                }
            });
        });
    };
    return ComponentDemo;
}(base_1.default));
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUE4QztBQUM5Qyx1REFBMEM7QUFDMUMsMkRBQXFDO0FBRXJDLHdEQUE0QztBQUM1QywrRUFBd0Q7QUFDeEQsMERBQW9DO0FBQ3BDLHNEQUFnQztBQUVoQyxJQUFNLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDdEMsSUFBTSxlQUFlLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNuRSxJQUFNLGFBQWEsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUV4RTtJQUEyQyxpQ0FBYTtJQUN0RCx1QkFBWSxLQUFLO2VBQ2Ysa0JBQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVZLCtCQUFPLEdBQXBCLFVBQXFCLE1BQWtCOzs7Ozs0QkFPakMscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUE7O3dCQU56QyxLQU1GLFNBQTJDLEVBTDdDLFdBQVcsaUJBQUEsRUFDWCxJQUFJLFVBQUEsRUFDSixLQUFLLFdBQUEsRUFDTCxVQUFVLGdCQUFBLEVBQ1YsS0FBSyxXQUFBO3dCQUdQLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFOzRCQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBb0IsVUFBVSxhQUFVLENBQUMsQ0FBQzt5QkFDM0Q7d0JBRUssaUJBQWlCLEdBQUcsYUFBVyxVQUFZLENBQUM7d0JB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