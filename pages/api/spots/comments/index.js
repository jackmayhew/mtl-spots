import dbConnect from "../../../../utils/dbConnect";
import Comment from "../../../../models/Comment";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    // call this when comment gets submitted
    // avoid calling 2 fetches on original request
    case "GET":
      try {
        const comment = await Comment.find({ spot: req.query.spot }).sort({
          _id: -1,
        });
        res.status(201).json({ success: true, comment: comment });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const comment = await Comment.create({
          comment: req.body.form.comment,
          spot: req.body.form.spot,
        });
        res.status(201).json({ success: true, data: comment });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
