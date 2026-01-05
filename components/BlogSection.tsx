
import React from 'react';
import { BLOGS } from '../constants';

const BlogSection: React.FC = () => {
  return (
    <section id="latest" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Latest Intelligence</h2>
          <a href="#latest" className="text-sm text-text-secondary hover:text-primary-cyan transition-colors underline underline-offset-8">View all articles</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BLOGS.map((blog, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="mb-4 text-[10px] tracking-widest uppercase font-bold text-primary-purple">
                {blog.tag} — {blog.date}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-cyan transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <div className="h-0.5 w-12 bg-border group-hover:w-full group-hover:bg-primary-cyan transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
