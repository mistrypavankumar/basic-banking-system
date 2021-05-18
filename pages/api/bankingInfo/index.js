import dbConnection from "../../../utils/dbConnection";
import User from "../../../models/User";
import TransectionHistory from "../../../models/TransectionHistory";

// calling database connection
dbConnection();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, users: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, user: user });
      } catch (error) {
        res.status(400).json({ success: false, message: "unable to post" });
      }
      break;
    default:
      res.status(400).json({ success: false, message: "method not found" });
      break;
  }
};
