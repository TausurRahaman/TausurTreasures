import Product from "../../models/Product";
import connectdb from "../../middleware/mongoose";

const handler = async(req,res)=>{
    if(req.method == 'DELETE'){
        for(let i=0; i<req.body.length; i++){
            let products = await Product.findByIdAndDelete(req.body[i]._id, req.body[i])
        }
        res.status(200).json({ success: "Element has been trashed" })
    }else{
        res.method(404).json({ error: "Only delete method is allowed" })
    }
}

export default connectdb(handler)