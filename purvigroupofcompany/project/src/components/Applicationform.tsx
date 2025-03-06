import  { useState, FormEvent } from 'react';
import { Send, Building2 } from 'lucide-react';

interface EducationDetails {
  name: string;
  year: string;
  percentage: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  tenth: EducationDetails;
  intermediate: EducationDetails;
  graduation: {
    completed: boolean;
    details?: EducationDetails;
  };
}

const ApplicationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    tenth: { name: '', year: '', percentage: '' },
    intermediate: { name: '', year: '', percentage: '' },
    graduation: { completed: false },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const emailBody = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

10th Details:
School: ${formData.tenth.name}
Year: ${formData.tenth.year}
Percentage: ${formData.tenth.percentage}%

Intermediate Details:
School: ${formData.intermediate.name}
Year: ${formData.intermediate.year}
Percentage: ${formData.intermediate.percentage}%

Graduation: ${formData.graduation.completed ? 'Yes' : 'No'}
${formData.graduation.completed && formData.graduation.details ? `
College: ${formData.graduation.details.name}
Year: ${formData.graduation.details.year}
Percentage: ${formData.graduation.details.percentage}%` : ''}
`.trim();

    const mailtoLink = `mailto:purvigroup1@gmail.com?subject=Foxconn Job Application - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Building2 className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Foxconn Job Application</h1>
          <p className="mt-2 text-gray-600">Please fill out all the required information below</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Education Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Education Details</h2>
            
            {/* 10th Details */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-700">10th Standard *</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">School Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.tenth.name}
                    onChange={(e) => setFormData({
                      ...formData,
                      tenth: { ...formData.tenth, name: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Year</label>
                  <input
                    type="text"
                    required
                    pattern="\d{4}"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.tenth.year}
                    onChange={(e) => setFormData({
                      ...formData,
                      tenth: { ...formData.tenth, year: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Percentage</label>
                  <input
                    type="number"
                    required
                    min="0"
                    max="100"
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.tenth.percentage}
                    onChange={(e) => setFormData({
                      ...formData,
                      tenth: { ...formData.tenth, percentage: e.target.value }
                    })}
                  />
                </div>
              </div>
            </div>

            {/* Intermediate Details */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-700">Intermediate *</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">School Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.intermediate.name}
                    onChange={(e) => setFormData({
                      ...formData,
                      intermediate: { ...formData.intermediate, name: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Year</label>
                  <input
                    type="text"
                    required
                    pattern="\d{4}"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.intermediate.year}
                    onChange={(e) => setFormData({
                      ...formData,
                      intermediate: { ...formData.intermediate, year: e.target.value }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Percentage</label>
                  <input
                    type="number"
                    required
                    min="0"
                    max="100"
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.intermediate.percentage}
                    onChange={(e) => setFormData({
                      ...formData,
                      intermediate: { ...formData.intermediate, percentage: e.target.value }
                    })}
                  />
                </div>
              </div>
            </div>

            {/* Graduation Details */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">Graduation</h3>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={formData.graduation.completed}
                    onChange={(e) => setFormData({
                      ...formData,
                      graduation: {
                        completed: e.target.checked,
                        details: e.target.checked ? { name: '', year: '', percentage: '' } : undefined
                      }
                    })}
                  />
                  <span className="ml-2 text-gray-700">Completed Graduation</span>
                </label>
              </div>

              {formData.graduation.completed && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">College Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.graduation.details?.name || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        graduation: {
                          ...formData.graduation,
                          details: {
                            ...(formData.graduation.details || { year: '', percentage: '' }),
                            name: e.target.value
                          }
                        }
                      })}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Year</label>
                    <input
                      type="text"
                      required
                      pattern="\d{4}"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.graduation.details?.year || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        graduation: {
                          ...formData.graduation,
                          details: {
                            ...(formData.graduation.details || { name: '', percentage: '' }),
                            year: e.target.value
                          }
                        }
                      })}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Percentage</label>
                    <input
                      type="number"
                      required
                      min="0"
                      max="100"
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.graduation.details?.percentage || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        graduation: {
                          ...formData.graduation,
                          details: {
                            ...(formData.graduation.details || { name: '', year: '' }),
                            percentage: e.target.value
                          }
                        }
                      })}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Send className="h-5 w-5" />
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ApplicationForm;