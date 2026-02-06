import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
  Alert,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: <LocationOnIcon sx={{ color: '#666' }} />,
      title: 'Location',
      content: '123 Beauty Avenue\nSan Francisco, CA 94102',
    },
    {
      icon: <PhoneIcon sx={{ color: '#666' }} />,
      title: 'Phone',
      content: '(555) 123-4567',
    },
    {
      icon: <EmailIcon sx={{ color: '#666' }} />,
      title: 'Email',
      content: 'hello@glowbeautystudio.com',
    },
    {
      icon: <AccessTimeIcon sx={{ color: '#666' }} />,
      title: 'Hours',
      content: 'Mon-Fri: 9AM-7PM\nSat: 8AM-5PM\nSun: Closed',
    },
  ];

  const services = [
    { value: '', label: 'Select Service' },
    { value: 'hair', label: 'Hair Styling' },
    { value: 'nails', label: 'Nail Care' },
    { value: 'facial', label: 'Facial Treatment' },
    { value: 'lashes', label: 'Eyelash Extensions' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      service: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.service) {
      alert('Please fill in all required fields.');
      return;
    }

    // Simulate form submission
    console.log('Contact form submitted:', formData);

    // Show success alert
    setShowAlert(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });

    // Hide alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <Box id="contact" className="contactSection">
      <Box className="container">
        <Box className="sectionHeaderSmall">
          <Typography variant="h2" component="h2" gutterBottom>
            Get In Touch
          </Typography>
          <Typography variant="body1" color="text.secondary" className="contactIntro">
            Ready to glow? Contact us today to schedule your appointment or ask any questions.
          </Typography>
        </Box>

        {showAlert && (
          <Alert severity="success" className="contactAlert">
            Thank you for your message! We'll get back to you soon.
          </Alert>
        )}

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {contactInfo.map((info, index) => (
                <Box key={index} className="contactInfoItem">
                  <Box sx={{ mt: 0.5 }}>{info.icon}</Box>
                  <Box>
                    <Typography variant="h6" component="h4" gutterBottom>
                      {info.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="contactInfoContent">
                      {info.content}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent className="contactFormCard">
                <Box component="form" onSubmit={handleSubmit} className="contactForm">
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Your Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    select
                    label="Select Service"
                    name="service"
                    value={formData.service}
                    onChange={handleSelectChange}
                    required
                  >
                    {services.map((service) => (
                      <MenuItem key={service.value} value={service.value}>
                        {service.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Tell us about your desired appointment..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <Button type="submit" variant="contained" size="large">
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
