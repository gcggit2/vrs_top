import React from 'react';

type StepProps = {
  currentStep: 'input' | 'confirm' | 'complete';
};

export const StepBar = ({ currentStep }: StepProps) => {
  const steps = [
    { id: 'input', label: '入力', number: 1 },
    { id: 'confirm', label: '確認', number: 2 },
    { id: 'complete', label: '完了', number: 3 },
  ];

  const getStepNumber = (stepId: string) => {
    switch(stepId) {
      case 'input': return 1;
      case 'confirm': return 2;
      case 'complete': return 3;
      default: return 1;
    }
  };

  const currentStepNum = getStepNumber(currentStep);

  return (
    <div className="flex justify-center items-center mb-12">
      <div className="flex items-center w-full max-w-lg relative justify-between px-6 md:px-12">
        {/* Progress Line Background */}
        <div className="absolute top-5 left-0 w-full h-[2px] bg-gray-200 -z-10"></div>
        
        {/* Active Progress Line (完了した部分まで赤く塗る) */}
        <div 
            className="absolute top-5 left-0 h-[2px] bg-brand-red -z-10 transition-all duration-500 ease-in-out"
            style={{ width: `${((currentStepNum - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
        
        {steps.map((step) => {
          const isCurrent = step.id === currentStep;
          const isCompleted = step.number < currentStepNum;
          
          let circleClass = "bg-gray-200 text-gray-500";
          let labelClass = "text-gray-400";

          if (isCurrent) {
              // 現在地: 赤背景・白文字・少し大きく
              circleClass = "bg-brand-red text-white shadow-md scale-110";
              labelClass = "text-brand-red font-bold";
          } else if (isCompleted) {
              // 完了済み: 赤背景・白文字
              circleClass = "bg-brand-red text-white";
              labelClass = "text-brand-red font-medium";
          }

          return (
            <div key={step.id} className="flex flex-col items-center relative bg-white px-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-base mb-2 transition-all duration-300 ${circleClass}`}>
                {step.number}
              </div>
              <span className={`text-xs md:text-sm transition-colors duration-300 ${labelClass}`}>{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
