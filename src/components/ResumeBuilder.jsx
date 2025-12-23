import { useState, useRef } from 'react';
import { Download, Plus, Trash2, Eye, EyeOff } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ResumePreview from './ResumePreview';
import './ResumeBuilder.css';

const ResumeBuilder = ({ resumeData, setResumeData }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  const [showPreview, setShowPreview] = useState(true);
  const previewRef = useRef(null);

  const updateContact = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      contact: { ...prev.contact, [field]: value }
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        id: Date.now(),
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }]
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, {
        id: Date.now(),
        school: '',
        degree: '',
        field: '',
        location: '',
        graduationDate: '',
        gpa: ''
      }]
    }));
  };

  const updateEducation = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, { id: Date.now(), name: '', level: 'Intermediate' }]
    }));
  };

  const updateSkill = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map(skill =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const removeSkill = (id) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  };

  const exportToPDF = async () => {
    if (!previewRef.current) return;

    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        logging: false
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`${resumeData.contact.fullName || 'resume'}_resume.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  };

  return (
    <div className="resume-builder">
      <div className="builder-header">
        <h2>Build Your Professional Resume</h2>
        <div className="header-actions">
          <button onClick={() => setShowPreview(!showPreview)} className="btn-secondary">
            {showPreview ? <EyeOff size={18} /> : <Eye size={18} />}
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </button>
          <button onClick={exportToPDF} className="btn-primary">
            <Download size={18} />
            Download PDF
          </button>
        </div>
      </div>

      <div className="builder-container">
        <div className="form-section">
          <div className="form-card">
            <h3>Contact Information</h3>
            <div className="form-grid">
              <input
                type="text"
                placeholder="Full Name *"
                value={resumeData.contact.fullName}
                onChange={(e) => updateContact('fullName', e.target.value)}
              />
              <input
                type="email"
                placeholder="Email *"
                value={resumeData.contact.email}
                onChange={(e) => updateContact('email', e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={resumeData.contact.phone}
                onChange={(e) => updateContact('phone', e.target.value)}
              />
              <input
                type="text"
                placeholder="Location (City, State)"
                value={resumeData.contact.location}
                onChange={(e) => updateContact('location', e.target.value)}
              />
              <input
                type="url"
                placeholder="LinkedIn Profile"
                value={resumeData.contact.linkedin}
                onChange={(e) => updateContact('linkedin', e.target.value)}
              />
              <input
                type="url"
                placeholder="Website/Portfolio"
                value={resumeData.contact.website}
                onChange={(e) => updateContact('website', e.target.value)}
              />
            </div>
          </div>

          <div className="form-card">
            <h3>Professional Summary</h3>
            <textarea
              placeholder="Write a brief summary of your professional background, skills, and career goals. Keep it concise (2-3 sentences)."
              value={resumeData.summary}
              onChange={(e) => setResumeData(prev => ({ ...prev, summary: e.target.value }))}
              rows="4"
            />
          </div>

          <div className="form-card">
            <div className="section-header">
              <h3>Work Experience</h3>
              <button onClick={addExperience} className="btn-add">
                <Plus size={18} />
                Add Experience
              </button>
            </div>
            {resumeData.experience.map((exp, index) => (
              <div key={exp.id} className="dynamic-item">
                <div className="item-header">
                  <span>Experience #{index + 1}</span>
                  <button onClick={() => removeExperience(exp.id)} className="btn-remove">
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="form-grid">
                  <input
                    type="text"
                    placeholder="Company Name *"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Job Title *"
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={exp.location}
                    onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                  />
                  <input
                    type="month"
                    placeholder="Start Date"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                  />
                  <input
                    type="month"
                    placeholder="End Date"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    disabled={exp.current}
                  />
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                    />
                    Currently working here
                  </label>
                </div>
                <textarea
                  placeholder="Describe your responsibilities and achievements. Use bullet points starting with action verbs."
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                  rows="4"
                />
              </div>
            ))}
          </div>

          <div className="form-card">
            <div className="section-header">
              <h3>Education</h3>
              <button onClick={addEducation} className="btn-add">
                <Plus size={18} />
                Add Education
              </button>
            </div>
            {resumeData.education.map((edu, index) => (
              <div key={edu.id} className="dynamic-item">
                <div className="item-header">
                  <span>Education #{index + 1}</span>
                  <button onClick={() => removeEducation(edu.id)} className="btn-remove">
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="form-grid">
                  <input
                    type="text"
                    placeholder="School/University *"
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Degree *"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Field of Study"
                    value={edu.field}
                    onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={edu.location}
                    onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                  />
                  <input
                    type="month"
                    placeholder="Graduation Date"
                    value={edu.graduationDate}
                    onChange={(e) => updateEducation(edu.id, 'graduationDate', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="GPA (optional)"
                    value={edu.gpa}
                    onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="form-card">
            <div className="section-header">
              <h3>Skills</h3>
              <button onClick={addSkill} className="btn-add">
                <Plus size={18} />
                Add Skill
              </button>
            </div>
            <div className="skills-grid">
              {resumeData.skills.map((skill) => (
                <div key={skill.id} className="skill-item">
                  <input
                    type="text"
                    placeholder="Skill name"
                    value={skill.name}
                    onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                  />
                  <button onClick={() => removeSkill(skill.id)} className="btn-remove-small">
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showPreview && (
          <div className="preview-section">
            <div className="preview-sticky">
              <div className="template-selector">
                <label>Template:</label>
                <select value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)}>
                  <option value="professional">Professional</option>
                  <option value="modern">Modern</option>
                  <option value="classic">Classic</option>
                </select>
              </div>
              <div ref={previewRef}>
                <ResumePreview
                  resumeData={resumeData}
                  template={selectedTemplate}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
