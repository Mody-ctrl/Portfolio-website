document.addEventListener('DOMContentLoaded', function () {

  // ================= Skills =================
  const skills = [
    { name: 'JavaScript', icon: '<img src="img/Skills icons/javascript.svg" alt="JavaScript" class="custom-icon">' },
    { name: 'TypeScript', icon: '<img src="img/Skills icons/typescript.svg" alt="TypeScript" class="custom-icon">' },
    { name: 'HTML5', icon: '<img src="img/Skills icons/html-5.svg" alt="HTML5" class="custom-icon">' },
    { name: 'CSS3', icon: '<img src="img/Skills icons/css.svg" alt="CSS3" class="custom-icon">'},
    { name: 'React', icon: '<img src="img/Skills icons/react.svg" alt="React" class="custom-icon">' },
    { name: 'Git', icon: '<img src="img/Skills icons/git.svg" alt="Git" class="custom-icon">' },
    { name: 'Tailwind CSS', icon: '<img src="img/Skills icons/icons8-tailwindcss.svg" alt="Tailwind CSS" class="custom-icon">' },
    { name: 'next.js', icon: '<img src="img/Skills icons/Next.js_Symbol_0.svg" alt="next.js" class="custom-icon">' },
    { name: 'vite', icon: '<img src="img/Skills icons/vite.svg" alt="vite" class="custom-icon">' },
    { name: 'figma', icon: '<img src="img/Skills icons/figma.svg" alt="figma" class="custom-icon">' },
    { name: 'redux', icon: '<img src="img/Skills icons/redux.svg" alt="redux" class="custom-icon">' },
    { name: 'GSAP', icon: '<img src="img/Skills icons/gsap-greensock.svg" alt="GSAP" class="custom-icon">' }
  ];

  // ================= Social Links =================
  const socialLinks = [
    { name: 'Facebook', icon: '<i class="fab fa-facebook"></i>', url: 'https://www.facebook.com/AhmedBakruwk' },
    { name: 'Instagram', icon: '<i class="fab fa-instagram"></i>', url: 'https://www.instagram.com/_.aatrox/' },
    { name: 'GitHub', icon: '<i class="fab fa-github"></i>', url: 'https://github.com/Mody-ctrl' },
    { name: 'LinkedIn', icon: '<i class="fab fa-linkedin"></i>', url: 'https://www.linkedin.com/in/ahmed-abobaker-4705102a4' },
    { name: 'WhatsApp', icon: '<i class="fab fa-whatsapp text-green-500"></i>', url: 'https://wa.me/201015605634' },
    { name: 'Gmail', icon: '<i class="fas fa-envelope text-red-500"></i>', url: 'mailto:ahmedabobakerasms55@gmail.com' }
  ];

  // ================= Projects =================
  const projects = [
    {
      title: 'Shop Hub',
      description: 'ShopHub premium shopping website with modern UI, cart functionality, and seamless checkout experience.',
      url: 'https://shop-hub-topaz-xi.vercel.app/',
      icon: 'fa-shopping-bag',
      image: 'img/ShopHub.png',
      tags: ['React', 'CSS', 'E-commerce']
    },
    {
      title: 'CSS Reference Guide',
      description: 'Complete interactive guide to CSS properties and techniques for developers of all levels.',
      url: 'https://css-refrences-guide.vercel.app/',
      icon: 'fa-palette',
      image: 'img/Css Website.png',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects, skills, and professional journey.',
      url: 'https://mody-ctrl.github.io/Portfolio/',
      icon: 'fa-briefcase',
      image: 'images/portfolio.png',
      tags: ['HTML', 'CSS', 'Responsive']
    },
    {
      title: 'Games Website',
      description: 'Contains classic games from 2010.',
      url: 'https://mody-ctrl.github.io/Portfolio/',
      icon: 'fa-gamepad',
      image: 'images/games.png',
      tags: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  // ================= Render Skills =================

  const skillsContainer = document.getElementById('skills');
  skills.forEach(skill => {
    const div = document.createElement('div');
    div.className = 'skill-item';
    div.innerHTML = `${skill.icon ? `<span class="skill-icon">${skill.icon}</span>` : ''}
    ${skill.name ? `<span class="skill-name">${skill.name}</span>` : ''} 
    ${skill.level ? `<span class="skill-level">(${skill.level})</span>` : ''}`;
    skillsContainer.appendChild(div);
  });

  // ================= Render Social Links =================
  const socialLinksContainer = document.getElementById('contact');
  socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.className = 'social-link';
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = `${link.icon} ${link.name}`;
    socialLinksContainer.appendChild(a);
  });

  // ================= Render Projects =================
  const projectsContainer = document.getElementById('projects');

  projects.forEach((project, index) => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project-card';

    const tagsHTML = project.tags
      .map(tag => `<span class="project-tag">${tag}</span>`)
      .join('');

    projectElement.innerHTML = `
      <span class="project-number">0${index + 1}</span>

      <img src="${project.image}" alt="${project.title}" class="project-image">

      <div class="project-icon">
        <i class="fas ${project.icon}"></i>
      </div>

      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <div class="project-tags">${tagsHTML}</div>

      <a href="${project.url}" target="_blank" class="project-link">
        View Project <i class="fas fa-arrow-right"></i>
      </a>

      <div class="project-corner"></div>
    `;

    projectsContainer.appendChild(projectElement);
  });

  // ================= Smooth Scroll =================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// ================= Background Animation =================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
    this.size = Math.random() * 2 + 1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "#ff073a";
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

    this.draw();
  }
}

for (let i = 0; i < 120; i++) {
  particles.push(new Particle());
}

function connect() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        ctx.strokeStyle = "rgba(255,7,58,0.15)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => p.update());
  connect();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});














// ================= login animations  =================

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro-overlay").classList.add("intro-hide");
  }, 2800);
});


const nameText = "Ahmed Abobaker";
const typedName = document.getElementById("typed-name");

let i = 0;

function typeSmooth() {
  if (i < nameText.length) {
    typedName.textContent += nameText[i];
    i++;
    setTimeout(typeSmooth, 80);
  }
}

window.addEventListener("load", () => {
  typeSmooth();

 setTimeout(() => {
  cinematicExit();
  }, 3200);

const introCanvas = document.getElementById("intro-particles");
const introCtx = introCanvas.getContext("2d");

function resize() {
  introCanvas.width = innerWidth;
  introCanvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

const dots = Array.from({ length: 60 }, () => ({
  x: Math.random() * introCanvas.width,
  y: Math.random() * introCanvas.height,
  r: Math.random() * 1.5 + 0.5,
  s: Math.random() * 0.3 + 0.1
}));

function animateDots() {
  introCtx.clearRect(0,0,introCanvas.width,introCanvas.height);
  dots.forEach(d => {
    d.y -= d.s;
    if (d.y < 0) d.y = introCanvas.height;

    introCtx.beginPath();
    introCtx.arc(d.x, d.y, d.r, 0, Math.PI*2);
    introCtx.fillStyle = "rgba(255,80,80,0.6)";
    introCtx.fill();
  });
  requestAnimationFrame(animateDots);
}

animateDots();

});

function cinematicExit() {
  const pieces = document.querySelectorAll(".intro-piece");

  pieces.forEach((el, i) => {
    const dir = i % 2 === 0 ? 1 : -1;

    const x = dir * (220 + i * 120);
    const y = -120 - i * 80;
    const z = -300 - i * 160;

    el.style.transform = `
      translate3d(${x}px, ${y}px, ${z}px)
      rotate(${dir * 18}deg)
      scale(1.15)
    `;

    el.style.opacity = "0";
  });

  setTimeout(() => {
    document.getElementById("intro-overlay").remove();
  }, 1500);
}    