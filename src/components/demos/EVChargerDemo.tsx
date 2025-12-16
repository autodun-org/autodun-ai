import { useState, useEffect } from "react";
import { Search, MapPin, Zap, Star, MessageSquare, CheckCircle } from "lucide-react";

const steps = [
  { id: 1, label: "Search Location", icon: Search },
  { id: 2, label: "View Stations", icon: MapPin },
  { id: 3, label: "Select Charger", icon: Zap },
  { id: 4, label: "Submit Feedback", icon: MessageSquare },
  { id: 5, label: "AI Score Updated", icon: Star },
];

export function EVChargerDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [searchText, setSearchText] = useState("");
  const fullSearchText = "Manchester, UK";

  useEffect(() => {
    const stepDuration = 3000;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 6);
    }, stepDuration);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentStep === 0) {
      setSearchText("");
      setIsTyping(true);
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < fullSearchText.length) {
          setSearchText(fullSearchText.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 100);
      return () => clearInterval(typingInterval);
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
            ev.autodun.com
          </div>
        </div>
      </div>

      {/* Demo content */}
      <div className="p-4 h-[calc(100%-48px)] flex flex-col">
        {/* Search bar */}
        <div className="mb-4">
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 ${currentStep === 0 ? 'border-primary bg-primary/5' : 'border-border bg-secondary/30'}`}>
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground">
              {searchText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </div>
        </div>

        {/* Map area */}
        <div className="flex-1 relative bg-secondary/20 rounded-lg overflow-hidden">
          {/* Map grid background */}
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Station markers */}
          <div className={`absolute transition-all duration-500 ${currentStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-[20%] left-[30%]">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${currentStep >= 2 ? 'bg-primary scale-125' : 'bg-primary/60 scale-100'}`}>
                <Zap className="w-3 h-3 text-primary-foreground" />
              </div>
            </div>
            <div className="absolute top-[40%] left-[50%]">
              <div className="w-6 h-6 rounded-full bg-primary/60 flex items-center justify-center">
                <Zap className="w-3 h-3 text-primary-foreground" />
              </div>
            </div>
            <div className="absolute top-[60%] left-[25%]">
              <div className="w-6 h-6 rounded-full bg-primary/60 flex items-center justify-center">
                <Zap className="w-3 h-3 text-primary-foreground" />
              </div>
            </div>
            <div className="absolute top-[35%] left-[70%]">
              <div className="w-6 h-6 rounded-full bg-primary/60 flex items-center justify-center">
                <Zap className="w-3 h-3 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Station details panel */}
          <div className={`absolute right-2 top-2 bottom-2 w-[45%] bg-card border border-border rounded-lg p-3 transition-all duration-500 ${currentStep >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-medium text-foreground">Station #1247</p>
                <p className="text-[10px] text-muted-foreground">Manchester City Centre</p>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 bg-green-500/10 rounded text-[10px] text-green-600 font-medium">Available</div>
                <div className="px-2 py-0.5 bg-primary/10 rounded text-[10px] text-primary font-medium">50kW</div>
              </div>

              {/* Feedback section */}
              <div className={`transition-all duration-500 ${currentStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-[10px] text-muted-foreground mb-1">Rate your experience:</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-4 h-4 transition-all duration-300 ${currentStep >= 3 && star <= 4 ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'}`}
                      style={{ transitionDelay: `${star * 100}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* AI Score */}
              <div className={`transition-all duration-500 ${currentStep >= 4 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-2 p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-[10px] font-medium text-green-700">AI Score: Good</p>
                    <p className="text-[9px] text-green-600/80">Based on 127 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            {currentStep < 5 ? steps[currentStep]?.label : "Complete"}
          </p>
        </div>
      </div>
    </div>
  );
}