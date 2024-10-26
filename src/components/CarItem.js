import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useMediaQuery } from 'react-responsive';
import '../App.css';

function CarItem({ images, title, description, price, onSubmitForm }) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const [open, setOpen] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        emailId: "",
        phoneNumber: "",
        price: "",
        model: title
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [successDialogOpen, setSuccessDialogOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClickOpen = () => {
        setOpen(true);
        setSuccessMessage('');
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await onSubmitForm(formData);
            setSuccessMessage('Sie werden in Kürze von uns hören');
            setFormData({ name: "", emailId: "", phoneNumber: "", price: "", model: title });
            setSuccessDialogOpen(true);

            setTimeout(() => {
                setSuccessDialogOpen(false);
            }, 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setSuccessMessage('There was an error submitting your enquiry. Please try again.');
            setSuccessDialogOpen(true);

            setTimeout(() => {
                setSuccessDialogOpen(false);
            }, 5000);
        } finally {
            handleClose();
        }
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const truncatedDescription = description.slice(0, 200);

    return (
        <div style={{ margin: '10px auto', width: '100%', maxWidth: '1200px' }}>
            <Grid container spacing={isMobile ? 2 : 6} direction={isTabletOrMobile ? 'column' : 'row'} alignItems="center">
                <Grid item xs={12} sm={6}>
                    {images && images.length > 0 ? (
                        <div className="image-slider" style={{
                            maxWidth: isTabletOrMobile ? '100%' : '600px',
                            margin: isTabletOrMobile ? '0 auto' : '0', 
                            display: 'flex', 
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            <button className="prev" onClick={goToPrevImage}>&lt;</button>
                            <img 
                                src={images[currentImageIndex]} 
                                alt={title} 
                                className="car-image" 
                                style={{ 
                                    width: '100%', 
                                    maxWidth: isTabletOrMobile ? '100%' : '600px',  
                                    height: isMobile ? '200px' : 'auto', 
                                    minHeight: isTabletOrMobile ? 'auto' : '400px', 
                                    objectFit: 'contain',  
                                    borderRadius: '8px' 
                                }} 
                            />
                            <button className="next" onClick={goToNextImage}>&gt;</button>
                        </div>
                    ) : (
                        <p style={{ textAlign: 'center' }}>No images available.</p>
                    )}
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <div className="car-description" style={{ padding: isTabletOrMobile ? '0 16px' : '0', textAlign: isMobile ? 'center' : 'left' }}>
                        <h3 className='car-title' style={{ fontSize: '2vw', margin: '10px 0', color: '#111', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                            {title}
                        </h3>
                        <p className='car-description-text' style={{ fontSize: '1.2vw', margin: '10px 0', color: '#777', fontFamily: 'Arial, sans-serif' }}>
                            {isTabletOrMobile || showFullDescription ? description : `${truncatedDescription}... `}
                            {!isTabletOrMobile && !showFullDescription && (
                                <span 
                                    onClick={() => setShowFullDescription(true)} 
                                    style={{ color: '#555', cursor: 'pointer' }}>
                                    Mehr anzeigen
                                </span>
                            )}
                        </p>
                        <p className='car-description-text' style={{ fontWeight: 'bold', fontSize: '1vw', color: '#333', fontFamily: 'Arial, sans-serif' }}>
                            {price}
                        </p>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item xs={10} sm={6}>
                                <Button sx={{ width: '100%', backgroundColor: 'black', color: 'white', fontSize: isMobile ? '12px' : '16px' }} variant="contained" onClick={handleClickOpen}>Jetzt anfragen</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            
            {/* Main enquiry dialog */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" sx={{ padding: isMobile ? '10px' : 'auto' }}>
                <DialogTitle>Jetzt anfragen</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ fontSize: isMobile ? '14px' : '16px' }}>Geben Sie Ihre Daten ein, um eine Anfrage zu diesem Auto zu stellen.</DialogContentText>
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
                        label="E-Mail Adresse"
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
                    <TextField
                        margin="dense"
                        name="price"
                        label="Preisangebot"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary" sx={{ fontSize: isMobile ? '12px' : '16px' }}>Abbrechen</Button>
                    <Button onClick={handleSubmit} color="primary" sx={{ fontSize: isMobile ? '12px' : '16px' }}>Senden</Button>
                </DialogActions>
            </Dialog>

            {/* Success message dialog */}
            <Dialog open={successDialogOpen} onClose={() => setSuccessDialogOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>Notification</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ color: 'green', fontSize: isMobile ? '14px' : '16px' }}>
                        {successMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSuccessDialogOpen(false)} color="primary" sx={{ fontSize: isMobile ? '12px' : '16px' }}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CarItem;
