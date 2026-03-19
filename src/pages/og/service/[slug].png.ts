import type { APIRoute } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { sanityClient } from '../../../lib/sanity';
import { servicesQuery } from '../../../lib/queries';
import fs from 'node:fs';
import path from 'node:path';

// ── Static Generator ────────────────────────────────────────────────────────
export const prerender = true;

export async function getStaticPaths() {
  const services = await sanityClient.fetch(servicesQuery);
  return services.map((service: any) => ({
    params: { slug: service.slug.current },
    props: { service },
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
    return null;
  }
}

function getFonts() {
  return {
    regular: getAsset('node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'),
    bold: getAsset('node_modules/@fontsource/inter/files/inter-latin-700-normal.woff'),
  };
}

// ── Category → accent colour ──────────────────────────────────────────────────
const CAT_COLORS: [string, string][] = [
  ['visa', '#10b981'],
  ['residency', '#10b981'],
  ['golden', '#f59e0b'],
  ['business', '#3b82f6'],
  ['company', '#3b82f6'],
  ['typing', '#8b5cf6'],
  ['pro', '#f59e0b'],
  ['attestation', '#ef4444'],
  ['legal', '#ef4444'],
];

function catColor(cat: string) {
  const lc = (cat || '').toLowerCase();
  for (const [k, c] of CAT_COLORS) if (lc.includes(k)) return c;
  return B.gold;
}

// ── Service → plain text icon ─────────────────────────────────────────────────
const ICONS: [string, string][] = [
  ['golden', '★'],
  ['family', '♥'],
  ['company', '■'],
  ['business', '■'],
  ['trade', '◆'],
  ['tamm', '◉'],
  ['attestation', '✦'],
  ['typing', '◈'],
  ['visa', '✈'],
  ['pro', '★'],
];

function svcIcon(title: string): string {
  const lc = title.toLowerCase();
  for (const [k, ic] of ICONS) if (lc.includes(ic)) return ic;
  return '✓';
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const clip = (s: string, n: number) => (s && s.length > n ? s.slice(0, n - 1) + '…' : s || '');

// ── Layout ────────────────────────────────────────────────────────────────────
function layout(title: string, excerpt: string, category: string, logoBase64: string | null) {
  const t = clip(title, 54);
  const ex = clip(excerpt || '', 110);
  const cc = catColor(category);
  const ic = svcIcon(title);

  const features = ['Fast Processing', 'Expert Team', 'Abu Dhabi'];

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

              // SERVICE Badge
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex', alignItems: 'center',
                    padding: '10px 24px', borderRadius: 999,
                    background: cc,
                    fontSize: 14, fontWeight: 700, color: B.white, letterSpacing: 2,
                  },
                  children: 'SERVICE',
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
                    { type: 'div', props: { style: { width: 10, height: 10, borderRadius: 5, background: cc } } },
                    { type: 'span', props: { style: { fontSize: 16, fontWeight: 700, color: cc, letterSpacing: 1.5 }, children: category.toUpperCase() } },
                  ],
                },
              } : null,

              // Title
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex', alignItems: 'center', gap: 20,
                    fontSize: t.length > 40 ? 44 : 54,
                    fontWeight: 700, color: B.white, lineHeight: 1.25,
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 50, height: 50, borderRadius: 10, background: B.w10, color: B.gold, fontSize: 32,
                        },
                        children: ic,
                      },
                    },
                    { type: 'span', props: { children: t } }
                  ]
                },
              },

              // Excerpt
              ex ? {
                type: 'div',
                props: {
                  style: { fontSize: 19, color: B.w70, lineHeight: 1.6, marginTop: 24, paddingRight: 40 },
                  children: ex,
                },
              } : null,

              // Bottom Info (Features + Website)
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
                        style: { display: 'flex', gap: 14 },
                        children: features.map(f => ({
                          type: 'div',
                          props: {
                            style: { padding: '8px 18px', borderRadius: 999, background: B.w10, fontSize: 14, color: B.w70 },
                            children: f,
                          }
                        }))
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
  const { service } = props;

  try {
    const title = service.title ?? 'Service';
    const excerpt = service.excerpt ?? service.metaDescription ?? '';
    const category = service.category ?? '';

    // Load static assets
    const fonts = getFonts();
    const logoBase64 = getLogoBase64();

    // Render SVG
    const svg = await satori(
      layout(title, excerpt, category, logoBase64) as any,
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
      headers: { 'Content-Type': 'image/png' },
    });

  } catch (err: any) {
    console.error(`[OG/service] ERROR:`, err);
    return new Response(`OG Error: ${err?.message}`, { status: 500 });
  }
};
