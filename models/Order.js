import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
      {
        name:{
            type:String,
            required: true
          },
      }
     

);


export default mongoose.Order || mongoose.model('Order',OrderSchema); 