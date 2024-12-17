import React from 'react';
import { CipherPlayground } from '../components/CipherPlayground';

export const PracticePage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-purple-400 mb-8">Practice Area</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-300">
              Put your cryptography knowledge to the test! Use our interactive tools to practice
              encryption and decryption techniques.
            </p>
          </div>
          <CipherPlayground />
        </div>
      </div>
    </div>
  );
};