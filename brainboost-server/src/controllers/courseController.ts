import { Request, Response } from "express";
import Course from "../models/courseModel";

export const listCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  const category = req.query.category;
  try {
    const courses =
      category && category !== "all"
        ? await Course.scan("category").eq(category).exec()
        : await Course.scan().exec();
    res
      .status(200)
      .json({ message: "Courses fetched successfully", data: courses });
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error: error });
  }
};

export const getCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await Course.get(req.params.courseId);
    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "Course fetched successfully", data: course });
  } catch (error) {
    res.status(500).json({ message: "Error fetching course", error: error });
  }
};
