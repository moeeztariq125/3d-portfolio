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
      <img src={props.image} alt="Card Image"  />
      <div className='description'>
        <div className='top'>
          <p>{props.from} - {props.to}</p>
          <p>{props.country}</p>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  from:string;
  to:string;
  country:string;
  description:string;
  image:string;
  id:string;
}

export default ProjectCard;
