const Logo = () => (
  <svg
    width="54"
    height="44"
    viewBox="0 0 54 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer border */}
    <rect
      x="0.75"
      y="0.75"
      width="52.5"
      height="42.5"
      stroke="#eae5ec"
      strokeWidth="1.5"
      strokeOpacity="0.7"
    />

    {/* Top-left corner accent fill */}
    <rect x="0" y="0" width="5" height="5" fill="#c2a4ff" />

    {/* G — white */}
    <text
      x="7"
      y="30"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="22"
      fontWeight="800"
      fill="#eae5ec"
      letterSpacing="-0.5"
    >
      G
    </text>

    {/* Thin vertical divider */}
    <line
      x1="28"
      y1="10"
      x2="28"
      y2="34"
      stroke="#eae5ec"
      strokeWidth="0.75"
      strokeOpacity="0.25"
    />

    {/* K — accent purple */}
    <text
      x="30"
      y="30"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="22"
      fontWeight="800"
      fill="#c2a4ff"
      letterSpacing="-0.5"
    >
      K
    </text>

    {/* Bottom-right corner accent fill */}
    <rect x="49" y="39" width="5" height="5" fill="#c2a4ff" />
  </svg>
);

export default Logo;
