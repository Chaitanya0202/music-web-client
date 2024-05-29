import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MusicList = () => {
  const [musicFiles, setMusicFiles] = useState([]);
  const [filteredMusicFiles, setFilteredMusicFiles] = useState([]);
  const [currentMusic, setCurrentMusic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch all music files from the server
    const fetchMusic = async () => {
      try {
        const response = await axios.get('http://localhost:8080/musicFiles');
        setMusicFiles(response.data);
        setFilteredMusicFiles(response.data);
      } catch (error) {
        console.error('Error fetching music:', error);
      }
    };

    fetchMusic();
  }, []);

  const playMusic = async (musicId) => {
    // Stop currently playing music
    if (currentMusic) {
      const audioPlayer = document.getElementById('audioPlayer');
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      setCurrentMusic(null);
    }

    try {
      const response = await axios.get(`http://localhost:8080/musicFiles/${musicId}`, {
        responseType: 'arraybuffer',
      });
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = URL.createObjectURL(blob);
      setCurrentMusic(url);
    } catch (error) {
      console.error('Error fetching music file:', error);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = musicFiles.filter(
      (music) =>
        (music.filename && music.filename.toLowerCase().includes(query)) ||
        (music.artist && music.artist.toLowerCase().includes(query)) ||
        (music.album && music.album.toLowerCase().includes(query))
    );
    setFilteredMusicFiles(filtered);
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8bXVzaWN8fHx8fHwxNjQ4MjQxNjU4&ixlib=rb-1.2.1&q=80")',
          backgroundSize: 'cover'
        }}
      ></div>
      <div className="relative container mx-auto p-4">
        {/* <h2 className="text-2xl font-bold mb-4 text-white">Music List</h2> */}
        <div className="mb-4 sticky top-5 z-50">
          <input
            type="text"
            placeholder="Search by filename, artist, or album"
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 w-full border rounded-md focus:ring focus:ring-purple-200 focus:border-purple-500"
          />
        </div>
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {filteredMusicFiles.map((music) => (
            <li
              key={music.id}
              className="bg-gray-900 bg-opacity-50 p-4 rounded shadow hover:bg-gray-800 cursor-pointer overflow-hidden"
              onClick={() => playMusic(music.id)}
            >
              {music.image && (
                <img
                  src={`data:image/jpeg;base64,${music.image}`}
                  alt={`${music.title} Poster`}
                  className="w-full h-40 object-fit mb-4 rounded"
                />
              )}
              <p className="text-lg font-semibold text-white">{music.filename}</p>
              <p className="text-sm text-gray-300">Artist: {music.artist}</p>
              <p className="text-sm text-gray-300">Album: {music.album}</p>
              <p className="text-sm text-gray-300">Size: {music.size} MB</p>
            </li>
          ))}
        </ul>
        {currentMusic && (
          <div className="mt-40">
            <h3 className="text-lg font-bold mb-3 text-white">Now Playing:</h3>
            <div className='flex justify-center fixed bottom-12 left-20 right-20 shadow hover:bg-gray-200'>
              <audio id="audioPlayer" controls autoPlay className='w-full'>
                <source src={currentMusic} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicList;
