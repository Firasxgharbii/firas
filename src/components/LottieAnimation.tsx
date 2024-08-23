"use client";

import React, { useEffect, useState } from 'react';
import Player from 'lottie-react';

const LottieAnimation = () => {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch('/animations/Animation-1724373639117.json');
        if (!response.ok) {
          throw new Error('Failed to load animation data');
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (err) {
        setError('Erreur lors du chargement de l\'animation');
        console.error(err);
      }
    };

    if (typeof window !== 'undefined') {
      loadAnimation();
    }
  }, []);

  if (error) {
    return <div>{error}</div>; // Affiche un message d'erreur si le chargement échoue
  }

  if (!animationData) {
    return <div>Loading...</div>; // Affiche un loader tant que l'animation n'est pas chargée
  }

  return (
    <Player
      autoplay
      loop
      animationData={animationData}
      style={{ height: '400px', width: '400px' }}
    />
  );
};

export default LottieAnimation;
