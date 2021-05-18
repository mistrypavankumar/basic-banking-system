import dbConnection from "../../../utils/dbConnection";
import User from "../../../models/User";
import TransectionHistory from "../../../models/TransectionHistory";

// calling database connection
dbConnection();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const note = await User.findById(id);

        if (!note) {
          return res
            .status(400)
            .json({ success: false, message: "note not found" });
        }

        res.status(200).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const note = await User.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!note) {
          return res
            .status(400)
            .json({ success: false, message: "note not found" });
        }

        res.status(200).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deleteNote = await User.deleteOne({ _id: id });

        if (!deleteNote) {
          return res
            .status(400)
            .json({ success: false, message: "note not deleted" });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
