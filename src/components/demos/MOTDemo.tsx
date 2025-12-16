import { useState, useEffect } from "react";
import { Car, Gauge, Calendar, AlertTriangle, CheckCircle, Loader2 } from "lucide-react";

const steps = [
  { id: 1, label: "Enter Details" },
  { id: 2, label: "Processing" },
  { id: 3, label: "View Results" },
];

export function MOTDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [vehicleAge, setVehicleAge] = useState("");
  const [mileage, setMileage] = useState("");
  const [riskValue, setRiskValue] = useState(0);

  useEffect(() => {
    const stepDurations = [4000, 2000, 4000];
    let timeout: NodeJS.Timeout;

    const advanceStep = () => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % 4;
        if (next === 0) {
          setVehicleAge("");
          setMileage("");
          setRiskValue(0);
        }
        return next;
      });
    };

    timeout = setTimeout(advanceStep, stepDurations[currentStep] || 3000);
    return () => clearTimeout(timeout);
  }, [currentStep]);

  // Typing effect for vehicle age
  useEffect(() => {
    if (currentStep === 0) {
      const targetAge = "7";
      const targetMileage = "68,450";
      
      let ageIndex = 0;
      let mileageIndex = 0;
      
      const ageInterval = setInterval(() => {
        if (ageIndex <= targetAge.length) {
          setVehicleAge(targetAge.slice(0, ageIndex));
          ageIndex++;
        } else {
          clearInterval(ageInterval);
        }
      }, 300);

      const mileageTimeout = setTimeout(() => {
        const mileageInterval = setInterval(() => {
          if (mileageIndex <= targetMileage.length) {
            setMileage(targetMileage.slice(0, mileageIndex));
            mileageIndex++;
          } else {
            clearInterval(mileageInterval);
          }
        }, 80);
        return () => clearInterval(mileageInterval);
      }, 800);

      return () => {
        clearInterval(ageInterval);
        clearTimeout(mileageTimeout);
      };
    }
  }, [currentStep]);

  // Risk value animation
  useEffect(() => {
    if (currentStep === 2) {
      let value = 0;
      const targetValue = 34;
      const interval = setInterval(() => {
        if (value < targetValue) {
          value += 2;
          setRiskValue(Math.min(value, targetValue));
        } else {
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  return (
    <div className="relative w-full h-full bg-background rounded-lg overflow-hidden border border-border">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-background/80 rounded-md px-3 py-1 text-xs text-muted-foreground">
            mot.autodun.com
          </div>
        </div>
      </div>

      {/* Demo content */}
      <div className="p-4 h-[calc(100%-48px)] flex flex-col">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 rounded-full mb-2">
            <Car className="w-3 h-3 text-amber-600" />
            <span className="text-xs font-medium text-amber-700">MOT Risk Predictor</span>
          </div>
        </div>

        {/* Form / Results area */}
        <div className="flex-1 flex items-center justify-center">
          {currentStep === 0 && (
            <div className="w-full max-w-[200px] space-y-3 animate-fade-in">
              {/* Vehicle Age Input */}
              <div>
                <label className="text-[10px] text-muted-foreground mb-1 block">Vehicle Age (years)</label>
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${vehicleAge ? 'border-primary bg-primary/5' : 'border-border bg-secondary/30'}`}>
                  <Calendar className="w-3 h-3 text-muted-foreground" />
                  <span className="text-sm text-foreground">{vehicleAge}<span className="animate-pulse">|</span></span>
                </div>
              </div>

              {/* Mileage Input */}
              <div>
                <label className="text-[10px] text-muted-foreground mb-1 block">Mileage</label>
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${mileage ? 'border-primary bg-primary/5' : 'border-border bg-secondary/30'}`}>
                  <Gauge className="w-3 h-3 text-muted-foreground" />
                  <span className="text-sm text-foreground">{mileage}</span>
                </div>
              </div>

              {/* Predict button */}
              <div className={`transition-all duration-500 ${mileage.length > 5 ? 'opacity-100' : 'opacity-50'}`}>
                <div className="w-full py-2 bg-primary rounded-lg text-center">
                  <span className="text-xs font-medium text-primary-foreground">Predict Risk</span>
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="text-center space-y-4 animate-fade-in">
              <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
              <div>
                <p className="text-sm font-medium text-foreground">Analysing vehicle data...</p>
                <p className="text-[10px] text-muted-foreground mt-1">Processing historical MOT patterns</p>
              </div>
            </div>
          )}

          {currentStep >= 2 && (
            <div className="text-center space-y-4 animate-fade-in">
              {/* Risk gauge */}
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-secondary"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray={`${riskValue * 2.51} 251`}
                    strokeLinecap="round"
                    className="text-green-500 transition-all duration-300"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">{riskValue}%</span>
                  <span className="text-[10px] text-muted-foreground">Risk Score</span>
                </div>
              </div>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Low Risk</span>
              </div>

              {/* Explanation */}
              <div className="max-w-[180px] mx-auto">
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  Based on vehicle age and mileage patterns, this vehicle has a lower than average probability of MOT failure.
                </p>
              </div>

              {/* Disclaimer */}
              <div className="flex items-center justify-center gap-1.5 text-[9px] text-muted-foreground/70">
                <AlertTriangle className="w-3 h-3" />
                <span>Research estimate only</span>
              </div>
            </div>
          )}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= currentStep ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step label */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="px-3 py-1.5 bg-card/90 backdrop-blur border border-border rounded-full">
          <p className="text-xs font-medium text-foreground">
            {steps[Math.min(currentStep, 2)]?.label}
          </p>
        </div>
      </div>
    </div>
  );
}