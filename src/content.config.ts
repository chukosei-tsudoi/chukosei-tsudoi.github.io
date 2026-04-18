import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // glob ローダーをインポート

const posts = defineCollection({
  // globを使ってpostsフォルダ内のmdファイルを指定します
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), // 文字列を日付オブジェクトに変換
    tag: z.string(),
  }),
});

export const collections = { posts };