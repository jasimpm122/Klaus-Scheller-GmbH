import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from 'react-responsive';
import member1 from '../images/Art.jpg';
import member2 from '../images/Art1.jpeg';
import member3 from '../images/Art2.jpg';
import carillustration from '../images/wfe.png';

function About() {
    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div style={{
            padding: isMobileOrTablet ? '30px 20px' : '60px 80px',
            paddingTop: isMobileOrTablet ? '80px' : '120px',
            backgroundColor: '#fafafa'
        }}>
            <Typography
                variant="h3"
                gutterBottom
                style={{
                    margin: isMobileOrTablet ? '20px 0' : '20px 0 20px',
                    color: '#000',
                    fontSize: isMobileOrTablet ? '24px' : '36px',
                    textAlign: 'center'
                }}>
                über uns
            </Typography>

            <div style={{
                display: 'flex',
                flexDirection: isMobileOrTablet ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: isMobileOrTablet ? 'center' : 'space-between',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <Typography
                    variant="body1"
                    paragraph
                    style={{
                        maxWidth: '600px',
                        margin: isMobileOrTablet ? '20px 0' : '0',
                        color: 'black',
                        fontSize: isMobileOrTablet ? '16px' : '18px',
                        lineHeight: '1.6',
                        textAlign: isMobileOrTablet ? 'center' : 'left'
                    }}>
                    Wir sind ein führendes Autohaus mit einer Leidenschaft für die Bereitstellung der besten Fahrzeuge und des besten Kundendienstes.
                    Unsere Mission ist es, Kunden dabei zu helfen, das perfekte Auto zu finden, das ihren Bedürfnissen und ihrem Budget entspricht.
                    Mit jahrelanger Erfahrung und einer großen Auswahl an Premiumfahrzeugen gewährleisten wir erstklassige Qualität bei Produkten und
                    Dienstleistungen. Unser Expertenteam begleitet Sie durch jeden Schritt des Prozesses, von der Auswahl des richtigen Modells bis zum
                    Abschluss des Kaufs. Wir sind stolz darauf, den Autokauf so reibungslos und angenehm wie möglich zu gestalten. Zusätzlich zu unserer 
                    außergewöhnlichen Auswahl versenden wir Autos weltweit und arbeiten mit mehreren Transportunternehmen zusammen, um eine sichere und 
                    effiziente Lieferung zu gewährleisten.
                </Typography>

                <img
                    src={carillustration}
                    alt="Car Illustration"
                    style={{
                        width: isMobileOrTablet ? '90%' : '500px',
                        height: 'auto',
                        maxWidth: '100%',
                        margin: isMobileOrTablet ? '20px auto' : '0 0 0 20px'
                    }}
                />
            </div>

            <Typography
                variant="h4"
                gutterBottom
                style={{
                    color: '#000',
                    fontSize: isMobileOrTablet ? '20px' : '28px',
                    marginTop: isMobileOrTablet ? '30px' : '60px',
                    textAlign: 'center'
                }}>
                Lernen Sie unser Verkaufsteam kennen
            </Typography>

            <Grid container spacing={isMobileOrTablet ? 2 : 5} justifyContent="center">
                {[member1, member2, member3].map((member, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card style={{ width: '100%', margin: 'auto', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                            <CardMedia
                                component="img"
                                height={isMobileOrTablet ? '200' : '250'}
                                image={member}
                                alt={`Sales Team Member ${index + 1}`}
                                style={{ objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h6" style={{ color: '#333' }}>
                                    {index === 0 ? "Olaf Hemmer" : index === 1 ? "Michael Brill" : "Sebastian Mitusch"}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {index === 0 ? "Sales Manager" : index === 1 ? "Senior Sales Executive" : "Sales Consultant"}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {index === 0 ? "MBA in Marketing, 10+ years in the automotive industry" :
                                     index === 1 ? "Bachelor's in Business Administration, 8 years in sales" :
                                     "Diploma in Automotive Sales, 5 years in customer relations"}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Typography
                variant="h3"
                gutterBottom
                style={{
                    marginTop: isMobileOrTablet ? '40px' : '60px',
                    color: '#000',
                    fontSize: isMobileOrTablet ? '16px' : '20px',
                    textAlign: 'center',
                }}>
                Montag bis Samstag 8-18 Uhr
            </Typography>

            {/* Email Link */}
            <a
                href="mailto:kundendienst@bmw-scheller.com"
                style={{
                    color: '#000',
                    fontSize: isMobileOrTablet ? '16px' : '18px',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    display: 'block',
                    marginTop: '5px'
                }}>
                kundendienst@bmw-scheller.com
            </a>

            {/* Imprint Link */}
            <a
                href="/imprint"
                style={{
                    color: '#000',
                    fontSize: isMobileOrTablet ? '16px' : '18px',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    display: 'block',
                    marginTop: '10px'
                }}>
                IMPRESSUM
            </a>
        </div>
    );
}

export default About;
