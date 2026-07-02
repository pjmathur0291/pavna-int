export const CONTENT = {
  schoolName: "Pavna International School",
  motto: "BeYourself",
  navLinks: [
    {
      name: "About",
      href: "#",
      hasDropdown: true,
      image: "src/assets/images/Home/dsc05926.webp",
      groups: [
        {
          title: "About",
          items: [
            { name: "About PIS", href: "#about-overview" },
            { name: "Academic Team", href: "#academic-team" },
          ],
        },
        {
          title: "Leadership Team",
          items: [
            { name: "Chairman's Message", href: "#chairmans-message" },
            { name: "Principal's Message", href: "#principals-message" },
            { name: "Minds Behind PIS", href: "#minds-behind-pis" },
          ],
        },
      ],
    },
    {
      name: "Curriculum",
      href: "#curriculum",
      hasDropdown: true,
      image: "src/assets/images/Home/DSC06249.webp",
      groups: [
        {
          title: "Academic",
          items: [
            { name: "Early Years (Age 3 To 5 Years)", href: "#early-years" },
            { name: "Primary (Age 5 To 11 Years)", href: "#primary" },
            {
              name: "Lower Secondary (Age 11 to 14 Years)",
              href: "#lower-secondary",
            },
            {
              name: "Upper Secondary - IGCSE (Age 14 To 16 Years)",
              href: "#upper-secondary",
            },
            {
              name: "Advance - AS & A Level (Age 16 To 18 Years)",
              href: "#advance-as-a-level",
            },
          ],
        },
      ],
    },
    { name: "Campus Life", href: "#campus-life", hasDropdown: false },
    { name: "Boarding", href: "#boarding", hasDropdown: false },
    { name: "Admissions", href: "#admissions", hasDropdown: false },
    // {
    //   name: "News & Media",
    //   href: "#",
    //   hasDropdown: true,
    //   image: "src/assets/images/Home/DSC09241.webp",
    //   groups: [
    //     {
    //       title: "Publications",
    //       items: [
    //         { name: "Blog", href: "#blog" },
    //         { name: "Newsletter Archive", href: "#newsletter-archive" },
    //       ],
    //     },
    //   ],
    // },
    {
      name: "Contact Us",
      href: "#",
      hasDropdown: true,
      image: "src/assets/images/Home/DSC09241.webp",
      groups: [
        {
          title: "Get In Touch",
          items: [
            { name: "Let's Talk", href: "#lets-talk" },
            { name: "Careers", href: "#careers" },
            { name: "Enquire Now", href: "#enquire-now" },
          ],
        },
      ],
    },
    {
      name: "Apply Online",
      href: "https://pavnaintlschool.campuscare.cloud/",
      hasDropdown: false,
      isRedirection: true,
    },
    {
      name: "Pay Fees Online",
      href: "https://pavnaintlschool.com/pay-online/",
      hasDropdown: false,
      isRedirection: true,
    },
  ],
  heroImages: [
    "src/assets/images/Home/image_4.webp",
    "src/assets/images/Home/DSC05807.webp",
    "src/assets/images/Home/DSC08428.webp",
    "src/assets/images/Home/DSC08748.webp",
    "src/assets/images/Home/DSC08559.webp",
  ],
  about: {
    title: "Where Small Steps Build Lifelong Greatness",
    subtitle: "Every journey begins with a purposeful stride",
    text: "At Pavna, we nurture each child's unique potential, transforming purposeful growth into a legacy of lifelong greatness.",
  },
  infrastructure: [
    {
      title: "Smart Classrooms",
      description: "Digitally equipped spaces for interactive learning.",
    },
    {
      title: "Science Labs",
      description: "Modern laboratories for Physics, Chemistry, and Biology.",
    },
    {
      title: "Sports Complex",
      description: "World-class facilities for indoor and outdoor sports.",
    },
    {
      title: "Library",
      description: "A vast collection of books and digital resources.",
    },
  ],
  academics: [
    {
      name: "Primary School",
      description: "Grade 1 to 5 following a holistic foundation approach.",
    },
    {
      name: "Middle School",
      description: "Grade 6 to 8 focused on subject proficiency.",
    },
    {
      name: "High School",
      description: "Grade 9 to 12 preparing for global challenges.",
    },
  ],
  admissions: {
    steps: ["Online Inquiry", "Campus Visit", "Interaction", "Enrollment"],
  },
  footer: {
    address: "9th Milestone, Aligarh-Agra Road, Aligarh, UP - 202001",
    phone: "+91 88888 88888",
    email: "info@pavnaintlschool.com",
    socials: [
      { name: "Facebook", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "YouTube", href: "#" },
    ],
  },
};
