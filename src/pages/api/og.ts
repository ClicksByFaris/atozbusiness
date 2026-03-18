/**
 * OG Image Generator — /api/og
 * API route (.ts required for Astro — NOT .tsx)
 * Uses React.createElement; Satori-compatible CSS only.
 *
 * Query params:
 *   type        — 'blog' | 'service'
 *   title       — page title
 *   category    — badge label
 *   excerpt     — short description
 *   author      — (blog) author name
 *   authorPhoto — (blog) Sanity CDN image URL
 */

import { ImageResponse } from '@vercel/og';
import { createElement as h } from 'react';
import type { APIRoute } from 'astro';

export const prerender = false;
export const runtime = 'edge';

const PRIMARY      = '#2A5298';
const PRIMARY_DARK = '#1A3260';
const SECONDARY    = '#2D86C7';
const ACCENT       = '#F59E0B';
const WHITE        = '#FFFFFF';

function trunc(s: string | null, max: number): string {
  if (!s) return '';
  return s.length > max ? s.slice(0, max - 3) + '...' : s;
}

export const GET: APIRoute = async ({ url }) => {
  const p            = url.searchParams;
  const type         = p.get('type') || 'service';
  const title        = trunc(p.get('title'), 72)  || 'A to Z Business';
  const category     = trunc(p.get('category'), 40);
  const excerpt      = trunc(p.get('excerpt'), 120) ||
                       'Professional typing, PRO services & company formation in Abu Dhabi.';
  const authorName   = trunc(p.get('author'), 40);
  const authorPhoto  = p.get('authorPhoto') || null;
  const initial      = authorName ? authorName.charAt(0).toUpperCase() : 'A';
  const titleSize    = title.length > 50 ? 38 : title.length > 35 ? 44 : 50;
  const svcSize      = title.length > 45 ? 36 : title.length > 30 ? 42 : 48;

  /* ─── shared helpers ───────────────────────────────────────────────────── */

  function BrandMark() {
    return h('div', { style: { display:'flex', alignItems:'center', gap:'12px' } },
      h('div', {
        style: {
          width:'44px', height:'44px', borderRadius:'10px',
          background:WHITE, display:'flex', alignItems:'center',
          justifyContent:'center', fontSize:'22px', fontWeight:'900', color:PRIMARY,
        },
      }, 'A'),
      h('div', { style: { display:'flex', flexDirection:'column' } },
        h('span', { style: { fontSize:'20px', fontWeight:'800', color:WHITE, letterSpacing:'-0.5px' } }, 'A to Z Business'),
        h('span', { style: { fontSize:'11px', color:'rgba(255,255,255,0.55)', letterSpacing:'0.5px' } }, 'atozbusiness.ae'),
      ),
    );
  }

  function GoldBar() {
    return h('div', { style: { position:'absolute', top:'0', left:'0', right:'0', height:'6px', background:`linear-gradient(90deg,${ACCENT},#FBBF24)` } });
  }

  function Circle(top?: string, right?: string, bottom?: string, left?: string, size = '400px', opacity = '0.05') {
    return h('div', { style: { position:'absolute', top, right, bottom, left, width:size, height:size, borderRadius:'50%', background:`rgba(255,255,255,${opacity})` } });
  }

  function Badge(label: string) {
    return h('div', {
      style: {
        display:'flex', alignItems:'center',
        background:'rgba(245,158,11,0.18)', border:`1.5px solid ${ACCENT}`,
        color:ACCENT, padding:'6px 16px', borderRadius:'50px',
        fontSize:'12px', fontWeight:'700', letterSpacing:'1px',
      },
    }, label ? `\u26A1 ${label}` : '\u26A1 Service');
  }

  /* ── BLOG template ──────────────────────────────────────────────────────── */
  if (type === 'blog') {
    return new ImageResponse(
      h('div', {
        style: {
          width:'1200px', height:'630px', display:'flex', flexDirection:'column',
          background:`linear-gradient(135deg,${PRIMARY_DARK} 0%,${PRIMARY} 45%,${SECONDARY} 100%)`,
          fontFamily:'sans-serif', position:'relative', overflow:'hidden',
        },
      },
        GoldBar(),
        Circle('-80px', '-80px', undefined, undefined, '400px', '0.05'),
        Circle(undefined, undefined, '-120px', '-60px', '500px', '0.03'),

        h('div', {
          style: { display:'flex', flexDirection:'column', padding:'48px 60px', flex:1, justifyContent:'space-between' },
        },
          /* TOP: brand + blog badge */
          h('div', { style: { display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between' } },
            BrandMark(),
            h('div', {
              style: {
                display:'flex', alignItems:'center',
                background:'rgba(245,158,11,0.18)', border:`1.5px solid ${ACCENT}`,
                color:ACCENT, padding:'8px 20px', borderRadius:'50px',
                fontSize:'13px', fontWeight:'700', letterSpacing:'1px',
              },
            }, category ? `\u270D ${category}` : '\u270D Blog'),
          ),

          /* MIDDLE: title + excerpt */
          h('div', { style: { display:'flex', flexDirection:'column', gap:'16px' } },
            h('div', { style: { fontSize:`${titleSize}px`, fontWeight:'800', color:WHITE, lineHeight:'1.2', letterSpacing:'-1px' } }, title),
            h('div', { style: { fontSize:'17px', color:'rgba(255,255,255,0.72)', lineHeight:'1.5' } }, excerpt),
          ),

          /* BOTTOM: author + location */
          h('div', {
            style: { display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderTop:'1px solid rgba(255,255,255,0.15)', paddingTop:'20px' },
          },
            h('div', { style: { display:'flex', flexDirection:'row', alignItems:'center', gap:'14px' } },
              authorPhoto
                ? h('img', {
                    src: authorPhoto, width:48, height:48,
                    style: { borderRadius:'50%', border:`2.5px solid ${ACCENT}` },
                  })
                : h('div', {
                    style: {
                      width:'48px', height:'48px', borderRadius:'50%',
                      background:`linear-gradient(135deg,${ACCENT},#FBBF24)`,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontSize:'20px', fontWeight:'700', color:WHITE,
                    },
                  }, initial),
              h('div', { style: { display:'flex', flexDirection:'column' } },
                h('span', { style: { fontSize:'11px', color:'rgba(255,255,255,0.5)', textTransform:'uppercase', letterSpacing:'0.8px' } }, 'Written by'),
                h('span', { style: { fontSize:'15px', fontWeight:'700', color:WHITE } }, authorName || 'A to Z Business'),
              ),
            ),
            h('div', { style: { display:'flex', flexDirection:'row', alignItems:'center', gap:'6px', color:'rgba(255,255,255,0.6)', fontSize:'14px' } },
              h('span', {}, '\uD83D\uDCCD'),
              h('span', {}, 'Abu Dhabi, UAE'),
            ),
          ),
        ),
      ),
      { width:1200, height:630 }
    );
  }

  /* ── SERVICE template ───────────────────────────────────────────────────── */
  return new ImageResponse(
    h('div', {
      style: {
        width:'1200px', height:'630px', display:'flex', flexDirection:'row',
        background:`linear-gradient(135deg,${PRIMARY_DARK} 0%,${PRIMARY} 50%,${SECONDARY} 100%)`,
        fontFamily:'sans-serif', position:'relative', overflow:'hidden',
      },
    },
      GoldBar(),
      Circle('-100px', '-100px', undefined, undefined, '500px', '0.04'),
      Circle(undefined, undefined, '-150px', '-80px', '550px', '0.03'),

      /* LEFT: main content */
      h('div', {
        style: { display:'flex', flexDirection:'column', padding:'48px 48px 48px 60px', flex:1, justifyContent:'space-between' },
      },
        BrandMark(),
        h('div', { style: { display:'flex', flexDirection:'column', gap:'18px' } },
          Badge(category),
          h('div', { style: { fontSize:`${svcSize}px`, fontWeight:'800', color:WHITE, lineHeight:'1.2', letterSpacing:'-1px' } }, title),
          h('div', { style: { fontSize:'16px', color:'rgba(255,255,255,0.70)', lineHeight:'1.55' } }, excerpt),
        ),
        h('div', {
          style: { display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderTop:'1px solid rgba(255,255,255,0.15)', paddingTop:'18px' },
        },
          h('div', { style: { display:'flex', flexDirection:'row', alignItems:'center', gap:'8px', color:'rgba(255,255,255,0.6)', fontSize:'14px' } },
            h('span', {}, '\uD83D\uDCCD'),
            h('span', {}, 'Khalidiya \u00B7 Al Zahiyah, Abu Dhabi'),
          ),
          h('div', {
            style: { display:'flex', background:`linear-gradient(90deg,${ACCENT},#FBBF24)`, color:'#1A1A1A', padding:'8px 22px', borderRadius:'50px', fontSize:'12px', fontWeight:'800' },
          }, 'Get Started \u2192'),
        ),
      ),

      /* RIGHT: accent panel */
      h('div', {
        style: {
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
          width:'280px', gap:'20px', padding:'40px',
          background:'rgba(255,255,255,0.06)', borderLeft:'1px solid rgba(255,255,255,0.10)',
        },
      },
        h('div', {
          style: {
            width:'82px', height:'82px', borderRadius:'50%',
            background:`linear-gradient(135deg,${ACCENT},#FBBF24)`,
            display:'flex', alignItems:'center', justifyContent:'center', fontSize:'38px',
          },
        }, '\u26A1'),
        h('div', { style: { display:'flex', flexDirection:'column', alignItems:'center', gap:'8px' } },
          h('span', { style: { fontSize:'11px', color:'rgba(255,255,255,0.5)', textTransform:'uppercase', letterSpacing:'1px' } }, 'Expert Service'),
          h('span', { style: { fontSize:'15px', fontWeight:'700', color:ACCENT } }, 'Abu Dhabi'),
          h('div', { style: { width:'36px', height:'3px', background:ACCENT, borderRadius:'2px' } }),
          h('span', { style: { fontSize:'12px', color:'rgba(255,255,255,0.55)' } }, 'Fast \u00B7 Reliable \u00B7 Expert'),
        ),
      ),
    ),
    { width:1200, height:630 }
  );
};
