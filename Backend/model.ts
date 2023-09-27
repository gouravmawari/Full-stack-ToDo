import mongoose,{connect, mongo} from "mongoose";

interface user{
    Text:string
}
const userscehma = new mongoose.Schema<user>({
    Text:{type:String,require:true}
})
const User =mongoose.model("inter",userscehma);
module.exports = User;