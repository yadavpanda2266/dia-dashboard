import { ArrowLeft, User, Bell, Shield, Database, HelpCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

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
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Settings</h1>
              <p className="text-muted-foreground">Manage your account and preferences</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Profile Settings */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Profile Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Units</Label>
                    <Select defaultValue="mgdl">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mgdl">mg/dL</SelectItem>
                        <SelectItem value="mmol">mmol/L</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Diabetes Type</Label>
                    <Select defaultValue="type2">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="type1">Type 1</SelectItem>
                        <SelectItem value="type2">Type 2</SelectItem>
                        <SelectItem value="pre">Pre-diabetes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Target Glucose Range</Label>
                  <div className="flex gap-2 items-center">
                    <Select defaultValue="80">
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="70">70</SelectItem>
                        <SelectItem value="80">80</SelectItem>
                        <SelectItem value="90">90</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-sm text-muted-foreground">to</span>
                    <Select defaultValue="180">
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="160">160</SelectItem>
                        <SelectItem value="180">180</SelectItem>
                        <SelectItem value="200">200</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-sm text-muted-foreground">mg/dL</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="medication-reminders" className="text-sm font-medium">
                      Medication Reminders
                    </Label>
                    <p className="text-sm text-muted-foreground">Get notified when it's time for medication</p>
                  </div>
                  <Switch id="medication-reminders" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="glucose-reminders" className="text-sm font-medium">
                      Glucose Check Reminders
                    </Label>
                    <p className="text-sm text-muted-foreground">Reminders to check blood glucose</p>
                  </div>
                  <Switch id="glucose-reminders" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="weekly-reports" className="text-sm font-medium">
                      Weekly Reports
                    </Label>
                    <p className="text-sm text-muted-foreground">Receive weekly health summaries</p>
                  </div>
                  <Switch id="weekly-reports" defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Data Sharing</Label>
                    <p className="text-sm text-muted-foreground">Allow sharing anonymized data for research</p>
                  </div>
                  <Switch />
                </div>
                <Button variant="outline" className="w-full hover:bg-primary/5">
                  Change Password
                </Button>
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Data Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-600">
                    Export Data
                  </Button>
                  <Button variant="outline" className="hover:bg-green-50 hover:text-green-600">
                    Import Data
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  Help & Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-600">
                    FAQ
                  </Button>
                  <Button variant="outline" className="hover:bg-green-50 hover:text-green-600">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="border-red-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <Trash2 className="w-5 h-5" />
                  Danger Zone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="destructive" 
                  className="w-full hover:bg-red-600"
                  onClick={() => {
                    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                      console.log("Account deletion requested");
                    }
                  }}
                >
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}