import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiSaveLine, RiImageAddLine } from 'react-icons/ri';
import { trackEvent } from '../services/questSdk';

export function NewPost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    content: '',
    featuredImage: null,
    status: 'draft',
    tags: [],
    seo: {
      metaTitle: '',
      metaDescription: ''
    }
  });

  const handleSave = () => {
    trackEvent('save_post', { ...post, status: 'draft' });
    navigate('/posts');
  };

  const handlePublish = () => {
    trackEvent('publish_post', post);
    navigate('/posts');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">New Post</h2>
        <div className="space-x-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 flex items-center"
          >
            <RiSaveLine className="mr-2" />
            Save Draft
          </button>
          <button
            onClick={handlePublish}
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            Publish
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={post.title}
              onChange={(e) => setPost({...post, title: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              value={post.content}
              onChange={(e) => setPost({...post, content: e.target.value})}
              rows={10}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="Write your post content here..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Featured Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <RiImageAddLine className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={(e) => setPost({...post, featuredImage: e.target.files[0]})}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tags
            </label>
            <input
              type="text"
              placeholder="Add tags separated by commas"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              onChange={(e) => setPost({...post, tags: e.target.value.split(',')})}
            />
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900">SEO Settings</h3>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium text-gray-700">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={post.seo.metaTitle}
                  onChange={(e) => setPost({
                    ...post,
                    seo: {...post.seo, metaTitle: e.target.value}
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>

              <div className="sm:col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Meta Description
                </label>
                <textarea
                  value={post.seo.metaDescription}
                  onChange={(e) => setPost({
                    ...post,
                    seo: {...post.seo, metaDescription: e.target.value}
                  })}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}