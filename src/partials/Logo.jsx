import React from 'react';

const Logo = () => {
    return (
        <div>
            <svg
                  width="32"
                  height="32"
                  className="shrink-0"
                  viewBox="0 0 32 32"
                >
                  <rect fill="#6366F1" width="32" height="32" rx="16" />
                  <path
                    d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                    fill="#4F46E5"
                  />
                  <path
                    d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                    fill="#A5B4FC" opacity="25%"
                  />
                  <path
                    d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                    fill="#38BDF8" opacity="25%"
                  />
                </svg>
        </div>
    );
};

export default Logo;