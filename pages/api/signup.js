import User from "../../models/User"
import connectdb from "../../middleware/mongoose"
import CryptoJS from "crypto-js"

const handler = async (req,res)=>{
    if(req.method == 'POST'){
        let u = new User({
            name: req.body.name,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, 'secret123').toString()
        })
        await u.save()
        res.status(200).json({success: "Added to the DB"})
    }else{
        res.status(404).json({error: "This method is not allowed"})
    }
}

export default connectdb(handler)