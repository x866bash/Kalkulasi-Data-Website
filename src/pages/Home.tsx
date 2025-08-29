import MetadataCalculator from '@/components/MetadataCalculator';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        {/* Background dengan efek gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-500 rounded-full animate-ping"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <MetadataCalculator />
        </div>
      </div>
    </div>
  );
};

export default Home;