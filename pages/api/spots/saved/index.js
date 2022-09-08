import Spot from "../../../../models/Spot";
import dbConnect from "../../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  // req.query.page == 0
  //   ? (req.query.page = 1)
  //   : (req.query.page = req.query.page);
  // const page = req.query.page ? parseInt(req.query.page) : 1;
  switch (method) {
    case "GET":
      try {
        // const count = await Spot.  countDocuments({}).exec();
        const spots = await Spot.find({});
        // .sort({ _id: -1 })
        // .limit(12)
        // .skip((page - 1) * 12);
        res.status(200).json({ success: true, data: spots });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
