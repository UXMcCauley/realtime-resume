import React from 'react';

export default function About({employee}) {
    return (
        <div className="flex justify-between divide-x divide-gray-200 dark:divide-gray-900 mt-16">
            {/* Bio Section */}
            {employee.bio && (
                <div className="space-y-2 w-1/3">
                    <h3 className="section-title">Bio</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {employee.bio.length > 300 ? `${employee.bio.substring(0, 297)}...` : employee.bio}
                    </p>
                </div>
            )}

            {/* Education Section */}
            {employee.education && employee.education.length > 0 && (
                <div className="space-y-2 w-1/3 ml-12 pl-12">
                    <h3 className="section-title">Education</h3>
                    <div className="space-y-3">
                        {employee.education.map((edu, index) => (
                            <div key={index} className="text-sm">
                                <p className="font-medium text-gray-800 dark:text-gray-200">{edu.schoolName}</p>
                                <p className="text-gray-600 dark:text-gray-400">{edu.major}</p>
                                <p className="text-gray-500 dark:text-gray-500">
                                    {edu.location} • {edu.gradYear}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Certifications Section */}
            {employee.certifications && employee.certifications.length > 0 && (
                <div className="space-y-2 w-1/3 ml-12 pl-12">
                    <h3 className="section-title">Certifications</h3>
                    <div className="space-y-3">
                        {employee.certifications.map((cert, index) => (
                            <div key={index} className="text-sm">
                                <p className="font-medium text-gray-800 dark:text-gray-200">{cert.certification}</p>
                                <p className="text-gray-600 dark:text-gray-400">{cert.certifier}</p>
                                <p className="text-gray-500 dark:text-gray-500">{cert.certificationYear}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
