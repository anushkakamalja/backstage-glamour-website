import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface Testimonial {
  quote: string;
  name: string;
  service?: string;
}

const CARD_WIDTH = 320;
const GAP = 24;
const CARD_STEP = CARD_WIDTH + GAP;

const Feedback: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: 'Audra is incredibly talented and made me feel so comfortable. My lashes looked amazing and natural.',
      name: '- Amy',
      service: 'Lash Extensions',
    },
    {
      quote: 'The best brow lamination I\'ve ever had. I get so many compliments!',
      name: '- Mariel',
      service: 'Brow Lamination & Tint',
    },
    {
      quote: 'Professional, relaxing, and my skin has never looked better. Can\'t recommend enough.',
      name: '- Rachel',
      service: 'Classic Facial',
    },
    {
      quote: 'Such a wonderful experience from start to finish. I felt pampered and left looking and feeling my best.',
      name: '- Danielle',
      service: 'Makeup Application',
    },
  ];

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const i = Math.max(0, Math.min(index, testimonials.length - 1));
    scrollRef.current.scrollTo({ left: i * CARD_STEP, behavior: 'smooth' });
    setActiveIndex(i);
  }, [testimonials.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / CARD_STEP);
      setActiveIndex(Math.min(i, testimonials.length - 1));
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev >= testimonials.length - 1 ? 0 : prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [scrollToIndex, testimonials.length]);

  return (
    <Box id="feedback" className="feedbackSection">
      <Box className="container feedbackContainer">
        <Box className="sectionHeader">
          <Typography variant="overline" className="sectionLabel">
            Testimonials
          </Typography>
          <Typography variant="h2" component="h2" className="sectionTitle">
            Kind Words
          </Typography>
        </Box>

        <Box className="feedbackScrollWrap">
          <Box ref={scrollRef} className="feedbackScroll">
            {testimonials.map((item, index) => (
              <Card key={index} className="feedbackCard">
                <CardContent className="feedbackCardContent">
                  <FormatQuoteIcon className="feedbackQuoteIcon" />
                  <Typography variant="body1" className="feedbackQuote">
                    {item.quote}
                  </Typography>
                  <Typography variant="body2" className="feedbackName">
                    {item.name}
                  </Typography>
                  {item.service && (
                    <Typography variant="caption" className="feedbackService">
                      {item.service}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box className="feedbackDots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                className={`feedbackDot ${index === activeIndex ? 'feedbackDotActive' : ''}`}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Feedback;
