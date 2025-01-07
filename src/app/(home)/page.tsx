import TypingAnimation from "@/app/(home)/typingAnimation";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <div className="flex justify-center pt-10 md:pt-20 text-3xl md:text-5xl text-white font-black text-center">
        Your Framework for Github
      </div>

      {/* Description Section */}
      <div className="justify-center mx-4 md:mx-28 px-4 lg:px-[20vw] py-10 text-center text-gray-400">
        Used by some of the world's top developers, RepoVerse enables you to{" "}
        <span className="text-white">take your productivity to next level</span>{" "}
        so that you can contribute even more
      </div>

      {/* Content Section with Fixed Size Container */}
      <div className="flex items-center justify-center">
        <div className="text-3xl sm:text-4xl md:text-5xl">
          Life is simple <TypingAnimation />
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="flex flex-col space-y-4 justify-center mx-4 md:mx-20 px-4 md:px-20 py-10 pt-10 lg:pt-24 text-center text-gray-400">
        <span className="sm:text-3xl md:text-4xl font-bold">Coming Soon</span>
        <span className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
          Your AI Partner
        </span>
        <span className="text-sm sm:text-base md:text-lg">
          Harness the power of AI to make your experience even better
        </span>
      </div>
    </>
  );
}
