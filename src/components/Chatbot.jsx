import React, { useState } from 'react';
import axios from 'axios';
import { FaComment, FaTimes } from 'react-icons/fa';

const Chatbot = () => {
  const resumeText = `
Krutay's Resume
- Name: Krutay
- Education: B.Tech in Computer Science, XYZ University, 2020-2024
- Skills: Data Analysis (Python, Pandas, SQL), DevOps (Docker, Kubernetes, CI/CD), Web Development (React, HTML, CSS), Cloud (AWS, Azure)
- Experience: 
  - Intern at ABC Corp, June 2023 - August 2023: Developed a data pipeline using Python and AWS.
  - Freelance Web Developer, January 2023 - May 2023: Built responsive websites using React.
- Projects:
  - Portfolio Webpage: Created a personal portfolio with a chatbot for predusk internship using React and Groq API.
  - Data Analysis Dashboard: Built a dashboard using Python and Pandas to visualize sales data.
- Certifications: AWS Certified Solutions Architect, Google Data Analytics Professional Certificate
- Contact: krutay@example.com, linkedin.com/in/krutay, github.com/krutay
  `;

  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: `You are a chatbot that can answer questions about Krutay's resume. Here is the resume: ${resumeText}`,
    },
    {
      role: 'assistant',
      content: 'Hello! I can answer questions about Krutay’s resume. Try asking something like "What are my skills?" or "What projects have I worked on?"',
    },
  ]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setLoading(true);

    try {
      console.log('Groq API Key:', import.meta.env.VITE_GROQ_API_KEY);
      const response = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          model: 'llama3-8b-8192',
          messages: newMessages,
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const newResponse = response.data.choices[0].message.content;
      setMessages([...newMessages, { role: 'assistant', content: newResponse }]);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'An error occurred while fetching the response.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isChatOpen && (
        <div className="fixed bottom-16 right-4 w-80 max-w-[90%] bg-gray-800 rounded-lg shadow-lg z-50">
          <div className="p-4 h-64 overflow-y-auto">
            {messages
              .filter((msg) => msg.role !== 'system')
              .map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg break-words ${
                      msg.role === 'user' ? 'bg-gray-700 text-white' : 'bg-gray-600 text-white'
                    }`}
                  >
                    <strong className="text-gray-400">
                      {msg.role === 'user' ? 'You' : 'Bot'}:
                    </strong>{' '}
                    {msg.content}
                  </span>
                </div>
              ))}
            {loading && (
              <div className="text-left">
                <span className="inline-block p-2 rounded-lg bg-gray-600 text-white">
                  Typing...
                </span>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="p-2 border-t border-gray-700 flex">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask about my resume..."
              className="flex-1 p-2 bg-gray-700 text-white rounded-l-md focus:outline-none"
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-orange-500 p-2 rounded-r-md text-white hover:bg-orange-600"
              disabled={loading}
            >
              {loading ? '...' : 'Send'}
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-orange-600"
        aria-label={isChatOpen ? 'Close chat' : 'Open chat'}
      >
        {isChatOpen ? <FaTimes className="w-6 h-6" /> : <FaComment className="w-6 h-6" />}
      </button>
    </>
  );
};

export default Chatbot;