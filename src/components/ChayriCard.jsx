import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, User } from 'lucide-react';

const ChayriCard = ({ chayri }) => {
  const { text, author, date, tags, isLeft } = chayri;

  return (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} mb-6`}>
      <div className={`max-w-md ${isLeft ? 'chat-bubble-left' : 'chat-bubble-right'} p-6`}>
        {/* Author */}
        <div className="flex items-center mb-3">
          <User className="h-4 w-4 text-amber-600 mr-2" />
          <span className="text-sm font-semibold text-amber-800 devanagari-text">{author}</span>
        </div>

        {/* Shayari Text */}
        <div className="mb-4">
          <p className="text-amber-900 leading-relaxed whitespace-pre-line devanagari-text text-lg">
            {text}
          </p>
        </div>

        {/* Date and Tags */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-amber-600">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span className="devanagari-text">{new Date(date).toLocaleDateString('hi-IN')}</span>
          </div>
          
          {tags.map((tag, index) => (
            <div key={index} className="flex items-center bg-amber-200 px-2 py-1 rounded-full">
              <Tag className="h-3 w-3 mr-1" />
              <span className="devanagari-text">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChayriCard;