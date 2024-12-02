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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourse = exports.listCourses = void 0;
const courseModel_1 = __importDefault(require("../models/courseModel"));
const listCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.query.category;
    try {
        const courses = category && category !== "all"
            ? yield courseModel_1.default.scan("category").eq(category).exec()
            : yield courseModel_1.default.scan().exec();
        res
            .status(200)
            .json({ message: "Courses fetched successfully", data: courses });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching courses", error: error });
    }
});
exports.listCourses = listCourses;
const getCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield courseModel_1.default.get(req.params.courseId);
        if (!course) {
            res.status(404).json({ message: "Course not found" });
            return;
        }
        res
            .status(200)
            .json({ message: "Course fetched successfully", data: course });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching course", error: error });
    }
});
exports.getCourse = getCourse;