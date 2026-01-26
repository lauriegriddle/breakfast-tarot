export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <a href="/" className="text-4xl hover:scale-110 transition-transform inline-block">🌸</a>
          <h1 className="text-3xl font-bold text-amber-800 mt-4" style={{ fontFamily: 'Georgia, serif' }}>
            Privacy Policy
          </h1>
          <p className="text-amber-600 mt-2">Breakfast Tarot</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-amber-800 mb-3">Your Privacy Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              At Breakfast Tarot, we believe your morning card pull should be peaceful and private. 
              This policy explains how we handle your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-amber-800 mb-3">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Local Storage Only:</strong> Your stats (total pulls, streaks, achievements) are 
              stored locally on your device using your browser&apos;s localStorage. This data never leaves 
              your device and is not transmitted to our servers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Analytics:</strong> We use Vercel Analytics to understand how visitors use our site. 
              This collects anonymous, aggregated data like page views and does not track individual users 
              or use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-amber-800 mb-3">Information We Don&apos;t Collect</h2>
            <ul className="text-gray-700 space-y-2">
              <li>• We don&apos;t collect your name or email</li>
              <li>• We don&apos;t use tracking cookies</li>
              <li>• We don&apos;t sell any data to third parties</li>
              <li>• We don&apos;t store your card pull history on our servers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-amber-800 mb-3">Your Control</h2>
            <p className="text-gray-700 leading-relaxed">
              You can clear your local stats at any time by clearing your browser&apos;s localStorage 
              for this site. Your data belongs to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-amber-800 mb-3">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Questions about privacy? Reach out at{' '}
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