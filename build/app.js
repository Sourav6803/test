"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json({ limit: '50mb' }));
const PORT = 4000;
exports.app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
exports.app.get("/test", (req, res, next) => {
    res.status(200).json({ success: true, message: "Welocome to LMS" });
});
exports.app.all('*', (req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} not found`);
    err.statusCode = 404;
    next(err);
});
