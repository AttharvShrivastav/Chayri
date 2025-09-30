import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from './ui/button';  // updated import path

const SearchFilter = ({ searchTerm, setSearchTerm, selectedTag, setSelectedTag, allTags }) => {
  return (
    <section className="bg-gradient-to-r from-orange-100 to-yellow-100 py-8 border-b border-amber-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
            <input
              type="text"
              placeholder="चायरी खोजें..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white devanagari-text"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-600 hover:text-amber-800"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Tag Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-amber-600" />
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white devanagari-text"
            >
              <option value="">सभी टैग</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag} className="devanagari-text">
                  {tag}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {(searchTerm || selectedTag) && (
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedTag('');
              }}
              variant="outline"
              className="border-amber-300 text-amber-700 hover:bg-amber-50 devanagari-text"
            >
              साफ़ करें
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
