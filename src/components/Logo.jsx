// src/components/Logo.jsx
const Logo = ({ color = "#27ae60", size = 100, strokeWidth = 30 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 300 300" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <line 
        x1="40" y1="40" x2="260" y2="260" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round"
      />
      <line 
        x1="40" y1="130" x2="170" y2="260" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round"
      />
      <line 
        x1="40" y1="220" x2="80" y2="260" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round"
      />
      <path 
        d="M220 60L260 100L220 140" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;