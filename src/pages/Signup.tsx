import { Link } from "react-router-dom";
import { SignUp } from "@clerk/clerk-react";
import { Footer } from "@/components/landing/Footer";

export default function Signup() {

  return (
         <div className="min-h-screen flex flex-col">
       <div className="flex-1 flex items-center justify-center bg-gradient-soft p-4 md:p-6">
         <div className="w-full max-w-md">
           <div className="bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/10 shadow-card p-6 md:p-8">
            {/* Header */}
            <div className="text-center mb-8">
                             <Link to="/" className="inline-flex items-center gap-2 mb-6">
                 <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                   <span className="text-white font-bold">D</span>
                 </div>
                 <span className="text-xl font-bold text-foreground">DiabetesHelp</span>
               </Link>
              <h1 className="text-2xl font-bold text-foreground mb-2">Create your account</h1>
              <p className="text-muted-foreground">Start your diabetes management journey</p>
            </div>

            {/* Clerk SignUp Component */}
            <div className="flex justify-center">
                               <SignUp 
                   appearance={{
                     elements: {
                       formButtonPrimary: "bg-green-500 hover:bg-green-600 text-white",
                       card: "bg-transparent shadow-none",
                       headerTitle: "text-foreground",
                       headerSubtitle: "text-muted-foreground",
                       socialButtonsBlockButton: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
                       formFieldInput: "bg-background border border-green-200 text-foreground",
                       formFieldLabel: "text-foreground",
                       footerActionLink: "text-green-500 hover:text-green-600",
                       dividerLine: "bg-green-200",
                       dividerText: "text-muted-foreground"
                     }
                   }}
                redirectUrl="/dashboard"
              />
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                                 <Link to="/login" className="text-green-500 hover:text-green-600 font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}