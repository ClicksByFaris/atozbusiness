import { ImageResponse } from '@vercel/og';
import type { APIRoute } from 'astro';

export const prerender = false;

// Brand colors
const PRIMARY = '#2A5298';
const PRIMARY_DARK = '#1A3260';
const SECONDARY = '#2D86C7';
const ACCENT = '#F59E0B';
const WHITE = '#FFFFFF';

function truncate(str: string, maxLen: number): string {
  if (!str) return '';
  return str.length > maxLen ? str.slice(0, maxLen - 3) + '...' : str;
}

export const GET: APIRoute = async ({ url }) => {
  const params = url.searchParams;
  const type = params.get('type') || 'service';
  const title = truncate(params.get('title') || 'A to Z Business', 72);
  const category = truncate(params.get('category') || '', 40);
  const excerpt = truncate(
    params.get('excerpt') ||
      'Professional typing, PRO services & company formation in Abu Dhabi.',
    120
  );
  const authorName = truncate(params.get('author') || '', 40);
  const authorPhoto = params.get('authorPhoto') || null;
  const authorInitial = authorName ? authorName.charAt(0).toUpperCase() : 'A';
  const fontSize = title.length > 50 ? 38 : title.length > 35 ? 44 : 50;
  const serviceFontSize = title.length > 45 ? 36 : title.length > 30 ? 42 : 48;

  try {
    if (type === 'blog') {
      return new ImageResponse(
        (
          <div
            style={{
              width: '1200px',
              height: '630px',
              display: 'flex',
              flexDirection: 'column',
              background: `linear-gradient(135deg, ${PRIMARY_DARK} 0%, ${PRIMARY} 45%, ${SECONDARY} 100%)`,
              fontFamily: 'sans-serif',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative circles */}
            <div
              style={{
                position: 'absolute',
                top: '-80px',
                right: '-80px',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-120px',
                left: '-60px',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.03)',
              }}
            />
            {/* Gold top accent bar */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '6px',
                background: `linear-gradient(90deg, ${ACCENT}, #FBBF24)`,
              }}
            />
            {/* Main content wrapper */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '48px 60px',
                height: '100%',
                justifyContent: 'space-between',
              }}
            >
              {/* TOP ROW: Brand + Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {/* Brand mark */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: WHITE,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      fontWeight: '900',
                      color: PRIMARY,
                    }}
                  >
                    A
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span
                      style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        color: WHITE,
                        letterSpacing: '-0.5px',
                      }}
                    >
                      A to Z Business
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.55)',
                        letterSpacing: '0.5px',
                      }}
                    >
                      atozbusiness.ae
                    </span>
                  </div>
                </div>
                {/* Category badge */}
                <div
                  style={{
                    background: 'rgba(245,158,11,0.18)',
                    border: `1.5px solid ${ACCENT}`,
                    color: ACCENT,
                    padding: '8px 20px',
                    borderRadius: '50px',
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '1px',
                  }}
                >
                  {category ? `✍ ${category}` : '✍ Blog'}
                </div>
              </div>

              {/* MIDDLE: Title + Excerpt */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  flexGrow: 1,
                  justifyContent: 'center',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }}
              >
                <div
                  style={{
                    fontSize: `${fontSize}px`,
                    fontWeight: '800',
                    color: WHITE,
                    lineHeight: '1.2',
                    letterSpacing: '-1px',
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: '17px',
                    color: 'rgba(255,255,255,0.72)',
                    lineHeight: '1.5',
                  }}
                >
                  {excerpt}
                </div>
              </div>

              {/* BOTTOM ROW: Author + Location */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(255,255,255,0.15)',
                  paddingTop: '20px',
                }}
              >
                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  {authorPhoto ? (
                    <img
                      src={authorPhoto}
                      width={48}
                      height={48}
                      style={{
                        borderRadius: '50%',
                        border: `2.5px solid ${ACCENT}`,
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${ACCENT}, #FBBF24)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                        fontWeight: '700',
                        color: WHITE,
                        border: `2.5px solid ${ACCENT}`,
                      }}
                    >
                      {authorInitial}
                    </div>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.5)',
                        letterSpacing: '0.8px',
                        textTransform: 'uppercase',
                      }}
                    >
                      Written by
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: '700', color: WHITE }}>
                      {authorName || 'A to Z Business'}
                    </span>
                  </div>
                </div>
                {/* Location pill */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '14px',
                  }}
                >
                  📍 Abu Dhabi, UAE
                </div>
              </div>
            </div>
          </div>
        ),
        { width: 1200, height: 630 }
      );
    }

    // ─── SERVICE TEMPLATE ─────────────────────────────────────────────────────
    return new ImageResponse(
      (
        <div
          style={{
            width: '1200px',
            height: '630px',
            display: 'flex',
            background: `linear-gradient(135deg, ${PRIMARY_DARK} 0%, ${PRIMARY} 50%, ${SECONDARY} 100%)`,
            fontFamily: 'sans-serif',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background circles */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-150px',
              left: '-80px',
              width: '550px',
              height: '550px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.03)',
            }}
          />
          {/* Right accent panel */}
          <div
            style={{
              position: 'absolute',
              right: '0',
              top: '0',
              bottom: '0',
              width: '300px',
              background: 'rgba(255,255,255,0.06)',
              borderLeft: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              padding: '40px',
            }}
          >
            <div
              style={{
                width: '88px',
                height: '88px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${ACCENT}, #FBBF24)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                boxShadow: '0 0 40px rgba(245,158,11,0.4)',
              }}
            >
              ⚡
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}
              >
                Expert Service
              </span>
              <span style={{ fontSize: '16px', fontWeight: '700', color: ACCENT, textAlign: 'center' }}>
                Abu Dhabi
              </span>
              <div
                style={{ width: '40px', height: '3px', background: ACCENT, borderRadius: '2px' }}
              />
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', textAlign: 'center' }}>
                Fast · Reliable · Expert
              </span>
            </div>
          </div>
          {/* Gold top bar */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '6px',
              background: `linear-gradient(90deg, ${ACCENT}, #FBBF24)`,
            }}
          />
          {/* Left main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '48px 48px 48px 60px',
              width: '900px',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            {/* TOP: Brand */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: WHITE,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  fontWeight: '900',
                  color: PRIMARY,
                }}
              >
                A
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '20px', fontWeight: '800', color: WHITE, letterSpacing: '-0.5px' }}>
                  A to Z Business
                </span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.5px' }}>
                  atozbusiness.ae
                </span>
              </div>
            </div>

            {/* MIDDLE: Badge + Title + Excerpt */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  background: 'rgba(245,158,11,0.18)',
                  border: `1.5px solid ${ACCENT}`,
                  color: ACCENT,
                  padding: '6px 16px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  width: 'fit-content',
                }}
              >
                {category ? `⚡ ${category}` : '⚡ Service'}
              </div>
              <div
                style={{
                  fontSize: `${serviceFontSize}px`,
                  fontWeight: '800',
                  color: WHITE,
                  lineHeight: '1.2',
                  letterSpacing: '-1px',
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: '1.55',
                }}
              >
                {excerpt}
              </div>
            </div>

            {/* BOTTOM: Location + CTA */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(255,255,255,0.15)',
                paddingTop: '18px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '14px',
                }}
              >
                📍 Khalidiya · Al Zahiyah, Abu Dhabi
              </div>
              <div
                style={{
                  background: `linear-gradient(90deg, ${ACCENT}, #FBBF24)`,
                  color: '#1A1A1A',
                  padding: '8px 22px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: '800',
                  letterSpacing: '0.5px',
                }}
              >
                Get Started →
              </div>
            </div>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch (error) {
    console.error('OG image generation error:', error);
    return new Response('Failed to generate OG image', { status: 500 });
  }
};
