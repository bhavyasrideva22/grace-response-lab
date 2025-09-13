import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ScenarioOption {
  id: string;
  text: string;
  description?: string;
}

interface ScenarioQuestionProps {
  scenario: string;
  question: string;
  options: ScenarioOption[];
  value: string | null;
  onChange: (value: string) => void;
}

const ScenarioQuestion = ({ 
  scenario, 
  question, 
  options, 
  value, 
  onChange 
}: ScenarioQuestionProps) => {
  return (
    <Card className="card-elevated border-0 transition-all duration-300">
      <CardContent className="p-8">
        {/* Scenario */}
        <div className="mb-6 p-4 bg-accent-soft rounded-lg border-l-4 border-accent">
          <h3 className="text-lg font-semibold text-accent mb-2">Scenario</h3>
          <p className="text-muted-dark leading-relaxed">
            {scenario}
          </p>
        </div>
        
        {/* Question */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-muted-dark">
            {question}
          </h3>
        </div>
        
        {/* Options */}
        <div className="space-y-3">
          {options.map((option, index) => {
            const isSelected = value === option.id;
            const letter = String.fromCharCode(65 + index); // A, B, C, D...
            
            return (
              <Button
                key={option.id}
                variant={isSelected ? "default" : "outline"}
                className={`w-full justify-start text-left p-4 h-auto transition-all duration-200 ${
                  isSelected 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'hover:bg-primary-soft hover:border-primary hover:text-primary'
                }`}
                onClick={() => onChange(option.id)}
              >
                <div className="flex gap-4 items-start">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold text-sm flex-shrink-0 ${
                    isSelected 
                      ? 'border-primary-foreground bg-primary-foreground text-primary' 
                      : 'border-muted-foreground text-muted-foreground'
                  }`}>
                    {letter}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium mb-1">{option.text}</div>
                    {option.description && (
                      <div className={`text-sm ${
                        isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'
                      }`}>
                        {option.description}
                      </div>
                    )}
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScenarioQuestion;