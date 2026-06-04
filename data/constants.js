export const SITE_URL = 'https://ethandellaposta.dev'
export const SITE_NAME = 'Ethan Della Posta'
export const SITE_DESCRIPTION =
  'Senior Software Engineer specializing in full-stack web development, radar systems, and real-time simulations. React, Next.js, C++, Node.js.'

export const ROLES = [
  'Senior Software Engineer',
  'Full Stack Developer',
  'Radar Systems Engineer',
  'Simulation Builder',
  'Music Producer'
]

export const SKILLS = [
  { label: 'React', icon: 'react' },
  { label: 'Next.js', icon: 'nextjs' },
  { label: 'TypeScript', icon: 'typescript' },
  { label: 'Node.js', icon: 'nodejs' },
  { label: 'C++', icon: 'cpp' },
  { label: 'Go', icon: 'go' },
  { label: 'GraphQL', icon: 'graphql' },
  { label: 'MySQL', icon: 'mysql' },
  { label: 'AWS', icon: 'aws' },
  { label: 'Docker', icon: 'docker' },
  { label: 'Kubernetes', icon: 'kubernetes' },
  { label: 'Linux', icon: 'linux' },
  { label: 'Radar DSP', icon: 'radar' },
  { label: 'WebGL', icon: 'webgl' },
  { label: 'Feathers.js', icon: 'feathers' },
  { label: 'gRPC', icon: 'grpc' },
  { label: 'Protobuf', icon: 'protobuf' },
  { label: 'Jenkins', icon: 'jenkins' }
]

export const NAV_LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#career', label: 'Career' },
  { href: '#skills', label: 'Skills' },
  { href: '#music', label: 'Music' },
  { href: '#contact', label: 'Contact' }
]

export const CONTACT_LINKS = [
  {
    href: 'mailto:ethandellaposta@gmail.com',
    label: 'Email',
    value: 'ethandellaposta@gmail.com',
    icon: 'mail',
    external: false
  },
  {
    href: 'https://linkedin.com/in/ethan-della-posta',
    label: 'LinkedIn',
    value: 'Connect with me',
    icon: 'linkedin',
    external: true
  },
  {
    href: 'https://github.com/ethandellaposta',
    label: 'GitHub',
    value: 'See my code',
    icon: 'github',
    external: true
  }
]

export const RESUME_CONTENT = {
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Leidos',
      period: '2022 — Present',
      highlights: [
        'Built mission-critical radar and simulation software used for real-time analysis and operator workflows.',
        'Delivered full-stack web tools with React, Next.js, and Node.js to improve data visibility and system control.',
        'Led performance and reliability improvements across distributed services and frontend interfaces.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Leidos',
      period: '2020 — 2022',
      highlights: [
        'Developed and maintained C++ and JavaScript systems for defense-focused simulation platforms.',
        'Implemented APIs and UI features that reduced operator friction and improved mission planning speed.',
        'Collaborated across systems, test, and product teams to deliver high-quality releases on schedule.'
      ]
    }
  ],
  skills: [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'MySQL']
    },
    {
      category: 'Systems',
      skills: ['C++', 'Linux', 'Radar DSP', 'Real-time Simulation']
    },
    {
      category: 'DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    }
  ],
  education: [
    {
      degree: 'B.S. in Computer Science',
      institution: 'University of New Hampshire',
      period: '2016 — 2020'
    }
  ],
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023'
    }
  ]
}

export const FOOTER_LINKS = [
  { href: 'mailto:ethandellaposta@gmail.com', label: 'Email', external: false },
  { href: 'https://linkedin.com/in/ethan-della-posta', label: 'LinkedIn', external: true },
  { href: 'https://github.com/ethandellaposta', label: 'GitHub', external: true },
  { href: 'https://soundcloud.com/ethan-della-posta-86937754', label: 'SoundCloud', external: true }
]

export const PROJECTS = [
  {
    id: 'evo',
    title: 'Multicellular Life',
    description: 'Watch organisms adapt, compete, and evolve in real time',
    href: 'https://evoio.ethandellaposta.dev',
    iconType: 'evo',
    glowClass: 'evoCard'
  },
  {
    id: 'solar',
    title: 'Solar System',
    description: 'Real time model of our solar system',
    href: 'https://solarsystemsim.ethandellaposta.dev',
    iconType: 'solar',
    glowClass: 'solarCard'
  },
  {
    id: 'minira',
    title: 'Miniature Radar',
    description: 'A mini radar with a not so mini feature set',
    href: 'https://minira.ethandellaposta.dev',
    iconType: 'radar',
    glowClass: 'radarCard'
  }
]

export const SOUNDCLOUD_URL =
  'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ethan-della-posta-86937754&color=%236b8afd&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false'

export const SOUNDCLOUD_PROFILE = 'https://soundcloud.com/ethan-della-posta-86937754'

export const AMBIENT_LIGHTS = [
  {
    speed: -0.04,
    ax: '8%',
    ay: '15%',
    asize: '650px',
    acolor: 'hsl(230, 70%, 25%)',
    ablur: '120px',
    aopacity: '0.22'
  },
  {
    speed: -0.07,
    ax: '82%',
    ay: '10%',
    asize: '500px',
    acolor: 'hsl(260, 50%, 22%)',
    ablur: '100px',
    aopacity: '0.16'
  },
  {
    speed: -0.03,
    ax: '45%',
    ay: '40%',
    asize: '550px',
    acolor: 'hsl(215, 60%, 24%)',
    ablur: '110px',
    aopacity: '0.18'
  },
  {
    speed: -0.09,
    ax: '15%',
    ay: '55%',
    asize: '480px',
    acolor: 'hsl(200, 55%, 22%)',
    ablur: '100px',
    aopacity: '0.14'
  },
  {
    speed: -0.06,
    ax: '88%',
    ay: '50%',
    asize: '520px',
    acolor: 'hsl(270, 50%, 22%)',
    ablur: '110px',
    aopacity: '0.18'
  },
  {
    speed: -0.1,
    ax: '25%',
    ay: '80%',
    asize: '500px',
    acolor: 'hsl(290, 40%, 20%)',
    ablur: '100px',
    aopacity: '0.15'
  },
  {
    speed: -0.05,
    ax: '75%',
    ay: '85%',
    asize: '450px',
    acolor: 'hsl(310, 35%, 18%)',
    ablur: '90px',
    aopacity: '0.12'
  }
]
