const mongoose = require('mongoose');

 const conversationSchema = mongoose.Schema({
    
    participant:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message',
        default:[]
    }]


},{timestamp:true})


module.exports = mongoose.model('Conversation',conversationSchema);


 