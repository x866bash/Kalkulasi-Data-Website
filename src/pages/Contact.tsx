import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  skills: string[];
  bio: string;
}

const Contact = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi fetch data dari API profile-list
    const fetchProfileData = async () => {
      try {
        // Dalam implementasi nyata, ini akan fetch dari https://x866bash-github-io.vercel.app/My-Profile/
        // Untuk demo, menggunakan data mock
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const mockProfileData: ProfileData = {
          name: "x866bash",
          title: "Full Stack Developer",
          email: "contact@x866bash.dev",
          phone: "+62 812-3456-7890",
          location: "Jakarta, Indonesia",
          website: "https://x866bash-github-io.vercel.app",
          github: "https://github.com/x866bash",
          linkedin: "https://linkedin.com/in/x866bash",
          skills: [
            "JavaScript", "TypeScript", "React", "Node.js", 
            "Python", "Docker", "AWS", "MongoDB", "PostgreSQL"
          ],
          bio: "Pengembang web berpengalaman dengan fokus pada teknologi modern dan solusi inovatif. Passionate dalam menciptakan aplikasi web yang user-friendly dan performant."
        };
        
        setProfileData(mockProfileData);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
          <p className="text-white text-lg">Memuat data profil...</p>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg">Gagal memuat data profil</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        {/* Background dengan efek gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
              Hubungi Saya
            </h1>
            <p className="text-gray-300 text-lg">
              Mari berkolaborasi dalam proyek yang menarik
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Profile Card */}
            <Card className="bg-gray-900 border-gray-700 mb-8 animate-slide-up">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {profileData.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <CardTitle className="text-white text-2xl">{profileData.name}</CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  {profileData.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center mb-6">
                  {profileData.bio}
                </p>
                
                {/* Skills */}
                <div className="mb-6">
                  <h3 className="text-white text-lg font-semibold mb-3">Keahlian</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-900 border-gray-700 hover:border-blue-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-blue-500" />
                    Informasi Kontak
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white">{profileData.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Telepon</p>
                      <p className="text-white">{profileData.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Lokasi</p>
                      <p className="text-white">{profileData.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700 hover:border-green-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-green-500" />
                    Media Sosial
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-white border-gray-600 hover:border-blue-500"
                    onClick={() => window.open(profileData.website, '_blank')}
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    Website Portfolio
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start text-white border-gray-600 hover:border-gray-400"
                    onClick={() => window.open(profileData.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Profile
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start text-white border-gray-600 hover:border-blue-600"
                    onClick={() => window.open(profileData.linkedin, '_blank')}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;