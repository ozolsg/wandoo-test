'use client';

import { useState } from 'react';
import { sanitizeSearchQuery } from '@/lib/utils/sanitize';

export function SanitizationTest() {
  const [input, setInput] = useState('');
  const [sanitized, setSanitized] = useState('');

  const testCases = [
    '<script>alert("xss")</script>',
    'javascript:alert("xss")',
    '<img src="x" onerror="alert(\'xss\')">',
    'normal search query',
    'query with <b>html</b> tags',
    'query with "quotes" and \'apostrophes\'',
    'query with multiple    spaces',
    'a'.repeat(200), // Very long input
    'query with special chars: !@#$%^&*()',
    'query with numbers 123 and symbols @#$',
  ];

  const handleTest = (testCase: string) => {
    setInput(testCase);
    setSanitized(sanitizeSearchQuery(testCase));
  };

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-gray-200 rounded-lg p-4 shadow-lg z-50 max-w-md">
      <h3 className="font-semibold text-sm mb-3">Sanitization Test</h3>

      <div className="space-y-2 mb-3">
        <div className="text-xs">
          <strong>Input:</strong> {input || 'None'}
        </div>
        <div className="text-xs">
          <strong>Sanitized:</strong> {sanitized || 'None'}
        </div>
        <div className="text-xs">
          <strong>Length:</strong> {sanitized.length}
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-xs font-medium mb-2">Test Cases:</div>
        {testCases.map((testCase, index) => (
          <button
            key={index}
            onClick={() => handleTest(testCase)}
            className="block w-full text-left text-xs p-1 hover:bg-gray-100 rounded"
          >
            {testCase.length > 30
              ? testCase.substring(0, 30) + '...'
              : testCase}
          </button>
        ))}
      </div>
    </div>
  );
}
