import { ArrowLeft, Upload, FileText, Download, Eye, Trash2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Reports() {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);

  const mockReports = [
    { id: 1, name: "HbA1c_Report_Dec2024.pdf", date: "2024-12-15", type: "HbA1c", size: "2.3 MB" },
    { id: 2, name: "Lipid_Profile_Nov2024.pdf", date: "2024-11-20", type: "Lipid", size: "1.8 MB" },
    { id: 3, name: "Blood_Test_Oct2024.pdf", date: "2024-10-25", type: "CBC", size: "3.1 MB" },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploading(true);
      // Simulate upload
      setTimeout(() => {
        setUploading(false);
        console.log("File uploaded:", file.name);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
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
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Medical Reports</h1>
              <p className="text-muted-foreground">Upload and manage your medical documents</p>
            </div>
            <div className="relative">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".pdf,.jpg,.png,.jpeg"
                onChange={handleFileUpload}
              />
              <Button 
                onClick={() => document.getElementById('file-upload')?.click()}
                disabled={uploading}
                className="hover:scale-105 transition-transform duration-200"
              >
                <Upload className="w-4 h-4 mr-2" />
                {uploading ? "Uploading..." : "Upload Report"}
              </Button>
            </div>
          </div>

          {/* Upload Area */}
          <Card className="mb-6 border-dashed border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Upload Medical Reports</h3>
                  <p className="text-sm text-muted-foreground">
                    Drag and drop files here or click to browse. Supports PDF, JPG, PNG files up to 10MB.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById('file-upload')?.click()}
                  className="hover:bg-primary/5"
                >
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockReports.map((report) => (
              <Card key={report.id} className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <FileText className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-200" />
                    <Badge variant="secondary" className="group-hover:bg-primary/10">
                      {report.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 truncate">
                        {report.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                      <p className="text-xs text-muted-foreground">{report.size}</p>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="ghost" className="flex-1 hover:bg-blue-50 hover:text-blue-600">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="ghost" className="hover:bg-green-50 hover:text-green-600">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="hover:bg-red-50 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="hover:shadow-md transition-all duration-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{mockReports.length}</div>
                <div className="text-sm text-muted-foreground">Total Reports</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-all duration-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">2</div>
                <div className="text-sm text-muted-foreground">This Month</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-all duration-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">7.2 MB</div>
                <div className="text-sm text-muted-foreground">Total Size</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}