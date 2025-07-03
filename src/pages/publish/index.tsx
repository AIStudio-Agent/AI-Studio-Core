import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PublishModel: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    type: '',
    customType: '',
    description: '',
    tags: '',
    framework: '',
    format: '',
    example: '',
    license: '',
    api: '',
    link: '',
    doc: '',
    email: '',
    ethics: '',
    upload: null as File | null,
    thumbnail: null as File | null,
    agree: false,
  });

  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const fieldRefs = {
    name: useRef<HTMLInputElement>(null),
    type: useRef<HTMLSelectElement>(null),
    customType: useRef<HTMLInputElement>(null),
    description: useRef<HTMLTextAreaElement>(null),
    framework: useRef<HTMLInputElement>(null),
    license: useRef<HTMLInputElement>(null),
    upload: useRef<HTMLInputElement>(null),
    link: useRef<HTMLInputElement>(null),
    thumbnail: useRef<HTMLInputElement>(null),
    agree: useRef<HTMLInputElement>(null),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm(f => ({ ...f, [name]: checked }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    const file = files?.[0] || null;
    setForm(f => ({ ...f, [name]: file }));

    if (name === 'thumbnail' && file) {
      const reader = new FileReader();
      reader.onloadend = () => setThumbnailPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const scrollToField = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    ref.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error('Model name is required.');
      return scrollToField(fieldRefs.name);
    }

    if (!form.type.trim()) {
      toast.error('Please select a model category.');
      return scrollToField(fieldRefs.type);
    }

    if (form.type === 'Other' && !form.customType.trim()) {
      toast.error('Please specify the custom model category.');
      return scrollToField(fieldRefs.customType);
    }

    if (!form.description.trim()) {
      toast.error('Short description is required.');
      return scrollToField(fieldRefs.description);
    }

    if (!form.framework.trim()) {
      toast.error('Framework is required.');
      return scrollToField(fieldRefs.framework);
    }

    if (!form.license.trim()) {
      toast.error('License is required. Use "NA" if not applicable.');
      return scrollToField(fieldRefs.license);
    }

    if (!form.upload && !form.link.trim()) {
      toast.error('Upload a model file or provide a hosted link.');
      return scrollToField(fieldRefs.upload);
    }

    if (!form.thumbnail) {
      toast.error('Please upload a thumbnail/logo.');
      return scrollToField(fieldRefs.thumbnail);
    }

    if (!form.agree) {
      toast.error('You must agree to the terms and conditions.');
      return scrollToField(fieldRefs.agree);
    }

    console.log('Model Published:', form);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({
      name: '',
      type: '',
      customType: '',
      description: '',
      tags: '',
      framework: '',
      format: '',
      example: '',
      license: '',
      api: '',
      link: '',
      doc: '',
      email: '',
      ethics: '',
      upload: null,
      thumbnail: null,
      agree: false,
    });
    setThumbnailPreview(null);
    setSubmitted(false);
  };

  const isOtherSelected = form.type === 'Other';

  return (
    <div className="min-h-screen relative px-6 pt-24 pb-12 bg-white text-gray-900 dark:bg-[#1E2117] dark:text-white transition-colors">
      <ToastContainer position="top-center" />
      <div className="absolute inset-0 bg-white dark:bg-[#1E2117] z-0" />
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #00B39F 1px, transparent 1px), linear-gradient(to bottom, #00B39F 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {!submitted && (
          <h1 className="text-5xl font-bold mb-6 text-teal-500">
            Publish Your AI Model
          </h1>
        )}

        {submitted ? (
          <div className="bg-gray-100 dark:bg-[#2A2E24]/80 backdrop-blur-md border border-teal-500 text-gray-900 dark:text-teal-300 p-10 rounded-xl space-y-6 min-h-[70vh]">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
              <h2 className="text-3xl font-semibold">Model Published Successfully!</h2>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-md text-lg space-y-3 border border-gray-200 dark:border-neutral-700">
              <p><strong>Name:</strong> {form.name}</p>
              <p><strong>Type:</strong> {form.type === 'Other' ? form.customType : form.type}</p>
              <p><strong>Description:</strong> {form.description}</p>
              <p><strong>Tags:</strong> {form.tags}</p>
              <p><strong>Framework:</strong> {form.framework}</p>
              <p><strong>License:</strong> {form.license}</p>
              <p><strong>Model File:</strong> {form.upload?.name || form.link}</p>
              {form.thumbnail && <p><strong>Thumbnail:</strong> {form.thumbnail.name}</p>}
            </div>
            <button
              onClick={handleReset}
              className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-black dark:text-gray-900 font-semibold py-4 text-lg rounded-lg transition"
            >
              ➕ Publish Another Model
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-gray-50 dark:bg-[#2A2E24]/80 backdrop-blur-sm p-10 rounded-xl border border-gray-200 dark:border-neutral-800 transition-colors"
          >
            <p className="text-sm text-gray-600 dark:text-neutral-400 mb-2 -mt-2">
              Fields marked with <span className="text-red-500">*</span> are required.
            </p>

            <div>
              <label className="block mb-2 text-2xl font-bold">Model Name <span className="text-red-500">*</span></label>
              <input name="name" ref={fieldRefs.name} value={form.name} onChange={handleChange} className="w-full p-4 bg-white dark:bg-neutral-700 rounded-lg border border-gray-300 dark:border-neutral-700 transition-colors" />
            </div>

            <div>
              <label className="block mb-2 text-2xl font-bold">Model Type <span className="text-red-500">*</span></label>
              <select name="type" ref={fieldRefs.type} value={form.type} onChange={handleChange} className="w-full p-4 bg-white dark:bg-neutral-700 rounded-lg border border-gray-300 dark:border-neutral-700 transition-colors">
                <option value="" disabled hidden>Select a category</option>
                <option value="NLP">NLP</option>
                <option value="Image Generation">Image Generation</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="Voice & Audio">Voice & Audio</option>
                <option value="Code Assistant">Code Assistant</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {isOtherSelected && (
              <div>
                <label className="block mb-2 text-2xl font-bold">Custom Category <span className="text-red-500">*</span></label>
                <input name="customType" ref={fieldRefs.customType} value={form.customType} onChange={handleChange} className="w-full p-4 bg-white dark:bg-neutral-700 rounded-lg border border-gray-300 dark:border-neutral-700 transition-colors" />
              </div>
            )}

            <div>
              <label className="block mb-2 text-2xl font-bold">Short Description <span className="text-red-500">*</span></label>
              <textarea name="description" ref={fieldRefs.description} value={form.description} onChange={handleChange} className="w-full p-4 bg-white dark:bg-neutral-700 rounded-lg border border-gray-300 dark:border-neutral-700 transition-colors" />
            </div>

            <div>
              <label className="block mb-2 text-2xl font-bold">Framework <span className="text-red-500">*</span></label>
              <input name="framework" ref={fieldRefs.framework} value={form.framework} onChange={handleChange} className="w-full p-4 bg-white dark:bg-neutral-700 rounded-lg border border-gray-300 dark:border-neutral-700 transition-colors" />
            </div>

            <div>
              <label className="block mb-2 text-2xl font-bold">License <span className="text-red-500">*</span></label>
              <input name="license" ref={fieldRefs.license} value={form.license} onChange={handleChange} placeholder="e.g. MIT or NA" className="w-full p-4 bg-white dark:bg-neutral-700 rounded-lg border border-gray-300 dark:border-neutral-700 transition-colors" />
            </div>

            <div>
              <label className="block mb-2 text-2xl font-bold">Upload Model File or Link <span className="text-red-500">*</span></label>
              <input name="upload" type="file" accept=".zip,.pt,.onnx,.pkl" ref={fieldRefs.upload} onChange={handleFileChange} className="w-full bg-white dark:bg-neutral-700 rounded-lg file:bg-teal-500 file:text-white transition-colors" />
              <input name="link" value={form.link} onChange={handleChange} ref={fieldRefs.link} placeholder="Or paste GitHub/Colab link" className="w-full p-4 bg-white dark:bg-neutral-700 rounded-lg mt-3 border border-gray-300 dark:border-neutral-700 transition-colors" />
            </div>

            <div>
              <label className="block mb-2 text-2xl font-bold">Thumbnail / Logo <span className="text-red-500">*</span></label>
              <input name="thumbnail" type="file" accept="image/*" ref={fieldRefs.thumbnail} onChange={handleFileChange} className="w-full bg-white dark:bg-neutral-700 rounded-lg file:bg-teal-500 file:text-white transition-colors" />
              {thumbnailPreview && (
                <img src={thumbnailPreview} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-lg border border-gray-300 dark:border-neutral-600 transition-colors" />
              )}
            </div>

            <div className="flex items-start space-x-3">
              <input id="agree" name="agree" type="checkbox" ref={fieldRefs.agree} checked={form.agree} onChange={handleChange} className="w-5 h-5 mt-1 accent-teal-500" />
              <label htmlFor="agree" className="text-sm text-gray-700 dark:text-neutral-300 leading-tight">
                <span className="text-red-500 mr-1">*</span>
                I agree to the <a href="#terms" className="underline text-teal-500">Terms and Conditions</a>
              </label>
            </div>

            <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-black dark:text-gray-900 font-semibold py-4 text-lg rounded-lg transition">
              🚀 Publish Model
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PublishModel;
