
import { useState, useEffect } from 'react';
import { Brain, Cpu, Network, Code, Lock, Zap, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import FeatureCard from '@/components/FeatureCard';
import ScrollReveal from '@/components/ScrollReveal';
import WaveAnimation from '@/components/WaveAnimation';
import CubeAnimation from '@/components/CubeAnimation';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a short delay for animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neuro-darker text-white">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-glow opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-neuro-blue rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white/80">Redefining AI Technology</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Powering</span>{' '}
                <span className="text-gradient">Tomorrow's</span>{' '}
                <span className="text-white">Intelligence</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                NeuroFlux combines cutting-edge neural networks with quantum computing to push the boundaries of what AI can achieve in our rapidly evolving world.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#demo" className="btn-neuro w-full sm:w-auto flex items-center justify-center gap-2">
                  Get Started <ChevronRight size={16} />
                </a>
                <a href="#about" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 md:mt-24 text-center">
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-white/50 text-sm mb-4">Trusted by innovative companies worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <div className="text-white/30 text-lg font-bold">ACME Corp</div>
                <div className="text-white/30 text-lg font-bold">TechVision</div>
                <div className="text-white/30 text-lg font-bold">FutureCode</div>
                <div className="text-white/30 text-lg font-bold">NexGen</div>
                <div className="text-white/30 text-lg font-bold">DataGlobe</div>
              </div>
            </div>
          </div>
        </div>
        
        <WaveAnimation />
      </section>
      
      {/* Features Section */}
      <section id="features" className="section bg-neuro-dark relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-4">
                Core Features
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Advanced</span> AI Technology
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our platform delivers unparalleled intelligence capabilities through a suite of advanced technologies that adapt and evolve with your business needs.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain size={24} />}
              title="Neural Processing"
              description="Advanced neural networks that simulate human cognitive functions with unprecedented accuracy and efficiency."
              delay={100}
            />
            <FeatureCard 
              icon={<Cpu size={24} />}
              title="Quantum Computing"
              description="Leverage quantum mechanics to process complex calculations at speeds traditional computers cannot achieve."
              delay={200}
            />
            <FeatureCard 
              icon={<Network size={24} />}
              title="Adaptive Learning"
              description="Self-improving algorithms that continuously learn and evolve from new data and interactions."
              delay={300}
            />
            <FeatureCard 
              icon={<Code size={24} />}
              title="API Integration"
              description="Seamlessly integrate our AI capabilities into your existing software ecosystem with minimal friction."
              delay={400}
            />
            <FeatureCard 
              icon={<Lock size={24} />}
              title="Secure Processing"
              description="End-to-end encryption and privacy-preserving computation keeps your data secure and confidential."
              delay={500}
            />
            <FeatureCard 
              icon={<Zap size={24} />}
              title="Real-time Analysis"
              description="Process and analyze massive datasets in real-time to deliver actionable insights when you need them most."
              delay={600}
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 rounded-full bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-4">
                About NeuroFlux
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Future of AI is <span className="text-gradient">Already Here</span></h2>
              
              <p className="text-white/70 mb-6">
                Founded by a team of digital sorcerers and AI visionaries, NeuroFlux pushes the boundaries of what's possible in artificial intelligence. We're not just building another AI platform – we're crafting the future of intelligent systems.
              </p>
              
              <p className="text-white/70 mb-8">
                Our proprietary neural architecture combines advanced machine learning with quantum computing principles to create AI solutions that are faster, more adaptable, and more intuitive than anything else on the market.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-neuro-blue/10 flex items-center justify-center text-neuro-blue">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="font-bold">50x</div>
                    <div className="text-xs text-white/60">Processing Speed</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-neuro-blue/10 flex items-center justify-center text-neuro-blue">
                    <Brain size={20} />
                  </div>
                  <div>
                    <div className="font-bold">99.8%</div>
                    <div className="text-xs text-white/60">Accuracy Rate</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-neuro-blue/10 flex items-center justify-center text-neuro-blue">
                    <Network size={20} />
                  </div>
                  <div>
                    <div className="font-bold">500+</div>
                    <div className="text-xs text-white/60">Business Clients</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="glow">
                  <CubeAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Section */}
      <section id="research" className="section bg-neuro-dark relative z-10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-4">
                Research
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Pioneering</span> the Future
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our research division works at the cutting edge of AI technology, pushing the boundaries of what's possible.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollReveal className="glass rounded-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-neuro-blue/20 to-neuro-cyan/10"></div>
              <div className="p-6">
                <div className="inline-block px-2 py-1 rounded bg-neuro-blue/10 text-neuro-blue text-xs font-medium mb-3">
                  Research Paper
                </div>
                <h3 className="text-xl font-bold mb-2">Quantum Neural Networks: A New Paradigm</h3>
                <p className="text-white/70 mb-4">Exploring the intersection of quantum computing and neural network architectures for enhanced processing capabilities.</p>
                <a href="#" className="inline-flex items-center text-neuro-blue hover:text-neuro-cyan transition-colors gap-1">
                  Read Paper <ArrowRight size={14} />
                </a>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="glass rounded-xl overflow-hidden" style={{ animationDelay: '100ms' }}>
              <div className="h-48 bg-gradient-to-br from-neuro-blue/20 to-neuro-cyan/10"></div>
              <div className="p-6">
                <div className="inline-block px-2 py-1 rounded bg-neuro-blue/10 text-neuro-blue text-xs font-medium mb-3">
                  Case Study
                </div>
                <h3 className="text-xl font-bold mb-2">Ethical AI Implementation in Healthcare</h3>
                <p className="text-white/70 mb-4">How NeuroFlux technology is transforming patient care while maintaining strict ethical guidelines.</p>
                <a href="#" className="inline-flex items-center text-neuro-blue hover:text-neuro-cyan transition-colors gap-1">
                  View Study <ArrowRight size={14} />
                </a>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="glass rounded-xl overflow-hidden" style={{ animationDelay: '200ms' }}>
              <div className="h-48 bg-gradient-to-br from-neuro-blue/20 to-neuro-cyan/10"></div>
              <div className="p-6">
                <div className="inline-block px-2 py-1 rounded bg-neuro-blue/10 text-neuro-blue text-xs font-medium mb-3">
                  Innovation
                </div>
                <h3 className="text-xl font-bold mb-2">Self-Evolving Algorithm Architecture</h3>
                <p className="text-white/70 mb-4">Breaking new ground with algorithms that can rewrite themselves for optimal performance.</p>
                <a href="#" className="inline-flex items-center text-neuro-blue hover:text-neuro-cyan transition-colors gap-1">
                  Discover More <ArrowRight size={14} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="demo" className="section relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-neuro-blue/10 via-transparent to-transparent opacity-70"></div>
            
            <div className="relative z-10">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ready to <span className="text-gradient">Transform</span> Your Business?</h2>
                <p className="text-white/70 text-center mb-8">
                  Experience the power of NeuroFlux AI with a personalized demo tailored to your industry and needs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-neuro-blue/20 flex items-center justify-center text-neuro-blue mb-3">
                      01
                    </div>
                    <h3 className="font-bold text-white mb-1">Schedule Demo</h3>
                    <p className="text-white/70 text-center text-sm">Book a time with our AI specialists</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-neuro-blue/20 flex items-center justify-center text-neuro-blue mb-3">
                      02
                    </div>
                    <h3 className="font-bold text-white mb-1">Custom Planning</h3>
                    <p className="text-white/70 text-center text-sm">Get a tailored implementation plan</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-neuro-blue/20 flex items-center justify-center text-neuro-blue mb-3">
                      03
                    </div>
                    <h3 className="font-bold text-white mb-1">Integration</h3>
                    <p className="text-white/70 text-center text-sm">Seamless setup with your systems</p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#contact" className="btn-neuro flex items-center justify-center gap-2">
                    Request Demo <ArrowRight size={16} />
                  </a>
                  <a href="#" className="btn-outline flex items-center justify-center gap-2">
                    Contact Sales
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section bg-neuro-dark relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="inline-block px-3 py-1 rounded-full bg-neuro-blue/10 text-neuro-blue text-sm font-medium mb-4">
                Contact Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build the <span className="text-gradient">Future</span> Together</h2>
              
              <p className="text-white/70 mb-8">
                Whether you're looking to transform your business with AI, join our team of innovators, or discuss partnership opportunities, we're here to talk.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neuro-blue/10 flex items-center justify-center text-neuro-blue flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-white/70">hello@neuroflux.ai</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neuro-blue/10 flex items-center justify-center text-neuro-blue flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-white/70">+1 (888) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neuro-blue/10 flex items-center justify-center text-neuro-blue flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visit Us</h3>
                    <p className="text-white/70">123 Innovation Ave, San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal style={{ animationDelay: '200ms' }}>
              <form className="glass p-6 rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neuro-blue transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neuro-blue transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neuro-blue transition-colors"
                    placeholder="Your company"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neuro-blue transition-colors"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-neuro w-full"
                >
                  Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-neuro-darker py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-neuro-blue rounded-full opacity-50 blur-md animate-pulse-glow"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">N</div>
                </div>
                <span className="text-xl font-bold tracking-tight text-gradient">NeuroFlux</span>
              </div>
              <p className="text-white/60 mb-6 max-w-sm">
                Pushing the boundaries of artificial intelligence to create a smarter, more efficient future.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-neuro-blue/20 hover:text-white transition-colors">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-neuro-blue/20 hover:text-white transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-neuro-blue/20 hover:text-white transition-colors">
                  <Github size={16} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-white/60 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#research" className="text-white/60 hover:text-white transition-colors">Research</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/40 text-sm mb-4 md:mb-0">
              © 2025 NeuroFlux AI. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export default Index;
