export interface SignalPrimitive {
  code: string;
  category: string;
  tag: string;
  title: string;
  desc: string;
  spec: string;
  metric: string;
  iconType: "hand" | "gaze" | "depth" | "box" | "split" | "atom" | "voxel" | "imu" | "wave" | "token" | "network" | "motor";
}

export const signalPrimitives: SignalPrimitive[] = [
  {
    code: "01",
    category: "DP-SIGDM-01",
    tag: "DP-SIG",
    title: "Dexterous Manipulation",
    desc: "21-point hand keypoints, tracked per frame with sub-millimeter precision",
    spec: "t0 → tn · K = 21",
    metric: "21-pts / 120fps",
    iconType: "hand",
  },
  {
    code: "02",
    category: "DP-SIGEG-02",
    tag: "DP-SIG",
    title: "Egocentric Gaze",
    desc: "Head-pose estimates and the high-resolution field of view they frame",
    spec: "FOV 160° · yaw/pitch",
    metric: "160° FOV · 5DoF",
    iconType: "gaze",
  },
  {
    code: "03",
    category: "DP-SIGSD-03",
    tag: "DP-SIG",
    title: "Stereo Depth",
    desc: "Metric depth maps from synchronized hardware stereo camera pairs",
    spec: "RGB-D · 1080p",
    metric: "0.2m - 15m · ±2mm",
    iconType: "depth",
  },
  {
    code: "04",
    category: "DP-SIGOG-04",
    tag: "DP-SIG",
    title: "Object Grounding",
    desc: "3D bounding boxes and geometric mesh priors located in continuous space",
    spec: "6-DoF bounding box",
    metric: "IoU > 0.94",
    iconType: "box",
  },
  {
    code: "05",
    category: "DP-SIGAS-05",
    tag: "DP-SIG",
    title: "Action Segmentation",
    desc: "Tasks split automatically at the exact moment human intent transitions",
    spec: "Intent changepoint",
    metric: "Δt < 12ms",
    iconType: "split",
  },
  {
    code: "06",
    category: "DP-SIGAP-06",
    tag: "DP-SIG",
    title: "Atomic Primitives",
    desc: "Atomic labels representing the smallest physical unit a robotic policy learns",
    spec: "Contact & Shear",
    metric: "4096 tokens",
    iconType: "atom",
  },
  {
    code: "07",
    category: "DP-SIGSG-07",
    tag: "DP-SIG",
    title: "Scene Geometry",
    desc: "Scene capture, 3D spatial occupancy, and continuous environment affordance fields",
    spec: "Voxel field · NeRF",
    metric: "2cm voxel res",
    iconType: "voxel",
  },
  {
    code: "08",
    category: "DP-MOTEK-08",
    tag: "DP-MOT",
    title: "Ego-motion & Kinematics",
    desc: "6-axis IMU trajectory, joint physics, acceleration, and torque envelopes",
    spec: "IMU 6-axis · 1kHz",
    metric: "1000 Hz poll",
    iconType: "imu",
  },
  {
    code: "09",
    category: "DP-SNDSS-09",
    tag: "DP-SND",
    title: "Speech & Semantics",
    desc: "Transcription with time-aligned multimodal semantics and audio event markers",
    spec: "Word-aligned tokens",
    metric: "WER < 4.2%",
    iconType: "wave",
  },
  {
    code: "10",
    category: "DP-SNDCS-10",
    tag: "DP-SND",
    title: "Multi-Task Routing",
    desc: "Intelligent Work Chip selection preventing catastrophic policy forgetting",
    spec: "Zero-interference MoE",
    metric: "< 4ms route",
    iconType: "token",
  },
  {
    code: "11",
    category: "DP-SNDST-11",
    tag: "DP-SND",
    title: "Spatial Safety Gate",
    desc: "Kinematic boundary verification, obstacle envelopes, and torque limits",
    spec: "Deterministic barrier",
    metric: "Zero violation",
    iconType: "network",
  },
  {
    code: "12",
    category: "DP-SNDPA-12",
    tag: "DP-SND",
    title: "Closed-Loop Actuation",
    desc: "Continuous 6-DoF end-effector trajectory generation for physical robot arms",
    spec: "CAN / ROS2 bridge",
    metric: "< 15ms latency",
    iconType: "motor",
  },
];

export interface TrainingEnvironment {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  metrics: { label: string; value: string }[];
}

export const trainingEnvironments: TrainingEnvironment[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    category: "High-Tolerance Assembly",
    tagline: "Sub-millimeter assembly tolerances under high cycle frequency",
    description: "Training dual-arm robots to handle wire harnesses, micro-screws, and structural metal components in active industrial plants.",
    videoUrl: "https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/video/env-manufacturing.webm",
    posterUrl: "https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/images/env-manufacturing-poster.jpg",
    metrics: [
      { label: "Positional Tolerance", value: "±0.25mm" },
      { label: "Cycle Rate", value: "1.8s / unit" },
      { label: "Policy Success", value: "99.4%" },
    ],
  },
  {
    id: "electronics",
    name: "Electronics",
    category: "Delicate Component Soldering",
    tagline: "Micro-manipulation of fragile flex cables, chips, and optical sensors",
    description: "Multi-camera egocentric demonstration datasets capturing high-dexterity finger movement for consumer hardware assembly.",
    videoUrl: "https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/video/env-electronics.webm",
    posterUrl: "https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/images/env-electronics-poster.jpg",
    metrics: [
      { label: "Force Sensitivity", value: "< 0.4 N" },
      { label: "Part Scale", value: "0402 SMD" },
      { label: "Precision Rate", value: "99.8%" },
    ],
  },
  {
    id: "logistics",
    name: "Logistics",
    category: "High-Velocity Fulfillment",
    tagline: "Autonomous bin picking, de-palletizing, and mixed-parcel singulation",
    description: "Physical AI models handling varied deformable packaging, varying textures, and high-velocity conveyor handoffs.",
    videoUrl: "https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/video/env-logistics.webm",
    posterUrl: "https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/images/env-logistics-poster.jpg",
    metrics: [
      { label: "Picks Per Hour", value: "850+ PPH" },
      { label: "Payload Limit", value: "25.0 kg" },
      { label: "Grasp Recovery", value: "120 ms" },
    ],
  },
  {
    id: "retail",
    name: "Retail",
    category: "Unstructured Replenishment",
    tagline: "Navigating crowded customer aisles and precise shelf replenishment",
    description: "Training mobile manipulators to orient bottles, recognize barcode angles, and respect human proximity boundaries.",
    videoUrl: "https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/video/env-retail.webm",
    posterUrl: "https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/images/env-retail-poster.jpg",
    metrics: [
      { label: "Object Diversity", value: "12,000+ SKUs" },
      { label: "Safe Clearance", value: "0.5m buffer" },
      { label: "Shelf Restock", value: "45s / shelf" },
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality",
    category: "Human-Centric Service",
    tagline: "Safe collaborative interaction in shared dining and kitchen spaces",
    description: "Dexterous manipulation of glassware, hot liquids, and cutlery with compliant force-feedback control.",
    videoUrl: "https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/video/env-hospitality.webm",
    posterUrl: "https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/images/env-hospitality-poster.jpg",
    metrics: [
      { label: "Spill Rate", value: "0.00%" },
      { label: "Tactile Response", value: "< 8 ms" },
      { label: "Dynamic Obstacles", value: "360° LiDAR" },
    ],
  },
  {
    id: "agriculture",
    name: "Agriculture",
    category: "Autonomous Canopy Perception",
    tagline: "Alleviating farm labor shortages with non-destructive harvesting",
    description: "Pioneering field robotics software reducing manual labor by 70%+. Real-time optical fruit maturity grading and laser weed micro-targeting.",
    videoUrl: "https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/video/env-agriculture.webm",
    posterUrl: "https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/images/env-agriculture-poster.jpg",
    metrics: [
      { label: "Labor Reduction", value: "70%+" },
      { label: "Chemical Savings", value: "85%" },
      { label: "Field Accuracy", value: "< 1 cm" },
    ],
  },
];

export const fourSensesData = [
  {
    sense: "Sound",
    num: "01",
    summary: "Speech, prosody, code-switching, disfluencies.",
    details: "High-bandwidth spatial audio recording acoustic resonance, tool impacts, motor hums, and multilingual human voice commands.",
    metric: "48kHz / 32-bit float",
    badge: "Auditory Ingestion",
  },
  {
    sense: "Sight",
    num: "02",
    summary: "Egocentric hand–object manipulation, 6DoF pose, depth.",
    details: "Synchronized dual 4K stereo sensors delivering metric depth maps, 21-point hand joint vectors, and semantic occupancy grids.",
    metric: "Dual 4K @ 120 FPS",
    badge: "Spatial Vision",
  },
  {
    sense: "Motion",
    num: "03",
    summary: "Moving through space - joint physics, velocity, torque.",
    details: "Full whole-body 6-axis IMU trajectory logging, center of mass tracking, balance vectors, and non-linear momentum transfer.",
    metric: "1000Hz Telemetry",
    badge: "Kinematic Core",
  },
  {
    sense: "Touch",
    num: "04",
    summary: "Tactile resistance, grasp force, slip detection.",
    details: "High-density tactile array arrays capturing shear strain, normal forces, micro-slip onset, and material compliance.",
    metric: "0.01N Resolution",
    badge: "Haptic Feedback",
  },
];

export const investorsData = [
  { name: "Government of Maharashtra", logo: "/assets/home/investors/gov.png" },
  { name: "State Public Works & Infrastructure", logo: "/assets/home/investors/infra.png" },
  { name: "Agricultural & Vineyard Co-operatives", logo: "/assets/home/investors/agri.png" },
  { name: "Autonomous Robotics OEMs", logo: "/assets/home/investors/robotics.png" },
  { name: "Sovereign Enterprise AI Consortia", logo: "/assets/home/investors/enterprise.png" },
  { name: "IIT Research & Robotics Labs", logo: "/assets/home/investors/iit.png" },
  { name: "Edge NPU & Embedded Silicon Partners", logo: "/assets/home/investors/silicon.png" },
  { name: "TenetX & Texflow Subsidiaries", logo: "/assets/home/investors/subsidiary.png" },
];

export const careersData = [
  {
    title: "AI Robotics Research Scientist (VLA / World Models)",
    department: "Physical AI Core",
    type: "Full-time",
    location: "Pune, India / Hybrid",
    desc: "Train large-scale Vision-Language-Action policies and generative world models for robotic manipulators and mobile field units.",
  },
  {
    title: "C++20 Embedded Runtime Engineer",
    department: "Platform Engineering",
    type: "Full-time",
    location: "Pune, India",
    desc: "Design deterministic, zero-allocation C++ inference kernels for on-device NPUs, ROS2 bridges, and micro-second safety gates.",
  },
  {
    title: "Autonomous Agriculture Field Lead",
    department: "Agricultural Robotics",
    type: "Full-time",
    location: "Maharashtra, India",
    desc: "Deploy autonomous tractor implements, canopy perception pipelines, and real-world farm test rigs across active acreage.",
  },
  {
    title: "Enterprise Domain SLM Systems Architect",
    department: "Enterprise AI",
    type: "Full-time",
    location: "Pune, India",
    desc: "Architect air-gapped small language models (3B-8B), on-premise vector pipelines, and sovereign data intelligence platforms.",
  },
];
