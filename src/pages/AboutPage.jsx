import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Coffee, BookOpen } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Users className="h-12 w-12 text-amber-700 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-amber-900 mb-4 devanagari-text">हमारे बारे में</h1>
          <p className="text-lg text-amber-700 devanagari-text">
            चाय और शायरी के इस अनूठे सफर की कहानी
          </p>
        </motion.div>

        {/* Dada Ji Section */}
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img className="w-32 h-32 rounded-full border-4 border-amber-300 shadow-lg" alt="दादा जी" src="https://images.unsplash.com/photo-1648157744127-80a51f63e45a" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4 devanagari-text">दादा जी</h2>
              <p className="text-amber-700 leading-relaxed devanagari-text">
                हमारे प्यारे दादा जी, जिनकी उम्र 78 साल है, शायरी के बहुत शौकीन हैं। 
                पिछले 50 सालों से वे अपने दिल की बात को शायरी के रूप में कहते आए हैं। 
                चाय उनकी जिंदगी का अहम हिस्सा है और हर चाय के साथ एक नई शायरी का जन्म होता है।
                उनकी शायरी में जीवन के अनुभव, खुशियाँ, गम, और दोस्ती की मिठास झलकती है।
              </p>
            </div>
          </div>
        </motion.section>

        {/* Friend Section */}
        <motion.section
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 bg-gradient-to-l from-yellow-100 to-amber-100 rounded-lg p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <img className="w-32 h-32 rounded-full border-4 border-yellow-300 shadow-lg" alt="मित्र जी" src="https://images.unsplash.com/photo-1635366544213-e09abf974aa6" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4 devanagari-text">मित्र जी</h2>
              <p className="text-amber-700 leading-relaxed devanagari-text">
                दादा जी के सबसे अच्छे मित्र, जो पिछले 40 सालों से उनके साथ हैं। 
                वे भी शायरी के शौकीन हैं और दादा जी की हर शायरी का बेहतरीन जवाब देते हैं। 
                उनकी दोस्ती चाय के कप से शुरू हुई थी और आज भी चाय के साथ ही उनकी शायरी चलती है।
                उनके जवाब में हमेशा प्रेम, सम्मान और गहरी दोस्ती की भावना होती है।
              </p>
            </div>
          </div>
        </motion.section>

        {/* Project Purpose */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg p-8 shadow-lg"
        >
          <div className="text-center">
            <Coffee className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-amber-800 mb-4 devanagari-text">इस प्रोजेक्ट का उद्देश्य</h2>
            <p className="text-amber-700 leading-relaxed devanagari-text">
              पिछले 3-4 सालों में दादा जी और उनके मित्र ने 500 से ज्यादा "चायरी" लिखी हैं। 
              ये सभी शायरी चाय के साथ जुड़ी हुई हैं और इनमें जीवन की सच्चाई, दोस्ती का प्यार, 
              और बुजुर्गों की अनुभवी बातें हैं। हमारा मकसद इन अनमोल शायरियों को संरक्षित करना 
              और आने वाली पीढ़ियों के लिए सुरक्षित रखना है। यह वेबसाइट उनकी मेहनत और प्रेम का सम्मान है।
            </p>
          </div>
        </motion.section>

        {/* About Creator */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8 shadow-lg"
        >
          <div className="text-center">
            <BookOpen className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-amber-800 mb-4 devanagari-text">वेबसाइट निर्माता</h2>
            <p className="text-amber-700 leading-relaxed devanagari-text">
              मैं दादा जी का पोता/पोती हूँ और उनकी शायरी से बहुत प्रभावित हूँ। 
              उनकी और उनके मित्र की इन अनमोल रचनाओं को डिजिटल रूप में संरक्षित करने के लिए 
              मैंने यह वेबसाइट बनाई है। मेरा सपना है कि ये शायरी हमेशा के लिए सुरक्षित रहें 
              और लोग इन्हें पढ़कर चाय और दोस्ती के महत्व को समझें। यह मेरी तरफ से दादा जी 
              और उनके मित्र को एक छोटा सा उपहार है।
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;