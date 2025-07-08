import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-white text-black px-6 py-12 max-w-4xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4">PropertyBooks</h1>
        <p className="text-lg text-gray-700">
          Accounting software made <strong>just</strong> for small landlords. No more spreadsheets. No more CPA confusion. Just peace of mind.
        </p>
      </header>

      <section className="mb-12">
        <div className="border rounded-xl p-6 shadow space-y-4">
          <h2 className="text-2xl font-semibold">Why Landlords Love Us</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Auto-categorize property expenses</li>
            <li>Track rent & payments easily</li>
            <li>Generate tax reports in seconds</li>
            <li>Simple pricing: $29–$99/mo based on units</li>
            <li>Sticky recurring revenue with high retention</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <div className="border rounded-xl p-6 shadow space-y-4">
          <h2 className="text-2xl font-semibold">Free Tool: Rent Collection Calculator</h2>
          <p className="text-gray-700">
            Find out how much rent you're missing—and how to fix it. Get your free rent collection score.
          </p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              className="border rounded px-4 py-2" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded">Get Calculator</button>
          </form>
        </div>
      </section>

      <section className="mb-12">
        <div className="border rounded-xl p-6 shadow space-y-4">
          <h2 className="text-2xl font-semibold">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-4 shadow-sm">
              <h3 className="text-xl font-bold">Starter Plan</h3>
              <p>$29/month • Up to 5 properties</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Rent tracking</li>
                <li>Basic reports</li>
                <li>Email support</li>
              </ul>
            </div>
            <div className="border rounded-xl p-4 shadow-sm">
              <h3 className="text-xl font-bold">Standard Plan</h3>
              <p>$59/month • Up to 20 properties</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Advanced reports</li>
                <li>Expense auto-categorization</li>
                <li>Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-500 mt-12">
        <p>© 2025 PropertyBooks Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
