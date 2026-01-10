import { useState, useEffect, useCallback } from 'react';

interface UseExitIntentOptions {
  threshold?: number;
  delay?: number;
  cookieName?: string;
  cookieExpireDays?: number;
}

export function useExitIntent(options: UseExitIntentOptions = {}) {
  const {
    threshold = 20,
    delay = 0,
    cookieName = 'exit_intent_shown',
    cookieExpireDays = 7
  } = options;

  const [showPopup, setShowPopup] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const hasBeenShown = useCallback(() => {
    try {
      const shown = localStorage.getItem(cookieName);
      return shown === 'true';
    } catch {
      return false;
    }
  }, [cookieName]);

  const markAsShown = useCallback(() => {
    try {
      localStorage.setItem(cookieName, 'true');
      const expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + cookieExpireDays);
      localStorage.setItem(`${cookieName}_expires`, expireDate.toISOString());
    } catch {
    }
  }, [cookieName, cookieExpireDays]);

  const checkExpiry = useCallback(() => {
    try {
      const expiresStr = localStorage.getItem(`${cookieName}_expires`);
      if (expiresStr) {
        const expires = new Date(expiresStr);
        if (new Date() > expires) {
          localStorage.removeItem(cookieName);
          localStorage.removeItem(`${cookieName}_expires`);
          return false;
        }
      }
      return localStorage.getItem(cookieName) === 'true';
    } catch {
      return false;
    }
  }, [cookieName]);

  const closePopup = useCallback(() => {
    setShowPopup(false);
    markAsShown();
  }, [markAsShown]);

  useEffect(() => {
    if (checkExpiry()) {
      setHasTriggered(true);
      return;
    }

    let timeoutId: NodeJS.Timeout | null = null;

    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggered || hasBeenShown()) return;
      
      if (e.clientY <= threshold) {
        if (delay > 0) {
          timeoutId = setTimeout(() => {
            setShowPopup(true);
            setHasTriggered(true);
          }, delay);
        } else {
          setShowPopup(true);
          setHasTriggered(true);
        }
      }
    };

    const handleMouseEnter = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [threshold, delay, hasTriggered, hasBeenShown, checkExpiry]);

  return { showPopup, closePopup };
}
