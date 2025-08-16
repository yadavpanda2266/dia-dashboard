import { ArrowLeft, TrendingUp, TrendingDown, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

export default function Trends() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-soft p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-card p-4 md:p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Health Trends & Analytics</h1>
              <p className="text-muted-foreground">Track your progress over time</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <Select defaultValue="30days">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Trend Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900 group-hover:text-blue-700">
                  <TrendingDown className="w-5 h-5 text-green-600" />
                  Glucose Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">↓ 12%</div>
                <p className="text-sm text-muted-foreground">Average decrease over 30 days</p>
                <div className="mt-4 h-20 bg-gradient-to-r from-green-100 to-green-200 rounded-lg"></div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-900 group-hover:text-purple-700">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Activity Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">↑ 25%</div>
                <p className="text-sm text-muted-foreground">Steps increased over 30 days</p>
                <div className="mt-4 h-20 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg"></div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-900 group-hover:text-orange-700">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  Medication Adherence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">89%</div>
                <p className="text-sm text-muted-foreground">Average adherence rate</p>
                <div className="mt-4 h-20 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg"></div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Blood Glucose Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive glucose chart would go here</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Weekly Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Time in Range</span>
                    <span className="text-green-600 font-bold">78%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Average Glucose</span>
                    <span className="text-blue-600 font-bold">142 mg/dL</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">Active Days</span>
                    <span className="text-purple-600 font-bold">6/7 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}