import Order from "../../../models/Order";
import dbConnect from "../../../util/mongo";

export const handler = async (req,res) =>{
    const{ method } =req ;
  
    if(method === "GET"){
        try {
            
        } catch (error) {
          return res.status(500).json(error)   
        }
    }
    if(method === "POST"){
        try {
            
        } catch (error) {
          return res.staus(500).json(error)
        }
    }

}