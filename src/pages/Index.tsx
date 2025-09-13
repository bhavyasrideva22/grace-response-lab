import { useState } from "react";
import AssessmentIntro from "@/components/AssessmentIntro";
import AssessmentFlow from "@/components/AssessmentFlow";

type AppState = 'intro' | 'assessment' | 'results';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('intro');
  const [assessmentResults, setAssessmentResults] = useState<any>(null);

  const handleStartAssessment = () => {
    setCurrentState('assessment');
  };

  const handleBackToIntro = () => {
    setCurrentState('intro');
  };

  const handleAssessmentComplete = (results: any) => {
    setAssessmentResults(results);
    setCurrentState('results');
  };

  if (currentState === 'intro') {
    return <AssessmentIntro onStartAssessment={handleStartAssessment} />;
  }

  if (currentState === 'assessment') {
    return (
      <AssessmentFlow 
        onBack={handleBackToIntro}
        onComplete={handleAssessmentComplete}
      />
    );
  }

  // Results state - placeholder for now
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface-soft to-primary-soft flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-muted-dark mb-4">Assessment Complete!</h1>
        <p className="text-muted-foreground">Results analysis coming soon...</p>
      </div>
    </div>
  );
};

export default Index;
