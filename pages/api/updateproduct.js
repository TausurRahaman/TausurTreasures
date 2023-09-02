import Product from "../../models/Product"
import connectdb from "../../middleware/mongoose"

const handler = async (req,res)=>{
    if(req.method == 'POST'){
        for(let i=0; i<req.body.length; i++){
            let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        res.status(200).json({success: "Product has been updated"})
    }else{
        res.status(404).json({ error: "No way to crack this out" })
    }
}

export default connectdb(handler)