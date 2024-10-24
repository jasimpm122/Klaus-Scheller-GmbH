import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { Paper, Button } from '@mui/material';
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; 
import Carousel from 'react-material-ui-carousel';  
 

function CarItem({ images, title, description, onSubmitForm }) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        emailId: "",
        phoneNumber: "",
        price: "", 
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
            setSuccessMessage('Sie werden in Kürze von uns hören'); // Set the success message
            setFormData({ name: "", emailId: "", phoneNumber: "", price: "", model: title }); // Reset form data
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
        <div style={{ margin: '40px 0px', width: isTabletOrMobile ? '100%' : '75%' }}>
            <Grid container spacing={8} direction={isTabletOrMobile ? 'column' : 'row'}>
                <Grid item xs={12} sm={6}>
                {images && images.length > 0 ? (        
                <Carousel autoPlay={false} navButtonsAlwaysVisible={true} indicators={false}>
                        {images.map((image, index) => (
                            <Paper key={index}>
                                <img src={image} alt={title} className="car-image" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                            </Paper>
                        ))}
                    </Carousel>
                    ) : (
                <p>No images available.</p>
                )}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="car-description">
                        <h3 className='car-title'>{title}</h3>
                        <p className='car-description-text'>{description}</p>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button sx={{ width: '100%' }} variant="contained" onClick={handleClickOpen}>Jetzt anfragen</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>

            {/* Main enquiry dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Jetzt anfragen</DialogTitle>
                <DialogContent>
                    <DialogContentText>Geben Sie Ihre Daten ein, um eine Anfrage zu diesem Auto zu stellen.</DialogContentText>
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
                        label="E-Mail Adresse "
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={formData.emailId}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="phoneNumber"
                        label="Handy/Festnetznummer"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    {/* New field for price */}
                    <TextField
                        margin="dense"
                        name="price"
                        label="Preisangebot"
                        type="text" // You can change this to "number" if you prefer numeric input
                        fullWidth
                        variant="outlined"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">Abbrechen</Button>
                    <Button onClick={handleSubmit} color="primary">Absenden</Button>
                </DialogActions>
            </Dialog>

            {/* Success message dialog */}
            <Dialog open={successDialogOpen} onClose={() => setSuccessDialogOpen(false)}>
                <DialogTitle>Benachrichtigung</DialogTitle>
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
