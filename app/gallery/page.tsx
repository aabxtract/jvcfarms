'use client';

import { useState, useEffect } from 'react';
import './gallery.css';

interface MediaResource {
  key: string;
  name: string;
  size: number;
  type: string;
  customId: string | null;
  fileHash: string;
  url?: string;
  createdAt?: string;
}

export default function GalleryPage() {
  const [media, setMedia] = useState<MediaResource[]>([]);
  const [loading, setLoading] = useState(true);

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

  const getFileUrl = (key: string) => {
    return `https://utfs.io/f/${key}`;
  };

  const isVideo = (item: MediaResource) => {
    const name = item.name?.toLowerCase() || '';
    return name.match(/\.(mp4|webm|mov|avi|mkv)$/i) !== null;
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

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : media.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-lg">No media found in the gallery.</p>
          </div>
        ) : (
          <div className="gallery-grid">
            {media.map((item) => (
              <div key={item.key} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                  {isVideo(item) ? (
                    <video
                      src={getFileUrl(item.key)}
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={getFileUrl(item.key)}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 uppercase tracking-wider">
                      {isVideo(item) ? 'video' : 'image'}
                    </span>
                    <span className="text-xs text-gray-400">
                      {item.name}
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
