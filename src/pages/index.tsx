// src/pages/index.tsx
import dynamic from 'next/dynamic';
import React from 'react';

// Importer dynamiquement LottieAnimation avec SSR désactivé
const LottieAnimation = dynamic(() => import('../components/LottieAnimation'), { ssr: false });

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      {/* Utiliser LottieAnimation ici */}
      <LottieAnimation />
    </div>
  );
};

export default HomePage;
