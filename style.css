/* GLOBAL STYLES */
:root {
    --primary-color: #007acc; /* Azure Blue (DevOps/Cloud color) */
    --accent-color: #00ff41; /* Neo-Green (Terminal highlight) */
    --transition-speed: 0.3s;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    transition: background-color var(--transition-speed), color var(--transition-speed);
}

.container {
    max-width: 1100px;
    margin: auto;
    padding: 0 20px;
}

/* --- LIGHT MODE (Default) --- */
.light-mode {
    --bg-color: #f4f4f9;
    --text-color: #333;
    --header-bg: #fff;
    --card-bg: #fff;
    --border-color: #ddd;
    --shadow-color: rgba(0, 0, 0, 0.1);

    background-color: var(--bg-color);
    color: var(--text-color);
}

/* --- DARK MODE --- */
.dark-mode {
    --bg-color: #121212; /* Deep Black */
    --text-color: #e0e0e0; /* Light Gray */
    --header-bg: #1f1f1f; /* Darker Header */
    --card-bg: #1f1f1f;
    --border-color: #333;
    --shadow-color: rgba(0, 0, 0, 0.5);

    background-color: var(--bg-color);
    color: var(--text-color);
}

/* HEADER STYLING */
.header {
    background: var(--header-bg);
    color: var(--text-color);
    padding: 1rem 0;
    border-bottom: 3px solid var(--primary-color);
    box-shadow: 0 2px 5px var(--shadow-color);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-name {
    font-size: 1.8rem;
    font-weight: 700;
}

.devops-tag {
    color: var(--accent-color); /* Highlight the DevOps tag */
    font-size: 1rem;
    font-weight: 400;
}

.header-nav a {
    color: var(--text-color);
    text-decoration: none;
    margin-left: 20px;
    font-weight: 500;
    transition: color var(--transition-speed);
}

.header-nav a:hover {
    color: var(--primary-color);
}

.header-actions {
    display: flex;
    gap: 10px;
}

/* BUTTONS */
.btn {
    display: inline-block;
    padding: 10px 15px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color var(--transition-speed);
    border: none;
}

.primary-btn {
    background-color: var(--primary-color);
    color: #fff;
}

.primary-btn:hover {
    background-color: #005f99;
}

.icon-btn {
    background: none;
    border: 1px solid var(--border-color);
    color: var(--text-color);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color var(--transition-speed), color var(--transition-speed);
    font-size: 1.1rem;
}

.icon-btn:hover {
    background-color: var(--primary-color);
    color: #fff;
    border-color: var(--primary-color);
}

/* MAIN CONTENT */
.main-content {
    padding: 40px 20px;
}

.section {
    margin-bottom: 50px;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 25px;
    border-bottom: 2px solid var(--accent-color);
    display: inline-block;
    padding-bottom: 5px;
    color: var(--primary-color);
}

.section-title i {
    margin-right: 10px;
}

/* CARD STYLING */
.card {
    background: var(--card-bg);
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 4px 10px var(--shadow-color);
    border: 1px solid var(--border-color);
    transition: box-shadow var(--transition-speed), border var(--transition-speed);
}

.card:hover {
    box-shadow: 0 6px 15px var(--primary-color);
}

/* SUMMARY */
.contact-info {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid var(--border-color);
}

.contact-info i {
    color: var(--primary-color);
    margin-right: 8px;
}

.social-links a {
    color: var(--primary-color);
    text-decoration: none;
    margin-right: 15px;
    font-weight: 500;
}

/* SKILLS GRID */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.skill-category h3 {
    color: var(--primary-color);
    margin-bottom: 10px;
    border-bottom: 1px dashed var(--border-color);
    padding-bottom: 5px;
}

.skill-category p {
    font-size: 0.95rem;
}

/* EXPERIENCE */
.job-card h3 {
    margin-bottom: 5px;
    color: var(--accent-color);
}

.company {
    color: var(--primary-color);
    font-weight: normal;
    font-size: 1.1rem;
}

.duration {
    font-style: italic;
    font-size: 0.9rem;
    color: var(--text-color);
    margin-bottom: 15px;
}

.job-card ul {
    list-style-type: none;
    padding-left: 20px;
}

.job-card li {
    margin-bottom: 8px;
    position: relative;
}

.job-card li::before {
    content: '>>'; /* Terminal-like bullet */
    color: var(--accent-color);
    font-weight: bold;
    position: absolute;
    left: -20px;
}

/* PROJECTS */
.project-card {
    margin-bottom: 20px;
}

.project-card h3 {
    color: var(--primary-color);
    margin-bottom: 5px;
}

.tech-stack {
    margin: 10px 0;
    padding: 5px 10px;
    background: rgba(0, 122, 204, 0.1);
    display: inline-block;
    border-radius: 3px;
    font-size: 0.9rem;
}

.dark-mode .tech-stack {
    background: rgba(0, 255, 65, 0.1);
    color: var(--accent-color);
}

.github-link {
    color: var(--accent-color);
    text-decoration: none;
    font-weight: bold;
}

.github-link:hover {
    text-decoration: underline;
}

/* FOOTER */
.footer {
    text-align: center;
    padding: 20px 0;
    border-top: 1px solid var(--border-color);
    font-size: 0.9rem;
    background: var(--header-bg);
}

.footer i {
    color: red;
}
