import { Plus, Camera, FileText, BarChart3, Settings, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { FoodLoggingModal } from "./FoodLoggingModal";
import { GlucoseLoggingModal } from "./GlucoseLoggingModal";

export function QuickActions() {
  const [isFoodModalOpen, setIsFoodModalOpen] = useState(false);
  const [isGlucoseModalOpen, setIsGlucoseModalOpen] = useState(false);

  const actions = [
    {
      icon: Plus,
      title: "Log Glucose",
      description: "Record blood sugar reading",
      color: "bg-blue-500 hover:bg-blue-600",
      onClick: () => setIsGlucoseModalOpen(true)
    },
    {
      icon: Camera,
      title: "Log Food",
      description: "Track nutrition intake",
      color: "bg-green-500 hover:bg-green-600",
      onClick: () => setIsFoodModalOpen(true)
    },
    {
      icon: FileText,
      title: "Upload Report",
      description: "Add medical documents",
      color: "bg-purple-500 hover:bg-purple-600",
      onClick: () => console.log("Upload report")
    },
    {
      icon: BarChart3,
      title: "View Trends",
      description: "Analyze health patterns",
      color: "bg-orange-500 hover:bg-orange-600",
      onClick: () => console.log("View trends")
    },
    {
      icon: Settings,
      title: "Settings",
      description: "Manage preferences",
      color: "bg-gray-500 hover:bg-gray-600",
      onClick: () => console.log("Settings")
    },
    {
      icon: Bell,
      title: "Reminders",
      description: "Set medication alerts",
      color: "bg-red-500 hover:bg-red-600",
      onClick: () => console.log("Reminders")
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-slate-50 to-slate-100/50 border-slate-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
                             <Button
                 key={index}
                 variant="ghost"
                 className={`h-auto p-3 md:p-4 flex flex-col items-center gap-1 md:gap-2 ${action.color} text-white hover:text-white`}
                 onClick={action.onClick}
               >
                 <Icon className="w-5 h-5 md:w-6 md:h-6" />
                 <div className="text-center">
                   <div className="font-medium text-xs md:text-sm">{action.title}</div>
                   <div className="text-xs opacity-90 hidden sm:block">{action.description}</div>
                 </div>
               </Button>
            );
          })}
        </div>
      </CardContent>
      
      <FoodLoggingModal
        isOpen={isFoodModalOpen}
        onClose={() => setIsFoodModalOpen(false)}
        onLogFood={(food, quantity) => {
          console.log("Logged food:", food.name, "Quantity:", quantity);
          // Here you would typically update the nutrition data
        }}
      />
      
      <GlucoseLoggingModal
        isOpen={isGlucoseModalOpen}
        onClose={() => setIsGlucoseModalOpen(false)}
        onLogGlucose={(reading, time, notes) => {
          console.log("Logged glucose:", reading, "Time:", time, "Notes:", notes);
          // Here you would typically update the glucose data
        }}
      />
    </Card>
  );
}
