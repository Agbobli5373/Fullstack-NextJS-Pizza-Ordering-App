import mongoose from 'mongoose' ;

const ProductSchema = new mongoose.Schema({
       name:{
         type:String,
         required:true
       },
       prices:{
        type:[Number],
       },
       extraOptions:{
          type:[number]
       }
})

export default mogoose.Product || mongoose.models('Product',ProductSchema);