/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 必须添加：将项目转为静态网页格式
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // 必须添加：禁用 Next.js 的图片优化
  },
  basePath: '/v0-designer-brand-tk', // 必须添加：匹配你的 GitHub 仓库名
};

export default nextConfig;
