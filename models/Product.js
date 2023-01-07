import mongoose from 'mongoose' ;

const ProductSchema = new mongoose.Schema({
       title:{  
         type:String,
         required:true,
         maxlenght:60
       },
       desc:{
        type:String,
        require:true ,
        maxlenght:200
       },
       img:{
        type:String,
        required: true,
       },
       prices:{
        type:[Number],
       },
       extraOptions:{
          type:[
             {
              text:{type:String, required:true},
              price:{type:Number, required:true},
            },],
       },
     createdDate:{ 
          type:String,
          default:Date.now()
     }
})

//export default mongoose.model("Product",ProductSchema) ;