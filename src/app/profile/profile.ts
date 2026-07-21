import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
  imports: [CommonModule]
})
export class Profile{
  
  profile = {
    name: 'Aditya Raj',
    title: 'Full Stack Developer',
    email: 'aadiraj1228@gmail.com',
    phone: '+91 8651255090',
    location: 'Gurugram, Haryana',
    linkedin: 'https://linkedin.com/in/aditya-raj-b20326192',
    github: 'https://github.com/aditya-raj19',
    summary: 'Full Stack Developer with 3+ years of experience building Java and Spring Boot microservices and Angular-based enterprise applications in the healthcare domain. Delivered a production AWS Textract pipeline that reduced manual data processing time by 40% and an enterprise dashboard that cut reporting time by 35%. Strong foundation in REST APIs, Spring Security, MongoDB, MySQL, Python, and AWS with a track record of measurable, award-recognised impact.'
  };

  // GitHub contribution chart settings
  githubUsername = 'aditya-raj19';
  githubChartUrl = `https://ghchart.rshah.org/${this.githubUsername}`;

  experience = [
    {
      company: 'Carelon Global Solutions',
      position: 'Software Engineer 1',
      location: 'Gurugram',
      startDate: 'Aug 2023',
      endDate: 'Present',
      duration: '3+ years',
      responsibilities: [
        'Built secure RESTful and SOAP microservices in Java 17 and Spring Boot to manage facility contracts and metadata, reducing data processing errors by 30% and improving reliability for downstream systems.',
        'Developed an AngularJS enterprise dashboard with dynamic data visualisations and Excel export functionality, cutting report generation time by 35% for 50+ COE team members.',
        'Engineered a multi-role access control system (Admin/Auditor/Viewer) using Spring Security with row-level data isolation, achieving zero unauthorised access incidents post-deployment.',
        'Integrated Google Maps JavaScript API with marker clustering to geo-visualise 100+ medical centres, replacing a manual spreadsheet workflow and enabling real-time location-based lookups.',
        'Built an automated fax-to-claims pipeline using AWS S3, Textract, and Spring Boot schedulers to extract and ingest unstructured health records into MongoDB, reducing manual processing effort by 40%.'
      ]
    }
  ];

 projects = [
  {
  title: 'EsportsBuzz.in',
  description: 'Esports platform for the Indian market built on Angular 17 and a Spring Boot REST backend, with a dual-database architecture: PostgreSQL for relational auth/session data and MongoDB for match and tournament data. Implements stateless JWT authentication with httpOnly cookies to mitigate XSS-based token theft, and is deployed on Vercel with custom domain routing via GoDaddy.',
  highlights: [
    'Designed a JWT auth flow using httpOnly, SameSite-secured cookies against a PostgreSQL-backed user store, avoiding client-side token storage entirely.',
    'Split persistence by access pattern — PostgreSQL for structured relational data (users, sessions), MongoDB for high-write, schema-flexible match/tournament data.',
    'Built the SPA in Angular 17 with standalone components and CSS, and configured production deployment on Vercel with a custom domain.',
    'Architecting a live scorecard module to ingest real-time Free Fire match data (kills, placements, points) beyond static schedules.'
  ],
  techStack: ['Angular 17', 'Spring Boot', 'MongoDB', 'PostgreSQL', 'CSS', 'JWT', 'Vercel'],
  liveUrl: 'https://esportsbuzz.in'
},
  {
    title: 'News Website',
    description: 'Built a full-stack news platform using Spring Boot (REST APIs), Angular (UI), and MongoDB, featuring JWT authentication, multi-category search with text indexing, and an admin content management panel.',
    highlights: [
      'Designed relational schemas using MySQL and JPA to manage structured content metadata, writing optimised SQL queries for category filtering and pagination.',
      'Optimised MongoDB indexing and query logic, reducing API response latency by 20% under load testing with concurrent requests.'
    ],
    techStack: ['Spring Boot', 'Angular', 'MongoDB', 'MySQL', 'JWT', 'REST APIs']
  }
];

  skills = {
    languages: ['Java 17', 'JavaScript',  'SQL'],
    backend: ['Spring Boot', 'Spring MVC', 'Spring Core', 'Spring Security', 'JPA / Hibernate', 'Microservices', 'REST APIs', 'SOAP'],
    frontend: ['Angular', 'HTML5 / CSS3', 'Bootstrap', 'AJAX', 'JSON / XML'],
    apis: ['JWT', 'Swagger / OpenAPI', 'Microservices'],
    databases: ['MongoDB', 'MySQL'],
    cloud: ['AWS (S3, Textract, Lambda)', 'Docker', 'Jenkins CI/CD', 'Git', 'GitHub'],
    testing: ['JUnit 5', 'Mockito', 'Postman', 'SoapUI'],
    tools: ['JIRA', 'Confluence', 'Swagger', 'Agile / Scrum']
  };

  education = [
    {
      degree: 'B.E. Computer Science',
      institution: 'Chandigarh University',
      year: '2019 – 2023',
      gpa: '7.85 / 10'
    },
    {
      degree: 'Class 12th',
      institution: 'CBSE',
      year: '2019',
      gpa: '78%'
    },
    {
      degree: 'Class 10th',
      institution: 'CBSE',
      year: '2016',
      gpa: '95%'
    }
  ];

  awards = [
    {
      title: 'Impact Award',
      issuer: 'Carelon Global Solutions',
      description: 'Conferred for engineering high-efficiency software components across the Facility Centre of Excellence (FCOE) system, resulting in verified operational improvements across claims processing and reporting workflows.'
    }
  ];

  activeSection = 'overview';
  isDarkMode = false;

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme !== 'light';
    this.applyTheme();
  }

  // Quick facts for overview
  quickFacts = [
    { label: 'Experience', value: '3+ Years' },
    { label: 'Current Role', value: 'Software Engineer 1' },
    { label: 'Domain', value: 'Healthcare' },
    { label: 'Location', value: 'Gurugram' }
  ];
}