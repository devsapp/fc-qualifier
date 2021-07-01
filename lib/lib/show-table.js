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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tty_table_1 = __importDefault(require("tty-table"));
exports.default = (function (data, showKey) {
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy10YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvc2hvdy10YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQThCO0FBRTlCLG1CQUFlLFVBQUMsSUFBSSxFQUFFLE9BQU87SUFDM0IsSUFBTSxPQUFPLEdBQUc7UUFDZCxXQUFXLEVBQUUsT0FBTztRQUNwQixXQUFXLEVBQUUsTUFBTTtRQUNuQixXQUFXLEVBQUUsUUFBUTtRQUNyQixLQUFLLEVBQUUsTUFBTTtRQUNiLEtBQUssRUFBRSxNQUFNO1FBQ2IsS0FBSyxFQUFFLE1BQU07S0FDZCxDQUFDO0lBQ0YsSUFBTSxhQUFhLEdBQUc7UUFDcEIsV0FBVyxFQUFFLE1BQU07UUFDbkIsS0FBSyxFQUFFLE1BQU07UUFDYixLQUFLLEVBQUUsTUFBTTtRQUNiLEtBQUssRUFBRSxNQUFNO1FBQ2IsU0FBUyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxFQUFMLENBQUs7S0FDMUIsQ0FBQTtJQUNELElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLHVCQUMzRCxhQUFhLEtBQ2hCLEtBQUssT0FBQSxJQUNMLENBQUMsQ0FBQyxDQUFDLHVCQUFPLGFBQWEsR0FBSyxLQUFLLEVBQUksRUFISCxDQUdHLENBQUMsQ0FBQztJQUV6QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3JELENBQUMsRUFBQSJ9