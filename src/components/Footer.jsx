// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-white">
          <div className="text-sm">
            <p>&copy; Developed by Amartya Paul. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/am1475" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.486 2 12c0 4.418 2.865 8.166 6.839 9.489.5.091.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.151-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.004.07 1.532 1.034 1.532 1.034.892 1.528 2.341 1.087 2.91.832.091-.647.349-1.087.636-1.338-2.22-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.983 1.029-2.681-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.5.336c1.91-1.296 2.75-1.026 2.75-1.026.544 1.378.201 2.397.099 2.65.64.698 1.029 1.59 1.029 2.681 0 3.842-2.337 4.688-4.563 4.938.359.31.678.924.678 1.86 0 1.344-.013 2.428-.013 2.756 0 .268.18.579.688.482C19.137 20.162 22 16.418 22 12c0-5.514-4.486-10-10-10z" />
              </svg>
            </a>
            <a href="https://www.hackerrank.com/profile/amartyapaul760" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">LeetCode</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.606 15.218a.557.557 0 00-.787 0l-2.075 2.074c-3.651 3.653-5.217 5.217-7.84 5.274-1.486.036-2.12-.295-2.674-.739-.58-.468-.92-1.11-.958-2.558-.057-2.622 1.618-4.188 5.275-7.842l6.292-6.291c1.574-1.574 2.106-2.833 2.163-4.32.028-.74-.147-1.82-.733-2.398-.615-.617-1.437-.766-2.466-.733-1.322.042-2.185.505-3.084 1.112-.652.443-1.273.972-2.324 2.022l-1.753 1.754a.557.557 0 00.788.787l1.754-1.754c1.076-1.075 1.65-1.543 2.317-1.966.77-.505 1.426-.888 2.646-.929.883-.027 1.336.178 1.622.465.287.287.491.74.464 1.623-.038 1.22-.422 1.876-.927 2.646-.423.668-.892 1.24-1.967 2.317l-6.291 6.292c-3.84 3.84-5.575 5.47-5.636 8.312-.039 1.789.426 2.665 1.143 3.277.61.49 1.373.794 2.811.754 2.849-.073 4.498-1.714 8.314-5.631l2.072-2.073a.556.556 0 000-.788z" />
                <path d="M22.13 2.12c-.56-.56-1.275-.84-2.13-.84-.855 0-1.57.28-2.13.84l-1.416 1.414a.557.557 0 00.788.788l1.414-1.414c.783-.782 2.194-.782 2.977 0 .396.396.61.924.61 1.488 0 .564-.215 1.092-.61 1.488L5.022 21.604c-.394.394-.923.61-1.487.61-.565 0-1.093-.216-1.488-.61-.396-.396-.61-.924-.61-1.488 0-.564.215-1.092.61-1.487l1.415-1.415a.557.557 0 00-.788-.788L1.737 17.83c-.56.56-.84 1.275-.84 2.13 0 .854.28 1.57.84 2.13.56.56 1.275.84 2.13.84.855 0 1.57-.28 2.13-.84L22.13 6.38c.56-.56.84-1.275.84-2.13 0-.854-.28-1.57-.84-2.13z" />
              </svg>
            </a>
            <a href="https://vercel.com/new/am1475s-projects" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Vercel</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 22.525H0L12 1.475l12 21.05z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/amartya-paul-702650245" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.792 0 0 .792 0 1.77v20.459C0 23.208.792 24 1.77 24h20.459C23.208 24 24 23.208 24 22.23V1.77C24 .792 23.208 0 22.23 0zM7.119 20.452H3.735V9.631h3.384v10.821zM5.427 8.209c-1.084 0-1.962-.877-1.962-1.961s.877-1.961 1.962-1.961 1.961.877 1.961 1.961-.877 1.961-1.961 1.961zm15.025 12.243h-3.385v-5.404c0-1.288-.024-2.944-1.792-2.944-1.795 0-2.068 1.4-2.068 2.846v5.502h-3.385V9.631h3.25v1.479h.044c.452-.857 1.549-1.76 3.192-1.76 3.413 0 4.039 2.245 4.039 5.165v5.937z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
