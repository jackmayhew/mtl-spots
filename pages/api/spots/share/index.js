import dbConnect from "../../../../utils/dbConnect";
import Spot from "../../../../models/Spot";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
      //   let product = new Spot({
      //     business: req.body.businessName,
      //     productName: req.body.productName,
      //     category: req.body.productCategory,
      //     price: req.body.productPrice,
      //     description: req.body.productDescription,
      //     website: req.body.website,
      //     imageURL: "https://mylocalcomox.s3-us-west-2.amazonaws.com/" + req.imageName
      // });
        // console.log(req.body)
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
