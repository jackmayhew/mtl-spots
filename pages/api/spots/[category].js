import Spot from "../../../models/Spot";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const {
    query: { category },
    method,
  } = req;

  req.query.page == 0
    ? (req.query.page = 1)
    : (req.query.page = req.query.page);
  const page = req.query.page ? parseInt(req.query.page) : 1;

  switch (method) {
    case "GET":
      try {
        const count = await Spot.countDocuments({
          category: new RegExp(req.query.category, "i"),
        }).exec();
        const spots = await Spot.find({
          category: new RegExp(req.query.category, "i"),
        })
          .limit(12)
          .skip((page - 1) * 12);
        res.status(200).json({ success: true, data: spots, count: count });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
