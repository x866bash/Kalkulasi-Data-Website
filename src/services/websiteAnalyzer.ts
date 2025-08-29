export interface MetadataResult {
  url: string;
  title: string;
  description: string;
  technologies: Technology[];
  metaTags: MetaTag[];
  performance: PerformanceMetrics;
  seoScore: number;
}

export interface Technology {
  name: string;
  category: string;
  confidence: number;
  version?: string;
  logo: string;
}

export interface MetaTag {
  name: string;
  content: string;
  property?: string;
}

export interface PerformanceMetrics {
  loadTime: number;
  pageSize: number;
  requests: number;
  score: number;
}

export class WebsiteAnalyzer {
  private readonly targetUrl = 'https://x866bash-github-io.vercel.app';

  async analyzeWebsite(): Promise<MetadataResult> {
    try {
      // Simulasi analisis website (dalam implementasi nyata, ini akan menggunakan API atau web scraping)
      const mockData: MetadataResult = {
        url: this.targetUrl,
        title: 'Portfolio Website - x866bash',
        description: 'Website portfolio profesional dengan teknologi modern',
        technologies: [
          {
            name: 'HTML5',
            category: 'Markup',
            confidence: 100,
            version: '5.0',
            logo: '🌐'
          },
          {
            name: 'CSS3',
            category: 'Styling',
            confidence: 100,
            version: '3.0',
            logo: '🎨'
          },
          {
            name: 'JavaScript',
            category: 'Programming',
            confidence: 95,
            version: 'ES6+',
            logo: '⚡'
          },
          {
            name: 'React',
            category: 'Framework',
            confidence: 90,
            version: '18.x',
            logo: '⚛️'
          },
          {
            name: 'Tailwind CSS',
            category: 'CSS Framework',
            confidence: 85,
            logo: '💨'
          },
          {
            name: 'Vercel',
            category: 'Hosting',
            confidence: 100,
            logo: '▲'
          }
        ],
        metaTags: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          { name: 'description', content: 'Portfolio website dengan teknologi modern' },
          { name: 'keywords', content: 'portfolio, web development, react, javascript' },
          { property: 'og:title', name: 'og:title', content: 'Portfolio Website' },
          { property: 'og:description', name: 'og:description', content: 'Website portfolio profesional' }
        ],
        performance: {
          loadTime: 1.2,
          pageSize: 2.5,
          requests: 15,
          score: 92
        },
        seoScore: 88
      };

      // Simulasi delay untuk efek loading
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return mockData;
    } catch (error) {
      throw new Error('Gagal menganalisis website: ' + error);
    }
  }

  calculateMetadataStats(result: MetadataResult) {
    return {
      totalTechnologies: result.technologies.length,
      totalMetaTags: result.metaTags.length,
      averageConfidence: Math.round(
        result.technologies.reduce((sum, tech) => sum + tech.confidence, 0) / result.technologies.length
      ),
      performanceGrade: this.getPerformanceGrade(result.performance.score),
      seoGrade: this.getSeoGrade(result.seoScore)
    };
  }

  private getPerformanceGrade(score: number): string {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  private getSeoGrade(score: number): string {
    if (score >= 90) return 'Sangat Baik';
    if (score >= 80) return 'Baik';
    if (score >= 70) return 'Cukup';
    if (score >= 60) return 'Kurang';
    return 'Buruk';
  }
}