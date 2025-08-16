import { Activity, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ActivityCardProps {
  steps: number;
  targetSteps: number;
  activeMinutes: number;
  targetActiveMinutes: number;
  caloriesBurned: number;
}

export function ActivityCard({ steps, targetSteps, activeMinutes, targetActiveMinutes, caloriesBurned }: ActivityCardProps) {
  const stepProgress = (steps / targetSteps) * 100;
  const activityProgress = (activeMinutes / targetActiveMinutes) * 100;

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-purple-900">Activity & Fitness</CardTitle>
          <Activity className="w-5 h-5 text-purple-600" />
        </div>
      </CardHeader>
      <CardContent>
                 <div className="space-y-3 md:space-y-4">
           <div className="flex items-end justify-between">
             <div>
               <div className="text-2xl md:text-3xl font-bold text-purple-900">{steps.toLocaleString()}</div>
               <div className="text-sm text-purple-600">steps today</div>
             </div>
            <div className="text-right">
              <div className="text-sm font-medium text-purple-900">
                {stepProgress.toFixed(0)}%
              </div>
              <div className="text-xs text-muted-foreground">of target</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Target</span>
              <span className="font-medium text-purple-900">{targetSteps.toLocaleString()} steps</span>
            </div>
            <Progress value={stepProgress} className="h-2" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded-lg mx-auto mb-1">
                <Target className="w-4 h-4 text-orange-600" />
              </div>
              <div className="text-sm font-medium text-orange-900">{activeMinutes} min</div>
              <div className="text-xs text-muted-foreground">Active</div>
              <div className="text-xs text-orange-600">
                {activityProgress.toFixed(0)}% of {targetActiveMinutes}min
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-lg mx-auto mb-1">
                <TrendingUp className="w-4 h-4 text-red-600" />
              </div>
              <div className="text-sm font-medium text-red-900">{caloriesBurned}</div>
              <div className="text-xs text-muted-foreground">Calories</div>
              <div className="text-xs text-red-600">Burned</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
