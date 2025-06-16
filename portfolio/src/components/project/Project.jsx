// import React from 'react'
import "./project.css"

const Project = () => {
  const projects = [
    {
      title: 'Food Munch',
      date: 'April 2024 - April 2024',
      description: "Discover the world of food with this responsive website that showcases a comprehensive list of food items.Designed with a user-centric approach, this website features HTML structure elements and Bootstrap components to ensure a seamless experience.Get a closer look at the food items with product videos, available at the click of a button.",
      skills: ['HTML', 'Cascading Style Sheets (CSS)'],
      link: 'https://balaramfoodsite.ccbp.tech',
    },
    {
      title: 'Todos Application',
      date: 'Aug 2024 - Sep 2024',
      description: "A robust task tracking system with CRUD capabilities, crafted to simplify task management.Designed with HTML, CSS to ensure a user-friendly interface for managing tasks.Dynamic UI updates through JavaScript event listeners and DOM operations for seamless CRUD operations.Secure task persistence through local storage methods, ensuring that tasks are never lost",
      skills: ['HTML', 'Cascading Style Sheets (CSS)' ,'JavaScript'],
      link: 'https://baliatodocheck.ccbp.tech',
    },
    {
      title: 'Jobby Application',
      date: 'Sep 2024 - Oct 2024',
      description: "Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc.Authenticating by taking username, password and doing login post HTTP API Call.Persisted user login state by keeping jwt token in client storage, Sending it in headers of further API calls to authorize the user.Implemented different routes for Login, Home, Jobs, Job item details pages by using React Router components Route, Switch, Link.Implemented filters and search text by sending them as query parameters to jobs API calls.Redirecting to the login page if the user tries to open Home, Jobs, Job item details routes which needauthentication by implementing protected Route.",
      skills: ['React js', 'Cascading Style Sheets (CSS)'],
      link: 'https://balaramjobbyapp.ccbp.tech',
    },
    {
      title:"Airbnb Clone",
      date: "Nov 2024 - Dec 2024",
      description: 'Successfully developed a clone of the Airbnb website using Node.js, EJS, and EJS Mate to create a dynamic and user-friendly interface for a project.Utilized Express.js to establish a seamless connection between the frontend and backend, ensuring smooth communication and functionality.Used MVC framework (Model, View, Controller) to organize and streamline project structure. Successfully stored and retrieved data using MongoDB for efficient data management and retrieva.',
      skills: ['Cascading Style Sheets (CSS)','Node.js', 'EJS', 'EJS Mate', 'Express.js', 'MVC', 'MongoDB'],
      link: "https://github.com/Balarammandalo/AirbnbProject"
    },
    {
      title: "Voting System Application",
      date: "Jan 2025 - feb 2025",
      description: 'I built a secure and role-based voting system using Node.js and MongoDB. It supports candidate CRUD operations via admin access, and a voting mechanism where users can vote once. Admins are restricted from voting to ensure fairness. The system uses JWT for authentication and a custom middleware to enforce role-based access. Votes are tracked and displayed in real-time with sorted results.',
      skills: ['Node.js','Express js', 'MongoDB', 'JWT', 'Middleware'],
      link : "https://github.com/Balarammandalo/votingapplication"
    },
    {
      title:"Loan Application",
      date: "Mar 2025 - Mar 2025",
      description: 'Developed a responsive web application for calculating loan EMI, interest, and repayment schedules based on user inputs. Utilized React.js for dynamic UI updates and state management, and Tailwind CSS for a clean, mobile-friendly design. Implemented input validation, real-time calculations, and user-friendly data visualization to enhance usability and accuracy.',
      skills: ['React js','Tailwind Cascading Style Sheets (CSS)'],
      link: "https://loan-app-six-tawny.vercel.app/"
    },
  ]
  return (
    <div className="projects">
      <h2 className="projectHead">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-card-head">{project.title}</h2>
            <p className="date">{project.date}</p>
            <p className="description">{project.description}</p>
            <div className="skills-used">
              {project.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View Live Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
