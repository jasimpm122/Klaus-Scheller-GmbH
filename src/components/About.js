import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import member1 from '../images/Art.jpg';
import member2 from '../images/Art1.jpeg';
import member3 from '../images/Art2.jpg';
import carillustration from '../images/wfe.png';

function About() {
    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

    return (
        <div style={{
            padding: isMobileOrTablet ? '20px' : '60px 80px',
            paddingTop: isMobileOrTablet ? '80px' : '150px',  // Adjusted for space below navbar
            backgroundColor: '#fafafa'
        }}>
            {/* Title */}
            <Typography
                variant="h3"
                gutterBottom
                style={{
                    margin: '20px 0',
                    color: '#333',
                    fontSize: isMobile ? '24px' : isMobileOrTablet ? '28px' : '36px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                Über uns
            </Typography>

            {/* Main Content Section */}
            <div style={{
                display: 'flex',
                flexDirection: isMobileOrTablet ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <Typography
                    variant="body1"
                    paragraph
                    style={{
                        maxWidth: isMobileOrTablet ? '100%' : '600px',
                        marginBottom: isMobileOrTablet ? '20px' : '0',
                        color: '#333',
                        fontSize: isMobile ? '14px' : isMobileOrTablet ? '16px' : '18px',
                        lineHeight: '1.6',
                        textAlign: isMobileOrTablet ? 'center' : 'left'
                    }}>
                    Wir sind ein führendes Autohaus mit einer Leidenschaft für die Bereitstellung der besten Fahrzeuge und des besten Kundendienstes.
                    Unsere Mission ist es, Kunden dabei zu helfen, das perfekte Auto zu finden, das ihren Bedürfnissen und ihrem Budget entspricht.
                    Mit jahrelanger Erfahrung und einer großen Auswahl an Premiumfahrzeugen gewährleisten wir erstklassige Qualität bei Produkten und
                    Dienstleistungen. Unser Expertenteam begleitet Sie durch jeden Schritt des Prozesses, von der Auswahl des richtigen Modells bis zum
                    Abschluss des Kaufs. Zusätzlich versenden wir Autos weltweit und arbeiten mit mehreren Transportunternehmen zusammen, um eine sichere
                    und effiziente Lieferung zu gewährleisten.
                </Typography>

                {/* Car Illustration */}
                <img
                    src={carillustration}
                    alt="Car Illustration"
                    style={{
                        width: isMobile ? '80%' : isMobileOrTablet ? '90%' : '500px',
                        height: 'auto',
                        maxWidth: '100%',
                        margin: isMobileOrTablet ? '0 auto' : '0 0 0 20px'
                    }}
                />
            </div>

            {/* Team Section Title */}
            <Typography
                variant="h4"
                gutterBottom
                style={{
                    color: '#333',
                    fontSize: isMobile ? '20px' : isMobileOrTablet ? '22px' : '28px',
                    fontWeight: 'bold',
                    marginTop: isMobileOrTablet ? '40px' : '60px',
                    textAlign: 'center'
                }}>
                Lernen Sie unser Verkaufsteam kennen
            </Typography>

            {/* Team Members Grid */}
            <Grid container spacing={isMobileOrTablet ? 2 : 5} justifyContent="center">
                {[{ name: "Olaf Hemmer", role: "Sales Manager", description: "MBA in Marketing, 10+ years in the automotive industry", image: member1 },
                  { name: "Michael Brill", role: "Senior Sales Executive", description: "Bachelor's in Business Administration, 8 years in sales", image: member2 },
                  { name: "Sebastian Mitusch", role: "Sales Consultant", description: "Diploma in Automotive Sales, 5 years in customer relations", image: member3 }]
                  .map((member, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card style={{
                            width: '100%',
                            margin: 'auto',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                        }}>
                            <CardMedia
                                component="img"
                                height={isMobile ? '150' : isMobileOrTablet ? '200' : '250'}
                                image={member.image}
                                alt={`${member.name}`}
                                style={{ objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                            />
                            <CardContent>
                                <Typography variant="h6" style={{ color: '#333', fontWeight: '600', fontSize: isMobile ? '16px' : '18px' }}>
                                    {member.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" style={{ fontWeight: '500', fontSize: isMobile ? '14px' : '16px' }}>
                                    {member.role}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px', fontSize: isMobile ? '12px' : '14px' }}>
                                    {member.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Hours of Operation */}
            <Typography
                variant="h5"
                gutterBottom
                style={{
                    marginTop: isMobileOrTablet ? '40px' : '60px',
                    color: '#333',
                    fontSize: isMobile ? '14px' : isMobileOrTablet ? '16px' : '20px',
                    textAlign: 'center',
                    fontWeight: '600'
                }}>
                Montag bis Samstag 8-18 Uhr
            </Typography>

            {/* Contact Email */}
            <Link
                to="mailto:kundendienst@bmw-scheller.com"
                style={{
                    color: '#007BFF',
                    fontSize: isMobile ? '14px' : isMobileOrTablet ? '16px' : '18px',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    display: 'block',
                    marginTop: '10px',
                    fontWeight: '500'
                }}>
                kundendienst@bmw-scheller.com
            </Link>

            {/* Imprint Link */}
            <Link
                to="/details"
                style={{
                    color: '#007BFF',
                    fontSize: isMobile ? '14px' : isMobileOrTablet ? '16px' : '18px',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    display: 'block',
                    marginTop: '5px',
                    fontWeight: '500'
                }}>
                Impressum
            </Link>
        </div>
    );
}

export default About;
