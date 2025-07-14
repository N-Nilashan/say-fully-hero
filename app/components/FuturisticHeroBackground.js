const FuturisticHeroBackground = () => {
  return (
    <div className="absolute w-full h-full overflow-hidden z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900 to-black"></div>

      {/* Larger grid pattern */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
      </div>

      {/* Center-focused sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => {
          const left = 20 + Math.random() * 60;
          const top = 20 + Math.random() * 60;

          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                left: `${left}%`,
                top: `${top}%`,
                opacity: Math.random() * 0.5 + 0.1,
                boxShadow: `0 0 ${Math.random() * 6 + 3}px ${Math.random() * 2 + 1}px rgba(192, 132, 252, 0.8)`,
                animation: `pulse ${Math.random() * 4 + 2}s infinite alternate`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Center-bottom glow (CTA focus) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/3">
        <div className="absolute inset-0 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute inset-0 bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      {/* Subtle animated elements */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-purple Levi-600 filter blur-xl opacity-10 animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-indigo-600 filter blur-xl opacity-10 animate-float-delay"></div>
    </div>
  );
};

export default FuturisticHeroBackground;
