import { ReactNode } from "react";
import { Brain, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProgressBar from "./ProgressBar";

interface AssessmentLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
  title?: string;
  subtitle?: string;
}

const AssessmentLayout = ({ 
  children, 
  currentStep, 
  totalSteps, 
  onBack, 
  title = "Emotional Intelligence Assessment",
  subtitle 
}: AssessmentLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface-soft to-primary-soft">
      {/* Header */}
      <div className="bg-surface-elevated shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 assessment-hero rounded-xl">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-muted-dark">
                  Feedback Response Grace
                </h1>
                <p className="text-sm text-muted-foreground">
                  Emotional Intelligence Assessment
                </p>
              </div>
            </div>
            
            {onBack && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onBack}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <ProgressBar 
            currentStep={currentStep} 
            totalSteps={totalSteps}
            stepLabels={[
              "Core EQ", 
              "Personality", 
              "Scenarios", 
              "PEARL", 
              "Growth Plan"
            ]}
          />
          
          {title && (
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-muted-dark mb-2">
                {title}
              </h2>
              {subtitle && (
                <p className="text-lg text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          
          <div className="animate-fade-in">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentLayout;