'use client';

import { useState, useEffect } from 'react';
import { CldImage, CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import './gallery.css';

interface MediaResource {
  asset_id: string;
  public_id: string;
  format: string;
  resource_type: string;
  secure_url: string;
  created_at: string;
}

export default function GalleryPage() {
  const [media, setMedia] = useState<MediaResource[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/gallery');
      const data = await res.json();
      if (data.resources) {
        setMedia(data.resources);
      }
    } catch (error) {
      console.error('Error fetching gallery:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    setUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        // Refresh the gallery
        fetchGallery();
      } else {
        alert('Upload failed: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Error uploading file');
    } finally {
      setUploading(false);
      e.target.value = ''; // Reset input
    }
  };

  return (
    <div className="gallery-page">
      <div className="gallery-header-spacing">
        <div className="container">
          <div className="gallery-header text-center">
            <span className="pill-tag mb-4">Media</span>
            <h1>Farm <span className="serif">Gallery</span></h1>
            <p className="gallery-subtitle">Explore our state-of-the-art facilities, lush green pastures, and the incredible people who make it all happen.</p>
          </div>

        {isAdminMode && (
          <div className="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload New Media</h3>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {uploading ? (
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600 mb-3"></div>
                      <p className="text-sm text-gray-500 font-medium">Uploading to Cloudinary...</p>
                    </div>
                  ) : (
                    <>
                      <svg className="w-10 h-10 mb-3 text-gray-400 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500"><span className="font-semibold text-indigo-600">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-400">SVG, PNG, JPG or MP4 (MAX. 50MB)</p>
                    </>
                  )}
                </div>
                <input id="dropzone-file" type="file" className="hidden" accept="image/*,video/*" onChange={handleUpload} disabled={uploading} />
              </label>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : media.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-lg">No media found in the gallery.</p>
            {isAdminMode && <p className="text-sm text-gray-400 mt-2">Upload some pictures or videos to get started.</p>}
          </div>
        ) : (
          <div className="gallery-grid">
            {media.map((item) => (
              <div key={item.asset_id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                  {item.resource_type === 'video' ? (
                    <CldVideoPlayer
                      id={`video-${item.public_id}`}
                      width="600"
                      height="450"
                      src={item.public_id}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <CldImage
                      width="600"
                      height="450"
                      src={item.public_id}
                      alt={`Gallery item ${item.public_id}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 uppercase tracking-wider">
                      {item.resource_type}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(item.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
