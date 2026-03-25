import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ChevronDown, Check, Copy, Send } from 'lucide-react';
import { contactInfo, socialLinks, faqs } from '../data/contactData';

const Contact = () => {
    // Typing Effect State
    const [typedText, setTypedText] = useState('');
    const fullText = "Let's work together!";
    const typingSpeed = 100;

    useEffect(() => {
        let currentText = '';
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                currentText += fullText[currentIndex];
                setTypedText(currentText);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, []);

    // Copy to Clipboard State
    const [copiedItem, setCopiedItem] = useState(null);

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(type);
        setTimeout(() => setCopiedItem(null), 2000);
    };

    // FAQ Accordion State
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // Form State & Validation
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.subject.trim()) errors.subject = 'Subject is required';
        if (!formData.message.trim()) errors.message = 'Message is required';
        
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        
        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <section id="contact" className="relative w-full py-24 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 mb-6 border border-gray-200 rounded-full text-sm font-medium bg-white/50 backdrop-blur-sm">
                        Contact Me <span role="img" aria-label="wave">🚀</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Get in touch<span className="text-primary">.</span>
                    </h2>
                    <div className="h-8">
                        <p className="text-xl text-text-medium font-medium">
                            {typedText}
                            <span className="inline-block w-[2px] h-5 bg-primary ml-1 animate-ping"></span>
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Left Column: Info & FAQ */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Info Cards */}
                        <div className="space-y-4">
                            {/* Email Card */}
                            <div className="group relative bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium text-text-medium mb-1">Email</h3>
                                        <p className="font-semibold text-lg">{contactInfo.email}</p>
                                    </div>
                                    <button 
                                        onClick={() => handleCopy(contactInfo.email, 'email')}
                                        className="text-gray-400 hover:text-primary transition-colors p-2"
                                        aria-label="Copy email"
                                    >
                                        {copiedItem === 'email' ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="group relative bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium text-text-medium mb-1">Phone</h3>
                                        <p className="font-semibold text-lg">{contactInfo.phone}</p>
                                    </div>
                                    <button 
                                        onClick={() => handleCopy(contactInfo.phone, 'phone')}
                                        className="text-gray-400 hover:text-primary transition-colors p-2"
                                    >
                                        {copiedItem === 'phone' ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Address Card */}
                            <div className="group relative bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-text-medium mb-1">Location</h3>
                                        <p className="font-semibold text-base">{contactInfo.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Availability & Socials */}
                        <div className="bg-dark text-white p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
                            
                            <div className="flex items-center gap-3 mb-8">
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="font-medium">{contactInfo.availability.status}</span>
                            </div>

                            <p className="text-gray-400 mb-6 text-sm">{contactInfo.availability.message}</p>

                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <div key={social.id} className="relative group/social">
                                        <a 
                                            href={social.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                            aria-label={social.name}
                                        >
                                            {/* Using simple text mapped to icons since we only have lucide icons which might not have all brand icons, a robust solution would use react-icons. We will use a generic icon approach or first letter */}
                                            <span className="font-bold text-sm">{social.name.charAt(0)}</span>
                                        </a>
                                        {/* Hover Tooltip */}
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-dark text-xs py-1 px-2 rounded opacity-0 group-hover/social:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg font-medium">
                                            {social.username}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Accordion */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-6">FAQ</h3>
                            <div className="space-y-3">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                                        <button 
                                            className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-gray-50 transition-colors"
                                            onClick={() => toggleFaq(index)}
                                        >
                                            <span>{faq.question}</span>
                                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                                        </button>
                                        <div 
                                            className={`transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className="p-4 pt-0 text-text-medium text-sm">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 relative overflow-hidden h-full">
                            
                            {/* Decorative top border */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-primary to-orange-300"></div>

                            {submitSuccess ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-20 px-6 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                                    <p className="text-text-medium mb-8 max-w-sm">
                                        Thanks for reaching out. I've received your message and will get back to you shortly.
                                    </p>
                                    <button 
                                        onClick={() => setSubmitSuccess(false)}
                                        className="text-primary font-medium hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold mb-2">Send me a message</h3>
                                        <p className="text-text-medium">Fill out the form below and I'll reply as soon as possible.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Name Field */}
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                                <input 
                                                    type="text" 
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className={`w-full px-4 py-3 rounded-xl border ${formErrors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary focus:ring-primary/20'} bg-gray-50 focus:bg-white transition-all duration-300 outline-none focus:ring-4`}
                                                />
                                                {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                                            </div>

                                            {/* Email Field */}
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                                <input 
                                                    type="email" 
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    className={`w-full px-4 py-3 rounded-xl border ${formErrors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary focus:ring-primary/20'} bg-gray-50 focus:bg-white transition-all duration-300 outline-none focus:ring-4`}
                                                />
                                                {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                                            </div>
                                        </div>

                                        {/* Subject Field */}
                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                                            <input 
                                                type="text" 
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Project Inquiry"
                                                className={`w-full px-4 py-3 rounded-xl border ${formErrors.subject ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary focus:ring-primary/20'} bg-gray-50 focus:bg-white transition-all duration-300 outline-none focus:ring-4`}
                                            />
                                            {formErrors.subject && <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>}
                                        </div>

                                        {/* Message Field */}
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                            <textarea 
                                                id="message"
                                                name="message"
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell me about your project..."
                                                className={`w-full px-4 py-3 rounded-xl border ${formErrors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary focus:ring-primary/20'} bg-gray-50 focus:bg-white transition-all duration-300 outline-none focus:ring-4 resize-none`}
                                            ></textarea>
                                            {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
                                        </div>

                                        {/* Submit Button */}
                                        <button 
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-primary hover:bg-[#e44a1e] text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/30"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Snackbar for Copy */}
            <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-2 z-50 ${copiedItem ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-medium text-sm">Copied to clipboard!</span>
            </div>
        </section>
    );
};

export default Contact;
