//import Product from "../../../models/Product";
//import dbConnect from "../../../util/mongo" ;
export default async function handler (req,res){
     const {method} = req ;
     
     //dbConnect();

     if(method ==='GET'){
        try {
            return method ;
        } catch (error) {
            res.status(500).json(err)
        }
     }

     if(method ==='POST'){
       try {
    
           } catch (error) {
              res.status(500).json(error)
           }
         
     }
}