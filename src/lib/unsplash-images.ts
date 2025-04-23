// Collection of topic-specific Unsplash images for different sections of the website

export const unsplashImages = {
  // Hero and general charity images
  hero: [
    "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469571486292-b53601020a8f?q=80&w=1000&auto=format&fit=crop"
  ],
  
  // About page images
  about: [
    "https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593113616828-6f22bca04804?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1000&auto=format&fit=crop"
  ],
  
  // Team page images
  team: [
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop"
  ],
  
  // Success stories images
  successStories: [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536337005238-94b997371b40?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop"
  ],
  
  // Events images
  events: [
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559223607-a43f990c095d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546349851-64285be8e9fa?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1000&auto=format&fit=crop"
  ],
  
  // FAQ page images
  faq: [
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
  ],
  
  // Mission section images
  mission: [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000&auto=format&fit=crop"
  ]
};

// Helper function to get a random image from a category
export const getRandomImage = (category: keyof typeof unsplashImages): string => {
  const images = unsplashImages[category];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};