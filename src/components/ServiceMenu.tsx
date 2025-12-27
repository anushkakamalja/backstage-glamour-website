import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const ServiceMenu: React.FC = () => {
  const menu: MenuCategory[] = [
    {
      category: 'Lash Services',
      items: [
        { name: 'Lash Lift', price: '$125', description: 'A gentle curl and lift for your natural lashes—effortless, wide-eyed beauty.' },
        { name: 'Lash Lift & Tint', price: '$150', description: 'Lifted lashes paired with a deep tint for that mascara-but-better finish.' },
        { name: 'Lash Tint', price: '$25', description: 'Define and darken your lashes without a swipe of mascara.' },
        { name: 'Lash Extensions – Classic Natural', price: '$235', description: 'Soft, subtle enhancement for a naturally polished look.' },
        { name: 'Lash Extensions – Full Classic', price: '$265', description: 'Fuller, more defined lashes with timeless elegance.' },
        { name: 'Lash Extensions – Glamour Girl', price: '$340', description: 'Maximum volume and drama for a bold, show-stopping finish.' },
        { name: 'Extension Fill – Classic Natural (2–3 Weeks)', price: '$125' },
        { name: 'Extension Fill – Full Classic (2–3 Weeks)', price: '$150' },
        { name: 'Extension Fill – Glamour Girl (2–3 Weeks)', price: '$195' },
      ],
    },
    {
      category: 'Brow Services',
      items: [
        { name: 'Brow Lamination', price: '$95', description: 'Smooths and lifts for a fuller, more defined shape.' },
        { name: 'Brow Lamination & Tint', price: '$110', description: 'Perfectly styled brows with rich, natural color.' },
        { name: 'Brow Tint', price: '$20', description: 'Enhances color and definition for a polished look.' },
        { name: 'Lash & Brow Tint', price: '$45', description: 'A full eye-framing refresh with tint for both lashes and brows.' },
        { name: 'Brow Wax', price: '$25', description: 'Expert shaping with clean, refined precision.' },
        { name: 'Brow Tweeze', price: '$30', description: 'Ideal for sensitive skin—sculpted without wax.' },
        { name: 'Brow Thread & Tweeze', price: '$30', description: 'Precise, delicate shaping using traditional threading techniques.' },
      ],
    },
    {
      category: 'Lash + Brow Combo',
      items: [
        { name: 'Lash Lift, Lash Tint, Brow Lamination & Tint', price: '$250', description: 'The ultimate eye transformation—lifted lashes, rich color, and perfectly styled brows.' },
      ],
    },
    {
      category: 'Facial Treatments',
      items: [
        { name: 'Classic Facial', price: '$135', description: 'A customized, relaxing treatment to cleanse, hydrate, and restore skin balance.' },
        { name: 'Chemical Peel – Level 1', price: '$105', description: 'Gentle resurfacing for a brighter, smoother complexion.' },
        { name: 'Chemical Peel – Level 2', price: '$145', description: 'Targets fine lines, texture, and uneven tone.' },
        { name: 'Chemical Peel – Level 3', price: '$250', description: 'Advanced renewal for visibly radiant, revitalized skin.' },
      ],
    },
    {
      category: 'Microcurrent Treatments',
      items: [
        { name: 'Individual Treatment', price: '$105', description: 'Non-invasive toning for lifted, youthful-looking skin.' },
        { name: 'Series Package – 6 Treatments', price: '$554' },
        { name: 'Series Package – 8 Treatments', price: '$792' },
        { name: 'Microcurrent Eye Treatment', price: '$40', description: 'Targets fine lines and puffiness—perfect add-on to any service.' },
      ],
    },
    {
      category: 'Makeup Services',
      items: [
        { name: 'Makeup Lesson', price: '$95', description: 'A personalized session to master your signature look.' },
        { name: 'Makeup Appointment', price: '$105', description: 'Flawless, camera-ready artistry for any occasion.' },
        { name: 'Bridal Makeup (In-Studio)', price: '$150', description: 'Long-lasting, picture-perfect bridal glam.' },
        { name: 'Bridal Makeup (On Location)', price: '$650 + $100 travel fee', description: 'Full wedding-day service at your location (within the Bay Area).' },
        { name: 'Bridesmaids', price: '$120', description: 'Soft, timeless glam for your bridal party.' },
      ],
    },
  ];

  return (
    <Box
      id="menu"
      sx={{
        py: 10,
        backgroundColor: 'white',
      }}
    >
      <Box sx={{ maxWidth: 800, mx: 'auto', px: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ letterSpacing: 2, color: '#999' }}>
            Offerings
          </Typography>
          <Typography variant="h2" component="h2" sx={{ mt: 1 }}>
            Service Menu
          </Typography>
        </Box>

        {menu.map((category) => (
          <Box key={category.category} sx={{ mb: 6 }}>
            <Typography variant="h4" sx={{ mb: 3, borderBottom: '1px solid #000', pb: 1, display: 'inline-block' }}>
              {category.category}
            </Typography>
            <Box sx={{ mt: 2 }}>
              {category.items.map((item) => (
                <Box key={item.name} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {item.price}
                    </Typography>
                  </Box>
                  {item.description && (
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServiceMenu;