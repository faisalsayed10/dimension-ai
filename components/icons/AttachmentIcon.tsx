interface Props {
  className?: string;
  onClick?: () => void;
}

const AttachmentIcon: React.FC<Props> = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <svg
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.25002 4.25L4.37502 9.125C4.07665 9.42337 3.90903 9.82804 3.90903 10.25C3.90903 10.672 4.07665 11.0766 4.37502 11.375C4.67339 11.6734 5.07806 11.841 5.50002 11.841C5.92198 11.841 6.32665 11.6734 6.62502 11.375L11.5 6.5C12.0968 5.90326 12.432 5.09391 12.432 4.25C12.432 3.40609 12.0968 2.59674 11.5 2C10.9033 1.40326 10.0939 1.06802 9.25002 1.06802C8.40611 1.06802 7.59676 1.40326 7.00002 2L2.12502 6.875C1.22992 7.77011 0.727051 8.98413 0.727051 10.25C0.727051 11.5159 1.22992 12.7299 2.12502 13.625C3.02013 14.5201 4.23415 15.023 5.50002 15.023C6.76589 15.023 7.97992 14.5201 8.87502 13.625L13.75 8.75"
          stroke="#6C6F75"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default AttachmentIcon;
