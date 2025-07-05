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
        Maktabah As Sunnah ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website, mobile app, and related services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Personal Data:</strong> We may collect your name, email address, and other information you provide when contacting us or signing up for our services.
        </li>
        <li>
          <strong>Usage Data:</strong> We may collect non-personal information such as device type, browser, and usage statistics to help improve our services.
        </li>
        <li>
          <strong>Cookies & Analytics:</strong> We use cookies and third-party services (like Supabase) to help operate our website and app. You can disable cookies in your browser settings.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and maintain our website and app</li>
        <li>To improve user experience and analyze usage</li>
        <li>To communicate with you about updates or support requests</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Sharing</h2>
      <p className="mb-4">
        We do not sell or share your personal information with third parties, except as required by law or to provide our services (for example, using Supabase for data storage and analytics).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Children's Privacy</h2>
      <p className="mb-4">
        Our services are not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal data. Please contact us for any requests or questions regarding your data.
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
