  type HeadBannerProps = {
    titre: string;
  };
  
  const HeadBanner: React.FC<HeadBannerProps> = ({ titre }) => {
    return (
      <div className="relative w-full flex items-center justify-center h-48 bg-[url('/images/met.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-zinc-900/70 w-full h-full"></div>
        <div className="relative w-full flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white">{titre}</h1>
        </div>
      </div>
    );
  };
  
  export default HeadBanner;