import React, { useEffect, useState } from 'react';

const MusicPlayer = ({ music, onClose }) => {
    const [audioUrl, setAudioUrl] = useState(null);

    useEffect(() => {
        const fetchAudio = async () => {
            try {
                const response = await fetch(`http://localhost:8080/musicFiles/${music.id}`);
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setAudioUrl(url);
            } catch (error) {
                console.error('Error fetching audio file:', error);
            }
        };

        fetchAudio();

        // Cleanup the object URL when the component unmounts
        return () => {
            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
            }
        };
    }, [music.id]);

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex items-center p-4"
            style={{ width: '80%', margin: '0 auto' }}>
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                &times;
            </button>
            <div className="flex items-center">
                {music.image && (
                    <img
                        src={`data:image/jpeg;base64,${music.image}`}
                        alt={`${music.title} poster`}
                        className="w-24 h-24 object-cover rounded-full mr-4 animate-spin-slow"
                    />
                )}
                <div className="flex-grow">
                    <h2 className="text-xl font-bold mb-2">{music.title}</h2>
                    {audioUrl && (
                        <audio controls className="w-full">
                            <source src={audioUrl} type={music.contentType} />
                            Your browser does not support the audio element.
                        </audio>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
