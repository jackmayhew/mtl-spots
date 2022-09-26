import Spot from "../../../models/Spot";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case "POST":
            try {
                if (req.query.user === process.env.NEXT_PUBLIC_ADMIN_ID) {
                    Spot.findByIdAndDelete(req.query.spot, (err) => {
                        if (err) {
                            return next(err);
                        }
                    });
                    res.status(201).json({ success: true });
                } else {
                    res.status(400).json({ success: false });
                }

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
