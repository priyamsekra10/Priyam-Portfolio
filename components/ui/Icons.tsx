import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 16, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props
  };
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function Download(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4v11" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  );
}

export function Globe(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.500 5.600 12 3Z" />
    </svg>
  );
}

export function Pen(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
      <path d="m13 7 4 4" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.500 4.500 4.500L19 7.500" />
    </svg>
  );
}

export function GitHub({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 1.800a10.200 10.200 0 0 0-3.220 19.880c.510.090.700-.220.700-.490v-1.900c-2.840.620-3.440-1.210-3.440-1.210-.460-1.180-1.130-1.490-1.130-1.490-.930-.630.070-.620.070-.620 1.020.070 1.560 1.050 1.560 1.050.910 1.560 2.390 1.110 2.970.850.090-.660.360-1.110.650-1.370-2.270-.260-4.650-1.130-4.650-5.040 0-1.110.400-2.020 1.050-2.740-.110-.260-.460-1.300.100-2.700 0 0 .860-.270 2.800 1.050a9.700 9.700 0 0 1 5.100 0c1.940-1.320 2.800-1.050 2.800-1.050.560 1.400.210 2.440.100 2.700.650.720 1.050 1.630 1.050 2.740 0 3.920-2.390 4.780-4.660 5.030.370.320.690.940.690 1.900v2.810c0 .270.180.590.700.490A10.200 10.200 0 0 0 12 1.800Z" />
    </svg>
  );
}

export function LinkedIn({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.980 3.500a2.500 2.500 0 1 1 0 5 2.500 2.500 0 0 1 0-5ZM3 9.750h4V21H3V9.750Zm6.500 0h3.830v1.540h.050c.530-1.010 1.840-1.790 3.620-1.790 3.870 0 4.500 2.400 4.500 5.530V21h-4v-5.300c0-1.270-.020-2.900-1.770-2.900-1.770 0-2.040 1.380-2.040 2.800V21h-4V9.750Z" />
    </svg>
  );
}

export function Apple({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.360 12.620c-.020-2.300 1.880-3.400 1.970-3.460-1.070-1.570-2.740-1.780-3.340-1.810-1.420-.140-2.770.840-3.490.840-.720 0-1.830-.820-3.010-.800-1.550.020-2.980.900-3.780 2.290-1.610 2.790-.410 6.920 1.160 9.190.770 1.110 1.680 2.360 2.880 2.310 1.160-.050 1.590-.750 2.990-.750 1.400 0 1.790.750 3.010.720 1.240-.020 2.030-1.130 2.790-2.250.880-1.290 1.240-2.540 1.260-2.600-.030-.010-2.420-.930-2.440-3.680ZM14.070 5.870c.640-.770 1.070-1.850.950-2.920-.920.040-2.030.610-2.690 1.380-.590.680-1.110 1.780-.970 2.830 1.020.080 2.070-.520 2.710-1.290Z" />
    </svg>
  );
}

export function GooglePlay({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.300 2.600a1.500 1.500 0 0 0-.300.930v16.940c0 .350.110.670.300.930L13.100 12 4.300 2.600Zm10.100 10.780-2.060 2.200-6.300 6.720 11.020-6.200-2.660-2.720Zm3.900-3.560-2.620-1.470L5.940 2.800l8.460 9.020 2.060-2.200 1.840.200Zm.760.430-2.900 1.750 2.900 1.750 2.180-1.230c.730-.410.730-1.130 0-1.540l-2.180-.730Z" />
    </svg>
  );
}
