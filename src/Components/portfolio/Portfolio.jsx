import { useEffect } from 'react';
import AOS from 'aos';
import { useState } from 'react';

import 'aos/dist/aos.css';
import './portfolio.css';

const Portfolio = () => {

  const projects = [
    {
      title: 'Dashoard',
      img: 'http://localhost:3000/static/media/34.1ba2d83da3a8b3d09bc1.png',
      type: 'React',
      github: 'https://github.com/omarfrontendev/ecommerce',
      demo: 'https://omarfrontendev.github.io/ecommerce/'
    },
    {
      title: 'Amazon Clone',
      img: 'http://localhost:3000/static/media/35.fb644ddf935481582ce7.png',
      type: 'React',
      github: 'https://github.com/omarfrontendev/amazon',
      demo: 'https://omarfrontendev.github.io/amazon/'
    },
    {
      title: 'Booking',
      img: 'http://localhost:3000/static/media/36.28a7465916cc54d5c063.png',
      type: 'React',
      github: 'https://github.com/omarfrontendev/booking',
      demo: 'https://omarfrontendev.github.io/booking/'
    },
    {
      title: 'Desiny + Clone',
      img: 'http://localhost:3000/static/media/1.936b33ef8c36cee3d3f9.png',
      type: 'React',
      github: 'https://github.com/omarfrontendev/disney',
      demo: 'https://adorable-travesseiro-4f63a3.netlify.app/'
    },
    {
      title: 'GYM Website',
      img: 'http://localhost:3000/static/media/2.8e591021d5e5ccf94546.png',
      type: 'React',
      github: 'https://github.com/omarfrontendev/GYM',
      demo: 'https://stellar-trifle-b2da74.netlify.app'
    },
    {
      title: 'Gericht Restaurant',
      img: 'http://localhost:3000/static/media/3.2ee9be5e2a5428c3faa5.png',
      type: 'React',
      github: 'https://github.com/omarfrontendev/restaurant',
      demo: 'https://restaurant-geritcht.netlify.app'
    },
    {
      title: 'Mostafa Portfolio',
      img: 'http://localhost:3000/static/media/4.c0e486d34e687ad4ddc3.png',
      type: 'React',
      github: 'https://github.com/omarfrontendev/mostafa-portfolio',
      demo: 'https://astonishing-cupcake-4f3b22.netlify.app'
    },
    {
      title: 'Crytoverse',
      img: 'http://localhost:3000/static/media/5.943cc0259a23181a95c9.png',
      type: 'React',
      github: 'https://github.com/omarfrontendev/crytoverse',
      demo: 'https://dancing-sundae-c0bc97.netlify.app'
    },
    {
      title: 'Facebook Clone',
      img: 'http://localhost:3000/static/media/6.8bdc2c264fc86f3a8e4a.png',
      type: 'React',
      github: 'https://github.com/omarfrontendev/facebook',
      demo: 'https://dummy-f-b.netlify.app'
    },
    {
      title: 'Food Cart',
      img: 'http://localhost:3000/static/media/7.a4ccbeb81a9ca3f4d2e9.png',
      type: 'React',
      github: 'https://github.com/omarfrontendev/food-cart',
      demo: 'https://dummy-food-cart.netlify.app'
    },
    {
      title: 'Booking',
      img: 'http://localhost:3000/static/media/8.fc03d4fe084425248781.png',
      type: 'React',
      github: 'https://github.com/omarfrontendev/booking',
      demo: 'https://playful-kheer-a9aa4f.netlify.app'
    },
    {
      title: 'Simple Dashboard',
      img: 'http://localhost:3000/static/media/9.c2cf576b1b12e62d4b73.png',
      type: 'React',
      github: '#',
      demo: 'https://simple-a-dashboard.netlify.app/admin'
    },
    {
      title: 'Portfolio',
      img: 'http://localhost:3000/static/media/10.83d9cbf69693832af241.png',
      type: 'React',
      github: 'https://github.com/omarfrontendev/portfolio',
      demo: 'https://dummy-portofolio.netlify.app'
    },
    {
      title: 'ElZero Template',
      img: 'http://localhost:3000/static/media/11.11f7b609e968453518de.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/js-template',
      demo: 'https://special-tem.netlify.app'
    },
    {
      title: 'TO DO App',
      img: 'http://localhost:3000/static/media/12.8c0b1730317dab939791.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/todo-app',
      demo: 'https://scintillating-concha-cdde27.netlify.app'
    },
    {
      title: 'Rating App',
      img: 'http://localhost:3000/static/media/13.5e39954de5082f52b8d4.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/rating-app',
      demo: 'https://sweet-torte-4a38cc.netlify.app'
    },
    {
      title: 'Quiz App',
      img: 'http://localhost:3000/static/media/14.eb4a747ccde2b05876d5.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/quiz',
      demo: 'https://clinquant-otter-479bbd.netlify.app'
    },
    {
      title: 'To Do App2',
      img: 'http://localhost:3000/static/media/15.dab871668037674950f2.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/to-do-list',
      demo: 'https://funny-to-do-list.netlify.app'
    },
    {
      title: 'Furniture Shop',
      img: 'http://localhost:3000/static/media/16.d8fc58ba1b3bab2eba73.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/Furniture-shop',
      demo: 'https://dancing-platypus-935cea.netlify.app'
    },
    {
      title: 'Memory Game',
      img: 'http://localhost:3000/static/media/17.807ba889797fc45a88ad.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/memory-game',
      demo: 'https://dummy-memory-game.netlify.app'
    },
    {
      title: 'Nice Login Animate',
      img: 'http://localhost:3000/static/media/18.21016465a91b5e32c36c.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/nice-input',
      demo: 'https://musical-swan-2d9a6b.netlify.app'
    },
    {
      title: 'Clothes Shop',
      img: 'http://localhost:3000/static/media/19.8a691f09d97c4b904645.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/cloes-shop',
      demo: 'https://majestic-melomakarona-e84166.netlify.app'
    },
    {
      title: 'Typing Game',
      img: 'http://localhost:3000/static/media/20.44e178881f0888e7223a.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/typing-game2',
      demo: 'https://dummy-wordbeater.netlify.app'
    },
    {
      title: 'Comming Soon Landing',
      img: 'http://localhost:3000/static/media/21.b55812c95df1474804cd.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/comingsoon-landing',
      demo: 'https://fastidious-kringle-95a233.netlify.app'
    },
    {
      title: 'Book List',
      img: 'http://localhost:3000/static/media/22.478b6bc0166993183764.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/bookstore',
      demo: 'https://zesty-boba-315c97.netlify.app/'
    },
    {
      title: 'Hangman Game',
      img: 'http://localhost:3000/static/media/23.bd97aee44f603b45c49a.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/hangman-game',
      demo: 'https://luxury-torte-835dc2.netlify.app'
    },
    {
      title: 'Attack Monster Game',
      img: 'http://localhost:3000/static/media/24.2d522663859ae2b21f49.png',
      type: 'JS',
      github: 'https://github.com/omarfrontendev/attack-monster',
      demo: 'https://effulgent-duckanoo-71eeae.netlify.app'
    },
    {
      title: 'PersM4',
      img: 'http://localhost:3000/static/media/25.c4a1ebc7c3a35d14eff6.png',
      type: 'Css',
      github: 'https://github.com/omarfrontendev/pets4',
      demo: 'https://petsm4.netlify.app'
    },
    {
      title: 'Dark Portfolio',
      img: 'http://localhost:3000/static/media/26.5b3e795f244d9ccf0585.png',
      type: 'Css',
      github: 'https://github.com/omarfrontendev/dark-template',
      demo: 'https://shaikhanas.netlify.app'
    },
    {
      title: 'Template',
      img: 'http://localhost:3000/static/media/27.5cabefeb68133be63d07.png',
      type: 'Bootstrap',
      github: 'https://github.com/omarfrontendev/template-6',
      demo: 'https://golden-otter-ea8956.netlify.app'
    },
    {
      title: 'Template',
      img: 'http://localhost:3000/static/media/28.2df68c2e525eb294066e.png',
      type: 'Bootstrap',
      github: 'https://github.com/omarfrontendev/template-7',
      demo: 'https://lucky-figolla-b166c9.netlify.app'
    },
    {
      title: 'Template',
      img: 'http://localhost:3000/static/media/29.0d24f6991b6b9e63d64c.png',
      type: 'Bootstrap',
      github: 'https://github.com/omarfrontendev/template-5',
      demo: 'https://graceful-lollipop-50434f.netlify.app'
    },
    {
      title: 'Template',
      img: 'http://localhost:3000/static/media/30.a46301e3581dcbe46d28.png',
      type: 'Css',
      github: 'https://github.com/omarfrontendev/template-3',
      demo: 'https://aliporto.netlify.app'
    },
    {
      title: 'Template',
      img: 'http://localhost:3000/static/media/31.956662c9e15d4995365f.png',
      type: 'Css',
      github: 'https://github.com/omarfrontendev/template-4',
      demo: 'https://my-portofoilio.netlify.app'
    },
    {
      title: 'Template',
      img: 'http://localhost:3000/static/media/32.b7067a2204e19acbc82c.png',
      type: 'Css',
      github: 'https://github.com/omarfrontendev/kaspre-template',
      demo: 'https://kaspr.netlify.app'
    },
    {
      title: 'Template',
      img: 'http://localhost:3000/static/media/33.8639ac301c2c765d487e.png',
      type: 'Css',
      github: 'https://github.com/omarfrontendev/leon-template',
      demo: 'https://kasper012.netlify.app'
    },
  ];

  const [currentProject, setCurrentProject] = useState(projects)

  useEffect(() => {
    AOS.init()
  }, []);

  return (
    <section>
      <h5 data-aos="fade-up">My Recent Work</h5>
      <h2 data-aos="fade-up" data-aos-delay='100'>Portfolio</h2>
      <ul className='btns-container'>
        <li>
          <button onClick={() => setCurrentProject(projects)}>
            All
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentProject(projects.filter(p => p.type === 'React'))}>
            React
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentProject(projects.filter(p => p.type === 'Bootstrap'))}>
            Bootstrap
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentProject(projects.filter(p => p.type === 'JS'))}>
            Js
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentProject(projects.filter(p => p.type === 'Css'))}>
            Css
          </button>
        </li>
      </ul>
      <div className="container portf_container">
        {currentProject.map((project, i) =>     
        <article key={i}>
          <div className="portf_img">
            <img src={project.img} alt='project__IMG'/>
          </div>
          <h3>{project.title} / {project.type}</h3>
          <div className="btns">
            <a href={project.github} target='_blank' className="btn">Github</a>
            <a href={project.demo} target='_blank' className="btn btn-primary">Live Demo</a>
          </div>
        </article>
      )}
      </div>
    </section>
  );
};

export default Portfolio;