document.addEventListener('DOMContentLoaded', function () {

  // ================= Skills =================
  const skills = [
    { name: 'JavaScript', icon: '<i class="fab fa-js text-yellow-500"></i>' },
    { name: 'TypeScript', icon: '<i class="fab fa-typescript text-blue-600"></i>' },
    { name: 'HTML5', icon: '<i class="fab fa-html5 text-orange-600"></i>' },
    { name: 'CSS3', icon: '<i class="fab fa-css3-alt text-blue-600"></i>' },
    { name: 'React', icon: '<i class="fab fa-react text-blue-400"></i>' },
    { name: 'Git', icon: '<i class="fab fa-git-alt text-red-600"></i>' },
    { name: 'Tailwind CSS', icon: '<i class="fas fa-wind text-teal-400"></i>' },
    { name: 'Vanilla CSS', icon: '<i class="fas fa-code text-gray-600"></i>' }
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
    div.innerHTML = `${skill.icon} ${skill.name}`;
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
