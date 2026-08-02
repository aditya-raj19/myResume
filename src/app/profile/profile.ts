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
    title: 'Software Engineer',
    email: 'aadiraj1228@gmail.com',
    phone: '+91 8651255090',
    location: 'Gurugram, Haryana',
    linkedin: 'https://linkedin.com/in/aditya-raj-b20326192',
    github: 'https://github.com/aditya-raj19',
    summary: 'Software Engineer with 3+ years of experience developing enterprise web applications using Java 17, Spring Boot, and Microservices, shipping RESTful APIs and Spring Batch data pipelines on AWS. Reduced API latency 73% and deployment time 60% through Spring Security-based OAuth2/JWT services, a MongoDB/PostgreSQL data layer, and Docker/CI-CD automation. Experienced in leveraging AI-assisted developer tools to streamline workflows and accelerate delivery.'
  };

  // GitHub contribution chart settings
  githubUsername = 'aditya-raj19';
  githubChartUrl = `https://ghchart.rshah.org/${this.githubUsername}`;

  experience = [
    {
      company: 'Carelon Global Solutions',
      position: 'Software Engineer',
      location: 'Gurugram',
      startDate: 'Aug 2023',
      endDate: 'Present',
      duration: '3+ years',
      responsibilities: [
        'Developed enterprise provider management platform using Spring Boot and Angular 16, enabling automated rate sheet processing for 500+ healthcare providers with role-based access control.',
        'Optimized performance through asynchronous processing, caching, and indexing, reducing API response time from 3s to 800ms (73% improvement).',
        'Designed RESTful microservices with 8+ controllers handling CRUD operations, search, and Excel/PDF report generation using Apache POI and OpenPDF.',
        'Built AWS Textract OCR integration for automated medical document processing with scheduled polling and structured data extraction.',
        'Engineered Spring Batch framework for healthcare data integration across multiple state Medicaid programs with AWS S3 file handling and automated reporting.',
        'Implemented OAuth2 OIDC authentication using Spring Security with session management and domain-based access control for secure multi-tenant operations.',
        'Engineered MongoDB data layer with Spring Data, implementing complex queries, aggregations, and distributed locking using ShedLock.',
        'Implemented Apache Kafka consumer service to ingest real-time facility and provider data events from upstream topics, enabling event-driven data synchronisation across downstream healthcare systems.',
        'Automated CI/CD pipeline using Maven, Docker containerization, and Quay registry deployment, reducing deployment time by 60%.'
      ]
    },
    {
      company: 'KPIT Technologies',
      position: 'Intern',
      location: 'Pune',
      startDate: 'Jan 2023',
      endDate: 'Aug 2023',
      duration: '8 months',
      responsibilities: [
        'Debugged and tested embedded automotive software modules in C++ on Linux-based targets, collaborating within an Agile team throughout the 8-month engagement.',
        'Supported embedded systems development for automotive applications, applying Java and Agile practices across sprint planning, code review, and issue triage.'
      ]
    }
  ];

  projects = [
    {
      title: 'EsportsBuzz',
      description: 'Developed full-stack esports platform aggregating real-time match data for 5+ competitive games (Valorant, CS2, LoL, Dota2, PUBG).',
      highlights: [
        'Developed full-stack esports platform using Java 17, Spring Boot, and Angular 21 aggregating real-time match data for 5+ competitive games.',
        'Integrated PandaScore external API using RestTemplate and Jackson, building a service layer to transform esports data into optimized DTOs persisted in MongoDB.',
        'Engineered JWT-based authentication with Spring Security, implementing access/refresh token mechanism using HTTP-only cookies and BCrypt encryption.',
        'Optimized API performance by 90% through Redis-based caching with scheduled refresh tasks, reducing external API calls significantly and improving response times under concurrent load.'
      ],
      techStack: ['Java 17', 'Spring Boot', 'Angular 21', 'MongoDB', 'Redis', 'JWT', 'REST API'],
      liveUrl: 'https://esportsbuzz.in/'
    }
  ];

  skills = {
    languages: ['Java 17', 'C++', 'TypeScript', 'JavaScript', 'SQL'],
    backend: ['Spring Boot', 'Spring Security', 'Spring Batch', 'MongoDB', 'PostgreSQL', 'JPA', 'REST APIs', 'Microservices', 'Apache Kafka'],
    frontend: ['Angular', 'RxJS', 'Bootstrap', 'HTML5', 'CSS3'],
    apis: ['REST APIs', 'OAuth2/JWT'],
    databases: ['MongoDB', 'PostgreSQL', 'Redis'],
    cloud: ['AWS (S3, Textract, Lambda)', 'Docker', 'Kubernetes', 'Maven', 'CI/CD', 'Jenkins', 'Linux'],
    testing: ['JUnit', 'Mockito', 'Postman'],
    tools: ['Swagger', 'Apache POI', 'JIRA', 'SLF4J / Logback', 'GitHub Copilot', 'Git']
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
      description: 'Conferred for engineering high-efficiency software components across the Facility Centre of Excellence (FCOE) system.'
    },
    {
      title: 'Container and Container Orchestration Fundamentals',
      issuer: 'LearnKartS (Docker)',
      description: 'Certification completed in July 2026.'
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
    { label: 'Current Role', value: 'Software Engineer' },
    { label: 'Domain', value: 'Healthcare & Esports' },
    { label: 'Location', value: 'Gurugram' }
  ];
}