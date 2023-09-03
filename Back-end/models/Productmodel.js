const mongoose = require ('mongoose');

const productSchema=new mongoose.Schema({
    title:{
        type : String,
        require:true
    },
    imgurl:{
        type : String,
        require:true,
        // unique:true
    },
    des:{
        type : String,
    },
    price:{
        type : Number,
        require:true
    },
    deleteprice:{
        type : Number,
    },
    cat:{
    type: String,
    }
})

const Products=mongoose.model('Products',productSchema);
 
module.exports=Products;
