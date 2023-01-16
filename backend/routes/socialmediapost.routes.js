const express = require("express");
const { socialPostModel } = require("../model/socialmediapost.model");

const socialpostRouter = express.Router();
socialpostRouter.use(express.json());


socialpostRouter.get("/", async (req, res)  => {
  const {device,device1,device2} = req.query;
  console.log(req.query)
  let posts;

  try {
    posts = await socialPostModel.find();

    if(device){
        posts = await socialPostModel.find({device:device})
    };
    
    if (device1 && device2) {
        posts = await socialPostModel.find({device1:device,device2:device})
    } 

    res.status(201).send(posts)
  } catch (error) {
    res.status(401).send({
      error,
      message: "Something went wrong in getting all the Posts present",
    });
  }

});

socialpostRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const new_post = new socialPostModel(payload);
    await new_post.save();
    res.send("Created The Post");
  } catch (error) {
    console.log(error);
    res.send({"msg":"Something went wrong"})
  }
});

socialpostRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  const post = await socialPostModel.find({ _id: id });
  const userID_in_post = post.userID;
  const userID_making_req = req.body.userID;

  try {
    if (userID_making_req !== userID_in_post) {
      res.send({ msg: "You Are Not Authorized" });
    } else {
      await socialPostModel.findByIdAndUpdate({ _id: id }, payload);
      res.send("Updated The Post");
    }
  } catch (error) {
    console.log(error);
  }
});

socialpostRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const post = await socialPostModel.find({ _id: id });
  const userID_in_post = post.userID;
  const userID_making_req = req.body.userID;

  try {
    if (userID_making_req !== userID_in_post) {
      res.send({ msg: "You Are Not Authorized" });
    } else {
      await socialPostModel.findByIdAndDelete({ _id: id });
      res.send("Deleted The Post");
    }
  } catch (error) {
    console.log(error);
  }
});


module.exports = {
   socialpostRouter,
};