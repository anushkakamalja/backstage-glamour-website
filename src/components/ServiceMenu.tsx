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
      category: 'LASH SERVICES',
      items: [
        { name: 'Lash Lift', price: '$145', description: 'A natural curl and lift for effortlessly wide, bright eyes.' },
        { name: 'Lash Lift & Tint', price: '$170', description: 'Lifted lashes with rich tint for a mascara-free finish.' },
        { name: 'Lash Tint', price: '$40', description: 'Deepens lash color for instant definition.' },
        { name: 'Lash Extensions – Classic Natural', price: '$235', description: 'Soft, seamless lashes for a naturally polished look.' },
        { name: 'Lash Extensions – Full Classic', price: '$265', description: 'Fuller lashes with timeless elegance.' },
        { name: 'Lash Extensions – Glamour Girl', price: '$360', description: 'Bold volume and drama for maximum impact.' },
        { name: 'Classic Natural Fill (2–3 weeks)', price: '$135', description: 'Refresh and maintain your lash set.' },
        { name: 'Full Classic Fill (2–3 weeks)', price: '$165', description: 'Restore fullness and shape.' },
        { name: 'Glamour Girl Fill (2–3 weeks)', price: '$215', description: 'Rebuild volume and bold definition.' },
      ],
    },
    {
      category: 'BROW SERVICES',
      items: [
        { name: 'Brow Lamination', price: '$110', description: 'Smooths and lifts brows for a fuller, sculpted shape.' },
        { name: 'Brow Lamination & Tint', price: '$135', description: 'Perfectly styled brows with rich, natural color.' },
        { name: 'Brow Tint', price: '$35', description: 'Enhances brow color and definition.' },
        { name: 'Lash & Brow Tint', price: '$70', description: 'A full eye-framing refresh.' },
        { name: 'Brow Wax', price: '$35', description: 'Clean, precise shaping.' },
        { name: 'Brow Tweeze', price: '$40', description: 'Gentle sculpting for sensitive skin.' },
        { name: 'Brow Thread & Tweeze', price: '$40', description: 'Delicate, precise shaping using threading techniques.' },
      ],
    },
    {
      category: 'LASH + BROW COMBO',
      items: [
        { name: 'Ultimate Lash + Brow Transformation', price: '$285', description: 'Lifted lashes and sculpted brows in one elevated service.' },
      ],
    },
    {
      category: 'FACIAL TREATMENTS',
      items: [
        { name: 'Classic Facial', price: '$165', description: 'Customized double cleanse, facial massage, mask, exfoliation, and glow-boosting hydration.' },
        { name: 'Chemical Peel – Level 1', price: '$125', description: 'Gentle resurfacing for brighter skin.' },
        { name: 'Chemical Peel – Level 2', price: '$165', description: 'Targets texture, fine lines, and uneven tone.' },
        { name: 'Pure Retinol Peel', price: '$275', description: 'Advanced skin renewal for smoother texture and radiant tone.' },
        { name: 'High Frequency Facial', price: '$145', description: 'Purifying treatment using high-frequency current to target acne, boost circulation, and promote clearer, healthier skin.' },
      ],
    },
    {
      category: 'MICROCURRENT',
      items: [
        { name: 'Microcurrent Treatment', price: '$135', description: 'Non-invasive toning for lifted, youthful-looking skin.' },
        { name: 'Microcurrent Series (6)', price: '$750', description: 'Sculpting treatments for long-term results.' },
        { name: 'Microcurrent Series (8)', price: '$960', description: 'Maximum lift with extended benefits.' },
        { name: 'Microcurrent Eye Add-On', price: '$55', description: 'Smooths, depuffs, and brightens the eye area.' },
      ],
    },
    {
      category: 'MAKEUP SERVICES',
      items: [
        { name: 'Makeup Lesson', price: '$145', description: 'Personalized guidance to master your everyday glam.' },
        { name: 'Makeup Application', price: '$135', description: 'Flawless, camera-ready makeup for any occasion.' },
        { name: 'Bridal Makeup (In-Studio)', price: '$225', description: 'Long-wear, photo-perfect bridal beauty.' },
        { name: 'Bridal Makeup (On Location)', price: '$1,200', description: 'Luxury wedding-day glam wherever you are. (Bay Area)' },
        { name: 'Bridesmaids', price: '$150', description: 'Soft, timeless makeup for your bridal party.' },
      ],
    },
  ];

  return (
    <Box id="menu" className="menuSection">
      <Box className="containerNarrow">
        <Box className="sectionHeader">
          <Typography variant="overline" className="sectionLabel">
            Offerings
          </Typography>
          <Typography variant="h2" component="h2" className="sectionTitle">
            Service Menu
          </Typography>
        </Box>

        {menu.map((category) => (
          <Box key={category.category} className="menuCategory">
            <Typography variant="h4" className="menuCategoryTitle">
              {category.category}
            </Typography>
            <Box className="menuItemWrap">
              {category.items.map((item) => (
                <Box key={item.name} className="menuItem">
                  <Box className="menuItemRow">
                    <Typography variant="h6" className="menuItemName">
                      {item.name}
                    </Typography>
                    <Typography variant="body1" className="menuItemPrice">
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