import type { APIRoute } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { getAllPosts } from '../../../lib/sanity';
import fs from 'node:fs';
import path from 'node:path';

// ── Static Generator ────────────────────────────────────────────────────────
export const prerender = true;

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts.map((post: any) => ({
    params: { slug: post.slug.current },
    props: { post },
  }));
}

// ── Brand colours ────────────────────────────────────────────────────────────
const B = {
  bgFrom: '#1a3a6b',
  bgTo: '#2a5298',
  gold: '#f5a623',
  goldLt: '#fbbf24',
  white: '#ffffff',
  navy: '#1a3a6b',
  w70: 'rgba(255,255,255,0.70)',
  w20: 'rgba(255,255,255,0.18)',
  w10: 'rgba(255,255,255,0.10)',
} as const;

// ── Asset Loaders (Logo + Fonts) ─────────────────────────────────────────────
function getAsset(filePath: string) {
  const root = process.cwd();
  const fullPath = path.join(root, filePath);
  return fs.readFileSync(fullPath);
}

function getLogoBase64() {
  try {
    const buffer = getAsset('src/assets/logo.png');
    return `data:image/png;base64,${buffer.toString('base64')}`;
  } catch (e) {
    console.warn('[OG/blog] Logo not found at src/assets/logo.png');
    return null;
  }
}

function getFonts() {
  return {
    regular: getAsset('node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'),
    bold: getAsset('node_modules/@fontsource/inter/files/inter-latin-700-normal.woff'),
  };
}

// ── Helper ───────────────────────────────────────────────────────────────────
function clip(s: string, n: number) {
  if (!s) return '';
  return s.length > n ? s.slice(0, n - 1) + '…' : s;
}

function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric',
    });
  } catch {
    return '';
  }
}

// ── OG layout ─────────────────────────────────────────────────────────────
function layout(
  title: string,
  excerpt: string,
  category: string,
  author: string,
  publishedAt: string,
  logoBase64: string | null,
) {
  const t = clip(title, 68);
  const ex = clip(excerpt || '', 105);
  const dt = fmtDate(publishedAt);
  const ini = (author || 'A')[0].toUpperCase();

  return {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: 1200,
        height: 630,
        background: `linear-gradient(135deg, ${B.bgFrom} 0%, ${B.bgTo} 100%)`,
        fontFamily: 'Inter',
      },
      children: [
        // ── WHITE HEADER (LOGO AT TOP) ────────────────────────────────
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 1200,
              height: 140,
              background: B.white,
              padding: '0 84px',
              borderBottom: `6px solid ${B.gold}`, // Brand accent line
            },
            children: [
              // Logo
              logoBase64 ? {
                type: 'img',
                props: { src: logoBase64, style: { height: '62px' } }
              } : {
                type: 'span',
                props: { style: { fontSize: 24, fontWeight: 800, color: B.navy }, children: 'AtoZ Business' }
              },

              // BLOG Badge
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex', alignItems: 'center',
                    padding: '10px 24px', borderRadius: 999,
                    background: B.bgFrom,
                    fontSize: 14, fontWeight: 700, color: B.white, letterSpacing: 2,
                  },
                  children: 'BLOG',
                },
              },
            ]
          }
        },

        // ── CONTENT AREA ──────────────────────────────────────────────
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: 1200,
              flex: 1, // Fills the rest
              padding: '0 84px',
            },
            children: [
              // Category
              category ? {
                type: 'div',
                props: {
                  style: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 },
                  children: [
                    { type: 'div', props: { style: { width: 10, height: 10, borderRadius: 5, background: B.gold } } },
                    { type: 'span', props: { style: { fontSize: 16, fontWeight: 700, color: B.gold, letterSpacing: 1.5 }, children: category.toUpperCase() } },
                  ],
                },
              } : null,

              // Title
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: t.length > 50 ? 44 : 54,
                    fontWeight: 700, color: B.white, lineHeight: 1.2,
                  },
                  children: t,
                },
              },

              // Excerpt
              ex ? {
                type: 'div',
                props: {
                  style: { fontSize: 20, color: B.w70, lineHeight: 1.6, marginTop: 24 },
                  children: ex,
                },
              } : null,

              // Bottom Info (Author + Website)
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    marginTop: 40, paddingTop: 30, borderTop: `1px solid ${B.w10}`,
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: { display: 'flex', alignItems: 'center', gap: 14 },
                        children: [
                          {
                            type: 'div',
                            props: {
                              style: {
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: 44, height: 44, borderRadius: 22,
                                background: B.gold, fontSize: 18, fontWeight: 700, color: B.navy,
                              },
                              children: ini,
                            },
                          },
                          { type: 'span', props: { style: { fontSize: 18, color: B.white, fontWeight: 600 }, children: author } }
                        ]
                      }
                    },
                    { type: 'span', props: { style: { fontSize: 18, color: B.w70, fontWeight: 700 }, children: 'atozbusiness.ae' } }
                  ]
                }
              }
            ].filter(Boolean),
          },
        },
      ],
    },
  };
}

// ── Route handler ─────────────────────────────────────────────────────────────
export const GET: APIRoute = async ({ props }) => {
  const { post } = props;

  try {
    const title = post.title ?? 'Blog Post';
    const excerpt = post.excerpt ?? post.metaDescription ?? '';
    const category = post.category?.title ?? (typeof post.category === 'string' ? post.category : '');
    const author = post.author?.name ?? 'AtoZ Team';
    const publishedAt = post.publishedAt ?? '';

    const fonts = getFonts();
    const logoBase64 = getLogoBase64();

    const svg = await satori(
      layout(title, excerpt, category, author, publishedAt, logoBase64) as any,
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: 'Inter', data: fonts.regular, weight: 400, style: 'normal' },
          { name: 'Inter', data: fonts.bold, weight: 700, style: 'normal' },
        ],
      }
    );

    const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
    const pngBuf = resvg.render().asPng();

    return new Response(new Uint8Array(pngBuf), {
      status: 200,
      headers: { 'Content-Type': 'image/png' },
    });

  } catch (err: any) {
    console.error(`[OG/blog] CRITICAL ERROR:`, err);
    return new Response(`OG Error: ${err?.message}`, { status: 500 });
  }
};
