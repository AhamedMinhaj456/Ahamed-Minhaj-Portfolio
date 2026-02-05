import React, { useState } from "react";
import cert1 from "../assets/certificates/data_structures_backend_with_java.png";
import cert2 from "../assets/certificates/introduction_to_cloud_computing.png";
import cert3 from "../assets/certificates/getting_started_with_git_and_github.png";
import cert4 from "../assets/certificates/introduction_to_machine_learning.png";
import cert5 from "../assets/certificates/introduction_to_artificial_intelligence.png";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Data Structures & Backend with Java",
      institution: "Board Infinity",
      image: cert1, 
      credential: "View Certificate",
      date: "April 2024",
      credentialUrl: "https://coursera.org/share/27bec4353e688fbfdc231998d71d0338",
    },
    {
      id: 2,
      title: "Introduction to Cloud Computing",
      institution: "IBM ",
      image: cert2,
      credential: "View Certificate",
      date: "March 2024",
      credentialUrl: "https://coursera.org/share/ef2c8e99d2269b1b133e097fb9199b3d"
    },
    {
      id: 3,
      title: "Getting Started with Git and GitHub",
      institution: "IBM",
      image: cert3,
      credential: "View Certificate",
      date: "March 2024",
      credentialUrl: "https://coursera.org/share/97f797a94cac9b13dbc8f3dfc191077e"
    },
    {
      id: 4,
      title: "Introduction to Machine Learning",
      institution: "Duke University",
      image: cert4,
      credential: "View Certificate",
      date: "March 2024",
      credentialUrl: "https://coursera.org/share/bef8145a083eb655ea271ff6a83e7ffa"
    },
    {
      id: 5,
      title: "Introduction to Artificial Intelligence (AI)",
      institution: "IBM",
      image: cert5,
      credential: "View Certificate",
      date: "March 2024",
      credentialUrl: "https://coursera.org/share/fc5dcd8a2b1f21417fd60bcd87dfe306"
    }
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div
      name="Certificates"
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 w-full min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-left">
          <h2 className="text-5xl font-bold text-white mb-4">
            Certificates
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full "></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105"
            >
              {/* Certificate Image */}
              <div className="relative h-64 bg-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300/1f2937/ffffff?text=Certificate";
                  }}
                />
                
                {/* View Certificate Button Overlay */}
                <button
                  onClick={() => openModal(cert)}
                  className="absolute top-4 left-4 z-20 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-800/90"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Certificate
                </button>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{cert.institution}</p>
                
                {/* Date Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{cert.date}</span>
                  <button
                    onClick={() => openModal(cert)}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    View
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Smaller Size */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800/95 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gray-900/50 px-6 py-4 flex items-center justify-between border-b border-gray-700/50">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {selectedCertificate.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {selectedCertificate.institution}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700/50 rounded-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 overflow-y-auto max-h-[calc(80vh-140px)]">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x600/1f2937/ffffff?text=Certificate";
                }}
              />
            </div>

            {/* Modal Footer with Link */}
            <div className="bg-gray-900/50 px-6 py-4 border-t border-gray-700/50 flex items-center justify-between">
              <span className="text-gray-400 text-sm">
                {selectedCertificate.date}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const url = selectedCertificate.credentialUrl;
                  console.log('Opening URL:', url);
                  if (url) {
                    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
                    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                      // Pop-up blocked, try alternative
                      alert('Pop-up blocked! Please allow pop-ups for this site or copy this URL: ' + url);
                    }
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 hover:scale-105 text-sm font-medium cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View Original Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;