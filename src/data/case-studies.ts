export interface CaseStudy {
  id: string;
  logo: string;
  clientName: string;
  /** Image URL or path; placeholder until supplied */
  image: string;
  /** Project page: hero image (full-width rounded) */
  heroImage?: string;
  /** Project page: display name (defaults to id formatted) */
  projectName?: string;
  /** Project page: first section body */
  section1Title?: string;
  /** Project page: first section body */
  section1Body?: string;
  /** Project page: gallery images (same width grid) */
  galleryImages?: string[];
  /** Project page: second section title */
  section2Title?: string;
  /** Project page: second section body */
  section2Body?: string;
}

export function getProject(id: string): CaseStudy | undefined {
  return caseStudies.find((p) => p.id === id);
}

export const caseStudies: CaseStudy[] = [
  
  { 
    id: "chop-waiting-rooms", 
    logo: "/clients/chop-logo.png", 
    clientName: "Children's Hospital of Philadelphia", 
    image: "/projects/chop/chop_tile.jpg",
    heroImage: "/projects/chop/chop_image_01.jpg",
    projectName: "Wait-Play-Learn Hands-free Games",
    section1Title: "Turning waiting time into something active and positive",
    section1Body: "Waiting in a hospital can be stressful—especially for kids. The goal for the Wait Play Learn pods at Children’s Hospital of Philadelphia was to transform that experience into something more positive, giving children a way to move, play, and learn while they wait.<br/><br/>We created a series of hands-free, motion-based games using Kinect technology, allowing kids to interact without touching a screen. This was especially important in a healthcare setting, where cleanliness and accessibility matter. The experience was designed to feel playful and inviting, encouraging kids to get up, move around, and engage—turning idle time into something active and uplifting.",
    galleryImages: [
      "/projects/chop/chop_image_01.jpg",
      "/projects/chop/chop_image_02.jpg",
      "/projects/chop/chop_image_03.jpg",
      "/projects/chop/chop_image_04.jpg",
      "/projects/chop/chop_image_05.jpg",
      "/projects/chop/chop_image_06.jpg",
      "/projects/chop/chop_image_07.jpg",
    ],
    section2Title: "Designing for accessibility, movement, and confidence",
    section2Body: "From the start, accessibility and usability were central to the design. The games needed to work for a wide range of children, including those with physical and cognitive challenges. Through multiple rounds of user testing with kids ages 6 to 14, we refined the experience to account for different ranges of motion, mobility levels, and learning styles—while making sure it stayed fun.<br/><br/>Those moments of testing made the impact real. In one session, a young patient who was shy and unable to walk on her own became more confident as she played, eventually walking independently across the room. Experiences like that reinforced the importance of designing for more than just usability—designing for confidence, motivation, and emotional impact.<br/><br/>Behind the scenes, the project came with technical challenges. Working with emerging technology and a tight timeline meant building many features from scratch and iterating quickly. But that investment paid off. The initial set of games expanded into a larger system, with new experiences added over time and continuous improvements based on real-world use.<br/><br/>The result is an experience that goes beyond entertainment. By combining movement, play, and learning, the pods help reduce stress, support physical engagement, and create small moments of joy in an environment where they matter most.",
  },
  { 
    id: "esphs-prisons-today", 
    logo: "/projects/esphs/esphs_logo.png", 
    clientName: "Eastern State Penitentiary", 
    image: "/projects/esphs/esphs_tile.jpg",
    heroImage: "/projects/esphs/esphs_image_01.jpg",
    projectName: "Prisons Today Exhibit Digital Kiosks",
    section1Title: "Using digital to spark reflection, not just interaction",
    section1Body: "Eastern State Penitentiary’s Prisons Today exhibit tackles complex, often uncomfortable questions about the justice system. The goal wasn’t just to inform visitors, but to get them to reflect on their own beliefs and assumptions. While the exhibit was largely low-tech to match the historic setting, the museum needed a way to capture visitor perspectives and show how those views compare to others in real time.<br/><br/>We introduced a lightweight digital layer—two iPad-based interactives—that add depth without disrupting the physical experience. These interactives give visitors a space to engage with difficult questions, contribute their own perspectives, and see how their views fit within a broader conversation.",
    galleryImages: [
      "/projects/esphs/esphs_image_01.jpg",
      "/projects/esphs/esphs_image_02.jpg",
      "/projects/esphs/esphs_image_03.jpg",
      "/projects/esphs/esphs_image_04.jpg",
      "/projects/esphs/esphs_image_05.jpg",
      "/projects/esphs/esphs_image_06.jpg",
      "/projects/esphs/esphs_image_07.jpg",
      "/projects/esphs/esphs_image_08.jpg",
    ],
    section2Title: "Designing for dialogue, data, and lasting impact",
    section2Body: "The first experience asks visitors to rank the reasons prisons exist—like punishment, deterrence, or rehabilitation—and then challenges them to consider less visible motivations. As visitors respond, they can immediately see how their answers compare to others, turning a personal reflection into a shared, collective insight.<br/><br/>The second experience extends that moment beyond the museum. Visitors write a digital postcard to their future self, capturing their thoughts and reactions. These messages are sent back to them months or even years later, creating a lasting connection to the exhibit and encouraging continued reflection.<br/><br/>Because the exhibit is ongoing, we designed the system to evolve over time. Built-in analytics track how visitors interact with the experience—how long they stay, where they drop off, and how they move through the content—giving the museum a way to continuously improve and measure impact. Early results showed strong engagement, with thousands of responses and messages created in just the first few months.<br/><br/>The result is a digital experience that doesn’t just deliver information—it creates a moment of pause. By combining personal input, shared data, and long-term engagement, the interactives help turn a visit into something that stays with people long after they leave.",
  },
  { 
    id: "smithsonian-nk360", 
    logo: "/clients/smithsonian-logo.png", 
    clientName: "Smithsonian Institution", 
    image: "/projects/smithsonian/smithsonian_tile.jpg",
    heroImage: "/projects/smithsonian/smithsonian_image_01.jpg",
    projectName: "Native Knowledge 360 Online Learning Platform",
    section1Title: "Making complex history more engaging and accessible online",
    section1Body: "The National Museum of the American Indian launched Native Knowledge 360° (NK360°) to improve how Native histories and cultures are taught across the country. The goal was to move beyond traditional textbooks and create resources that are more accurate, engaging, and grounded in Native perspectives.<br/><br/>We helped bring that vision to life by designing a series of interactive learning experiences that make complex topics more approachable. Instead of passively reading, students can explore, play, and create—engaging with history in a way that feels active and relevant to how they learn today.",
    galleryImages: [
      "/projects/smithsonian/smithsonian_image_01.jpg",
      "/projects/smithsonian/smithsonian_image_02.jpg",
      "/projects/smithsonian/smithsonian_image_03.jpg",
      "/projects/smithsonian/smithsonian_image_04.jpg",
      "/projects/smithsonian/smithsonian_image_05.jpg",
      "/projects/smithsonian/smithsonian_image_06.jpg",
      "/projects/smithsonian/smithsonian_image_07.jpg",
      "/projects/smithsonian/smithsonian_image_08.jpg",
    ],
    section2Title: "Designing interactive tools that support learning and exploration",
    section2Body: "Each experience was designed to support different ways of learning, giving students multiple ways to engage with the material. A game-based experience puts players in the role of a salmon navigating real-world environmental challenges, helping them understand the relationship between Native communities, ecosystems, and sustainability. Other interactives invite students to piece together key ideas through puzzles, explore historical events through timelines, and even create their own news articles to reflect on what they’ve learned.<br/><br/>We also designed a flexible annotation tool that supports deeper exploration across all lessons. Students can highlight content, access definitions, hear pronunciations, and add their own notes—turning static content into something they can actively work through and personalize.<br/><br/>The goal was to create tools that feel intuitive and engaging while still supporting meaningful learning outcomes. By combining interactivity with strong educational content, the platform helps students better understand complex histories and encourages them to think critically about the material.<br/><br/>The result is a set of digital resources that go beyond delivering information—they create space for exploration, reflection, and active participation, helping bring Native perspectives into classrooms in a more thoughtful and engaging way.",
  },
  { 
    id: "please-touch-museum", 
    logo: "/clients/please-touch-logo.png", 
    clientName: "Please Touch Museum", 
    image: "/projects/ptm/ptm_tile.jpg",
    heroImage: "/projects/ptm/ptm_image_01.jpg",
    projectName: "Centennial Innovations Digital Kiosks",
    section1Title: "Helping kids imagine the future by building it themselves",
    section1Body: "The Centennial Innovations exhibit at the Please Touch Museum invites kids to think like inventors—connecting the history of the 1876 World’s Fair in Fairmount Park with the idea that they can shape the future themselves.<br/><br/>We designed digital experiences that turn that idea into something hands-on. At the center is a touch table where kids use physical pucks to build their own version of a future community in Fairmount Park. By placing and moving pieces on the surface, they can experiment with how a neighborhood comes together—making the concept of innovation feel tangible and playful rather than abstract.",
    galleryImages: [
      "/projects/ptm/ptm_image_01.jpg",
      "/projects/ptm/ptm_image_02.jpg",
      "/projects/ptm/ptm_image_03.jpg",
      "/projects/ptm/ptm_image_04.jpg",
    ],
    section2Title: "Blending physical play with digital discovery",
    section2Body: "The touch table experience was designed to feel intuitive and collaborative. Kids can gather around, place objects, and immediately see their ideas come to life on the screen. By combining physical interaction with digital feedback, the experience encourages exploration, creativity, and shared play—turning a complex idea like “community design” into something accessible for younger audiences.<br/><br/>Alongside the table, a series of digital kiosks allow visitors to dive deeper into the stories behind innovation. These interactives highlight objects and ideas connected to the original World’s Fair—giving context to how inventions were created, introduced, and shaped the world. The 1876 exposition itself was a showcase of new technologies and ideas, many of which defined the future at the time.<br/><br/>Together, these experiences create a balance between play and learning. Kids can experiment, discover, and ask “what if?”—while making connections between the past, present, and the possibilities ahead. By blending physical interaction with digital storytelling, the exhibit turns innovation into something kids don’t just learn about—they actively participate in.",
  },
  { 
    id: "mutter-spit-spreads-death", 
    logo: "/clients/mutter-logo.png", 
    clientName: "Mütter Museum", 
    image: "/projects/mutter/mutter_tile.jpg",
    heroImage: "/projects/mutter/mutter_image_01.jpg",
    projectName: "Mütter Museum Digital Interactives",
    section1Title: "",
    section1Body: "",
    galleryImages: [
      "/projects/mutter/mutter_image_01.jpg",
      "/projects/mutter/mutter_image_02.jpg",
      "/projects/mutter/mutter_image_03.jpg",
      "/projects/mutter/mutter_image_04.jpg",
      "/projects/mutter/mutter_image_05.jpg",
      "/projects/mutter/mutter_image_06.jpg",
      "/projects/mutter/mutter_image_07.jpg",
      "/projects/mutter/mutter_image_08.jpg",
    ],
    section2Title: "",
    section2Body: "",
  },

  // CENTER
  { 
    id: "graveyard-of-the-atlantic", 
    logo: "/clients/graveyard_logo.png", 
    clientName: "Graveyard of the Atlantic Museum", 
    image: "/projects/graveyard/graveyard_tile.jpg",
    heroImage: "/projects/graveyard/graveyard_image_01.jpg",
    projectName: "Graveyard of the Atlantic Digital Interactives",
    section1Title: "Bringing maritime history to life through digital experiences",
    section1Body: "The Graveyard of the Atlantic Museum had an incredible story to tell—thousands of shipwrecks, powerful storms, and generations of maritime history—but much of it lived in artifacts and written context that could be hard for visitors to fully connect with. The goal was to make that history feel real, immediate, and engaging for a wide range of audiences.<br/><br/>We helped bring the story to life through a digital-first approach, layering immersive media and interactive elements throughout the space. Large-scale projections, sound, and lighting recreated the intensity of the ocean, while digital experiences gave visitors a way to explore stories and artifacts at their own pace. Instead of simply reading about history, visitors could step into it.",
    galleryImages: [
      "/projects/graveyard/graveyard_image_01.jpg",
      "/projects/graveyard/graveyard_image_02.jpg",
      "/projects/graveyard/graveyard_image_03.jpg",
      "/projects/graveyard/graveyard_image_04.jpg",
      "/projects/graveyard/graveyard_image_05.jpg",
      "/projects/graveyard/graveyard_image_06.jpg",
      "/projects/graveyard/graveyard_image_07.jpg",
      "/projects/graveyard/graveyard_image_08.jpg",
      "/projects/graveyard/graveyard_image_09.jpg",
      "/projects/graveyard/graveyard_image_10.jpg",
      "/projects/graveyard/graveyard_image_11.jpg",
    ],
    section2Title: "Turning visitors into active participants",
    section2Body: "The experience was designed to be hands-on and exploratory, giving visitors more control over how they engage with the content. Interactive displays and touchscreens allowed people to dive deeper into shipwreck stories, explore underwater discoveries, and learn how artifacts are found and preserved.<br/><br/>These digital touchpoints made complex topics—like maritime archaeology and navigation technology—feel approachable and even fun to explore. Visitors weren’t just observing exhibits, they were interacting with them, uncovering information, and making connections on their own terms.<br/><br/>The result was a museum experience that is not only visually compelling but participatory and educational, ultimately increasing visitor engagement and elevating the museum’s role as both an educational and experiential destination. The result is a more engaging museum experience that encourages curiosity and keeps people exploring longer. By blending storytelling with interactive technology, the museum becomes not just a place to learn, but a place to experience maritime history in a way that feels personal and memorable.",
  },

  { 
    id: "pma-temple-ceiling", 
    logo: "/clients/pma-logo.png", 
    clientName: "Philadelphia Museum of Art", 
    image: "/projects/pma-temple-ceiling/pma_tile.jpg",
    heroImage: "/projects/pma-temple-ceiling/pma_image_01.jpg",
    projectName: "Zhihua Temple Ceiling Digital Interactives",
    section1Title: "Making the unseen visible through a simple interaction",
    section1Body: "The museum houses an extraordinary artifact—a highly detailed, hand-carved ceiling from the Zhihua Temple, built in the 1400s. But there was a problem: the ceiling sits 25 feet above visitors and can’t be directly lit without risking damage. Most people would walk through the space without ever fully seeing or appreciating what’s above them.<br/><br/>We designed a digital experience that brings the ceiling down to eye level—without touching the artifact itself. Using a handheld iPad, visitors can explore a high-resolution view of the ceiling in detail that would otherwise be impossible to see. The goal wasn’t to replace the physical object, but to unlock it—giving visitors a way to truly experience something that’s physically out of reach.",
    galleryImages: [
      "/projects/pma-temple-ceiling/pma_image_01.jpg",
      "/projects/pma-temple-ceiling/pma_image_02.jpg",
      "/projects/pma-temple-ceiling/pma_image_04.jpg",
      "/projects/pma-temple-ceiling/pma_image_05.jpg",
      "/projects/pma-temple-ceiling/pma_image_06.jpg",
      "/projects/pma-temple-ceiling/pma_image_07.jpg",
      "/projects/pma-temple-ceiling/pma_image_08.jpg",
      "/projects/pma-temple-ceiling/pma_image_09.jpg",
    ],
    section2Title: "Designing for accessibility, curiosity, and discovery",
    section2Body: "The experience centers around two modes: an overhead view and a lap view. In overhead view, visitors can lift the iPad to “look up” at the ceiling, creating a direct connection between the device and the space around them. In lap view, the experience shifts into a deeper, more accessible exploration—allowing users to navigate content comfortably without needing to hold the device overhead.<br/><br/>Finding the right balance between these modes was key. We worked closely with the museum team to determine what content belonged in each, ensuring the experience felt intuitive while still offering depth. Interactive hotspots layered in storytelling—highlighting details like the carved dragon and providing context that helps visitors understand what they’re seeing.<br/><br/>User testing played a big role in shaping the final experience. When we saw that visitors weren’t naturally lifting the iPad to engage with the ceiling, we introduced subtle animation cues to guide behavior. The interface also mirrored other interactives in the gallery, reducing friction and making it easier for visitors to jump in without needing instructions.<br/><br/>The result is a lightweight, intuitive experience that turns a hard-to-see artifact into something personal and discoverable—helping visitors notice, explore, and connect with a piece of history that might otherwise go unseen.",
  },
  { 
    id: "fairmount-water-works", 
    logo: "/clients/fairmount-logo.png", 
    clientName: "Fairmount Water Works", 
    image: "/projects/fww/fww_tile.jpg",
    heroImage: "/projects/fww/fww_image_01.jpg",
    projectName: "Mighty Mussel Hatchery Digital Interactives",
    section1Title: "Bringing freshwater ecosystems to life through interactive learning",
    section1Body: "Freshwater mussels play a critical role in keeping our waterways healthy, but most people don’t know they exist—let alone understand their impact. The Fairmount Water Works and its partners set out to change that, creating an exhibit that combines science, education, and a working mussel hatchery to tell a bigger story about clean water and local ecosystems.<br/><br/>We supported that vision by designing a set of digital interactives that make the science approachable, visual, and engaging. Instead of presenting complex environmental topics through text alone, we focused on creating experiences that invite visitors to explore, tap, and discover—helping them connect the health of the Delaware River to the small but powerful role mussels play within it.",
    galleryImages: [
      "/projects/fww/fww_image_01.jpg",
      "/projects/fww/fww_image_02.jpg",
      "/projects/fww/fww_image_03.jpg",
      "/projects/fww/fww_image_04.jpg",
      "/projects/fww/fww_image_05.jpg",
      "/projects/fww/fww_image_06.jpg",
      "/projects/fww/fww_image_07.jpg",
      "/projects/fww/fww_image_08.jpg",
    ],
    section2Title: "Designing for curiosity, play, and real-world learning",
    section2Body: "The experience includes three digital interactives, each designed to meet visitors where they are and encourage hands-on exploration. A large touchscreen animation breaks down the mussel lifecycle and filtration process, using layered visuals and motion to make invisible systems—like how mussels clean water—easy to understand. Additional interactives let visitors explore river species and even discover their “river character” through a playful quiz, creating multiple entry points for learning.<br/><br/>User testing, especially with middle school students, played a key role in shaping the final experience. We observed how quickly users tapped through content and adapted the design to respond—adding animated feedback, motion, and progressive cues to reward interaction and keep people engaged. We also expanded content depth by allowing visitors to tap keywords for definitions and additional context, supporting both quick exploration and deeper learning.<br/><br/>The result is a set of experiences that feel active and responsive rather than instructional. Visitors aren’t just reading about environmental science—they’re interacting with it, experimenting, and making connections in real time. By combining accurate scientific content with playful, intuitive design, the exhibit helps make an unfamiliar topic feel accessible, memorable, and relevant to everyday life.",
  },
  { 
    id: "jefferson-donor-wall", 
    logo: "/clients/jefferson-logo.png", 
    clientName: "Thomas Jefferson University", 
    image: "/projects/jefferson/jefferson_tile.jpg",
    heroImage: "/projects/jefferson/jefferson_image_01.jpg",
    projectName: "Digital Donor Wall",
    section1Title: "Turning donor recognition into an interactive experience",
    section1Body: "Thomas Jefferson University wanted their new alumni center to do more than display donor names—they wanted to celebrate their community and encourage future giving. The challenge was to create something that felt meaningful and dynamic, not just a static donor wall.<br/><br/>We designed an interactive experience that connects a digital touchscreen with a physical installation of over 10,000 programmable LEDs. Together, they create a living “legacy wall” where donors are not only recognized, but actively explored. The digital experience brings each donor’s story to life, while the physical wall responds in real time—bridging the gap between personal stories and a shared sense of impact.",
    galleryImages: [
      "/projects/jefferson/jefferson_image_01.jpg",
      "/projects/jefferson/jefferson_image_02.jpg",
      "/projects/jefferson/jefferson_image_03.jpg",
      "/projects/jefferson/jefferson_image_04.jpg",
    ],
    section2Title: "Connecting stories, space, and real-time interaction",
    section2Body: "At the heart of the experience is a flowing, visual interface where donor profiles appear as floating bubbles moving through a digital “river.” Visitors can browse, select a donor, and explore their story—photos, videos, and connections to the university—all in a way that feels personal and easy to navigate. Subtle calls-to-action are woven into the experience, encouraging visitors to consider how they might become part of that legacy.<br/><br/>What makes the experience unique is its connection to the physical space. When a donor is selected, their name lights up on the LED wall nearby, linking the digital interaction to a tangible, spatial moment. This creates a sense of presence—turning recognition into something visitors can see and feel around them.<br/><br/>User testing helped refine the experience to feel calm and approachable. We adjusted motion, interaction patterns, and readability so visitors could comfortably explore at their own pace. The result is an interface that feels polished but not overwhelming, inviting people to browse, discover, and connect.<br/><br/>The system was also designed to grow over time. Built on a flexible content model, the university can easily add new donors and manage content without developer support. As the community expands, the experience evolves with it—ensuring the legacy wall remains a living, ongoing reflection of the university’s impact.",
  },
  { 
    id: "pma-rice-room", 
    logo: "/clients/pma-logo.png", 
    clientName: "Philadelphia Museum of Art", 
    image: "/projects/pma-rice-room/pma-rice-room_tile.jpg",
    heroImage: "/projects/pma-rice-room/pma-rice-room_image_01.jpg",
    projectName: "Rice Room Panorama Digital Kiosks",
    section1Title: "Bringing hidden details of a historic space within reach",
    section1Body: "The Philadelphia Museum of Art wanted to give visitors a deeper way to experience one of its most detailed period rooms—a full recreation of a 1920s Gilded Age drawing room filled with intricate furniture and decorative objects. While visually stunning, many of these pieces are difficult to fully see or understand from a distance, especially within the constraints of a protected gallery space.<br/><br/>We created a set of high-resolution digital interactives that let visitors explore the room in ways that aren’t possible physically. Through a 360° view, visitors can navigate the space, zoom into objects, and uncover the stories behind them—bringing historical context and fine details into focus without disrupting the integrity of the room itself.",
    galleryImages: [
      "/projects/pma-rice-room/pma-rice-room_image_01.jpg",
      "/projects/pma-rice-room/pma-rice-room_image_02.jpg",
      "/projects/pma-rice-room/pma-rice-room_image_03.jpg",
      "/projects/pma-rice-room/pma-rice-room_image_04.jpg",
    ],
    section2Title: "Designing for exploration, accessibility, and long-term use",
    section2Body: "The experience was built to feel intuitive and inviting, especially for visitors who may not be comfortable with digital interfaces. Users can move through the room, zoom into objects, rotate them, and even open digital versions of cabinets to reveal items that are otherwise hidden. Layered content provides context around each object, connecting visitors to the people, history, and craftsmanship behind the collection.<br/><br/>Accessibility was a key part of the design. Based on user testing, we added clear instructional cues and simple controls, along with features like adjustable text size to support a wide range of visitors. The goal was to make the experience feel approachable—something anyone could pick up and explore without needing guidance.<br/><br/>The project was highly collaborative and iterative, with close involvement from curatorial, education, and digital teams. Rapid prototyping and on-site feedback allowed us to refine the experience quickly, balancing historical accuracy with usability.<br/><br/>We also designed the system with the future in mind. By building the interactives as a flexible, web-based experience with a structured data model, the museum can easily update content and reuse the platform across other galleries. The result is not just a single installation, but a scalable approach to bringing deeper storytelling into the museum experience.",
  },
  { 
    id: "nashville-zoo", 
    logo: "/projects/nashville-zoo/nashville-zoo_logo.png", 
    clientName: "Nashville Zoo", 
    image: "/projects/nashville-zoo/nashville-zoo_tile.jpg",
    heroImage: "/projects/nashville-zoo/nashville-zoo_image_01.jpg",
    projectName: "Trek of the Andean Bear Exhibit Digital Interactives",
    section1Title: "Making a single touchpoint feel meaningful in a larger exhibit",
    section1Body: "The Expedition Peru exhibit at the Nashville Zoo is a highly immersive, physical environment—filled with animals, architecture, and tactile elements that bring the Peruvian cloud forest to life. Within that setting, the challenge for the digital kiosk was to add value without competing for attention or feeling like just another screen.<br/><br/>We focused on creating a simple, inviting digital experience that complemented the exhibit rather than distracting from it. The kiosk provided an entry point for deeper learning, giving visitors a way to explore bear species from around the world and test their knowledge through an interactive challenge. Instead of overwhelming users with content, the experience was designed to be quick, visual, and easy to engage with—something visitors could pick up in seconds.",
    galleryImages: [
      "/projects/nashville-zoo/nashville-zoo_image_01.jpg", 
      "/projects/nashville-zoo/nashville-zoo_image_02.jpg", 
      "/projects/nashville-zoo/nashville-zoo_image_03.jpg",
      "/projects/nashville-zoo/nashville-zoo_image_04.jpg",
      "/projects/nashville-zoo/nashville-zoo_image_05.jpg",
      "/projects/nashville-zoo/nashville-zoo_image_06.jpg",
      "/projects/nashville-zoo/nashville-zoo_image_07.jpg",
      "/projects/nashville-zoo/nashville-zoo_image_08.jpg",
    ],
    section2Title: "A lightweight experience that encourages exploration",
    section2Body: "The kiosk centered around two interactive components: a “Bears of the World” explorer and a playful quiz that challenges visitors to match each species to its habitat. These interactions created a simple loop—explore, learn, test—that kept visitors engaged while reinforcing key educational themes.<br/><br/>Because the experience lived within a busy, multi-sensory environment, clarity and responsiveness were key. The interface was designed to be intuitive for all ages, allowing visitors to quickly understand what to do and move through the experience without friction. The result is a digital touchpoint that feels approachable and rewarding, even in short interactions.<br/><br/>By keeping the experience focused and easy to use, the kiosk adds depth without adding complexity—helping visitors make connections between the Andean bear and its global context while staying fully immersed in the physical exhibit around them.",
  },
];
