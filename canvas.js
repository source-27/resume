// ==============================================================================
// CYBERNETIC AMBIENT BACKGROUND ENGINE - HARMAN SINGH KOHLI
// Developer-Grade Cyber Aesthetics:
// 1. Orthogonal PCB Circuit Traces & Bus Grid Pathways
// 2. Glowing Logic Junction Nodes & Terminals
// 3. Pulsing Silicon Data Packets traversing Circuit Lines
// 4. Authentic Software Engineering Code Streams (Java, Spring Boot, A*, SQL, Python)
// 5. Electromagnetic Cursor Proximity Excitation (Interactive without mini-games)
// 6. Dynamic Cyber Accent Synchronization (Cyan / Emerald / Purple)
// High-Performance HTML5 Canvas • Ambient • Zero Audio / Zero Simulations
// ==============================================================================

(function () {
  'use strict';

  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = window.innerWidth;
  let height = window.innerHeight;

  // Mouse & Touch electromagnetic interaction field
  const mouse = {
    x: -1000,
    y: -1000,
    radius: 220,
    active: false
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
    mouse.active = false;
  }, { passive: true });

  window.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
      mouse.active = true;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
      mouse.active = true;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouse.x = -1000;
    mouse.y = -1000;
    mouse.active = false;
  }, { passive: true });

  // ---------------------------------------------------------------------------
  // DYNAMIC THEME COLOR RESOLVER
  // ---------------------------------------------------------------------------
  function getCyberPalette() {
    if (document.body.classList.contains('theme-emerald')) {
      return {
        primary: '#10b981',
        primaryRgb: '16, 185, 129',
        secondary: '#34d399',
        glow: 'rgba(16, 185, 129, 0.45)',
        traceBase: 'rgba(16, 185, 129, 0.08)',
        traceActive: 'rgba(52, 211, 153, 0.55)',
        codeHead: '#6ee7b7'
      };
    } else if (document.body.classList.contains('theme-purple')) {
      return {
        primary: '#c084fc',
        primaryRgb: '192, 132, 252',
        secondary: '#e879f9',
        glow: 'rgba(192, 132, 252, 0.45)',
        traceBase: 'rgba(192, 132, 252, 0.08)',
        traceActive: 'rgba(232, 121, 249, 0.55)',
        codeHead: '#f0abfc'
      };
    }
    // Default: Cyber Cyan / Electric Blue
    return {
      primary: '#00f0ff',
      primaryRgb: '0, 240, 255',
      secondary: '#38bdf8',
      glow: 'rgba(0, 240, 255, 0.45)',
      traceBase: 'rgba(0, 240, 255, 0.08)',
      traceActive: 'rgba(56, 189, 248, 0.65)',
      codeHead: '#e0f2fe'
    };
  }

  // ---------------------------------------------------------------------------
  // AUTHENTIC CODE SNIPPETS & REPOSITORY CODEBASE
  // ---------------------------------------------------------------------------
  const CODE_SNIPPETS = [
    "public class PathfindingEngine {",
    "  public List<Node> findAStarPath(Graph g, Node start, Node goal) {",
    "    PriorityQueue<Node> openSet = new PriorityQueue<>(comparingDouble(Node::fScore));",
    "    openSet.add(start);",
    "    while (!openSet.isEmpty()) {",
    "      Node current = openSet.poll();",
    "      if (current.equals(goal)) return reconstructPath(cameFrom, current);",
    "      for (Edge edge : g.getNeighbors(current)) {",
    "        double tentativeGScore = current.gScore + edge.weight;",
    "        if (tentativeGScore < edge.target.gScore) {",
    "          cameFrom.put(edge.target, current);",
    "          edge.target.gScore = tentativeGScore;",
    "          edge.target.fScore = tentativeGScore + heuristic(edge.target, goal);",
    "          if (!openSet.contains(edge.target)) openSet.add(edge.target);",
    "        }",
    "      }",
    "    }",
    "  }",
    "}",
    "@RestController",
    "@RequestMapping(\"/api/v1/navigation\")",
    "public class IndoorNavigationController {",
    "  @Autowired private final NavigationService navigationService;",
    "  @PostMapping(\"/route/compute\")",
    "  public ResponseEntity<RouteResponse> computeMultiFloorRoute(@Valid @RequestBody RouteRequest req) {",
    "    RouteResponse route = navigationService.calculateShortestPath(req.getSourceId(), req.getTargetId());",
    "    return ResponseEntity.ok(route);",
    "  }",
    "}",
    "@Service",
    "@Transactional",
    "public class EventManagementService {",
    "  @Autowired private EventRepository eventRepo;",
    "  public TicketDTO processRegistration(Long eventId, Long attendeeId) {",
    "    Event event = eventRepo.findByIdWithLock(eventId).orElseThrow();",
    "    return event.registerAttendee(attendeeId);",
    "  }",
    "}",
    "@Entity",
    "@Table(name = \"campus_topology_nodes\")",
    "public class NavigationNode {",
    "  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;",
    "  @Column(nullable = false) private String floorLevel;",
    "  @Column(columnDefinition = \"geometry(Point, 3857)\") private Point location;",
    "}",
    "SELECT n.id, n.floor_id, n.node_type, e.weight FROM topology_nodes n",
    "JOIN topology_edges e ON n.id = e.source_node_id WHERE n.active = TRUE;",
    "CREATE INDEX idx_campus_graph ON topology_nodes(floor_id, node_type);",
    "model = RandomForestClassifier(n_estimators=100, random_state=42)",
    "model.fit(X_train, y_train)",
    "y_pred = model.predict(X_test)",
    "git commit -m \"feat(backend): layered architecture & graph persistence\"",
    "docker run -d --name postgres -p 5432:5432 -e POSTGRES_DB=campus_db postgres:16-alpine",
    "mvn clean compile test -Dspring.profiles.active=prod",
    "export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/campus_nav",
    "AStarRoutingEngine engine = new AStarRoutingEngine(campusGraph);",
    "RoutePath path = engine.resolveMultiLevelPath(\"GROUND_ENTRANCE\", \"ROBOTICS_LAB_F2\");"
  ];

  const CODE_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}<>;:=+*()[]/.-_#@$";

  // ---------------------------------------------------------------------------
  // 1. PCB CIRCUIT BUS TRACES & LOGIC JUNCTION NETWORK
  // ---------------------------------------------------------------------------
  let circuitTraces = [];
  let logicJunctions = [];
  let dataPackets = [];

  class CircuitTrace {
    constructor(points, hasJunctionAtEnd = true) {
      this.points = points; // Array of {x, y}
      this.hasJunctionAtEnd = hasJunctionAtEnd;
      this.length = 0;
      this.segmentLengths = [];

      for (let i = 0; i < points.length - 1; i++) {
        const segLen = Math.hypot(points[i + 1].x - points[i].x, points[i + 1].y - points[i].y);
        this.segmentLengths.push(segLen);
        this.length += segLen;
      }
    }

    getPointAtProgress(t) {
      if (this.length === 0) return this.points[0];
      let targetDist = t * this.length;
      let accumulated = 0;

      for (let i = 0; i < this.segmentLengths.length; i++) {
        const segLen = this.segmentLengths[i];
        if (accumulated + segLen >= targetDist) {
          const segProgress = (targetDist - accumulated) / segLen;
          const p1 = this.points[i];
          const p2 = this.points[i + 1];
          return {
            x: p1.x + (p2.x - p1.x) * segProgress,
            y: p1.y + (p2.y - p1.y) * segProgress
          };
        }
        accumulated += segLen;
      }
      return this.points[this.points.length - 1];
    }

    draw(ctx, palette) {
      if (this.points.length < 2) return;

      // Calculate proximity to cursor
      let minMouseDist = Infinity;
      for (const pt of this.points) {
        const d = Math.hypot(pt.x - mouse.x, pt.y - mouse.y);
        if (d < minMouseDist) minMouseDist = d;
      }

      const isNearMouse = minMouseDist < mouse.radius && mouse.active;
      const proximityFactor = isNearMouse ? (1 - minMouseDist / mouse.radius) : 0;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(this.points[0].x, this.points[0].y);
      for (let i = 1; i < this.points.length; i++) {
        ctx.lineTo(this.points[i].x, this.points[i].y);
      }

      if (proximityFactor > 0) {
        ctx.strokeStyle = `rgba(${palette.primaryRgb}, ${0.12 + proximityFactor * 0.45})`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = palette.primary;
        ctx.shadowBlur = 6 * proximityFactor;
      } else {
        ctx.strokeStyle = palette.traceBase;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 0;
      }

      ctx.stroke();
      ctx.restore();
    }
  }

  class LogicJunction {
    constructor(x, y, type = 'pad') {
      this.x = x;
      this.y = y;
      this.type = type; // 'pad', 'terminal', 'chip'
      this.pulse = Math.random() * Math.PI * 2;
    }

    update() {
      this.pulse += 0.04;
    }

    draw(ctx, palette) {
      const dist = Math.hypot(this.x - mouse.x, this.y - mouse.y);
      const isNear = dist < mouse.radius && mouse.active;
      const factor = isNear ? (1 - dist / mouse.radius) : 0;

      const alpha = 0.25 + Math.sin(this.pulse) * 0.15 + factor * 0.6;
      const radius = this.type === 'chip' ? 3.5 : 2.5;

      ctx.save();
      if (this.type === 'chip') {
        // Micro logic chip (small diamond / rectangle)
        ctx.strokeStyle = `rgba(${palette.primaryRgb}, ${alpha})`;
        ctx.fillStyle = `rgba(15, 23, 42, 0.9)`;
        ctx.lineWidth = 1;
        if (factor > 0) {
          ctx.shadowColor = palette.primary;
          ctx.shadowBlur = 8 * factor;
        }
        ctx.strokeRect(this.x - 3, this.y - 3, 6, 6);
        ctx.fillRect(this.x - 2, this.y - 2, 4, 4);
      } else {
        // Round solder pad / terminal
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${palette.primaryRgb}, ${alpha})`;
        if (factor > 0) {
          ctx.shadowColor = palette.primary;
          ctx.shadowBlur = 10 * factor;
        }
        ctx.fill();
      }
      ctx.restore();
    }
  }

  class DataPacket {
    constructor(trace) {
      this.trace = trace;
      this.progress = Math.random();
      this.speed = (Math.random() * 0.0018 + 0.0012) * (trace.length > 500 ? 0.7 : 1.2);
      this.length = Math.random() * 0.06 + 0.03;
      this.size = Math.random() * 2 + 1.8;
      this.baseAlpha = Math.random() * 0.35 + 0.45;
    }

    update() {
      this.progress += this.speed;
      if (this.progress > 1.0) {
        this.progress = 0;
      }
    }

    draw(ctx, palette) {
      const pt = this.trace.getPointAtProgress(this.progress);
      const dist = Math.hypot(pt.x - mouse.x, pt.y - mouse.y);
      const isNear = dist < mouse.radius && mouse.active;
      const factor = isNear ? (1 - dist / mouse.radius) : 0;

      const alpha = Math.min(this.baseAlpha + factor * 0.5, 0.98);

      ctx.save();
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, this.size + factor * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = isNear ? '#ffffff' : palette.secondary;
      ctx.shadowColor = palette.primary;
      ctx.shadowBlur = isNear ? 12 : 5;
      ctx.globalAlpha = alpha;
      ctx.fill();
      ctx.restore();
    }
  }

  function initCircuitGrid() {
    circuitTraces = [];
    logicJunctions = [];
    dataPackets = [];

    const spacing = Math.max(90, Math.floor(width / (width < 768 ? 5 : 10)));
    const cols = Math.floor(width / spacing);
    const rows = Math.floor(height / spacing);

    // Generate balanced orthogonal circuit traces across the screen
    for (let c = 0; c <= cols; c++) {
      const x = c * spacing + (spacing * 0.5);

      // Vertical bus line with 45-degree jog
      const jogY1 = (rows * 0.25 + (c % 3) * 0.15) * spacing;
      const jogOffset = ((c % 2 === 0 ? 1 : -1) * spacing * 0.4);
      const jogY2 = jogY1 + Math.abs(jogOffset);

      const points = [
        { x: x, y: 0 },
        { x: x, y: jogY1 },
        { x: x + jogOffset, y: jogY2 },
        { x: x + jogOffset, y: height }
      ];

      const trace = new CircuitTrace(points);
      circuitTraces.push(trace);

      // Add junctions at vertices
      logicJunctions.push(new LogicJunction(x, jogY1, 'pad'));
      logicJunctions.push(new LogicJunction(x + jogOffset, jogY2, 'chip'));

      // Add 1 or 2 data packets per vertical bus
      dataPackets.push(new DataPacket(trace));
      if (Math.random() > 0.4) {
        const p2 = new DataPacket(trace);
        p2.progress = (dataPackets[dataPackets.length - 1].progress + 0.5) % 1.0;
        dataPackets.push(p2);
      }
    }

    // Horizontal circuit traces
    const hSpacing = Math.max(120, Math.floor(height / (width < 768 ? 6 : 8)));
    const hRows = Math.floor(height / hSpacing);

    for (let r = 1; r < hRows; r++) {
      const y = r * hSpacing;
      const jogX1 = (cols * 0.35 + (r % 2) * 0.2) * spacing;
      const jogYOffset = ((r % 2 === 0 ? 1 : -1) * 35);

      const points = [
        { x: 0, y: y },
        { x: jogX1, y: y },
        { x: jogX1 + 35, y: y + jogYOffset },
        { x: width, y: y + jogYOffset }
      ];

      const trace = new CircuitTrace(points);
      circuitTraces.push(trace);

      logicJunctions.push(new LogicJunction(jogX1, y, 'pad'));
      logicJunctions.push(new LogicJunction(jogX1 + 35, y + jogYOffset, 'pad'));

      dataPackets.push(new DataPacket(trace));
    }
  }

  // ---------------------------------------------------------------------------
  // 2. CYBER MATRIX CODE STREAMS
  // ---------------------------------------------------------------------------
  let codeColumns = [];
  const FONT_SIZE = 12.5;
  const COLUMN_SPACING = 16; // Balanced density

  class CodeColumn {
    constructor(x) {
      this.baseX = x;
      this.x = x;
      this.reset();
    }

    reset() {
      this.y = Math.random() * -height;
      this.speed = Math.random() * 0.7 + 0.45;
      this.snippetIndex = Math.floor(Math.random() * CODE_SNIPPETS.length);
      this.chars = [];
      this.colors = [];
      
      // Tuned opacity: present & visible without overpowering text (22% - 32% base)
      this.baseOpacity = Math.random() * 0.10 + 0.22;
      this.length = Math.floor(Math.random() * 24 + 14);

      const snippet = CODE_SNIPPETS[this.snippetIndex];
      for (let i = 0; i < this.length; i++) {
        const char = snippet[i % snippet.length] || CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
        this.chars.push(char);
      }
    }

    update() {
      this.y += this.speed;

      // Subtle electromagnetic magnetic deflection toward/away from cursor
      if (mouse.active && mouse.x > 0) {
        const dx = mouse.x - this.baseX;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const push = (1 - dist / mouse.radius) * 7 * (dx > 0 ? -1 : 1);
          this.x += (this.baseX + push - this.x) * 0.12;
        } else {
          this.x += (this.baseX - this.x) * 0.08;
        }
      } else {
        this.x += (this.baseX - this.x) * 0.08;
      }

      // Occasional character compile flicker
      if (Math.random() < 0.08) {
        const mutateIdx = Math.floor(Math.random() * this.chars.length);
        this.chars[mutateIdx] = CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
      }

      if (this.y - this.length * FONT_SIZE > height) {
        this.reset();
        this.y = -20;
      }
    }

    draw(ctx, palette) {
      ctx.font = `${FONT_SIZE}px "JetBrains Mono", Consolas, monospace`;

      for (let i = 0; i < this.chars.length; i++) {
        const charY = this.y - i * FONT_SIZE;
        if (charY < -FONT_SIZE || charY > height + FONT_SIZE) continue;

        // Mouse proximity wake factor
        let hoverFactor = 0;
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - charY;
          const distToMouse = Math.hypot(dx, dy);
          if (distToMouse < mouse.radius) {
            hoverFactor = (1 - distToMouse / mouse.radius) * 0.5;
          }
        }

        const currentAlpha = Math.min(
          (this.baseOpacity * (1 - (i / this.length) * 0.55)) + hoverFactor,
          0.94
        );

        if (i === 0) {
          // Stream head character: bright glowing
          ctx.fillStyle = hoverFactor > 0.1 ? '#ffffff' : palette.codeHead;
          ctx.globalAlpha = Math.min(currentAlpha * 2.2, 1.0);
          ctx.shadowColor = palette.primary;
          ctx.shadowBlur = hoverFactor > 0 ? 10 : 4;
        } else {
          // Stream body characters
          ctx.fillStyle = hoverFactor > 0.25 ? palette.primary : palette.secondary;
          ctx.globalAlpha = currentAlpha;
          ctx.shadowBlur = 0;
        }

        ctx.fillText(this.chars[i], this.x, charY);
      }

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }
  }

  function initCodeStreams() {
    codeColumns = [];
    const columnCount = Math.floor(width / COLUMN_SPACING);
    for (let i = 0; i < columnCount; i++) {
      codeColumns.push(new CodeColumn(i * COLUMN_SPACING + 8));
    }
  }

  // ---------------------------------------------------------------------------
  // RESIZE & LIFECYCLE CONTROLLER
  // ---------------------------------------------------------------------------
  function resizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth || document.documentElement.clientWidth || 1024;
    height = window.innerHeight || document.documentElement.clientHeight || 768;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    initCircuitGrid();
    initCodeStreams();
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // ---------------------------------------------------------------------------
  // MAIN ANIMATION LOOP
  // ---------------------------------------------------------------------------
  let animationId;
  function animate() {
    ctx.clearRect(0, 0, width, height);

    const palette = getCyberPalette();

    // 1. Draw PCB Circuit Traces
    for (let i = 0; i < circuitTraces.length; i++) {
      circuitTraces[i].draw(ctx, palette);
    }

    // 2. Draw & Update Logic Junctions
    for (let i = 0; i < logicJunctions.length; i++) {
      logicJunctions[i].update();
      logicJunctions[i].draw(ctx, palette);
    }

    // 3. Draw & Update Silicon Data Packets
    for (let i = 0; i < dataPackets.length; i++) {
      dataPackets[i].update();
      dataPackets[i].draw(ctx, palette);
    }

    // 4. Draw & Update Matrix Code Streams
    for (let i = 0; i < codeColumns.length; i++) {
      codeColumns[i].update();
      codeColumns[i].draw(ctx, palette);
    }

    animationId = requestAnimationFrame(animate);
  }

  animate();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });

})();
