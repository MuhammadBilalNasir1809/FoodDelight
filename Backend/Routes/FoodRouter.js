import Express from "express";
import { addFood, listFood ,RemoveFood } from "../Controllers/Foodcontroller.js";
import multer from 'multer';

const FoodRouter = Express.Router();

// Image Storage
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage:storage})


// Define a POST route for adding food
FoodRouter.post('/add',upload.single("image"), addFood);
FoodRouter.get("/list",listFood)
FoodRouter.post('/remove',RemoveFood)
export default FoodRouter;
