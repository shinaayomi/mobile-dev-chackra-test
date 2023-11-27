export const NairaIcon = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.05072 10V6.54062H0V5.5042H1.05072V4.4958H0V3.45938H1.05072V0H3.89493L5.30797 3.45938H6.95652V0H8.96739V3.45938H10V4.4958H8.96739V5.5042H10V6.54062H8.96739V10H6.10507L4.6558 6.54062H3.06159V10H1.05072ZM2.98913 3.45938H3.49638L2.97101 2.11485H2.89855L2.98913 3.45938ZM3.06159 5.5042H4.25725L3.8587 4.4958H3.02536L3.06159 5.5042ZM6.15942 5.5042H6.99275L6.95652 4.4958H5.74275L6.15942 5.5042ZM7.01087 7.81513H7.10145L7.02899 6.54062H6.53986L7.01087 7.81513Z"
        fill="#0466C8"
      />
    </svg>
  );
};

export const ThreeDots = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="16"
      viewBox="0 0 30 16"
      fill="none"
    >
      <circle cx="10.5" cy="8.5" r="1.5" fill="#707480" />
      <circle cx="15.5" cy="8.5" r="1.5" fill="#707480" />
      <circle cx="20.5" cy="8.5" r="1.5" fill="#707480" />
    </svg>
  );
};

export const HomeIcon = ({ color = "#C1C4CD" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
    >
      <path
        d="M11.7647 3.16471L17.6471 8.45882V17.6471H15.2941V10.5882H8.23529V17.6471H5.88235V8.45882L11.7647 3.16471ZM11.7647 0L0 10.5882H3.52941V20H10.5882V12.9412H12.9412V20H20V10.5882H23.5294L11.7647 0Z"
        fill={color}
      />
    </svg>
  );
};

export const ReportIcon = ({ color = "#C1C4CD" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="20"
      viewBox="0 0 25 20"
      fill="none"
    >
      <path
        d="M17.5 0H2.5C1.125 0 0 1.125 0 2.5V17.5125C0 18.8875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V7.5L17.5 0ZM2.5 17.5125V2.5H16.25V8.75H22.5V17.5125H2.5Z"
        fill={color}
      />
    </svg>
  );
};

export const ChatIcon = ({ color = "#797B8B" }) => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.6"
        d="M16.8002 11.2339H14.5273V17.0251H12.8875V11.2339H10.625V9.66675H16.8002V11.2339Z"
        stroke={color}
        strokeWidth="0.803901"
      />
      <g opacity="0.6">
        <circle
          opacity="0.6"
          cx="13.5"
          cy="13.5"
          r="11.5"
          stroke={color}
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export const BudgetIcon = ({ color = "#707480" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M0 6H4.28571V20H0V6ZM8 0H12V20H8V0ZM16 11.4286H20V20H16V11.4286Z"
        fill="#0466C8"
      />
    </svg>
  );
};

export const ProfileIcon = ({ color = "#707480" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 2.5C11.375 2.5 12.5 3.625 12.5 5C12.5 6.375 11.375 7.5 10 7.5C8.625 7.5 7.5 6.375 7.5 5C7.5 3.625 8.625 2.5 10 2.5ZM10 15C13.375 15 17.25 16.6125 17.5 17.5H2.5C2.7875 16.6 6.6375 15 10 15ZM10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0ZM10 12.5C6.6625 12.5 0 14.175 0 17.5V20H20V17.5C20 14.175 13.3375 12.5 10 12.5Z"
        fill={color}
      />
    </svg>
  );
};
