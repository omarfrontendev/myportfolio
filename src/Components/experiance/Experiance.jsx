import { useEffect } from 'react';
import ExperianceCard from './ExperianceCard';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './experiance.css';

const Experiance = () => {

  useEffect(() => {
    AOS.init();
  })

  const experianceCards = [
    {
      id: 1,
      job: 'Frontend Developer',
      skills: ['Problem Solving', 'HTML/HTML 5', 'CSS/CSS 3', 'JavaScript/ES 6', 'DOM/BOM', 'Bootstrap', 'Tailwind', 'OOP', 'Firebase', 'React', 'REST API', 'Axios', 'Material UI', 'sass', 'Git', 'Clean Code', 'framer-motion']
    },
    // {
    //   id: 2,
    //   job: 'Backend Developer',
    //   skills: ['Node JS', 'MongoDB', 'PHP', 'MySQL', 'Python']
    // }
  ];


  return (
    <section id="experiance">
      <h5 data-aos="fade-up">What Skills I Have</h5>
      <h2 data-aos="fade-up" data-aos-delay="100">My Expoeriance</h2>
      <div className="container experiance_container">
        <div data-aos="fade-up" data-aos-delay="200" className="experiance_cards">
          {experianceCards.map(card => <ExperianceCard key={card.id} {...card}/>)}
        </div>
      </div>
    </section>
  );
};

export default Experiance;