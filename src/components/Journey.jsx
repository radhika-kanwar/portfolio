import { useState } from 'react';
import PropTypes from 'prop-types';
import { Calendar, Building2 } from 'lucide-react';


const ExperienceCard = ({ 
  title, 
  organization, 
  date, 
  description, 
  image, 
  images = [] 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = image ? [image, ...images] : images;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % allImages.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? (allImages.length - 1) : (prevIndex - 1)
    );
  };

  return (
    <div className="bg-academia-card p-6 rounded-lg shadow-md mb-8 border border-academia-secondary hover:scale-105 transition-transform duration-200">

    
      <div className="md:flex gap-6">
        <div className="mt-3 mb-3 relative sm:w-48 md:w-48 lg:w-60 h-48 md:mb-0 flex-shrink-0 overflow-hidden rounded-md">
          {allImages.length > 0 && (
            <div className="relative h-full">
              <img 
                src={allImages[currentImageIndex]}
                alt={`${title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
              {allImages.length > 1 && (
                <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center">
                  <button 
                    onClick={handlePrevImage}
                    className="bg-academia-accent/50 text-white p-2 rounded-l"
                  >
                    &#10094;
                  </button>
                  <button 
                    onClick={handleNextImage}
                    className="bg-academia-accent/50 text-white p-2 rounded-r"
                  >
                    &#10095;
                  </button>
                </div>
              )}
              {allImages.length > 1 && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                  <span className="bg-academia-accent/50 text-white px-2 py-1 rounded">
                    {currentImageIndex + 1} / {allImages.length}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-academia-accent">{title}</h3>
          <p className="text-academia-secondary mb-2 flex items-center gap-2">
          <Building2 size={16} />
          <span className="text-sm">{organization}</span>
          </p>
          <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
          <Calendar size={16} />
          <span className="text-sm">{date}</span>
          </p>
          <p className="font-sans mb-3 text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string)
};

const Journey = () => {
  const experiences = [
    {
      title: "Coaching Awareness Fair",
      organization: "Shoolini University",
      date: "December 2024",
      description: `As a part of the community project for my minor - Enhancing Leadership through Coaching Skills, my team an I put a stall at
      the Coaching Awareness Fair. We told the visitors about emotion labelling, the meaning of coaching and the importance of compassion. This 
      experience helped in engage in conversations with my peers and professors and helped me realize the engaging in meaningful conversations 
      uplifts my mood. `,
      images: ["/photos/fair1.jpg",
        "/photos/fair2.jpg",
        "/photos/fair3.jpg",
        "/photos/fair4.jpg",
        "/photos/fair5.jpg"
      ],
    },
    {
      title: "SPRINT Odd Semester, 2024",
      organization: "Shoolini University",
      date: "November 2024",
      description: `SPRINT (Skill Progression through Rapid Intensive and Innovative Training) was a 2-day event at Shoolini University aimed at 
      equipping students with knowledge, practical skills, and confidence for the corporate world. The Goal Setting session by Vivek Sir reshaped 
      my view of success, while Puneet Sir's workshop on LLMs taught us to create a chatbot using the Gemini API. My team and I presented our 
      learnings, earning 2nd place.`,
      image: "/photos/sprint1.png",
    },
    {
      title: "Launch Conference of Center for Leadership Coaching",
      organization: "Shoolini University",
      date: "September 2024",
      description: `My first volunteer experience where I was choosen as the student buddy for the Guest of Honor, Magdelena Ma'am, the CEO 
      of ICF. I was responsible for guiding her throughout the event that presented me with an oppounity to enagage in conversations that I will
      cherish forever The event convened a diverse group of visionaries, industry leaders, and academic pioneers to engage in thought-provoking 
      discussions on the critical importance of coaching in academia.`,
      images: ["/photos/clc1.jpg",
        "/photos/clc2.jpg",
        "/photos/clc3.jpg",
        "/photos/clc4.jpg"
      ],
    },
    {
      title: "Binary Battles",
      organization: "Yogananda School of AI, Computers, and Data Science, Shoolini University",
      date: "November - December 2023",
      description: `Successfully navigated multiple recruitment stages: cleared the Screening Test, Coding Ability Test, and Analytical and Time Management 
      Skills Test to reach the Semi-Final. Proceeded through Professional Writing Round, Group Discussion Round, Code Master Round, and Free Speech Round 
      with my teammates, ultimately advancing to the Final Round. After completing a comprehensive set of challenges, we secured 2nd Place.`,
      images: [
        "/photos/bb1.jpg",
        "/photos/bb2.jpg",
        "/photos/bb3.jpg",
        "/photos/bb4.jpg"
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">
        Journey Snapshots
      </h2>

      <p className="text-center text-lg text-academia-text mb-8 max-w-2xl mx-auto">
        My journey is a collection of experiences, challenges, and moments of growth.
        Each chapter here reflects lessons learned, connections made, and the joy of exploration.  
      </p>


      <div className="max-w-4xl mx-auto">
        {experiences.map((experience) => (
          <ExperienceCard 
            key={`${experience.title}-${experience.date}`} 
            {...experience} 
          />
        ))}
      </div>
    </div>
  );
};

export default Journey;