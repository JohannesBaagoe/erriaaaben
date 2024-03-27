'use client';

import React, { useState, useEffect } from 'react';

// Remove unnecessary import for Server-Side Rendering (SSR):
// import { useRouter } from 'next/navigation';

function HomePage() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/status'); // Fetch from API route
        const data = await response.json();          // Parse JSON response
        setStatus(data.status);                      // Set status from response
      } catch (error) {
        console.error('Error fetching status:', error);
        // Handle error, e.g., display an error message
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <pre className="text-7xl font-mono">{status}</pre>
    </main>
  );
}

export default HomePage;