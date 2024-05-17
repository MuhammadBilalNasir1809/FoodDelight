import userModel from "../Models/Usermodel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({
                success: false,
                message: "User already exists"
            });
        }

        // Validate email and password
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Enter a valid email"
            });
        }
        if (password.length < 9) {
            return res.json({
                success: false,
                message: "Enter a strong password"
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedpassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error" });
    }
};

const loginUser = async (req, res) => {
    const {email,password} =req.body;
    try{
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({
                success:false,
                meessage:"userDontExist"
            })
        }
        const ismatch = await bcrypt.compare(password,user.password);
        if(!ismatch)
        {
            return res.json({
                success:false,
                message:"invalid ",
            })
        }
        const token = createToken(user._id)
        res.json({
            success:true,token
        })
    } catch(error)
    {
        console.log(error)
        res.json({success:false,message:"error"})
    }
};

export { loginUser, registerUser };
