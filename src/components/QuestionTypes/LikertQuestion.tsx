import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LikertQuestionProps {
  question: string;
  description?: string;
  value: number | null;
  onChange: (value: number) => void;
  scale?: {
    labels: string[];
    values: number[];
  };
}

const LikertQuestion = ({ 
  question, 
  description, 
  value, 
  onChange,
  scale = {
    labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    values: [1, 2, 3, 4, 5]
  }
}: LikertQuestionProps) => {
  return (
    <Card className="card-elevated border-0 transition-all duration-300">
      <CardContent className="p-8">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-muted-dark mb-3">
            {question}
          </h3>
          {description && (
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        <div className="space-y-3">
          {scale.labels.map((label, index) => {
            const scaleValue = scale.values[index];
            const isSelected = value === scaleValue;
            
            return (
              <Button
                key={scaleValue}
                variant={isSelected ? "default" : "outline"}
                className={`w-full justify-start text-left p-4 h-auto transition-all duration-200 ${
                  isSelected 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'hover:bg-primary-soft hover:border-primary hover:text-primary'
                }`}
                onClick={() => onChange(scaleValue)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    isSelected 
                      ? 'border-primary-foreground bg-primary-foreground' 
                      : 'border-muted-foreground'
                  }`}>
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default LikertQuestion;