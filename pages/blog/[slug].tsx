import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('content', 'blog'));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const file = fs.readFileSync(path.join('content', 'blog', `${slug}.md`), 'utf-8');
  const { data, content } = matter(file);
  const htmlContent = await remark().use(html).process(content);
  return { props: { data, content: htmlContent.toString() } };
}

export default function BlogPost({ data, content }) {
  return (
    <div className="prose mx-auto mt-10">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
