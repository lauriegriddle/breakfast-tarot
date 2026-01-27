"use client";
import { useState, useEffect } from 'react';

interface PasswordGateProps {
  children: React.ReactNode;
}

const CORRECT_PASSWORD = "Cards2026";
const STORAGE_KEY = "breakfast-tarot-auth";

export default function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if already authenticated on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem(STORAGE_KEY, "true");
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  // Show nothing while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-4xl">🥞</div>
      </div>
    );
  }

  // Show password form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full border-4 border-amber-200">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🥞🔮</div>
            <h1 className="text-3xl font-bold text-amber-800" style={{ fontFamily: 'Georgia, serif' }}>
              Breakfast Tarot
            </h1>
            <p className="text-amber-600 mt-2">Coming Soon!</p>
            <p className="text-sm text-amber-500 mt-1">Enter password for early access</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-xl border-2 border-amber-200 focus:border-amber-400 focus:outline-none text-center text-lg"
                autoFocus
              />
            </div>
            
            {error && (
              <p className="text-red-500 text-center text-sm">
                Incorrect password. Please try again.
              </p>
            )}
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg"
            >
              Enter ✨
            </button>
          </form>
          
          <p className="text-center text-xs text-amber-400 mt-6">
            Part of the Breakfast Tarot Family
          </p>
        </div>
      </div>
    );
  }

  // Show actual content if authenticated
  return <>{children}</>;
}
