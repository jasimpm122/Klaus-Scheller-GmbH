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
import '../components/fonts/fonts.css';
import carillustration from '../images/wfe.png';

function About() {
    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div style={{
            padding: isMobileOrTablet ? '50px 20px' : '100px 50px',
            backgroundColor: '#fafafa'
        }}>
            <Typography
                variant="h3"
                gutterBottom
                style={{
                    margin: isMobileOrTablet ? '40px 0px 20px 0px' : '200px 0px 0px 140px',
                    color: '#000',
                    fontFamily: 'font1',
                    fontSize: isMobileOrTablet ? '16px' : '20px',
                    textAlign: isMobileOrTablet ? 'center' : 'left'
                }}>
                über uns
            </Typography>

            <Typography
                variant="body1"
                paragraph
                style={{
                    maxWidth: '700px',
                    margin: isMobileOrTablet ? '10px auto' : '20px 120px 200px 140px',
                    fontFamily: 'font2',
                    color: 'black',
                    textAlign: isMobileOrTablet ? 'center' : 'left',
                    fontSize: isMobileOrTablet ? '14px' : '16px'
                }}>
                Wir sind ein führendes Autohaus mit einer Leidenschaft für die Bereitstellung der besten Fahrzeuge und des besten Kundendienstes.
                Unsere Mission ist es, Kunden dabei zu helfen, das perfekte Auto zu finden, das ihren Bedürfnissen und ihrem Budget entspricht.
                Mit jahrelanger Erfahrung und einer großen Auswahl an Premiumfahrzeugen gewährleisten wir erstklassige Qualität bei Produkten und
                Dienstleistungen. Unser Expertenteam begleitet Sie durch jeden Schritt des Prozesses, von der Auswahl des richtigen Modells bis zum
                Abschluss des Kaufs. Wir sind stolz darauf, den Autokauf so reibungslos und angenehm wie möglich zu gestalten.Zusätzlich zu unserer 
                außergewöhnlichen Auswahl versenden wir Autos weltweit und arbeiten mit mehreren Transportunternehmen zusammen,um eine sichere und 
                effiziente Lieferung zu gewährleisten
            </Typography>

            <div style={{ flex: 1, textAlign: 'center' }}>
                <img
                    src={carillustration}
                    alt="Car Illustration"
                    style={{
                        width: isMobileOrTablet ? '100%' : '700px',
                        height: isMobileOrTablet ? 'auto' : '550px',
                        margin: isMobileOrTablet ? '0 auto' : '-600px 0 0 50%'
                    }}
                />
            </div>

            <Typography
                variant="h4"
                gutterBottom
                style={{
                    color: '#000',
                    fontFamily: 'font3',
                    textAlign: 'center',
                    fontSize: isMobileOrTablet ? '15px' : '24px'
                }}>
                Lernen Sie unser Verkaufsteam kennen
            </Typography>

            <Grid container spacing={isMobileOrTablet ? 3 : 10} justifyContent="center">
                {/* Team Member 1 */}
                <Grid item xs={12} sm={6} md={2}>
                    <Card style={{ width: '100%', marginTop: '50px' }}>
                        <CardMedia
                            style={{ objectFit: 'contain' }}
                            component="img"
                            height={isMobileOrTablet ? '200' : '250'}
                            image={member1}
                            alt="Sales Team Member 1"
                        />
                        <CardContent>
                            <Typography variant="h6" component="div" style={{ color: '#333' }}>
                            Olaf Hemmer
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
                <Grid item xs={12} sm={6} md={2}>
                    <Card style={{ width: '100%', marginTop: '50px' }}>
                        <CardMedia
                            style={{ objectFit: 'contain' }}
                            component="img"
                            height={isMobileOrTablet ? '200' : '250'}
                            image={member2}
                            alt="Sales Team Member 2"
                        />
                        <CardContent>
                            <Typography variant="h6" component="div" style={{ color: '#333' }}>
                            Michael Brill
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
                <Grid item xs={12} sm={6} md={2}>
                    <Card style={{ width: '100%', marginTop: '50px' }}>
                        <CardMedia
                            style={{ objectFit: 'contain' }}
                            component="img"
                            height={isMobileOrTablet ? '200' : '250'}
                            image={member3}
                            alt="Sales Team Member 3"
                        />
                        <CardContent>
                            <Typography variant="h6" component="div" style={{ color: '#333' }}>
                            Sebastian Mitusch
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

            <Typography
                variant="h3"
                gutterBottom
                style={{
                    marginTop: isMobileOrTablet ? '40px' : '60px',
                    color: '#000',
                    fontFamily: 'font1',
                    fontSize: isMobileOrTablet ? '14px' : '18px',
                    textAlign: 'center',
                }}>
                Montag bis Samstag 8-18 Uhr
            </Typography>
            <a
                href="mailto::kundendienst@bmw-scheller.com"
                variant="h3"
                gutterBottom
                style={{
                    // margin: isMobileOrTablet ? '40px 0px 20px 0px' : '200px 0px 0px 140px',
                    color: '#000',
                    fontFamily: 'font2',
                    fontSize: isMobileOrTablet ? '16px' : '20px',
                    textAlign: 'center',
                    textDecoration:'underline',
                    display:'block'
                }}>
                kundendienst@bmw-scheller.com
            </a>
        </div>
    );
}

export default About;