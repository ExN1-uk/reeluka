
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const OurWork = () => {
  // Sample project data - these would typically come from a CMS or API
  const projects = [
    {
      id: 1,
      title: "Banking Infrastructure Modernization",
      description: "Complete modernization of IT infrastructure for a leading African bank, including hyperconverged systems and disaster recovery.",
      industry: "Banking & Finance",
      placeholderColor: "bg-brand-gold/20",
    },
    {
      id: 2,
      title: "Government Identity System",
      description: "Implementation of secure identity management system for a government agency, enhancing security and efficiency.",
      industry: "Government",
      placeholderColor: "bg-brand-blue/20",
    },
    {
      id: 3,
      title: "Telecommunications Data Center",
      description: "Design and deployment of a state-of-the-art data center for a major telecommunications provider.",
      industry: "Telecommunications",
      placeholderColor: "bg-brand-gold/20",
    },
    {
      id: 4,
      title: "Financial Services ERP Integration",
      description: "Complex ERP implementation and integration for a financial services company, streamlining operations.",
      industry: "Financial Services",
      placeholderColor: "bg-brand-blue/20",
    },
    {
      id: 5,
      title: "Healthcare Database Migration",
      description: "Migration of critical healthcare data to a new database system with zero downtime and enhanced security.",
      industry: "Healthcare",
      placeholderColor: "bg-brand-gold/20",
    },
    {
      id: 6,
      title: "Retail Chain Server Virtualization",
      description: "Complete server virtualization project for a retail chain, reducing hardware costs and improving performance.",
      industry: "Retail",
      placeholderColor: "bg-brand-blue/20",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Work</h1>
            <p className="text-xl text-gray-600">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </div>
        </div>
      </div>
      
      {/* Projects Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className={`h-48 ${project.placeholderColor} flex items-center justify-center`}>
                  {/* This would normally be an image */}
                  <span className="text-lg text-gray-500">Project Image</span>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Take a deeper look at some of our most impactful projects and the results we achieved for our clients.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-brand-gold/20 flex items-center justify-center p-8">
                  {/* This would normally be an image */}
                  <span className="text-lg text-gray-500">Case Study Image</span>
                </div>
                <div className="md:col-span-2 p-8">
                  <h3 className="text-2xl font-bold mb-3">National Bank Infrastructure Upgrade</h3>
                  <p className="text-gray-600 mb-4">
                    We helped a major national bank modernize their entire IT infrastructure, improving performance by 300% 
                    while reducing operational costs by 40%. The project included HPE SimpliVity implementation, 
                    Oracle database migration, and comprehensive disaster recovery solutions.
                  </p>
                  <div className="font-semibold">Results:</div>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>300% performance improvement</li>
                    <li>40% reduction in operational costs</li>
                    <li>99.999% system uptime</li>
                    <li>15-minute disaster recovery time</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-brand-blue/20 flex items-center justify-center p-8">
                  {/* This would normally be an image */}
                  <span className="text-lg text-gray-500">Case Study Image</span>
                </div>
                <div className="md:col-span-2 p-8">
                  <h3 className="text-2xl font-bold mb-3">Government Identity Management System</h3>
                  <p className="text-gray-600 mb-4">
                    We implemented a comprehensive identity management system for a government agency, enhancing 
                    security, reducing fraud, and improving citizen services. The system now processes over 10,000 
                    identity verifications daily with 99.9% accuracy.
                  </p>
                  <div className="font-semibold">Results:</div>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>90% reduction in identity fraud</li>
                    <li>Processing time reduced from 3 days to 15 minutes</li>
                    <li>10,000+ identity verifications daily</li>
                    <li>99.9% system accuracy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-gray-600">CIO, ABC Bank</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Reeluka Investments has been a transformative partner for our bank's IT infrastructure. 
                Their expertise in hyperconverged solutions and database management has significantly 
                improved our performance while reducing costs. Their team's dedication and technical 
                knowledge are truly impressive."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold">Jane Smith</h4>
                  <p className="text-gray-600">IT Director, Government Agency</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Working with Reeluka on our identity management system was a seamless experience. 
                They understood our complex requirements and delivered a robust solution that has 
                streamlined our operations and improved security. Their ongoing support has been 
                exceptional."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
