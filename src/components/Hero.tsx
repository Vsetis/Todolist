import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="gradient-01 absolute z-[0] w-1/3 h-1/3 right-0 "></div>
      <div className="h-screen bg-black">
        <div className="container mx-auto flex flex-col items-center py-64">
          <div>
            <h1 className="leading-snug text-8xl text-center font-bold text-white/80">
              Staňte se více produktivní <br /> díky TodoApp
            </h1>
          </div>
          <div className="flex gap-8 mt-32 font-semibold">
            <button className="px-16 py-3 rounded-sm bg-gradient-to-r from-white to-white/50 text-black shadow-lg shadow-black transition-all duration-500 bg-white/0 hover:bg-white/80">
              Registrace
            </button>

            <button className="px-16 py-3 border border-white/80 rounded-sm text-white/80 transition-all duration-300 hover:bg-white/5">
              Přihlásit se
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
