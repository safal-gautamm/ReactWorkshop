import NavBar from "./Components/Nav";

function Blog1() {
  return (
    <>
      <NavBar />

      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        .paper-texture {\n            background-image: \n                url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\"),\n                linear-gradient(to bottom, #f8f4e9, #f5f1e6);\n            position: relative;\n        }\n\n        .paper-texture::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background-image: repeating-linear-gradient(\n                to bottom,\n                transparent 0px,\n                transparent 2px,\n                rgba(0, 0, 0, 0.01) 2px,\n                rgba(0, 0, 0, 0.01) 4px\n            );\n            pointer-events: none;\n        }\n\n        .newspaper-border {\n            border-style: double;\n            position: relative;\n        }\n\n        .vintage-shadow {\n            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.05) inset;\n        }\n\n        .ornate-corner::before,\n        .ornate-corner::after {\n            content: '❦';\n            position: absolute;\n            color: rgba(0, 0, 0, 0.3);\n            font-size: 1.5rem;\n        }\n\n        .ornate-corner::before {\n            top: -0.75rem;\n            left: -0.75rem;\n            transform: rotate(-45deg);\n        }\n\n        .ornate-corner::after {\n            top: -0.75rem;\n            right: -0.75rem;\n            transform: rotate(45deg);\n        }\n\n        .column-rule {\n            column-rule: 1px solid rgba(0, 0, 0, 0.1);\n        }\n\n        .first-letter::first-letter {\n            initial-letter: 2;\n            -webkit-initial-letter: 2;\n            color: #4a4a4a;\n            font-family: 'UnifrakturMaguntia', cursive;\n            margin-right: 0.5rem;\n        }\n\n        .coffee-stain {\n            position: absolute;\n            width: 100px;\n            height: 100px;\n            background: radial-gradient(circle at center, rgba(139, 69, 19, 0.05) 0%, transparent 70%);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n\n        .fold-line {\n            position: absolute;\n            left: 50%;\n            top: 0;\n            bottom: 0;\n            width: 1px;\n            background: linear-gradient(\n                to bottom,\n                transparent,\n                rgba(0, 0, 0, 0.03) 20%,\n                rgba(0, 0, 0, 0.03) 80%,\n                transparent\n            );\n        }\n    ",
          }}
        />
        <div className="max-w-5xl mx-auto paper-texture vintage-shadow relative">
          {/* Decorative Elements */}
          <div
            className="coffee-stain"
            style={{ top: "15%", right: "10%", transform: "rotate(15deg)" }}
          />
          <div
            className="coffee-stain"
            style={{ bottom: "20%", left: "15%", transform: "rotate(-25deg)" }}
          />
          <div className="fold-line" />
          {/* Header */}
          <header className="px-6 sm:px-12 py-8 border-b-2 border-neutral-800 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-20" />
            <div className="text-center">
              <div className="mb-2 text-xs tracking-widest text-neutral-600 uppercase">
                Vol. MMXXIV • No. 127 • Price: Priceless
              </div>
              <h1 className="font-fraktur text-5xl sm:text-7xl text-neutral-900 tracking-tight mb-2">
                The Daily Forum
              </h1>
              <div className="text-xs italic text-neutral-600">
                "Veritas in Colloquium"
              </div>
              <div className="flex justify-center items-center gap-4 mt-3 text-neutral-600">
                <span className="text-sm">Est. MMXXIV</span>
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span className="text-sm">Sunday Edition</span>
              </div>
            </div>
          </header>
          {/* Forum Content */}
          <main className="px-6 sm:px-12 py-8">
            {/* Featured Discussion */}
            <article className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-playfair font-black text-2xl sm:text-3xl text-neutral-900">
                  Latest Discussions
                </h2>
                <div className="text-xs text-neutral-600 italic">Page A1</div>
              </div>
              <div className="newspaper-border border-neutral-800 p-6 bg-white/50 ornate-corner">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:block">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center border-2 border-neutral-300">
                      <span className="font-playfair font-bold text-neutral-600">
                        JD
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair font-bold text-xl text-neutral-900 border-b border-neutral-200 pb-2">
                      The Art of Modern Conversation
                    </h3>
                    <p className="mt-4 text-neutral-700 font-playfair leading-relaxed first-letter">
                      In an age of digital communication, have we lost the
                      nuances of face-to-face dialogue? A discussion on the
                      evolution of human interaction in our modern society
                      reveals concerning trends.
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-neutral-600 border-t border-neutral-200 pt-2">
                      <span className="italic">By John Doe</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      <span>II Hours Past</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      <span>XLII Replies</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            {/* Discussion List */}
            <div className="grid gap-6">
              {/* Discussion Item */}
              <article className="newspaper-border border-neutral-800 p-6 bg-white/50 hover:bg-white/80 transition-colors ornate-corner">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <h3 className="font-playfair font-bold text-lg text-neutral-900 border-b border-neutral-200 pb-2">
                      The Rise of Artisanal Coffee Culture
                    </h3>
                    <p className="mt-4 text-neutral-700 font-playfair first-letter">
                      A fascinating exploration of how coffee has evolved from
                      simple beverage to cultural phenomenon, transforming our
                      daily rituals.
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-neutral-600 border-t border-neutral-200 pt-2">
                      <span className="italic">By Sarah Smith</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      <span>IV Hours Past</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end justify-between text-neutral-600">
                    <span className="text-sm border-b border-neutral-200 pb-1">
                      XXIII Replies
                    </span>
                    <span className="text-xs italic">Last: I Hour Past</span>
                  </div>
                </div>
              </article>
              {/* Discussion Item */}
              <article className="newspaper-border border-neutral-800 p-6 bg-white/50 hover:bg-white/80 transition-colors ornate-corner">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <h3 className="font-playfair font-bold text-lg text-neutral-900 border-b border-neutral-200 pb-2">
                      Urban Gardens: A Return to Roots
                    </h3>
                    <p className="mt-4 text-neutral-700 font-playfair first-letter">
                      City dwellers are transforming concrete jungles into green
                      havens. What mysterious force drives this remarkable
                      transformation?
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-neutral-600 border-t border-neutral-200 pt-2">
                      <span className="italic">By Mark Johnson</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      <span>VI Hours Past</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end justify-between text-neutral-600">
                    <span className="text-sm border-b border-neutral-200 pb-1">
                      XV Replies
                    </span>
                    <span className="text-xs italic">Last: II Hours Past</span>
                  </div>
                </div>
              </article>
            </div>
          </main>
          {/* Footer */}
          <footer className="px-6 sm:px-12 py-6 border-t border-neutral-800 text-center text-sm text-neutral-600 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-20" />
            <p className="font-playfair italic">
              "All the Forum's News That's Fit to Print"
            </p>
            <div className="mt-2 flex justify-center items-center gap-4">
              <span>Copyright © MMXXIV</span>
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <span className="font-fraktur">The Daily Forum</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Blog1;
