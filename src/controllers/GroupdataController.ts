import { getTransformedData } from "../api/api";
import { Request, Response } from "express";

module.exports.getGroupDepartment = async (req: Request, res: Response) => {
  try {
    const transformedData = await getTransformedData();
    res.status(200).json(transformedData);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ success: false, message: errorMessage });
  }
};
