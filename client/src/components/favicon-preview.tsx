import React from 'react';

export default function FaviconPreview() {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">Your Website Favicon Preview</h2>
      
      {/* Favicon preview at different sizes */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Browser Tab Size (16x16 pixels)</h3>
          <div className="inline-block p-2 bg-gray-100 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
              <rect width="32" height="32" fill="#f2491b" rx="6"/>
              <text x="16" y="21" fontFamily="'Lobster Two', cursive" fontSize="16" fontWeight="700" fill="white" textAnchor="middle" dominantBaseline="middle" style={{fontStyle: 'italic'}}>DA</text>
            </svg>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Large Size (32x32 pixels)</h3>
          <div className="inline-block p-2 bg-gray-100 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <rect width="32" height="32" fill="#f2491b" rx="6"/>
              <text x="16" y="21" fontFamily="'Lobster Two', cursive" fontSize="16" fontWeight="700" fill="white" textAnchor="middle" dominantBaseline="middle" style={{fontStyle: 'italic'}}>DA</text>
            </svg>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Extra Large Size (64x64 pixels)</h3>
          <div className="inline-block p-2 bg-gray-100 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32">
              <rect width="32" height="32" fill="#f2491b" rx="6"/>
              <text x="16" y="21" fontFamily="'Lobster Two', cursive" fontSize="16" fontWeight="700" fill="white" textAnchor="middle" dominantBaseline="middle" style={{fontStyle: 'italic'}}>DA</text>
            </svg>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Your Favicon Features:</h4>
          <ul className="space-y-1 text-sm">
            <li>• <strong>Background:</strong> The Date Alchemy orange (#f2491b)</li>
            <li>• <strong>Text:</strong> White "DA" letters in italic Lobster Two font</li>
            <li>• <strong>Shape:</strong> Rounded corners for modern look</li>
            <li>• <strong>Format:</strong> SVG for crisp display at all sizes</li>
          </ul>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-900 mb-2">How to see it on your site:</h4>
          <ol className="text-sm text-blue-800 space-y-1">
            <li>1. Visit your website at thedatealchemy.com</li>
            <li>2. Look at the browser tab - you should see the DA logo</li>
            <li>3. If you still see the old icon, do a hard refresh: Ctrl+Shift+R</li>
          </ol>
        </div>
      </div>
    </div>
  );
}