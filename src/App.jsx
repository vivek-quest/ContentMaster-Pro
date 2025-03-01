import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Posts } from './pages/Posts';
import { Media } from './pages/Media';
import { Settings } from './pages/Settings';
import { Analytics } from './pages/Analytics';
import { NewPost } from './pages/NewPost';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/new" element={<NewPost />} />
              <Route path="/media" element={<Media />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;