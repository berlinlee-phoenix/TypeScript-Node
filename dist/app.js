"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
// Parse body of all incoming requests
// Extract any json data it finds in requests
// then populate (req.body as {text: string}).text 
// in src/controllers/todos.ts
app.use((0, body_parser_1.json)());
// Forward all routes starting with /todos to todoRoutes
app.use('/todos', todos_1.default);
// Error Handling Middleware function
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3001);
