import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { toast } from '../components/ui/Use-toast';

const GalleryPage = () => {
  const handleVideoClick = () => {
    toast({
      title: "🚧 यह फीचर अभी तक तैयार नहीं है",
      description: "लेकिन चिंता न करें! आप अपने अगले संदेश में इसे मांग सकते हैं! 🚀"
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Camera className="h-12 w-12 text-amber-700 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-amber-900 mb-4 devanagari-text">गैलरी</h1>
          <p className="text-lg text-amber-700 devanagari-text">
            दादा जी और मित्र जी के चाय के खूबसूरत पल
          </p>
        </motion.div>

        {/* Photo Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-amber-800 mb-6 devanagari-text">तस्वीरें</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img 
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105" 
                  alt={`चाय की तस्वीर ${index}`}
                  src="https://images.unsplash.com/photo-1674669031656-a5a29f128c5d" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <Heart className="h-5 w-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section>
          <h2 className="text-2xl font-semibold text-amber-800 mb-6 devanagari-text">वीडियो</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 text-center shadow-lg"
              >
                <Video className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-amber-800 mb-2 devanagari-text">
                  {index === 1 ? "दादा जी की शायरी" : "चाय बनाने की कला"}
                </h3>
                <p className="text-amber-700 mb-4 devanagari-text">
                  {index === 1 
                    ? "दादा जी अपनी मधुर आवाज़ में शायरी सुनाते हुए"
                    : "पारंपरिक तरीके से चाय बनाने की विधि"
                  }
                </p>
                <Button 
                  onClick={handleVideoClick}
                  className="bg-amber-600 hover:bg-amber-700 text-white devanagari-text"
                >
                  वीडियो देखें
                </Button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GalleryPage;
