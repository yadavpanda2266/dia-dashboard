import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GlucoseCardProps {
  currentReading: number;
  previousReading: number;
  targetRange: { min: number; max: number };
  lastUpdated: string;
}

export function GlucoseCard({ currentReading, previousReading, targetRange, lastUpdated }: GlucoseCardProps) {
  const getStatus = () => {
    if (currentReading < targetRange.min) return { status: "low", color: "text-destructive", bg: "bg-destructive/10" };
    if (currentReading > targetRange.max) return { status: "high", color: "text-warning", bg: "bg-warning/10" };
    return { status: "normal", color: "text-success", bg: "bg-success/10" };
  };

  const getTrend = () => {
    const difference = currentReading - previousReading;
    if (difference > 0) return { icon: TrendingUp, color: "text-destructive" };
    if (difference < 0) return { icon: TrendingDown, color: "text-success" };
    return { icon: Minus, color: "text-muted-foreground" };
  };

  const status = getStatus();
  const trend = getTrend();
  const TrendIcon = trend.icon;

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-blue-900">Blood Glucose</CardTitle>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}>
            {status.status.toUpperCase()}
          </div>
        </div>
      </CardHeader>
      <CardContent>
                 <div className="space-y-3 md:space-y-4">
           <div className="flex items-end justify-between">
             <div>
               <div className="text-2xl md:text-3xl font-bold text-blue-900">{currentReading}</div>
               <div className="text-sm text-blue-600">mg/dL</div>
             </div>
            <div className="flex items-center gap-1">
              <TrendIcon className={`w-4 h-4 ${trend.color}`} />
              <span className="text-xs text-muted-foreground">
                {Math.abs(currentReading - previousReading)} mg/dL
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Target Range</span>
              <span className="font-medium text-blue-900">
                {targetRange.min}-{targetRange.max} mg/dL
              </span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  status.status === "normal" ? "bg-success" : 
                  status.status === "high" ? "bg-warning" : "bg-destructive"
                }`}
                style={{
                  width: `${Math.min(100, Math.max(0, ((currentReading - targetRange.min) / (targetRange.max - targetRange.min)) * 100))}%`
                }}
              />
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground">
            Last updated: {lastUpdated}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
