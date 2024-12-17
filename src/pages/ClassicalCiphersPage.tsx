import React from 'react';
import { Key, Shuffle, ArrowDownUp, BookOpen } from 'lucide-react';

export const ClassicalCiphersPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-purple-400 mb-8">Classical Ciphers</h1>
        
        {/* Introduction */}
        <section className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/30 mb-8">
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-purple-400 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction to Classical Cryptography</h2>
              <p className="text-gray-300 mb-4">
                Classical cryptography represents the foundation of modern encryption techniques. These methods, though simpler than their modern counterparts, introduced fundamental concepts that remain relevant today.
              </p>
            </div>
          </div>
        </section>

        <div className="grid gap-8">
          {/* Substitution Techniques */}
          <section className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-start gap-4">
              <Key className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Substitution Techniques</h2>
                <p className="text-gray-300 mb-4">
                  Substitution ciphers replace each letter in the plaintext with a different letter or symbol.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-purple-300">Caesar Cipher</h3>
                    <p className="text-sm text-gray-400">
                      Shifts each letter by a fixed number of positions in the alphabet. Example: With shift 3, 'A' becomes 'D'.
                    </p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-purple-300">Playfair Cipher</h3>
                    <p className="text-sm text-gray-400">
                      Uses 5×5 grid of letters for encrypting pairs of letters (digraphs). Invented in 1854 by Charles Wheatstone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Transposition Techniques */}
          <section className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-start gap-4">
              <Shuffle className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Transposition Techniques</h2>
                <p className="text-gray-300 mb-4">
                  Transposition ciphers rearrange the order of letters in the plaintext without changing the actual letters used.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-purple-300">Rail Fence Cipher</h3>
                    <p className="text-sm text-gray-400">
                      Writes text in a zigzag pattern on a number of "rails" and reads off each rail to produce ciphertext.
                    </p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-purple-300">Columnar Transposition</h3>
                    <p className="text-sm text-gray-400">
                      Arranges text in a grid and reads off columns in a specific order determined by a keyword.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cryptanalysis */}
          <section className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-start gap-4">
              <ArrowDownUp className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Cryptanalysis Techniques</h2>
                <p className="text-gray-300 mb-4">
                  Understanding how to break classical ciphers provides insights into their strengths and weaknesses.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-purple-300">Frequency Analysis</h3>
                    <p className="text-sm text-gray-400">
                      Studies the frequency of letters in ciphertext to identify patterns and break substitution ciphers.
                    </p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-purple-300">Pattern Recognition</h3>
                    <p className="text-sm text-gray-400">
                      Identifies repeated sequences in ciphertext to deduce the encryption method and possible key length.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};