import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { method } = req;
    switch (method) {
      case "POST":
        try {
        console.log("nothing here")
          res.status(201).json({ success: true });
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
