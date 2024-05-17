import foodModel from "../Models/Foodmodel.js";
import fs from 'fs'


// add food items in db
const addFood = async(req,res) =>{
   let image_filename= `${req.file.filename}`;

   const food = new foodModel({
      name:req.body.name,
      description:req.body.description,
      price:req.body.price,
      category:req.body.category,
      image:image_filename
   })
   try{
    await food.save();
    res.json({
        success:true,
        message:"FoodAdded"
    })
   } catch(error){
       console.log(error)
       res.json({
        success:false,
        message:"error"
       })
   }
}

//all food list
const listFood = async(req,res)=>{
    try{
        const foods= await foodModel.find({});
        res.json({success:true,data:foods})
    } catch(error)
    {
        console.log(error);
        res.json({success:false,message:"error"})
    }

}

//remove food

// Remove food
const RemoveFood = async (req, res) => {
    try {
      const food = await foodModel.findById(req.body.id);
      if (food) {
        fs.unlink(`upload/${food.image}`, (err) => {
          if (err) console.log(err);
        });
  
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({
          success: true,
          message: "food removed"
        });
      } else {
        res.json({
          success: false,
          message: "food not found"
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "error"
      });
    }
  };
  
export {addFood,listFood,RemoveFood}