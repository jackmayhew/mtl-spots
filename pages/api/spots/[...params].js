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
        res.status(200).json({ success: true, data: spot });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
