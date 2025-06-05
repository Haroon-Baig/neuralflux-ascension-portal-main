
const WaveAnimation = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden z-0">
      <div className="absolute bottom-[-5px] left-0 w-[200%] h-full flex animate-wave">
        {/* First wave */}
        <svg
          className="h-full w-1/2"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".15"
            fill="#0EA5E9"
          />
        </svg>
        
        {/* Duplicate for infinite animation */}
        <svg
          className="h-full w-1/2"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".15"
            fill="#0EA5E9"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-[200%] h-full flex animate-wave" style={{ animationDelay: '-5s', animationDuration: '20s' }}>
        {/* Second wave */}
        <svg
          className="h-full w-1/2"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            opacity=".1"
            fill="#0EA5E9"
          />
        </svg>
        
        {/* Duplicate for infinite animation */}
        <svg
          className="h-full w-1/2"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            opacity=".1"
            fill="#0EA5E9"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-[200%] h-full flex animate-wave" style={{ animationDelay: '-2s', animationDuration: '30s' }}>
        {/* Third wave */}
        <svg
          className="h-full w-1/2"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            opacity=".2"
            fill="#0EA5E9"
          />
        </svg>
        
        {/* Duplicate for infinite animation */}
        <svg
          className="h-full w-1/2"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            opacity=".2"
            fill="#0EA5E9"
          />
        </svg>
      </div>
    </div>
  );
};

export default WaveAnimation;
