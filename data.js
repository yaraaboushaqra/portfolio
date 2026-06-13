// ============================================================
//  SITE CONTENT — edit everything here, no code knowledge needed
//  Images: use a URL (https://...) or a local path (assets/cover.jpg)
// ============================================================

const SITE = {

  // --- Identity ---
  name:     "Your Name",
  title:    "Creative Director",
  tagline:  "Creative Direction\nfor the bold.",
  subtagline: "Brand campaigns & visual identities that shape culture.",

  // --- Navigation ---
  nav: {
    links: [
      { label: "Work",    href: "#projects" },
      { label: "Clients", href: "#clients"  },
      { label: "About",   href: "#about"    },
    ],
    cta: { label: "Let's talk", href: "mailto:hello@yourname.com" }
  },

  // --- Clients marquee ---
  clients: [
    { name: "Nike"     },
    { name: "Dior"     },
    { name: "Apple"    },
    { name: "Gucci"    },
    { name: "LVMH"     },
    { name: "Adobe"    },
    { name: "Loewe"    },
    { name: "Spotify"  },
    { name: "Hermès"   },
    { name: "Bottega"  },
  ],

  // --- Project categories (first entry = "show all") ---
  categories: ["All", "Campaigns", "Branding & Visual Identity"],

  // --- Projects ---
  // cover     : main thumbnail shown in the grid
  // images    : array of images shown inside the project detail
  // tags      : short labels displayed as pills
  // services  : what was delivered (shown in detail view)
  projects: [
    {
      id:          "summer-solstice",
      title:       "Summer Solstice",
      client:      "Lux Fashion House",
      year:        "2024",
      category:    "Campaigns",
      tags:        ["Fashion", "Editorial", "Digital"],
      role:        "Creative Director",
      cover:       "https://picsum.photos/seed/fs1/1400/960",
      images: [
        "https://picsum.photos/seed/fs1a/1400/900",
        "https://picsum.photos/seed/fs1b/900/1200",
        "https://picsum.photos/seed/fs1c/1400/900",
      ],
      description: "A sun-drenched campaign celebrating the intersection of luxury and freedom. Shot across three continents, the visual narrative captures the essence of unbounded movement — slow, deliberate, and unforgettable.",
      services:    ["Art Direction", "Campaign Strategy", "Visual Storytelling"],
    },
    {
      id:          "nouveau-studio",
      title:       "Nouveau Studio",
      client:      "Architecture Firm",
      year:        "2024",
      category:    "Branding & Visual Identity",
      tags:        ["Architecture", "Print", "Identity System"],
      role:        "Creative Director",
      cover:       "https://picsum.photos/seed/ns1/1400/960",
      images: [
        "https://picsum.photos/seed/ns1a/1400/900",
        "https://picsum.photos/seed/ns1b/1400/600",
      ],
      description: "A visual identity built on the tension between precision and fluidity — mirroring the firm's architectural philosophy. The mark adapts across spaces without losing its authority.",
      services:    ["Brand Identity", "Typography", "Brand System"],
    },
    {
      id:          "beyond-borders",
      title:       "Beyond Borders",
      client:      "Global Tech Co.",
      year:        "2023",
      category:    "Campaigns",
      tags:        ["Tech", "Global", "OOH", "Digital"],
      role:        "Creative Director",
      cover:       "https://picsum.photos/seed/bb1/1400/960",
      images: [
        "https://picsum.photos/seed/bb1a/1400/900",
        "https://picsum.photos/seed/bb1b/1400/900",
      ],
      description: "A 360° global campaign spanning 12 markets, telling a singular story through local voices. The visual language was designed to be universal yet deeply personal.",
      services:    ["Campaign Strategy", "Creative Direction", "Art Direction"],
    },
    {
      id:          "kura",
      title:       "Kura",
      client:      "Sustainable Skincare",
      year:        "2023",
      category:    "Branding & Visual Identity",
      tags:        ["Beauty", "Packaging", "Identity"],
      role:        "Creative Director",
      cover:       "https://picsum.photos/seed/kr1/1400/960",
      images: [
        "https://picsum.photos/seed/kr1a/1400/900",
        "https://picsum.photos/seed/kr1b/900/1200",
      ],
      description: "Brand identity for a skincare label rooted in Japanese botanical traditions. The system draws from the concept of ma — negative space as a form of presence.",
      services:    ["Brand Identity", "Packaging Design", "Art Direction"],
    },
    {
      id:          "reclaim",
      title:       "Reclaim",
      client:      "Lifestyle Brand",
      year:        "2023",
      category:    "Campaigns",
      tags:        ["Lifestyle", "OOH", "Film"],
      role:        "Creative Director",
      cover:       "https://picsum.photos/seed/rc1/1400/960",
      images: [
        "https://picsum.photos/seed/rc1a/1400/900",
        "https://picsum.photos/seed/rc1b/1400/900",
      ],
      description: "A defiant campaign for a generation reclaiming their own narrative. Raw, intentional, and unmistakably human — anchored by a 90-second hero film and city-wide activations.",
      services:    ["Campaign Strategy", "Film Direction", "OOH"],
    },
    {
      id:          "the-1970",
      title:       "The 1970",
      client:      "Hospitality Group",
      year:        "2022",
      category:    "Branding & Visual Identity",
      tags:        ["Hospitality", "Rebrand", "Identity"],
      role:        "Creative Director",
      cover:       "https://picsum.photos/seed/h70/1400/960",
      images: [
        "https://picsum.photos/seed/h70a/1400/900",
        "https://picsum.photos/seed/h70b/1400/600",
      ],
      description: "A full rebrand honoring a legendary hotel group's heritage while asserting a bold new chapter. The identity lives across architecture, interiors, and digital touchpoints without contradiction.",
      services:    ["Brand Strategy", "Visual Identity", "Brand System"],
    },
  ],

  // --- About ---
  about: {
    headline:     "Vision-led creative direction\nfor brands built to be felt.",
    statement:    "I partner with brands to build creative that doesn't just communicate — it resonates. Grounded in strategy and executed with a distinct visual language, my work sits at the intersection of culture, craft, and commercial clarity.",
    philosophy:   "The best creative direction is invisible. It doesn't announce itself — it draws you in, holds you, and leaves something behind.",
    // Leave image as empty string "" to hide the photo block
    image:        "https://picsum.photos/seed/portrait99/800/1000",
    availability: "Currently available for select projects.",
    services: [
      {
        title: "Creative Direction",
        desc:  "End-to-end creative leadership for campaigns, collections, and brand moments.",
      },
      {
        title: "Brand Identity",
        desc:  "Visual systems that carry meaning — from the mark to the full brand expression.",
      },
      {
        title: "Art Direction",
        desc:  "Photo, film, and editorial direction that builds a coherent visual world.",
      },
      {
        title: "Campaign Strategy",
        desc:  "Conceptual frameworks that give campaigns a clear, singular idea at their core.",
      },
    ],
  },

  // --- Contact / Footer ---
  contact: {
    headline:  "Let's build something\nworth remembering.",
    email:     "hello@yourname.com",
    instagram: "@yourhandle",
    linkedin:  "yourprofile",
  },

}
