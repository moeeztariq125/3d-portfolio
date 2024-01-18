import { useEffect, useRef, useState } from 'react';
import './ProjectCard.scss';

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const handleIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5, // Trigger when 50% of the card is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  const classes = `card ${isVisible ? 'open' : ''}`;

  return (
    <div className={classes} ref={cardRef}>
      <div className="overlay">
        <h2>Your Title</h2>
        <p>Your description goes here.</p>
      </div>
      <img src="/images/mycash.png" alt="Card Image" />
    </div>
  );
};

interface ProjectCardProps {}

export default ProjectCard;
