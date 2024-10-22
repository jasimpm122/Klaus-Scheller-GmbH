import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import member1 from '../images/Art.jpg'
import member2 from '../images/Art.jpg'
import member3 from '../images/Art.jpg'

function About() {
    return (
    <div style={{ padding: '200px', textAlign: 'center', color: 'black' }}>
    <Typography variant="h2" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1" paragraph>
      We are a leading car dealership with a passion for providing the best vehicles and customer service. 
      Our mission is to help customers find the perfect car that fits their needs and budget. With years 
      of experience and a vast range of premium vehicles, we ensure top-notch quality in both products and services.
    </Typography>
    <Typography variant="body1" paragraph>
      Our team of experts is here to guide you through every step of the process, from selecting the right model 
      to finalizing the purchase. We take pride in making the car-buying experience as smooth and enjoyable as possible.
    </Typography>

    <Typography variant="h4" gutterBottom style={{ marginTop: '40px' }}>
        Meet Our Sales Team
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        {/* Team Member 1 */}
        <Grid item xs={12} sm={6} md={2}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={member1}
              alt="Sales Team Member 1"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                John Doe
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Sales Manager
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Qualification: MBA in Marketing, 10+ years in the automotive industry
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Team Member 2 */}
        <Grid item xs={12} sm={6} md={2}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={member2}
              alt="Sales Team Member 2"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Jane Smith
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Senior Sales Executive
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Qualification: Bachelor's in Business Administration, 8 years of experience in sales
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Team Member 3 */}
        <Grid item xs={12} sm={6} md={2}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={member3}
              alt="Sales Team Member 3"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Michael Brown
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Sales Consultant
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Qualification: Diploma in Automotive Sales, 5 years of experience in customer relations
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </div>
  );
}

export default About;