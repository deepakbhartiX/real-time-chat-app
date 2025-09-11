const { Socket } = require('socket.io');
const Conversation = require('../models/conversation.model')
const Message = require('../models/message.model');
const { getReceiverSocketId, io } = require('../SocketIO/server');


const sendMessage = async (req, res) => {

    try {
        const { message } = req.body;
        const { id:receiverId} = req.params;
        const senderId = req.user._id; //curent logged in user

        let conversation = await Conversation.findOne({
            participant: { $all: [senderId, receiverId] },

        })

        if (!conversation) {
            conversation = await Conversation.create({
                participant: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()])


         const receiversocketId =  getReceiverSocketId(receiverId)

        //  console.log(newMessage)
        //  console.log(receiversocketId)
    
        if(receiversocketId){
           io.to(receiversocketId).emit("newMessage",newMessage)
        }



        res.status(201).json(newMessage)

    }

    catch (error) {
        console.log('Error from sending message' + error)
        res.status(505).json({ message: "Internal Server Error" });
    }

}


const getMessage = async (req, res) => {


    try {
        const { id: chatUser } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participant: { $all: [senderId, chatUser] }
        }).populate("messages");

        if (!conversation) {
            return res.status(201).json({})
        }

        const message = conversation.messages;
        // console.log(message)
        res.status(201).json(message);

    } catch (error) {
        console.log("Error from getting messaage" + error)
    }

}

module.exports = { sendMessage, getMessage }

