"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminNewPostPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState(["Minimalism", "Editorial"]);
  const [newTag, setNewTag] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [published, setPublished] = useState(false);

  const handleAddTag = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handlePublish = () => {
    if (!title) {
      alert("Please enter a title before publishing.");
      return;
    }
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setPublished(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md text-left w-full">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest border-b border-outline-variant h-20 flex items-center sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-full">
          <div className="flex items-center gap-stack-md">
            <Link className="font-headline-sm text-headline-sm font-semibold text-primary hover:opacity-80 transition-opacity" href="/">
              Rishika Shukla
            </Link>
            <span className="text-outline hidden md:inline">|</span>
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors hidden md:inline uppercase tracking-widest" href="/admin">
              Dashboard
            </Link>
          </div>
          <div className="flex items-center gap-stack-md">
            <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-low cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-8 w-8 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant">
              <img 
                alt="Profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt7Xzf2BmHe9Uem6Ci_ZZD34Rl-y7yBK2HrpxFc3-fHay6nR8SwVo2j4TxLtA9rafSqCQmaSjI3Yl3wJm-hjdxMqjmRFWEpOoUoh251HMMAg1thwARoYQbXrO79MC-BWaEa-B2R_-Z_9uJaFXt5C4Dusl8QdLuLqK249v6RPsXtxw4KFveYMqOcHkClWJZW9fP7QHMwPcyQpgw6h9tbcNnoBEpMmpx4YSGdRNdCUZQMn5JUbj_JThVBEJ0w1XXYQx_iYdjv850ZJau"
              />
            </div>
          </div>
        </div>
      </header>

      {published ? (
        <div className="flex-1 max-w-xl mx-auto flex flex-col justify-center items-center text-center p-gutter space-y-6">
          <span className="material-symbols-outlined text-6xl text-primary animate-bounce">check_circle</span>
          <h2 className="font-headline-md text-headline-md">Article Published!</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Your post <strong>"{title}"</strong> has been successfully published to the digital journal archive.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/admin"
              className="bg-surface-container text-on-surface border border-outline-variant px-6 py-3 rounded-full font-label-md text-label-md hover:bg-surface-container-high transition-colors"
            >
              Back to Dashboard
            </Link>
            <button 
              onClick={() => {
                setPublished(false);
                setTitle("");
                setCategory("");
              }}
              className="bg-primary text-on-primary px-6 py-3 rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors cursor-pointer"
            >
              Create Another Post
            </button>
          </div>
        </div>
      ) : (
        <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg md:py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-stack-lg">
            
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-stack-md">
              <div>
                <h1 className="font-headline-md text-headline-md text-on-surface mb-2">Create New Post</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">Drafting a new entry for the lifestyle journal.</p>
              </div>
              <div className="flex gap-stack-sm hidden md:flex">
                <Link 
                  href="/admin"
                  className="px-6 py-2 rounded border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors font-label-md text-label-md flex items-center justify-center"
                >
                  Save Draft
                </Link>
                <button 
                  onClick={handlePublish}
                  className="px-6 py-2 rounded bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-colors font-label-md text-label-md cursor-pointer"
                >
                  Publish
                </button>
              </div>
            </div>

            {/* Title Input */}
            <div className="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <input 
                className="w-full bg-transparent border-none focus:ring-0 font-headline-md text-headline-md text-on-surface placeholder:text-outline-variant p-0 mb-stack-md outline-none" 
                placeholder="Post Title..." 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="w-full h-px bg-outline-variant/50 mb-stack-md"></div>
              {/* Category Select (Minimal) */}
              <div className="flex items-center gap-stack-sm">
                <span className="material-symbols-outlined text-outline text-sm">folder</span>
                <select 
                  className="bg-transparent border-none focus:ring-0 font-body-md text-body-md text-on-surface-variant p-0 cursor-pointer outline-none"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option disabled value="">Select Category</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="travel">Travel</option>
                  <option value="design">Design</option>
                </select>
              </div>
            </div>

            {/* Rich Text Editor */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col h-[600px] overflow-hidden">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-2 p-stack-sm border-b border-outline-variant/50 bg-surface-container-low/50 rounded-t-xl">
                <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors cursor-pointer" title="Bold"><span className="material-symbols-outlined text-[20px]">format_bold</span></button>
                <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors cursor-pointer" title="Italic"><span className="material-symbols-outlined text-[20px]">format_italic</span></button>
                <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors cursor-pointer" title="Underline"><span className="material-symbols-outlined text-[20px]">format_underlined</span></button>
                <div className="w-px h-6 bg-outline-variant mx-1"></div>
                <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors cursor-pointer" title="Heading 1"><span className="material-symbols-outlined text-[20px]">format_h1</span></button>
                <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors cursor-pointer" title="Heading 2"><span className="material-symbols-outlined text-[20px]">format_h2</span></button>
                <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors cursor-pointer" title="Quote"><span className="material-symbols-outlined text-[20px]">format_quote</span></button>
                <div className="w-px h-6 bg-outline-variant mx-1"></div>
                <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors cursor-pointer" title="List"><span className="material-symbols-outlined text-[20px]">format_list_bulleted</span></button>
                <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors cursor-pointer" title="Numbered List"><span className="material-symbols-outlined text-[20px]">format_list_numbered</span></button>
                <div className="w-px h-6 bg-outline-variant mx-1"></div>
                <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors cursor-pointer" title="Link"><span className="material-symbols-outlined text-[20px]">link</span></button>
                <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors cursor-pointer" title="Image"><span className="material-symbols-outlined text-[20px]">image</span></button>
              </div>
              
              {/* Editor Area */}
              <div 
                className="flex-grow p-stack-lg outline-none font-body-md text-body-lg text-on-surface leading-relaxed rte-scroll overflow-y-auto bg-transparent focus:ring-0" 
                contentEditable="true"
                suppressContentEditableWarning={true}
              >
                <p className="text-on-surface-variant/60 italic">Start writing your editorial piece here...</p>
              </div>
            </div>

            {/* Mobile Actions (Visible only on mobile) */}
            <div className="flex gap-stack-sm md:hidden mt-stack-lg">
              <Link 
                href="/admin" 
                className="flex-1 px-4 py-3 rounded border border-outline-variant text-on-surface bg-surface-container-lowest font-label-md text-label-md text-center"
              >
                Save Draft
              </Link>
              <button 
                onClick={handlePublish}
                disabled={isPublishing}
                className="flex-1 px-4 py-3 rounded bg-primary text-on-primary font-label-md text-label-md cursor-pointer disabled:opacity-50"
              >
                {isPublishing ? "Publishing..." : "Publish"}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-stack-lg">
            
            {/* Publish Settings Card */}
            <div className="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-stack-md flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">publish</span> Publish
              </h3>
              <div className="space-y-stack-md mb-stack-lg">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface-variant">Status:</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold bg-surface-container px-2 py-1 rounded">Draft</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface-variant">Visibility:</span>
                  <select className="bg-transparent border-none focus:ring-0 font-label-md text-label-md text-on-surface p-0 cursor-pointer text-right text-primary outline-none">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="password">Password Protected</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface-variant">Publish:</span>
                  <button className="font-label-md text-label-md text-primary hover:underline cursor-pointer">Immediately</button>
                </div>
              </div>
              <button 
                onClick={handlePublish}
                disabled={isPublishing}
                className="w-full px-6 py-3 rounded bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-colors font-label-md text-label-md flex justify-center items-center gap-2 shadow-[0_4px_12px_rgba(183,0,82,0.2)] cursor-pointer disabled:opacity-50"
              >
                {isPublishing ? "Publishing..." : "Publish Now"}
              </button>
            </div>

            {/* Featured Image Card */}
            <div className="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-stack-md">Featured Image</h3>
              <div className="border-2 border-dashed border-outline-variant/50 rounded-lg p-stack-lg flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container-low/50 transition-colors group">
                <span className="material-symbols-outlined text-[40px] text-outline-variant mb-stack-sm group-hover:text-primary transition-colors">add_photo_alternate</span>
                <p className="font-label-md text-label-md text-on-surface-variant mb-1">Click to upload image</p>
                <p className="font-caption text-caption text-outline">Recommended size: 1200x630px</p>
              </div>
            </div>

            {/* Tags Card */}
            <div className="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-stack-md">Tags</h3>
              <div className="flex flex-wrap gap-2 mb-stack-md">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-md text-label-md rounded-full flex items-center gap-1">
                    {tag}
                    <button 
                      onClick={() => handleRemoveTag(tag)}
                      className="text-outline hover:text-error transition-colors cursor-pointer flex items-center"
                    >
                      <span className="material-symbols-outlined text-[14px]">close</span>
                    </button>
                  </span>
                ))}
              </div>
              <form onSubmit={handleAddTag} className="relative flex">
                <input 
                  className="w-full bg-surface-container-lowest border-b border-outline-variant focus:border-primary focus:ring-0 font-body-md text-body-md text-on-surface placeholder:text-outline-variant px-0 py-2 transition-colors outline-none" 
                  placeholder="Add a tag..." 
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-primary font-label-md text-label-md uppercase font-semibold cursor-pointer"
                >
                  Add
                </button>
              </form>
            </div>
          </aside>
        </main>
      )}
    </div>
  );
}
