import express, { Request, Response ,} from "express";
const User = require ("../model.ts");

import { Types } from 'mongoose';
const Router = express.Router();
interface IRequestBody {
    text: string;
    objectId: string;
    newtext: string
}
Router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await User.find(); 
        res.status(200).json(data);
    } catch (err) { 
        res.status(500).json({ message: "Internal Server Error" });
    }
});

Router.post("/add", async (req: Request<IRequestBody>, res: Response): Promise<void> => {
    const { text } = req.body;

    if (!text) {
        res.status(400).json({ message: "Text is required" });
        return;
    }

    try {
        const user = new User({ Text: text });
        await user.save();
        res.status(200).json({ message: "Text saved" });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
Router.post("/updatetext", async (req: Request<IRequestBody>, res: Response) => {
    const { text, _id } = req.body;

    if (!_id) {
        res.status(400).json({ message: "Invalid ObjectId format" });
        return;
    }

    try {
        if (!text) {
            res.status(400).json({ message: "new Text is required" });
            return;
        }

        await User.findOneAndUpdate({ _id }, { Text: text });
        res.status(200).json({ message: "newtext updated" });

    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

Router.post("/del", async (req: Request<IRequestBody>, res: Response) => {
    const { _id } = req.body;

    if (!Types.ObjectId.isValid(_id)) {
        res.status(400).json({ message: "Invalid ObjectId format" });
        return;
    }

    try {


        await User.findOneAndDelete(_id);
        res.status(200).json({ message: "newtext updated" });

    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});



module.exports = Router


 