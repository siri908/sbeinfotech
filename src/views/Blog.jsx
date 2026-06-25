import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import SEO from '../components/SEO';

// Replace this with your actual domain when ready!
// Example: https://api.yourdomain.com/wp-json/wp/v2
// const WP_API_URL = 'https://public-api.wordpress.com/wp/v2/sites/en.blog.wordpress.com';
const WP_API_URL = 'https://sbeinfotech.in/wp/wp-json/wp/v2';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${WP_API_URL}/posts?per_page=9&_embed`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Blog | SB Enterprises"
        description="Read the latest news and updates from SB Enterprises."
        keywords="blog, news, updates, sb enterprises"
      />

      {/* Header Section */}
      <section className="py-20 md:py-14 bg-brand-bg-muted border-b border-brand-border">
        <div className="w-full max-w-[1280px] mx-auto px-6 text-center">
          <span className="inline-flex items-center px-[0.85rem] py-[0.35rem] text-[0.75rem] font-semibold tracking-wider uppercase rounded-full mb-5 bg-brand-accent-light text-brand-accent">
            Latest News
          </span>
          <h1 className="text-[2.5rem] sm:text-[3.5rem] font-extrabold leading-[1.1] text-brand-primary tracking-tight mb-6">
            Our Blog
          </h1>
          <p className="text-[1.15rem] text-gray-500 max-w-[600px] mx-auto">
            Insights, updates, and news from our team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-accent"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-500">
              <p>Error loading posts: {error}</p>
              <p className="text-sm mt-2">Please ensure your WordPress API is accessible.</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p>No posts found. Start writing in your WordPress dashboard!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                // Extract featured image if available (depends on API structure)
                let imageUrl = null;
                if (post.featured_media && post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
                  imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
                } else if (post.post_thumbnail?.URL) { // Format for public-api.wordpress.com
                  imageUrl = post.post_thumbnail.URL;
                }

                // Format Date
                const date = new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                });

                return (
                  <Link
                    to={`/blog/${post.id}`}
                    key={post.id}
                    className="group bg-white border border-brand-border rounded-xs overflow-hidden transition-all duration-250 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:border-brand-primary-light no-underline"
                  >
                    {imageUrl && (
                      <div className="aspect-[16/10] bg-brand-bg-muted overflow-hidden relative border-b border-brand-border">
                        <img
                          src={imageUrl}
                          alt={post.title.rendered || 'Blog post image'}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-[0.75rem] font-semibold text-gray-500 uppercase tracking-widest mb-3">
                        <Calendar size={14} />
                        <span>{date}</span>
                      </div>
                      <h3
                        className="text-[1.25rem] font-semibold text-brand-primary mb-3 leading-tight group-hover:text-brand-accent transition-colors duration-200"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered || post.title }}
                      />
                      <div
                        className="text-[0.95rem] text-gray-500 mb-6 flex-grow line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered || post.excerpt }}
                      />
                      <span className="text-[0.8rem] font-semibold tracking-wider text-brand-accent uppercase inline-flex items-center gap-2 mt-auto">
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
