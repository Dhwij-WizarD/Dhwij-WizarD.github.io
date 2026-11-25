/**
 * ===================================================================
 * Dhwij Patil - Robotics Engineer Portfolio Data
 * ===================================================================
 * 
 * 💡 HOW TO ADD / EDIT CONTENT:
 * -------------------------------------------------------------------
 * - To add a new project: Add an object to the `projects` array below.
 * - To add an image: Put your image in `assets/images/` and set:
 *     media: { type: 'image', src: 'assets/images/your_photo.jpg', caption: '...' }
 * - To add a video: Put your video in `assets/videos/` and set:
 *     media: { type: 'video', src: 'assets/videos/demo.mp4', poster: 'assets/images/thumb.jpg' }
 * - To add a YouTube / Vimeo video:
 *     media: { type: 'youtube', src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID' }
 * ===================================================================
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Dhwij Patil",
    role: "Robotics Engineer & M.Tech Scholar",
    tagline: "Autonomous Robotics, Bio-inspired UAVs, SLAM & Embedded Systems",
    statusText: "M.Tech Robotics Researcher @ IIT Jodhpur",
    bio: "Bridging mechanical kinematics and computer science algorithms. Currently researching novel hybrid bio-inspired flying and walking UAVs at IIT Jodhpur, with demonstrated expertise in motion planning, SLAM/VIO, ROS2, MuJoCo physical simulations, and real-time embedded systems.",
    email: "dhwijpatil910@gmail.com",
    phone: "+91 8983544545",
    linkedin: "https://linkedin.com/in/dhwij-patil",
    github: "https://github.com/Dhwij-WizarD",
    cvPath: "./Dhwij_Patil_CV.pdf"
  },

  // Highlight Stats on Hero
  // metrics: [
  //   { number: "IIT Jodhpur", label: "M.Tech Robotics Scholar" },
  //   { number: "1st Rank", label: "NeuroRobotics Hackathon 2026" },
  //   { number: "CS + Mech", label: "Dual-Discipline Background" },
  //   { number: "10+ Repos", label: "Autonomous Robotics Systems" }
  // ],

  // About Section Pillars
  pillars: [
    {
      icon: "uav",
      title: "Hybrid UAVs & Locomotion",
      desc: "Bio-inspired aerial and terrestrial mechanics, drone fabrication, multi-terrain locomotion dynamics."
    },
    {
      icon: "sim",
      title: "Simulation & Control",
      desc: "MuJoCo dynamic physics modeling, Finite State Machines (FSM), manipulator trajectory planning."
    },
    {
      icon: "nav",
      title: "SLAM & Odometry (VIO)",
      desc: "Visual-Inertial Odometry, 2D LiDAR SLAM, EKF sensor fusion, and ROS2 navigation stacks."
    },
    {
      icon: "hardware",
      title: "Embedded & Hardware",
      desc: "Raspberry Pi 4, Arduino, PCB design, low-latency video streaming, motor drivers, PlatformIO."
    }
  ],

  // Work & Leadership Experience
  experience: [
    {
      id: "roshai",
      role: "Research Intern",
      company: "RoshAi Pvt. Ltd",
      duration: "01/2024 – 06/2024",
      location: "Kochi, India",
      bullets: [
        "Implemented advanced motion planning, navigation, and localization algorithms to significantly enhance overall system efficiency and trajectory precision.",
        "Optimized existing software programs and core codebases for high-performance and low-latency execution in real-time environments."
      ],
      tags: ["Motion Planning", "Navigation", "Localization", "Software Optimization", "Autonomous Systems"]
    },
    {
      id: "orobot",
      role: "Robotics and Automation Intern",
      company: "Orobot Technologies Pvt. Ltd",
      duration: "02/2022 – 10/2022",
      location: "Islampur, India",
      bullets: [
        "Developed robust embedded applications on Raspberry Pi and engineered custom hardware and PCB design components.",
        "Utilized ROS (Robot Operating System) for inter-module data communication, node orchestration, and end-to-end software integration testing."
      ],
      tags: ["ROS", "Raspberry Pi", "PCB Design", "Embedded Systems", "System Testing"]
    },
    {
      id: "drone-club",
      role: "Project Coordinator",
      company: "Drone Club RIT",
      duration: "01/2021 – 03/2022",
      location: "Islampur, India",
      bullets: [
        "Built, tuned, and modified multiple customized drones from scratch while mentoring junior engineering cohorts on hardware development.",
        "Conducted hands-on technical workshops focused on C++, Arduino programming, flight controllers, and unmanned aerial vehicle (UAV) design."
      ],
      tags: ["UAV Fabrication", "Flight Dynamics", "C++", "Arduino", "Workshops & Mentorship"]
    }
  ],

  // Projects & Public Repositories (Supports Images, Videos, & YouTube Embeds!)
  projects: [
    {
      id: "bio-uav",
      title: "Bio-inspired Flying and Walking UAV",
      subtitle: "UAV Design • Multi-Terrain Locomotion • Adaptive Control Architectures",
      category: "thesis",
      badge: "Active Master's Thesis • IIT Jodhpur",
      duration: "2025 – Present",
      featured: true,
      visible: false,
      description: "Novel bio-inspired hybrid unmanned aerial vehicle (UAV) engineered to execute both aerial flight and terrestrial walking locomotion. Solves the core mobility limitations of traditional drones and legged robots in cluttered, unstructured environments.",
      bullets: [
        "Synthesizing biological flight and walking mechanisms into a unified, lightweight robotic frame using Fusion360.",
        "Developing adaptive control architectures and transition kinematics for seamless, dynamic mode switching between flight and walking.",
        "Optimizing multi-terrain energy consumption to prolong operational mission endurance."
      ],
      tags: ["UAV Design", "Multi-Terrain Locomotion", "Adaptive Control", "Fusion360", "Aerodynamics"],
      media: {
        type: "image",
        src: "./assets/images/mtp_1.png",
        alt: "Bio-inspired Flying and Walking UAV Schematic",
        caption: "CAD schematic of the hybrid dual-mode locomotion architecture"
      },
      gallery: [
        { type: "image", src: "./assets/images/mtp_1.png", title: "MTP CAD Model", caption: "CAD schematic of the hybrid dual-mode locomotion architecture" },
        { type: "image", src: "./assets/images/bio_uav.png", title: "Dual-Mode Diagram", caption: "Biological flight and terrestrial walking kinematics blueprint" }
      ],
      links: [
        { label: "View Profile", url: "https://github.com/Dhwij-WizarD", icon: "github" }
      ]
    },
    {
      id: "neurorobotics-hackathon",
      title: "1st Rank — NeuroRobotics Hackathon 2026",
      subtitle: "IIT Jodhpur • EMG/EOG Biosensors • Biometric Kinematics • Microcontroller",
      category: "embedded sim",
      badge: "🥇 1st Rank — NeuroRobotics Hackathon 2026 • IIT Jodhpur",
      duration: "2026",
      featured: true,
      visible: true,
      description: "Engineered and demonstrated an innovative EMG-EOG-controlled robotic manipulator translating electromyographic and electrooculographic biometric impulses into precision kinematic gestures.",
      bullets: [
        "Architected a real-time biosignal acquisition pipeline decoding dual-channel EMG muscle impulses and EOG eye movements into multi-axis robotic commands.",
        "Interfaced responsive microcontroller firmware with signal filtering and thresholding for low-latency kinematic gesture mapping.",
        "Clinched 1st Rank among nationwide engineering teams at the prestigious IIT Jodhpur NeuroRobotics Hackathon 2026."
      ],
      tags: ["EMG/EOG Biosensors", "Robotic Manipulator", "Biomedical IoT", "Microcontroller", "Signal Processing", "Kinematics"],
      media: {
        type: "video",
        src: "./assets/videos/neurobot.mp4",
        poster: "./assets/images/neurobot_poster.png",
        alt: "NeuroRobotics Hackathon 2026 EMG-EOG Manipulator Demo",
        caption: "Live demonstration of biometric EMG/EOG impulse decoding actuating multi-axis robotic manipulator gestures"
      },
      gallery: [
        { type: "video", src: "./assets/videos/neurobot.mp4", poster: "./assets/images/neurobot_poster.png", title: "Live Video Demo", caption: "Live demonstration of biometric EMG/EOG impulse decoding actuating multi-axis robotic manipulator gestures" },
        { type: "image", src: "./assets/images/neurobot_poster.png", title: "Hardware Platform", caption: "Hardware prototype showing dual biosensor electrodes, signal conditioning board, and multi-axis manipulator" },
        { type: "image", src: "./assets/images/neurobot_poster_1.png", title: "1st Prize Ceremony", caption: "1st Prize Champion presentation ceremony with team and biometric robotic manipulator at IIT Jodhpur NeuroRobotics Hackathon 2026" },
        { type: "image", src: "./assets/images/neurobot_poster_2.png", title: "Team Celebration", caption: "Team celebratory selfie with the 1st prize trophy and Neurobots demonstration system" },
        { type: "image", src: "./assets/images/neurobot_poster_3.png", title: "Manipulator Setup", caption: "Close-up of the 3D-printed multi-axis robotic manipulator arm, trophy, and microcontroller interface" }
      ],
      links: [
        { label: "View Profile", url: "https://github.com/Dhwij-WizarD", icon: "github" }
      ]
    },
    {
      id: "vio-ros2",
      title: "Visual-Inertial Odometry (VIO) in ROS 2 Jazzy",
      subtitle: "ROS 2 Jazzy • Monocular VO • KITTI Dataset • EKF Sensor Fusion",
      category: "slam",
      badge: "GitHub Public Repo",
      duration: "2026",
      featured: false,
      visible: false,
      description: "Visual-Inertial Odometry package developed in ROS 2 Jazzy combining monocular visual feature tracking with IMU measurements from the KITTI Raw Dataset.",
      bullets: [
        "Monocular Visual Odometry using Lucas-Kanade (KLT) optical flow feature tracking and Essential Matrix pose recovery.",
        "IMU telemetry synchronization from KITTI OXTS data stream with full TF frame transformations.",
        "Odometry and continuous trajectory visualization in RViz2, prepared for EKF sensor fusion with robot_localization."
      ],
      tags: ["ROS 2 Jazzy", "Visual Odometry", "IMU Fusion", "KITTI Dataset", "RViz2", "Python"],
      media: {
        type: "image",
        src: "./assets/images/vio_ros2.png",
        alt: "Visual Inertial Odometry in ROS 2 Schematic",
        caption: "Monocular camera & IMU fusion architecture with RViz trajectory estimation"
      },
      links: [
        { label: "GitHub Repo", url: "https://github.com/Dhwij-WizarD/Visual_Intertial_Odometry_ROS2", icon: "github" }
      ]
    },
    {
      id: "here-be-robots",
      title: "HereBeRobots — 2D SLAM & Navigation Stack",
      subtitle: "C++ • 2D LiDAR • Occupancy Grids • Raylib Visualization",
      category: "slam sim",
      badge: "GitHub Public Repo",
      duration: "2026",
      featured: false,
      visible: false,
      description: "Lightweight 2D SLAM and autonomous navigation stack for mobile robots utilizing LiDAR raycasting, occupancy grid mapping, and probabilistic state estimation.",
      bullets: [
        "Implemented real-time 2D occupancy grid generation from simulated or physical LiDAR range measurements.",
        "Integrated particle filter probabilistic localization for robust state estimation in dynamic environments.",
        "Interactive real-time visualization and simulation built with C++, CMake, and Raylib."
      ],
      tags: ["C++", "2D SLAM", "Occupancy Grids", "LiDAR", "Raylib", "Probabilistic Estimation"],
      media: {
        type: "image",
        src: "./assets/images/slam_2d.png",
        alt: "2D SLAM and Raylib Navigation Stack",
        caption: "LiDAR raycasting, occupancy mapping, and particle filter localization"
      },
      links: [
        { label: "GitHub Repo", url: "https://github.com/Dhwij-WizarD/HereBeRobots", icon: "github" }
      ]
    },
    {
      id: "diff-bot",
      title: "Differential Drive Robot in Gazebo",
      subtitle: "ROS • Gazebo Simulation • 2D LiDAR • Autonomous Navigation",
      category: "sim embedded",
      badge: "GitHub Public Repo",
      duration: "2024",
      featured: false,
      visible: true,
      description: "Complete differential drive mobile robot engineered from scratch, modeled in URDF/Xacro, and simulated with realistic physics in Gazebo.",
      bullets: [
        "Constructed robot kinematics URDF model with caster balance wheels and high-torque differential drive plugins.",
        "Integrated 360-degree LiDAR sensor for environment scanning, mapping, and obstacle clearance.",
        "Configured ROS navigation and localization nodes for autonomous path planning and waypoint following."
      ],
      tags: ["Gazebo", "ROS", "URDF", "LiDAR", "Navigation", "Differential Drive"],
      media: {
        type: "video",
        src: "./assets/videos/old_diff_drive.mp4",
        poster: "./assets/images/diff_drive_poster.png",
        alt: "Differential Drive Robot in Gazebo Simulation Video Demo",
        caption: "Gazebo physics simulation with 2D LiDAR navigation, obstacle mapping, and differential drive actuation"
      },
      gallery: [
        { type: "video", src: "./assets/videos/old_diff_drive.mp4", poster: "./assets/images/diff_drive_poster.png", title: "Gazebo Simulation Video", caption: "Gazebo physics simulation with 2D LiDAR navigation, obstacle mapping, and differential drive actuation" },
        { type: "image", src: "./assets/images/differential_bot.png", title: "Kinematics Schematic", caption: "Chassis kinematics, 360 LiDAR scan wave, and differential controller diagram" }
      ],
      links: [
        { label: "GitHub Repo", url: "https://github.com/Dhwij-WizarD/Differential_bot", icon: "github" }
      ]
    },
    {
      id: "mujoco-fsm",
      title: "FSM-Driven Robotic Pick-and-Place Simulation",
      subtitle: "MuJoCo • Python • Finite State Machine • Kinematics",
      category: "sim",
      badge: "Physics Simulation & Control",
      duration: "2024",
      featured: false,
      visible: true,
      description: "Designed and simulated a multi-joint robotic manipulator in MuJoCo dynamic physics engine for high-precision autonomous pick-and-place manipulation.",
      bullets: [
        "Constructed complete kinematic chain and physical contact properties within MuJoCo XML / MJCF definitions.",
        "Architected a robust Finite State Machine (FSM) sequencing states: target approach, grasping, trajectory lifting, and precision placement.",
        "Handled singularity detection, state recovery, and contact force stability."
      ],
      tags: ["MuJoCo", "Python", "Finite State Machine", "Manipulators", "Kinematics"],
      media: {
        type: "video",
        src: "./assets/videos/Arm.mp4",
        poster: "./assets/images/arm_poster.png",
        alt: "MuJoCo Robotic Arm Pick-and-Place Simulation Video Demo",
        caption: "MuJoCo dynamic simulation showing autonomous pick-and-place trajectory executed via Finite State Machine sequencing"
      },
      gallery: [
        { type: "video", src: "./assets/videos/Arm.mp4", poster: "./assets/images/arm_poster.png", title: "MuJoCo Simulation Video", caption: "MuJoCo dynamic physics simulation executing autonomous pick-and-place manipulation via FSM sequencing" },
        { type: "image", src: "./assets/images/pick_and_place.png", title: "CAD Blueprint", caption: "CAD blueprint and forward/inverse kinematics linkage diagram" }
      ],
      links: [
        { label: "GitHub Profile", url: "https://github.com/Dhwij-WizarD/FSM_Pick_n_Place", icon: "github" }
      ]
    },
    {
      id: "hexapod",
      title: "Hexapod Spider Robot",
      subtitle: "Raspberry Pi 4 • Python • Hardware Design • Streaming",
      category: "sim embedded",
      badge: "2nd Rank — RIT Hackathon 2023",
      duration: "2023",
      featured: false,
      visible: true,
      description: "Engineered a multi-legged spider robot from scratch, implementing inverse kinematics gaits, low-latency live video streaming, and remote wireless command.",
      bullets: [
        "Designed and fabricated custom structural chassis, leg links, and servo horn mounts.",
        "Integrated Raspberry Pi 4 controller running real-time Python multi-threaded gait generators.",
        "Achieved 2nd Rank at RIT Hackathon 2023 for reconnaissance and surveillance capability."
      ],
      tags: ["Raspberry Pi 4", "Python", "Legged Locomotion", "Video Streaming", "RC Control"],
      media: {
        type: "video",
        src: "./assets/videos/hexapod.mp4",
        poster: "./assets/images/hexapod_1.png",
        alt: "Hexapod 18-DOF Spider Robot Walking Demo",
        caption: "18-DOF spider robot with Raspberry Pi 4, camera module, and dynamic tripod gait locomotion"
      },
      gallery: [
        { type: "video", src: "./assets/videos/hexapod.mp4", poster: "./assets/images/hexapod_1.png", title: "Locomotion Video", caption: "Live walking demo of the 18-DOF hexapod spider robot executing real-time inverse kinematics tripod gait" },
        { type: "image", src: "./assets/images/hexapod_1.png", title: "Hardware Chassis", caption: "Custom 3D-printed 18-DOF hexapod chassis with servo actuators, Raspberry Pi 4, and camera module" },
        { type: "image", src: "./assets/images/hexapod.png", title: "Kinematics Blueprint", caption: "18-DOF mechanical schematic with integrated Raspberry Pi 4 & camera linkage diagram" },
        { type: "image", src: "./assets/images/hexapod_2.png", title: "Lab Testing", caption: "Hexapod spider robot upright in the electronics test lab during gait calibration" }
        
      ],
      links: [
        { label: "GitHub Profile", url: "https://github.com/Dhwij-WizarD", icon: "github" }
      ]
    },
    {
      id: "vio-no-ros",
      title: "Visual-Inertial Odometry ",
      subtitle: "Python • OpenCV • KITTI Raw Dataset • Optical Flow",
      category: "slam",
      badge: "GitHub Public Repo",
      duration: "2026",
      featured: false,
      visible: true,
      description: "Minimal from-scratch Visual Odometry pipeline with IMU acceleration/gyroscope support built purely with Python and OpenCV.",
      bullets: [
        "Feature tracking using Lucas-Kanade Optical Flow (KLT) across KITTI grayscale camera sequences.",
        "Epipolar geometry pose recovery with 5-point algorithm and RANSAC Essential Matrix decomposition.",
        "Ego-centric 2D/3D trajectory ground truth comparison and trajectory plotting."
      ],
      tags: ["Python", "OpenCV", "Optical Flow", "KITTI", "Visual Odometry", "IMU"],
      media: {
        type: "video",
        src: "./assets/videos/vio.mp4",
        poster: "./assets/images/vio_poster.png",
        alt: "Visual Odometry Without ROS",
        caption: "Pure Python VIO implementation comparing estimated vs ground-truth motion"
      },
      gallery: [
        { type: "video", src: "./assets/videos/vio.mp4", poster: "./assets/images/vio_poster.png", title: "Live VIO Video", caption: "From-scratch Visual-Inertial Odometry pipeline tracking features across KITTI dataset sequences" },
        { type: "image", src: "./assets/images/vio_ros2.png", title: "VIO Pipeline Schematic", caption: "Monocular camera & IMU fusion architecture with trajectory estimation plot" }
      ],
      links: [
        { label: "GitHub Repo", url: "https://github.com/Dhwij-WizarD/Visual_Intertial_Odometry", icon: "github" }
      ]
    },
    {
      id: "kinematics-test",
      title: "Servo Kinematics & Joint Trajectory Control",
      subtitle: "• Inverse Kinematics • Multi-Axis Actuation",
      category: "sim embedded",
      badge: "GitHub Public Repo",
      duration: "2024",
      featured: false,
      visible: true,
      description: "Interactive 4-DOF robotic arm simulation in Python and MuJoCo utilizing analytical inverse kinematics for real-time Cartesian position and wrist orientation control.",
      bullets: [
        "Formulated closed-form geometric inverse kinematics solvers for a 4-DOF articulated manipulator with full 3D positioning and end-effector pitch control.",
        "Implemented workspace reach clamping, singularity avoidance guards, and joint-limit constraints for stable real-time execution.",
        "Built a live MuJoCo physics simulation featuring local joint coordinate frame visualization and non-blocking terminal keyboard teleoperation."
      ],
      tags: ["Python", "MuJoCo", "Inverse Kinematics", "Robotics Simulation", "Kinematics"],
      media: {
        type: "video",
        src: "./assets/videos/servo_sim.mp4",
        poster: "./assets/images/pick_and_place_1.png",
        alt: "Kinematics Test",
        caption: "Inverse kinematics joint angle calculation and hardware actuation"
      },
      gallery: [
        { type: "video", src: "./assets/videos/servo_sim.mp4", poster: "./assets/images/pick_and_place_1.png", title: "Kinematics Sim Video", caption: "Real-time servo kinematics trajectory simulation and joint angle actuation" },
        { type: "image", src: "./assets/images/pick_and_place_1.png", title: "Kinematics Pose 1", caption: "Inverse kinematics solver computing target end-effector coordinates — Pose 1" },
        { type: "image", src: "./assets/images/pick_and_place_2.png", title: "Kinematics Pose 2", caption: "Multi-joint trajectory interpolation, velocity smoothing, and actuation — Pose 2" },
        { type: "image", src: "./assets/images/pick_and_place_3.png", title: "Kinematics Pose 3", caption: "Precision orientation alignment, gripper positioning, and target reach — Pose 3" }
      ],
      links: [
        { label: "GitHub Repo", url: "https://github.com/Dhwij-WizarD/servo_kinematics_sim", icon: "github" }
      ]
    },
    {
      id: "team-friday",
      title: "Biomedical Threat & SOS Wearable",
      subtitle: "Embedded IoT • Heart Rate Monitoring • Threat Detection",
      category: "embedded",
      badge: "3rd Rank — RIT Hackathon 2022",
      duration: "2024",
      featured: false,
      visible: true,
      description: "Biomedical IoT safety device featuring heart rate vital monitoring, statistical threat/anomaly detection algorithms, and automated emergency SOS broadcasting.",
      bullets: [
        "Interfaced optical pulse sensors with microcontrollers for continuous real-time cardiac monitoring.",
        "Engineered rapid biometric anomaly detection to detect distress levels and sudden shock.",
        "Automated GSM / wireless SOS emergency broadcasting with geographic location telemetry."
      ],
      tags: ["Biomedical IoT", "Heart Rate Sensor", "Threat Detection", "SOS Alert", "Embedded C++"],
      media: {
        type: "image",
        src: "./assets/images/watch.png",
        alt: "Team Friday Wearable",
        caption: "Biomedical telemetry sensor and automated SOS safety system"
      },
      links: [
        { label: "GitHub Repo", url: "https://github.com/Dhwij-WizarD/Team--Friday", icon: "github" }
      ]
    },
    {
      id: "ros2-projects-repo",
      title: "ROS2 Modular Robotics Suite",
      subtitle: "ROS 2 • C++ • Publisher-Subscriber • Action Servers",
      category: "slam sim",
      badge: "GitHub Public Repo",
      duration: "2023",
      featured: false,
      visible: false,
      description: "Collection of modular ROS2 packages demonstrating custom inter-process communication, parameter servers, service-client models, and robot node pipelines.",
      bullets: [
        "Constructed reusable ROS2 node templates in C++ with custom message and service interfaces.",
        "Configured launch files, parameter YAMLs, and multi-threaded executors for parallel node execution.",
        "Served as foundation for subsequent VIO, SLAM, and autonomous robot projects."
      ],
      tags: ["ROS2", "C++", "Action Servers", "Middleware", "Node Architecture"],
      media: {
        type: "image",
        src: "./assets/images/differential_bot.png",
        alt: "ROS2 Projects Suite",
        caption: "Modular ROS2 node orchestration and inter-process communication"
      },
      links: [
        { label: "GitHub Repo", url: "https://github.com/Dhwij-WizarD/ROS2_Projects", icon: "github" }
      ]
    },
    {
      id: "sanitizing-robot",
      title: "Autonomous & Remote Sanitizing Robot",
      subtitle: "Arduino Uno • Bluetooth • Wi-Fi • Motor Drivers",
      category: "embedded",
      badge: "Embedded & Healthcare IoT",
      duration: "2021",
      featured: false,
      visible: true,
      description: "Specialized remote-controlled and automated sanitation robot developed during COVID-19 to disinfect hospital floors without human exposure.",
      bullets: [
        "Interfaced Bluetooth and Wi-Fi modules for dual long-range wireless telemetry and smartphone app control.",
        "Engineered high-flow disinfectant pump spray system synchronized with rover drive motors.",
        "Built fail-safe emergency stops and ultrasonic obstacle avoidance logic in Arduino C++."
      ],
      tags: ["Arduino Uno", "Bluetooth", "Wi-Fi", "Embedded C++", "Motor Drivers"],
      media: {
        type: "image",
        src: "./assets/images/sanitizing_robot.png",
        alt: "Autonomous Sanitizing Robot Diagram",
        caption: "Disinfection rover with dual telemetry and ultrasonic obstacle detection"
      },
      links: [
        { label: "GitHub Profile", url: "https://github.com/Dhwij-WizarD", icon: "github" }
      ]
    }
  ],

  // Technical Skills Matrix
  skills: [
    {
      category: "Core Robotics Domains",
      icon: "domain",
      items: [
        { name: "Visual-Inertial Odometry (VIO)", highlight: true },
        { name: "2D / 3D SLAM", highlight: true },
        { name: "Motion Planning", highlight: true },
        { name: "Finite State Machines (FSM)", highlight: true },
        { name: "UAV Design & Dynamics", highlight: true },
        { name: "Autonomous Navigation", highlight: true },
        { name: "Multi-Terrain Locomotion", highlight: false },
        { name: "Sensor Fusion (EKF)", highlight: true },
        { name: "Problem Solving & Algorithmic Design", highlight: false }
      ]
    },
    {
      category: "Frameworks & Simulators",
      icon: "sim",
      items: [
        { name: "ROS 2 (Jazzy / Humble)", highlight: true },
        { name: "ROS (Robot Operating System)", highlight: true },
        { name: "MuJoCo Physics Engine", highlight: true },
        { name: "Gazebo Simulation", highlight: true },
        { name: "Fusion360 (CAD & 3D Modeling)", highlight: true },
        { name: "Raylib (C++ Graphics)", highlight: false },
        { name: "PlatformIO", highlight: false },
        { name: "Git / GitHub Version Control", highlight: true }
      ]
    },
    {
      category: "Programming & Spoken Languages",
      icon: "code",
      items: [
        { name: "C++", highlight: true },
        { name: "Python (Robotics, OpenCV, Sim)", highlight: true },
        { name: "C", highlight: true },
        { name: "English", highlight: false },
        { name: "Hindi", highlight: false },
        { name: "Marathi", highlight: false }
      ]
    },
    {
      category: "Hardware & Embedded Systems",
      icon: "hardware",
      items: [
        { name: "Raspberry Pi 4", highlight: true },
        { name: "Arduino Uno / Micro", highlight: true },
        { name: "2D LiDAR Sensors", highlight: true },
        { name: "Monocular Cameras & IMUs", highlight: true },
        { name: "Servos, BLDC Motors & ESCs", highlight: false },
        { name: "EMG / EOG Biosensors", highlight: false }
      ]
    }
  ],

  // Achievements & Competitions
  achievements: [
    {
      medal: "🥇",
      rankClass: "rank-1st",
      title: "1st Rank — NeuroRobotics Hackathon 2026",
      event: "IIT Jodhpur",
      desc: "Engineered and demonstrated an innovative EMG-EOG-controlled robotic manipulator translating electromyographic and electrooculographic biometric impulses into precision kinematic gestures."
    },
    {
      medal: "🥈",
      rankClass: "rank-2nd",
      title: "2nd Rank — RIT Hackathon 2023",
      event: "K.E Society’s RIT",
      desc: "Designed and presented an autonomous surveillance Hexapod Spider Robot equipped with multi-threaded live video feed transmission and multi-gait walking algorithms."
    },
    {
      medal: "🥉",
      rankClass: "rank-2nd",
      title: "3rd Rank — RIT Hackathon 2022",
      event: "K.E Society’s RIT",
      desc: "Engineered a wearable biometric smart safety device with automated threat anomaly detection and emergency SOS broadcast (Team Friday)."
    },
    {
      medal: "🥇",
      rankClass: "rank-1st",
      title: "1st Rank — Reflex 2022 Coding",
      event: "AMGOI",
      desc: "Won 1st place in the competitive C++ coding tournament and delivered an award-winning technical presentation on UAV drone applications in agriculture."
    }
  ],

  // Verified Course Certifications
  certifications: [
    "Introduction to C++",
    "ROS2 for Beginners"
  ],

  // Academic Education
  education: [
    {
      institution: "Indian Institute of Technology Jodhpur",
      degree: "M.Tech in Robotics",
      duration: "2025 – Present",
      location: "Jodhpur, India",
      score: "CGPA: 8.04",
      highlight: true
    },
    {
      institution: "K.E Society’s RIT, Islampur",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2020 – 2024",
      location: "Islampur, India",
      score: "CGPA: 8.51",
      highlight: false
    },
    {
      institution: "Balwant College, Vita",
      degree: "Secondary Education (HSC)",
      duration: "2018 – 2020",
      location: "Vita, India",
      score: "Percentage: 85.08%",
      highlight: false
    }
  ]
};

// Freeze object to avoid accidental runtime mutation
if (typeof Object.freeze === "function") {
  Object.freeze(PORTFOLIO_DATA);
}
