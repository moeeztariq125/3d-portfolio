import './ProjectCard.scss'; 

const ProjectCard = () => {
  return (
    <div className="card">
      <div className="overlay">
        <h2>Your Title</h2>
        <p>Your description goes here.</p>
      </div>
      <img src="/images/mycash.png" alt="Card Image" />
    </div>
  );
};

export default ProjectCard;