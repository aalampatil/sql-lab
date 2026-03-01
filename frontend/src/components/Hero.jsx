import React from "react";

function Hero() {
  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-20 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left section */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="flex items-center gap-2 sm:gap-3 bg-orange-100 border border-orange-300 rounded-full w-fit px-3 sm:px-4 py-1.5 sm:py-2">
                <img
                  alt="ChaiLabs"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  src="/cup-logo.png"
                />
                <span className="text-xs sm:text-sm text-orange-700 font-medium">
                  Interactive Learning Platform
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Learn to code
                <br />
                that builds
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  real skills
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 max-w-lg leading-relaxed">
                Master SQL and NoSql through hands-on coding challenges. Build
                projects, earn XP, and track your progress.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="/python"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base"
                >
                  Start Free<span>→</span>
                </a>
                <a
                  href="/html"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-orange-500 text-orange-600 hover:bg-orange-100 font-semibold rounded-lg transition text-sm sm:text-base text-center"
                >
                  View All Studios
                </a>
              </div>

              {/* <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-4">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600">
                    664+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Challenges
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600">
                    5
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Technologies
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600">
                    44K+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Total XP
                  </div>
                </div>
              </div> */}
            </div>

            {/* Right section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6 backdrop-blur-sm hover:border-orange-400 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-900 font-semibold">
                      Write Code
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6 backdrop-blur-sm hover:border-orange-400 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-900 font-semibold">
                      Get Feedback
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6 backdrop-blur-sm hover:border-orange-400 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                      </svg>
                    </div>
                    <span className="text-gray-900 font-semibold">Earn XP</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="/sql"
                  className="px-4 py-2 bg-orange-100 border border-orange-300 text-orange-700 rounded-lg hover:bg-orange-200 hover:border-orange-400 transition font-medium"
                >
                  Sql
                </a>
                <a
                  href="/sql"
                  className="px-4 py-2 bg-orange-100 border border-orange-300 text-orange-700 rounded-lg hover:bg-orange-200 hover:border-orange-400 transition font-medium"
                >
                  NoSql
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
