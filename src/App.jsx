import { useState, useEffect } from 'react';
import { FileText, FileEdit, Briefcase, BookOpen, Download, Save } from 'lucide-react';
import ResumeBuilder from './components/ResumeBuilder';
import CoverLetterGenerator from './components/CoverLetterGenerator';
import InterviewPrep from './components/InterviewPrep';
import Resources from './components/Resources';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('resume');
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
