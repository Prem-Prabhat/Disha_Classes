import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VideoCard = ({ videoId, title, description }: { videoId: string; title: string; description: string; }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <Card className="w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="aspect-video bg-black relative group">
                {isPlaying ? (
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <>
                        <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                            onClick={handlePlay}
                        >
                            <PlayCircle className="w-20 h-20 text-white/80 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
                        </div>
                    </>
                )}
            </div>
            <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </CardContent>
        </Card>
    );
};

export default VideoCard;