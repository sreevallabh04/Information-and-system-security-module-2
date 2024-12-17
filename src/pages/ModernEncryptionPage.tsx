import React from 'react';
import { Shield, Key, Lock, Database } from 'lucide-react';

export const ModernEncryptionPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-purple-400 mb-8">Modern Encryption</h1>
        
        <div className="grid gap-8">
          {/* Block Ciphers */}
          <section className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-start gap-4">
              <Database className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Block Ciphers</h2>
                <p className="text-gray-300 mb-4">
                  Block ciphers are key components of modern cryptographic systems, operating on fixed-size blocks of data.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-purple-300">DES (Data Encryption Standard)</h3>
                    <p className="text-sm text-gray-400">
                      A symmetric-key algorithm using 56-bit keys. Though now considered insecure, it revolutionized modern cryptography.
                      Key features:
                      - 16 rounds of processing
                      - 64-bit block size
                      - Feistel network structure
                    </p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-purple-300">AES (Advanced Encryption Standard)</h3>
                    <p className="text-sm text-gray-400">
                      The current standard for symmetric encryption. Features:
                      - 128/192/256-bit key sizes
                      - 128-bit block size
                      - Substitution-permutation network
                      - Highly efficient in both software and hardware
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Symmetric Encryption */}
          <section className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-start gap-4">
              <Key className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Symmetric Encryption</h2>
                <p className="text-gray-300 mb-4">
                  Uses the same key for encryption and decryption. Ideal for high-speed encryption of large amounts of data.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-purple-300">Stream Ciphers</h3>
                    <p className="text-sm text-gray-400">
                      Encrypt data one bit or byte at a time. Examples include:
                      - RC4 (now deprecated)
                      - ChaCha20
                      - Salsa20
                    </p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-purple-300">Block Cipher Modes</h3>
                    <p className="text-sm text-gray-400">
                      Different ways to use block ciphers:
                      - ECB (Electronic Codebook)
                      - CBC (Cipher Block Chaining)
                      - CTR (Counter Mode)
                      - GCM (Galois/Counter Mode)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Modern Applications */}
          <section className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Modern Applications</h2>
                <p className="text-gray-300 mb-4">
                  Modern encryption is fundamental to digital security and privacy.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-purple-300">Transport Layer Security (TLS)</h3>
                    <p className="text-sm text-gray-400">
                      Secures internet communications using:
                      - Certificate-based authentication
                      - Key exchange protocols
                      - Symmetric encryption for data transfer
                    </p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 text-purple-300">End-to-End Encryption</h3>
                    <p className="text-sm text-gray-400">
                      Used in messaging and file sharing:
                      - Signal Protocol
                      - PGP for emails
                      - File system encryption
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