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
         <div className="bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-card p-4 md:p-8">
                     {/* Header */}
           <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
             <div>
               <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Diabetes Management Dashboard</h1>
               <p className="text-muted-foreground">
                 Welcome back, {user?.firstName || user?.emailAddresses[0]?.emailAddress || 'User'}! 
                 Here's your comprehensive health overview.
               </p>
             </div>
             <div className="flex items-center gap-2 md:gap-3">
               <Button variant="outline" size="sm" className="flex items-center gap-2">
                 <Calendar className="w-4 h-4" />
                 <span className="hidden sm:inline">Today</span>
               </Button>
               <SignOutButton>
                 <Button variant="outline" size="sm" className="flex items-center gap-2">
                   <LogOut className="w-4 h-4" />
                   <span className="hidden sm:inline">Sign Out</span>
                 </Button>
               </SignOutButton>
             </div>
           </div>
          
          {/* Quick Actions */}
          <div className="mb-8">
            <QuickActions />
          </div>
          
                     {/* Main Dashboard Cards */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            <GlucoseCard {...glucoseData} />
            <NutritionCard {...nutritionData} />
            <ActivityCard {...activityData} />
            <MedicationCard {...medicationData} />
          </div>
          
                     {/* Additional Features Section */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-6 border border-indigo-200">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
                <h3 className="text-lg font-semibold text-indigo-900">Weekly Trends</h3>
              </div>
              <p className="text-sm text-indigo-700 mb-4">
                Your glucose levels have been trending downward this week. Great job maintaining your diet!
              </p>
              <Button variant="outline" size="sm" className="text-indigo-700 border-indigo-300">
                View Detailed Analytics
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-6 border border-teal-200">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-teal-600" />
                <h3 className="text-lg font-semibold text-teal-900">Upcoming Appointments</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                  <div>
                    <div className="font-medium text-teal-900">Dr. Sharma</div>
                    <div className="text-sm text-teal-700">Endocrinologist</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-teal-900">Tomorrow</div>
                    <div className="text-xs text-teal-600">10:00 AM</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-teal-700 border-teal-300 w-full">
                  View All Appointments
                </Button>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}