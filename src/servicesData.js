// MLP
import MLP1 from "./assets/MLP/MLP1.jpg";
import MLP2 from "./assets/MLP/MLP2.jpg";
import MLP3 from "./assets/MLP/MLP3.jpg";
import MLP4 from "./assets/MLP/MLP4.jpg";
import MLP5 from "./assets/MLP/MLP5.jpeg";
import MLP6 from "./assets/MLP/MLP6.webp";
import MLP7 from "./assets/MLP/MLP7.jpg";
import MLP8 from "./assets/MLP/MLP8.jpg";
import Cement from "./assets/MLP/Cement.webp";
import Steel from "./assets/MLP/Steel.jpeg";
import Copper from "./assets/MLP/Copper.png";
import Bricks from "./assets/MLP/Bricks.jpg";
import POP from "./assets/MLP/POP.jpg";
import Wires from "./assets/MLP/Wires.png";
import Materials from "./assets/MLP/Materials.jpeg";

// CS
import CS1 from "./assets/CS/CS1.jpg";
import CS2 from "./assets/CS/CS2.jpg";
import CS3 from "./assets/CS/CS3.jpg";
import CS4 from "./assets/CS/CS4.webp";
import CS5 from "./assets/CS/CS5.jpg";
import CS6 from "./assets/CS/CS6.jpg";
import CS7 from "./assets/CS/CS7.jpg";
import CS8 from "./assets/CS/CS8.jpg";

// FS
import FS1 from "./assets/FS/FS1.jpeg";
import FS2 from "./assets/FS/FS2.png";
import FS3 from "./assets/FS/FS3.jpg";
import FS4 from "./assets/FS/FS4.jpg";
import FS5 from "./assets/FS/FS5.jpg";
import FS6 from "./assets/FS/FS6.jpg";
import FS7 from "./assets/FS/FS7.jpeg";

// AMC
import AMC1 from "./assets/AMC/AMC1.jpeg";
import AMC2 from "./assets/AMC/AMC2.jpg";
import AMC3 from "./assets/AMC/AMC3.webp";
import AMC4 from "./assets/AMC/AMC4.jpeg";
import AMC5 from "./assets/AMC/AMC5.jpg";
import AMC6 from "./assets/AMC/AMC6.jpg";
import AMC7 from "./assets/AMC/AMC7.jpeg";
import AMC8 from "./assets/AMC/AMC8.jpg";

const services = [
  {
    id: "Material-&-Labor-Procurement",
    image: MLP1,
    name: "Material & Labor Procurement.",
    desc: "We have established partnerships with reliable suppliers to ensure timely and cost-effective procurement of materials and skilled labor for construction projects.",
    info1:
      "BS Construction offers comprehensive material and labor procurement services, ensuring seamless access to high-quality resources for construction projects of any scale. Our extensive network of trusted suppliers enables us to source construction materials such as cement, steel, bricks, and other essential components at competitive prices. ",
    info2:
      "Additionally, we facilitate the hiring of skilled labor, including carpenters, masons, electricians, plumbers, and other professionals, to meet project requirements efficiently. With a focus on reliability, cost-effectiveness, and timely delivery, we streamline the procurement process to support the smooth execution of construction projects.",
    subServices: [
      {
        name: "Labours",
        services: [
          {
            image: MLP8,
            name: "Civil Workers",
          },
          {
            image: MLP2,
            name: "Plumbing Workers",
          },
          {
            image: MLP3,
            name: "Electric  Workers",
          },
          {
            image: MLP4,
            name: "Daily Labours",
          },
          {
            image: MLP5,
            name: "Forklift Drivers",
          },
          {
            image: MLP6,
            name: "Dipper Drivers",
          },
        ],
        lookingFor: { name: "Looking for Any Other Labour.", image: MLP7 },
      },
      {
        name: "Materials",
        services: [
          {
            image: Cement,
            name: "Cement",
          },
          {
            image: Steel,
            name: "Steel",
          },
          {
            image: Bricks,
            name: "Bricks",
          },
          {
            image: POP,
            name: "POP",
          },
          {
            image: Copper,
            name: "Copper",
          },
          {
            image: Wires,
            name: "Wires",
          },
        ],
        lookingFor: {
          name: "Looking for Any Other Material.",
          image: Materials,
        },
      },
    ],
  },
  {
    id: "Construction-Services",
    image: CS1,
    name: "Construction Services.",
    desc: "At BS Construction, we specialize in delivering turnkey construction solutions for a diverse range of projects, including corporate buildings, villas, apartments, commercial complexes, and infrastructure developments. ",
    info1:
      "From project planning and design to execution and completion, we offer turnkey construction solutions for corporate buildings, residential complexes, commercial developments, and infrastructure projects. With a focus on innovation, efficiency, and sustainability, we deliver superior results that exceed expectations and inspire communities.",
    info2:
      "From conceptualization and design to construction and finishing, we adhere to the highest standards of craftsmanship, quality, and safety. Whether it’s new construction, renovation, or remodeling, we leverage modern construction techniques, innovative technologies, and sustainable practices to deliver superior results that exceed client expectations.",
    subServices: [
      {
        name: "Construction Services",
        services: [
          {
            image: CS2,
            name: "Demolition Works.",
          },
          {
            image: CS3,
            name: "Boundary Compounds.",
          },
          {
            image: CS4,
            name: "Fabrication Works.",
          },
          {
            image: CS5,
            name: "Site Leaveling.",
          },
          {
            image: CS6,
            name: "Earth Works.",
          },
          {
            image: CS7,
            name: "Revamping Projects.",
          },
        ],
        lookingFor: {
          name: "Looking for Any Other Construction Services .",
          image: CS8,
        },
      },
    ],
  },
  {
    id: "Financing-Solutions",
    image: FS1,
    name: "Financing Solutions.",
    desc: "Recognizing the financial complexities associated with construction projects, BS Construction offers flexible financing solutions tailored to meet the diverse needs of our clients. ",
    info1:
      "We understand that securing adequate funding is crucial for project success, and we strive to simplify the financing process while minimizing risks and maximizing returns. Our dedicated financial experts work closely with clients to assess their financial requirements, explore available options, and develop customized financing.",
    info2:
      "packages that align with their objectives and budgetary constraints. Whether it’s arranging construction loans, facilitating mortgage financing, or providing financial advisory services, we are committed to helping clients navigate the complexities of project funding with confidence and peace of mind.",
    subServices: [
      {
        name: "Finance Services",
        services: [
          {
            image: FS2,
            name: "Loan Management.",
          },
          {
            image: FS3,
            name: "Bank Tie-Ups.",
          },
          {
            image: FS4,
            name: "Private Loans.",
          },
          {
            image: FS5,
            name: "Property Documentation.",
          },
          {
            image: FS6,
            name: "Asset Management.",
          },
        ],
        lookingFor: {
          name: "Looking for Any Other Finance Solutions.",
          image: FS7,
        },
      },
    ],
  },
  {
    id: "annual-maintenance-contract",
    image: AMC1,
    name: "Annual Maintenance Contract.",
    desc: "Ensure the longevity and optimal performance of your assets with BS Construction’s comprehensive Annual Maintenance Contract (AMC) services. Our AMC offerings are designed to provide you with peace of mind, convenience, and cost-effectiveness, allowing you to focus on your core business while we take care of the maintenance and upkeep of your facilities.",
    infos: [
      {
        headline: "Enhanced Reliability:",
        info: "Regular maintenance ensures that your assets operate reliably and efficiently, minimizing the risk of unexpected failures and downtime.",
      },
      {
        headline: "Improved Safety:",
        info: "Proper maintenance helps identify and address safety hazards, ensuring a safe and secure environment for occupants and visitors.",
      },
      {
        headline: "Extended Lifespan:",
        info: "By addressing wear and tear and performing preventive maintenance tasks, we help extend the lifespan of your assets, maximizing their return on investment.",
      },
      {
        headline: "Simplified Management:",
        info: "With our AMC services, you can enjoy the convenience of having a single point of contact for all your maintenance needs, streamlining management and oversight.",
      },
      {
        headline: "Peace of Mind:",
        info: "With BS Construction’s AMC services, you can have peace of mind knowing that your facilities are in good hands, allowing you to focus on your core business priorities without worrying about maintenance issues.",
      },
    ],
    subServices: [
      {
        name: "AMC Services",
        services: [
          {
            image: AMC2,
            name: "Scheduled Inspections.",
          },
          {
            image: AMC3,
            name: "Preventive Maintenance.",
          },
          {
            image: AMC4,
            name: "Emergency Response.",
          },
          {
            image: AMC5,
            name: "Comprehensive Coverage.",
          },
          {
            image: AMC6,
            name: "Tailored Solutions.",
          },
          {
            image: AMC7,
            name: "Transparent Reporting.",
          },
        ],
        lookingFor: {
          name: "Looking for Any Other AMC Services.",
          image: AMC8,
        },
      },
    ],
  },
];

export default services;
