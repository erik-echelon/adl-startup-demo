import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
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
  ChevronsUp,
  ShieldAlert,
  Cpu,
  HardHat,
  Recycle,
  Brain,
  FileLock2,
  MessageSquareQuote,
  ChevronDownSquare,
  ChevronRightSquare 
} from "lucide-react"; 

// Placeholder PDF URL - Update if you have a specific new PDF for each idea or a general one
const PLACEHOLDER_PDF_URL = "/documents/travelers_startup_analysis_q2_2025.pdf"; 

/**
 * Company Profile data - using the extensive list from your provided App.jsx.
 * This data is static and appears to be sourced from your documents.
 */
const companyProfile = [
  {
    id: "cp1",
    label: "Industry Leadership (Construction & Property)",
    value: "Travelers is one of the largest U.S. property-casualty insurers with deep domain expertise in construction and property. [cite: 3, 9, 299]",
    supportingInfo: "Travelers has a dedicated Construction insurance division, often led by a President of Construction, and specialized risk engineers. [cite: 10] This deep expertise allows Travelers to understand unique risks faced by contractors and cities. [cite: 11, 299]"
  },
  {
    id: "cp2",
    label: "Risk Control & Loss Prevention",
    value: "Employs over 700 Risk Control consultants providing specialized expertise in construction safety, fire protection, and equipment breakdown. [cite: 316, 48, 320, 53]",
    supportingInfo: "These consultants conduct approximately 120,000 on-site and virtual consultations annually, helping clients identify and mitigate job-site hazards. [cite: 12, 320, 83] They leverage tools like ZoneCheck℠ to map risks. [cite: 13]"
  },
  {
    id: "cp3",
    label: "Extensive Claims Data & Analytics",
    value: "Possesses extensive historical data on claims and losses, with a proprietary risk assessment database containing over 200 million data points. [cite: 15, 325, 48]",
    supportingInfo: "Travelers utilizes advanced data analytics, like its Early Severity Predictor® model, which helped cut opioid use among injured construction workers by 40%. [cite: 17] This data is invaluable for startups developing predictive analytics. [cite: 16, 18]"
  },
  {
    id: "cp4",
    label: "Dedicated Construction Division",
    value: "Travelers has a specialized Construction Division offering tailored insurance programs (INDUSTRYEdge®) for various contractor types. [cite: 311, 51, 10]",
    supportingInfo: "This division caters to General Contractors, Highway/Street/Road Contractors, Utility Contractors, and numerous specialty trades (e.g., Concrete, Electrical, Excavation, Plumbing), providing core coverages like General Liability and Workers Compensation. [cite: 311, 51, 52, 54]"
  },
  {
    id: "cp5",
    label: "Real Estate Division Expertise",
    value: "Provides specialized insurance solutions (INDUSTRYEdge® for Real Estate) for commercial property owners, managers, agents, and REITs. [cite: 311, 56]",
    supportingInfo: "Key products include Commercial Property, General Liability, and specialized coverages for large, complex risks across retail, hotels, apartments, and industrial parks. [cite: 311, 57, 59]"
  },
  {
    id: "cp6",
    label: "Inland Marine Leadership",
    value: "A leading insurer for contractors' equipment, offering crucial coverage for property that is mobile, in transit, or under construction. [cite: 312, 69]",
    supportingInfo: "Key offerings include Builders' Risk (Construction Pak®), Installation Floaters, and coverage for fixed infrastructure like bridges and towers. [cite: 313, 66, 68, 65]"
  },
  {
    id: "cp7",
    label: "Boiler & Machinery (Equipment Breakdown)",
    value: "Over 100 years of experience providing coverage and inspection services for critical building and industrial equipment. [cite: 313, 55, 71]",
    supportingInfo: "This includes expertise in boilers, pressure vessels, HVAC systems, and electrical equipment, vital for property operations and complex construction. They also offer reinsurance via Travelers BoilerRe. [cite: 313, 55, 71, 447]"
  },
  {
    id: "cp8",
    label: "Surety Bonds Expertise",
    value: "Travelers is a leading surety provider in the U.S., offering Contract Surety Bonds (Bid, Performance, Payment) vital for construction projects. [cite: 315, 51, 78]",
    supportingInfo: "They also provide Commercial Surety Bonds (License & Permit, Court, Public Official) and have experience bonding major infrastructure projects. [cite: 315, 51, 78]"
  },
  {
    id: "cp9",
    label: "Specialized Claims Management",
    value: "Maintains specialized claim units for construction defects, property, and equipment breakdown, employing over 200 dedicated construction defect claim professionals. [cite: 316, 48, 82, 321]",
    supportingInfo: "They leverage data analytics, forensic specialists, and dedicated nurses (TravCARE®, ConciergeCLAIM®) for efficient and empathetic claims handling. [cite: 316, 48]"
  },
  {
    id: "cp10",
    label: "Innovation Focus & Culture",
    value: "Travelers has deliberately cultivated an innovation-friendly culture, treating innovation as a \"business discipline\" led by a Chief Innovation Officer. [cite: 55, 56, 184]",
    supportingInfo: "This includes an Enterprise Innovation team, an Innovation Evangelist Network, and processes like 'Innovation Jams.' [cite: 330, 108] The leadership promotes an \"ambitious innovation agenda\" and a mindset of \"innovating with velocity.\" [cite: 57, 59]"
  },
  {
    id: "cp11",
    label: "Startup Engagement & Partnerships",
    value: "Actively engages with technology startups through partnerships (e.g., Procore, HOVER), investments, and accelerator programs (e.g., Plug and Play, Hartford InsurTech Hub). [cite: 3, 331, 105, 106, 69]",
    supportingInfo: "Travelers has made over 20 known investments in emerging companies and has a history of successful pilots, like with Triax Technologies for wearable safety devices. [cite: 74, 123, 41]"
  },
  {
    id: "cp12",
    label: "Travelers Innovation Network for Construction",
    value: "Launched an online platform curating technology solutions for construction customers, effectively an insurtech marketplace. [cite: 49, 50, 144]",
    supportingInfo: "This platform features vetted startup solutions for water loss detection, ergonomics, site monitoring, and equipment management, with eligible insureds receiving discounts. [cite: 51, 52, 145, 147] Travelers won Plug and Play's InsurTech Corporate Innovation Award for this initiative. [cite: 70, 150]"
  },
  {
    id: "cp13",
    label: "Financial Strength for Investment & Acquisition",
    value: "A Fortune 100 company with the financial muscle to support startups through venture investments, partnerships, and acquisitions. [cite: 73, 187, 328]",
    supportingInfo: "Examples include co-leading a $60M Series D for HOVER [cite: 75, 155] and acquiring Corvus Insurance (a cyber MGU) for $435 million. [cite: 79, 123] This signals that a successful partnership could evolve into an acquisition. [cite: 81]"
  },
  {
    id: "cp14",
    label: "Customer Network & Distribution Channels",
    value: "Possesses an extensive customer network of construction firms, contractors, real estate companies, and public sector clients. [cite: 38, 39, 324]",
    supportingInfo: "This network, along with over 15,000 independent agents and brokers, provides a ready-made market and distribution channel for startup solutions. [cite: 40, 45, 324] Travelers can act as a bridge connecting startups to industry players. [cite: 44]"
  },
  {
    id: "cp15",
    label: "Smart City Risk Insight",
    value: "Travelers insures municipalities and actively educates public entities on smart city technology risks like IoT failures and cyberattacks. [cite: 19, 20, 34]",
    supportingInfo: "For example, Travelers recognizes that embedding sensors in water systems can help detect leaks, aligning startup solutions with city operational improvements and loss reduction. [cite: 22] This expertise can guide smart city startups in addressing real liability concerns. [cite: 21]"
  },
  {
    id: "cp16",
    label: "Internal Innovation Ecosystem",
    value: "Operates internal capabilities like cross-functional agile teams, Claim University (R&D center), and a Digital Forensics Laboratory. [cite: 62, 63, 326]",
    supportingInfo: "These resources allow Travelers to test and refine startup technologies in-house. For instance, a drone inspection startup could leverage Claim University for simulated property damage scenarios. [cite: 64, 65]"
  },
  {
    id: "cp17",
    label: "Alignment with Strategic Priorities",
    value: "Startup collaborations directly support Travelers' key strategic priorities: extending risk expertise, enhancing customer experiences, and optimizing efficiency. [cite: 90, 300, 337]",
    supportingInfo: "Examples include Triax (wearables) for risk expertise, Procore (management software) for customer experience and efficiency, and HOVER (3D imaging) for claims efficiency and customer experience. [cite: 123, 124, 125, 126]"
  }
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
      icon: MessageSquare, 
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
      icon: Users, 
      label: "External Interviews",
      example: {
        title: "External Expert Validation",
        icon: Users, 
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
        icon: FileLock2, 
        type: "text_content",
        contentLines: [
          "Representational Excerpt from a Simulated Internal Strategy Document:",
          "Objective 3.1: Expand offerings in preventative risk solutions for commercial clients, focusing on technology-driven value propositions.",
          "Key Action: Explore partnerships and M&A opportunities in the ConTech/InsurTech space to accelerate this objective within the next 18-24 months."
        ],
      }
    },
  ];

  
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
    explanation: "Water claims are Travelers' #1 property loss driver. Pair IoT flow/acoustic sensors with Travelers' loss data and National Account distribution to cut both frequency and severity, while offering premium credits through the Innovation Network.",
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
    explanation: "Travelers owns one of the largest latent-defect claims datasets and is a top surety writer. Feeding that data into the startup's models lets Travelers price Builders-Risk and performance bonds with unmatched accuracy and reduce long-tail GL losses.",
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
    explanation: "Musculoskeletal injuries dominate comp costs. Travelers' Early Severity Predictor plus IMU sensor data enables a  dynamic  experience-mod and real-time incentives—something no competing carrier can match.",
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
    explanation: "Merges Travelers' century-long boiler-machinery inspection know-how with live vibration/current data, turning the insurer from indemnifier to preventive partner while enriching underwriting variables.",
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
    explanation: "Couples telematics with Travelers' equipment-breakdown curves to avert costly failures and schedule overruns—protecting both Contractors' Equipment and Surety books.",
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
    explanation: "Integrates Travelers' CAT modeling lab with now-cast weather APIs. Push notifications secure job sites hours before convective storms, trimming large-loss severity and LAE.",
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
    explanation: "Combines Travelers' CyberRisk underwriting with boiler-machinery engineers to protect building-control networks—a risk few cyber MGAs understand. Creates a differentiated \"Smart-Building Shield\" bundle.",
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
 * Component to render the content of the example pop-up dialog for Data Sources and Theories of Change.
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
  const [expandedProfileItemId, setExpandedProfileItemId] = useState(null);
  const [isDataSourcesExpanded, setIsDataSourcesExpanded] = useState(false);
  const [isTheoriesExpanded, setIsTheoriesExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header Section */}
      <header className="bg-white shadow-md p-4 flex items-center gap-4 sticky top-0 z-50 h-[7rem]">
        {/* Logo - Ensure you have this image in your public folder or update the path */}
        <img
          src="/travelers-logo.jpg" 
          alt="Travelers Logo"
          className="w-20 h-20 object-contain rounded"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/E2E8F0/475569?text=Logo"; }} // Fallback placeholder
        />
        <h1 className="text-2xl font-semibold tracking-tight text-slate-800">
          Travelers Startup Fit Demo
        </h1>
      </header>

      {/* Main Content Grid */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Aside Section: Company Profile */}
        <aside className="lg:col-span-1 bg-white rounded-xl shadow-lg p-6 flex flex-col max-h-[calc(100vh-8.5rem)]">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-slate-700 border-b pb-2 mb-3 flex-shrink-0">
            <Building2 className="w-5 h-5 text-blue-600" /> Company Profile
          </h2>

          {/* Data Sources Info Box with Dropdown */}
          <div className="mb-4 p-3 border border-blue-200 rounded-lg bg-blue-50/70 flex-shrink-0">
            <h3 className="text-[0.8rem] font-semibold text-blue-700 tracking-wide mb-3">
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

            {/* Dropdown Arrow at Bottom */}
            <div 
              className="flex items-center justify-center mt-3 cursor-pointer"
              onClick={() => setIsDataSourcesExpanded(!isDataSourcesExpanded)}
            >
              {isDataSourcesExpanded ? (
                <ChevronsUp size={20} className="text-blue-600" />
              ) : (
                <ChevronsDown size={20} className="text-blue-600" />
              )}
            </div>
            
            {/* Expandable Content Below */}
            {isDataSourcesExpanded && (
              <div className="mt-3 space-y-3">
                <div className="text-xs text-slate-700 bg-white p-3 rounded-md border">
                  <p className="font-medium text-blue-800 mb-2">About Our Data Sources:</p>
                  <p className="mb-2">
                    This company profile is built from a comprehensive analysis combining multiple research methodologies to ensure accuracy and depth:
                  </p>
                  <ul className="space-y-1 text-slate-600">
                    <li>• <strong>Deep Research:</strong> AI-powered analysis of public documents, filings, and industry reports</li>
                    <li>• <strong>Internal Interviews:</strong> Insights from Travelers executives and subject matter experts</li>
                    <li>• <strong>External Interviews:</strong> Validation from industry analysts and market experts</li>
                    <li>• <strong>Strategy Documents:</strong> Internal strategic planning documents and objectives</li>
                  </ul>
                  <p className="mt-2 text-slate-500 italic">
                    Click on each source type above to see examples of the insights gathered.
                  </p>
                </div>
              </div>
            )}
          </div>
          
          {/* Scrollable Company Profile List */}
          <div className="flex-1 min-h-0 max-h-96">
            <div className="h-full overflow-y-auto pr-3">
              <ul className="space-y-2.5">
                {companyProfile.map((item) => {
                  const isExpanded = expandedProfileItemId === item.id;
                  const ExpandIcon = isExpanded ? ChevronDownSquare : ChevronRightSquare;
                  return (
                    <li 
                      key={item.id} 
                      onClick={() => setExpandedProfileItemId(isExpanded ? null : item.id)}
                      className="text-sm p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer shadow-sm"
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-semibold text-slate-700 text-[0.8rem] pr-2">
                          {item.label}
                        </span>
                        <ExpandIcon className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      </div>
                      <p className="text-slate-600 text-[0.75rem] mt-1 leading-relaxed">{item.value}</p>
                      {isExpanded && (
                        <div className="mt-2.5 pt-2.5 border-t border-slate-200">
                          <p className="text-xs text-slate-500 whitespace-pre-wrap leading-normal">{item.supportingInfo}</p>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Section: Theories of Change and Startup Ideas */}
        <section className="lg:col-span-2 space-y-4">
          {/* Theories of Change Info Box with Dropdown */}
          <div className="mb-6 p-4 border border-purple-300 rounded-xl bg-purple-50/70 shadow-md">
            <h3 className="text-lg font-semibold text-purple-700 tracking-wide mb-3">
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

            {/* Dropdown Arrow at Bottom */}
            <div 
              className="flex items-center justify-center mt-4 cursor-pointer"
              onClick={() => setIsTheoriesExpanded(!isTheoriesExpanded)}
            >
              {isTheoriesExpanded ? (
                <ChevronsUp size={24} className="text-purple-600" />
              ) : (
                <ChevronsDown size={24} className="text-purple-600" />
              )}
            </div>
            
            {/* Expandable Content Below */}
            {isTheoriesExpanded && (
              <div className="mt-4 space-y-3">
                <div className="text-sm text-slate-700 bg-white p-4 rounded-lg border border-purple-200">
                  <p className="font-medium text-purple-800 mb-3">About ADL Ventures Theories of Change:</p>
                  <p className="mb-3">
                    ADL Ventures employs a "Theories of Change" framework to identify and evaluate emerging technology trends that will fundamentally reshape industries over the next 5-10 years. These theories represent our investment thesis and strategic focus areas.
                  </p>
                  
                  <div className="space-y-2 text-slate-600">
                    <p><strong>What are Theories of Change?</strong></p>
                    <p className="text-sm">
                      Theories of Change are macro-level hypotheses about technological, societal, and economic shifts that create new market opportunities. They help us identify startups that are positioned to benefit from or drive these fundamental changes.
                    </p>
                    
                    <p className="pt-2"><strong>How do they inform startup selection?</strong></p>
                    <p className="text-sm">
                      Each startup idea in our analysis is evaluated against these theories to ensure alignment with long-term market trends. Startups that address multiple theories or represent critical solutions within a theory receive higher strategic value scores.
                    </p>
                    
                    <p className="pt-2"><strong>Why this matters for Travelers:</strong></p>
                    <p className="text-sm">
                      By aligning with these theories, Travelers can partner with startups that aren't just solving today's problems, but are building solutions for tomorrow's market realities. This positions Travelers at the forefront of industry transformation rather than reacting to change.
                    </p>
                  </div>
                  
                  <p className="mt-3 text-slate-500 italic text-sm">
                    Click on each theory above to see supporting market analysis and trend data.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Startup Ideas List */}
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

      {/* Footer Section */}
      <footer className="p-4 text-center text-xs text-slate-500 border-t mt-auto">
        Demo data & UI for internal concept visualization only. © 2025
      </footer>
    </div>
  );
}