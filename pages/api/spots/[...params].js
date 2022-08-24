import dbConnect from "../../../utils/dbConnect";
import Spot from "../../../models/Spot";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  const id_query = req.query.params[1];

  switch (method) {
    case "GET":
      try {
        const spot = await Spot.findById(id_query);
        if (!spot) {
          res.status(400).json({ success: false });
        }
        const related = await Spot.find({
          category: new RegExp(spot.category, "i"),
        })
          .sort({ _id: -1 })
          .limit(7);
        res.status(200).json({ success: true, data: spot, related: related });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
