document.addEventListener('DOMContentLoaded', function () {
    //Skills
    const skills = [
        { name: 'JavaScript', icon: '<i class="fab fa-js text-yellow-500"></i>', color: 'text-yellow-500' },
        { name: 'HTML5', icon: '<i class="fab fa-html5 text-orange-600"></i>', color: 'text-orange-600' },
        { name: 'CSS3', icon: '<i class="fab fa-css3-alt text-blue-600"></i>', color: 'text-blue-600' },
        { name: 'React', icon: '<i class="fab fa-react text-blue-400"></i>', color: 'text-blue-400' },
        { name: 'Git', icon: '<i class="fab fa-git-alt text-red-600"></i>', color: 'text-red-600' },
        { name: 'Tailwind CSS', icon: '<i class="fas fa-wind text-teal-400"></i>', color: 'text-teal-400' },
        { name: 'vanilla CSS', icon: '<i class="fas fa-code text-gray-600"></i>', color: 'text-gray-600' }
    ];

    //Social media Links
    const socialLinks = [
        { name: 'Facebook', icon: '<i class="fab fa-facebook"></i>', url: 'https://www.facebook.com/AhmedBakruwk' },
        { name: 'Instagram', icon: '<i class="fab fa-instagram"></i>', url: 'https://www.instagram.com/_.aatrox/' },
        { name: 'GitHub', icon: '<i class="fab fa-github"></i>', url: 'https://github.com/Mody-ctrl' },
        { name: 'LinkedIn', icon: '<i class="fab fa-linkedin"></i>', url: 'https://www.linkedin.com/in/ahmed-abobaker-4705102a4?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
        {
            name: 'WhatsApp',
            icon: '<i class="fab fa-whatsapp text-green-500"></i>',
            url: 'https://wa.me/201015605634'
        },
        {
            name: 'Gmail',
            icon: '<i class="fas fa-envelope text-red-500"></i>',
            url: 'mailto:ahmedabobakerasms55@gmail.com'
        },
    ];


    // Projects
    const projects = [
        { title: 'E-commerce website', description: 'F&b shop for food and drinks', url: 'https://github.com/Mody-ctrl/E-commerce-2' },
        { title: 'CSS Reference Guide', description: 'Complete guide to CSS properties and techniques', url: 'https://css-elements-by-ahmed.netlify.app/' },
        { title: 'Portfolio Website', description: 'Personal portfolio to showcase projects and skills', url: 'https://mody-ctrl.github.io/Portfolio/' }];

    // Add skills 
    const skillsContainer = document.getElementById('skills');
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `${skill.icon} ${skill.name}`;
        skillsContainer.appendChild(skillElement);
    });

    // Add social links 
    const socialLinksContainer = document.getElementById('contact');
    socialLinks.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.className = 'social-link';
        linkElement.href = link.url;
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        linkElement.innerHTML = `${link.icon} ${link.name}`;
        socialLinksContainer.appendChild(linkElement);
    });

    // Add projects 
    const projectsContainer = document.getElementById('projects');
    projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-link">View Project</a>
        `;
        projectsContainer.appendChild(projectElement);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

//for background animation

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
    ctx.fillStyle = "#ff073a"; // نيون أحمر
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

// إنشاء الإلكترونات
for (let i = 0; i < 120; i++) {
  particles.push(new Particle());
}

// رسم خطوط بينهم
function connect() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      let dx = particles[a].x - particles[b].x;
      let dy = particles[a].y - particles[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

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
