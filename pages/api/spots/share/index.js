import dbConnect from "../../../../utils/dbConnect";
import Spot from "../../../../models/Spot";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const spot = await Spot.create(req.body);
        res.status(201).json({ success: true, data: spot });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
