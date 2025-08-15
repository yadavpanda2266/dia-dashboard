import { useUser, SignOutButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { LogOut, Calendar, TrendingUp } from "lucide-react";
import { GlucoseCard } from "@/components/dashboard/GlucoseCard";
import { NutritionCard } from "@/components/dashboard/NutritionCard";
import { ActivityCard } from "@/components/dashboard/ActivityCard";
import { MedicationCard } from "@/components/dashboard/MedicationCard";
import { QuickActions } from "@/components/dashboard/QuickActions";

export default function Dashboard() {
  const { user } = useUser();

  // Mock data - in real app, this would come from API
  const glucoseData = {
    currentReading: 145,
    previousReading: 132,
    targetRange: { min: 80, max: 180 },
    lastUpdated: "2 hours ago"
  };

  const nutritionData = {
    calories: 1850,
    carbs: 220,
    protein: 85,
    fat: 65,
    targetCalories: 2000,
    mealsLogged: 3
  };

  const activityData = {
    steps: 8420,
    targetSteps: 10000,
    activeMinutes: 45,
    targetActiveMinutes: 60,
    caloriesBurned: 320
  };

  const medicationData = {
    medications: [
      { id: "1", name: "Metformin", dosage: "500mg", time: "8:00 AM", taken: true, overdue: false },
      { id: "2", name: "Insulin", dosage: "10 units", time: "12:00 PM", taken: false, overdue: true },
      { id: "3", name: "Vitamin D", dosage: "1000 IU", time: "6:00 PM", taken: false, overdue: false }
    ],
    adherenceRate: 67
  };

  return (
     <div className="min-h-screen bg-gradient-soft p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
         <div className="bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-card p-4 md:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-500 group">
                     {/* Header */}
           <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
             <div className="group">
               <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 cursor-pointer">
                 Diabetes Management Dashboard
               </h1>
               <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                 Welcome back, {user?.firstName || user?.emailAddresses[0]?.emailAddress || 'User'}! 
                 Here's your comprehensive health overview.
               </p>
               
               {/* Hover underline effect */}
               <div className="w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 mt-2"></div>
             </div>
             
             <div className="flex items-center gap-2 md:gap-3">
               <Button 
                 variant="outline" 
                 size="sm" 
                 className="flex items-center gap-2 group hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 transform"
               >
                 <Calendar className="w-4 h-4 group-hover:animate-pulse transition-all duration-300" />
                 <span className="hidden sm:inline group-hover:translate-x-0.5 transition-transform duration-300">Today</span>
               </Button>
               
               <SignOutButton>
                 <Button 
                   variant="outline" 
                   size="sm" 
                   className="flex items-center gap-2 group hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-300 hover:scale-105 transform"
                 >
                   <LogOut className="w-4 h-4 group-hover:animate-pulse transition-all duration-300" />
                   <span className="hidden sm:inline group-hover:translate-x-0.5 transition-transform duration-300">Sign Out</span>
                 </Button>
               </SignOutButton>
             </div>
           </div>
          
          {/* Quick Actions */}
          <div className="mb-8 group">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 cursor-pointer">
                Quick Actions
              </h2>
              <div className="w-0 h-0.5 bg-primary group-hover:w-16 transition-all duration-500 mt-1"></div>
            </div>
            <QuickActions />
          </div>
          
                     {/* Main Dashboard Cards */}
           <div className="group mb-4">
             <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 cursor-pointer mb-4">
               Health Overview
             </h2>
             <div className="w-0 h-0.5 bg-primary group-hover:w-24 transition-all duration-500"></div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <GlucoseCard {...glucoseData} />
            <NutritionCard {...nutritionData} />
            <ActivityCard {...activityData} />
            <MedicationCard {...medicationData} />
          </div>
          
                     {/* Additional Features Section */}
           <div className="group mb-4">
             <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 cursor-pointer mb-4">
               Insights & Appointments
             </h2>
             <div className="w-0 h-0.5 bg-primary group-hover:w-32 transition-all duration-500"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-6 border border-indigo-200 hover:shadow-lg hover:scale-[1.02] transform transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-600 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
                <h3 className="text-lg font-semibold text-indigo-900 group-hover:text-indigo-800 transition-colors duration-300">Weekly Trends</h3>
              </div>
              <p className="text-sm text-indigo-700 mb-4 group-hover:text-indigo-800 transition-colors duration-300">
                Your glucose levels have been trending downward this week. Great job maintaining your diet!
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-indigo-700 border-indigo-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300 hover:scale-105 transform"
              >
                View Detailed Analytics
              </Button>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-indigo-200/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-6 border border-teal-200 hover:shadow-lg hover:scale-[1.02] transform transition-all duration-300 cursor-pointer group relative">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-teal-600 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
                <h3 className="text-lg font-semibold text-teal-900 group-hover:text-teal-800 transition-colors duration-300">Upcoming Appointments</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg group-hover:bg-white/70 transition-all duration-300">
                  <div>
                    <div className="font-medium text-teal-900 group-hover:text-teal-800 transition-colors duration-300">Dr. Sharma</div>
                    <div className="text-sm text-teal-700 group-hover:text-teal-800 transition-colors duration-300">Endocrinologist</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-teal-900 group-hover:text-teal-800 transition-colors duration-300">Tomorrow</div>
                    <div className="text-xs text-teal-600 group-hover:text-teal-700 transition-colors duration-300">10:00 AM</div>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-teal-700 border-teal-300 w-full group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all duration-300 hover:scale-105 transform"
                >
                  View All Appointments
                </Button>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-teal-200/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}