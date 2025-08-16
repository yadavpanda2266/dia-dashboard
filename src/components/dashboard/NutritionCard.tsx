import { Apple, Utensils, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface NutritionCardProps {
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  targetCalories: number;
  mealsLogged: number;
}

export function NutritionCard({ calories, carbs, protein, fat, targetCalories, mealsLogged }: NutritionCardProps) {
  const calorieProgress = (calories / targetCalories) * 100;
  
  const getCalorieStatus = () => {
    if (calorieProgress < 80) return { status: "low", color: "text-warning" };
    if (calorieProgress > 120) return { status: "high", color: "text-destructive" };
    return { status: "good", color: "text-success" };
  };

  const status = getCalorieStatus();

  return (
    <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-green-900">Today's Nutrition</CardTitle>
          <div className="flex items-center gap-1">
            <Utensils className="w-4 h-4 text-green-600" />
            <span className="text-xs text-green-700">{mealsLogged} meals</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
                 <div className="space-y-3 md:space-y-4">
           <div className="flex items-end justify-between">
             <div>
               <div className="text-2xl md:text-3xl font-bold text-green-900">{calories}</div>
               <div className="text-sm text-green-600">calories</div>
             </div>
            <div className="text-right">
              <div className={`text-sm font-medium ${status.color}`}>
                {calorieProgress.toFixed(0)}%
              </div>
              <div className="text-xs text-muted-foreground">of target</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Target</span>
              <span className="font-medium text-green-900">{targetCalories} cal</span>
            </div>
            <Progress value={calorieProgress} className="h-2" />
          </div>
          
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-1">
                <Apple className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-sm font-medium text-blue-900">{carbs}g</div>
              <div className="text-xs text-muted-foreground">Carbs</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-lg mx-auto mb-1">
                <Coffee className="w-4 h-4 text-red-600" />
              </div>
              <div className="text-sm font-medium text-red-900">{protein}g</div>
              <div className="text-xs text-muted-foreground">Protein</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-lg mx-auto mb-1">
                <Utensils className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="text-sm font-medium text-yellow-900">{fat}g</div>
              <div className="text-xs text-muted-foreground">Fat</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
