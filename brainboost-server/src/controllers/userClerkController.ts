import { Request, Response } from "express";
import { clerk } from "..";

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.userId;
    const userData = req.body;
    const user = await clerk.users.updateUserMetadata(userId, {
      publicMetadata: {
        userType: userData.publicMetadata.userType,
        settings: userData.publicMetadata.settings,
      },
    });
    res.status(200).json({ message: "User Updated Successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "Error Updating User", error: error });
  }
};
