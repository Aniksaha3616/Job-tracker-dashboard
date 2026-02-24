
// Job list 
let jobs = [
  {
    id: 1,
    companyName: "Google",
    position: "Frontend Engineer",
    location: "California, USA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "Build scalable UI systems using React and TypeScript.",
    status: "all"
  },
  {
    id: 2,
    companyName: "Microsoft",
    position: "Cloud Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description: "Develop Azure-based cloud-native applications.",
    status: "all"
  },
  {
    id: 3,
    companyName: "Amazon",
    position: "Backend Engineer",
    location: "Seattle, USA",
    type: "Full-time",
    salary: "$115,000 - $145,000",
    description: "Design distributed microservices using AWS.",
    status: "all"
  },
  {
    id: 4,
    companyName: "Spotify",
    position: "Data Analyst",
    location: "Stockholm, Sweden",
    type: "Contract",
    salary: "$90,000 - $110,000",
    description: "Analyze streaming behavior to improve recommendations.",
    status: "all"
  },
  {
    id: 5,
    companyName: "Tesla",
    position: "Software Engineer",
    location: "Texas, USA",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    description: "Work on autonomous vehicle software systems.",
    status: "all"
  },
  {
    id: 6,
    companyName: "Airbnb",
    position: "Product Designer",
    location: "Remote",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description: "Design intuitive user experiences for booking systems.",
    status: "all"
  },
  {
    id: 7,
    companyName: "Meta",
    position: "Security Engineer",
    location: "New York, USA",
    type: "Full-time",
    salary: "$125,000 - $155,000",
    description: "Perform penetration testing and security audits.",
    status: "all"
  },
  {
    id: 8,
    companyName: "Netflix",
    position: "DevOps Engineer",
    location: "Los Angeles, USA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "Maintain CI/CD pipelines and cloud infrastructure.",
    status: "all"
  }
];

let currentTab = "all";

const jobList = document.getElementById("jobList");
const template = document.getElementById("jobCardTemplate");
const emptyState = document.getElementById("emptyState");

function renderJobs() {
  jobList.innerHTML = "";

  const filtered =
    currentTab === "all"
      ? jobs
      : jobs.filter(job => job.status === currentTab);

  document.getElementById("sectionCount").textContent =
    `${filtered.length} jobs`;

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");

    filtered.forEach(job => {
      const clone = template.content.cloneNode(true);

      clone.querySelector(".company").textContent = job.companyName;
      clone.querySelector(".position").textContent = job.position;
      clone.querySelector(".meta").textContent =
        `${job.location} • ${job.type}`;
      clone.querySelector(".salary").textContent = job.salary;
      clone.querySelector(".description").textContent = job.description;

      clone.querySelector(".interviewBtn")
        .addEventListener("click", () => setStatus(job.id, "interview"));

      clone.querySelector(".rejectedBtn")
        .addEventListener("click", () => setStatus(job.id, "rejected"));

      clone.querySelector(".deleteBtn")
        .addEventListener("click", () => deleteJob(job.id));

      jobList.appendChild(clone);
    });
  }

  updateDashboard();
}

function setStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  job.status = status;
  renderJobs();
}

function deleteJob(id) {
  jobs = jobs.filter(job => job.id !== id);
  renderJobs();
}

function updateDashboard() {
  document.getElementById("totalCount").textContent = jobs.length;
  document.getElementById("interviewCount").textContent =
    jobs.filter(j => j.status === "interview").length;
  document.getElementById("rejectedCount").textContent =
    jobs.filter(j => j.status === "rejected").length;
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t =>
      t.classList.remove("tab-active")
    );
    tab.classList.add("tab-active");

    currentTab = tab.dataset.tab;
    renderJobs();
  });
});

renderJobs();
