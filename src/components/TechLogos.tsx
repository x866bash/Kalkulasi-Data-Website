import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Technology } from '@/services/websiteAnalyzer';

interface TechLogosProps {
  technologies: Technology[];
}

const TechLogos = ({ technologies }: TechLogosProps) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'bg-green-600';
    if (confidence >= 70) return 'bg-yellow-600';
    return 'bg-red-600';
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Markup': 'border-orange-500 text-orange-400',
      'Styling': 'border-blue-500 text-blue-400',
      'Programming': 'border-yellow-500 text-yellow-400',
      'Framework': 'border-green-500 text-green-400',
      'CSS Framework': 'border-purple-500 text-purple-400',
      'Hosting': 'border-pink-500 text-pink-400',
    };
    return colors[category] || 'border-gray-500 text-gray-400';
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {technologies.map((tech, index) => (
        <Card 
          key={index} 
          className={`bg-gray-800 border-gray-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer ${getCategoryColor(tech.category).split(' ')[0]}`}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-4xl animate-bounce-slow">
                {tech.logo}
              </div>
              <Badge 
                className={`${getConfidenceColor(tech.confidence)} text-white`}
              >
                {tech.confidence}%
              </Badge>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg">{tech.name}</h3>
              <p className={`text-sm ${getCategoryColor(tech.category).split(' ')[1]}`}>
                {tech.category}
              </p>
              {tech.version && (
                <p className="text-gray-400 text-xs">
                  Versi: {tech.version}
                </p>
              )}
            </div>

            {/* Progress bar untuk confidence */}
            <div className="mt-3">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 ${getConfidenceColor(tech.confidence)}`}
                  style={{ width: `${tech.confidence}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TechLogos;