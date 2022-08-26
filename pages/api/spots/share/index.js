import dbConnect from "../../../../utils/dbConnect";
import Spot from "../../../../models/Spot";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const spot = await Spot.create({
          image: req.body.url,
          title: req.body.form.title,
          category: req.body.form.category,
          location: req.body.form.location,
          bust: req.body.form.bust,
          ig: req.body.form.ig,
          description: req.body.form.description
      });
      console.log(spot)
        res.status(201).json({ success: true, data: spot });
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
