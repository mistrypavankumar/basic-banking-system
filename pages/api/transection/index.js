import dbConnection from "../../../utils/dbConnection";
import TransectionHistory from "../../../models/TransectionHistory";

// calling database connection
dbConnection();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const transections = await TransectionHistory.find({});
        res.status(200).json({ success: true, transections: transections });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const transection = await TransectionHistory.create(req.body);
        res.status(201).json({ success: true, transection: transection });
      } catch (error) {
        res.status(400).json({ success: false, message: "unable to post" });
      }
      break;
    default:
      res.status(400).json({ success: false, message: "method not found" });
      break;
  }
};
