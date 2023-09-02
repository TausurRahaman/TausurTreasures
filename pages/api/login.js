import User from "../../models/User";
import connectdb from "../../middleware/mongoose";
import CryptoJS from "crypto-js";
import jwt from 'jsonwebtoken'

const handler = async(req,res)=>{
    if(req.method == 'POST'){
        let user = await User.findOne({ "email": req.body.email })
        const bytes = CryptoJS.AES.decrypt(user.password, 'secret123')
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
        console.log(decryptedData)
        if(user){
            if(req.body.password === decryptedData && user.email === req.body.email){
                const token = jwt.sign({ name: user.name, email: user.email }, 'jwtsecret', {
                    expiresIn: '2d'
                })
                res.status(200).json({success: true, token})
            }else{
                res.status(404).json({ success: false , error: 'Invalid credentials' })
            }
        }else{
            res.status(404).json({ success: false, error: 'User not found' })
        }
    }else{
        res.status(404).json({ success: false, error: 'Try another way' })
    }
}

export default connectdb(handler)