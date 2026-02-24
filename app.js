
// Job list 
let jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide..",
    status: "all"
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "all"
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "all"
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "full time",
    salary: "$140,000 - $190,000",
    description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "all"
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "all"
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "all"
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$125,000 - $160,000",
    description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "all"
  },
  {
    id: 8,
    companyName: "chCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
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
