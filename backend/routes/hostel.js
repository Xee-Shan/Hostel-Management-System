const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Student = mongoose.model(
  "Student",
  new mongoose.Schema({
    name: String,
    regNo: String,
    email: String,
    password: String,
    phoneNo: String,
    parentName: String,
    parentPhoneNo: String,
    dateOfBirth: Date,
    address: String
  })
);

const Employee=mongoose.model('Employee',new mongoose.Schema({
  name: String,
  phoneNo:String,
  type: String,
  dateOfBirth: Date,
  address: String,
  salary: Number,
  cnic: String,
  dateOfJoining: {type:Date,default:Date.now}
}));

router.post('/employee',async (req,res)=>{
  const employee=new Employee({
    name:req.body.name,
    phoneNo:req.body.phoneNo,
    type: req.body.type,
  dateOfBirth: req.body.dateOfBirth,
  address: req.body.address,
  salary: req.body.salary,
  cnic:req.body.cnic
  });
  await employee.save();
});
router.get('/show/employee',async (req,res)=>{
  const employee=await Employee.find();
  res.send(employee);
});
router.get('/show/:id',async (req,res)=>{
  const employee=await Employee.find({_id:req.params.id});
  res.send(employee);
});
router.delete('/employee/:id',async (req,res)=>{
  const employee=await Employee.findByIdAndDelete({_id:req.params.id});
  res.send(employee);
});

router.post("/create", async (req, res) => {
  const student = new Student({
    name: req.body.name,
    regNo: req.body.regNo,
    email: req.body.email,
    password: req.body.password,
    phoneNo: req.body.phoneNo,
    parentPhoneNo: req.body.parentPhoneNo,
    dateOfBirth: req.body.dateOfBirth,
    address: req.body.address
  });
  await student.save();
});

router.get("/show", async (req, res) => {
  const student=await Student.find().select('email password name');
  res.send(student);
});

router.get("/admin", async (req, res) => {
  const student=await Student.find().select('name regNo email phoneNo parentPhoneNo dateOfBirth address');
  res.send(student);
});

router.delete('/admin/delete/:id',async (req,res)=>{
  const student=await Student.findByIdAndDelete({_id:req.params.id});
  res.send(student);
});

const Room=mongoose.model('Room',new mongoose.Schema({
  roomNo: Number,
  price: Number,
  utilities:String,
  status:String,
  name:String,
  bed:Number,
  counter: Number
}));

router.post('/room',async (req,res)=>{
  const room=new Room({
    roomNo:req.body.roomNo,
    price:req.body.price,
    utilities:req.body.utilities,
    status:req.body.status,
    bed: req.body.bed,
    counter:req.body.bed,
    name:""
  });
  await room.save();
});
router.get('/room/show',async (req,res)=>{
  const room=await Room.find().select("roomNo utilities bed price status counter name");
  res.send(room);
});
router.put('/update/:id/:name',async (req,res)=>{
  const room=await Room.findById(req.params.id);
  if(room.name!==""){
 room.name=room.name+","+req.params.name;
  }
  else{
    room.name=req.params.name;
  }
  await room.save();
});
router.put('/status/:id/:status/:counter',async (req,res)=>{
  const room= await Room.findById(req.params.id);
  room.status=req.params.status;
  room.counter=req.params.counter;
  await room.save();
});
router.get('/request',async (req,res)=>{
  const room=await Room.find().select("roomNo utilities name status bed counter");
  res.send(room);
});

module.exports = router;
