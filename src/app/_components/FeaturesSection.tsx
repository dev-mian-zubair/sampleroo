import { Archive, Download, FileText } from 'lucide-react';
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="section bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container">
        <h2 className="heading text-center mb-8">
          Why Choose Our Sample Files?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card hover:bg-gray-50">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <Download className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold mb-2">Free Downloads</h3>
            <p className="text-muted">
              All sample files are completely free to download and use in your projects.
            </p>
          </div>
          <div className="card hover:bg-gray-50">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold mb-2">Various Formats</h3>
            <p className="text-muted">
              Wide range of file formats available for all your testing needs.
            </p>
          </div>
          <div className="card hover:bg-gray-50">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <Archive className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold mb-2">Regular Updates</h3>
            <p className="text-muted">
              New sample files are added regularly to keep up with your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
