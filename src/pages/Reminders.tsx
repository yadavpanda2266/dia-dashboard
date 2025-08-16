import { ArrowLeft, Plus, Clock, Pill, Activity, Bell, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export default function Reminders() {
  const navigate = useNavigate();

  const mockReminders = [
    { 
      id: 1, 
      title: "Take Metformin", 
      time: "8:00 AM", 
      type: "medication", 
      icon: Pill, 
      color: "bg-blue-500",
      active: true 
    },
    { 
      id: 2, 
      title: "Check Blood Glucose", 
      time: "12:00 PM", 
      type: "glucose", 
      icon: Activity, 
      color: "bg-green-500",
      active: true 
    },
    { 
      id: 3, 
      title: "Take Insulin", 
      time: "6:00 PM", 
      type: "medication", 
      icon: Pill, 
      color: "bg-purple-500",
      active: false 
    },
    { 
      id: 4, 
      title: "Evening Walk", 
      time: "7:00 PM", 
      type: "activity", 
      icon: Activity, 
      color: "bg-orange-500",
      active: true 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
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
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Reminders</h1>
              <p className="text-muted-foreground">Manage your medication and activity reminders</p>
            </div>
            <Button className="hover:scale-105 transition-transform duration-200">
              <Plus className="w-4 h-4 mr-2" />
              Add Reminder
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                  <Bell className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">{mockReminders.filter(r => r.active).length}</div>
                <div className="text-sm text-muted-foreground">Active Reminders</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">3</div>
                <div className="text-sm text-muted-foreground">Today's Reminders</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2">
                  <Pill className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">2</div>
                <div className="text-sm text-muted-foreground">Medication Alerts</div>
              </CardContent>
            </Card>
          </div>

          {/* Today's Schedule */}
          <Card className="mb-8 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockReminders.filter(r => r.active).map((reminder) => {
                  const Icon = reminder.icon;
                  return (
                    <div 
                      key={reminder.id}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-background to-background/50 rounded-lg border hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 ${reminder.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                            {reminder.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{reminder.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={reminder.active ? "default" : "secondary"}>
                          {reminder.active ? "Active" : "Inactive"}
                        </Badge>
                        <Button size="sm" variant="ghost" className="hover:bg-blue-50 hover:text-blue-600">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="hover:bg-red-50 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* All Reminders */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>All Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockReminders.map((reminder) => {
                  const Icon = reminder.icon;
                  return (
                    <Card key={reminder.id} className="hover:shadow-md hover:scale-[1.02] transition-all duration-200 cursor-pointer group">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-8 h-8 ${reminder.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                              {reminder.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{reminder.time}</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Badge variant={reminder.active ? "default" : "secondary"} className="text-xs">
                            {reminder.type}
                          </Badge>
                          <div className="flex gap-1">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600">
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}