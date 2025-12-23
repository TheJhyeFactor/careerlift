import { useState, useEffect } from 'react';
import { FileText, FileEdit, Briefcase, BookOpen, X, Sparkles } from 'lucide-react';
import ResumeBuilder from './components/ResumeBuilder';
import CoverLetterGenerator from './components/CoverLetterGenerator';
import InterviewPrep from './components/InterviewPrep';
import Resources from './components/Resources';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('resume');
  const [showWelcome, setShowWelcome] = useState(() => {
    return !localStorage.getItem('careerlift-visited');
  });

  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem('careerlift-resume');
    return saved ? JSON.parse(saved) : {
      contact: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        website: ''
      },
      summary: '',
      experience: [],
      education: [],
      skills: [],
      certifications: [],
      languages: []
    };
  });

  useEffect(() => {
    localStorage.setItem('careerlift-resume', JSON.stringify(resumeData));
  }, [resumeData]);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem('careerlift-visited', 'true');
  };

  const loadSampleData = () => {
    setResumeData({
      contact: {
        fullName: 'Jordan Smith',
        email: 'jordan.smith@email.com',
        phone: '(555) 123-4567',
        location: 'San Francisco, CA',
        linkedin: 'linkedin.com/in/jordansmith',
        website: ''
      },
      summary: 'Results-driven professional with 5+ years of experience in project management and team leadership. Proven track record of delivering projects on time and exceeding stakeholder expectations.',
      experience: [
        {
          id: Date.now(),
          company: 'Tech Solutions Inc.',
          position: 'Senior Project Manager',
          location: 'San Francisco, CA',
          startDate: '2021-03',
          endDate: '',
          current: true,
          description: 'Lead cross-functional teams of 10+ members to deliver software projects\nManaged $2M+ annual budget and improved project delivery by 30%\nImplemented agile methodologies resulting in 40% faster sprint cycles'
        },
        {
          id: Date.now() + 1,
          company: 'Digital Innovations Co.',
          position: 'Project Coordinator',
          location: 'San Francisco, CA',
          startDate: '2019-01',
          endDate: '2021-02',
          current: false,
          description: 'Coordinated 15+ concurrent projects across multiple departments\nStreamlined communication processes saving 20 hours per week\nMentored 3 junior coordinators in project management best practices'
        }
      ],
      education: [
        {
          id: Date.now(),
          school: 'University of California',
          degree: 'Bachelor of Science',
          field: 'Business Administration',
          location: 'Berkeley, CA',
          graduationDate: '2018-05',
          gpa: '3.7'
        }
      ],
      skills: [
        { id: Date.now(), name: 'Project Management' },
        { id: Date.now() + 1, name: 'Agile/Scrum' },
        { id: Date.now() + 2, name: 'Team Leadership' },
        { id: Date.now() + 3, name: 'Budget Management' },
        { id: Date.now() + 4, name: 'Stakeholder Communication' },
        { id: Date.now() + 5, name: 'Risk Management' }
      ],
      certifications: [],
      languages: []
    });
    handleCloseWelcome();
  };

  const tabs = [
    { id: 'resume', name: 'Resume Builder', icon: FileText },
    { id: 'cover-letter', name: 'Cover Letter', icon: FileEdit },
    { id: 'interview', name: 'Interview Prep', icon: Briefcase },
    { id: 'resources', name: 'Resources', icon: BookOpen }
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Briefcase size={32} />
            <h1>CareerLift</h1>
          </div>
          <p className="tagline">Free Professional Resume Builder - Empowering Your Career Journey</p>
        </div>
      </header>

      {showWelcome && (
        <div className="welcome-banner">
          <div className="welcome-content">
            <div className="welcome-icon">
              <Sparkles size={32} />
            </div>
            <div className="welcome-text">
              <h2>Welcome to CareerLift!</h2>
              <p>Create professional resumes, cover letters, and prepare for interviews - completely free. Your data stays private in your browser.</p>
              <div className="welcome-actions">
                <button onClick={handleCloseWelcome} className="btn-primary">
                  Get Started
                </button>
                <button onClick={loadSampleData} className="btn-secondary">
                  Load Sample Resume
                </button>
              </div>
            </div>
            <button onClick={handleCloseWelcome} className="welcome-close">
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      <nav className="tabs">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={20} />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </nav>

      <main className="main-content">
        {activeTab === 'resume' && (
          <ResumeBuilder
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
        )}
        {activeTab === 'cover-letter' && (
          <CoverLetterGenerator resumeData={resumeData} />
        )}
        {activeTab === 'interview' && <InterviewPrep />}
        {activeTab === 'resources' && <Resources />}
      </main>

      <footer className="footer">
        <p>CareerLift © 2024 - Free career tools for everyone</p>
        <p>Your data is stored locally in your browser. We never see or store your information.</p>
      </footer>
    </div>
  );
}

export default App;
