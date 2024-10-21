import React, { useEffect, useState } from 'react';
import logo from '../newcar.PNG';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Button from '@mui/material/Button';


function CarItem({ imageUrl, title, description, onSubmitForm }) {
    const [open, setOpen] = useState(false);
    const[formData, setFormData] = useState({
        name: "",
        emailId: "",
        phoneNumber: "",
        model: title
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = () => {
        onSubmitForm(formData);
        handleClose();
    }


  return (
    <div style={{margin:'20px 0px',width:'75%'}}>
    <Grid container spacing={6} >
      <Grid item xs={6}>
      <img src={imageUrl} alt={title} className="car-image" />
      </Grid>
      <Grid item xs={6}>
    <div className="car-description">
      <h3>{title}</h3>
      <p>{description}</p>
      <Grid container spacing={2}>
        <Grid item xs={6} direction={'row'}>
        <Button sx={{width:'100%'}} variant="contained" onClick={handleClickOpen}>Enquire Now</Button>
        </Grid>
      </Grid>
    </div>
    </Grid>
    </Grid>

    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enquire now</DialogTitle>
        <DialogContent>
        <DialogContentText>Enter your details to enquire about this car.</DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
        />
        <TextField 
            margin="dense"
            name="emailId"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.emailId}
            onChange={handleChange}
        />

        <TextField
            margin="dense"
            name="phoneNumber"
            label="Mobile number"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.phoneNumber}
            onChange={handleChange}
        />    

        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="secondary">Cancel</Button>
            <Button onClick={handleSubmit} color="primary">Submit</Button>
        </DialogActions>
    </Dialog>
  </div>
  );
}

export default CarItem;
