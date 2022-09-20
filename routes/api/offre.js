const express = require('express');
const router = express.Router();
const Offre = require('../../models/Offre');
const { check, validationResult } = require('express-validator');
const upload = require('../../middleware/resumes.storage');
const auth = require('../../middleware/auth');
const User = require('../../models/User');



// @route    POST api/posts/comment/:id
// @desc     Comment on a post
// @access   Private
router.post(
  '/postuler/:id',
  auth , upload.single("resume"), async (req, res) => {
  
    try {
      const user = await User.findById(req.user.id).select('-password');
      const offre = await Offre.findById(req.params.id);

      const newCondidat = {
        user: req.user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: req.body.email,
        resume: req.file.filename,
      };

      offre.Condidature.unshift(newCondidat);

      await offre.save();

      res.json(offre.Condidature);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
router.get('/:id', async (req, res) => {
  try {
    const offre = await Offre.findById(req.params.id);
    res.json(offre);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

  router.get('/:id', async (req, res) => {
    try {
      const offre = await Offre.findById(req.params.id);
      res.json(offre);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.get('/', async (req, res) => {
    try {
      const offres = await Offre.find().sort({ date: -1 });
      res.json(offres);
    } catch (err) {
      return res.status(500).json({ msg: "Server error" });
    }
  });



  router.delete('/:id', async (req, res) => {
    try {
      const offre = await Offre.findById(req.params.id);
      await offre.remove();
      const offres = await Offre.find().sort({ date: -1 });;

      res.json(offres);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  
  
router.post(
    '/',
    [
      check('Title', 'Title is required').notEmpty(),
      check('Description', 'Description is required').notEmpty(),
      check('Address', 'Address is required').notEmpty(),
      check('Type', 'Type is required').notEmpty(),
    ], async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      try {

        const newRequest = new Offre({
            Title: req.body.Title,
            Description: req.body.Description,
            Address: req.body.Address,
            Type:req.body.Type,
        });
    
        const myoffre = await newRequest.save();
        
        res.json(myoffre);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

  router.put('/:id', async (req, res) => {
    try {
      const offre = await Offre.findById(req.params.id);

 if(offre){
    offre.Title= req.body.Title?req.body.Title:offre.Title;
    offre.Description=req.body.Description?req.body.Description:offre.Description;
    offre.Address=req.body.Address?req.body.Address:offre.Address;
    offre.Type=req.body.Type?req.body.Type:offre.Type;
 };

await offre.save();
      res.json(offre);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  

  router.put('/Accepted/:id/:idCondidat',auth, async (req, res) => {
    try {
      const offre = await Offre.findById(req.params.id);
      const admin= await User.findById(req.user.id).select('-password');

let myid;
      offre.Condidature.map(x=>{
if(x._id==req.params.idCondidat){
x.MeetingTime=req.body.MeetingTime;
x.State="Accepted",
myid=x.user;
}
      })
      const user = await User.findById(myid);
      const newRequest = {
        firstname:user.firstname,
        lastname:user.lastname,
        Title:offre.Title,
        MeetingTime: req.body.MeetingTime,
        State: "AcceptForEntretien",
        Meetingid:req.user.id+myid

    };
    await admin.Notification.unshift(newRequest);  
    await user.Notification.unshift(newRequest);  
    await user.save();
    await admin.save();

await offre.save();
      res.json(offre);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });


  
  router.put('/AcceptedForJob/:id/:idCondidat',auth, async (req, res) => {
    try {
      const admin= await User.findById(req.user.id).select('-password');
      const offre = await Offre.findById(req.params.id);

let myid;
      offre.Condidature.map(x=>{
if(x._id==req.params.idCondidat){
x.MeetingTime=req.body.MeetingTime;
x.State="AcceptedForJob",
myid=x.user;
}
      })
      const user = await User.findById(myid);
      const newRequest = {
        firstname:user.firstname,
        lastname:user.lastname,
        Title:offre.Title,
        MeetingTime: req.body.MeetingTime,
        State: "AcceptedForJob",
    };
    await admin.Notification.unshift(newRequest);  
    await user.Notification.unshift(newRequest);  
    await admin.save();

    await user.save();

await offre.save();
      res.json(offre);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });

  
  router.put('/rejected/:id/:idCondidat',auth, async (req, res) => {
    try {
      const admin= await User.findById(req.user.id).select('-password');
      const offre = await Offre.findById(req.params.id);
      let myid;


      offre.Condidature.map(x=>{
if(x._id==req.params.idCondidat){
x.State="Rejected"
myid=x.user;

}
      })
      const user = await User.findById(myid);
      const newRequest = {
        firstname:user.firstname,
        lastname:user.lastname,
        Title:offre.Title,
        MeetingTime: req.body.MeetingTime,
        State: "RejectedForEntretien",
       
    };
    await admin.Notification.unshift(newRequest);  
    await user.Notification.unshift(newRequest);  
    await user.save();
    await admin.save();



await offre.save();
      res.json(offre);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });


  router.put('/RejectedForJob/:id/:idCondidat',auth, async (req, res) => {
    try {
      const admin= await User.findById(req.user.id).select('-password');
      const offre = await Offre.findById(req.params.id);
      let myid;


      offre.Condidature.map(x=>{
if(x._id==req.params.idCondidat){
x.State="RejectedForJob"
myid=x.user;

}
      })
      const user = await User.findById(myid);
      const newRequest = {
        firstname:user.firstname,
        lastname:user.lastname,
        Title:offre.Title,
        MeetingTime: req.body.MeetingTime,
        State: "RejectedForJob",
       
    };
    await admin.Notification.unshift(newRequest);  
    await user.Notification.unshift(newRequest);  
    await user.save();
    await admin.save();
    await offre.save();
      res.json(offre);
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });
  module.exports = router;