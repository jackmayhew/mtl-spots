import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        res.status(200).json({ success: true, data: 'spots' });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
