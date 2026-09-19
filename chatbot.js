
/*
=========================================================
 ICT LAB AI — 100% OFFLINE CHATBOT
 No API key • No server • No Internet required
=========================================================

HOW IT WORKS
------------
This is a local knowledge-base chatbot, not a cloud LLM.
It:
  • matches the user's question against local ICT knowledge
  • supports keyword + fuzzy similarity scoring
  • remembers recent chat in localStorage
  • works completely offline after the page assets are available
  • exposes ICTLabAI.addKnowledge(...) so you can teach it more facts

Required HTML element IDs:
  ictAiButton, ictAiChat, closeAiChat,
  aiMessages, aiInput, sendAiMessage
Optional:
  buttons with [data-ai-question]
*/

(() => {
  "use strict";

  // ------------------------------------------------------
  // 1) KNOWLEDGE BASE
  // ------------------------------------------------------
  const KNOWLEDGE = [
    {
      topic: "ICT",
      keys: ["ict", "information communication technology", "what is ict"],
      answer: "ICT stands for Information and Communication Technology. It covers technologies used to create, process, store, retrieve and communicate information."
    },
    {
      topic: "Data and Information",
      keys: ["data vs information", "difference data information", "what is data", "what is information"],
      answer: "Data are raw facts. Information is data that has been processed and presented with meaning so it can support understanding or decision-making."
    },
    {
      topic: "Information Quality",
      keys: ["valuable information", "quality information", "timeliness accuracy information"],
      answer: "Valuable information should be timely, accurate, presented in context, understandable and useful for reducing uncertainty."
    },
    {
      topic: "IPO Model",
      keys: ["input process output", "ipo", "information creation model"],
      answer: "The Input–Process–Output model describes a system as receiving input, processing it, and producing output. It is a basic model for information creation."
    },
    {
      topic: "Hardware",
      keys: ["hardware", "what is hardware"],
      answer: "Hardware means the physical components of a computer system, such as the CPU, memory, keyboard, monitor and storage devices."
    },
    {
      topic: "Software",
      keys: ["software", "what is software"],
      answer: "Software is the set of programs and instructions that tell computer hardware what to do. It includes system software and application software."
    },
    {
      topic: "Open Source",
      keys: ["open source", "proprietary software", "open source vs proprietary"],
      answer: "Open-source software makes its source code available under an open-source licence. Proprietary software is controlled by its owner and normally restricts access, modification or redistribution."
    },
    {
      topic: "Data Validation",
      keys: ["validation", "data validation", "range check", "presence check", "type check"],
      answer: "Data validation checks whether entered data follows defined rules. Common syllabus examples are data-type checks, presence checks and range checks."
    },
    {
      topic: "Batch vs Real Time",
      keys: ["batch processing", "real time processing", "batch vs real time"],
      answer: "Batch processing handles collected transactions together as a group. Real-time processing handles data immediately or quickly enough to affect the current activity."
    },
    {
      topic: "Digital Divide",
      keys: ["digital divide"],
      answer: "The digital divide is the inequality between people or communities that have effective access to ICT and those that do not."
    },

    // COMPUTER SYSTEMS
    {
      topic: "Von Neumann",
      keys: ["von neumann", "von-neumann", "stored program"],
      answer: "Von Neumann architecture uses the stored-program concept. Its main components are input, output, memory and the processor, including the Control Unit and ALU."
    },
    {
      topic: "CPU",
      keys: ["cpu", "central processing unit"],
      answer: "The CPU executes instructions and coordinates processing. Important parts include the Control Unit, ALU and registers."
    },
    {
      topic: "ALU",
      keys: ["alu", "arithmetic logic unit"],
      answer: "The ALU performs arithmetic operations and logical operations inside the CPU."
    },
    {
      topic: "Control Unit",
      keys: ["control unit", "cu"],
      answer: "The Control Unit directs CPU operations. It interprets instructions and coordinates the movement of data and control signals."
    },
    {
      topic: "Registers",
      keys: ["register", "registers", "pc mar mdr ir acc"],
      answer: "Registers are very small, very fast storage locations in the CPU. Examples used in the fetch–execute cycle include PC, MAR, MDR, IR and the accumulator."
    },
    {
      topic: "Fetch Execute Cycle",
      keys: ["fetch execute", "fetch-execute", "fetch decode execute", "cpu cycle"],
      answer: "In the fetch–execute cycle, the CPU fetches the next instruction from memory, decodes it, then executes it. Registers such as PC, MAR, MDR and IR take part in the data movement."
    },
    {
      topic: "Memory Hierarchy",
      keys: ["memory hierarchy", "cache ram register hierarchy"],
      answer: "Memory hierarchy organizes storage by factors such as access speed, capacity and cost. Registers and cache are faster and smaller, while main memory and secondary storage are larger but generally slower."
    },
    {
      topic: "RAM ROM",
      keys: ["ram vs rom", "ram", "rom", "volatile memory", "non volatile memory"],
      answer: "RAM is volatile main memory, so its contents are lost when power is removed. ROM is non-volatile. The syllabus also covers PROM, EPROM and EEPROM."
    },
    {
      topic: "SRAM DRAM",
      keys: ["sram", "dram", "sram vs dram"],
      answer: "SRAM and DRAM are types of RAM. SRAM is commonly used where very fast memory is needed, while DRAM is widely used for main memory."
    },

    // DATA REPRESENTATION
    {
      topic: "Number Systems",
      keys: ["number system", "binary octal decimal hexadecimal", "bases"],
      answer: "Common computer number systems are binary (base 2), octal (base 8), decimal (base 10) and hexadecimal (base 16)."
    },
    {
      topic: "Binary",
      keys: ["binary", "base 2"],
      answer: "Binary is base 2 and uses only the digits 0 and 1. Digital computers represent data using these two states."
    },
    {
      topic: "Hexadecimal",
      keys: ["hex", "hexadecimal", "base 16"],
      answer: "Hexadecimal is base 16. It uses 0–9 and A–F, where A represents 10 and F represents 15."
    },
    {
      topic: "Signed Magnitude",
      keys: ["signed magnitude"],
      answer: "Signed magnitude represents the sign separately from the magnitude. The most significant bit is commonly used as the sign bit."
    },
    {
      topic: "Ones Complement",
      keys: ["ones complement", "one's complement", "1s complement"],
      answer: "One's complement of a binary value is formed by inverting every bit: 0 becomes 1 and 1 becomes 0."
    },
    {
      topic: "Twos Complement",
      keys: ["twos complement", "two's complement", "2s complement"],
      answer: "Two's complement can be found by taking the one's complement and adding 1. It is widely used for representing signed integers."
    },
    {
      topic: "ASCII Unicode",
      keys: ["ascii", "unicode", "character representation"],
      answer: "ASCII and Unicode are character-encoding schemes. Unicode supports a much larger set of characters and writing systems than ASCII."
    },
    {
      topic: "Bitwise Logic",
      keys: ["bitwise and", "bitwise or", "bitwise xor", "bitwise not"],
      answer: "Bitwise operations work on corresponding bits. AND produces 1 when both bits are 1; OR produces 1 when either is 1; XOR produces 1 when the bits differ; NOT inverts the bit."
    },

    // DIGITAL LOGIC
    {
      topic: "Logic Gates",
      keys: ["logic gates", "and or not xor nand nor xnor"],
      answer: "Basic logic gates include NOT, AND, OR and XOR. NAND, NOR and XNOR are also important. NAND and NOR are universal gates."
    },
    {
      topic: "Universal Gates",
      keys: ["universal gate", "nand universal", "nor universal"],
      answer: "NAND and NOR are universal gates because other logic functions can be constructed using only NAND gates or only NOR gates."
    },
    {
      topic: "Truth Table",
      keys: ["truth table"],
      answer: "A truth table lists every possible input combination for a logic expression or circuit and shows the corresponding output."
    },
    {
      topic: "De Morgan",
      keys: ["de morgan", "demorgan", "de morgan law"],
      answer: "De Morgan's laws relate negation of AND and OR expressions: NOT(A AND B) is equivalent to (NOT A) OR (NOT B), and NOT(A OR B) is equivalent to (NOT A) AND (NOT B)."
    },
    {
      topic: "SOP POS",
      keys: ["sop", "pos", "sum of products", "product of sums"],
      answer: "SOP means Sum of Products and POS means Product of Sums. They are standard forms used to represent Boolean expressions."
    },
    {
      topic: "Karnaugh Map",
      keys: ["kmap", "k-map", "karnaugh", "karnaugh map"],
      answer: "A Karnaugh map is a visual method for simplifying Boolean expressions by grouping adjacent 1s for SOP or adjacent 0s for POS in powers of two."
    },
    {
      topic: "Half Adder",
      keys: ["half adder"],
      answer: "A half adder adds two binary input bits. Its outputs are Sum and Carry."
    },
    {
      topic: "Full Adder",
      keys: ["full adder"],
      answer: "A full adder adds three input bits: two data bits and a carry-in. It produces a Sum and a Carry-out."
    },
    {
      topic: "Flip Flop",
      keys: ["flip flop", "flip-flop"],
      answer: "A flip-flop is a sequential digital circuit that can store a bit of information."
    },

    // OPERATING SYSTEMS
    {
      topic: "Operating System",
      keys: ["operating system", "os functions", "what is os"],
      answer: "An operating system manages computer resources and provides services and interfaces. Major functions include process management, resource management, security and protection."
    },
    {
      topic: "Process",
      keys: ["process vs program", "process", "program process"],
      answer: "A program is a set of instructions stored for execution. A process is a program that is currently being executed together with its execution state."
    },
    {
      topic: "PCB",
      keys: ["pcb", "process control block"],
      answer: "A Process Control Block stores information the operating system needs to manage a process, such as its state and execution context."
    },
    {
      topic: "Context Switch",
      keys: ["context switch", "context switching"],
      answer: "A context switch occurs when the CPU stops running one process and switches to another, saving and restoring the required process state."
    },
    {
      topic: "Virtual Memory",
      keys: ["virtual memory"],
      answer: "Virtual memory allows secondary storage to support the memory-management system when physical RAM is insufficient, giving processes a larger logical address space."
    },
    {
      topic: "MMU",
      keys: ["mmu", "memory management unit"],
      answer: "The MMU, or Memory Management Unit, supports address translation and memory management between logical and physical memory."
    },
    {
      topic: "Spooling",
      keys: ["spooling"],
      answer: "Spooling temporarily stores jobs or data so a slower peripheral can process them in sequence, such as print jobs waiting for a printer."
    },
    {
      topic: "File Allocation",
      keys: ["contiguous allocation", "linked allocation", "indexed allocation", "file allocation"],
      answer: "The syllabus covers three file-allocation methods: contiguous allocation, linked allocation and indexed allocation."
    },

    // NETWORKING
    {
      topic: "Network",
      keys: ["computer network", "networking"],
      answer: "A computer network connects devices so they can communicate and share data or resources."
    },
    {
      topic: "Guided Media",
      keys: ["guided media", "twisted pair", "coaxial", "fiber optics", "fibre optics"],
      answer: "Guided transmission media use a physical path. Examples include twisted pair cable, coaxial cable and fibre-optic cable."
    },
    {
      topic: "Unguided Media",
      keys: ["unguided media", "wireless media", "free space"],
      answer: "Unguided media transmit signals through free space rather than through a physical cable."
    },
    {
      topic: "Bandwidth",
      keys: ["bandwidth"],
      answer: "Bandwidth describes the information-carrying capacity of a communication channel."
    },
    {
      topic: "Latency",
      keys: ["latency"],
      answer: "Latency is the delay involved in transmitting or processing data across a communication path."
    },
    {
      topic: "Attenuation",
      keys: ["attenuation"],
      answer: "Attenuation is the reduction in signal strength as the signal travels through a transmission medium."
    },
    {
      topic: "Manchester Encoding",
      keys: ["manchester encoding", "manchester"],
      answer: "Manchester encoding uses a transition within each bit period, which helps synchronization between sender and receiver."
    },
    {
      topic: "Parity",
      keys: ["parity", "parity bit"],
      answer: "A parity bit is a simple error-detection mechanism. It allows the receiver to detect certain single-bit transmission errors."
    },
    {
      topic: "Modem",
      keys: ["modem", "modulation demodulation"],
      answer: "A modem performs modulation and demodulation so digital data can be carried using suitable signals over communication links such as traditional telephone lines."
    },
    {
      topic: "Network Topologies",
      keys: ["network topology", "bus star ring mesh", "topologies"],
      answer: "Common network topologies in the syllabus are bus, star, ring and mesh."
    },
    {
      topic: "Hub Switch",
      keys: ["hub vs switch", "hub", "switch"],
      answer: "Both hubs and switches help connect devices in a LAN. A switch can forward frames more selectively using address information, while a basic hub repeats traffic."
    },
    {
      topic: "MAC Address",
      keys: ["mac address", "media access control address"],
      answer: "A MAC address identifies a network interface at the local-network/media-access level."
    },
    {
      topic: "IPv4",
      keys: ["ipv4", "ip address"],
      answer: "IPv4 uses 32-bit addresses. Subnet masks and CIDR prefixes help divide address space into networks and hosts."
    },
    {
      topic: "Subnet",
      keys: ["subnet", "subnetting", "subnet mask", "cidr"],
      answer: "Subnetting divides an IP address block into smaller networks. A subnet mask or CIDR prefix indicates which bits identify the network portion."
    },
    {
      topic: "DHCP",
      keys: ["dhcp"],
      answer: "DHCP dynamically assigns IP configuration to devices on a network."
    },
    {
      topic: "IPv6",
      keys: ["ipv6"],
      answer: "IPv6 is a newer Internet addressing system with a much larger address space than IPv4."
    },
    {
      topic: "Router",
      keys: ["router", "routing"],
      answer: "A router connects networks and forwards packets toward their destination using routing information."
    },
    {
      topic: "TCP UDP",
      keys: ["tcp vs udp", "tcp", "udp"],
      answer: "TCP and UDP are transport-layer protocols. TCP provides connection-oriented reliable delivery features, while UDP provides a simpler connectionless service with lower overhead."
    },
    {
      topic: "DNS",
      keys: ["dns", "domain name system"],
      answer: "DNS translates human-friendly domain names into IP addresses and uses a hierarchical, distributed naming system."
    },
    {
      topic: "HTTP",
      keys: ["http", "get request"],
      answer: "HTTP is an application-layer protocol used by the Web. A browser can send an HTTP GET request to request a resource from a server."
    },
    {
      topic: "OSI Model",
      keys: ["osi", "osi model", "seven layers"],
      answer: "The OSI model has seven layers: Application, Presentation, Session, Transport, Network, Data Link and Physical."
    },
    {
      topic: "TCP/IP Model",
      keys: ["tcp ip model", "tcp/ip model"],
      answer: "The syllabus TCP/IP model contains Application, Transport, Internet and Host-to-Network layers."
    },
    {
      topic: "Firewall",
      keys: ["firewall"],
      answer: "A firewall controls network traffic according to security rules and helps protect systems connected to networks."
    },
    {
      topic: "Encryption",
      keys: ["encryption", "public key", "private key", "digital signature"],
      answer: "Encryption protects confidentiality. Public-key techniques use related public and private keys; digital signatures help provide authentication and integrity."
    },
    {
      topic: "NAT",
      keys: ["nat", "network address translation"],
      answer: "NAT allows devices using private IP addresses inside a LAN to communicate with external networks through translated addressing."
    },

    // SYSTEM ANALYSIS
    {
      topic: "SDLC",
      keys: ["sdlc", "system development life cycle"],
      answer: "The System Development Life Cycle organizes the stages used to investigate, design, develop, implement and maintain an information system."
    },
    {
      topic: "Waterfall",
      keys: ["waterfall model"],
      answer: "The Waterfall model is a sequential SDLC model where development moves through defined stages in order."
    },
    {
      topic: "Spiral",
      keys: ["spiral model"],
      answer: "The Spiral model is an iterative development model that repeatedly cycles through planning, analysis and development activities."
    },
    {
      topic: "Agile",
      keys: ["agile"],
      answer: "Agile development emphasizes iterative delivery, feedback and adapting the system as requirements evolve."
    },
    {
      topic: "Feasibility",
      keys: ["feasibility", "technical feasibility", "economic feasibility", "operational feasibility", "organizational feasibility"],
      answer: "The syllabus covers technical, economic, operational and organizational feasibility when evaluating a proposed information system."
    },
    {
      topic: "Functional Requirements",
      keys: ["functional requirement", "non functional requirement", "requirements"],
      answer: "Functional requirements describe what a system must do. Non-functional requirements describe qualities, constraints or performance expectations."
    },
    {
      topic: "DFD",
      keys: ["dfd", "data flow diagram"],
      answer: "A Data Flow Diagram shows how data moves between processes, data stores and external entities in an information system."
    },

    // DATABASES
    {
      topic: "Database",
      keys: ["database", "what is database"],
      answer: "A database is an organized collection of related data designed for efficient storage, retrieval and management."
    },
    {
      topic: "DBMS",
      keys: ["dbms", "database management system"],
      answer: "A DBMS is software used to create, store, organize, retrieve and manage data in databases."
    },
    {
      topic: "Relational Database",
      keys: ["relational database", "relation tuple attribute"],
      answer: "In a relational database, data is organized into relations (tables). Columns are attributes and rows are tuples."
    },
    {
      topic: "Primary Key",
      keys: ["primary key"],
      answer: "A primary key uniquely identifies each row in a table. It is selected from the available candidate keys."
    },
    {
      topic: "Foreign Key",
      keys: ["foreign key"],
      answer: "A foreign key is an attribute or set of attributes that refers to a key in another table, helping create relationships between tables."
    },
    {
      topic: "Candidate Key",
      keys: ["candidate key", "alternate key"],
      answer: "A candidate key can uniquely identify a row. The chosen candidate key becomes the primary key; the remaining candidate keys are alternate keys."
    },
    {
      topic: "DDL DML",
      keys: ["ddl vs dml", "ddl", "dml"],
      answer: "DDL defines database structures, such as CREATE, ALTER and DROP. DML manipulates data, such as INSERT, SELECT, UPDATE and DELETE."
    },
    {
      topic: "SQL SELECT",
      keys: ["select query", "sql select", "select statement"],
      answer: "SELECT retrieves data from one or more tables. WHERE can filter rows, and joins can combine related rows from multiple tables."
    },
    {
      topic: "ER Diagram",
      keys: ["er diagram", "entity relationship", "entity attribute cardinality"],
      answer: "An ER diagram models entities, their attributes and relationships. Cardinality describes how many instances of one entity can be related to another."
    },
    {
      topic: "Normalization",
      keys: ["normalization", "database normalization", "1nf 2nf 3nf"],
      answer: "Normalization organizes a relational schema to reduce redundancy and modification anomalies. The syllabus covers 1NF, 2NF and 3NF."
    },
    {
      topic: "1NF",
      keys: ["1nf", "first normal form"],
      answer: "First Normal Form requires table values to be organized into atomic fields rather than repeating groups or multi-valued cells."
    },
    {
      topic: "2NF",
      keys: ["2nf", "second normal form"],
      answer: "Second Normal Form builds on 1NF and removes partial dependency of non-key attributes on part of a composite key."
    },
    {
      topic: "3NF",
      keys: ["3nf", "third normal form"],
      answer: "Third Normal Form builds on 2NF and removes transitive dependency of non-key attributes on other non-key attributes."
    },
    {
      topic: "Database Anomalies",
      keys: ["insert anomaly", "update anomaly", "delete anomaly", "database anomaly"],
      answer: "Poorly designed tables can suffer insertion, update and deletion anomalies. Normalization helps reduce these problems."
    },

    // PROGRAMMING
    {
      topic: "Algorithm",
      keys: ["algorithm", "what is algorithm"],
      answer: "An algorithm is a finite sequence of well-defined steps for solving a problem."
    },
    {
      topic: "Flowchart",
      keys: ["flowchart", "flow chart"],
      answer: "A flowchart is a graphical representation of an algorithm using standard symbols and arrows to show the control flow."
    },
    {
      topic: "Pseudocode",
      keys: ["pseudocode", "pseudo code"],
      answer: "Pseudocode is a language-independent way of describing an algorithm using structured, readable statements."
    },
    {
      topic: "Compiler Interpreter",
      keys: ["compiler vs interpreter", "compiler", "interpreter"],
      answer: "A compiler translates source code into another form before execution, while an interpreter executes or translates code as the program runs."
    },
    {
      topic: "IDE",
      keys: ["ide", "integrated development environment"],
      answer: "An IDE combines programming tools such as a code editor, execution/translation facilities and debugging support."
    },
    {
      topic: "Programming Control Structures",
      keys: ["sequence selection repetition", "control structures", "selection repetition"],
      answer: "The three main control structures are sequence, selection and repetition. They can also be nested inside one another."
    },
    {
      topic: "Python Variables",
      keys: ["python variable", "variable constant"],
      answer: "A variable is a named value that can change while a program runs. A constant represents a value intended to remain unchanged."
    },
    {
      topic: "Python Functions",
      keys: ["python function", "function parameter return", "local global variable"],
      answer: "Functions group reusable code. They can accept parameters, use local variables and return values. Variables defined outside functions may have global scope."
    },
    {
      topic: "Python Structures",
      keys: ["python list tuple dictionary string", "list tuple dictionary"],
      answer: "The syllabus includes strings, lists, tuples and dictionaries as Python data structures."
    },
    {
      topic: "File Handling",
      keys: ["file handling", "open read write append close"],
      answer: "Basic file handling includes opening, reading, writing, appending and closing files."
    },
    {
      topic: "Sequential Search",
      keys: ["sequential search", "linear search"],
      answer: "Sequential search checks items one by one until the target is found or the data is exhausted."
    },
    {
      topic: "Bubble Sort",
      keys: ["bubble sort"],
      answer: "Bubble sort repeatedly compares adjacent items and swaps them when they are in the wrong order until the list is sorted."
    },

    // WEB DEVELOPMENT
    {
      topic: "HTML",
      keys: ["html", "what is html"],
      answer: "HTML is the markup language used to structure the content of web pages."
    },
    {
      topic: "HTML Structure",
      keys: ["html head body", "html document structure", "head title body"],
      answer: "A basic HTML document uses an html element as the document root, a head section for metadata such as the title, and a body section for visible page content."
    },
    {
      topic: "Hyperlink",
      keys: ["hyperlink", "link html", "anchor tag"],
      answer: "A hyperlink connects the user to another section, page or external resource. HTML commonly uses the anchor element for links."
    },
    {
      topic: "HTML Lists",
      keys: ["ordered list unordered list definition list", "html lists"],
      answer: "The syllabus covers ordered lists, unordered lists and definition lists."
    },
    {
      topic: "HTML Tables",
      keys: ["html table", "table tr th td"],
      answer: "HTML tables use table for the table, tr for rows, th for heading cells and td for data cells."
    },
    {
      topic: "CSS",
      keys: ["css", "what is css"],
      answer: "CSS controls the presentation and appearance of web pages, including layout, colors, fonts and other visual styling."
    },
    {
      topic: "CSS Selectors",
      keys: ["css selector", "element id class group selector"],
      answer: "The syllabus covers element, ID, class and group selectors in CSS."
    },
    {
      topic: "CSS Methods",
      keys: ["inline internal external css", "ways insert css"],
      answer: "CSS can be applied inline, internally in the HTML document, or externally using a separate stylesheet."
    },
    {
      topic: "Forms",
      keys: ["html form", "get post", "input radio checkbox select"],
      answer: "HTML forms collect user input. The syllabus includes text/password inputs, radio buttons, checkboxes, selection controls, submit/reset buttons and GET/POST methods."
    },
    {
      topic: "PHP MySQL",
      keys: ["php mysql", "dynamic web page"],
      answer: "The syllabus uses PHP with MySQL to create dynamic web pages that can save, retrieve and update database-backed data."
    },

    // IoT
    {
      topic: "IoT",
      keys: ["iot", "internet of things", "what is iot"],
      answer: "IoT, the Internet of Things, connects physical devices so they can sense, communicate and be controlled through networked applications."
    },
    {
      topic: "Arduino",
      keys: ["arduino", "arduino board"],
      answer: "Arduino is one example of a microprocessor development system used in the syllabus for building simple digital and IoT applications."
    },
    {
      topic: "Raspberry Pi",
      keys: ["raspberry pi"],
      answer: "Raspberry Pi is another development platform mentioned in the syllabus for digital-system and IoT learning."
    },
    {
      topic: "IoT Sensors",
      keys: ["ldr", "temperature sensor", "magnetic switch", "iot sensor"],
      answer: "The syllabus examples include an LDR for ambient light, a temperature sensor for fan control and a magnetic switch for door open/close detection."
    },

    // BUSINESS
    {
      topic: "E-commerce E-business",
      keys: ["ecommerce vs ebusiness", "e-commerce", "e-business"],
      answer: "E-commerce focuses on electronic commercial transactions, while e-business is broader and includes the use of ICT throughout business processes and operations."
    },
    {
      topic: "B2B B2C",
      keys: ["b2b b2c c2c c2b b2e g2c", "business transaction types"],
      answer: "The syllabus covers B2B, B2C, C2C, C2B, B2E and G2C electronic-business transaction types."
    },
    {
      topic: "Digital Economy",
      keys: ["digital economy", "reverse auction", "group purchasing", "e marketplace"],
      answer: "The digital economy uses ICT-enabled business methods. The syllabus includes reverse auctions, group purchasing and e-marketplaces."
    },
    {
      topic: "E-marketing",
      keys: ["e marketing", "e-marketing", "mobile marketing"],
      answer: "E-marketing uses ICT for marketing activities, including web advertising, customer databases and mobile marketing."
    },

    // FUTURE TRENDS
    {
      topic: "Artificial Intelligence",
      keys: ["artificial intelligence", "ai", "what is ai"],
      answer: "Artificial intelligence is the field of building computer systems that perform tasks associated with intelligent behaviour, such as reasoning, learning, recognition or decision support."
    },
    {
      topic: "Software Agents",
      keys: ["software agent", "multi agent", "multi-agent"],
      answer: "A software agent is a program that can act on behalf of a user or system. A multi-agent system contains multiple interacting agents."
    },
    {
      topic: "Quantum Computing",
      keys: ["quantum computing"],
      answer: "Quantum computing is a future computing model that uses quantum-mechanical principles. The A/L syllabus introduces its fundamentals and applications at a basic level."
    },
    {
      topic: "Nature Inspired Computing",
      keys: ["nature inspired computing", "biology inspired computing"],
      answer: "Nature-inspired and biology-inspired computing use ideas from natural or biological systems to design computational methods."
    }
  ];

  // ------------------------------------------------------
  // 2) UTILITY FUNCTIONS
  // ------------------------------------------------------
  const $ = (id) => document.getElementById(id);

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s+\-*/().]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function words(text) {
    return normalize(text).split(" ").filter(w => w.length > 1);
  }

  function similarity(a, b) {
    const A = new Set(words(a));
    const B = new Set(words(b));
    if (!A.size || !B.size) return 0;
    let common = 0;
    A.forEach(w => { if (B.has(w)) common++; });
    return common / Math.max(A.size, B.size);
  }

  function scoreEntry(query, entry) {
    const q = normalize(query);
    let score = 0;

    for (const key of entry.keys) {
      const k = normalize(key);
      if (q === k) score += 12;
      else if (q.includes(k)) score += 8;
      else if (k.includes(q) && q.length > 3) score += 4;
      score += similarity(q, k) * 5;
    }

    score += similarity(q, entry.topic) * 2;
    return score;
  }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    })[c]);
  }

  function simpleCalculator(query) {
    const q = normalize(query);
    const match = q.match(/(?:calculate|what is|solve)?\s*(-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?)/i);
    if (!match) return null;

    const expr = match[1].replace(/\s/g, "");
    if (!/^-?\d+(\.\d+)?[+\-*/]-?\d+(\.\d+)?$/.test(expr)) return null;

    const op = expr.match(/[+\-*/](?=-?\d)/)?.[0];
    const parts = expr.split(op);
    if (parts.length !== 2) return null;

    const a = Number(parts[0]);
    const b = Number(parts[1]);
    let result;
    if (op === "+") result = a + b;
    if (op === "-") result = a - b;
    if (op === "*") result = a * b;
    if (op === "/") result = b === 0 ? "undefined (division by zero)" : a / b;
    return `${expr} = ${result}`;
  }

  function findAnswer(query) {
    const q = normalize(query);
    if (!q) return "Type an ICT question and I'll try to help.";

    // Greetings
    if (/^(hi|hello|hey|hii|helo|good morning|good evening)\b/.test(q)) {
      return "Hey! 👋 I'm ICT Lab Offline AI. Ask me about A/L ICT, programming, databases, networking, Boolean logic, operating systems, web development or IoT.";
    }

    if (q.includes("who are you") || q.includes("what are you")) {
      return "I'm ICT Lab Offline AI — a local knowledge-base assistant running entirely in your browser. I don't need an API key or Internet connection.";
    }

    if (q.includes("offline") || q.includes("api key")) {
      return "I work from a local JavaScript knowledge base, so I don't send your question to an online AI service and I don't need an API key.";
    }

    const calc = simpleCalculator(query);
    if (calc) return calc;

    let best = null;
    let bestScore = 0;

    for (const entry of KNOWLEDGE) {
      const s = scoreEntry(query, entry);
      if (s > bestScore) {
        bestScore = s;
        best = entry;
      }
    }

    if (best && bestScore >= 2.25) {
      return best.answer;
    }

    return "I don't have a confident offline answer for that yet. Try using the main ICT term in your question, or teach me the topic by adding it to the KNOWLEDGE section in chatbot.js.";
  }

  // ------------------------------------------------------
  // 3) CHAT UI
  // ------------------------------------------------------
  function injectFixStyles() {
    if (document.getElementById("ictOfflineAiFixStyles")) return;

    const style = document.createElement("style");
    style.id = "ictOfflineAiFixStyles";
    style.textContent = `
      .ict-ai-wrapper{
        position:fixed !important;
        right:22px !important;
        bottom:22px !important;
        z-index:999990 !important;
        pointer-events:auto !important;
      }
      #ictAiButton{
        position:relative !important;
        z-index:999992 !important;
        pointer-events:auto !important;
        cursor:pointer !important;
      }
      #ictAiChat{
        z-index:999991 !important;
        pointer-events:auto !important;
      }
      #ictAiChat.ai-open,
      #ictAiChat.open,
      #ictAiChat.active{
        opacity:1 !important;
        visibility:visible !important;
        pointer-events:auto !important;
        transform:translateY(0) scale(1) !important;
      }
      #ictAiChat.ai-closed{
        opacity:0 !important;
        visibility:hidden !important;
        pointer-events:none !important;
      }
      #sendAiMessage,
      #closeAiChat,
      [data-ai-question]{
        cursor:pointer !important;
        pointer-events:auto !important;
      }
      .ai-message.user{
        justify-content:flex-end;
      }
      .ai-message.user .message-bubble{
        margin-left:auto;
      }
      .ict-ai-offline-badge{
        font-size:10px;
        opacity:.8;
        margin-left:6px;
      }
    `;
    document.head.appendChild(style);
  }

  function addMessage(role, text) {
    const box = $("aiMessages");
    if (!box) return;

    const item = document.createElement("div");
    item.className = `ai-message ${role}`;

    if (role === "user") {
      item.innerHTML = `
        <div class="message-bubble">
          <strong>You</strong>
          <p>${escapeHTML(text)}</p>
        </div>`;
    } else {
      item.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-bubble">
          <strong>ICT Lab AI <span class="ict-ai-offline-badge">OFFLINE</span></strong>
          <p>${escapeHTML(text).replace(/\n/g,"<br>")}</p>
        </div>`;
    }

    box.appendChild(item);
    box.scrollTop = box.scrollHeight;
    saveHistory();
  }

  function saveHistory() {
    const box = $("aiMessages");
    if (!box) return;
    try {
      localStorage.setItem("ictLabOfflineChat", box.innerHTML);
    } catch (_) {}
  }

  function restoreHistory() {
    const box = $("aiMessages");
    if (!box) return;
    try {
      const old = localStorage.getItem("ictLabOfflineChat");
      if (old) box.innerHTML = old;
    } catch (_) {}
  }

  function openChat() {
    const chat = $("ictAiChat");
    if (!chat) return;
    chat.classList.remove("ai-closed");
    chat.classList.add("ai-open");
    chat.style.display = "";
    setTimeout(() => $("aiInput")?.focus(), 50);
  }

  function closeChat() {
    const chat = $("ictAiChat");
    if (!chat) return;
    chat.classList.remove("ai-open","open","active");
    chat.classList.add("ai-closed");
  }

  function toggleChat() {
    const chat = $("ictAiChat");
    if (!chat) return;
    const isOpen = chat.classList.contains("ai-open") ||
                   chat.classList.contains("open") ||
                   chat.classList.contains("active");
    isOpen ? closeChat() : openChat();
  }

  function sendQuestion(text) {
    const input = $("aiInput");
    const q = String(text ?? input?.value ?? "").trim();
    if (!q) return;

    if (input) input.value = "";
    addMessage("user", q);

    // Small typing effect without network requests
    setTimeout(() => {
      addMessage("bot", findAnswer(q));
    }, 180);
  }

  function bind() {
    injectFixStyles();

    const button = $("ictAiButton");
    const chat = $("ictAiChat");
    const close = $("closeAiChat");
    const send = $("sendAiMessage");
    const input = $("aiInput");

    if (!button || !chat) {
      console.warn("ICT Lab Offline AI: chatbot HTML was not found on this page.");
      return;
    }

    // Avoid double binding
    if (button.dataset.offlineAiBound === "1") return;
    button.dataset.offlineAiBound = "1";

    // Force clickability
    button.style.pointerEvents = "auto";
    button.style.cursor = "pointer";

    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleChat();
    });

    close?.addEventListener("click", (e) => {
      e.preventDefault();
      closeChat();
    });

    send?.addEventListener("click", (e) => {
      e.preventDefault();
      sendQuestion();
    });

    input?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendQuestion();
      }
    });

    document.querySelectorAll("[data-ai-question]").forEach(btn => {
      btn.addEventListener("click", () => {
        const q = btn.dataset.aiQuestion || btn.textContent.trim();
        sendQuestion(q);
      });
    });

    // Start closed unless the HTML already intentionally says open
    if (!chat.classList.contains("ai-open") &&
        !chat.classList.contains("open") &&
        !chat.classList.contains("active")) {
      chat.classList.add("ai-closed");
    }

    restoreHistory();

    // Update status text to OFFLINE
    document.querySelectorAll(".ai-header-info span").forEach(el => {
      if (/online/i.test(el.textContent)) {
        el.innerHTML = "<i></i> Offline • Local ICT Assistant";
      }
    });
  }

  // ------------------------------------------------------
  // 4) PUBLIC "TRAINING" API
  // ------------------------------------------------------
  window.ICTLabAI = {
    ask: findAnswer,

    addKnowledge(topic, keywords, answer) {
      const keys = Array.isArray(keywords) ? keywords : [keywords];
      KNOWLEDGE.push({
        topic: String(topic || "Custom"),
        keys: keys.map(String),
        answer: String(answer || "")
      });
      return KNOWLEDGE.length;
    },

    getKnowledgeCount() {
      return KNOWLEDGE.length;
    },

    clearChat() {
      try { localStorage.removeItem("ictLabOfflineChat"); } catch (_) {}
      const box = $("aiMessages");
      if (box) box.innerHTML = "";
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }

  // Re-bind if another script dynamically rebuilds the chatbot HTML.
  window.addEventListener("load", () => setTimeout(bind, 100));
})();
