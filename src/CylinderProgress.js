import React from "react";

const CylinderProgress = ({ size, progress, name, colorDark, colorLight }) => {
  const mColorDark = colorDark;
  const mColorLight = colorLight;

  const totalHeight = 980 - 200;
  const mValue = 980 - totalHeight * progress;
  const mValue2 = totalHeight * progress;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 705 1029"
      fill="none"
      {...mValue}
      {...mValue2}
      {...mColorDark}
      {...mColorLight}
      {...name}
    >
      <ellipse cx={345.01} cy={886.817} fill={mColorLight} rx={344.157} ry={125.636} />
      <g
        filter="url(#a)"
        style={{
          display: "inline",
        }}
        transform="translate(.853 -5.397)"
      >
        <path
          fill="url(#b)"
          d="M140.748 904.73V222.664c0-.638.61-1.109 1.234-.972 170.331 37.192 246.994 35.053 411.365-.006.623-.133 1.229.338 1.229.974v682.17c0 .376-.214.722-.55.892-131.229 66.394-288.073 42.756-412.607-.048a.993.993 0 0 1-.671-.944z"
          style={{
            fill: "url(#b)",
          }}
        />
      </g>

      <rect
        x={140.0}
        y={mValue}
        width={440.0}
        height={mValue2}
        style={{
          fill: `url(#${name}d)`,
          stroke: "#000",
          strokeWidth: 2,
          strokeDasharray: "none",
          strokeOpacity: 0.198148,
        }}
      />

      <ellipse
        cx={348.065}
        cy={mValue}
        rx={207.434}
        ry={41.487}
        style={{
          fill: `url(#${name}f)`,
          stroke: "#000",
          strokeWidth: 2,
          strokeDasharray: "none",
          strokeOpacity: 0.198148,
        }}
      />
      <defs>
        <linearGradient id="b" x1={162.267} x2={538.354} y1={582.916} y2={582.916} gradientUnits="userSpaceOnUse">
          <stop stopColor="#9E9898" />
          <stop offset={0.484} stopColor="#BDBDBD" />
          <stop offset={0.984} stopColor="#9E9898" />
        </linearGradient>
        <linearGradient id={name + "d"} x1={162.267} x2={538.354} y1={687.739} y2={687.739} gradientUnits="userSpaceOnUse">
          <stop stopColor={mColorDark} />
          <stop offset={0.484} stopColor={mColorLight} />
          <stop offset={0.984} stopColor={mColorDark} />
        </linearGradient>
        <linearGradient id="g" x1={36.066} x2={666.382} y1={521.425} y2={521.425} gradientTransform="translate(.502 -.048)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#656565" />
          <stop offset={0.484} stopColor="#BDBDBD" />
          <stop offset={0.984} stopColor="#656565" />
        </linearGradient>
        <linearGradient xlinkHref={"#" + name + "d"} id={name + "f"} x1={138.322} x2={555.189} y1={431.376} y2={431.376} gradientTransform="translate(1.309 -5.397)" gradientUnits="userSpaceOnUse" />
        <linearGradient xlinkHref={"#" + name + "d"} id="e" x1={162.267} x2={538.354} y1={687.739} y2={687.739} gradientUnits="userSpaceOnUse" />
        <filter id="h" width={704.123} height={190.812} x={0} y={0.072} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx={20} dy={10} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1164_2704" />
        </filter>
        <filter id="a" width={453.828} height={745.455} x={120.748} y={201.664} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx={20} dy={-20} />
          <feGaussianBlur stdDeviation={25} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1164_2704" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx={-20} />
          <feGaussianBlur stdDeviation={25} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="effect1_innerShadow_1164_2704" result="effect2_innerShadow_1164_2704" />
        </filter>
        <filter id="c" width={453.828} height={552.832} x={120.748} y={410.66} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx={20} dy={-20} />
          <feGaussianBlur stdDeviation={25} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1164_2704" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx={-20} />
          <feGaussianBlur stdDeviation={25} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="effect1_innerShadow_1164_2704" result="effect2_innerShadow_1164_2704" />
        </filter>
      </defs>
      <path
        d="M375.172 40.216C263.406 38.128 134.438 51.023 1.207 92.882c-.417.131-.705.519-.705.956v809.576H.5c0 .055.008.109.016.164 19.104 112.415 541.248 214.243 693.37.18a1 1 0 0 0 .184-.579V93.795c0-.415-.227-.777-.615-.924-59.32-22.514-174.584-49.969-318.283-52.655zM553.85 221.638c.623-.133 1.228.339 1.228.975v682.17c0 .376-.215.72-.55.89-131.23 66.394-288.072 42.758-412.606-.046a.996.996 0 0 1-.672-.946V222.617c0-.638.61-1.11 1.234-.973 170.331 37.192 246.995 35.053 411.366-.006z"
        style={{
          fill: "url(#g)",
          stroke: { mColorDark },
          strokeWidth: 0.999999,
          strokeOpacity: 1,
        }}
      />
      <g
        filter="url(#h)"
        style={{
          stroke: { mColorDark },
          strokeOpacity: 1,
        }}
        transform="translate(1.103 -.072)"
      >
        <ellipse
          cx={347.062}
          cy={90.478}
          fill="#9e9898"
          rx={347.062}
          ry={90.406}
          style={{
            stroke: colorDark,
            strokeOpacity: 1,
          }}
        />
      </g>

      <text
        xmlSpace="preserve"
        style={{
          fontSize: "600%",
          fontWeight: "bold",
          textAlign: "center",
          textAnchor: "middle",
          fill: "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 3.77696,
        }}
      >
        <tspan
          x="50%"
          y="60%"
          style={{
            fill: "#fff",
            stroke: "none",
            strokeWidth: 3.77696,
          }}
        >
          {progress * 100 + "%"}
        </tspan>
      </text>
    </svg>
  );
};

CylinderProgress.defaultProps = {
  name: "Unknown",
  colorDark: "#323c82",
  colorLight: "#74ABFF",
};

export default CylinderProgress;
