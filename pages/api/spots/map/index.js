import Spot from "../../../../models/Spot";
import dbConnect from "../../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {

  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const spots = await Spot.find({});
        res.status(200).json({ success: true, data: spots });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
