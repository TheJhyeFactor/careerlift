import './ResumePreview.css';

const ResumePreview = ({ resumeData, template }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString + '-01');
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const renderProfessionalTemplate = () => (
    <div className="resume-preview professional-template">
      <div className="resume-header">
        <h1>{resumeData.contact.fullName || 'Your Name'}</h1>
        <div className="contact-info">
          {resumeData.contact.email && <span>{resumeData.contact.email}</span>}
          {resumeData.contact.phone && <span>{resumeData.contact.phone}</span>}
          {resumeData.contact.location && <span>{resumeData.contact.location}</span>}
          {resumeData.contact.linkedin && <span>{resumeData.contact.linkedin}</span>}
        </div>
      </div>

      {resumeData.summary && (
        <div className="resume-section">
          <h2>Professional Summary</h2>
          <p>{resumeData.summary}</p>
        </div>
      )}

      {resumeData.experience.length > 0 && (
        <div className="resume-section">
          <h2>Work Experience</h2>
          {resumeData.experience.map(exp => (
            <div key={exp.id} className="experience-item">
              <div className="exp-header">
                <div>
                  <h3>{exp.position}</h3>
                  <p className="company">{exp.company}{exp.location && ` - ${exp.location}`}</p>
                </div>
                <div className="dates">
                  {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                </div>
              </div>
              {exp.description && (
                <div className="description">
                  {exp.description.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {resumeData.education.length > 0 && (
        <div className="resume-section">
          <h2>Education</h2>
          {resumeData.education.map(edu => (
            <div key={edu.id} className="education-item">
              <div className="edu-header">
                <div>
                  <h3>{edu.degree}{edu.field && ` in ${edu.field}`}</h3>
                  <p className="school">{edu.school}{edu.location && ` - ${edu.location}`}</p>
                </div>
                <div className="dates">
                  {formatDate(edu.graduationDate)}
                </div>
              </div>
              {edu.gpa && <p className="gpa">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      )}

      {resumeData.skills.length > 0 && (
        <div className="resume-section">
          <h2>Skills</h2>
          <div className="skills-list">
            {resumeData.skills.map(skill => (
              <span key={skill.id} className="skill-tag">{skill.name}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderModernTemplate = () => (
    <div className="resume-preview modern-template">
      <div className="resume-header modern-header">
        <div className="name-section">
          <h1>{resumeData.contact.fullName || 'Your Name'}</h1>
          {resumeData.summary && <p className="summary">{resumeData.summary}</p>}
        </div>
        <div className="contact-info-modern">
          {resumeData.contact.email && <div>{resumeData.contact.email}</div>}
          {resumeData.contact.phone && <div>{resumeData.contact.phone}</div>}
          {resumeData.contact.location && <div>{resumeData.contact.location}</div>}
          {resumeData.contact.linkedin && <div>{resumeData.contact.linkedin}</div>}
        </div>
      </div>

      <div className="modern-content">
        {resumeData.experience.length > 0 && (
          <div className="resume-section">
            <h2>Experience</h2>
            {resumeData.experience.map(exp => (
              <div key={exp.id} className="experience-item">
                <div className="exp-title">
                  <h3>{exp.position}</h3>
                  <span className="date-badge">
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </span>
                </div>
                <p className="company-modern">{exp.company}{exp.location && ` • ${exp.location}`}</p>
                {exp.description && (
                  <div className="description">
                    {exp.description.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {resumeData.education.length > 0 && (
          <div className="resume-section">
            <h2>Education</h2>
            {resumeData.education.map(edu => (
              <div key={edu.id} className="education-item">
                <h3>{edu.degree}{edu.field && ` in ${edu.field}`}</h3>
                <p className="school-modern">{edu.school} • {formatDate(edu.graduationDate)}</p>
                {edu.gpa && <p className="gpa">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        )}

        {resumeData.skills.length > 0 && (
          <div className="resume-section">
            <h2>Skills</h2>
            <div className="skills-modern">
              {resumeData.skills.map(skill => (
                <span key={skill.id} className="skill-modern">{skill.name}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderClassicTemplate = () => (
    <div className="resume-preview classic-template">
      <div className="resume-header classic-header">
        <h1>{resumeData.contact.fullName || 'Your Name'}</h1>
        <div className="contact-classic">
          {resumeData.contact.location && <span>{resumeData.contact.location}</span>}
          {resumeData.contact.phone && <span>{resumeData.contact.phone}</span>}
          {resumeData.contact.email && <span>{resumeData.contact.email}</span>}
          {resumeData.contact.linkedin && <span>{resumeData.contact.linkedin}</span>}
        </div>
      </div>

      {resumeData.summary && (
        <div className="resume-section">
          <h2 className="classic-heading">PROFESSIONAL SUMMARY</h2>
          <p>{resumeData.summary}</p>
        </div>
      )}

      {resumeData.experience.length > 0 && (
        <div className="resume-section">
          <h2 className="classic-heading">PROFESSIONAL EXPERIENCE</h2>
          {resumeData.experience.map(exp => (
            <div key={exp.id} className="experience-item classic-exp">
              <div className="exp-classic-header">
                <strong>{exp.position}</strong>
                <span>{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}</span>
              </div>
              <div className="company-classic">{exp.company}{exp.location && `, ${exp.location}`}</div>
              {exp.description && (
                <div className="description">
                  {exp.description.split('\n').map((line, i) => (
                    <p key={i}>• {line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {resumeData.education.length > 0 && (
        <div className="resume-section">
          <h2 className="classic-heading">EDUCATION</h2>
          {resumeData.education.map(edu => (
            <div key={edu.id} className="education-item classic-edu">
              <div className="edu-classic-header">
                <strong>{edu.degree}{edu.field && ` in ${edu.field}`}</strong>
                <span>{formatDate(edu.graduationDate)}</span>
              </div>
              <div>{edu.school}{edu.location && `, ${edu.location}`}</div>
              {edu.gpa && <div>GPA: {edu.gpa}</div>}
            </div>
          ))}
        </div>
      )}

      {resumeData.skills.length > 0 && (
        <div className="resume-section">
          <h2 className="classic-heading">SKILLS</h2>
          <div className="skills-classic">
            {resumeData.skills.map((skill, index) => (
              <span key={skill.id}>
                {skill.name}{index < resumeData.skills.length - 1 ? ' • ' : ''}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  switch (template) {
    case 'modern':
      return renderModernTemplate();
    case 'classic':
      return renderClassicTemplate();
    default:
      return renderProfessionalTemplate();
  }
};

export default ResumePreview;
