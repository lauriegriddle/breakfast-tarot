export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <a href="/" className="text-4xl hover:scale-110 transition-transform inline-block">🌸</a>
          <h1 className="text-3xl font-bold text-amber-800 mt-4" style={{ fontFamily: 'Georgia, serif' }}>
            Terms of Service
          </h1>
          <p className="text-amber-600 mt-2">Breakfast Tarot</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-amber-800 mb-3">Welcome to Breakfast Tarot</h2>
            <p className="text-gray-700 leading-relaxed">
              By using Breakfast Tarot (breakfasttarot.com), you agree to these terms. 
              Please read them with your morning coffee ☕
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-amber-800 mb-3">What We Offer</h2>
            <p className="text-gray-700 leading-relaxed">
              Breakfast Tarot is a free daily card pull experience using the Griddle Deck — 
              78 tarot cards reimagined for the breakfast table. It&apos;s meant for entertainment, 
              reflection, and a little morning magic.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-amber-800 mb-3">For Entertainment Purposes</h2>
            <p className="text-gray-700 leading-relaxed">
              The card readings and meanings provided are for entertainment and personal reflection only. 
              They should not be taken as professional advice of any kind — financial, medical, legal, 
              or otherwise. Always consult qualified professionals for important life decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-amber-800 mb-3">Your Responsibilities</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• Use the site respectfully and lawfully</li>
              <li>• Don&apos;t attempt to disrupt or hack the service</li>
              <li>• Share responsibly when posting your results</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-amber-800 mb-3">Our Content</h2>
            <p className="text-gray-700 leading-relaxed">
              The Griddle Deck, card meanings, and all content on Breakfast Tarot are part of the 
              Letter Griddle family of games. All rights reserved. You may share your personal 
              results but may not reproduce the deck or content for commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-amber-800 mb-3">Changes to Service</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update, modify, or discontinue features at any time. We&apos;ll do our best to 
              keep serving up daily cards, but we can&apos;t guarantee uninterrupted service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-amber-800 mb-3">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Questions or concerns? Reach out at{' '}
              <a href="mailto:lettergriddle@gmail.com" className="text-amber-600 hover:text-amber-700 underline">
                lettergriddle@gmail.com
              </a>
            </p>
          </section>

          <section>
            <p className="text-gray-500 text-sm">
              Last updated: January 25, 2026
            </p>
          </section>
        </div>

        <div className="text-center mt-8">
          <a 
            href="/" 
            className="text-amber-600 hover:text-amber-700 underline"
          >
            ← Back to Breakfast Tarot
          </a>
        </div>
      </div>
    </div>
  );
}