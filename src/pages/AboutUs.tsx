
import React from 'react';
import { Shield, Users, Target, Clock } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Reeluka Investments</h1>
            <p className="text-xl text-gray-600">
              We are a leading provider of IT infrastructure and solutions for businesses across Africa.
              Our mission is to enable organizational success through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>
      
      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, Reeluka Investments has grown to become a trusted provider of enterprise IT solutions
                across Zambia and beyond. Our journey began with a vision to transform how African businesses leverage technology.
              </p>
              <p className="text-gray-600 mb-4">
                Working in partnership with global technology leaders and local specialists, we have 
                successfully delivered complex IT projects for financial institutions, government agencies,
                and various enterprises throughout the region.
              </p>
              <p className="text-gray-600">
                Our team combines deep technical expertise with a thorough understanding of the local
                business environment to deliver solutions that drive real business value.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Company Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block bg-brand-gold rounded-full p-2 mr-3">
                    <Clock className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <span className="font-semibold block">Founded in 2015</span>
                    <span className="text-gray-600">Over 8 years of industry experience</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-brand-gold rounded-full p-2 mr-3">
                    <Users className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <span className="font-semibold block">Experienced Team</span>
                    <span className="text-gray-600">Skilled professionals with diverse expertise</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-brand-gold rounded-full p-2 mr-3">
                    <Target className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <span className="font-semibold block">Projects Completed</span>
                    <span className="text-gray-600">Successfully delivered over 25 major projects</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-brand-gold rounded-full p-2 mr-3">
                    <Shield className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <span className="font-semibold block">Strategic Partnerships</span>
                    <span className="text-gray-600">Official partners with leading global tech brands</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Guided by our core principles, we strive to make a meaningful impact
              for our clients and the broader African business community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-gold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To empower African businesses with innovative, reliable, and secure IT infrastructure 
                solutions that drive operational excellence and sustainable growth.
              </p>
              <p className="text-gray-600">
                We are committed to understanding each client's unique challenges and delivering 
                tailored solutions that provide genuine business value and competitive advantage.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be Africa's most trusted IT solutions provider, recognized for our technical excellence,
                customer-focused approach, and contribution to digital transformation across the continent.
              </p>
              <p className="text-gray-600">
                We envision a future where African businesses leverage world-class IT infrastructure to 
                compete globally and drive economic growth throughout the region.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide our decisions, shape our culture, and define how we work with our clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-brand-gold">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence & Integrity</h3>
              <p className="text-gray-600">
                We hold ourselves to the highest standards of technical expertise and ethical business practices.
                We believe in doing what's right for our clients, even when it's challenging, and maintaining
                complete transparency in all our dealings.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-brand-blue">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation & Adaptability</h3>
              <p className="text-gray-600">
                We embrace changing technologies and continuously seek better ways to serve our clients.
                We believe in applying creative thinking to solve complex problems and staying ahead
                of industry trends to provide forward-looking solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-brand-gold">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client-Centric Partnership</h3>
              <p className="text-gray-600">
                We measure our success by our clients' success. We take time to understand each client's
                business objectives and challenges, building long-term relationships based on trust,
                reliability, and delivering measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
