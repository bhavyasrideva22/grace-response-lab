interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepLabels?: string[];
}

const ProgressBar = ({ currentStep, totalSteps, stepLabels }: ProgressBarProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full mb-8">
      {/* Progress Bar */}
      <div className="relative">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500 ease-out progress-glow"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        
        {/* Step Indicators */}
        <div className="flex justify-between mt-4">
          {Array.from({ length: totalSteps }, (_, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber <= currentStep;
            const isCurrent = stepNumber === currentStep;
            
            return (
              <div key={stepNumber} className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-primary text-primary-foreground shadow-lg' 
                      : isCurrent 
                      ? 'bg-primary-soft text-primary border-2 border-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {stepNumber}
                </div>
                
                {stepLabels && stepLabels[index] && (
                  <span className={`text-xs mt-2 max-w-16 text-center ${
                    isCompleted || isCurrent ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}>
                    {stepLabels[index]}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Progress Text */}
      <div className="text-center mt-6">
        <span className="text-sm text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </span>
        <div className="text-xs text-muted-foreground mt-1">
          {Math.round(progressPercentage)}% Complete
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;