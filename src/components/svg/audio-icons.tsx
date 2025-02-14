import { SVGProps } from "react";

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      // fill={`${fill ? "currentColor" : "none"}`}
      fill="none"
      {...props}
    >
      <path
        d="M3 9.00004V6.33004C3 3.01504 5.3475 1.65754 8.22 3.31504L10.5375 4.65004L12.855 5.98504C15.7275 7.64254 15.7275 10.3575 12.855 12.015L10.5375 13.35L8.22 14.685C5.3475 16.3425 3 14.985 3 11.67V9.00004Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PauseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={14} viewBox="0 0 12 14" fill="none" {...props}>
      <path
        d="M2.04297 1.71094L2.04297 12.3776M10.042 1.71094L10.042 12.3776"
        stroke="currentColor"
        strokeWidth="2.66667"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function AudioNotFoundIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={78} height={79} viewBox="0 0 78 79" fill="none" {...props}>
      <path
        d="M69.16 51.5899C67.0475 50.1274 64.48 49.25 61.75 49.25C58.695 49.25 55.8675 50.3225 53.625 52.11C50.635 54.4825 48.75 58.155 48.75 62.25C48.75 64.6875 49.4325 66.995 50.635 68.945C50.765 69.1725 50.9275 69.4001 51.1225 69.6276C53.3975 73.0076 57.2975 75.25 61.75 75.25C65.0325 75.25 68.0225 74.0475 70.2975 72C71.305 71.155 72.1825 70.115 72.865 68.945C74.0675 66.995 74.75 64.6875 74.75 62.25C74.75 57.83 72.54 53.9299 69.16 51.5899ZM66.95 67.3851C66.4625 67.8726 65.845 68.1 65.2275 68.1C64.61 68.1 63.9925 67.8726 63.505 67.3851L61.7825 65.6625L59.995 67.4499C59.5075 67.9374 58.89 68.165 58.2725 68.165C57.655 68.165 57.0375 67.9374 56.55 67.4499C55.6075 66.5074 55.6075 64.9474 56.55 64.0049L58.3375 62.2175L56.615 60.4951C55.6725 59.5526 55.6725 57.9926 56.615 57.0501C57.5575 56.1076 59.1175 56.1076 60.06 57.0501L61.7825 58.7725L63.4075 57.1475C64.35 56.205 65.91 56.205 66.8525 57.1475C67.795 58.09 67.795 59.65 66.8525 60.5925L65.2275 62.2175L66.95 63.9401C67.8925 64.8826 67.8925 66.4101 66.95 67.3851Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
      <path
        opacity="0.4"
        d="M71.5 39.5C71.5 43.7575 70.6875 47.8524 69.16 51.5899C67.0475 50.1274 64.48 49.25 61.75 49.25C58.695 49.25 55.8675 50.3225 53.625 52.11C50.635 54.4825 48.75 58.155 48.75 62.25C48.75 64.6875 49.4325 66.995 50.635 68.945C50.765 69.1725 50.9275 69.4001 51.1225 69.6276C47.385 71.1551 43.29 72 39 72C21.06 72 6.5 57.44 6.5 39.5C6.5 21.56 21.06 7 39 7C56.94 7 71.5 21.56 71.5 39.5Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
      <path
        d="M30.4844 39.5002V34.9826C30.4844 29.3926 34.4493 27.0851 39.2918 29.8801L43.1919 32.1226L47.0918 34.3651C51.9343 37.1601 51.9343 41.7426 47.0918 44.5376L43.1919 46.7801L39.2918 49.0226C34.4493 51.8176 30.4844 49.5426 30.4844 43.9201V39.5002Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
    </svg>
  );
}
export function CirclurPauseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <g clipPath="url(#clip0_1062_17184)">
        <path
          d="M8.33464 12.4998V7.49984M11.668 12.4998V7.49984M18.3346 9.99984C18.3346 14.6022 14.6037 18.3332 10.0013 18.3332C5.39893 18.3332 1.66797 14.6022 1.66797 9.99984C1.66797 5.39746 5.39893 1.6665 10.0013 1.6665C14.6037 1.6665 18.3346 5.39746 18.3346 9.99984Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1062_17184">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CLoseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M13.9096 2.0899L2.08984 13.9097"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.08984 2.0899L13.9096 13.9097"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ForwordMoveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={16} viewBox="0 0 18 16" fill="none" {...props}>
      <path d="M16.666 8.00008L4.66598 14.9283L4.66598 1.07186L16.666 8.00008Z" fill="currentColor" />
      <rect x="15.332" y="6.10352e-05" width="2.66667" height={16} fill="currentColor" />
    </svg>
  );
}

export function RepeatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none" {...props}>
      <path
        d="M11.6685 3L13.7018 4.95002L7.07682 4.93334C4.10182 4.93334 1.66016 7.37502 1.66016 10.3667C1.66016 11.8584 2.26849 13.2167 3.25183 14.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33412 18.0001L6.30078 16.05L12.9258 16.0667C15.9008 16.0667 18.3425 13.625 18.3425 10.6334C18.3425 9.1417 17.7341 7.78338 16.7508 6.80005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.207 12.725V8.27502L8.95703 9.66668"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RepeatDashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none" {...props}>
      <path
        d="M13.6583 3L14.4941 3.81312C14.8674 4.17638 15.0541 4.35801 14.9883 4.51234C14.9226 4.66667 14.6586 4.66667 14.1306 4.66667H7.66315C4.3521 4.66667 1.66797 7.27834 1.66797 10.5C1.66797 11.7393 2.0652 12.8885 2.74255 13.8333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.34297 18L5.50729 17.1869C5.13395 16.8235 4.94728 16.642 5.01298 16.4876C5.07868 16.3333 5.34267 16.3333 5.87065 16.3333H12.3382C15.6492 16.3333 18.3333 13.7216 18.3333 10.5C18.3333 9.26063 17.9361 8.11148 17.2588 7.16663"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M7.5 10.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function PlaySpeedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none" {...props}>
      <path
        d="M11.2487 11.3333L14.1654 8M11.6654 13C11.6654 13.9205 10.9192 14.6667 9.9987 14.6667C9.0782 14.6667 8.33203 13.9205 8.33203 13C8.33203 12.0795 9.0782 11.3333 9.9987 11.3333C10.9192 11.3333 11.6654 12.0795 11.6654 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5 10.5C5 7.73857 7.23857 5.5 10 5.5C10.9107 5.5 11.7646 5.74348 12.5 6.16891"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2.08203 10.5C2.08203 6.76809 2.08203 4.90212 3.2414 3.74274C4.40077 2.58337 6.26675 2.58337 9.9987 2.58337C13.7306 2.58337 15.5966 2.58337 16.756 3.74274C17.9154 4.90212 17.9154 6.76809 17.9154 10.5C17.9154 14.232 17.9154 16.098 16.756 17.2574C15.5966 18.4167 13.7306 18.4167 9.9987 18.4167C6.26675 18.4167 4.40077 18.4167 3.2414 17.2574C2.08203 16.098 2.08203 14.232 2.08203 10.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ReciterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none" {...props}>
      <path
        d="M4.31803 13.2471C3.27004 13.8613 0.522312 15.1156 2.19587 16.6851C3.01338 17.4517 3.92388 18.0001 5.06861 18.0001H11.6006C12.7454 18.0001 13.6559 17.4517 14.4734 16.6851C16.147 15.1156 13.3992 13.8613 12.3512 13.2471C9.89372 11.8066 6.77552 11.8066 4.31803 13.2471Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 6.33333C11.6667 8.17428 10.1743 9.66667 8.33333 9.66667C6.49238 9.66667 5 8.17428 5 6.33333C5 4.49238 6.49238 3 8.33333 3C10.1743 3 11.6667 4.49238 11.6667 6.33333Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14.168 5.26191C14.168 5.26191 15.0013 5.69644 15.418 6.33333C15.418 6.33333 16.668 3.83333 18.3346 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function DownloadIconNew(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M6.66502 14.1666L9.99836 17.4999M9.99836 17.4999L13.3317 14.1666M9.99836 17.4999V9.99994M17.3984 15.0749C18.1229 14.5655 18.6662 13.8384 18.9494 12.9992C19.2327 12.1601 19.2412 11.2525 18.9737 10.4081C18.7062 9.56381 18.1766 8.82669 17.4617 8.30375C16.7469 7.78081 15.884 7.49925 14.9984 7.49994H13.9484C13.6977 6.52317 13.2288 5.61598 12.5768 4.84668C11.9248 4.07737 11.1068 3.46599 10.1844 3.05857C9.26192 2.65115 8.25906 2.4583 7.2513 2.49454C6.24353 2.53078 5.25712 2.79517 4.36632 3.2678C3.47552 3.74043 2.70354 4.40898 2.10851 5.22314C1.51348 6.03729 1.1109 6.97582 0.931075 7.96807C0.751249 8.96032 0.798866 9.98044 1.07034 10.9516C1.34182 11.9228 1.83007 12.8198 2.49836 13.5749"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none" {...props}>
      <path
        d="M2.5 12.1666L2.69487 12.7188C3.45333 14.8677 3.83257 15.9422 4.69785 16.5545C5.56313 17.1666 6.70258 17.1666 8.9815 17.1666H11.0185C13.2974 17.1666 14.4368 17.1666 15.3022 16.5545C16.1674 15.9422 16.5467 14.8677 17.3052 12.7188L17.5 12.1666"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.0013 12.1667V3.83337M10.0013 12.1667C9.4178 12.1667 8.32758 10.5048 7.91797 10.0834M10.0013 12.1667C10.5848 12.1667 11.6751 10.5048 12.0846 10.0834"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M10.518 17.3416C10.2346 17.4416 9.76797 17.4416 9.48464 17.3416C7.06797 16.5166 1.66797 13.0749 1.66797 7.24159C1.66797 4.66659 3.74297 2.58325 6.3013 2.58325C7.81797 2.58325 9.15964 3.31659 10.0013 4.44992C10.843 3.31659 12.193 2.58325 13.7013 2.58325C16.2596 2.58325 18.3346 4.66659 18.3346 7.24159C18.3346 13.0749 12.9346 16.5166 10.518 17.3416Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function HeartDislikeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M5.09296 14.5835C3.25129 12.8585 1.66797 10.4002 1.66797 7.2335C1.66797 4.6585 3.74297 2.5752 6.3013 2.5752C7.81797 2.5752 9.15964 3.30852 10.0013 4.44185C10.843 3.30852 12.193 2.5752 13.7013 2.5752C14.6596 2.5752 15.5513 2.86683 16.293 3.37516"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.1195 5.8335C18.2612 6.27516 18.3362 6.75016 18.3362 7.24183C18.3362 13.0752 12.9362 16.5168 10.5195 17.3502C10.2362 17.4502 9.76952 17.4502 9.48619 17.3502C8.94452 17.1668 8.2612 16.8502 7.51953 16.4085"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3346 1.6665L1.66797 18.3332"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SelectIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M7.5 8.33333L10 10.8333L18.3333 2.5"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 7.91667V10V13.5C17.5 15.7091 15.7091 17.5 13.5 17.5H6.5C4.29086 17.5 2.5 15.7091 2.5 13.5V6.5C2.5 4.29086 4.29086 2.5 6.5 2.5H10H12.9167"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? "1.5"}
        strokeLinecap="round"
      />
    </svg>
  );
}
export function TrashBeenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M15.75 4.48486C13.2525 4.23736 10.74 4.10986 8.235 4.10986C6.75 4.10986 5.265 4.18486 3.78 4.33486L2.25 4.48486"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1383 6.85498L13.6508 14.4075C13.5683 15.585 13.5008 16.5 11.4083 16.5H6.59328C4.50078 16.5 4.43328 15.585 4.35078 14.4075L3.86328 6.85498"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.74609 12.375H10.2436"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.125 9.375H10.875"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function AudioListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
      <path
        d="M14.666 18.3334H6.33268C3.83268 18.3334 2.16602 17.0834 2.16602 14.1667V10C2.16602 7.08337 3.83268 5.83337 6.33268 5.83337H14.666C17.166 5.83337 18.8327 7.08337 18.8327 10V14.1667C18.8327 17.0834 17.166 18.3334 14.666 18.3334Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 3.75H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.66663H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.90924 15.9249C8.53977 15.9249 9.0509 15.4138 9.0509 14.7833C9.0509 14.1527 8.53977 13.6416 7.90924 13.6416C7.27872 13.6416 6.76758 14.1527 6.76758 14.7833C6.76758 15.4138 7.27872 15.9249 7.90924 15.9249Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2341 14.025V9.56662C13.2341 8.61662 12.6425 8.48331 12.0341 8.64998L9.75075 9.27498C9.33409 9.39164 9.05078 9.71662 9.05078 10.1916V10.9833V11.5166V14.7833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0928 15.1666C12.7234 15.1666 13.2345 14.6555 13.2345 14.025C13.2345 13.3944 12.7234 12.8833 12.0928 12.8833C11.4623 12.8833 10.9512 13.3944 10.9512 14.025C10.9512 14.6555 11.4623 15.1666 12.0928 15.1666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.05078 11.525L13.2341 10.3833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
