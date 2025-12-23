import { useState } from 'react';
import { Copy, Download, Sparkles } from 'lucide-react';
import './CoverLetterGenerator.css';

const CoverLetterGenerator = ({ resumeData }) => {
  const [letterData, setLetterData] = useState({
    companyName: '',
    position: '',
    hiringManager: '',
    customContent: ''
  });
  const [selectedTemplate, setSelectedTemplate] = useState('professional');

  const templates = {
    professional: {
      name: 'Professional',
      content: `Dear ${letterData.hiringManager || 'Hiring Manager'},

I am writing to express my strong interest in the ${letterData.position || '[Position]'} position at ${letterData.companyName || '[Company Name]'}. With my background and experience, I am confident I would be a valuable addition to your team.

${letterData.customContent || 'Throughout my career, I have developed strong skills in [mention relevant skills from your resume]. I am particularly drawn to this opportunity because [explain why you\'re interested in this role/company].'}

${resumeData.experience.length > 0 ? `In my most recent role at ${resumeData.experience[0]?.company || '[Previous Company]'}, I successfully ${resumeData.experience[0]?.description?.split('.')[0] || 'delivered results'}.` : 'My experience has prepared me to contribute immediately to your team.'}

I am excited about the opportunity to bring my skills and enthusiasm to ${letterData.companyName || '[Company Name]'}. Thank you for considering my application. I look forward to discussing how I can contribute to your team's success.

Sincerely,
${resumeData.contact.fullName || 'Your Name'}
${resumeData.contact.email || 'your.email@example.com'}
${resumeData.contact.phone || '(123) 456-7890'}`
    },
    enthusiastic: {
      name: 'Enthusiastic',
      content: `Dear ${letterData.hiringManager || 'Hiring Manager'},

I am thrilled to apply for the ${letterData.position || '[Position]'} position at ${letterData.companyName || '[Company Name]'}! Your company's mission resonates deeply with my professional values and career aspirations.

${letterData.customContent || 'What excites me most about this opportunity is [specific aspect of the role or company]. I am passionate about [relevant field/industry] and have dedicated my career to [your professional focus].'}

My enthusiasm is matched by my experience. ${resumeData.experience.length > 0 ? `At ${resumeData.experience[0]?.company || '[Previous Company]'}, I ${resumeData.experience[0]?.description?.split('.')[0] || 'achieved significant results'}` : 'Throughout my career, I have consistently delivered results'} while maintaining a collaborative and positive team environment.

I would love the opportunity to discuss how my energy, skills, and dedication can contribute to ${letterData.companyName || '[Company Name]'}'s continued success.

Warmest regards,
${resumeData.contact.fullName || 'Your Name'}
${resumeData.contact.email || 'your.email@example.com'}
${resumeData.contact.phone || '(123) 456-7890'}`
    },
    career_change: {
      name: 'Career Change',
      content: `Dear ${letterData.hiringManager || 'Hiring Manager'},

I am writing to apply for the ${letterData.position || '[Position]'} position at ${letterData.companyName || '[Company Name]'}. While my background may be in a different field, I am confident that my transferable skills and genuine passion for this industry make me an excellent candidate.

${letterData.customContent || 'My decision to transition into this field comes from [explain your motivation]. I have actively prepared for this change by [mention relevant courses, projects, or self-study].'}

${resumeData.experience.length > 0 ? `In my previous career, I developed strong skills in ${resumeData.skills.slice(0, 3).map(s => s.name).join(', ') || 'problem-solving, communication, and project management'}. These abilities are directly applicable to ${letterData.position || 'this role'}.` : 'I bring a fresh perspective and a strong commitment to excellence.'}

I am eager to bring my unique perspective and dedication to ${letterData.companyName || '[Company Name]'}. Thank you for considering candidates with non-traditional backgrounds.

Best regards,
${resumeData.contact.fullName || 'Your Name'}
${resumeData.contact.email || 'your.email@example.com'}
${resumeData.contact.phone || '(123) 456-7890'}`
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(templates[selectedTemplate].content);
    alert('Cover letter copied to clipboard!');
  };

  const downloadAsText = () => {
    const element = document.createElement('a');
    const file = new Blob([templates[selectedTemplate].content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${letterData.companyName || 'cover-letter'}_${letterData.position || 'application'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="cover-letter-generator">
      <div className="generator-header">
        <div>
          <h2>Cover Letter Generator</h2>
          <p>Create a professional cover letter tailored to your application</p>
        </div>
      </div>

      <div className="generator-content">
        <div className="input-section">
          <div className="form-card">
            <h3>Job Details</h3>
            <div className="form-grid">
              <input
                type="text"
                placeholder="Company Name *"
                value={letterData.companyName}
                onChange={(e) => setLetterData({ ...letterData, companyName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Position *"
                value={letterData.position}
                onChange={(e) => setLetterData({ ...letterData, position: e.target.value })}
              />
              <input
                type="text"
                placeholder="Hiring Manager (optional)"
                value={letterData.hiringManager}
                onChange={(e) => setLetterData({ ...letterData, hiringManager: e.target.value })}
              />
            </div>
          </div>

          <div className="form-card">
            <h3>Personalization (Optional)</h3>
            <textarea
              placeholder="Add specific details about why you're interested in this role or company. This will be included in the middle paragraph."
              value={letterData.customContent}
              onChange={(e) => setLetterData({ ...letterData, customContent: e.target.value })}
              rows="4"
            />
          </div>

          <div className="form-card">
            <h3>Template Style</h3>
            <div className="template-buttons">
              {Object.entries(templates).map(([key, template]) => (
                <button
                  key={key}
                  className={`template-btn ${selectedTemplate === key ? 'active' : ''}`}
                  onClick={() => setSelectedTemplate(key)}
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>

          <div className="tips-card">
            <h3><Sparkles size={20} /> Cover Letter Tips</h3>
            <ul>
              <li>Keep it to one page (3-4 paragraphs)</li>
              <li>Address the hiring manager by name when possible</li>
              <li>Show enthusiasm and explain why you want THIS job</li>
              <li>Highlight 2-3 key accomplishments from your resume</li>
              <li>Explain how you can solve their problems</li>
              <li>Proofread carefully - no typos!</li>
            </ul>
          </div>
        </div>

        <div className="preview-section">
          <div className="preview-header">
            <h3>Preview</h3>
            <div className="preview-actions">
              <button onClick={copyToClipboard} className="btn-secondary">
                <Copy size={18} />
                Copy
              </button>
              <button onClick={downloadAsText} className="btn-primary">
                <Download size={18} />
                Download
              </button>
            </div>
          </div>
          <div className="letter-preview">
            <pre>{templates[selectedTemplate].content}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterGenerator;
