import { useState } from "react";
import { Button } from "@/components/ui/button";
import AssessmentLayout from "./AssessmentLayout";
import LikertQuestion from "./QuestionTypes/LikertQuestion";
import ScenarioQuestion from "./QuestionTypes/ScenarioQuestion";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface AssessmentFlowProps {
  onBack: () => void;
  onComplete: (results: any) => void;
}

// Sample questions - in a real app these would come from a database or API
const assessmentQuestions = [
  {
    type: 'likert',
    section: 'Core EQ',
    question: "I can usually identify what I'm feeling, even when it's complex or mixed.",
    description: "Think about times when you've experienced complicated emotions. How aware are you of your emotional state?",
    trait: 'self-awareness'
  },
  {
    type: 'scenario',
    section: 'Core EQ',
    scenario: "You receive unexpected public criticism from a teammate during a meeting.",
    question: "What do you do?",
    options: [
      { id: 'defend', text: "Defend yourself immediately", description: "Address the criticism right away" },
      { id: 'discuss', text: "Pause and ask to discuss it 1:1 later", description: "Take time to process privately" },
      { id: 'withdraw', text: "Withdraw from the discussion", description: "Step back and avoid confrontation" },
      { id: 'apologize', text: "Apologize publicly even if unsure why", description: "Try to smooth things over quickly" }
    ],
    trait: 'self-regulation'
  },
  {
    type: 'likert',
    section: 'Core EQ',
    question: "When someone is upset, I can usually sense what they're feeling without them telling me.",
    trait: 'empathy'
  },
  {
    type: 'scenario',
    section: 'Situational EQ',
    scenario: "You're in a heated discussion where emotions are running high and people are talking over each other.",
    question: "What's your natural tendency?",
    options: [
      { id: 'mediate', text: "Try to mediate and calm everyone down" },
      { id: 'assertive', text: "Speak more assertively to be heard" },
      { id: 'listen', text: "Step back and listen carefully" },
      { id: 'leave', text: "Suggest taking a break from the discussion" }
    ],
    trait: 'social-skills'
  },
  {
    type: 'likert',
    section: 'PEARL Framework',
    question: "I stay motivated and optimistic even when facing setbacks.",
    trait: 'motivation'
  }
];

const AssessmentFlow = ({ onBack, onComplete }: AssessmentFlowProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<number, any>>({});
  
  const totalQuestions = assessmentQuestions.length;
  const currentStep = Math.floor((currentQuestion / totalQuestions) * 5) + 1;
  
  const question = assessmentQuestions[currentQuestion];
  const currentResponse = responses[currentQuestion];
  
  const handleResponse = (value: any) => {
    setResponses(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };
  
  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Assessment complete
      onComplete(responses);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };
  
  const canProceed = currentResponse !== undefined && currentResponse !== null;
  
  return (
    <AssessmentLayout
      currentStep={currentStep}
      totalSteps={5}
      onBack={currentQuestion === 0 ? onBack : undefined}
      title={question.section}
      subtitle={`Question ${currentQuestion + 1} of ${totalQuestions}`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Question */}
        <div className="mb-8">
          {question.type === 'likert' ? (
            <LikertQuestion
              question={question.question}
              description={question.description}
              value={currentResponse}
              onChange={handleResponse}
            />
          ) : (
            <ScenarioQuestion
              scenario={question.scenario!}
              question={question.question}
              options={question.options!}
              value={currentResponse}
              onChange={handleResponse}
            />
          )}
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <div className="text-sm text-muted-foreground">
            {currentQuestion + 1} of {totalQuestions}
          </div>
          
          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="transition-all duration-200"
          >
            {currentQuestion === totalQuestions - 1 ? 'Complete Assessment' : 'Next'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        {/* Help Text */}
        {!canProceed && (
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Please select an answer to continue
            </p>
          </div>
        )}
      </div>
    </AssessmentLayout>
  );
};

export default AssessmentFlow;