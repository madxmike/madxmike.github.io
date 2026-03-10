import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const allPosts = await getCollection('blog');
  const publishedPosts = allPosts.filter(post => !post.data.draft);
  
  return rss({
    title: 'Michael Epps Blog',
    description: 'Personal blog by Michael Epps covering web development and software engineering',
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/articles/${post.id}/`,
      categories: post.data.tags || [],
    })),
  });
}
