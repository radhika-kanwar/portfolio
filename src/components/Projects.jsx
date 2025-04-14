import{ useState } from 'react';
import PropTypes from 'prop-types';
import { FileText, Link as LinkIcon, X} from 'lucide-react';

const ProjectCard = ({ title, description, technologies, image, link, pdfUrl}) => {
  const [showPdfModal, setShowPdfModal] = useState(false);

  const renderLink = () => {
    if (pdfUrl) {
      return (
        <button 
          onClick={() => setShowPdfModal(true)}
          className="flex items-center gap-2 text-academia-text hover:text-academia-accent transition-colors"
        >
          <FileText size={16} />
          <span>View Report</span>
        </button>
      );
    }
    
    return (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-academia-text hover:text-academia-accent transition-colors"
      >
        <LinkIcon size={16} />
        <span>View Project</span>
      </a>
    );
  };

  return (
    <>
      <div className="bg-academia-card p-6 rounded-lg shadow-md hover:shadow-academia-accent/20 transition-all duration-300 border border-academia-secondary hover:scale-105">
        <div className="relative overflow-hidden rounded-md mb-4 group">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <h3 className="text-academia-accent text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm font-sans text-academic-text mb-4 whitespace-pre-line">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="bg-academia-secondary/20 px-3 py-1 rounded-full text-sm text-academia-accent"
            >
              {tech}
            </span>
          ))}
        </div>
        {renderLink()}
      </div>

      {showPdfModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-full max-w-4xl mx-4 h-5/6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{title} - Project Report</h3>
              <button 
                onClick={() => setShowPdfModal(false)}
                className="text-academic-text"
              >
                <X size={24} />
              </button>
            </div>
            <iframe
              src={pdfUrl}
              className="w-full h-full rounded-md"
              title={`${title} PDF Report`}
            />
          </div>
        </div>
      )}
    </>
  );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
    pdfUrl: PropTypes.string
  };

const Projects = () => {
  const projects = [
    {
      title: "Student Details Form",
      description: "A responsive web application to manage student information. Built with vanilla JavaScript, HTML5, and CSS, it features real-time form validation and local data management.",
      technologies: ["HTML", "JavaScript", "CSS"],
      image: "projects/form.png",
      link: "https://radhika-kanwar.github.io/student-details-form/"
    },
    {
      title: "Blackjack Game",
      description: "A single-player Blackjack game developed using Python, with a focus on implementing OOP principles and utilizing the Tkinter library to create a graphical interface.",
      technologies: ["Python", "OOP", "Tkinter"],
      image: "projects/blackjack.png",
      link: "https://github.com/radhika-kanwar/blackjack-game"
    },
    {
      title: "Financial Market Awareness Analysis",
      description: "Collaborated on a group project for my Financial Markets minor, where I conducted analysis and created visualizations",
      technologies: ["Data Analysis", "Data Visualisation", "Collaboration"],
      image: "projects/financial.png",
      link: "https://www.canva.com/design/DAGEPk1aHRM/ulwhHrI8N5iOnvuPmBWipQ/view"
    },
    {
      title: "Data Analytics Portfolio",
      description: "A portfolio showcasing data cleaning, visualization, and analysis skills using MS Excel, MySQL, and Tableau, developed during my Data Analytics training at Trainity.",
      technologies: ["Data Analytics", "MySQL", "MS Excel"],
      image: "projects/portfolio.png",
      link: "https://www.canva.com/design/DAFrhsy-bSM/e2IvkmA6tBP1rDUUHzYMEQ/view"
    },
    {
      title: "Report on Launch of CLC",
      description: "A report on the launch of Center of Leadership Coaching with the major takeaways from each session.",
      technologies: ["Report Writing"],
      image: "projects/clc.png",
      pdfUrl: "docs/clc-report.pdf"
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <p className="text-center text-academia-text text-lg max-w-2xl mx-auto mb-12">
        I am constantly working on new projects, which are regularly updated on my <a href="https://github.com/radhika-kanwar" target="_blank" rel="noopener noreferrer" 
           className="text-academia-accent font-medium hover:text-academia-accent/70">
            GitHub
        </a> (well, a few can be found in some folders on my laptop). This portfolio itself is one of my ongoing projects, evolving as I grow.
      </p>

      <div className="grid md:grid-cols-2 gap-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
