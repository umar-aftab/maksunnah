'use client';

import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[#6D2E3A]">Privacy Policy</h1>
      <p className="mb-4">
        <strong>Last updated: July 2025</strong>
      </p>

      <p className="mb-4">
        Maktabah As Sunnah (“we”, “us”, or “our”) respects your privacy and is committed to protecting it.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">No Data Collection</h2>
      <p className="mb-4">
        We do <strong>not</strong> collect, store, or share any personal information when you use our app or website.
        Our app does not require you to create an account, provide contact information, or submit any data.
        We do <strong>not</strong> use cookies, analytics, or any third-party tracking services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Children's Privacy</h2>
      <p className="mb-4">
        Our app is safe for all ages and does <strong>not</strong> knowingly collect information from children under 13.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us at: <br />
        <a href="mailto:info@maksunnah.com" className="text-[#6D2E3A] underline">info@maksunnah.com</a>
      </p>

      <p className="text-gray-500 mt-10 text-sm">
        Address: Maktabah As Sunnah, Second Floor, 10960 42 St NE #110, Calgary, AB T3N 2B8
      </p>
    </div>
  );
}