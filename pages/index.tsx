import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo title="我的个人博客" description="展示我的前端开发与设计经验" />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">欢迎来到我的个人博客</h1>
        <p className="text-lg text-gray-600">
          在这里，我分享我的项目经验与技术文章。
        </p>
      </div>
    </>
  );
}
