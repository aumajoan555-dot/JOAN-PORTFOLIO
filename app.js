// Joan's Portfolio Data
const portfolio = {
  about: "Hello! I'm Joan, a web developer in training with growing skills in HTML, CSS, javaScript and digital marketing. I'm passionate about building interactive websites and creating a professional online presence.",
  skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX Design"],
  projects: [
    {
      name: "Personal Blog",
      description: "A responsive blog site built with HTML, CSS, and JavaScript.",
      link: "https://example.com/blog"
    },
    {
      name: "E-commerce Store",
      description: "An online store with shopping cart functionality using React.",
      link: "https://example.com/store"
    }
  ],
  contact: {
    email: "aumajoan555@gmail.com",
    phone: "0713479092",
    link: "https://example.com/blog"
  }
};

// Populate About Section
document.getElementById("about-text").textContent = portfolio.about;

// Populate Skills
const skillsList = document.getElementById("skills-list");
portfolio.skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Populate Projects
const projectsContainer = document.getElementById("projects-container");
portfolio.projects.forEach(project => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${project.name}</h3>
                   <p>${project.description}</p>
                   <a href="${project.link}" target="_blank">View Project</a>`;
  projectsContainer.appendChild(div);
});

// Populate Contact Info
document.getElementById("contact-info").innerHTML = `
  Email: <a href="mailto:${portfolio.contact.email}">${portfolio.contact.email}</a><br>
  Contact: <a href="${portfolio.contact.phone}" target="_blank">${portfolio.contact.phone}</a><br>
  Link: <a href="${portfolio.contact.link}" target="_blank">${portfolio.contact.link}</a>
`;

