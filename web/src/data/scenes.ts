export type SceneMeta = {
  id: number
  roman: string
  slug: string
  title: string
  chapterLabel: string
  question: string
  scienceTitle: string
  scienceParas: string[]
  scienceRef?: string
  frames: SceneFrame[]
}

export type SceneFrame = {
  image: string
  title: string
  stepLabel: string
  englishDescription: string
}

export const scenes: SceneMeta[] = [
  {
    id: 1,
    roman: 'I',
    slug: 'stop-the-sky',
    title: 'Stop the Sky',
    chapterLabel: 'Rotational control of Earth',
    question: 'How do you slow a planet without tearing it apart?',
    scienceTitle: 'Rotational Dynamics',
    scienceParas: [
      "Altering a planet's angular momentum requires immense, sustained torque applied precisely against its rotational axis.",
      'The primary challenge is not merely generating sufficient thrust, but distributing that force without exceeding the shear strength of the planetary crust. Concentrating torque at singular equatorial points induces catastrophic tectonic shear.',
    ],
    scienceRef: 'Torque equals moment of inertia times angular acceleration (τ = Iα).',
    frames: [
      {
        image: '/media/Scene1/1.1.png',
        title: 'Ignition',
        stepLabel: 'Frame 01',
        englishDescription:
          'The engines wake in the cold, forcing a planet to resist the inertia of hundreds of millions of years.',
      },
      {
        image: '/media/Scene1/1.2.png',
        title: 'Torque',
        stepLabel: 'Frame 02',
        englishDescription:
          'Twelve thousand nozzles tilt to precise angles, turning tangential force into planetary braking torque.',
      },
      {
        image: '/media/Scene1/1.3.png',
        title: 'Scale',
        stepLabel: 'Frame 03',
        englishDescription:
          'Plasma columns pierce the troposphere, each engine delivering an impossible thrust against the turning Earth.',
      },
      {
        image: '/media/Scene1/1.4.png',
        title: 'Perpetual Twilight',
        stepLabel: 'Frame 04',
        englishDescription:
          'As rotation slows, the sun sinks below the horizon, leaving the eastern hemisphere in years of frozen dusk.',
      },
      {
        image: '/media/Scene1/1.5.png',
        title: 'The Descent',
        stepLabel: 'Frame 05',
        englishDescription:
          'The surface becomes unlivable. Humanity retreats five hundred meters underground into sealed survival cities.',
      },
    ],
  },
  {
    id: 2,
    roman: 'II',
    slug: 'build-a-small-world',
    title: 'Build a Small World',
    chapterLabel: 'Closed-loop ecology',
    question: 'Can life survive inside a system that is too small?',
    scienceTitle: 'Closed-Loop Ecology',
    scienceParas: [
      'In isolation, survival depends on absolute equilibrium. The interplay between nutrient cycling, respiratory gas exchange, and waste decomposition creates a delicate margin for error.',
      'A failure in one vector ensures systemic collapse.',
    ],
    frames: [
      {
        image: '/media/Scene2/2.1.png',
        title: 'Subterranean City',
        stepLabel: 'Frame 01',
        englishDescription:
          'The underground city is not paradise, but a closed refuge built from pipes, steel, and the will to survive.',
      },
      {
        image: '/media/Scene2/2.2.png',
        title: 'The Biosphere',
        stepLabel: 'Frame 02',
        englishDescription:
          'Each sealed biosphere is a miniature Earth, fragile precisely because it lacks the scale of a planet.',
      },
      {
        image: '/media/Scene2/2.3.png',
        title: 'Extremophiles',
        stepLabel: 'Frame 03',
        englishDescription:
          'Like life beneath Antarctic ice, humanity relearns how to breathe under artificial light.',
      },
      {
        image: '/media/Scene2/2.4.png',
        title: 'Perihelion',
        stepLabel: 'Frame 04',
        englishDescription:
          'As Earth passes perihelion, heat turns hope into the most expensive ornament.',
      },
      {
        image: '/media/Scene2/2.5.png',
        title: 'The Breach',
        stepLabel: 'Frame 05',
        englishDescription:
          "Crustal stress tears through the protective layers, and magma becomes the city's deadliest visitor.",
      },
    ],
  },
  {
    id: 3,
    roman: 'III',
    slug: 'borrow-a-giant',
    title: 'Borrow a Giant',
    chapterLabel: 'Gravity assist and tidal danger',
    question: 'How close can Earth pass to Jupiter without being lost to it?',
    scienceTitle: 'Orbital Mechanics',
    scienceParas: [
      'Gravitational slinging requires passing deep into the Jovian gravity well. Transgressing the fluid Roche limit risks global tectonic fracture via tidal forces before escape velocity is achieved.',
    ],
    frames: [
      {
        image: '/media/Scene3/3.1.png',
        title: 'The Wall of Clouds',
        stepLabel: 'Frame 01',
        englishDescription:
          'Jupiter rises like a dark red wall of clouds, too vast to belong to the sky.',
      },
      {
        image: '/media/Scene3/3.2.png',
        title: 'The Cyclopean Eye',
        stepLabel: 'Frame 02',
        englishDescription:
          'A storm large enough to swallow three Earths bends our world with its gravity.',
      },
      {
        image: '/media/Scene3/3.3.png',
        title: 'Gravity Mesh',
        stepLabel: 'Frame 03',
        englishDescription:
          'Jupiter’s mass curves spacetime, drawing Earth into the path that may accelerate it away.',
      },
      {
        image: '/media/Scene3/3.4.png',
        title: 'Tidal Disaster',
        stepLabel: 'Frame 04',
        englishDescription:
          'Tidal force drives hidden oceans upward, shattering ice from beneath.',
      },
      {
        image: '/media/Scene3/3.5.png',
        title: 'Escape Velocity',
        stepLabel: 'Frame 05',
        englishDescription:
          'Borrowing the giant’s gravity, Earth finally leaves the Sun and falls into deep space.',
      },
    ],
  },
  {
    id: 4,
    roman: 'IV',
    slug: 'read-the-sun',
    title: 'Read the Sun',
    chapterLabel: 'Evidence and public trust',
    question: 'What do people do when evidence arrives too late, or not clearly enough?',
    scienceTitle: 'Scientific Uncertainty',
    scienceParas: [
      'In scenarios of unprecedented astronomical events, the signal-to-noise ratio rapidly degrades. The sheer volume of anomalous data often outpaces the computational capacity to build a coherent consensus model.',
      'When official channels filter data to prevent panic, the epistemological gap is frequently filled by decentralized, less rigorous observation networks, creating fractured realities based on conflicting telemetry.',
    ],
    frames: [
      {
        image: '/media/Scene4/4.1.png',
        title: 'Scientific Trust',
        stepLabel: 'Frame 01',
        englishDescription:
          'When the Sun shows no visible change, doubt spreads: will it truly erupt?',
      },
      {
        image: '/media/Scene4/4.2.png',
        title: 'The Earth Bridge',
        stepLabel: 'Frame 02',
        englishDescription:
          'Rebels rush the control center, where reason and emotion collide over the fate of a planet.',
      },
      {
        image: '/media/Scene4/4.3.png',
        title: 'The Silent Verdict',
        stepLabel: 'Frame 03',
        englishDescription:
          'Five thousand scientists wait in the cold, holding to a truth that may kill them.',
      },
      {
        image: '/media/Scene4/4.4.png',
        title: 'The Helium Flash',
        stepLabel: 'Frame 04',
        englishDescription:
          'In one blinding moment, argument ends, and the Sun proves science without mercy.',
      },
      {
        image: '/media/Scene4/4.5.png',
        title: 'Interstellar Graveyard',
        stepLabel: 'Frame 05',
        englishDescription:
          'The Sun is dead, swollen into a red giant that silently consumes the inner worlds.',
      },
    ],
  },
  {
    id: 5,
    roman: 'V',
    slug: 'count-the-generations',
    title: 'Count the Generations',
    chapterLabel: 'Deep time and continuity',
    question: 'How do you design survival for people you will never meet?',
    scienceTitle: 'Interstellar Time',
    scienceParas: [
      "The challenge of multi-generational transit is not purely mechanical; it is profoundly psychological. When the journey outlasts the natural human lifespan by factors of ten, the preservation of original intent becomes an engineering problem.",
      "Deep time engineering requires constructing societal frameworks resilient enough to withstand centuries of inevitable cultural entropy. Information degrades; language shifts. The initial rationale for the voyage must be embedded into the architecture of the vessel and the rituals of its inhabitants.",
    ],
    scienceRef: 'REF: ARC-994',
    frames: [
      {
        image: '/media/Scene5/5.1.png',
        title: 'Crystalline Surface',
        stepLabel: 'Frame 01',
        englishDescription:
          'As Earth wanders farther, the atmosphere freezes into yellow-green crystalline hills.',
      },
      {
        image: '/media/Scene5/5.2.png',
        title: 'The Final Border',
        stepLabel: 'Frame 02',
        englishDescription:
          'Beyond Pluto’s orbit, Earth becomes a lonely rogue planet in interstellar dark.',
      },
      {
        image: '/media/Scene5/5.3.png',
        title: 'Heritage',
        stepLabel: 'Frame 03',
        englishDescription:
          'Fourth-generation children touch the ancient word “spring” only through holograms.',
      },
      {
        image: '/media/Scene5/5.4.png',
        title: 'The Cruise',
        stepLabel: 'Frame 04',
        englishDescription:
          'At half a percent of light speed, even 4.3 light-years requires twenty-five centuries.',
      },
      {
        image: '/media/Scene5/5.5.png',
        title: 'The Dawn',
        stepLabel: 'Frame 05',
        englishDescription:
          'After one hundred generations, the dream remains: three suns rising over a thawed world.',
      },
    ],
  },
]

export function getSceneById(id: number): SceneMeta | undefined {
  return scenes.find((s) => s.id === id)
}
