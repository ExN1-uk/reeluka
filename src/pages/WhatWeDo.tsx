
import React from 'react';
import { Server, Database, Shield, Monitor } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WhatWeDo = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h1>
            <p className="text-xl text-gray-600">
              We provide comprehensive IT infrastructure solutions tailored to meet the evolving needs of businesses across Africa.
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-block bg-brand-gold bg-opacity-10 p-3 rounded-lg mb-6">
                <Server className="h-8 w-8 text-brand-gold" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hyperconverged Infrastructure</h2>
              <p className="text-gray-600 mb-6">
                We implement cutting-edge hyperconverged infrastructure solutions that integrate compute, storage, 
                and virtualization resources into a single system. Our solutions help businesses reduce complexity, 
                improve scalability, and enhance operational efficiency.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mr-3"></span>
                  HPE SimpliVity implementation and support
                </li>
                <li className="flex items-center">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mr-3"></span>
                  Server virtualization and consolidation
                </li>
                <li className="flex items-center">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mr-3"></span>
                  High-availability infrastructure design
                </li>
                <li className="flex items-center">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mr-3"></span>
                  Performance optimization and management
                </li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-block bg-brand-blue bg-opacity-10 p-3 rounded-lg mb-6">
                <Database className="h-8 w-8 text-brand-blue" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Database Management & Solutions</h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive database solutions for businesses of all sizes. Our team has extensive 
                experience implementing and supporting Oracle databases, ensuring optimal performance, 
                security, and reliability for mission-critical applications.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mr-3"></span>
                  Oracle database implementation and migration
                </li>
                <li className="flex items-center">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mr-3"></span>
                  Database performance tuning and optimization
                </li>
                <li className="flex items-center">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mr-3"></span>
                  High-availability database clustering
                </li>
                <li className="flex items-center">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mr-3"></span>
                  Database backup and recovery solutions
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-block bg-brand-gold bg-opacity-10 p-3 rounded-lg mb-6">
                <Shield className="h-8 w-8 text-brand-gold" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disaster Recovery & Business Continuity</h2>
              <p className="text-gray-600 mb-6">
                Protect your business from data loss and downtime with our comprehensive disaster recovery 
                solutions. We design and implement robust backup and recovery systems that ensure business 
                continuity even in the face of unexpected disruptions.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mr-3"></span>
                  Business continuity planning and implementation
                </li>
                <li className="flex items-center">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mr-3"></span>
                  Backup and recovery solutions
                </li>
                <li className="flex items-center">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mr-3"></span>
                  Disaster recovery site setup and management
                </li>
                <li className="flex items-center">
                  <span className="bg-brand-gold rounded-full h-2 w-2 mr-3"></span>
                  Regular disaster recovery testing and validation
                </li>
              </ul>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-block bg-brand-blue bg-opacity-10 p-3 rounded-lg mb-6">
                <Monitor className="h-8 w-8 text-brand-blue" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">ERP & Business Systems</h2>
              <p className="text-gray-600 mb-6">
                Transform your business operations with our enterprise resource planning (ERP) solutions. 
                We specialize in Oracle ERP implementation and support, helping businesses streamline 
                processes, improve decision-making, and drive overall efficiency.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mr-3"></span>
                  Oracle ERP implementation and customization
                </li>
                <li className="flex items-center">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mr-3"></span>
                  ERP system integration with existing infrastructure
                </li>
                <li className="flex items-center">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mr-3"></span>
                  ERP performance optimization
                </li>
                <li className="flex items-center">
                  <span className="bg-brand-blue rounded-full h-2 w-2 mr-3"></span>
                  User training and ongoing support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured methodology to ensure the successful delivery of every project, from initial assessment to ongoing support.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold text-center">1. Assess</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    We conduct a thorough assessment of your current infrastructure, business requirements, and challenges.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold text-center">2. Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Our experts design a tailored solution that addresses your specific needs and aligns with your business goals.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold text-center">3. Implement</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    We deploy the solution using best practices, minimizing disruption to your business operations.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold text-center">4. Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    We provide ongoing support and maintenance to ensure your systems operate at peak performance.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
