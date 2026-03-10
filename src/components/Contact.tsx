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
  Link,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=311+Miller+Ave+Suite+H-1+Mill+Valley+CA+94941';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
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
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [submitting, setSubmitting] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: <LocationOnIcon sx={{ color: '#666' }} />,
      title: 'Location',
      content: '311 Miller Ave\nSuite H-1\nMill Valley, CA 94941',
      link: MAPS_URL,
    },
    {
      icon: <PhoneIcon sx={{ color: '#666' }} />,
      title: 'Phone',
      content: '(650) 425-0858',
      link: 'tel:+16504250858',
    },
    {
      icon: <EmailIcon sx={{ color: '#666' }} />,
      title: 'Email',
      content: 'backstageglamour@gmail.com',
      link: 'mailto:backstageglamour@gmail.com',
    },
    {
      icon: <AccessTimeIcon sx={{ color: '#666' }} />,
      title: 'Hours',
      content: 'By appointment',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service) {
      alert('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    setShowAlert(false);

    const payload = new URLSearchParams({
      'form-name': 'contact',
      'bot-field': '',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    }).toString();

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      });
      if (!res.ok) throw new Error('Submission failed');
      setAlertType('success');
      setShowAlert(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setAlertType('error');
      setShowAlert(true);
    } finally {
      setSubmitting(false);
    }

    setTimeout(() => setShowAlert(false), 5000);
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
          <Alert severity={alertType} className="contactAlert">
            {alertType === 'success'
              ? "Thank you for your message! We'll get back to you soon."
              : "Something went wrong. Please email us at backstageglamour@gmail.com or try again."}
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
                    {info.link ? (
                      <Link
                        href={info.link}
                        {...(info.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        variant="body2"
                        color="text.secondary"
                        className="contactInfoContent"
                        sx={{ whiteSpace: 'pre-line', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                      >
                        {info.content}
                      </Link>
                    ) : (
                      <Typography variant="body2" color="text.secondary" className="contactInfoContent">
                        {info.content}
                      </Typography>
                    )}
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
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
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
