import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Coffee, Heart, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { toast } from '../components/ui/use-toast';
import ChayriCard from '../components/ChayriCard';
import SearchFilter from '../components/SearchFilter';
import image from '/HeadImage.jpg'

const HomePage = () => {
  const [chayris, setChayris] = useState([]);
  const [filteredChayris, setFilteredChayris] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    fetch('/chayri.json')
      .then(res => res.json())
      .then(data => setChayris(data))
      .catch(err => {
        // Optionally show toast
        console.error('Error loading chayri.json:', err);
      });
  }, []);

  useEffect(() => {
    let filtered = chayris;
    if (searchTerm) {
      filtered = filtered.filter(chayri =>
        chayri.text.includes(searchTerm) || chayri.author.includes(searchTerm)
      );
    }
    if (selectedTag) {
      filtered = filtered.filter(chayri => chayri.tags.includes(selectedTag));
    }
    setFilteredChayris(filtered);
  }, [chayris, searchTerm, selectedTag]);

  const loadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  const allTags = [...new Set(chayris.flatMap(chayri => chayri.tags))];

  return <div className="min-h-screen">
    <section className="bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
          <Coffee className="h-16 w-16 text-amber-700 mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-amber-900 mb-4 devanagari-text">चायरी</h1>
          <p className="text-xl text-amber-800 mb-8 devanagari-text">मेरे आदरणीय अशोक जैन साहब ने स्टेट बैंक ऑफ इन्दौर से रिटायर्ड बंधुओं का एक ग्रुप बनाया । नियमानुकूल इस ग्रुप में पोस्ट की जाने वाली सामग्री "गैर-राजनैतिक, व्यक्तिगत आक्षेपों से दूर,  शालीनता युक्त आलेखों, रचनाओं, बौद्धिक विवेचनाओं, बैंक के खट्टे मीठे अनुभव, नये डेवलपमेंट ओर हल्के फुल्के हास्य से सज्जित हो" ।
            इस ग्रुप में हर प्रकार की साहित्यिक-सांस्कृतिक  विधाओं के अनुभवी मित्र और लेखिका बहनें बडी शिद्दत से जुडी ओर इस उंचाईयों को छूते समूह को सभी से महती प्रशंसा मिल रही है । 
            इसी कडी में आदरणीय जैन साहब ने हर दिन दोपहर में "चायरी" पोस्ट करना शुरू किया । मैने सोचा कि क्यों न जैन साहब के साथ  कदमताल करते हुए चायरी का जवाब शायरी में पेश किया जाए । सिलसिला शुरू हुआ और प्रतिदिन "चायरीओर शायरी" पोस्ट  होने लगी । मेरे पोते हर्ष ने कहा "दद्दूजी मैं आपकी ओर जैन अंकल की ये "चायरी-शायरी" को  संकलित करना चाहता हूं । मैने सहज ही अनुमति दे दी । प्रिय हर्ष ने संकलन शुरू किया ओर बहुत सुन्दर पुस्तिका के रूप में इसे सहेजा है । 
            पहले आदरणीय अशोक जैन साहब की "चायरी" और सामने ही मेरी (लेखराज सकलेचा)  जवाबी शायरी, का संयोजन है । ये विभिन्न स्त्रोतों  से लिये गए उदाहरण/उद्धरण की तुकबंदी है ।
          </p>
	
          <div className="flex justify-center mb-8">
          <img
            className="w-64 h-256 rounded-xl shadow-lg object-cover border-4 border-amber-300"
            alt="चायरी मुख्य तस्वीर"
            src="/HeadImage.jpg"
          />
          </div>


        </motion.div>
      </div>
    </section>

    {/* Search and Filter Section */}
    <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedTag={selectedTag} setSelectedTag={setSelectedTag} allTags={allTags} />

    {/* Chayri Feed */}
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {filteredChayris.slice(0, visibleCount).map((chayri, index) => <motion.div key={chayri.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
          <ChayriCard chayri={chayri} />
        </motion.div>)}
      </div>

      {visibleCount < filteredChayris.length && <div className="text-center mt-8">
        <Button onClick={loadMore} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full devanagari-text">
          और चायरी देखें
        </Button>
      </div>}

      {filteredChayris.length === 0 && <div className="text-center py-16">
        <Coffee className="h-16 w-16 text-amber-400 mx-auto mb-4" />
        <p className="text-xl text-amber-700 devanagari-text">कोई चायरी नहीं मिली</p>
      </div>}
    </section>
  </div>;
};

export default HomePage;

