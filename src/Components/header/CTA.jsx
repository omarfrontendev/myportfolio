import { useEffect } from 'react'; 
import AOS from 'aos';

import 'aos/dist/aos.css';

const CTA = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="cta">
      <a data-aos="fade-right" data-aos-delay="200" href={'https://drive.google.com/drive/folders/1UC9i7r2TPmv15IRuEUrp3cZ0Fv9GCkIB?usp=sharing'} target='_blank' className='btn' rel="noreferrer">CV</a>
      <a data-aos="fade-left" data-aos-delay="200" href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  );
};
export default CTA;