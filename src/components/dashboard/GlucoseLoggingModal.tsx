import { useState } from "react";
import { X, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GlucoseLoggingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogGlucose: (reading: number, time: string, notes: string) => void;
}

export function GlucoseLoggingModal({ isOpen, onClose, onLogGlucose }: GlucoseLoggingModalProps) {
  const [reading, setReading] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit' 
  }));
  const [notes, setNotes] = useState("");

  const getStatus = (value: number) => {
    if (value < 70) return { status: "Low", color: "bg-red-100 text-red-800", bg: "bg-red-50" };
    if (value > 180) return { status: "High", color: "bg-orange-100 text-orange-800", bg: "bg-orange-50" };
    return { status: "Normal", color: "bg-green-100 text-green-800", bg: "bg-green-50" };
  };

  const handleLogGlucose = () => {
    const readingValue = parseInt(reading);
    if (readingValue && readingValue > 0) {
      onLogGlucose(readingValue, time, notes);
      setReading("");
      setNotes("");
      onClose();
    }
  };

  if (!isOpen) return null;

  const readingValue = parseInt(reading) || 0;
  const status = getStatus(readingValue);

     return (
     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 md:p-4">
       <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-semibold text-blue-900">Log Blood Glucose</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Reading Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Blood Glucose Reading (mg/dL)</label>
            <div className="relative">
              <Input
                type="number"
                placeholder="Enter reading..."
                value={reading}
                onChange={(e) => setReading(e.target.value)}
                className="text-2xl font-bold text-center pr-12"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                mg/dL
              </span>
            </div>
            {readingValue > 0 && (
              <div className={`p-2 rounded-lg ${status.bg}`}>
                <Badge className={status.color}>
                  {status.status}
                </Badge>
                <p className="text-sm mt-1">
                  {status.status === "Low" && "Consider having a snack with carbohydrates"}
                  {status.status === "High" && "Monitor closely and consider medication if needed"}
                  {status.status === "Normal" && "Great! Your glucose is in the target range"}
                </p>
              </div>
            )}
          </div>

          {/* Time Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Time of Reading</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Notes (Optional)</label>
            <textarea
              placeholder="Add any notes about this reading..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg resize-none h-20"
            />
          </div>

          {/* Quick Time Buttons */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Quick Time Selection</label>
            <div className="flex gap-2 flex-wrap">
              {["Before Breakfast", "After Breakfast", "Before Lunch", "After Lunch", "Before Dinner", "After Dinner", "Bedtime"].map((timeLabel) => (
                <Button
                  key={timeLabel}
                  variant="outline"
                  size="sm"
                  onClick={() => setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }))}
                  className="text-xs"
                >
                  {timeLabel}
                </Button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleLogGlucose} 
              disabled={!readingValue || readingValue <= 0}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Log Reading
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
