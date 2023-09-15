import civiconnect from '../assets/civiconnect.jpeg';
import ontario from '../assets/ontario.jpeg';
import markel from '../assets/markel.jpeg';
import cibc from '../assets/cibc.jpeg';

const experiences = [
  {
    title: "Business Systems Analyst Developer",
    company: "CIBC Capital Markets",
    date: "Sep 2023 - Dec 2023",
    tasks: [
      "Spearheading the optimization of business processes through comprehensive systems analysis and solution-driven recommendations",
    ],
    image: cibc
  },
  {
    title: "Web Developer",
    company: "Civiconnect",
    date: "Jan 2023 - Apr 2023",
    tasks: [
      "Developed 2 websites for businesses using JavaScript, React, Figma, and Webflow",
      "Implemented Strapi as a headless CMS ensuring easy accessibility to modify web components",
      "Implemented search engine optimization (SEO) resulting in 45% improvement in website discoverability"
    ],
    image: civiconnect
  },
  {
    title: "Software Developer",
    company: "Ministry of Public and Business Service Delivery",
    date: "May 2022 - Aug 2022",
    tasks: [
      "Designed and developed multiple Microsoft Power Apps to automate business processes",
      "Cleaned and migrated data Oracle pipelines using C#, SQL and ASP.net"
    ],
    image: ontario
  },
  {
    title: "Financial analyst",
    company: "Markel Canada",
    date: "May 2021 - Sep 2021",
    tasks: [
      "Improved the efficiency of workload in the underwriting process and made it faster by 20%",
      "Prepared financial raters, issued, declined and renewed 500+ accounts"
    ],
    image: markel
  }
];

export default experiences;
