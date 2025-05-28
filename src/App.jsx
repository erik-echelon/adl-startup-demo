import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button"; // Button is imported but not used.
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Building2, 
  Download, 
  Search, 
  MessageSquare, 
  Users, 
  FileText, 
  ChevronsDown,
  ShieldAlert,
  Cpu,
  HardHat,
  Recycle,
  Brain,        // New icon for Gemini example
  FileLock2,    // New icon for confidential doc example
  MessageSquareQuote // New icon for quote examples
} from "lucide-react"; 

/**
 * Simulated data for Traveler's profile.
 */
const companyProfile = [
  {
    label: "Industry Leadership",
    value: "One of the largest U.S. property-casualty insurers with deep expertise in construction and the built environment.",
  },
  {
    label: "Risk Management Know-How",
    value: "Specialized risk engineers and tools like ZoneCheck℠ to identify and mitigate job-site hazards.",
  },
  {
    label: "Extensive Claims Data",
    value: "Vast historical data on claims and losses, powering analytics like the Early Severity Predictor®.",
  },
  {
    label: "Innovation Focus",
    value: "Dedicated innovation teams, Chief Innovation Officer, and initiatives like the Travelers Innovation Network for Construction.",
  },
  {
    label: "Startup Engagement",
    value: "Partnerships with accelerators (e.g., Plug and Play), venture investments (e.g., HOVER), and a history of successful pilots (e.g., Triax).",
  },
  {
    label: "Financial Strength",
    value: "Fortune 100 company with capacity for venture investments, acquisitions (e.g., Corvus), and creating new insurance solutions.",
  },
  {
    label: "Customer Network",
    value: "Extensive relationships with construction firms, contractors, real estate companies, and public sector clients.",
  },
  { 
    label: "Distribution Channels", 
    value: "Wide agent and broker network across the U.S., facilitating market access for new solutions." 
  },
  {
    label: "Industry Expertise (Original)", 
    value: "Construction, Real Estate, Surety, Equipment Breakdown",
  },
  { label: "Risk‑Control Consultants (Original)", value: "700+" },
  { label: "Claims Data Points (Original)", value: "200M+" },
];

/**
 * Data Sources for Company Profile with example pop-up content.
 */
const dataSources = [
  {
    id: "ds1",
    icon: Search,
    label: "Deep Research",
    example: {
      title: "Deep Research with Generative AI",
      icon: Brain,
      type: "text_content",
      contentLines: [
        "AI tools like Google Gemini are leveraged to analyze vast datasets, identify emerging technological trends, and synthesize complex information from diverse sources to inform strategic opportunities.",
        "Example Application: Analyzing global patent filings for new construction materials, or summarizing regulatory changes affecting the built environment."
      ],
    }
  },
  {
    id: "ds2",
    icon: MessageSquare, // Changed to MessageSquare for consistency with user file
    label: "Internal Interviews",
    example: {
      title: "Internal Stakeholder Perspective",
      icon: MessageSquareQuote,
      type: "quote",
      quote: "Our proprietary data, combined with the hands-on expertise of our risk control teams, gives us an unparalleled edge in understanding and mitigating construction risks. We need to leverage this more systematically.",
      source: "Anonymous Travelers Executive (Paraphrased)"
    }
  },
  {
    id: "ds3",
    icon: Users, // Changed to Users for consistency
    label: "External Interviews",
    example: {
      title: "External Expert Validation",
      icon: Users, // Using Users icon here too
      type: "quote",
      quote: "The construction tech space is rapidly evolving. Insurers who effectively partner with startups focusing on predictive analytics and IoT for risk mitigation are poised to gain a significant competitive advantage.",
      source: "Anonymous Industry Analyst (Paraphrased)"
    }
  },
  {
    id: "ds4",
    icon: FileText,
    label: "Strategy Documents",
    example: {
      title: "Strategic Imperative Example",
      icon: FileLock2, // Representing confidentiality
      type: "text_content",
      contentLines: [
        "Representational Excerpt from a Simulated Internal Strategy Document:",
        "Objective 3.1: Expand offerings in preventative risk solutions for commercial clients, focusing on technology-driven value propositions.",
        "Key Action: Explore partnerships and M&A opportunities in the ConTech/InsurTech space to accelerate this objective within the next 18-24 months."
      ],
    }
  },
];


// Placeholder PDF URL
const PLACEHOLDER_PDF_URL = "/documents/travelers_startup_analysis_q2_2025.pdf";

/**
 * Data for ADL Ventures Theories of Change / Megatrends with example pop-up content.
 */
const theoriesOfChange = [
  {
    id: "toc1",
    name: "Climate Adaptation & Resilient Infrastructure",
    description: "Innovations for a built world facing new climate stresses and resource constraints.",
    icon: ShieldAlert,
    example: {
      title: "Climate Adaptation: Supporting Data",
      icon: ShieldAlert,
      type: "text_content",
      contentLines: [
        "Key Finding from Simulated ADL Ventures Research:",
        "\"Our analysis projects a 25% increase in insured losses due to extreme weather events impacting the construction sector over the next decade in North America. This underscores the urgent need for innovations in resilient building practices, advanced predictive modeling, and parametric insurance products.\""
      ],
    }
  },
  {
    id: "toc2",
    name: "Digitalization of Built Environment",
    description: "Leveraging data, AI, and IoT for smarter design, construction, and operations.",
    icon: Cpu,
    example: {
      title: "Digitalization: Market Driver",
      icon: Cpu,
      type: "text_content",
      contentLines: [
        "Simulated Market Analysis Snippet:",
        "\"The adoption of Building Information Modeling (BIM) to Level 3, widespread IoT sensor deployment for real-time monitoring, and AI-driven project management tools is no longer nascent but accelerating rapidly. Startups that can effectively integrate these disparate data streams to provide actionable insights for risk reduction, operational efficiency, and enhanced safety are prime for investment and partnership.\""
      ],
    }
  },
  {
    id: "toc3",
    name: "Future of Work & Automation",
    description: "Addressing labor needs and enhancing safety/productivity via new technologies.",
    icon: HardHat,
    example: {
      title: "Future of Work: Challenge & Opportunity",
      icon: HardHat,
      type: "text_content",
      contentLines: [
        "Excerpt from Simulated Industry Report:",
        "\"The construction industry faces a persistent skilled labor shortage, with an estimated 500,000 open positions in the US alone. Robotics for repetitive tasks (e.g., bricklaying, welding), exoskeletons to reduce worker strain, and AR/VR for training and remote assistance offer viable pathways to augment human capabilities, improve site safety, and boost overall productivity.\""
      ],
    }
  },
  {
    id: "toc4",
    name: "Sustainable Materials & Circular Economy",
    description: "Shifting towards resource efficiency, waste reduction, and greener alternatives.",
    icon: Recycle,
    example: {
      title: "Sustainability: Emerging Demand & Risk",
      icon: Recycle,
      type: "text_content",
      contentLines: [
        "Simulated Trend Report Observation:",
        "\"Growing regulatory pressure (e.g., embodied carbon limits) and increasing client demand are pushing for the use of sustainable, low-carbon building materials (e.g., mass timber, recycled composites) and circular economy models (e.g., design for disassembly). This shift introduces new risk profiles and insurance needs related to material performance, supply chain integrity, and long-term durability.\""
      ],
    }
  },
];


const ideas = [
  {
    id: 1,
    name: "Smart Water Leak Detection & Auto‑Shutoff",
    scores: {
      "Loss Ratio Impact": 28,
      "Asset Leverage": 23,
      "Speed to Value": 18,
      "Strategic Adjacency": 12,
      "Portfolio Diversification": 7,
    },
    explanation: "Water claims are Travelers’ #1 property loss driver. Pair IoT flow/acoustic sensors with Travelers’ loss data and National Account distribution to cut both frequency and severity, while offering premium credits through the Innovation Network.",
    pdfUrl: PLACEHOLDER_PDF_URL 
  },
  {
    id: 2,
    name: "Predictive Analytics for Construction Defect Prevention",
    scores: {
      "Loss Ratio Impact": 26,
      "Asset Leverage": 24,
      "Speed to Value": 16,
      "Strategic Adjacency": 13,
      "Portfolio Diversification": 6,
    },
    explanation: "Travelers owns one of the largest latent-defect claims datasets and is a top surety writer. Feeding that data into the startup’s models lets Travelers price Builders-Risk and performance bonds with unmatched accuracy and reduce long-tail GL losses.",
    pdfUrl: PLACEHOLDER_PDF_URL
  },
  {
    id: 3,
    name: "AI Site‑Safety Computer Vision Monitoring",
    scores: {
      "Loss Ratio Impact": 25,
      "Asset Leverage": 22,
      "Speed to Value": 17,
      "Strategic Adjacency": 11,
      "Portfolio Diversification": 8,
    },
    explanation: "Leverages the 700-person Risk-Control staff and massive WC/GL image library to flag PPE gaps & proximity hazards in real time. Even a 5 % incident reduction meaningfully lifts WC combined ratio and deepens contractor stickiness.",
    pdfUrl: PLACEHOLDER_PDF_URL
  },
  {
    id: 4,
    name: "Wearable Ergonomics & Fatigue Sensors",
    scores: {
      "Loss Ratio Impact": 24,
      "Asset Leverage": 20,
      "Speed to Value": 17,
      "Strategic Adjacency": 10,
      "Portfolio Diversification": 9,
    },
    explanation: "Musculoskeletal injuries dominate comp costs. Travelers’ Early Severity Predictor plus IMU sensor data enables a  dynamic  experience-mod and real-time incentives—something no competing carrier can match.",
    pdfUrl: PLACEHOLDER_PDF_URL
  },
  {
    id: 5,
    name: "IoT Predictive Maintenance for HVAC / Electrical",
    scores: {
      "Loss Ratio Impact": 23,
      "Asset Leverage": 21,
      "Speed to Value": 16,
      "Strategic Adjacency": 11,
      "Portfolio Diversification": 7,
    },
    explanation: "Merges Travelers’ century-long boiler-machinery inspection know-how with live vibration/current data, turning the insurer from indemnifier to preventive partner while enriching underwriting variables.",
    pdfUrl: PLACEHOLDER_PDF_URL
  },
  {
    id: 6,
    name: "BondSnap AI – Instant Performance‑Bond Underwriting",
    scores: {
      "Loss Ratio Impact": 20,
      "Asset Leverage": 24,
      "Speed to Value": 15,
      "Strategic Adjacency": 12,
      "Portfolio Diversification": 8,
    },
    explanation: "Automates a core business where Travelers is already a market leader. Proprietary surety-loss data trains the models; speed becomes a moat with GCs and public-works owners.",
    pdfUrl: PLACEHOLDER_PDF_URL
  },
  {
    id: 7,
    name: "Predictive Maintenance for Construction Equipment",
    scores: {
      "Loss Ratio Impact": 22,
      "Asset Leverage": 21,
      "Speed to Value": 15,
      "Strategic Adjacency": 10,
      "Portfolio Diversification": 9,
    },
    explanation: "Couples telematics with Travelers’ equipment-breakdown curves to avert costly failures and schedule overruns—protecting both Contractors’ Equipment and Surety books.",
    pdfUrl: PLACEHOLDER_PDF_URL
  },
  {
    id: 8,
    name: "Hyper‑local Weather Alerting & CAT Triggers",
    scores: {
      "Loss Ratio Impact": 24,
      "Asset Leverage": 19,
      "Speed to Value": 16,
      "Strategic Adjacency": 9,
      "Portfolio Diversification": 8,
    },
    explanation: "Integrates Travelers’ CAT modeling lab with now-cast weather APIs. Push notifications secure job sites hours before convective storms, trimming large-loss severity and LAE.",
    pdfUrl: PLACEHOLDER_PDF_URL
  },
  {
    id: 9,
    name: "Cybersecurity Platform for Smart‑Building OT/IoT",
    scores: {
      "Loss Ratio Impact": 19,
      "Asset Leverage": 22,
      "Speed to Value": 15,
      "Strategic Adjacency": 13,
      "Portfolio Diversification": 9,
    },
    explanation: "Combines Travelers’ CyberRisk underwriting with boiler-machinery engineers to protect building-control networks—a risk few cyber MGAs understand. Creates a differentiated “Smart-Building Shield” bundle.",
    pdfUrl: PLACEHOLDER_PDF_URL
  },
  {
    id: 10,
    name: "Digital Twin Platform for Commercial‑Property Risk",
    scores: {
      "Loss Ratio Impact": 21,
      "Asset Leverage": 20,
      "Speed to Value": 14,
      "Strategic Adjacency": 11,
      "Portfolio Diversification": 8,
    },
    explanation: "Builds on HOVER precedent: 3-D twins + IoT + claims data let Risk-Control perform  virtual  inspections, reducing LAE and enriching rating variables for the mid-market property book.",
    pdfUrl: PLACEHOLDER_PDF_URL
  },
];


// Helper function to format scores for the BarChart
function formatScores(scores) {
  return Object.entries(scores).map(([name, value]) => ({ name, value }));
}

// Component to display each idea card and its detailed chart in a dialog
function IdeaCard({ idea }) {
  const totalScore = Object.values(idea.scores).reduce((a, b) => a + b, 0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg">
          <CardContent className="p-4 flex items-center justify-between">
            <span className="font-medium text-sm">{idea.name}</span>
            <span className="text-xl font-bold text-blue-600">{totalScore}</span>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="pb-2 border-b">
          <DialogTitle>{idea.name}</DialogTitle>
           <p className="text-sm text-slate-500 pt-1">Overall Score: <span className="font-bold text-blue-700 text-base">{totalScore}</span> / 100</p>
        </DialogHeader>
        <div className="mt-4 space-y-4">
            <div className="h-80"> {/* Chart container */}
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                data={formatScores(idea.scores)}
                margin={{
                    top: 5,
                    right: 20, 
                    left: 0,  
                    bottom: 65, 
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    tick={{ fontSize: 9 }} 
                    interval={0} 
                    angle={-45} 
                    textAnchor="end" 
                    dy={10} 
                />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip
                    contentStyle={{ fontSize: '12px', borderRadius: '0.5rem' }}
                    itemStyle={{ padding: '2px 0' }}
                />
                <Bar dataKey="value" fill="#1d4ed8" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
            </div>
            <div>
            <h3 className="text-md font-semibold text-slate-700 mb-1">Strategic Rationale:</h3>
            <ScrollArea className="h-32 pr-2 border rounded-md p-2 bg-slate-50">
                <p className="text-sm text-slate-600 whitespace-pre-wrap">{idea.explanation}</p>
            </ScrollArea>
            </div>
            <div className="pt-2">
                <a
                    href={idea.pdfUrl || PLACEHOLDER_PDF_URL} 
                    download={`${idea.name.replace(/[^a-zA-Z0-9]/g, '_')}_Analysis.pdf`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                    <Download className="w-4 h-4 mr-2" />
                    Download Full Analysis
                </a>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Component to render the content of the example pop-up dialog.
 */
function ExampleDialogContent({ example }) {
  const IconComponent = example.icon;
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="flex items-center text-slate-800">
          {IconComponent && <IconComponent className="w-5 h-5 mr-2.5 text-slate-600" />}
          {example.title}
        </DialogTitle>
      </DialogHeader>
      <div className="py-4 text-sm text-slate-700 space-y-3">
        {example.type === 'quote' && (
          <blockquote className="italic border-l-4 border-slate-300 pl-4 py-1 text-slate-600">
            "{example.quote}"
            {example.source && <cite className="block text-xs text-slate-500 mt-1.5 not-italic">- {example.source}</cite>}
          </blockquote>
        )}
        {example.type === 'text_content' && example.contentLines && (
          example.contentLines.map((line, index) => (
            <p key={index} className={index === 0 && example.contentLines.length > 1 ? "font-medium text-slate-600" : ""}>
              {line}
            </p>
          ))
        )}
      </div>
    </DialogContent>
  );
}


// Main application component
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-white shadow-md p-4 flex items-center gap-4 sticky top-0 z-50 h-[7rem]">
        <img
          src="/travelers-logo.jpg" 
          alt="Travelers Logo"
          className="w-20 h-20 object-contain rounded"
        />
        <h1 className="text-2xl font-semibold tracking-tight text-slate-800">
          Travelers Startup Fit Demo
        </h1>
      </header>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        <aside className="lg:col-span-1 bg-white rounded-xl shadow-lg p-6 flex flex-col self-start max-h-[calc(100vh-8.5rem)]">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-slate-700 border-b pb-2 mb-3 flex-shrink-0">
            <Building2 className="w-5 h-5 text-blue-600" /> Company Profile
          </h2>

          <div className="mb-4 p-3 border border-blue-200 rounded-lg bg-blue-50/70 flex-shrink-0">
            <h3 className="text-[0.8rem] font-semibold text-blue-700 mb-2.5 text-center tracking-wide">
              PROFILE INFORMATION SOURCED FROM:
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {dataSources.map((source) => (
                <Dialog key={source.id}>
                  <DialogTrigger asChild>
                    <div className="flex flex-col items-center justify-center text-center p-2.5 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow duration-150 cursor-pointer h-full">
                      <source.icon size={20} className="text-blue-600 mb-1.5" />
                      <span className="text-slate-600 leading-tight text-[0.7rem]">{source.label}</span>
                    </div>
                  </DialogTrigger>
                  <ExampleDialogContent example={source.example} />
                </Dialog>
              ))}
            </div>
            <div className="flex justify-center mt-3">
              <ChevronsDown size={24} className="text-blue-500 opacity-60" />
            </div>
          </div>
          
          <ScrollArea className="flex-grow pr-3"> 
            <ul className="space-y-3">
              {companyProfile.map((item) => (
                <li key={item.label} className="text-sm flex flex-col p-2 bg-slate-50 rounded-md hover:bg-slate-100 transition-colors">
                  <span className="font-medium text-slate-700">
                    {item.label}
                  </span>
                  <span className="text-slate-600">{item.value}</span>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </aside>

        <section className="lg:col-span-2 space-y-4">
          <div className="mb-6 p-4 border border-purple-300 rounded-xl bg-purple-50/70 shadow-md">
            <h3 className="text-lg font-semibold text-purple-700 mb-3 text-center tracking-wide">
              Ideas Informed by ADL Ventures "Theories of Change"
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {theoriesOfChange.map((theory) => (
                <Dialog key={theory.id}>
                  <DialogTrigger asChild>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow duration-150 h-full cursor-pointer">
                      <theory.icon size={28} className="text-purple-600 mb-2" />
                      <span className="text-purple-800 font-semibold text-center leading-tight text-sm mb-1">{theory.name}</span>
                      <p className="text-slate-600 text-center text-[0.75rem] leading-snug">{theory.description}</p>
                    </div>
                  </DialogTrigger>
                  <ExampleDialogContent example={theory.example} />
                </Dialog>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <ChevronsDown size={28} className="text-purple-500 opacity-75 animate-bounce" />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-slate-700 border-b pb-2 mb-3">Top 10 Startup Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ideas 
              .sort((a, b) => Object.values(b.scores).reduce((s, c) => s + c, 0) - Object.values(a.scores).reduce((s, c) => s + c, 0)) 
              .map((idea) => (
                <IdeaCard key={idea.id} idea={idea} />
              ))}
          </div>
        </section>
      </main>

      <footer className="p-4 text-center text-xs text-slate-500 border-t mt-auto">
        Demo data & UI for internal concept visualization only. © 2024
      </footer>
    </div>
  );
}