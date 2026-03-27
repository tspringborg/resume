export default {
  personal: {
    name: 'Thomas Springborg',
    title: 'Freelance fullstack developer',
    email: 'thomas.springborg@gmail.com',
    phone: '+45 26367416',
  },

  summary: [
    'Programming professionally for almost two decades. I take great pride in my work and treasure opportunities to learn new skills and better myself.',
    'While being proficient in various backend languages and frameworks, my main passion lies in frontend and I have extensive experience programming these in various ecosystems, both natively and with tools compiling to multiple platforms.',
  ],

  programmingLanguages: [
    ['Typescript', 'Javascript', 'SCSS'],
    ['C#', 'Python', 'Swift'],
    ['Regular expressions :)', 'Objective-C', 'PHP'],
  ],

  toolsAndFrameworks: [
    ['Angular', 'React / React-native', 'Vue', 'THREE.js', 'Nodejs', '.NET'],
    ['HTML / CSS', 'D3', 'Photoshop', 'Aftereffects', 'Laravel', 'Unity3D'],
    ['Illustrator', 'Ionic', 'WordPress', 'Unix', 'Docker', 'Nginx'],
  ],

  experience: [
    {
      company: '[Undisclosed Telecommunications Company]',
      role: 'Freelance developer',
      period: 'Jan 2025 - April 2026',
      descriptions: [
        'Helping to maintain a <b>very</b> old episerver instance running asp.net mvc and supporting continuous integration on various customer facing frontend projects.',
      ],
      tech: ['Javascript', 'Typescript', 'Vue2', 'Vue3', 'CSS/SCSS', 'ASP.NET', 'EPIServer', '.NET', 'C#', 'Storybook', 'Playwright', 'Uniform CMS', 'Jest', 'Nodejs', 'A11y(Accessibility)'],
    },
    {
      company: 'Jyskebank A/S',
      role: 'Freelance developer',
      period: 'April 2022 - December 2024',
      descriptions: [
        'My work mostly revolved around programming new features in the various customer facing bank systems while combating and eliminating technical debt.',
        'New features were thought out and refined in close collaboration with business developers and ux designers and thoroughly tested with various test frameworks like jest, playwright, cypress.',
      ],
      tech: ['Javascript', 'Typescript', 'React', 'CSS/SCSS', 'Ionic', 'Angular', '.NET', 'C#', 'Next.js', 'Umbraco', 'E2E testing', 'Unit testing', 'Tailwindcss', 'CI/CD', 'Azure', 'Nodejs'],
    },
    {
      company: 'Spry ApS',
      role: 'Freelance developer',
      period: 'March 2022 - April 2022',
      descriptions: [
        'Brought onboard to help on a project that was behind schedule and needed additional hands and planning to deliver on time.',
        'The project was a medium sized react website where I mostly helped out with reviewing/writing code and planning out the timeline.',
      ],
      tech: ['Javascript', 'Typescript', 'React', 'CSS/SCSS', 'CI/CD', 'Nodejs'],
    },
    {
      company: 'Tryg A/S',
      role: 'Freelance developer',
      period: 'September 2021 - May 2022',
      descriptions: [
        'Hired to help the newly created DesignOps department. One of the challenges for a huge webstack with many different departments is reusability of assets, both code and design.',
        'A key role for me was figuring out the right way to both serve and document framework agnostic ui-components while identifying and solving challenges in a micro frontend architecture',
        'Creating demo projects in various webframeworks consuming our library and evangelize to different developers as one of the key success criteria was adoption',
      ],
      tech: ['Javascript', 'Typescript', 'Storybook', 'Angular', 'React', 'React-native', 'Vuejs', 'CSS/SCSS', 'Style Dictionary', 'Jest', 'Direflow', 'Nginx', 'CI/CD', 'Webpack', 'Nodejs', 'Figma', 'Stenciljs', 'Webcomponents'],
    },
    {
      company: 'Abtion ApS',
      role: 'Freelance developer',
      period: 'September 2021 - March 2022',
      descriptions: [
        'Hired as a part time external consultant. Assisting and advising on react-native app development',
      ],
      tech: ['Typescript', 'React-native', 'Redux', 'iOS', 'Android', 'CI/CD', 'Fastlane'],
    },
    {
      company: 'Stromworks',
      role: 'Freelance developer',
      period: 'Feb 2020 - Aug 2021',
      descriptions: [
        'Hired to build an app for a second hand fashion marketplace <a href="https://reefashion.app/">https://reefashion.app/</a><br>Backend was laravel and frontend was react-native. Also included was lots of quality of life improvements with the help of fastlane, appcenter and some custom python scripts<br><br>While my main responsibility was implementing and programming I frequently had to do UX and design as well.',
      ],
      tech: ['Javascript', 'React-native', 'Typescript', 'Redux', 'Redux toolkit', 'Fastlane', 'Appcenter', 'CI/CD', 'UX', 'Laravel', 'PHP', 'Python', 'Figma', 'Jest', 'React testing library', 'Technical documentation'],
    },
    {
      company: 'Comparo',
      role: 'Freelance developer',
      period: 'April 2021 - Aug 2021',
      descriptions: [
        'Comparo is a platform for comparing different insurance companies. I was tasked with creating scraping scripts responsible for retrieving a customers insurance information from the different insurance companies<br><br>A <b>very</b> challenging task which required reverse engineering the different insurance websites and a lot of creative thinking.<br><br>The scraping scripts themselves had to be written in javascript since the react-native app injected them at runtime in a webview pointing at the relevant insurance site',
      ],
      tech: ['Javascript', 'Redux', 'React-native', 'jQuery', 'Scraping'],
    },
    {
      company: 'Nemlig.com',
      role: 'Freelance developer',
      period: 'Mar 2021 - Jun 2021',
      descriptions: [
        'Hired to help build a new internal tool for order management. Frontend built from scratch in angular. Backend built upon already existing inhouse solutions in mostly .NET<br><br>Also built a ui library in close collaboration with the UX designers using an atomic design approach with storybook. This UI library ended up as a standalone NPM package to be easily imported in to any of nemligs projects while adhering to the design guidelines laid out by the designers',
      ],
      tech: ['Docker', 'Angular', 'Typescript', '.NET', 'Jenkins', 'SonarQube', 'Jasmine', 'NPM', 'Node.js', 'SCSS', 'Storybook', 'Material UI', 'Technical documentation'],
    },
    {
      company: 'Lån & Spar',
      role: 'Freelance developer',
      period: 'Aug 2020 - Dec 2020',
      descriptions: [
        'Hired to help the transition of their new bankapp from an external agency to in-house. My role was split between giving advise and tutoring their developers on react-native and implementing features/ fixing bugs',
      ],
      tech: ['React-native', 'Typescript', 'Redux', 'Redux Saga', 'Jest', 'React testing library', 'Technical documentation', 'Technical advise and tutoring'],
    },
    {
      company: 'Konsolidator A/S',
      role: 'Freelance developer',
      period: 'Sep 2019 - Apr 2020',
      descriptions: [
        'Hired as an expert to help build and design a new version of their SaaS tool which is used by accountants in automating consolidation of corporate finances. We ended up with a fast and modern Angular spa paired with a new .NET rest api<br><br>After completion I was kept on retainer to help evaluate potential hires for a fulltime position.',
      ],
      tech: ['Angular', 'Typescript', 'RxJs', '.NET', 'CI/CD', 'SCSS', 'UX/UI', 'Azure', 'Akita', 'Jasmine', 'Technical documentation', 'Technical advise and tutoring'],
    },
    {
      company: 'Ante',
      role: 'Freelance developer',
      period: 'May 2020 - July 2020',
      descriptions: [
        'Hired to build an MVP electron app for ante law that automates redactions of legal documents using a combination of regexes and machine learning with a nodejs integration of tenserflow. <a href="https://ante.dk/anonymous/">https://ante.dk/anonymous/</a>',
      ],
      tech: ['Electron.js', 'NPM', 'Tensorflow', 'Python', 'PIP', 'UI / UX', 'Docker', 'CI/CD', 'SCSS', 'Vuejs', 'Javascript', 'Typescript', 'Node.js', 'Technical documentation', 'Spectron (e2e tests)', 'Chai (Unit tests)'],
    },
    {
      company: 'Molamil',
      role: 'Senior interactive developer',
      period: 'Mar 2014 - sep 2019',
      descriptions: [
        'Had the pleasure of working with many different technologies and clients.<br>Responsible for the tech stack<br>Training and mentoring junior developers<br>Full-stack development using many different frameworks and technologies<br>Analyzing the frontend landscape to pick the right frameworks and tools<br>Creating e2e and unit tests<br>Writing technical documentation<br>Building and designing UI and UX<br>Dialogue with clients and stakeholders to align on how to best solve various problems<br>Creating CI/CD scripts to build for various environments<br>',
      ],
      tech: ['Angular', 'Typescript', 'Vue.js', 'Nuxt', 'Three.js', 'Javascript', 'Swift', 'Objective-C', 'C#', 'Unity3d', 'Augmented Reality', 'Virtual Reality', 'Docker', 'Ansible', 'Jest', 'Karma', 'Jasmine', 'RxJs', '.NET', 'PHP', 'WordPress', 'React', 'React-native', 'CI/CD', 'SCSS', 'UI/UX', 'Technical documentation', 'Umbraco', 'Mentoring', 'After effects'],
    },
    {
      company: 'Valtech Denmark',
      role: 'Interface developer',
      period: 'Jan 2014 - Mar 2014',
      descriptions: [
        'Development on an existing sitecore site. Mostly involving frontend development of a google maps implementation showing locations of shops fetched from sitecore.<br>Dialogue with architects in relation to aligning with micro-frontend-architecture',
      ],
      tech: ['Javascript', '.NET', 'HTML', 'WordPress', 'SCSS', 'UI/UX', 'Technical documentation', 'Jenkins', 'Sitecore'],
    },
    {
      company: 'Wunderman',
      role: 'Interactive developer',
      period: 'Mar 2009 - Jan 2014',
      descriptions: [
        'Some backend development in PHP and .NET<br>Frontend development of various websites<br>Creating e2e and unit tests<br>Writing technical documentation<br>Acting as a bridge between the technical department and the business department. Clearly communicating on a level and in a language grokked by both parties<br>Creating flash banners and interactive sites<br>Analyzing the frontend landscape to pick the right frameworks and tools<br>',
      ],
      tech: ['Javascript', 'C#', 'Actionscript 3', '.NET', 'PHP', 'HTML', 'WordPress', 'SCSS', 'UI/UX', 'Java', 'Technical documentation', 'Umbraco', 'Jenkins', 'Mentoring', 'After effects', 'Sitecore'],
    },
    {
      company: 'Creativeskills ApS',
      role: 'Flash developer',
      period: 'July 2008 - Mar 2009',
      descriptions: [
        'Flash content (Banners, Minigames, campaignsites)',
      ],
      tech: ['Javascript', 'Actionscript 3', 'PHP', 'HTML', 'WordPress', 'SCSS', 'CSS', 'UI/UX', 'Flash', 'After effects'],
    },
    {
      company: 'Varius companies',
      role: 'Freelance developer',
      period: 'Dec 2006 - July 2008',
      descriptions: [
        'Did some freelance work while I was still at school. Most noteworthy was a 2 month project for LBi Copenhagen where i was hired as a developer and working on a site for Nike. Other clients included Centrumbyg, Copenhagen Cable Club and a small multiplayer flash game for Unisport.',
      ],
      tech: ['Javascript', 'C#', 'Actionscript 3', 'PHP', 'HTML', 'WordPress', 'SCSS', 'CSS', 'UI/UX', 'Flash', 'Photoshop', 'After effects'],
      isLast: true,
    },
  ],

  otherExperience: [
    {
      company: 'DMJX',
      role: 'Guest Teacher',
      period: 'November 2024',
      descriptions: [
        'Guest teacher at a course on the newly started Coded Design class. Teaching and helping with the students projects. Mostly related to Three.js.',
      ],
      tech: ['Three.js', 'WebGL', 'Javascript', 'Teaching', 'Tutoring'],
    },
    {
      company: 'ReDI School of Digital Integration',
      role: 'Volunteer',
      period: 'Sep 2020 - Sep 2021',
      descriptions: [
        'Teaching the javascript course.<br><br>ReDI is a non-profit tech school for locals and newcomers without access to digital education. Offering high-quality coding and basic computer courses in combination with a unique career program as well as the chance to collaborate with the start-up and digital industry.',
      ],
      tech: ['Javascript', 'HTML', 'CSS', 'Teaching', 'Tutoring'],
    },
    {
      company: 'DMJX',
      role: 'Guest Teacher',
      period: 'May 2019',
      descriptions: [
        'Guest teacher at a course on the Interactive Design class. Teaching and helping with the students projects. Mostly related to learning Vue.js.',
      ],
      tech: ['Javascript', 'Vue.js', 'HTML', 'CSS', 'Teaching', 'Tutoring'],
      isLast: true,
    },
  ],

  awards: [
    {
      company: 'Quantum Kate AR',
      role: 'Danishdesignawards',
      period: 'Apr 2020',
      descriptions: [
        'Finalist: <a href="https://danishdesignaward.com/en/nominee/kvante-karina/">https://danishdesignaward.com/en/nominee/kvante-karina/</a>',
      ],
    },
    {
      company: 'Quantum Rascals',
      role: 'The Lovieawards',
      period: 'Oct 2018',
      descriptions: [
        'Gold award - Schools &amp; Education.<br><br>Case presentation: <a href="http://kvantebandittercase.webflow.io/">http://kvantebandittercase.webflow.io/</a>',
      ],
    },
    {
      company: 'Radio24syv',
      role: 'Danish Digital Awards',
      period: 'Apr 2018',
      descriptions: [
        'Winner - Website - Corporate or Public.<br>Winner - Design.<br><br>Case presentation: <a href="https://danishdigitalaward.dk/projekt/radio24seven/">https://danishdigitalaward.dk/projekt/radio24seven/</a>',
      ],
      isLast: true,
    },
  ],

  testimonials: [
    {
      name: 'Kenneth Luplau-Brøgger',
      text: 'Thomas was, and I guess/hope that he is that today as well, a brilliant coder. With history in Flash, he often brought a different approach to the table. He is a likable guy, whom I miss to work with. I would recommend Thomas any time.',
    },
    {
      name: 'Dennis Green-Lieber',
      text: 'I had the honor of hiring Thomas for the second time at wunderman and that was a no brainer he is still one of the top guys that i ever had in my team. Very skilled, eager to learn, open for new technology all times and still learning.',
    },
    {
      name: 'Sebastian Axelsen',
      text: 'Thomas lavede et rigtig godt stykke arbejde. Opgaven vi stillede ham var meget krævende og ikke-standard, men på relativt kort tid formåede han alligevel at levere et godt resultat. Han er generelt skarp på Javascript apps, inkl. TypeScript og Vue.js.',
    },
  ],

  education: [
    {
      institution: 'Copenhagen School of Design and Technology',
      degree: 'Multimedia Design and Communication',
    },
    {
      institution: 'Bagsværd Kostskole og Gymnasium',
      degree: 'Student - Mathematics',
    },
  ],
}
