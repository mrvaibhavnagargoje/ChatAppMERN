const { getReceiverSocketId, io } = require("../../SocketIO/server");
const Conversation = require("../models/conversationModel");
const Message = require("../models/messageModel");

// ✅ Send Message Controller
const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // Find or create conversation
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
      });
    }

    // Create message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // Add message to conversation
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // Save both in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    // Emit socket message if receiver is online
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    // Return response
    res.status(201).json(newMessage);
  } catch (error) {
    console.error("❌ Error in sendMessage:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ✅ Get Messages Controller
const getMessage = async (req, res) => {
  try {
    const { id: chatUser } = req.params;
    const senderId = req.user._id;

    // Find conversation
    const conversation = await Conversation.findOne({
      members: { $all: [senderId, chatUser] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]); // 200 is more appropriate than 201 here
    }

    const messages = conversation.messages;
    res.status(201).json(messages);
  } catch (error) {
    console.error("❌ Error in getMessage:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { sendMessage, getMessage };





// const { getReceiverSocketId } = require("../../SocketIO/server");
// const Conversation = require("../models/conversationModel");
// const Message = require("../models/messageModel");

// const sendMessage = async (req, res) => {
//     try {
//       const { message } = req.body;
//       const { id: receiverId } = req.params;
//       const senderId = req.user._id; // current logged in user
//       let conversation = await Conversation.findOne({
//         members: { $all: [senderId, receiverId] },
//       });
//       if (!conversation) {
//         conversation = await Conversation.create({
//           members: [senderId, receiverId],
//         });
//       }
//       const newMessage = new Message({
//         senderId,
//         receiverId,
//         message,
//       });
//       if (newMessage) {
//         conversation.messages.push(newMessage._id);
//       }
//       // await conversation.save()
//       // await newMessage.save();
//       await Promise.all([conversation.save(), newMessage.save()]); // run parallel
//       const receiverSocketId = getReceiverSocketId(receiverId);
//       if (receiverSocketId) {
//         io.to(receiverSocketId).emit("newMessage", newMessage);
//       }
//       res.status(201).json({message:"Message sent successfully"},newMessage);
//     } catch (error) {
//       console.log("Error in sendMessage", error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   };

//   const getMessage = async (req, res)=>{
//     try {
//         const { id: chatUser } = req.params;
//         const senderId = req.user._id; // current logged in user
//         let conversation = await Conversation.findOne({
//           members: { $all: [senderId, chatUser] },
//         }).populate("messages");
//         if (!conversation) {
//           return res.status(201).json([]);
//         }
//         const messages = conversation.messages;    
//         res.status(201).json(messages);
//       } catch (error) {
//         console.log("Error in getMessage", error);
//         res.status(500).json({ error: "Internal server error" });
//       }
//   }

//   module.exports = { sendMessage,getMessage }

