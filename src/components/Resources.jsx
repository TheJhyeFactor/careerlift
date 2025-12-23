import { Heart, Users, GraduationCap, TrendingUp, Globe, DollarSign } from 'lucide-react';
import './Resources.css';

const Resources = () => {
  const resources = [
    {
      icon: Users,
      title: 'Re-entering the Workforce',
      description: 'Tips for those returning after a career gap, formerly incarcerated, or starting fresh',
      tips: [
        {
          heading: 'Resume Strategies',
          content: 'Use a functional resume format that highlights skills over chronology. Focus on transferable skills and any training, volunteer work, or personal projects completed during your gap.'
        },
        {
          heading: 'Addressing Employment Gaps',
          content: 'Be honest but concise. Focus on what you learned and how you grew. If asked in an interview, acknowledge the gap briefly and quickly pivot to your qualifications and eagerness to contribute.'
        },
        {
          heading: 'Second Chance Employers',
          content: 'Companies like Starbucks, Dave\'s Killer Bread, Johns Hopkins Hospital, and many others actively hire people with criminal records. Research "ban the box" employers in your area.'
        },
        {
          heading: 'Your Rights',
          content: 'Know your rights regarding when employers can ask about criminal history. Many states have "ban the box" laws that delay background checks until after initial screening.'
        }
      ]
    },
    {
      icon: TrendingUp,
      title: 'Career Changers',
      description: 'Making a successful transition to a new field',
      tips: [
        {
          heading: 'Identify Transferable Skills',
          content: 'Leadership, communication, problem-solving, and project management transfer across industries. Reframe your experience to highlight these universal skills.'
        },
        {
          heading: 'Bridge the Gap',
          content: 'Take online courses (Coursera, edX, Khan Academy), volunteer in your target field, or do freelance projects to gain relevant experience.'
        },
        {
          heading: 'Networking is Key',
          content: 'Join professional associations, attend meetups, and connect with people in your target industry on LinkedIn. Informational interviews are incredibly valuable.'
        },
        {
          heading: 'Tell Your Story',
          content: 'Create a compelling narrative about why you\'re changing careers. Show passion and preparation. Your fresh perspective can be an asset.'
        }
      ]
    },
    {
      icon: GraduationCap,
      title: 'First-Time Job Seekers',
      description: 'For recent graduates and those entering the workforce',
      tips: [
        {
          heading: 'Build Your Resume',
          content: 'Include internships, volunteer work, school projects, and leadership roles in clubs or organizations. Highlight relevant coursework and skills.'
        },
        {
          heading: 'Leverage Your Network',
          content: 'Connect with professors, classmates, family friends, and alumni. Many jobs are filled through referrals before they\'re posted publicly.'
        },
        {
          heading: 'Entry-Level Strategies',
          content: 'Apply to entry-level positions and internships. Consider contract or temporary work to get your foot in the door. Every job is an opportunity to learn and build your network.'
        },
        {
          heading: 'Professional Online Presence',
          content: 'Create a LinkedIn profile, clean up your social media, and consider building a simple portfolio website to showcase your work.'
        }
      ]
    },
    {
      icon: Globe,
      title: 'International Job Seekers',
      description: 'For immigrants and those seeking work in a new country',
      tips: [
        {
          heading: 'Credential Recognition',
          content: 'Get your foreign credentials evaluated by organizations like WES or ECE. This helps employers understand your qualifications.'
        },
        {
          heading: 'Address Language Skills',
          content: 'If English is your second language, highlight it as a strength! Bilingual candidates are valuable. Take ESL classes if needed to build confidence.'
        },
        {
          heading: 'Cultural Navigation',
          content: 'Learn local workplace norms and interview customs. Practice common interview questions in English. Join immigrant support organizations for guidance.'
        },
        {
          heading: 'Networking in a New Country',
          content: 'Join professional associations, attend community events, and connect with diaspora groups in your industry.'
        }
      ]
    },
    {
      icon: Heart,
      title: 'People with Disabilities',
      description: 'Resources and strategies for job seekers with disabilities',
      tips: [
        {
          heading: 'Disclosure Decision',
          content: 'You\'re not required to disclose a disability unless you need accommodations. If you choose to disclose, focus on what you can do and what accommodations would help you excel.'
        },
        {
          heading: 'ADA Rights',
          content: 'The Americans with Disabilities Act (ADA) requires employers to provide reasonable accommodations. Know your rights and don\'t hesitate to request what you need.'
        },
        {
          heading: 'Resources',
          content: 'Job Accommodation Network (JAN), Vocational Rehabilitation services, and organizations like Disability:IN can provide support and job leads.'
        },
        {
          heading: 'Highlight Your Strengths',
          content: 'Focus on your skills, accomplishments, and ability to do the job. Your disability doesn\'t define your professional capabilities.'
        }
      ]
    },
    {
      icon: DollarSign,
      title: 'Free Resources & Training',
      description: 'No-cost resources to boost your employability',
      tips: [
        {
          heading: 'Free Online Learning',
          content: 'Coursera, edX, Khan Academy, freeCodeCamp, YouTube tutorials, LinkedIn Learning (via library card), and Google Digital Garage offer free courses and certifications.'
        },
        {
          heading: 'Career Services',
          content: 'American Job Centers (CareerOneStop), local library career services, community college career centers, and non-profit organizations offer free resume help and job search assistance.'
        },
        {
          heading: 'Professional Clothing',
          content: 'Dress for Success, Career Gear, and local churches/non-profits often provide free professional clothing for interviews.'
        },
        {
          heading: 'Job Search Sites',
          content: 'Indeed, LinkedIn Jobs, Glassdoor, and company career pages are free to use. Set up job alerts to get notified of new opportunities.'
        }
      ]
    }
  ];

  return (
    <div className="resources">
      <div className="resources-header">
        <h2>Career Resources & Guidance</h2>
        <p>Specialized tips and resources for diverse career journeys</p>
      </div>

      <div className="resources-intro">
        <div className="intro-card">
          <Heart size={32} color="#ef4444" />
          <div>
            <h3>You Belong Here</h3>
            <p>
              Everyone deserves a fair chance at employment. No matter your background, circumstances, or past challenges,
              you have valuable skills and perspectives to offer. This section provides targeted guidance for people who
              may face additional barriers in their job search. Remember: your journey is unique, and your resilience
              is a strength.
            </p>
          </div>
        </div>
      </div>

      <div className="resources-grid">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <div key={index} className="resource-card">
              <div className="resource-header">
                <Icon size={28} />
                <h3>{resource.title}</h3>
              </div>
              <p className="resource-description">{resource.description}</p>
              <div className="resource-tips">
                {resource.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="tip-item">
                    <h4>{tip.heading}</h4>
                    <p>{tip.content}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="encouragement-section">
        <h3>Remember</h3>
        <div className="encouragement-grid">
          <div className="encouragement-card">
            <h4>Take It Step by Step</h4>
            <p>Job searching is a marathon, not a sprint. Set small daily goals and celebrate each accomplishment.</p>
          </div>
          <div className="encouragement-card">
            <h4>You Are More Than Your Resume</h4>
            <p>Your worth isn't defined by your work history. Every person has inherent value and unique gifts to share.</p>
          </div>
          <div className="encouragement-card">
            <h4>Community Support</h4>
            <p>Don't go it alone. Reach out to career counselors, support groups, mentors, and friends. Asking for help is a sign of strength.</p>
          </div>
          <div className="encouragement-card">
            <h4>Your Story Matters</h4>
            <p>Everyone has a story. How you've overcome challenges can be your greatest asset. Own your journey with confidence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
