import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useMediaQuery } from 'react-responsive';
import '../App.css'; // Ensure custom styles are in this file

function CarItem({ images, title, description, price, onSubmitForm }) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const [open, setOpen] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false); // State for toggling description view
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
        <div style={{ margin: '20px auto', width: '100%', maxWidth: '1200px' }}>
            <Grid container spacing={isTabletOrMobile ? 2 : 4} direction="row" alignItems="center">
                <Grid item xs={12} md={6} style={{ order: isTabletOrMobile ? 2 : 1, textAlign: isTabletOrMobile ? 'center' : 'left' }}>
                    <h3 style={{ fontSize: isTabletOrMobile ? '24px' : '32px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>{title}</h3>
                    <p style={{ fontSize: isTabletOrMobile ? '1rem' : '1.2rem', color: '#333', lineHeight: '1.6' }}>
                        {isTabletOrMobile || showFullDescription ? description : `${truncatedDescription}... `}
                        {!isTabletOrMobile && !showFullDescription && (
                            <span 
                                onClick={() => setShowFullDescription(true)} 
                                style={{ color: '#007BFF', cursor: 'pointer' }}>
                                Mehr anzeigen
                            </span>
                        )}
                    </p>
                    <p style={{ fontSize: isTabletOrMobile ? '1.4rem' : '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>{price}</p>
                    <Grid container spacing={2} justifyContent={isTabletOrMobile ? 'center' : 'flex-start'}>
                        <Grid item>
                            <Button variant="contained" style={{ backgroundColor: '#007BFF', color: 'white' }} onClick={handleClickOpen}>JETZT ANFRAGEN</Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={6} style={{ order: isTabletOrMobile ? 1 : 2, display: 'flex', justifyContent: 'center' }}>
                    {images && images.length > 0 ? (
                        <div style={{
                            position: 'relative',
                            maxWidth: isTabletOrMobile ? '100%' : '500px',
                            maxHeight: isTabletOrMobile ? 'auto' : '350px'
                        }}>
                            <button className="prev" onClick={goToPrevImage}>&lt;</button>
                            <img 
                                src={images[currentImageIndex]} 
                                alt={title} 
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover', 
                                    borderRadius: '8px' 
                                }} 
                            />
                            <button className="next" onClick={goToNextImage}>&gt;</button>
                        </div>
                    ) : (
                        <p style={{ textAlign: 'center' }}>No images available.</p>
                    )}
                </Grid>
            </Grid>

            {/* Main enquiry dialog */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
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
                    <Button onClick={handleClose} color="secondary">Abbrechen</Button>
                    <Button onClick={handleSubmit} color="primary">Senden</Button>
                </DialogActions>
            </Dialog>

            {/* Success message dialog */}
            <Dialog open={successDialogOpen} onClose={() => setSuccessDialogOpen(false)} fullWidth maxWidth="sm">
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
