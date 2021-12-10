const Booking=require("../modal/adminbooking");


exports.createBooking= async(req,res,next)=>{
        console.log("form values",req.body);
        let {date,attendees,room,layout,address,duration,status,paymentMethod,roomPrice,equipmentPrice,foodDrinkPrice,subtotal,tax,total,deposite,title, name,email,phone, notes,  company,  city, state,  zip,country}=req.body;
    let booking= new Booking({
        date:  date,
        attendees: attendees,
        room: room,
        layout:  layout,
        duration:duration,
        status:status,
        paymentMethod: paymentMethod,
        roomPrice:  roomPrice,
        equipmentPrice: equipmentPrice,
        foodDrinkPrice:foodDrinkPrice,
        subtotal:subtotal,
        tax: tax,
        total: total,
        deposite: deposite,
        title: title,
        name:  name,
        email: email,
        phone:  phone,
        notes: notes,
        company: company,
        address: address,
        city: city,
        state:state,
        zip: zip,
        country: country,
        
    });
    console.log("booning",booking);
//    await booking.save().then(createdbooking=>{
//         console.log("createdbooking",createdbooking)
//         res.status(201).json({
//             message:"booking done sucessfully",
//             post:{
//                 ...createdbooking,
//                 id:createdbooking._id,
//             }
//         })
//     }).catch(err=>{
//         res.status(500).json({message:"creating the booking failed"})
//     });
    // console.log(post);
    try {
      let p=  await booking.save()
        console.log("connected");
         res.status(201).send(p);
        // res.status(201).json({
        //                 message:"booking done sucessfully",
        //                 post:{
        //                     ...p,
        //                     id:p._id,
        //                 }
        //             })
      } catch (err) {
        console.log(err);
        res.status(500).json({message:"creating the booking failed"})
      }
}
exports.getBooking=async(req,res,next)=>{
const bookingData=Booking.find();
const booking=await bookingData;
return res.status(200).send([
   ...booking
]);

}
exports.deleteBooking=async(req,res,next)=>{
  let deletinggData= await Booking.deleteOne({_id:req.params.id});
// const booking=await bookingData;
return res.status(200).send([
   "deleted Sucessfully"
]);

}
exports.editBooking=async(req,res,next)=>{
const bookingData=Booking.delete();
const booking=await bookingData;
return res.status(200).send([
   ...booking
]);

}