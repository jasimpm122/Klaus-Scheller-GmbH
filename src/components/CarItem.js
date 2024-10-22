import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Button from '@mui/material/Button';

function CarItem({ imageUrl, title, description, onSubmitForm }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        emailId: "",
        phoneNumber: "",
        model: title
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [successDialogOpen, setSuccessDialogOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setSuccessMessage(''); // Reset the success message when opening the dialog
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await onSubmitForm(formData); // Submit the form
            setSuccessMessage('You will hear from us shortly'); // Set the success message
            setFormData({ name: "", emailId: "", phoneNumber: "", model: title }); // Reset form data
            setSuccessDialogOpen(true); // Open the success message dialog

            // Automatically close the success dialog after 5 seconds
            setTimeout(() => {
                setSuccessDialogOpen(false); // Close the dialog after the timeout
            }, 5000); // 5000 ms = 5 seconds
        } catch (error) {
            console.error('Error submitting form:', error);
            setSuccessMessage('There was an error submitting your enquiry. Please try again.');
            setSuccessDialogOpen(true); // Open the error message dialog

            // Automatically close the error dialog after 5 seconds
            setTimeout(() => {
                setSuccessDialogOpen(false); // Close the dialog after the timeout
            }, 5000); // 5000 ms = 5 seconds
        } finally {
            handleClose(); // Close the main dialog
        }
    };

    return (
        <div style={{ margin: '20px 0px', width: '75%' }}>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <img src={imageUrl} alt={title} className="car-image" />
                </Grid>
                <Grid item xs={6}>
                    <div className="car-description">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Button sx={{ width: '100%' }} variant="contained" onClick={handleClickOpen}>Enquire Now</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>

            {/* Main enquiry dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Enquire Now</DialogTitle>
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

            {/* Success message dialog */}
            <Dialog open={successDialogOpen} onClose={() => setSuccessDialogOpen(false)}>
                <DialogTitle>Notification</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ color: 'green' }}>
                        {successMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSuccessDialogOpen(false)} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CarItem;
