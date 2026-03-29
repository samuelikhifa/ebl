import type { CSSProperties, MouseEvent } from 'react';

type OptimizedImageProps = {
  src: string;
  alt: string;
  style?: CSSProperties;
  className?: string;
  /** LCP / above-the-fold: use eager + fetchPriority high */
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  onMouseEnter?: (e: MouseEvent<HTMLImageElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLImageElement>) => void;
};

/**
 * Standardized img with lazy-loading, async decode, and optional dimensions to reduce CLS.
 * Pass width/height when known so the browser can reserve space before decode.
 */
export function OptimizedImage({
  src,
  alt,
  style,
  className,
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1200px',
  width,
  height,
  onMouseEnter,
  onMouseLeave,
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'low'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        maxWidth: '100%',
        height: 'auto',
        verticalAlign: 'middle',
        ...style,
      }}
    />
  );
}
