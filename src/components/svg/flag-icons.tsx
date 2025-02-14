import { SVGProps } from "react";

export function BangladeshFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-bd" viewBox="0 0 640 480" {...props}>
      <path fill="#006a4e" d="M0 0h640v480H0z" />
      <circle cx={280} cy={240} r={160} fill="#f42a41" />
    </svg>
  );
}
export function USAFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-us" viewBox="0 0 640 480" {...props}>
      <path fill="#bd3d44" d="M0 0h640v480H0" />
      <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
      <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
      <marker id="us-a" markerHeight="30" markerWidth="30">
        <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
      </marker>
      <path
        fill="none"
        markerMid="url(#us-a)"
        d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"
      />
    </svg>
  );
}
export function IndiaFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="flag-icons-in"
      viewBox="0 0 640 480"
      {...props}
    >
      <path fill="#f93" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#128807" d="M0 320h640v160H0z" />
      <g transform="matrix(3.2 0 0 3.2 320 240)">
        <circle r={20} fill="#008" />
        <circle r="17.5" fill="#fff" />
        <circle r="3.5" fill="#008" />
        <g id="in-d">
          <g id="in-c">
            <g id="in-b">
              <g id="in-a" fill="#008">
                <circle r=".9" transform="rotate(7.5 -8.8 133.5)" />
                <path d="M0 17.5.6 7 0 2l-.6 5z" />
              </g>
              <use xlinkHref="#in-a" width="100%" height="100%" transform="rotate(15)" />
            </g>
            <use xlinkHref="#in-b" width="100%" height="100%" transform="rotate(30)" />
          </g>
          <use xlinkHref="#in-c" width="100%" height="100%" transform="rotate(60)" />
        </g>
        <use xlinkHref="#in-d" width="100%" height="100%" transform="rotate(120)" />
        <use xlinkHref="#in-d" width="100%" height="100%" transform="rotate(-120)" />
      </g>
    </svg>
  );
}
