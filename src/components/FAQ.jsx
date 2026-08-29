import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import faqs from '../data/faqs.js';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="content-section faq-section">
      <div className="container faq-shell">
        <div className="section-heading left-align">
          <span className="eyebrow accent">FAQ</span>
          <h2>Everything you need to know</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button type="button" className="faq-question" onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span>{item.question}</span>
                  <FaChevronDown className="faq-icon" />
                </button>
                {isOpen && <p className="faq-answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
