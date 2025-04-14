import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Book, Code, Brain, Heart,} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);

  const quotes = [
    "I find beauty where logic meets intuition—that space where things just click and still feel magical.",
    "I am curious about how things work, but it’s the 'why' behind them that really draws me in.",
    "I believe in lifting as we climb—because knowledge becomes powerful when it's shared.",
    "To me, a great solution is like a story—structured, honest, and deeply personal in the way it solves a problem.",
    "Code, like thought, is never just technical. It’s how we make sense of the world—and how we shape it back."
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <div className="min-h-screen bg-academia-primary">
      <div className="max-w-5xl mx-auto px-6">
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>

            <div className="mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-academia-secondary shadow-lg">
                <div className="w-full h-full bg-academia-secondary/30 flex items-center justify-center text-academia-accent">
                <img src="photos/me.jpg" alt="Me"></img>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h1 className="text-6xl md:text-6xl font-serif text-academia-accent">
                Radhika Kanwar
              </h1>
              <div className="w-60 h-1 bg-academia-secondary mx-auto mt-4"></div>
            </div>

            <div className="space-y-6 mb-16">
              <h2 className="text-xl md:text-2xl font-serif text-academia-accent leading-relaxed">
                Bridging Logic & Creativity
              </h2>
              <p className="text-lg text-gray-800 max-w-2xl leading-relaxed font-sans mx-auto">
               I enjoy untangling problems, whether in code or in thought. My journey is a blend of logic 
               and creativity—finding structure in chaos and meaning in patterns.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {[
                { icon: Github, href: 'https://github.com/radhika-kanwar', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/radhika-kanwar-0a0319239/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:radhikakanwar863@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="bg-academia-card p-3 rounded-full hover:bg-academia-secondary transition-all duration-300">
                    <Icon 
                      size={24} 
                      className="text-academia-accent group-hover:text-academia-card transition-colors duration-300"
                    />
                  </div>
                  <span className="text-sm font-sans text-academia-accent">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-32 space-y-24">
          <section className="bg-academia-card rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-academia-accent">My Journey</h3>
                <div className="space-y-4 text-gray-800">
                  <p className="leading-relaxed font-sans">
                    I still remember how I avoided solving problems when I first started coding because I was scared of getting it wrong. 
                    But over time, I found joy in the process of learning, the quiet thrill of uncovering concepts that once felt difficult and the beauty in building something from scratch.
                  </p>
                  <p className="leading-relaxed font-sans">
                    Since then, every challenge has felt like a puzzle waiting to be solved, and every failure, a lesson disguised as frustration.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, label: "Problem Solving", bg: "bg-academia-secondary/30" },
                  { icon: Brain, label: "AI & ML", bg: "bg-academia-secondary/30" },
                  { icon: Book, label: "Philosophy", bg: "bg-academia-secondary/30" },
                  { icon: Heart, label: "Community", bg: "bg-academia-secondary/30" }
                ].map(({ icon: Icon, label, bg }) => (
                  <div key={label} className={`${bg} p-6 rounded-lg flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:transform hover:scale-105`}>
                    <Icon size={28} className="text-academia-accent" />
                    <span className="text-sm font-sans text-academia-accent text-center">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-academia-card rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-serif text-academia-accent mb-8 text-center">Technical Toolkit</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { category: "Languages", items: ["Python", "JavaScript", "C", "C++", "Java"] },
                { category: "Frameworks & Libraries", items: ["React", "TensorFlow", "Scikit-learn"] },
                { category: "Databases & Tools", items: ["MySQL", "MongoDB", "Git", "GCP"] },
                { category: "Methods", items: ["Agile", "CI/CD","Design Thinking"] }
              ].map((skill, index) => (
                <div key={index} className="bg-academia-primary/30 p-4 rounded-lg">
                  <h4 className="font-serif text-academia-accent text-lg mb-2">{skill.category}</h4>
                  <div className="space-y-1">
                    {skill.items.map((item, i) => (
                      <div key={i} className="bg-academia-secondary/20 rounded-full px-3 py-1 text-xs inline-block mr-1 mb-1">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center max-w-4xl mx-auto relative">
            <div className="bg-academia-card/90 p-8 rounded-lg relative h-40 flex items-center justify-center shadow-md overflow-hidden">

              {quotes.map((quote, index) => (
                <blockquote
                key={index}
                  className={`absolute w-full px-4 transition-opacity duration-1000 ease-in-out ${
                    index === activeQuote ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  <p className="text-[20px] sm:text-[18px] font-sans text-academia-accent italic leading-relaxed tracking-tight before:content-['“'] after:content-['”']">
                    {quote}
                  </p>
                </blockquote>
              ))}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-academia-secondary opacity-60 rounded-full"></div>
            </div>
          </section>

          <section className="bg-academia-card rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-serif text-academia-accent mb-8 text-center">Growing & Learning</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Technical Mastery",
                  desc: "Diving deep into AI, ML, and the nuances of software design—because understanding the why makes the how more interesting."
                },
                {
                  title: "Philosophical Growth",
                  desc: "Drawing insights from literature and deep thought, I find beauty in questioning assumptions and embracing complexity in both code and life."
                },
                {
                  title: "Personal Development",
                  desc: "Balancing the logical with the physical—karate, dance, and adventure sports keep me grounded and energized for continuous growth."
                }
              ].map((area, index) => (
                <div 
                  key={index}
                  className="bg-academia-primary/30 p-6 rounded-lg transition-all duration-300 hover:bg-academia-secondary/20"
                >
                  <h4 className="font-serif text-academia-accent text-lg mb-3">{area.title}</h4>
                  <p className="font-sans text-gray-800 text-sm">{area.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center max-w-3xl mx-auto mt-24">
          <div className="bg-academia-card/90 p-12 rounded-lg shadow-lg border border-academia-secondary/30">
            
            <h3 className="text-2xl font-serif text-academia-accent mb-6 relative inline-block">
              Let’s Create Something Timeless  
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-academia-secondary opacity-50 transform scale-x-75 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            
            <p className="text-md text-gray-700 leading-relaxed font-sans mb-8">
              If you find meaning in elegant code, thoughtful design,  
              and conversations that broaden perspectives—let’s connect.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="mailto:radhikakanwar863@gmail.com"
                className="px-6 py-3 rounded-md text-lg font-serif text-academia-accent border border-academia-accent transition-all duration-300 bg-academia-secondary/10 hover:bg-academia-secondary/30 shadow-md"
              >
                Write to Me
              </a>
            </div>
          </div>
        </section>

        </div>
      </div>
    </div>
  );
};

export default Home;