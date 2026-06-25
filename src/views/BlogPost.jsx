import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import SEO from '../components/SEO';

// Make sure this matches the WP_API_URL in Blog.jsx
// const WP_API_URL = 'https://public-api.wordpress.com/wp/v2/sites/en.blog.wordpress.com';
const WP_API_URL = 'https://sbeinfotech.in/wp/wp-json/wp/v2';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${WP_API_URL}/posts/${id}?_embed`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (loading) {
    return (
      <div className="bg-white min-h-[60vh] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-accent"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-white min-h-[60vh] flex flex-col justify-center items-center px-6 text-center">
        <h2 className="text-2xl font-bold text-brand-primary mb-4">Post not found</h2>
        <p className="text-gray-500 mb-8">{error || "The article you're looking for doesn't exist or couldn't be loaded."}</p>
        <button 
          onClick={() => navigate('/blog')}
          className="inline-flex items-center justify-center px-6 py-3 text-[0.95rem] font-medium rounded-xs bg-brand-primary text-white hover:bg-brand-primary-light transition-all"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </button>
      </div>
    );
  }

  // Extract featured image
  let imageUrl = null;
  if (post.featured_media && post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  } else if (post.post_thumbnail?.URL) {
    imageUrl = post.post_thumbnail.URL;
  }

  // Format Date
  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="bg-white min-h-screen pb-20">
      <SEO 
        title={`${post.title.rendered || post.title} | SB Enterprises`}
        description={post.excerpt.rendered ? post.excerpt.rendered.replace(/<[^>]+>/g, '') : "Read this article on SB Enterprises"}
      />
      
      {/* Article Header */}
      <header className="pt-20 pb-12 bg-brand-bg-muted border-b border-brand-border">
        <div className="w-full max-w-[800px] mx-auto px-6 text-center">
          <Link to="/blog" className="inline-flex items-center text-[0.85rem] font-semibold tracking-wider text-brand-accent uppercase hover:text-brand-primary transition-colors mb-8 no-underline">
            <ArrowLeft size={16} className="mr-2" /> Back to all posts
          </Link>
          
          <div className="flex items-center justify-center gap-2 text-[0.85rem] font-semibold text-gray-500 uppercase tracking-widest mb-6">
            <Calendar size={14} />
            <time dateTime={post.date}>{date}</time>
          </div>
          
          <h1 
            className="text-[2rem] sm:text-[3rem] font-extrabold leading-[1.1] text-brand-primary tracking-tight mb-8"
            dangerouslySetInnerHTML={{ __html: post.title.rendered || post.title }}
          />

          <div className="flex justify-center border-t border-brand-border pt-6 mt-8">
            <button 
              className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-gray-500 hover:text-brand-primary cursor-pointer transition-colors bg-transparent border-none p-0"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title.rendered || post.title,
                    url: window.location.href
                  });
                }
              }}
            >
              <Share2 size={16} /> Share Article
            </button>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {imageUrl && (
        <div className="w-full max-w-[1000px] mx-auto px-6 -mt-10 mb-14 relative z-10">
          <img 
            src={imageUrl} 
            alt={post.title.rendered || 'Featured Image'} 
            className="w-full h-auto max-h-[500px] object-cover rounded-md shadow-xl border border-brand-border"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="w-full max-w-[800px] mx-auto px-6">
        <div 
          className="prose prose-lg max-w-none prose-headings:text-brand-primary prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline prose-img:rounded-md prose-img:shadow-md prose-hr:border-brand-border"
          dangerouslySetInnerHTML={{ __html: post.content.rendered || post.content }}
        />
      </div>
    </article>
  );
}
