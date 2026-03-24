import type { APIRoute } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { sanityClient } from '../../../lib/sanity';
import { allLandingPagesQuery } from '../../../lib/queries';
import fs from 'node:fs';
import path from 'node:path';

// ── Static Generator ────────────────────────────────────────────────────────
export const prerender = true;

export async function getStaticPaths() {
  const landingPages = await sanityClient.fetch(allLandingPagesQuery);
  return landingPages.map((page: any) => ({
    params: { slug: page.slug.current },
    props: { page },
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

// ── Asset Loaders ────────────────────────────────────────────────────────────
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
    return null;
  }
}

function getFonts() {
  return {
    regular: getAsset('node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'),
    bold: getAsset('node_modules/@fontsource/inter/files/inter-latin-700-normal.woff'),
  };
}

// ── Slug/Headline → Targeted Accent ──────────────────────────────────────────
const KEYWORD_MAPPING: [string, { color: string; icon: string; label: string }][] = [
  ['visa', { color: '#10b981', icon: '✈', label: 'VISA' }],
  ['residency', { color: '#10b981', icon: '✈', label: 'RESIDENCY' }],
  ['golden', { color: '#f59e0b', icon: '★', label: 'GOLDEN' }],
  ['business', { color: '#3b82f6', icon: '■', label: 'BUSINESS' }],
  ['company', { color: '#3b82f6', icon: '■', label: 'COMPANY' }],
  ['typing', { color: '#8b5cf6', icon: '◈', label: 'TYPING' }],
  ['pro', { color: '#f59e0b', icon: '★', label: 'PRO' }],
];

function getTargetedAccent(slug: string, headline: string) {
  const text = `${slug} ${headline}`.toLowerCase();
  for (const [k, v] of KEYWORD_MAPPING) {
    if (text.includes(k)) return v;
  }
  return { color: B.gold, icon: '✓', label: 'LANDING PAGE' };
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const clip = (s: string, n: number) => (s && s.length > n ? s.slice(0, n - 1) + '…' : s || '');

// ── HTML Layout (as Satori Object) ────────────────────────────────────────────
function layout(page: any, logoBase64: string | null) {
  const accent = getTargetedAccent(page.slug.current, page.mainHeadline);
  const title = clip(page.mainHeadline, 60);
  const sub = clip(page.subHeadline || '', 100);
  // Get first 3 benefits
  const benefits = (page.benefits || []).slice(0, 3).map((b: any) => clip(b.text, 40));

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
              borderBottom: `6px solid ${accent.color}`,
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

              // OFFER Badge
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex', alignItems: 'center',
                    padding: '10px 24px', borderRadius: 999,
                    background: accent.color,
                    fontSize: 14, fontWeight: 700, color: B.white, letterSpacing: 2,
                  },
                  children: accent.label,
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
              flex: 1,
              padding: '0 84px',
            },
            children: [
              // Headline + Icon
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex', alignItems: 'center', gap: 20,
                    marginBottom: 24,
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 60, height: 60, borderRadius: 12, background: B.w10, color: accent.color, fontSize: 36,
                        },
                        children: accent.icon,
                      },
                    },
                    {
                      type: 'span',
                      props: {
                        style: {
                          fontSize: title.length > 40 ? 44 : 52,
                          fontWeight: 700, color: B.white, lineHeight: 1.1, flex: 1,
                        },
                        children: title,
                      }
                    }
                  ]
                },
              },

              // Sub-Headline
              sub ? {
                type: 'div',
                props: {
                  style: { fontSize: 20, color: B.w70, lineHeight: 1.5, marginBottom: 36, paddingRight: 60 },
                  children: sub,
                },
              } : null,

              // Benefits Grid
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    marginTop: 'auto', paddingTop: 30, borderTop: `1px solid ${B.w10}`,
                    marginBottom: 40,
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: { display: 'flex', gap: 14 },
                        children: (benefits.length > 0 ? benefits : ['Fast Processing', 'Expert Team']).map((f: string) => ({
                          type: 'div',
                          props: {
                            style: { padding: '10px 20px', borderRadius: 999, background: B.w10, fontSize: 16, color: B.white, fontWeight: 500 },
                            children: `✓ ${f}`,
                          }
                        }))
                      }
                    },
                    { type: 'span', props: { style: { fontSize: 20, color: B.w70, fontWeight: 700 }, children: 'atozbusiness.ae' } }
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
  const { page } = props;

  try {
    const fonts = getFonts();
    const logoBase64 = getLogoBase64();

    // Render SVG
    const svg = await satori(
      layout(page, logoBase64) as any,
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: 'Inter', data: fonts.regular, weight: 400, style: 'normal' },
          { name: 'Inter', data: fonts.bold, weight: 700, style: 'normal' },
        ],
      }
    );

    // Render PNG
    const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
    const pngBuf = resvg.render().asPng();

    return new Response(new Uint8Array(pngBuf), {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable'
      },
    });

  } catch (err: any) {
    console.error(`[OG/lp] ERROR:`, err);
    return new Response(`OG Error: ${err?.message}`, { status: 500 });
  }
};
