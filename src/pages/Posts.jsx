import { useNavigate } from 'react-router-dom';
import { RiAddLine, RiEditLine, RiDeleteBinLine } from 'react-icons/ri';
import { trackEvent } from '../services/questSdk';

export function Posts() {
  const navigate = useNavigate();

  const handleNewPost = () => {
    trackEvent('new_post_click', {});
    navigate('/posts/new');
  };

  const handleEditPost = (postId) => {
    trackEvent('edit_post_click', { postId });
  };

  const handleDeletePost = (postId) => {
    trackEvent('delete_post_click', { postId });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Posts</h2>
        <button
          onClick={handleNewPost}
          className="px-4 py-2 bg-primary text-white rounded-lg flex items-center"
        >
          <RiAddLine className="mr-2" />
          New Post
        </button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[1,2,3,4,5].map((post) => (
              <tr key={post}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Sample Post Title {post}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">John Doe</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Published
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2024-03-15
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEditPost(post)}
                    className="text-primary hover:text-primary-dark mr-3"
                  >
                    <RiEditLine className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeletePost(post)}
                    className="text-danger hover:text-danger-dark"
                  >
                    <RiDeleteBinLine className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}