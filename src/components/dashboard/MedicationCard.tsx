import { Pill, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Medication {
  id: string;
  name: string;
  dosage: string;
  time: string;
  taken: boolean;
  overdue: boolean;
}

interface MedicationCardProps {
  medications: Medication[];
  adherenceRate: number;
}

export function MedicationCard({ medications, adherenceRate }: MedicationCardProps) {
  const takenCount = medications.filter(med => med.taken).length;
  const overdueCount = medications.filter(med => med.overdue && !med.taken).length;

  return (
    <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-orange-900">Medication Adherence</CardTitle>
          <div className="flex items-center gap-2">
            <Pill className="w-5 h-5 text-orange-600" />
            <Badge variant={adherenceRate >= 80 ? "default" : "destructive"} className="text-xs">
              {adherenceRate}%
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
                 <div className="space-y-3 md:space-y-4">
           <div className="flex items-end justify-between">
             <div>
               <div className="text-2xl md:text-3xl font-bold text-orange-900">{takenCount}</div>
               <div className="text-sm text-orange-600">taken today</div>
             </div>
            <div className="text-right">
              <div className="text-sm font-medium text-orange-900">
                {medications.length} total
              </div>
              <div className="text-xs text-muted-foreground">medications</div>
            </div>
          </div>
          
          {overdueCount > 0 && (
            <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span className="text-sm text-red-700">
                {overdueCount} medication{overdueCount > 1 ? 's' : ''} overdue
              </span>
            </div>
          )}
          
          <div className="space-y-2">
            <div className="text-sm font-medium text-orange-900">Today's Schedule</div>
            {medications.map((medication) => (
              <div 
                key={medication.id} 
                className={`flex items-center justify-between p-2 rounded-lg border ${
                  medication.taken 
                    ? 'bg-green-50 border-green-200' 
                    : medication.overdue 
                    ? 'bg-red-50 border-red-200' 
                    : 'bg-orange-50 border-orange-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  {medication.taken ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : medication.overdue ? (
                    <AlertCircle className="w-4 h-4 text-red-600" />
                  ) : (
                    <Clock className="w-4 h-4 text-orange-600" />
                  )}
                  <div>
                    <div className="text-sm font-medium text-orange-900">{medication.name}</div>
                    <div className="text-xs text-muted-foreground">{medication.dosage}</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">{medication.time}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
