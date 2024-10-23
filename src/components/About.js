import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from 'react-responsive';
import member1 from '../images/Art.jpg';
import member2 from '../images/Art.jpg';
import member3 from '../images/Art.jpg';

function About() {
    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div style={{
            padding: isMobileOrTablet ? '50px 20px' : '100px 50px',
            textAlign: 'center',
            backgroundColor: '#fafafa'
        }}>
            <Typography variant="h3" gutterBottom style={{ marginBottom: '30px', marginTop: '90px', color: '#333' }}>
                About Us
            </Typography>
            <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto', color: '#555' }}>
                We are a leading car dealership with a passion for providing the best vehicles and customer service.
                Our mission is to help customers find the perfect car that fits their needs and budget. With years 
                of experience and a vast range of premium vehicles, we ensure top-notch quality in both products and services.
            </Typography>
            <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto', color: '#555' }}>
                Our team of experts is here to guide you through every step of the process, from selecting the right model 
                to finalizing the purchase. We take pride in making the car-buying experience as smooth and enjoyable as possible.
            </Typography>

            <Typography variant="h4" gutterBottom style={{ marginTop: '50px', marginBottom: '30px', color: '#333', padding: '30px' }}>
                Meet Our Sales Team
            </Typography>

            <Grid container spacing={isMobileOrTablet ? 3 : 6} justifyContent="center">
                {/* Team Member 1 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{ maxWidth: '300px', margin: '0 auto' }}>
                        <CardMedia style={{ objectFit: 'contain' }}
                            component="img"
                            height={isMobileOrTablet ? '200' : '250'}
                            image={member1}
                            alt="Sales Team Member 1"
                        /> 
                        <CardContent>
                            <Typography variant="h6" component="div" style={{ color: '#333' }}>
                                John Doe
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Sales Manager
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                MBA in Marketing, 10+ years in the automotive industry
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Team Member 2 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{ maxWidth: '300px', margin: '0 auto' }}>
                        <CardMedia style={{ objectFit: 'contain' }}
                            component="img"
                            height={isMobileOrTablet ? '200' : '250'}
                            image={member2}
                            alt="Sales Team Member 2"
                        />
                        <CardContent>
                            <Typography variant="h6" component="div" style={{ color: '#333' }}>
                                Jane Smith
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Senior Sales Executive
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Bachelor's in Business Administration, 8 years in sales
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Team Member 3 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{ maxWidth: '300px', margin: '0 auto' }}>
                        <CardMedia style={{ objectFit: 'contain' }}
                            component="img"
                            height={isMobileOrTablet ? '200' : '250'}
                            image={member3}
                            alt="Sales Team Member 3"
                        />
                        <CardContent>
                            <Typography variant="h6" component="div" style={{ color: '#333' }}>
                                Michael Brown
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Sales Consultant
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Diploma in Automotive Sales, 5 years in customer relations
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;
