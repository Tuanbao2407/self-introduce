'use client';
import { useState, useEffect, useRef } from 'react';

export default function AudioPlayer({ src: initialSrc } = {}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [externalUrl, setExternalUrl] = useState(initialSrc || '');
  const [error, setError] = useState('');
  const audioRef = useRef(null);

  useEffect(() => {
    // Chỉ autoplay khi người dùng tương tác với trang web
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        // try to play when the user first interacts; ignore failures
        audioRef.current.play().catch(error => console.log('Audio autoplay failed:', error));
      }
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    return () => document.removeEventListener('click', handleFirstInteraction);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    // keep audio element volume in sync
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const loadExternal = () => {
    setError('');
    if (!externalUrl) return;
    if (audioRef.current) {
      try {
        audioRef.current.src = externalUrl;
        audioRef.current.load();
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      } catch (err) {
        console.error('Failed to load external audio:', err);
        setError('Failed to load the provided URL as audio. It may not be a direct media file.');
      }
    }
  };

  const handleAudioError = () => {
    setError('Unable to play the audio. The URL might not point to a direct audio file or CORS blocks playback.');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-marshallGold/30 shadow-lg">
      <audio
        ref={audioRef}
        src={initialSrc || '/audio/background-music.mp3'}
        loop
        onError={handleAudioError}
      />
      <div className="mb-2">
        <label className="text-sm text-gray-300 mr-2">External audio URL:</label>
        <input
          type="text"
          placeholder="Paste an audio URL (or a direct media file URL)"
          value={externalUrl}
          onChange={(e) => setExternalUrl(e.target.value)}
          className="rounded px-2 py-1 text-black w-72"
        />
        <button
          onClick={loadExternal}
          className="ml-2 px-3 py-1 bg-marshallGold text-black rounded hover:bg-marshallGoldLight"
        >
          Load
        </button>
        {error && <div className="text-xs text-red-400 mt-1">{error}</div>}
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="text-marshallGold hover:text-marshallGoldLight transition-colors"
        >
          {isPlaying ? (
            // Pause Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            // Play Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-marshallGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414-3.536 5 5 0 00-1.414-3.536M2.757 17.657a9 9 0 012.829-6.364 9 9 0 012.828-2.828" />
          </svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 accent-marshallGold"
          />
        </div>
      </div>
    </div>
  );
}