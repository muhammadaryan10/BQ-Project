const mongoose = require ('mongoose');

const cartSchema=new mongoose.Schema({
    title:{
        type : String,
        require:true
    },
    imgurl:{
        type : String,
        require:true,
        // unique:true
    },
    price:{
        type : Number,
        require:true
    },
    cat:{
    type: String,
    }
})

const CartProducts=mongoose.model('CartProducts',cartSchema);
 
module.exports=CartProducts;
