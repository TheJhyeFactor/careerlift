import { useState } from 'react';
import { MessageCircle, CheckCircle, AlertCircle, Star } from 'lucide-react';
import './InterviewPrep.css';

const InterviewPrep = () => {
  const [selectedCategory, setSelectedCategory] = useState('common');

  const questions = {
    common: {
      title: 'Common Interview Questions',
      items: [
        {
          question: 'Tell me about yourself',
          tips: 'Use the Present-Past-Future formula: Start with what you do now, briefly mention relevant past experience, and end with why you\'re excited about this opportunity.',
          example: 'I\'m currently a software developer at XYZ, where I build web applications. I previously worked at ABC where I gained experience in... I\'m excited about this role because...'
        },
        {
          question: 'What are your strengths?',
          tips: 'Choose 2-3 strengths relevant to the job. Back each with a specific example. Show how these strengths benefit the employer.',
          example: 'One of my key strengths is problem-solving. For example, at my last job, I identified a bottleneck in our workflow and...'
        },
        {
          question: 'What are your weaknesses?',
          tips: 'Choose a real weakness, but show what you\'re doing to improve. Never say "I\'m a perfectionist" - it\'s cliché.',
          example: 'I sometimes focus too much on details, which can slow me down. I\'ve been working on this by setting time limits for tasks and...'
        },
        {
          question: 'Why do you want to work here?',
          tips: 'Research the company beforehand. Mention specific things about their mission, culture, or projects that excite you.',
          example: 'I\'m impressed by your commitment to sustainability and the innovative approach you take to... This aligns with my values and career goals.'
        },
        {
          question: 'Where do you see yourself in 5 years?',
          tips: 'Show ambition but also commitment. Focus on skill development and contribution to the company, not just titles.',
          example: 'In 5 years, I see myself having deepened my expertise in [field] and hopefully taking on more leadership responsibilities where I can mentor others...'
        }
      ]
    },
    behavioral: {
      title: 'Behavioral Questions (STAR Method)',
      description: 'Use the STAR method: Situation, Task, Action, Result',
      items: [
        {
          question: 'Tell me about a time you faced a challenge',
          tips: 'Situation: Set the scene. Task: Explain your responsibility. Action: Describe what you did. Result: Share the outcome with numbers if possible.',
          example: 'S: Our team was behind on a project deadline. T: I needed to get us back on track. A: I organized daily standups and redistributed tasks. R: We delivered on time with 95% quality score.'
        },
        {
          question: 'Describe a time you made a mistake',
          tips: 'Be honest but choose a mistake with a positive resolution. Focus more on what you learned than the mistake itself.',
          example: 'I once missed a critical detail in a client report. I immediately informed my manager, corrected it, and implemented a checklist system to prevent future errors.'
        },
        {
          question: 'Give an example of working with a difficult person',
          tips: 'Never badmouth anyone. Focus on your communication and problem-solving skills. Show emotional intelligence.',
          example: 'A colleague and I had different work styles. I scheduled a one-on-one to understand their perspective and we found common ground by...'
        },
        {
          question: 'Tell me about a time you showed leadership',
          tips: 'Leadership doesn\'t require a title. Show initiative, influence, and positive results.',
          example: 'When our team lacked direction on a project, I proposed a structured approach, got buy-in from others, and coordinated our efforts to...'
        }
      ]
    },
    technical: {
      title: 'Industry-Specific Questions',
      items: [
        {
          question: 'Technical Skills Assessment',
          tips: 'Be honest about your skill level. If you don\'t know something, show eagerness to learn.',
          example: 'I have 3 years of experience with Python and have built several projects including... While I haven\'t used Ruby, I\'m a quick learner and...'
        },
        {
          question: 'Walk me through your process',
          tips: 'Show your thinking process, not just technical knowledge. Explain how you approach problems methodically.',
          example: 'When approaching a new project, I first gather requirements, then research existing solutions, create a plan, implement iteratively, and test thoroughly.'
        },
        {
          question: 'How do you stay current in your field?',
          tips: 'Show genuine interest in continuous learning. Mention specific resources, communities, or projects.',
          example: 'I regularly read industry blogs, participate in online communities, take online courses, and work on personal projects to experiment with new technologies.'
        }
      ]
    }
  };

  return (
    <div className="interview-prep">
      <div className="prep-header">
        <h2>Interview Preparation</h2>
        <p>Master common interview questions with proven strategies</p>
      </div>

      <div className="category-tabs">
        <button
          className={`category-tab ${selectedCategory === 'common' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('common')}
        >
          <MessageCircle size={20} />
          Common Questions
        </button>
        <button
          className={`category-tab ${selectedCategory === 'behavioral' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('behavioral')}
        >
          <Star size={20} />
          Behavioral (STAR)
        </button>
        <button
          className={`category-tab ${selectedCategory === 'technical' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('technical')}
        >
          <CheckCircle size={20} />
          Technical/Industry
        </button>
      </div>

      <div className="questions-container">
        <div className="category-info">
          <h3>{questions[selectedCategory].title}</h3>
          {questions[selectedCategory].description && (
            <p className="category-description">{questions[selectedCategory].description}</p>
          )}
        </div>

        {questions[selectedCategory].items.map((item, index) => (
          <div key={index} className="question-card">
            <h4>{item.question}</h4>
            <div className="answer-section">
              <div className="tips">
                <strong>How to Answer:</strong>
                <p>{item.tips}</p>
              </div>
              <div className="example">
                <strong>Example:</strong>
                <p>{item.example}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="general-tips">
        <h3><AlertCircle size={24} /> General Interview Tips</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>Before the Interview</h4>
            <ul>
              <li>Research the company thoroughly</li>
              <li>Practice answers out loud</li>
              <li>Prepare 3-5 questions to ask them</li>
              <li>Plan your outfit and route</li>
              <li>Bring extra copies of your resume</li>
            </ul>
          </div>
          <div className="tip-card">
            <h4>During the Interview</h4>
            <ul>
              <li>Arrive 10-15 minutes early</li>
              <li>Make eye contact and smile</li>
              <li>Take a moment to think before answering</li>
              <li>Ask clarifying questions if needed</li>
              <li>Show enthusiasm and energy</li>
            </ul>
          </div>
          <div className="tip-card">
            <h4>After the Interview</h4>
            <ul>
              <li>Send a thank you email within 24 hours</li>
              <li>Mention specific topics discussed</li>
              <li>Reiterate your interest</li>
              <li>Follow up if you don't hear back</li>
              <li>Learn from each interview</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
