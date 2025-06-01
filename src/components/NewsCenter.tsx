
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Youtube, ExternalLink, Star } from "lucide-react";

const NewsCenter = () => {
  const newsArticles = [
    {
      id: 1,
      title: "2024 Electric Vehicle Market Trends: What to Expect",
      source: "Car and Driver",
      category: "Electric Vehicles",
      publishedAt: "2 hours ago",
      readTime: "5 min read",
      summary: "The electric vehicle market continues to evolve with new models and improved battery technology...",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "Top 10 Maintenance Tips for Winter Driving",
      source: "Motor Trend",
      category: "Maintenance",
      publishedAt: "6 hours ago",
      readTime: "8 min read",
      summary: "Prepare your vehicle for winter conditions with these essential maintenance tips...",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 3,
      title: "New Safety Features in 2024 Model Year Vehicles",
      source: "Automotive News",
      category: "Safety",
      publishedAt: "1 day ago",
      readTime: "6 min read",
      summary: "Automakers continue to advance safety technology with innovative features...",
      image: "/placeholder.svg",
      featured: false
    }
  ];

  const videos = [
    {
      id: 1,
      title: "How to Change Your Oil: Complete Guide",
      channel: "VehiclePro Tutorials",
      duration: "12:34",
      views: "145K",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      title: "2024 Toyota Camry Review",
      channel: "VehiclePro Reviews",
      duration: "18:42",
      views: "89K",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Electric vs Hybrid: Which is Right for You?",
      channel: "VehiclePro Explained",
      duration: "15:20",
      views: "203K",
      thumbnail: "/placeholder.svg"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Electric Vehicles": return "bg-green-100 text-green-700";
      case "Maintenance": return "bg-blue-100 text-blue-700";
      case "Safety": return "bg-red-100 text-red-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Automotive News & Videos</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Stay updated with the latest automotive news, reviews, and educational content tailored to your interests.
        </p>
      </div>

      {/* Featured Article */}
      {newsArticles.filter(article => article.featured).map((article) => (
        <Card key={article.id} className="border-0 shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <div className="w-full h-64 md:h-full bg-gradient-to-r from-slate-200 to-slate-300 flex items-center justify-center">
                <Star className="w-16 h-16 text-slate-500" />
              </div>
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  Featured
                </Badge>
                <Badge className={getCategoryColor(article.category)}>
                  {article.category}
                </Badge>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                {article.title}
              </h2>
              <p className="text-slate-600 mb-4 text-lg leading-relaxed">
                {article.summary}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="font-medium">{article.source}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.publishedAt}
                  </div>
                  <span>{article.readTime}</span>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsArticles.filter(article => !article.featured).map((article) => (
          <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-full h-48 bg-gradient-to-r from-slate-200 to-slate-300 flex items-center justify-center">
              <Calendar className="w-12 h-12 text-slate-500" />
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={getCategoryColor(article.category)}>
                  {article.category}
                </Badge>
              </div>
              <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                {article.title}
              </CardTitle>
              <CardDescription className="text-slate-600">
                {article.summary}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">
                  <div className="font-medium">{article.source}</div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {article.publishedAt} • {article.readTime}
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Video Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Featured Videos</h2>
          <Button variant="outline" className="flex items-center gap-2">
            <Youtube className="w-4 h-4" />
            View Channel
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative">
                <div className="w-full h-40 bg-gradient-to-r from-red-200 to-red-300 flex items-center justify-center">
                  <Youtube className="w-12 h-12 text-red-600" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base leading-tight group-hover:text-red-600 transition-colors">
                  {video.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {video.channel}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{video.views} views</span>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                    <Youtube className="w-4 h-4 mr-1" />
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Personalization Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Personalize Your News Feed</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get news and content tailored to your vehicle types, interests, and preferences. 
            Set up your content preferences to see more of what matters to you.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
            Customize Preferences
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsCenter;
