import clsx from 'clsx';

interface StepIndicatorProps {
  currentStep: 'input' | 'confirm' | 'complete';
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { id: 'input', label: '入力', number: 1 },
    { id: 'confirm', label: '確認', number: 2 },
    { id: 'complete', label: '完了', number: 3 },
  ] as const;

  return (
    <div className="flex justify-center mb-12">
      <div className="relative flex items-center w-full max-w-lg">
        {/* Progress Bar Background */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10" />

        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = 
            (currentStep === 'confirm' && step.id === 'input') ||
            (currentStep === 'complete' && step.id !== 'complete'); // complete時は全部完了扱いに見せるか、現在地だけ見せるか。一般的には現在地。

          // isPast: 現在のステップより前かどうか
          const isPast = 
            (currentStep === 'confirm' && step.id === 'input') ||
            (currentStep === 'complete' && (step.id === 'input' || step.id === 'confirm'));

          return (
            <div key={step.id} className="flex-1 flex flex-col items-center bg-white relative">
                {/* Line connector logic could be complex, simple approach: */}
                
              <div
                className={clsx(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 mb-2 z-10",
                  (isActive || isPast)
                    ? "bg-gray-900 border-gray-900 text-white"
                    : "bg-white border-gray-300 text-gray-300"
                )}
              >
                {step.number}
              </div>
              <span
                className={clsx(
                  "text-sm",
                  isActive ? "text-gray-900 font-bold" : "text-gray-300"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

