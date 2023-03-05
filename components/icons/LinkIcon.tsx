interface Props {
  className?: string;
}

const LinkIcon: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_152)">
          <path
            d="M7.5 10.5C7.74441 10.7494 8.03614 10.9476 8.3581 11.0829C8.68005 11.2182 9.02577 11.2879 9.375 11.2879C9.72423 11.2879 10.0699 11.2182 10.3919 11.0829C10.7139 10.9476 11.0056 10.7494 11.25 10.5L14.25 7.5C14.7473 7.00272 15.0266 6.32826 15.0266 5.625C15.0266 4.92174 14.7473 4.24728 14.25 3.75C13.7527 3.25272 13.0783 2.97335 12.375 2.97335C11.6717 2.97335 10.9973 3.25272 10.5 3.75L10.125 4.125"
            stroke="#6C6F75"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 7.5C10.2556 7.25055 9.9639 7.05238 9.64194 6.91709C9.31998 6.7818 8.97427 6.71212 8.62504 6.71212C8.27581 6.71212 7.93009 6.7818 7.60813 6.91709C7.28618 7.05238 6.99445 7.25055 6.75004 7.5L3.75004 10.5C3.25276 10.9973 2.97339 11.6717 2.97339 12.375C2.97339 13.0783 3.25276 13.7527 3.75004 14.25C4.24732 14.7473 4.92178 15.0266 5.62504 15.0266C6.3283 15.0266 7.00276 14.7473 7.50004 14.25L7.87504 13.875"
            stroke="#6C6F75"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_152">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default LinkIcon;
