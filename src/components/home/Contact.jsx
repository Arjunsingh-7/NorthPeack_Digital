import React, { useState } from 'react';
import './Contact.css';

const Contact = React.memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Full name is required.';
        else if (value.trim().length < 2) error = 'Name must be at least 2 characters.';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = 'Email is required.';
        else if (!emailRegex.test(value)) error = 'Please enter a valid email address.';
        break;
      case 'service':
        if (!value) error = 'Please select a service.';
        break;
      case 'budget':
        if (!value) error = 'Please select a budget range.';
        break;
      case 'message':
        if (!value.trim()) error = 'A project message is required.';
        else if (value.trim().length < 20) error = 'Message must be at least 20 characters.';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update form data only - don't validate on every keystroke
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    } else {
      // Clear error for this field if it becomes valid
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== 'company') { // Company is optional
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      // Find the first error field and focus it for accessibility
      const firstErrorKey = Object.keys(newErrors)[0];
      const errorElement = document.getElementById(`field-${firstErrorKey}`);
      if (errorElement) {
        errorElement.focus();
      }
    } else {
      // Valid submission
      setIsSubmitted(true);
      setErrors({});
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        
        <div className="contact-grid">
          
          <div className="contact-info">
            <h2 className="contact-headline">Have something ambitious in mind?</h2>
            <p className="contact-support-text">
              Tell us what you're building, where you're stuck, and what success looks like.
            </p>
            
            <div className="agency-details">
              <div className="detail-group">
                <span className="detail-label">Email</span>
                <a href="mailto:hello@northpeak.fictional" className="detail-value link-hover">
                  hello@northpeak.fictional
                </a>
              </div>
              <div className="detail-group">
                <span className="detail-label">Studio</span>
                <span className="detail-value">
                  124 Broad St.<br/>
                  Fictional City, FC 90210
                </span>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {isSubmitted ? (
              <div 
                className="success-message" 
                role="status" 
                aria-live="polite"
              >
                <div className="success-icon">✓</div>
                <h3>Message Received</h3>
                <p>Thank you for reaching out. We will review your project details and get back to you within 24-48 hours.</p>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form 
                className="form-container" 
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="form-group">
                  <label htmlFor="field-name">Full Name <span className="required" aria-hidden="true">*</span></label>
                  <input
                    type="text"
                    id="field-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "error-name" : "hint-name"}
                    required
                  />
                  <span className="sr-only" id="hint-name">Required field. Full name must be at least 2 characters.</span>
                  {errors.name && (
                    <span className="error-message" id="error-name" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="field-email">Email <span className="required" aria-hidden="true">*</span></label>
                    <input
                      type="email"
                      id="field-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "error-email" : "hint-email"}
                      required
                    />
                    <span className="sr-only" id="hint-email">Required field. Please enter a valid email address.</span>
                    {errors.email && (
                      <span className="error-message" id="error-email" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="field-company">Company <span className="optional">(Optional)</span></label>
                    <input
                      type="text"
                      id="field-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="field-service">Service Needed <span className="required" aria-hidden="true">*</span></label>
                    <select
                      id="field-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? "error-service" : "hint-service"}
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Web Design">Web Design</option>
                      <option value="Web Development">Web Development</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Performance">Performance</option>
                      <option value="SEO & Growth">SEO & Growth</option>
                    </select>
                    <span className="sr-only" id="hint-service">Required field. Select one of the available services.</span>
                    {errors.service && (
                      <span className="error-message" id="error-service" role="alert">
                        {errors.service}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="field-budget">Budget Range <span className="required" aria-hidden="true">*</span></label>
                    <select
                      id="field-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.budget}
                      aria-describedby={errors.budget ? "error-budget" : "hint-budget"}
                      required
                    >
                      <option value="" disabled>Select budget</option>
                      <option value="Under $2k">Under $2k</option>
                      <option value="$2k–$5k">$2k–$5k</option>
                      <option value="$5k–$10k">$5k–$10k</option>
                      <option value="$10k+">$10k+</option>
                    </select>
                    <span className="sr-only" id="hint-budget">Required field. Select your estimated project budget.</span>
                    {errors.budget && (
                      <span className="error-message" id="error-budget" role="alert">
                        {errors.budget}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="field-message">Project Message <span className="required" aria-hidden="true">*</span></label>
                  <textarea
                    id="field-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "error-message" : "hint-message"}
                    required
                  ></textarea>
                  <span className="sr-only" id="hint-message">Required field. Message must be at least 20 characters. Describe your project goals, challenges, and desired outcomes.</span>
                  {errors.message && (
                    <span className="error-message" id="error-message" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Submit Project Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
