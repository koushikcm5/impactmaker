import {
  Leaf, BarChart2, Car, Landmark, ShoppingBag, ShoppingCart, CreditCard, Heart,
  Brain, Briefcase, Code2, Target,
  Lightbulb, TrendingUp, RefreshCw,
  Mic, Users,
} from 'lucide-react';

export const domains = [
  { label: 'ESG',                   icon: Leaf        },
  { label: 'Finance P&A',           icon: BarChart2   },
  { label: 'Automobile',            icon: Car         },
  { label: 'Government & Diplomats',icon: Landmark    },
  { label: 'FMCG',                  icon: ShoppingBag },
  { label: 'Retail',                icon: ShoppingCart},
  { label: 'Banking',               icon: CreditCard  },
  { label: 'Healthcare',            icon: Heart       },
];

export const technicalWorkshops = [
  {
    icon: Brain,
    title: "AI for Executive Leadership",
    description: "Strategic AI frameworks and tools designed for C-suite leaders navigating enterprise-wide AI transformation.",
  },
  {
    icon: Briefcase,
    title: "AI for Functional Roles",
    description: "Tailored AI workflows for HR, IT, Finance, Operations and more — hands-on skills for every department.",
  },
  {
    icon: Code2,
    title: "AI for Fresh Engineers",
    description: "Prompt engineering, AI tooling, and integration fundamentals for early-career engineers entering the AI era.",
  },
  {
    icon: Target,
    title: "Use Case–Driven Personalized Case Studies",
    description: "Industry-specific AI implementations with real-world scenarios personalized to your domain and challenges.",
  },
];

export const transformationalWorkshops = [
  {
    icon: Lightbulb,
    title: "Design Thinking for Corporate Work Hands-On",
    description: "Immersive, hands-on design sprints using human-centered problem-solving to unlock innovation at work.",
  },
  {
    icon: TrendingUp,
    title: "Leadership Transformation",
    description: "Evolve leadership mindsets, communication styles, and executive capabilities for the modern workplace.",
  },
  {
    icon: RefreshCw,
    title: "Agile & Scrum Workshops",
    description: "Practical agile methodologies and Scrum frameworks to accelerate delivery and enhance team collaboration.",
  },
];

export const speakerSessions = [
  {
    icon: Mic,
    title: "Keynote Speaker",
    description: "Inspiring keynote addresses on AI, creativity, human potential, and the future of work — tailored to your event theme and audience.",
  },
  {
    icon: Users,
    title: "Leadership Speaker",
    description: "Powerful talks on leadership transformation, organizational resilience, and the executive mindset needed to lead in uncertainty.",
  },
];
