import fashionImage from "../assets/fashion-designing-image.jpg";
import podcastingImage from "../assets/podcasting-image.jpg";
import ghostWritingImage from "../assets/ghost-writing-image.jpg";
import graphicImage from "../assets/graphic-design-image.jpg";
import type { Program } from "../ProgramData";

import {
  Smartphone,
  Users,
  Scissors,
  Mic,
  PenTool,
  Palette,
} from "lucide-react";

export const creativeData: Program[] = [
  {
    id: "fashion-design",
    cover: fashionImage,
    title: "Fashion Designing",
    description:
      "Learn fashion design from concept to creation, including sketching, fabric selection, and garment construction.",
    icon: Scissors,
    duration: "10 Weeks",
    skillLevel: "Beginner",
    mode: "Physical",
    targetAudience: ["Aspiring fashion designers", "Creative individuals"],
    prerequisites: ["Creativity and interest in fashion"],
    learningOutcomes: [
      {
        icon: Palette,
        title: "Design & Illustration",
        description: "Create fashion sketches and mood boards",
      },
      {
        icon: Scissors,
        title: "Garment Construction",
        description: "Cut, sew, and finish garments professionally",
      },
    ],
    programStructure: [
      {
        weeks: "Week 1-5",
        title: "Design Basics",
        topics: [
          "Fashion illustration",
          "Textiles and fabrics",
          "Pattern drafting",
        ],
      },
      {
        weeks: "Week 6-10",
        title: "Garment Creation",
        topics: [
          "Sewing techniques",
          "Fittings and alterations",
          "Final fashion piece",
        ],
      },
    ],
    projects: [
      {
        title: "Custom Outfit Design",
        skillFocus: "Sketching, Sewing",
        outcome: "Completed wearable garment",
      },
    ],
    certificateDescription:
      "Certificate recognizing foundational fashion design skills.",
    careerApplications: [
      "Fashion designer assistant",
      "Tailoring business",
      "Clothing brand startup",
    ],
  },

  {
    id: "podcasting",
    cover: podcastingImage,
    title: "Podcasting",
    description:
      "Learn how to plan, record, edit, and publish professional podcasts that engage audiences.",
    icon: Mic,
    duration: "6 Weeks",
    skillLevel: "Beginner",
    mode: "Online",
    targetAudience: [
      "Content creators",
      "Media enthusiasts",
      "Brand storytellers",
    ],
    prerequisites: ["Basic communication skills"],
    learningOutcomes: [
      {
        icon: Mic,
        title: "Audio Production",
        description: "Record and edit high-quality audio content",
      },
    ],
    programStructure: [
      {
        weeks: "Week 1-3",
        title: "Podcast Foundations",
        topics: ["Podcast formats", "Equipment setup", "Recording techniques"],
      },
      {
        weeks: "Week 4-6",
        title: "Publishing & Growth",
        topics: [
          "Editing and sound design",
          "Distribution platforms",
          "Audience growth strategies",
        ],
      },
    ],
    projects: [
      {
        title: "Podcast Episode",
        skillFocus: "Recording, Editing",
        outcome: "Published podcast episode",
      },
    ],
    certificateDescription:
      "Certificate validating your podcast production skills.",
    careerApplications: [
      "Podcast host",
      "Audio content creator",
      "Media production roles",
    ],
  },

  {
    id: "ghostwriting",
    cover: ghostWritingImage,
    title: "Ghostwriting",
    description:
      "Learn how to write compelling content for clients while maintaining their voice and brand. This program covers blogs, articles, books, and professional client communication.",
    icon: PenTool,
    duration: "8 Weeks",
    skillLevel: "Beginner to Intermediate",
    mode: "Online",
    targetAudience: [
      "Aspiring writers",
      "Freelancers and content creators",
      "Professionals looking to monetize writing skills",
    ],
    prerequisites: [
      "Basic writing ability",
      "Strong interest in storytelling and research",
    ],
    learningOutcomes: [
      {
        icon: PenTool,
        title: "Client-Focused Writing",
        description:
          "Adapt writing style to match different client voices and goals",
      },
      {
        icon: Users,
        title: "Professional Collaboration",
        description:
          "Work with clients ethically, confidentially, and efficiently",
      },
    ],
    programStructure: [
      {
        weeks: "Week 1-3",
        title: "Writing Foundations",
        topics: [
          "Understanding ghostwriting",
          "Voice matching techniques",
          "Research and outlining",
        ],
      },
      {
        weeks: "Week 4-6",
        title: "Content Types",
        topics: [
          "Blog and article writing",
          "eBooks and memoirs",
          "Editing and revision techniques",
        ],
      },
      {
        weeks: "Week 7-8",
        title: "Freelancing & Ethics",
        topics: [
          "Client communication",
          "Contracts and NDAs",
          "Building a writing portfolio",
        ],
      },
    ],
    projects: [
      {
        title: "Client-Style Writing Project",
        skillFocus: "Voice Adaptation, Research",
        outcome: "Ghostwritten article matching a client persona",
      },
    ],
    certificateDescription:
      "Certificate recognizing professional ghostwriting and client communication skills.",
    careerApplications: [
      "Freelance ghostwriter",
      "Content strategist",
      "Editorial assistant",
    ],
  },

  {
    id: "graphic-design",
    cover: graphicImage,
    title: "Graphics Design",
    description:
      "Learn to create visually compelling designs for branding, marketing, and digital products using industry-standard tools.",
    icon: Palette,
    duration: "10 Weeks",
    skillLevel: "Beginner to Intermediate",
    mode: "Online / Hybrid",
    targetAudience: [
      "Aspiring designers",
      "Content creators",
      "Marketing professionals",
    ],
    prerequisites: ["Basic computer skills", "Creative interest"],
    learningOutcomes: [
      {
        icon: Palette,
        title: "Visual Design",
        description: "Apply design principles to create appealing visuals",
      },
      {
        icon: Smartphone,
        title: "Digital Tools",
        description: "Use Photoshop, Illustrator, and Figma effectively",
      },
    ],
    programStructure: [
      {
        weeks: "Week 1-4",
        title: "Design Foundations",
        topics: ["Color theory", "Typography", "Layout and composition"],
      },
      {
        weeks: "Week 5-7",
        title: "Design Tools",
        topics: [
          "Photoshop essentials",
          "Illustrator vector graphics",
          "Figma for UI design",
        ],
      },
      {
        weeks: "Week 8-10",
        title: "Branding & Portfolio",
        topics: [
          "Logo and brand identity",
          "Marketing creatives",
          "Portfolio development",
        ],
      },
    ],
    projects: [
      {
        title: "Brand Identity Project",
        skillFocus: "Branding, Visual Design",
        outcome: "Complete brand kit and design portfolio",
      },
    ],
    certificateDescription:
      "Certificate validating professional graphic design skills.",
    careerApplications: [
      "Graphic designer",
      "UI/UX designer",
      "Brand and marketing designer",
    ],
  },
];
