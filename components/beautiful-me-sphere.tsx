import React, { useState } from 'react';
import SphereImageGrid, { ImageData } from '@/components/ui/img-sphere';
import { Plus, Image as ImageIcon, Sparkles } from 'lucide-react';

/**
 * BeautifulMeSphere - "Beautiful Me" Section Interactive 3D Sphere Component
 * 
 * Arranges Pratishtha Tiwari's "Beautiful Me" photo album in an interactive 3D sphere.
 * Supports loading images from:
 * 1. Google Photos direct links / CDN URLs
 * 2. Unsplash / Web stock portraits
 * 3. Local photo roster assets
 */

// Initial "Beautiful Me" album images
const DEFAULT_BEAUTIFUL_ME_IMAGES: ImageData[] = [
  {
    id: 'bm-1',
    src: '/IMG_0530.jpg',
    alt: 'Pratishtha Tiwari - Royal Ethereal Charm',
    title: 'Royal Ethereal Charm',
    description: 'Radiant smile in royal orange bridal attire with classic gold jewellery.'
  },
  {
    id: 'bm-2',
    src: '/husband_panda.png',
    alt: 'Pratishtha Tiwari - Giant Panda Hug',
    title: 'Pure Childlike Joy',
    description: 'Her infectious smile hugging her giant life-sized panda soft toy.'
  },
  {
    id: 'bm-3',
    src: '/husband_chijji.png',
    alt: 'Pratishtha Tiwari - Mountain of Chijji',
    title: 'Her Mountain of Treats',
    description: 'Under the Ranjeet ❤️ Pratishtha neon light, surrounded by her favourite chijji and chocolates.'
  },
  {
    id: 'bm-4',
    src: '/husband_canopy.png',
    alt: 'Pratishtha Tiwari - My Eternal Princess',
    title: 'My Eternal Princess',
    description: 'Under the bridal canopy on 26th April 2026 holding her rose bouquet.'
  },
  {
    id: 'bm-5',
    src: '/7e9e2bc5-a6b7-4f52-8288-6333b795118a-1_all_47630.jpg',
    alt: 'Pratishtha Tiwari - Mint Green Saree Grace',
    title: 'Mint Green Saree Grace',
    description: 'Elegance and gentle beauty in shimmering mint green saree.'
  },
  {
    id: 'bm-6',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    alt: 'Golden Glow Aesthetic',
    title: 'Golden Sunset Glow',
    description: 'Captivating warmth and graceful poise.'
  },
  {
    id: 'bm-7',
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80',
    alt: 'Celebration Moments',
    title: 'Joyful Moments',
    description: 'Laughter, joy and happiness.'
  },
  {
    id: 'bm-8',
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80',
    alt: 'Festive Charm',
    title: 'Festive Radiance',
    description: 'A touch of sparkle and royalty.'
  }
];

// Helper to multiply images to fill the 3D sphere nicely
function createRepeatedSet(base: ImageData[], totalCount = 45): ImageData[] {
  const result: ImageData[] = [];
  for (let i = 0; i < totalCount; i++) {
    const item = base[i % base.length];
    result.push({
      ...item,
      id: `bm-sphere-${i + 1}`,
      alt: `${item.alt} (${Math.floor(i / base.length) + 1})`
    });
  }
  return result;
}

export interface BeautifulMeSphereProps {
  initialGooglePhotoUrls?: string[];
  containerSize?: number;
  sphereRadius?: number;
  autoRotate?: boolean;
}

export default function BeautifulMeSphere({
  initialGooglePhotoUrls = [],
  containerSize = 580,
  sphereRadius = 210,
  autoRotate = true
}: BeautifulMeSphereProps) {
  const [photoList, setPhotoList] = useState<ImageData[]>(() => {
    if (initialGooglePhotoUrls.length > 0) {
      const googleImages = initialGooglePhotoUrls.map((url, idx) => ({
        id: `gphoto-${idx + 1}`,
        src: url,
        alt: `Pratishtha - Beautiful Me #${idx + 1}`,
        title: `Beautiful Me #${idx + 1}`,
        description: 'Loaded from Google Photos Album'
      }));
      return createRepeatedSet([...DEFAULT_BEAUTIFUL_ME_IMAGES, ...googleImages], 50);
    }
    return createRepeatedSet(DEFAULT_BEAUTIFUL_ME_IMAGES, 45);
  });

  const [inputUrl, setInputUrl] = useState('');
  const [showAddUrl, setShowAddUrl] = useState(false);

  const handleAddPhotoUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    const newPhoto: ImageData = {
      id: `custom-gphoto-${Date.now()}`,
      src: inputUrl.trim(),
      alt: 'Pratishtha - Beautiful Me Photo',
      title: 'Beautiful Me Moment',
      description: 'Imported from Google Photos album'
    };

    setPhotoList(prev => createRepeatedSet([newPhoto, ...prev], Math.max(prev.length + 5, 50)));
    setInputUrl('');
    setShowAddUrl(false);
  };

  return (
    <section className="relative w-full py-12 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-xl mb-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Section • Beautiful Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-300 tracking-tight drop-shadow-md">
          3D "Beautiful Me" Sphere
        </h2>
        <p className="text-sm text-pink-200/90 mt-2">
          Drag to rotate Pratishtha&apos;s photo sphere in 3D space. Tap any portrait to view it in high resolution.
        </p>
      </div>

      {/* URL Import bar for Google Photos */}
      <div className="mb-6 flex flex-col items-center">
        <button
          onClick={() => setShowAddUrl(!showAddUrl)}
          className="text-xs px-3.5 py-1.5 rounded-full bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/40 flex items-center space-x-1.5 transition-all shadow-sm"
        >
          <Plus size={14} />
          <span>Add Google Photos Image URL to Sphere</span>
        </button>

        {showAddUrl && (
          <form onSubmit={handleAddPhotoUrl} className="mt-3 flex items-center gap-2 max-w-md w-full">
            <input
              type="url"
              required
              placeholder="Paste direct image / Google Photos link..."
              value={inputUrl}
              onChange={e => setInputUrl(e.target.value)}
              className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-purple-950/80 border border-amber-400/40 text-white placeholder-pink-300/40 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-purple-950 hover:brightness-110 shadow-md"
            >
              Add
            </button>
          </form>
        )}
      </div>

      {/* 3D Interactive Sphere Container */}
      <div className="relative flex justify-center items-center">
        <SphereImageGrid
          images={photoList}
          containerSize={containerSize}
          sphereRadius={sphereRadius}
          dragSensitivity={0.8}
          momentumDecay={0.96}
          maxRotationSpeed={5}
          baseImageScale={0.16}
          hoverScale={1.3}
          perspective={1000}
          autoRotate={autoRotate}
          autoRotateSpeed={0.25}
        />
      </div>

      <div className="mt-4 flex items-center space-x-2 text-[11px] text-amber-200/70">
        <ImageIcon size={14} className="text-amber-300" />
        <span>Loaded {photoList.length} moments in 3D Fibonacci sphere coverage</span>
      </div>
    </section>
  );
}
