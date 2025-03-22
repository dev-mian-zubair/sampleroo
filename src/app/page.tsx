import React from 'react';
import { FileTypeCard } from '@/components/FileTypeCard';
import { DownloadButton } from '@/components/DownloadButton';
import FeaturesSection from './_components/FeaturesSection';
import { fileTypes } from '@/constants/file.types';

export default function Home() {
  return (
    <>
      {/* File Categories Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fileTypes.map((type) => (
              <div key={type.title} className="space-y-4">
                <FileTypeCard {...type} />
                <div className="card space-y-3">
                  {type.files.map((file) => (
                    <div
                      key={file.name}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 transition-all duration-200 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm">
                          {type.icon ? (
                            <type.icon className="w-4 h-4" />
                          ) : (
                            <span className="text-base">📄</span>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{file.name}</p>
                          <p className="text-xs text-gray-600">{file.type}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">{file.size}</span>
                    </div>
                  ))}
                  <DownloadButton
                    name={`Download ${Array.isArray(type.files) ? type.files.length + ' Files' : 'File'}`}
                    urls={type.files.map((file) => file.url)}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />
    </>
  );
}
