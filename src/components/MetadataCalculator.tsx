import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Loader2, Search, BarChart3, Globe, Zap } from 'lucide-react';
import { WebsiteAnalyzer, MetadataResult } from '@/services/websiteAnalyzer';
import TechLogos from './TechLogos';

interface MetadataStats {
  totalTechnologies: number;
  totalMetaTags: number;
  averageConfidence: number;
  performanceGrade: string;
  seoGrade: string;
}

const MetadataCalculator = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<MetadataResult | null>(null);
  const [stats, setStats] = useState<MetadataStats | null>(null);

  const analyzer = new WebsiteAnalyzer();

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      const analysisResult = await analyzer.analyzeWebsite();
      const calculatedStats = analyzer.calculateMetadataStats(analysisResult);
      
      setResult(analysisResult);
      setStats(calculatedStats);
    } catch (error) {
      console.error('Error analyzing website:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
          Kalkulator Metadata Website
        </h1>
        <p className="text-gray-300 text-lg mb-6">
          Analisis lengkap teknologi dan metadata dari website Anda
        </p>
        
        <Button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Menganalisis...
            </>
          ) : (
            <>
              <Search className="mr-2 h-5 w-5" />
              Mulai Analisis
            </>
          )}
        </Button>
      </div>

      {result && stats && (
        <div className="space-y-6 animate-slide-up">
          {/* Statistik Ringkasan */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-gray-900 border-gray-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Teknologi</p>
                    <p className="text-2xl font-bold text-white">{stats.totalTechnologies}</p>
                  </div>
                  <Globe className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-green-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Meta Tags</p>
                    <p className="text-2xl font-bold text-white">{stats.totalMetaTags}</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Skor Performa</p>
                    <p className="text-2xl font-bold text-white">{stats.performanceGrade}</p>
                  </div>
                  <Zap className="h-8 w-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">SEO Rating</p>
                    <p className="text-2xl font-bold text-white">{stats.seoGrade}</p>
                  </div>
                  <Search className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Teknologi yang Digunakan */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Teknologi yang Terdeteksi</CardTitle>
              <CardDescription className="text-gray-400">
                Bahasa pemrograman dan framework yang digunakan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TechLogos technologies={result.technologies} />
            </CardContent>
          </Card>

          {/* Detail Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Meta Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {result.metaTags.map((tag, index) => (
                    <div key={index} className="border-b border-gray-700 pb-2">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="text-blue-400 border-blue-400">
                          {tag.property || tag.name}
                        </Badge>
                      </div>
                      <p className="text-gray-300 text-sm mt-1 break-all">{tag.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Metrik Performa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Waktu Muat</span>
                      <span className="text-white">{result.performance.loadTime}s</span>
                    </div>
                    <Progress value={(5 - result.performance.loadTime) * 20} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Ukuran Halaman</span>
                      <span className="text-white">{result.performance.pageSize}MB</span>
                    </div>
                    <Progress value={Math.max(0, 100 - result.performance.pageSize * 10)} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Skor SEO</span>
                      <span className="text-white">{result.seoScore}/100</span>
                    </div>
                    <Progress value={result.seoScore} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetadataCalculator;