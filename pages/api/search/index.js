import Spot from "../../../models/Spot";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  req.query.page == 0
    ? (req.query.page = 1)
    : (req.query.page = req.query.page);
  const page = req.query.page ? parseInt(req.query.page) : 1;
  switch (method) {
    case "GET":
      try {
        const count = await Spot.countDocuments({
          $or: [
            { title: { $regex: req.query.term, $options: "i" } },
            { category: { $regex: req.query.term, $options: "i" } },
            { location: { $regex: req.query.term, $options: "i" } },
          ],
        }).exec();

        const spots = await Spot.find({
          $or: [
            { title: { $regex: req.query.term, $options: "i" } },
            { category: { $regex: req.query.term, $options: "i" } },
            { location: { $regex: req.query.term, $options: "i" } },
          ],
        })
          .sort({ _id: -1 })
          .limit(12)
          .skip((page - 1) * 12);
        res.status(200).json({ success: true, data: spots, count: count });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
