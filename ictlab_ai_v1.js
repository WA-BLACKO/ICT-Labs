/* ============================================================
   ICT LAB AI v1 — OFFLINE A/L ICT CHATBOT
   ------------------------------------------------------------
   No API key. No fetch(). No cloud AI.
   Syllabus scope: NIE Sri Lanka G.C.E. A/L ICT Grades 12–13.
   The engine does NOT store 1,000,000 duplicate Q&A strings.
   It uses intent + aliases + templates, allowing millions of
   possible question phrasings from a compact knowledge base.
   ============================================================ */

(() => {
"use strict";

const KNOWLEDGE = [
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "data",
    "aliases": [
      "raw data",
      "facts",
      "data lifecycle"
    ],
    "answer": "Data are raw facts or observations that have not yet been processed into meaningful information."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "information",
    "aliases": [
      "processed data",
      "valuable information"
    ],
    "answer": "Information is processed or organized data that has meaning and can support decisions."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "data life cycle",
    "aliases": [
      "data lifecycle",
      "life cycle of data"
    ],
    "answer": "The data life cycle describes the stages data passes through, including creation, management and removal of obsolete data."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "valuable information",
    "aliases": [
      "quality information",
      "characteristics of information"
    ],
    "answer": "Valuable information should be timely, accurate, presented in context, understandable and reduce uncertainty."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "big data",
    "aliases": [
      "large volumes of data",
      "bigdata"
    ],
    "answer": "Big data refers to data sets whose volume or complexity makes ordinary handling difficult and creates a need for suitable processing and analysis."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "input process output",
    "aliases": [
      "IPO",
      "input-process-output",
      "abstract model of information creation"
    ],
    "answer": "The input-process-output model describes information creation: input is supplied, processing transforms it, and output is produced."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "hardware",
    "aliases": [
      "computer hardware"
    ],
    "answer": "Hardware is the physical equipment of a computer system."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "software",
    "aliases": [
      "computer software"
    ],
    "answer": "Software is the set of programs and instructions used by a computer."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "proprietary software",
    "aliases": [
      "closed source software"
    ],
    "answer": "Proprietary software is controlled by an owner and used under the owner's licence terms."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "open source software",
    "aliases": [
      "open-source software",
      "OSS"
    ],
    "answer": "Open-source software makes its source code available under a licence that permits specified use, study and modification."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "data gathering",
    "aliases": [
      "data collection"
    ],
    "answer": "Data gathering is the collection of data before it is validated, processed, stored or output."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "data validation",
    "aliases": [
      "validation",
      "type check",
      "presence check",
      "range check"
    ],
    "answer": "Data validation checks whether input data satisfies defined rules such as type, presence and range checks."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "OMR",
    "aliases": [
      "optical mark recognition"
    ],
    "answer": "OMR detects marked positions on specially designed forms."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "OCR",
    "aliases": [
      "optical character recognition"
    ],
    "answer": "OCR converts images of printed or written characters into machine-readable text."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "MICR",
    "aliases": [
      "magnetic ink character recognition"
    ],
    "answer": "MICR reads characters printed with magnetic ink, commonly on banking documents."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "batch processing",
    "aliases": [
      "batch data processing"
    ],
    "answer": "Batch processing collects transactions or data and processes them together as a group."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "real-time processing",
    "aliases": [
      "real time processing"
    ],
    "answer": "Real-time processing handles data quickly enough for the system to respond as events occur."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "digital divide",
    "aliases": [
      "digital gap"
    ],
    "answer": "The digital divide is the gap between people or communities with effective access to ICT and those without it."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "phishing",
    "aliases": [
      "phish"
    ],
    "answer": "Phishing is a deceptive attempt to obtain sensitive information by pretending to be a trustworthy source."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "intellectual property",
    "aliases": [
      "copyright",
      "IP rights"
    ],
    "answer": "Intellectual property refers to creations that can receive legal protection, including software and other digital works."
  },
  {
    "unit": 1,
    "unitName": "Concept of ICT",
    "topic": "e-waste",
    "aliases": [
      "electronic waste"
    ],
    "answer": "E-waste is discarded electrical and electronic equipment; safe disposal and recycling help reduce environmental harm."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "computer generations",
    "aliases": [
      "generations of computers",
      "1G 2G 3G 4G"
    ],
    "answer": "Computer generations group stages in computing development according to major technologies and characteristics, from early electronic generations toward modern and future systems."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "analog computer",
    "aliases": [
      "analogue computer"
    ],
    "answer": "An analog computer works with continuously varying physical quantities or signals."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "digital computer",
    "aliases": [
      "digital computers"
    ],
    "answer": "A digital computer represents and processes information using discrete values, typically binary states."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "general purpose computer",
    "aliases": [
      "general-purpose computer"
    ],
    "answer": "A general-purpose computer can perform many different kinds of tasks by running different programs."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "special purpose computer",
    "aliases": [
      "special-purpose computer"
    ],
    "answer": "A special-purpose computer is designed mainly for a particular task or limited set of tasks."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "input device",
    "aliases": [
      "input devices"
    ],
    "answer": "An input device sends data or control signals into a computer system."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "output device",
    "aliases": [
      "output devices"
    ],
    "answer": "An output device presents or produces results from a computer system."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "direct entry",
    "aliases": [
      "direct entry input"
    ],
    "answer": "Direct-entry devices capture data with less manual keyboard typing, which can reduce input time and transcription errors."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "storage device",
    "aliases": [
      "storage devices"
    ],
    "answer": "A storage device keeps data and programs for later use."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "parallel computing",
    "aliases": [
      "parallel processing"
    ],
    "answer": "Parallel computing divides work so multiple processing resources can perform operations at the same time."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "grid computing",
    "aliases": [
      "computational grid"
    ],
    "answer": "Grid computing combines distributed computing resources to work on tasks cooperatively."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "Von Neumann architecture",
    "aliases": [
      "von-neumann",
      "von neumann",
      "stored program architecture"
    ],
    "answer": "Von Neumann architecture is based on the stored-program concept and includes input, output, memory, a control unit and an ALU connected by buses."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "stored program concept",
    "aliases": [
      "stored-program concept"
    ],
    "answer": "The stored-program concept keeps program instructions in memory so the processor can fetch and execute them."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "fetch execute cycle",
    "aliases": [
      "fetch-execute cycle",
      "instruction cycle"
    ],
    "answer": "The fetch-execute cycle is the repeated process in which the CPU fetches an instruction, interprets it and carries out the required operation."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "ALU",
    "aliases": [
      "arithmetic logic unit",
      "arithmetic and logic unit"
    ],
    "answer": "The Arithmetic and Logic Unit performs arithmetic calculations and logical operations."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "control unit",
    "aliases": [
      "CU"
    ],
    "answer": "The control unit coordinates processor operations and controls the execution of instructions."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "register",
    "aliases": [
      "CPU register",
      "registers"
    ],
    "answer": "A register is a very small, very fast storage location inside the CPU used during processing."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "data bus",
    "aliases": [
      "data buses"
    ],
    "answer": "A data bus carries data between computer components."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "control bus",
    "aliases": [
      "control buses"
    ],
    "answer": "A control bus carries control and timing signals between components."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "multi-core processor",
    "aliases": [
      "multicore processor"
    ],
    "answer": "A multi-core processor contains more than one processing core so work can be handled concurrently."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "memory hierarchy",
    "aliases": [
      "memory hierarchy diagram"
    ],
    "answer": "Memory hierarchy organizes storage levels with different trade-offs in speed, capacity and cost."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "volatile memory",
    "aliases": [
      "volatile storage"
    ],
    "answer": "Volatile memory requires power to retain its contents."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "non-volatile memory",
    "aliases": [
      "nonvolatile memory"
    ],
    "answer": "Non-volatile memory retains stored data without continuous power."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "RAM",
    "aliases": [
      "random access memory",
      "main memory"
    ],
    "answer": "RAM is volatile main memory used to hold programs and data currently being used."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "SRAM",
    "aliases": [
      "static RAM",
      "static random access memory"
    ],
    "answer": "SRAM is a type of RAM that stores bits using electronic circuits and is commonly associated with high-speed memory such as cache."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "DRAM",
    "aliases": [
      "dynamic RAM",
      "dynamic random access memory"
    ],
    "answer": "DRAM is a type of RAM that stores bits in cells that require periodic refreshing."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "SDRAM",
    "aliases": [
      "synchronous DRAM"
    ],
    "answer": "SDRAM is DRAM synchronized with the system clock."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "ROM",
    "aliases": [
      "read only memory",
      "read-only memory"
    ],
    "answer": "ROM is non-volatile memory used to retain data without power."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "PROM",
    "aliases": [
      "programmable ROM"
    ],
    "answer": "PROM is programmable read-only memory that can be programmed after manufacture."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "EPROM",
    "aliases": [
      "erasable programmable ROM"
    ],
    "answer": "EPROM is erasable programmable read-only memory that can be erased and programmed again using the appropriate method."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "EEPROM",
    "aliases": [
      "electrically erasable programmable ROM"
    ],
    "answer": "EEPROM is electrically erasable programmable read-only memory that can be erased and rewritten electrically."
  },
  {
    "unit": 2,
    "unitName": "Introduction to Computer",
    "topic": "cache memory",
    "aliases": [
      "CPU cache",
      "cache"
    ],
    "answer": "Cache is small, fast memory used to keep frequently needed data or instructions close to the CPU."
  },
  {
    "unit": 3,
    "unitName": "Data Representation",
    "topic": "binary number system",
    "aliases": [
      "binary",
      "base 2",
      "base-2"
    ],
    "answer": "Binary is a base-2 number system using the digits 0 and 1."
  },
  {
    "unit": 3,
    "unitName": "Data Representation",
    "topic": "octal number system",
    "aliases": [
      "octal",
      "base 8",
      "base-8"
    ],
    "answer": "Octal is a base-8 number system using digits 0 through 7."
  },
  {
    "unit": 3,
    "unitName": "Data Representation",
    "topic": "hexadecimal number system",
    "aliases": [
      "hexadecimal",
      "hex",
      "base 16",
      "base-16"
    ],
    "answer": "Hexadecimal is a base-16 number system using digits 0-9 and A-F."
  },
  {
    "unit": 3,
    "unitName": "Data Representation",
    "topic": "signed magnitude",
    "aliases": [
      "signed magnitude representation"
    ],
    "answer": "Signed-magnitude representation uses a sign bit together with bits representing the magnitude."
  },
  {
    "unit": 3,
    "unitName": "Data Representation",
    "topic": "one's complement",
    "aliases": [
      "ones complement",
      "1s complement",
      "1's complement"
    ],
    "answer": "One's complement forms a negative binary representation by inverting each bit of the positive form."
  },
  {
    "unit": 3,
    "unitName": "Data Representation",
    "topic": "two's complement",
    "aliases": [
      "twos complement",
      "2s complement",
      "2's complement"
    ],
    "answer": "Two's complement forms a negative binary representation by inverting the bits and adding one."
  },
  {
    "unit": 3,
    "unitName": "Data Representation",
    "topic": "BCD",
    "aliases": [
      "binary coded decimal",
      "binary-coded decimal"
    ],
    "answer": "BCD represents decimal digits separately using binary-coded patterns."
  },
  {
    "unit": 3,
    "unitName": "Data Representation",
    "topic": "EBCDIC",
    "aliases": [
      "extended binary coded decimal interchange code"
    ],
    "answer": "EBCDIC is a character encoding scheme used historically on IBM systems."
  },
  {
    "unit": 3,
    "unitName": "Data Representation",
    "topic": "ASCII",
    "aliases": [
      "american standard code for information interchange"
    ],
    "answer": "ASCII is a character encoding standard that assigns numeric codes to letters, digits, control characters and symbols."
  },
  {
    "unit": 3,
    "unitName": "Data Representation",
    "topic": "Unicode",
    "aliases": [
      "unicode encoding"
    ],
    "answer": "Unicode is a character encoding standard designed to represent characters from many writing systems."
  },
  {
    "unit": 3,
    "unitName": "Data Representation",
    "topic": "binary addition",
    "aliases": [
      "add binary",
      "binary arithmetic addition"
    ],
    "answer": "Binary addition follows base-2 arithmetic, including carries when a column total reaches two."
  },
  {
    "unit": 3,
    "unitName": "Data Representation",
    "topic": "binary subtraction",
    "aliases": [
      "subtract binary",
      "binary arithmetic subtraction"
    ],
    "answer": "Binary subtraction follows base-2 arithmetic and may require borrowing from a higher bit position."
  },
  {
    "unit": 3,
    "unitName": "Data Representation",
    "topic": "bitwise operation",
    "aliases": [
      "bitwise",
      "bitwise logical operation"
    ],
    "answer": "A bitwise operation applies a logical operation independently to corresponding bits."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "NOT gate",
    "aliases": [
      "inverter",
      "not logic gate"
    ],
    "answer": "A NOT gate outputs the opposite logical value of its input."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "AND gate",
    "aliases": [
      "and logic gate"
    ],
    "answer": "An AND gate outputs 1 only when all of its required inputs are 1."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "OR gate",
    "aliases": [
      "or logic gate"
    ],
    "answer": "An OR gate outputs 1 when at least one input is 1."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "XOR gate",
    "aliases": [
      "exclusive OR",
      "exclusive-or",
      "xor logic gate"
    ],
    "answer": "An XOR gate outputs 1 when its inputs differ for the common two-input case."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "NAND gate",
    "aliases": [
      "nand logic gate"
    ],
    "answer": "A NAND gate is an AND operation followed by NOT. NAND is a universal gate."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "NOR gate",
    "aliases": [
      "nor logic gate"
    ],
    "answer": "A NOR gate is an OR operation followed by NOT. NOR is a universal gate."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "XNOR gate",
    "aliases": [
      "exclusive NOR",
      "xnor logic gate"
    ],
    "answer": "An XNOR gate is the complement of XOR and outputs 1 when its two inputs are equal."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "universal gate",
    "aliases": [
      "universal gates"
    ],
    "answer": "A universal gate can be used to construct the functions of other logic gates. NAND and NOR are universal gates."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "truth table",
    "aliases": [
      "logic truth table"
    ],
    "answer": "A truth table lists every relevant combination of logical inputs and the corresponding output."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "Boolean algebra",
    "aliases": [
      "boolean logic",
      "two state logic"
    ],
    "answer": "Boolean algebra is an algebra of two-state logical values used to represent and simplify logic expressions."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "De Morgan's laws",
    "aliases": [
      "de morgans law",
      "de morgan law",
      "de morgan's theorem"
    ],
    "answer": "De Morgan's laws describe how negation distributes across AND and OR operations."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "SOP",
    "aliases": [
      "sum of products"
    ],
    "answer": "Sum of Products is a Boolean expression formed by OR-ing product terms."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "POS",
    "aliases": [
      "product of sums"
    ],
    "answer": "Product of Sums is a Boolean expression formed by AND-ing sum terms."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "Karnaugh map",
    "aliases": [
      "K-map",
      "K map",
      "kmap"
    ],
    "answer": "A Karnaugh map is a visual technique for simplifying Boolean expressions by grouping adjacent cells."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "half adder",
    "aliases": [
      "half-adder"
    ],
    "answer": "A half adder adds two binary input bits and produces a sum and a carry."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "full adder",
    "aliases": [
      "full-adder"
    ],
    "answer": "A full adder adds two input bits and a carry-in, producing a sum and carry-out."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "flip-flop",
    "aliases": [
      "flip flop",
      "flipflop"
    ],
    "answer": "A flip-flop is a bistable digital circuit that can store a bit of state."
  },
  {
    "unit": 4,
    "unitName": "Fundamental of Digital Circuits",
    "topic": "feedback loop",
    "aliases": [
      "feedback in digital circuits"
    ],
    "answer": "A feedback loop sends part of a circuit's output back into its input and can help create state-holding behavior."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "operating system",
    "aliases": [
      "OS",
      "computer operating system"
    ],
    "answer": "An operating system manages computer resources and provides services and interfaces for users and applications."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "single-user single-task OS",
    "aliases": [
      "single user single task"
    ],
    "answer": "A single-user single-task operating system supports one user performing one main task at a time."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "single-user multitasking OS",
    "aliases": [
      "single user multi task",
      "single user multitask"
    ],
    "answer": "A single-user multitasking operating system allows one user to run multiple tasks or applications."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "multi-user multitasking OS",
    "aliases": [
      "multi user multi task",
      "multiuser multitasking"
    ],
    "answer": "A multi-user multitasking operating system supports multiple users and multiple tasks."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "real-time operating system",
    "aliases": [
      "RTOS",
      "real time OS"
    ],
    "answer": "A real-time operating system is designed to respond to events within defined timing constraints."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "time sharing",
    "aliases": [
      "time-sharing"
    ],
    "answer": "Time sharing allocates processor time among multiple tasks or users so they can make progress interactively."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "file system",
    "aliases": [
      "filesystem"
    ],
    "answer": "A file system organizes and manages files and directories on storage."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "FAT",
    "aliases": [
      "file allocation table"
    ],
    "answer": "FAT is a family of file systems based on a File Allocation Table."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "file security",
    "aliases": [
      "file permissions",
      "access privileges"
    ],
    "answer": "File security uses controls such as passwords and access privileges to restrict access."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "contiguous allocation",
    "aliases": [
      "contiguous file allocation"
    ],
    "answer": "Contiguous allocation stores a file in consecutive storage blocks."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "linked allocation",
    "aliases": [
      "linked file allocation"
    ],
    "answer": "Linked allocation stores file blocks that point to the next block in the file."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "indexed allocation",
    "aliases": [
      "indexed file allocation"
    ],
    "answer": "Indexed allocation uses an index structure to keep references to a file's storage blocks."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "defragmentation",
    "aliases": [
      "disk defragmentation"
    ],
    "answer": "Defragmentation reorganizes fragmented file data so related blocks are placed more efficiently."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "disk formatting",
    "aliases": [
      "formatting disk"
    ],
    "answer": "Disk formatting prepares storage for use with a file system."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "process",
    "aliases": [
      "computer process",
      "OS process"
    ],
    "answer": "A process is a program in execution together with the state and resources needed for its execution."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "interrupt",
    "aliases": [
      "interrupt handling"
    ],
    "answer": "An interrupt is a signal or event that causes the processor to temporarily handle another condition or service."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "process state",
    "aliases": [
      "process states"
    ],
    "answer": "A process state describes the current condition of a process within the operating system's process-management model."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "PCB",
    "aliases": [
      "process control block"
    ],
    "answer": "A Process Control Block stores information the operating system needs to manage a process."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "context switch",
    "aliases": [
      "context switching"
    ],
    "answer": "A context switch saves the state of one process or task and restores another so execution can change between them."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "process scheduler",
    "aliases": [
      "scheduler",
      "process schedulers"
    ],
    "answer": "A process scheduler selects or controls which processes are admitted, suspended or given CPU time."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "long-term scheduler",
    "aliases": [
      "long term scheduler"
    ],
    "answer": "A long-term scheduler helps decide which jobs or processes are admitted into the system for execution."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "short-term scheduler",
    "aliases": [
      "short term scheduler",
      "CPU scheduler"
    ],
    "answer": "A short-term scheduler selects which ready process should receive CPU time next."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "medium-term scheduler",
    "aliases": [
      "medium term scheduler"
    ],
    "answer": "A medium-term scheduler can suspend and later resume processes to help manage the process mix and memory pressure."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "turnaround time",
    "aliases": [
      "turn around time"
    ],
    "answer": "Turnaround time is the total time from submission or arrival of a job/process until its completion."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "response time",
    "aliases": [
      "process response time"
    ],
    "answer": "Response time measures how long it takes before a system or process begins to respond after a request."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "waiting time",
    "aliases": [
      "process waiting time"
    ],
    "answer": "Waiting time is the time a process spends waiting rather than executing."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "MMU",
    "aliases": [
      "memory management unit"
    ],
    "answer": "The Memory Management Unit supports address translation and memory-management operations between logical/virtual and physical memory."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "virtual memory",
    "aliases": [
      "virtual-memory"
    ],
    "answer": "Virtual memory lets a system use secondary storage to extend the apparent memory available to processes."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "paging",
    "aliases": [
      "memory paging"
    ],
    "answer": "Paging divides memory/address spaces into fixed-size units to support memory management and mapping."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "device driver",
    "aliases": [
      "driver",
      "device drivers"
    ],
    "answer": "A device driver is software that lets the operating system communicate with and control a hardware device."
  },
  {
    "unit": 5,
    "unitName": "Computer Operating System",
    "topic": "spooling",
    "aliases": [
      "spool",
      "spooler"
    ],
    "answer": "Spooling temporarily queues data or jobs for a device so the CPU and slower peripherals can operate more independently."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "analog signal",
    "aliases": [
      "analogue signal"
    ],
    "answer": "An analog signal varies continuously over a range of values."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "digital signal",
    "aliases": [
      "digital signals"
    ],
    "answer": "A digital signal uses discrete signal levels or states."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "amplitude",
    "aliases": [
      "signal amplitude"
    ],
    "answer": "Amplitude describes the magnitude or strength of a signal."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "frequency",
    "aliases": [
      "signal frequency"
    ],
    "answer": "Frequency is the number of signal cycles occurring per unit time, commonly measured in hertz."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "wavelength",
    "aliases": [
      "wave length"
    ],
    "answer": "Wavelength is the distance associated with one complete cycle of a wave."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "phase",
    "aliases": [
      "signal phase"
    ],
    "answer": "Phase describes a signal's position within its repeating cycle relative to a reference."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "guided media",
    "aliases": [
      "wired media",
      "guided transmission"
    ],
    "answer": "Guided transmission media carry signals through a physical path such as twisted pair, coaxial cable or fibre."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "unguided media",
    "aliases": [
      "wireless media",
      "free space transmission"
    ],
    "answer": "Unguided transmission sends signals through free space instead of a physical cable."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "twisted pair",
    "aliases": [
      "twisted-pair"
    ],
    "answer": "Twisted-pair cable uses pairs of insulated wires twisted together to carry signals."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "coaxial cable",
    "aliases": [
      "coax"
    ],
    "answer": "Coaxial cable uses a central conductor surrounded by insulation and shielding."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "fiber optic",
    "aliases": [
      "fibre optic",
      "fiber optics",
      "fibre optics"
    ],
    "answer": "Fiber-optic cable carries information using light through optical fibres."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "latency",
    "aliases": [
      "network latency"
    ],
    "answer": "Latency is the delay experienced while data or a signal travels through a system or network."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "bandwidth",
    "aliases": [
      "network bandwidth"
    ],
    "answer": "Bandwidth describes the capacity or range available for transmitting information."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "noise",
    "aliases": [
      "signal noise"
    ],
    "answer": "Noise is unwanted signal energy that can interfere with transmitted information."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "attenuation",
    "aliases": [
      "signal attenuation"
    ],
    "answer": "Attenuation is the reduction in signal strength as it travels through a medium."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "distortion",
    "aliases": [
      "signal distortion"
    ],
    "answer": "Distortion is an unwanted change in the shape or characteristics of a signal."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "protocol",
    "aliases": [
      "network protocol"
    ],
    "answer": "A protocol is an agreed set of rules used by communicating devices."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "Manchester encoding",
    "aliases": [
      "manchester code"
    ],
    "answer": "Manchester encoding represents bits using transitions within each bit interval and supports synchronization."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "parity bit",
    "aliases": [
      "parity",
      "parity checking"
    ],
    "answer": "A parity bit adds simple redundancy so some bit errors can be detected."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "PSTN",
    "aliases": [
      "public switched telephone network"
    ],
    "answer": "The Public Switched Telephone Network is a telephone network traditionally designed to carry analog voice communications."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "modulation",
    "aliases": [
      "modulate"
    ],
    "answer": "Modulation changes a carrier signal according to information that needs to be transmitted."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "demodulation",
    "aliases": [
      "demodulate"
    ],
    "answer": "Demodulation recovers information from a modulated signal."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "modem",
    "aliases": [
      "modulator demodulator"
    ],
    "answer": "A modem performs modulation and demodulation so data can be carried over suitable communication links."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "bus topology",
    "aliases": [
      "bus network"
    ],
    "answer": "In bus topology, devices share a common communication medium."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "star topology",
    "aliases": [
      "star network"
    ],
    "answer": "In star topology, devices connect to a central networking device."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "ring topology",
    "aliases": [
      "ring network"
    ],
    "answer": "In ring topology, devices are connected in a ring-like path."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "mesh topology",
    "aliases": [
      "mesh network"
    ],
    "answer": "In mesh topology, devices have multiple interconnections, potentially including many direct paths."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "hub",
    "aliases": [
      "network hub"
    ],
    "answer": "A hub is a basic LAN device that repeats incoming signals/data to connected ports."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "switch",
    "aliases": [
      "network switch"
    ],
    "answer": "A network switch forwards frames between LAN ports using addressing information."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "LAN",
    "aliases": [
      "local area network"
    ],
    "answer": "A Local Area Network connects devices within a limited geographic area."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "MAC address",
    "aliases": [
      "media access control address"
    ],
    "answer": "A MAC address identifies a network interface at the local data-link level."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "frame",
    "aliases": [
      "network frame"
    ],
    "answer": "A frame is a data-link-layer unit used for local network transmission."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "ALOHA",
    "aliases": [
      "aloha protocol"
    ],
    "answer": "ALOHA is a simple shared-medium access approach that influenced later MAC methods."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "Ethernet",
    "aliases": [
      "ethernet LAN"
    ],
    "answer": "Ethernet is a widely used LAN technology with standardized framing and media-access behavior."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "gateway",
    "aliases": [
      "network gateway"
    ],
    "answer": "A gateway connects networks and enables communication between them at appropriate protocol boundaries."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "IPv4",
    "aliases": [
      "internet protocol version 4",
      "IPv4 address"
    ],
    "answer": "IPv4 is an Internet addressing protocol that uses 32-bit IP addresses."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "subnet",
    "aliases": [
      "subnetwork"
    ],
    "answer": "A subnet is a logical subdivision of an IP network."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "subnet mask",
    "aliases": [
      "netmask"
    ],
    "answer": "A subnet mask indicates which bits of an IPv4 address represent the network/subnet portion."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "CIDR",
    "aliases": [
      "classless inter-domain routing",
      "CIDR notation"
    ],
    "answer": "CIDR notation writes an IP address or network with a prefix length such as /24."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "private IP address",
    "aliases": [
      "private IP",
      "private address"
    ],
    "answer": "Private IPv4 address ranges are intended for use inside private networks rather than direct global Internet routing."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "DHCP",
    "aliases": [
      "dynamic host configuration protocol"
    ],
    "answer": "DHCP can automatically provide IP configuration information to hosts on a network."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "IPv6",
    "aliases": [
      "internet protocol version 6"
    ],
    "answer": "IPv6 is a newer Internet Protocol version with a much larger address space than IPv4."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "router",
    "aliases": [
      "network router"
    ],
    "answer": "A router forwards packets between networks and helps choose paths toward destinations."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "packet switching",
    "aliases": [
      "packet-switched network"
    ],
    "answer": "Packet switching divides data into packets that are forwarded through a network."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "best effort delivery",
    "aliases": [
      "best effort"
    ],
    "answer": "Best-effort delivery means the IP layer attempts delivery without guaranteeing arrival, order or timing."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "port number",
    "aliases": [
      "network port",
      "TCP port",
      "UDP port"
    ],
    "answer": "A port number identifies an application or process endpoint on a host for transport-layer communication."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "multiplexing",
    "aliases": [
      "network multiplexing"
    ],
    "answer": "Transport-layer multiplexing allows multiple application communications to share the same host/network interface while remaining distinguishable."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "UDP",
    "aliases": [
      "user datagram protocol"
    ],
    "answer": "UDP is a connectionless transport protocol with low overhead and no built-in guarantee of reliable ordered delivery."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "TCP",
    "aliases": [
      "transmission control protocol"
    ],
    "answer": "TCP is a connection-oriented transport protocol designed to provide reliable, ordered byte-stream delivery."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "DNS",
    "aliases": [
      "domain name system"
    ],
    "answer": "DNS maps human-friendly domain names to information such as IP addresses using a hierarchical distributed naming system."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "HTTP",
    "aliases": [
      "hypertext transfer protocol"
    ],
    "answer": "HTTP is an application-layer protocol used for communication between web clients and servers."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "client-server model",
    "aliases": [
      "client server"
    ],
    "answer": "In the client-server model, clients request services or resources and servers provide them."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "TCP/IP model",
    "aliases": [
      "TCP IP model"
    ],
    "answer": "The TCP/IP model describes networking in layers including application, transport, internet and host-to-network."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "OSI model",
    "aliases": [
      "open systems interconnection model",
      "OSI layers"
    ],
    "answer": "The OSI model describes networking using seven layers: application, presentation, session, transport, network, data link and physical."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "encryption",
    "aliases": [
      "data encryption"
    ],
    "answer": "Encryption transforms readable data into a protected form so unauthorized parties cannot easily understand it."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "digital signature",
    "aliases": [
      "digital signing"
    ],
    "answer": "A digital signature provides a way to verify message origin/integrity using public-key cryptographic techniques."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "public key",
    "aliases": [
      "public-key"
    ],
    "answer": "A public key is the openly shareable key in an asymmetric cryptographic key pair."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "private key",
    "aliases": [
      "private-key"
    ],
    "answer": "A private key is the secret key in an asymmetric cryptographic key pair and must be protected."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "firewall",
    "aliases": [
      "network firewall"
    ],
    "answer": "A firewall controls network traffic according to security rules."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "antivirus",
    "aliases": [
      "anti-virus"
    ],
    "answer": "Antivirus software helps detect, block or remove malicious software."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "ISP",
    "aliases": [
      "internet service provider"
    ],
    "answer": "An Internet Service Provider supplies connectivity and related Internet services."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "DSL",
    "aliases": [
      "digital subscriber line"
    ],
    "answer": "DSL is a family of technologies that provides digital data communication over telephone-line infrastructure."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "ADSL",
    "aliases": [
      "asymmetric digital subscriber line"
    ],
    "answer": "ADSL is an asymmetric DSL technology in which downstream and upstream capacities are not equal."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "NAT",
    "aliases": [
      "network address translation"
    ],
    "answer": "Network Address Translation translates address information between networks, commonly allowing private-addressed devices to share public connectivity."
  },
  {
    "unit": 6,
    "unitName": "Data Communication and Networking",
    "topic": "proxy",
    "aliases": [
      "proxy server"
    ],
    "answer": "A proxy acts as an intermediary for network requests between clients and other systems."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "system",
    "aliases": [
      "system concept"
    ],
    "answer": "A system is a set of interrelated components working together toward an objective."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "open system",
    "aliases": [
      "open systems"
    ],
    "answer": "An open system interacts with its environment."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "closed system",
    "aliases": [
      "closed systems"
    ],
    "answer": "A closed system is modeled as having little or no interaction with its environment."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "OAS",
    "aliases": [
      "office automation system"
    ],
    "answer": "An Office Automation System supports office activities such as document handling, communication and routine productivity work."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "TPS",
    "aliases": [
      "transaction processing system"
    ],
    "answer": "A Transaction Processing System records and processes routine business transactions."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "MIS",
    "aliases": [
      "management information system"
    ],
    "answer": "A Management Information System provides organized information that supports management activities."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "DSS",
    "aliases": [
      "decision support system"
    ],
    "answer": "A Decision Support System helps users analyze information and alternatives for decision making."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "ESS",
    "aliases": [
      "executive support system"
    ],
    "answer": "An Executive Support System provides high-level information to support senior management decisions."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "GIS",
    "aliases": [
      "geographical information system",
      "geographic information system"
    ],
    "answer": "A Geographic Information System manages and analyzes information linked to geographic locations."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "KMS",
    "aliases": [
      "knowledge management system"
    ],
    "answer": "A Knowledge Management System supports capturing, organizing, sharing and using organizational knowledge."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "CMS",
    "aliases": [
      "content management system"
    ],
    "answer": "A Content Management System helps create, manage and publish digital content."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "ERP",
    "aliases": [
      "ERPS",
      "enterprise resource planning"
    ],
    "answer": "An Enterprise Resource Planning system integrates major organizational processes and data across functions."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "waterfall model",
    "aliases": [
      "waterfall SDLC"
    ],
    "answer": "The Waterfall model develops a system through planned sequential stages."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "spiral model",
    "aliases": [
      "spiral SDLC"
    ],
    "answer": "The Spiral model develops a system iteratively with repeated cycles and strong attention to risk."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "agile",
    "aliases": [
      "agile model",
      "agile development"
    ],
    "answer": "Agile development uses iterative, incremental work and frequent feedback to adapt to change."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "prototyping",
    "aliases": [
      "prototype model"
    ],
    "answer": "Prototyping creates an early model of a system so requirements and design ideas can be explored and refined."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "RAD",
    "aliases": [
      "rapid application development"
    ],
    "answer": "Rapid Application Development emphasizes fast development, prototyping and user feedback."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "structured methodology",
    "aliases": [
      "structured systems development"
    ],
    "answer": "A structured methodology analyzes and designs systems using structured models and techniques."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "object-oriented methodology",
    "aliases": [
      "object oriented methodology",
      "OO methodology"
    ],
    "answer": "Object-oriented methodology models a system around interacting objects that combine data and behavior."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "SSADM",
    "aliases": [
      "structured systems analysis and design methodology"
    ],
    "answer": "SSADM stands for Structured Systems Analysis and Design Methodology, a structured approach to analyzing and designing information systems."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "preliminary investigation",
    "aliases": [
      "initial investigation"
    ],
    "answer": "A preliminary investigation identifies problems, considers alternative solutions and helps prioritize information-system needs."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "feasibility study",
    "aliases": [
      "feasibility analysis"
    ],
    "answer": "A feasibility study evaluates whether a proposed system is practical from perspectives such as technical, economic, operational and organizational feasibility."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "technical feasibility",
    "aliases": [
      "technical feasibility study"
    ],
    "answer": "Technical feasibility asks whether required technology, skills and technical resources can support the proposed system."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "economic feasibility",
    "aliases": [
      "financial feasibility"
    ],
    "answer": "Economic feasibility considers whether expected benefits justify relevant costs."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "operational feasibility",
    "aliases": [
      "operational feasibility study"
    ],
    "answer": "Operational feasibility considers whether the proposed system can work effectively within real organizational operations."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "organizational feasibility",
    "aliases": [
      "organisation feasibility"
    ],
    "answer": "Organizational feasibility considers how well a proposed system fits the organization and its people, structure and practices."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "functional requirement",
    "aliases": [
      "functional requirements"
    ],
    "answer": "A functional requirement specifies what a system must do."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "non-functional requirement",
    "aliases": [
      "non functional requirement",
      "nonfunctional requirement"
    ],
    "answer": "A non-functional requirement specifies qualities or constraints such as performance, security or usability rather than a specific function."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "DFD",
    "aliases": [
      "data flow diagram"
    ],
    "answer": "A Data Flow Diagram models how data moves between processes, data stores and external entities."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "EPD",
    "aliases": [
      "elementary process description"
    ],
    "answer": "An Elementary Process Description documents the detailed logic or behavior of an elementary process."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "document flow diagram",
    "aliases": [
      "document flow"
    ],
    "answer": "A document flow diagram shows how documents move through activities or parts of a system."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "LDM",
    "aliases": [
      "logical data modeling"
    ],
    "answer": "Logical Data Modeling represents the logical organization and relationships of data independently of physical implementation."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "LDS",
    "aliases": [
      "logical data structure"
    ],
    "answer": "A Logical Data Structure models logical data entities and their relationships."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "BSO",
    "aliases": [
      "business system option"
    ],
    "answer": "A Business System Option is a possible way of organizing or implementing the business system so alternatives can be evaluated."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "data dictionary",
    "aliases": [
      "data dictionaries"
    ],
    "answer": "A data dictionary records definitions and properties of data items used in a system."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "white-box testing",
    "aliases": [
      "white box testing"
    ],
    "answer": "White-box testing designs tests with knowledge of the system's internal code or logic."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "black-box testing",
    "aliases": [
      "black box testing"
    ],
    "answer": "Black-box testing checks externally visible behavior without relying on internal implementation details."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "unit testing",
    "aliases": [
      "unit test"
    ],
    "answer": "Unit testing tests individual program units or components."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "integration testing",
    "aliases": [
      "integrated testing",
      "integration test"
    ],
    "answer": "Integration testing checks whether combined components work correctly together."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "system testing",
    "aliases": [
      "system test"
    ],
    "answer": "System testing evaluates the complete integrated system against requirements."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "acceptance testing",
    "aliases": [
      "acceptance test"
    ],
    "answer": "Acceptance testing checks whether the system is acceptable for intended users or stakeholders."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "parallel deployment",
    "aliases": [
      "parallel conversion"
    ],
    "answer": "Parallel deployment runs the old and new systems together for a period."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "direct deployment",
    "aliases": [
      "direct conversion",
      "direct changeover"
    ],
    "answer": "Direct deployment replaces the old system with the new one at a chosen point."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "pilot deployment",
    "aliases": [
      "pilot conversion"
    ],
    "answer": "Pilot deployment introduces the new system first in a limited part of the organization."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "phased deployment",
    "aliases": [
      "phase deployment",
      "phased conversion"
    ],
    "answer": "Phased deployment introduces the new system gradually in stages."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "off-the-shelf package",
    "aliases": [
      "off the shelf software",
      "packaged solution"
    ],
    "answer": "An off-the-shelf package is prebuilt software intended for general or standard business needs rather than being created entirely for one organization."
  },
  {
    "unit": 7,
    "unitName": "System Analysis and Design",
    "topic": "business process reengineering",
    "aliases": [
      "BPR",
      "business process re-engineering"
    ],
    "answer": "Business process reengineering is the fundamental redesign of business processes to achieve major improvements."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "database",
    "aliases": [
      "data base"
    ],
    "answer": "A database is an organized collection of related data intended for efficient storage, retrieval and management."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "structured data",
    "aliases": [
      "structured information"
    ],
    "answer": "Structured data follows a defined organization or schema."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "unstructured data",
    "aliases": [
      "unstructured information"
    ],
    "answer": "Unstructured data does not follow a rigid predefined tabular schema."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "flat file database",
    "aliases": [
      "flat file system"
    ],
    "answer": "A flat-file system stores data in a simple file structure rather than a set of related tables."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "hierarchical database model",
    "aliases": [
      "hierarchical model"
    ],
    "answer": "The hierarchical database model organizes records in a tree-like parent-child structure."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "network database model",
    "aliases": [
      "network model database"
    ],
    "answer": "The network database model represents records with more flexible linked relationships than a strict hierarchy."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "relational database model",
    "aliases": [
      "relational model",
      "RDBMS model"
    ],
    "answer": "The relational model organizes data into relations, commonly represented as tables."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "object-relational model",
    "aliases": [
      "object relational model"
    ],
    "answer": "The object-relational model extends relational databases with object-oriented concepts or richer data types."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "relation",
    "aliases": [
      "database relation",
      "table"
    ],
    "answer": "A relation in the relational model is commonly represented as a table."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "attribute",
    "aliases": [
      "database attribute",
      "column"
    ],
    "answer": "An attribute is a named property or column in a relation."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "tuple",
    "aliases": [
      "database tuple",
      "row"
    ],
    "answer": "A tuple is a row or record in a relation."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "constraint",
    "aliases": [
      "database constraint"
    ],
    "answer": "A database constraint is a rule enforced on data to preserve validity or integrity."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "NOT NULL",
    "aliases": [
      "not null constraint"
    ],
    "answer": "A NOT NULL constraint requires a column to contain a value rather than NULL."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "UNIQUE",
    "aliases": [
      "unique constraint"
    ],
    "answer": "A UNIQUE constraint requires values in the constrained column or column set to be unique according to the DBMS rules."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "primary key",
    "aliases": [
      "PK"
    ],
    "answer": "A primary key uniquely identifies each row of a relation and is selected from candidate keys."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "foreign key",
    "aliases": [
      "FK"
    ],
    "answer": "A foreign key is an attribute or attribute set that references a key in another or related relation."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "CHECK constraint",
    "aliases": [
      "check constraint"
    ],
    "answer": "A CHECK constraint requires data to satisfy a specified condition."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "DBMS",
    "aliases": [
      "database management system"
    ],
    "answer": "A Database Management System is software used to define, store, retrieve, manipulate and administer databases."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "SQL",
    "aliases": [
      "structured query language"
    ],
    "answer": "SQL is a language used to define and manipulate data in relational database systems."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "DDL",
    "aliases": [
      "data definition language"
    ],
    "answer": "Data Definition Language commands define or alter database structures such as databases, tables and constraints."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "DML",
    "aliases": [
      "data manipulation language"
    ],
    "answer": "Data Manipulation Language commands retrieve or change stored data."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "CREATE TABLE",
    "aliases": [
      "create table SQL"
    ],
    "answer": "CREATE TABLE defines a new table and its columns and constraints."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "ALTER TABLE",
    "aliases": [
      "alter table SQL"
    ],
    "answer": "ALTER TABLE changes the structure of an existing table."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "DROP TABLE",
    "aliases": [
      "drop table SQL"
    ],
    "answer": "DROP TABLE removes a table definition from the database."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "SELECT",
    "aliases": [
      "select query"
    ],
    "answer": "SELECT retrieves data from one or more tables according to a query."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "INSERT",
    "aliases": [
      "insert query",
      "SQL insert"
    ],
    "answer": "INSERT adds new rows of data to a table."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "UPDATE",
    "aliases": [
      "update query",
      "SQL update"
    ],
    "answer": "UPDATE modifies existing rows that meet the specified condition."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "DELETE",
    "aliases": [
      "delete query",
      "SQL delete"
    ],
    "answer": "DELETE removes rows that meet the specified condition."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "INNER JOIN",
    "aliases": [
      "inner join operation"
    ],
    "answer": "An INNER JOIN combines matching rows from related tables based on a join condition."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "ER diagram",
    "aliases": [
      "entity relationship diagram",
      "ERD"
    ],
    "answer": "An Entity-Relationship diagram models entities, attributes and relationships in a database design."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "entity",
    "aliases": [
      "database entity"
    ],
    "answer": "An entity is a distinguishable real-world object or concept about which data is stored."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "relationship",
    "aliases": [
      "ER relationship"
    ],
    "answer": "A relationship represents an association between entities."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "cardinality",
    "aliases": [
      "relationship cardinality"
    ],
    "answer": "Cardinality describes how many instances of one entity can be associated with instances of another."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "EER",
    "aliases": [
      "extended ER",
      "extended entity relationship"
    ],
    "answer": "Extended Entity-Relationship modeling extends basic ER modeling with additional semantic concepts."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "logical schema",
    "aliases": [
      "database logical schema"
    ],
    "answer": "A logical schema describes the logical structure of a database independently of physical storage details."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "candidate key",
    "aliases": [
      "candidate keys"
    ],
    "answer": "A candidate key is a minimal attribute set capable of uniquely identifying a row."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "alternate key",
    "aliases": [
      "alternate keys"
    ],
    "answer": "An alternate key is a candidate key that was not selected as the primary key."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "domain",
    "aliases": [
      "database domain"
    ],
    "answer": "A domain defines the permitted type or set of values for an attribute."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "normalization",
    "aliases": [
      "database normalization",
      "normalisation"
    ],
    "answer": "Normalization organizes relational schemas to reduce unnecessary redundancy and update anomalies."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "redundancy",
    "aliases": [
      "database redundancy"
    ],
    "answer": "Data redundancy is unnecessary duplication of the same data in multiple places."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "insert anomaly",
    "aliases": [
      "insertion anomaly"
    ],
    "answer": "An insert anomaly is a problem where a fact cannot be added cleanly without also adding unrelated or duplicate data."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "update anomaly",
    "aliases": [
      "modification anomaly"
    ],
    "answer": "An update anomaly occurs when duplicated facts must be changed in multiple places, risking inconsistency."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "delete anomaly",
    "aliases": [
      "deletion anomaly"
    ],
    "answer": "A delete anomaly occurs when deleting one fact unintentionally removes another useful fact."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "functional dependency",
    "aliases": [
      "FD"
    ],
    "answer": "A functional dependency exists when one attribute set determines another attribute set."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "full functional dependency",
    "aliases": [
      "full dependency"
    ],
    "answer": "A full dependency means an attribute depends on the whole determinant/key rather than only part of it."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "partial dependency",
    "aliases": [
      "partial functional dependency"
    ],
    "answer": "A partial dependency occurs when a non-key attribute depends on only part of a composite key."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "transitive dependency",
    "aliases": [
      "transitive functional dependency"
    ],
    "answer": "A transitive dependency occurs when a non-key attribute depends on another non-key attribute that depends on a key."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "zero normal form",
    "aliases": [
      "0NF",
      "UNF",
      "unnormalized form"
    ],
    "answer": "Zero normal form describes unnormalized data before first normal form requirements are satisfied."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "first normal form",
    "aliases": [
      "1NF",
      "first NF"
    ],
    "answer": "First Normal Form requires relation values to be atomic in the usual introductory model and removes repeating groups."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "second normal form",
    "aliases": [
      "2NF",
      "second NF"
    ],
    "answer": "Second Normal Form requires 1NF and removes partial dependency of non-key attributes on a composite key."
  },
  {
    "unit": 8,
    "unitName": "Database Management",
    "topic": "third normal form",
    "aliases": [
      "3NF",
      "third NF"
    ],
    "answer": "Third Normal Form requires 2NF and removes transitive dependency of non-key attributes on a key in the introductory model."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "problem solving process",
    "aliases": [
      "problem-solving process"
    ],
    "answer": "The programming problem-solving process includes understanding the problem, defining its boundaries, planning a solution and implementing it."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "modularization",
    "aliases": [
      "modularisation"
    ],
    "answer": "Modularization divides a solution into smaller manageable modules."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "top-down design",
    "aliases": [
      "top down design"
    ],
    "answer": "Top-down design starts from the overall problem and progressively breaks it into smaller parts."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "stepwise refinement",
    "aliases": [
      "step-wise refinement"
    ],
    "answer": "Stepwise refinement develops a solution by repeatedly adding more detail to high-level steps."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "structure chart",
    "aliases": [
      "structure charts"
    ],
    "answer": "A structure chart shows a system or program decomposed into modules and relationships between them."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "algorithm",
    "aliases": [
      "algorithms"
    ],
    "answer": "An algorithm is a finite, ordered set of unambiguous steps for solving a problem."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "flowchart",
    "aliases": [
      "flow chart"
    ],
    "answer": "A flowchart uses standardized symbols and arrows to graphically represent an algorithm or process."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "pseudocode",
    "aliases": [
      "pseudo code"
    ],
    "answer": "Pseudocode is a language-independent, structured way to describe an algorithm using programming-like statements."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "hand trace",
    "aliases": [
      "dry run",
      "trace table"
    ],
    "answer": "A hand trace manually follows an algorithm step by step to verify values and behavior."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "imperative programming",
    "aliases": [
      "imperative paradigm"
    ],
    "answer": "Imperative programming describes computation as sequences of commands that change program state."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "declarative programming",
    "aliases": [
      "declarative paradigm"
    ],
    "answer": "Declarative programming focuses on describing what result is required rather than specifying every execution step."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "object-oriented programming",
    "aliases": [
      "OOP",
      "object oriented programming"
    ],
    "answer": "Object-oriented programming organizes software around objects that combine data and behavior."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "source program",
    "aliases": [
      "source code"
    ],
    "answer": "A source program is code written in a programming language before or during translation to an executable/object form."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "object program",
    "aliases": [
      "object code"
    ],
    "answer": "An object program is translated machine-oriented code produced from source code before or as part of creating an executable."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "interpreter",
    "aliases": [
      "program interpreter"
    ],
    "answer": "An interpreter translates and executes source code during program execution, typically statement by statement or in small units."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "compiler",
    "aliases": [
      "program compiler"
    ],
    "answer": "A compiler translates source code into another form, commonly object or machine code, before execution."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "hybrid translation",
    "aliases": [
      "hybrid approach"
    ],
    "answer": "A hybrid translation approach combines characteristics of compilation and interpretation."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "linker",
    "aliases": [
      "program linker"
    ],
    "answer": "A linker combines object modules and required libraries/references to build an executable program."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "IDE",
    "aliases": [
      "integrated development environment"
    ],
    "answer": "An Integrated Development Environment combines programming tools such as an editor, execution/build support and debugging facilities."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "debugging",
    "aliases": [
      "debug"
    ],
    "answer": "Debugging is the process of locating, understanding and correcting program errors."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "variable",
    "aliases": [
      "program variable"
    ],
    "answer": "A variable is a named storage reference whose value may change during program execution."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "constant",
    "aliases": [
      "program constant"
    ],
    "answer": "A constant represents a value intended not to change during the relevant part of a program."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "primitive data type",
    "aliases": [
      "primitive type"
    ],
    "answer": "A primitive data type is a basic built-in type provided by a programming language."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "arithmetic operator",
    "aliases": [
      "arithmetical operator"
    ],
    "answer": "Arithmetic operators perform numerical calculations such as addition or multiplication."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "relational operator",
    "aliases": [
      "comparison operator"
    ],
    "answer": "Relational operators compare values and produce a logical result."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "logical operator",
    "aliases": [
      "boolean operator"
    ],
    "answer": "Logical operators combine or negate Boolean conditions."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "bitwise operator",
    "aliases": [
      "bitwise operators"
    ],
    "answer": "Bitwise operators act directly on the individual bits of integer-like values."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "operator precedence",
    "aliases": [
      "precedence of operators"
    ],
    "answer": "Operator precedence determines the order in which operators are evaluated when parentheses do not explicitly control the order."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "sequence control structure",
    "aliases": [
      "sequence structure"
    ],
    "answer": "Sequence executes statements in order."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "selection control structure",
    "aliases": [
      "selection structure",
      "conditional structure"
    ],
    "answer": "Selection chooses between alternative paths based on conditions."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "repetition control structure",
    "aliases": [
      "repetition structure",
      "looping",
      "iteration"
    ],
    "answer": "Repetition executes a block multiple times according to a loop condition or iteration rule."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "function",
    "aliases": [
      "subprogram",
      "sub-program"
    ],
    "answer": "A function is a reusable subprogram that can receive inputs through parameters and may return a value."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "built-in function",
    "aliases": [
      "builtin function"
    ],
    "answer": "A built-in function is provided by the language or its standard environment."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "user-defined function",
    "aliases": [
      "user defined function"
    ],
    "answer": "A user-defined function is created by the programmer for a specific task."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "parameter",
    "aliases": [
      "function parameter"
    ],
    "answer": "A parameter is a named input defined by a function."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "argument",
    "aliases": [
      "function argument"
    ],
    "answer": "An argument is a value supplied to a function when it is called."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "return value",
    "aliases": [
      "function return"
    ],
    "answer": "A return value is a result sent back from a function to its caller."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "default parameter value",
    "aliases": [
      "default value"
    ],
    "answer": "A default parameter value is used when a caller omits the corresponding argument, where the language supports it."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "local variable",
    "aliases": [
      "local scope"
    ],
    "answer": "A local variable has scope limited to a function, block or other local region according to the language rules."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "global variable",
    "aliases": [
      "global scope"
    ],
    "answer": "A global variable is defined in a scope accessible more broadly than a local function/block scope."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "string",
    "aliases": [
      "strings"
    ],
    "answer": "A string is a sequence of characters."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "list",
    "aliases": [
      "python list",
      "lists"
    ],
    "answer": "A list is an ordered collection data structure; in Python, lists are mutable."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "tuple",
    "aliases": [
      "python tuple",
      "tuples"
    ],
    "answer": "A tuple is an ordered collection data structure; in Python, tuples are immutable."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "dictionary",
    "aliases": [
      "python dictionary",
      "dict",
      "dictionaries"
    ],
    "answer": "A dictionary stores key-value associations; in Python, dictionary keys map to values."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "file handling",
    "aliases": [
      "file operations"
    ],
    "answer": "File handling includes operations such as opening, reading, writing, appending and closing files."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "sequential search",
    "aliases": [
      "linear search"
    ],
    "answer": "Sequential search checks items one by one until the target is found or the data is exhausted."
  },
  {
    "unit": 9,
    "unitName": "Programming",
    "topic": "bubble sort",
    "aliases": [
      "bubble sorting"
    ],
    "answer": "Bubble sort repeatedly compares adjacent items and swaps out-of-order pairs until the sequence becomes sorted."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "World Wide Web",
    "aliases": [
      "WWW",
      "web"
    ],
    "answer": "The World Wide Web is a system of interlinked resources accessed over the Internet using web technologies."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "website",
    "aliases": [
      "web site"
    ],
    "answer": "A website is a collection of related web pages and resources usually published under a common site identity."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "web portal",
    "aliases": [
      "portal website"
    ],
    "answer": "A web portal provides an organized gateway to information, services or resources."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "HTML",
    "aliases": [
      "hypertext markup language"
    ],
    "answer": "HTML is the markup language used to structure web-page content."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "head element",
    "aliases": [
      "HTML head",
      "head tag"
    ],
    "answer": "The HTML head contains document metadata and resources that are not the main visible page content."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "title element",
    "aliases": [
      "title tag"
    ],
    "answer": "The HTML title element defines the document title shown by the browser interface and used in related contexts."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "body element",
    "aliases": [
      "HTML body",
      "body tag"
    ],
    "answer": "The HTML body contains the main content displayed as part of the page."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "hyperlink",
    "aliases": [
      "HTML link"
    ],
    "answer": "A hyperlink connects a document or resource to another location, page or section."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "bookmark link",
    "aliases": [
      "fragment link",
      "same page link"
    ],
    "answer": "A bookmark or fragment link targets a specific section within a page."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "local link",
    "aliases": [
      "internal link"
    ],
    "answer": "A local link points to another resource within the same site or local project."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "external link",
    "aliases": [
      "external hyperlink"
    ],
    "answer": "An external link points to a resource on another site or external location."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "ordered list",
    "aliases": [
      "HTML ordered list"
    ],
    "answer": "An ordered list presents list items in a sequence, normally using the HTML ol element."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "unordered list",
    "aliases": [
      "HTML unordered list"
    ],
    "answer": "An unordered list presents items without sequence numbering, normally using the HTML ul element."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "HTML table",
    "aliases": [
      "table tag",
      "HTML tables"
    ],
    "answer": "An HTML table organizes tabular data into rows and cells."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "CSS",
    "aliases": [
      "cascading style sheets",
      "style sheet"
    ],
    "answer": "CSS is a style-sheet language used to control the presentation and appearance of web content."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "CSS selector",
    "aliases": [
      "CSS selectors"
    ],
    "answer": "A CSS selector identifies which elements a CSS rule should apply to."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "element selector",
    "aliases": [
      "type selector"
    ],
    "answer": "An element selector selects HTML elements by tag name."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "id selector",
    "aliases": [
      "CSS id selector"
    ],
    "answer": "An ID selector selects the element associated with a particular id value."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "class selector",
    "aliases": [
      "CSS class selector"
    ],
    "answer": "A class selector selects elements that have a specified class."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "inline CSS",
    "aliases": [
      "inline style"
    ],
    "answer": "Inline CSS places style declarations directly on an HTML element using the style attribute."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "internal CSS",
    "aliases": [
      "embedded CSS"
    ],
    "answer": "Internal CSS places style rules inside a style element in an HTML document."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "external CSS",
    "aliases": [
      "external stylesheet"
    ],
    "answer": "External CSS stores style rules in a separate stylesheet linked from HTML."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "web authoring tool",
    "aliases": [
      "website authoring tool"
    ],
    "answer": "A web authoring tool provides facilities for creating and editing web pages."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "dynamic web page",
    "aliases": [
      "dynamic website"
    ],
    "answer": "A dynamic web page can generate or change content based on data, program logic or user interaction."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "PHP",
    "aliases": [
      "PHP scripting"
    ],
    "answer": "PHP is a server-side scripting language commonly used to generate dynamic web content and work with databases."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "HTML form",
    "aliases": [
      "web form",
      "form tag"
    ],
    "answer": "An HTML form collects user input and submits it for processing."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "GET method",
    "aliases": [
      "HTTP GET",
      "form GET"
    ],
    "answer": "GET submits form/request data in the request URL/query component and is commonly used for retrieval-oriented requests."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "POST method",
    "aliases": [
      "HTTP POST",
      "form POST"
    ],
    "answer": "POST sends submitted data in the request body and is commonly used when submitting data that changes server-side state or should not be placed in a URL."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "fieldset",
    "aliases": [
      "fieldset tag"
    ],
    "answer": "The HTML fieldset element groups related form controls."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "web hosting",
    "aliases": [
      "website hosting"
    ],
    "answer": "Web hosting provides server resources for publishing a website so it can be accessed over a network or the Internet."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "local publishing",
    "aliases": [
      "publish locally"
    ],
    "answer": "Local publishing makes a website available on a local computer or intranet environment."
  },
  {
    "unit": 10,
    "unitName": "Web Development",
    "topic": "web server",
    "aliases": [
      "HTTP server"
    ],
    "answer": "A web server receives web requests and serves web resources or application responses."
  },
  {
    "unit": 11,
    "unitName": "Internet of Things",
    "topic": "microprocessor development system",
    "aliases": [
      "MDS",
      "development board"
    ],
    "answer": "A microprocessor development system is a programmable hardware platform used to build and test embedded or digital-system applications."
  },
  {
    "unit": 11,
    "unitName": "Internet of Things",
    "topic": "Arduino",
    "aliases": [
      "Arduino board"
    ],
    "answer": "Arduino boards are programmable development boards commonly used for learning and building embedded/IoT prototypes."
  },
  {
    "unit": 11,
    "unitName": "Internet of Things",
    "topic": "Raspberry Pi",
    "aliases": [
      "raspberry pi board"
    ],
    "answer": "Raspberry Pi is a small programmable computer platform that can be used in computing, embedded and IoT projects."
  },
  {
    "unit": 11,
    "unitName": "Internet of Things",
    "topic": "analog input",
    "aliases": [
      "analogue input"
    ],
    "answer": "An analog input reads a continuously varying electrical signal and represents it digitally for processing."
  },
  {
    "unit": 11,
    "unitName": "Internet of Things",
    "topic": "digital input",
    "aliases": [
      "GPIO input"
    ],
    "answer": "A digital input reads discrete logical states such as HIGH/LOW."
  },
  {
    "unit": 11,
    "unitName": "Internet of Things",
    "topic": "digital output",
    "aliases": [
      "GPIO output"
    ],
    "answer": "A digital output controls a discrete logical output state, for example to switch an LED through suitable circuitry."
  },
  {
    "unit": 11,
    "unitName": "Internet of Things",
    "topic": "RX TX",
    "aliases": [
      "RX pin",
      "TX pin",
      "serial RX TX"
    ],
    "answer": "RX and TX identify receive and transmit communication lines/pins on many development systems."
  },
  {
    "unit": 11,
    "unitName": "Internet of Things",
    "topic": "LDR",
    "aliases": [
      "light dependent resistor"
    ],
    "answer": "An LDR is a light-dependent resistor whose resistance changes with light level and can be used as a light sensor."
  },
  {
    "unit": 11,
    "unitName": "Internet of Things",
    "topic": "temperature sensor",
    "aliases": [
      "temp sensor"
    ],
    "answer": "A temperature sensor measures temperature and provides a signal that a digital system can process."
  },
  {
    "unit": 11,
    "unitName": "Internet of Things",
    "topic": "magnetic switch",
    "aliases": [
      "magnet switch",
      "reed switch"
    ],
    "answer": "A magnetic switch can detect conditions such as a door opening or closing by sensing the presence or absence of a magnet."
  },
  {
    "unit": 11,
    "unitName": "Internet of Things",
    "topic": "IoT",
    "aliases": [
      "internet of things"
    ],
    "answer": "The Internet of Things connects physical devices capable of sensing, processing, communication and/or actuation so they can exchange data and provide smart services."
  },
  {
    "unit": 11,
    "unitName": "Internet of Things",
    "topic": "IoT application",
    "aliases": [
      "IoT system"
    ],
    "answer": "An IoT application combines connected devices, sensing or control, communication and software to perform a useful task."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "digital economy",
    "aliases": [
      "digital business economy"
    ],
    "answer": "The digital economy refers to economic activity strongly enabled by digital technologies, networks, data and online services."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "reverse auction",
    "aliases": [
      "reverse auctions"
    ],
    "answer": "In a reverse auction, sellers compete to offer increasingly favorable terms to a buyer."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "group purchasing",
    "aliases": [
      "group buying"
    ],
    "answer": "Group purchasing combines demand from multiple buyers to seek better purchasing terms."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "e-marketplace",
    "aliases": [
      "electronic marketplace",
      "online marketplace"
    ],
    "answer": "An e-marketplace is an online environment where buyers and sellers can conduct market activities."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "pure brick organization",
    "aliases": [
      "pure brick business"
    ],
    "answer": "A pure-brick organization operates mainly through physical/offline channels."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "brick and click organization",
    "aliases": [
      "bricks and clicks",
      "brick and click business"
    ],
    "answer": "A brick-and-click organization combines physical operations with online channels."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "pure click organization",
    "aliases": [
      "pure click business"
    ],
    "answer": "A pure-click organization operates primarily or entirely through online channels."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "payment gateway",
    "aliases": [
      "online payment gateway"
    ],
    "answer": "A payment gateway facilitates the authorization and processing flow of electronic payments between a customer, merchant and payment services."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "e-commerce",
    "aliases": [
      "electronic commerce",
      "ecommerce"
    ],
    "answer": "E-commerce is the buying, selling or exchange of products, services or related transaction information through electronic networks."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "e-business",
    "aliases": [
      "electronic business",
      "ebusiness"
    ],
    "answer": "E-business is the broader use of digital technologies and networks to conduct and support business processes."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "B2B",
    "aliases": [
      "business to business"
    ],
    "answer": "B2B describes electronic business transactions between businesses."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "B2C",
    "aliases": [
      "business to consumer"
    ],
    "answer": "B2C describes electronic business transactions from businesses to consumers."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "C2C",
    "aliases": [
      "consumer to consumer"
    ],
    "answer": "C2C describes electronic transactions between consumers."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "C2B",
    "aliases": [
      "consumer to business"
    ],
    "answer": "C2B describes transactions in which consumers provide value, products or services to businesses."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "B2E",
    "aliases": [
      "business to employee"
    ],
    "answer": "B2E describes digital business services or transactions directed from a business to its employees."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "G2C",
    "aliases": [
      "government to citizen"
    ],
    "answer": "G2C describes digital interactions or services from government to citizens."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "virtual storefront",
    "aliases": [
      "online storefront"
    ],
    "answer": "A virtual storefront is an online interface through which a business presents and sells products or services."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "information broker",
    "aliases": [
      "information brokers"
    ],
    "answer": "An information broker collects, organizes or provides information as a service."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "content provider",
    "aliases": [
      "online content provider"
    ],
    "answer": "A content provider supplies digital content to users."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "online service provider",
    "aliases": [
      "service provider"
    ],
    "answer": "An online service provider delivers services over a network or the Internet."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "virtual community",
    "aliases": [
      "online community"
    ],
    "answer": "A virtual community is an online group whose members interact around shared interests or activities."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "e-marketing",
    "aliases": [
      "electronic marketing",
      "digital marketing"
    ],
    "answer": "E-marketing uses digital technologies and online channels to perform marketing activities."
  },
  {
    "unit": 12,
    "unitName": "ICT in Business",
    "topic": "mobile marketing",
    "aliases": [
      "mobile advertising"
    ],
    "answer": "Mobile marketing uses mobile devices and mobile channels to communicate marketing messages and services."
  },
  {
    "unit": 13,
    "unitName": "New Trends and Future Directions of ICT",
    "topic": "intelligent computing",
    "aliases": [
      "intelligent systems"
    ],
    "answer": "Intelligent computing applies computational techniques that exhibit capabilities associated with intelligent behavior."
  },
  {
    "unit": 13,
    "unitName": "New Trends and Future Directions of ICT",
    "topic": "emotional computing",
    "aliases": [
      "affective computing"
    ],
    "answer": "Emotional or affective computing studies systems that can recognize, model or respond to aspects of human emotion."
  },
  {
    "unit": 13,
    "unitName": "New Trends and Future Directions of ICT",
    "topic": "artificial intelligence",
    "aliases": [
      "AI"
    ],
    "answer": "Artificial intelligence is the field of building systems that perform tasks associated with intelligent behavior such as reasoning, learning, perception or decision support."
  },
  {
    "unit": 13,
    "unitName": "New Trends and Future Directions of ICT",
    "topic": "man-machine coexistence",
    "aliases": [
      "human machine coexistence"
    ],
    "answer": "Man-machine coexistence refers to people and computing machines working alongside one another in shared environments and activities."
  },
  {
    "unit": 13,
    "unitName": "New Trends and Future Directions of ICT",
    "topic": "machine-to-machine coexistence",
    "aliases": [
      "M2M",
      "machine to machine"
    ],
    "answer": "Machine-to-machine interaction involves devices or systems communicating and coordinating with one another without requiring constant human control."
  },
  {
    "unit": 13,
    "unitName": "New Trends and Future Directions of ICT",
    "topic": "software agent",
    "aliases": [
      "agent technology",
      "software agents"
    ],
    "answer": "A software agent is a software entity that can act on behalf of a user or system with some degree of autonomy."
  },
  {
    "unit": 13,
    "unitName": "New Trends and Future Directions of ICT",
    "topic": "multi-agent system",
    "aliases": [
      "multi agent system",
      "MAS"
    ],
    "answer": "A multi-agent system contains multiple interacting software agents that cooperate, coordinate or compete."
  },
  {
    "unit": 13,
    "unitName": "New Trends and Future Directions of ICT",
    "topic": "beyond von Neumann computing",
    "aliases": [
      "beyond von-neumann",
      "post von neumann"
    ],
    "answer": "Beyond-von-Neumann computing explores architectures and computational models that depart from the conventional stored-program von Neumann model."
  },
  {
    "unit": 13,
    "unitName": "New Trends and Future Directions of ICT",
    "topic": "nature-inspired computing",
    "aliases": [
      "nature inspired computing"
    ],
    "answer": "Nature-inspired computing uses ideas or mechanisms inspired by natural processes to develop computational methods."
  },
  {
    "unit": 13,
    "unitName": "New Trends and Future Directions of ICT",
    "topic": "biology-inspired computing",
    "aliases": [
      "biology inspired computing",
      "bio inspired computing"
    ],
    "answer": "Biology-inspired computing uses ideas from biological systems as inspiration for computational models and techniques."
  },
  {
    "unit": 13,
    "unitName": "New Trends and Future Directions of ICT",
    "topic": "quantum computing",
    "aliases": [
      "quantum computer",
      "quantum computation"
    ],
    "answer": "Quantum computing uses principles of quantum mechanics to represent and process information in ways that differ from classical computing."
  }
];

const DAILY_CHAT = [
  {
    "patterns": [
      "hi",
      "hello",
      "hey",
      "hiya",
      "yo"
    ],
    "answers": [
      "Hey! 👋 I'm ICT Lab AI. Ask me anything from A/L ICT, or just chat with me.",
      "Hi! 👋 Ready for some ICT, coding, networking, databases, or a normal chat?"
    ]
  },
  {
    "patterns": [
      "how are you",
      "how are u",
      "how r u",
      "how you doing"
    ],
    "answers": [
      "I'm doing great 😄 Ready to help with A/L ICT. How are you?",
      "All good here 😄 What are we learning today?"
    ]
  },
  {
    "patterns": [
      "good morning"
    ],
    "answers": [
      "Good morning! ☀️ Hope you have a productive day. What ICT topic are we tackling?"
    ]
  },
  {
    "patterns": [
      "good afternoon"
    ],
    "answers": [
      "Good afternoon! 👋 What can I help you with today?"
    ]
  },
  {
    "patterns": [
      "good evening"
    ],
    "answers": [
      "Good evening! 🌙 Ready when you are."
    ]
  },
  {
    "patterns": [
      "good night"
    ],
    "answers": [
      "Good night! 🌙 Rest well and come back when you want to continue learning."
    ]
  },
  {
    "patterns": [
      "thank you",
      "thanks",
      "thx",
      "ty"
    ],
    "answers": [
      "You're welcome! 😄",
      "Anytime! 👌",
      "Glad I could help!"
    ]
  },
  {
    "patterns": [
      "who are you",
      "what are you"
    ],
    "answers": [
      "I'm ICT Lab AI — an offline A/L ICT study chatbot running inside this website. I don't need an API key."
    ]
  },
  {
    "patterns": [
      "what can you do",
      "help me",
      "help"
    ],
    "answers": [
      "I can explain A/L ICT concepts, compare topics, answer definitions, give examples, handle simple binary/decimal/hex conversions, basic arithmetic, and chat with you. Try: “What is DNS?”, “TCP vs UDP”, “Explain 2NF simply”, or “Convert 45 to binary”."
    ]
  },
  {
    "patterns": [
      "are you online",
      "do you use internet",
      "internet"
    ],
    "answers": [
      "I'm designed to work offline. My answers come from the knowledge built into this website, not from a cloud AI API."
    ]
  },
  {
    "patterns": [
      "bye",
      "goodbye",
      "see you",
      "cya"
    ],
    "answers": [
      "See you! 👋 Good luck with your studies.",
      "Bye! 👋 Come back anytime."
    ]
  },
  {
    "patterns": [
      "i am bored",
      "im bored",
      "i'm bored"
    ],
    "answers": [
      "We can make ICT less boring 😄 Ask me to quiz you on networking, databases, Python, logic gates, or any other A/L ICT unit."
    ]
  },
  {
    "patterns": [
      "nice",
      "cool",
      "awesome",
      "great"
    ],
    "answers": [
      "😄 Nice! What should we tackle next?",
      "Glad you like it 😄 Keep going!"
    ]
  }
];

const QUESTION_TEMPLATES = ["what is {x}", "what's {x}", "define {x}", "define the term {x}", "explain {x}", "explain {x} simply", "explain {x} in simple words", "tell me about {x}", "give me a definition of {x}", "give the meaning of {x}", "what do you mean by {x}", "what does {x} mean", "can you explain {x}", "can u explain {x}", "teach me {x}", "i want to learn {x}", "describe {x}", "briefly describe {x}", "write a short note on {x}", "give me a short note about {x}", "give an example of {x}", "why is {x} important", "why do we need {x}", "what is the purpose of {x}", "how does {x} work", "how {x} works", "what are the features of {x}", "what are the characteristics of {x}", "tell me the uses of {x}", "what are the uses of {x}", "where is {x} used", "help me understand {x}", "can you tell me about {x}", "i don't understand {x}", "revision note for {x}", "al ict {x}", "a level ict {x}", "ict {x}", "question about {x}"];
const PREFIXES = ["", "hey ", "hi ", "please ", "pls ", "can you ", "can u ", "could you ", "buddy ", "gpt "];
const SUFFIXES = ["", "?", " please", " pls", " for al ict", " for a level ict", " simply", " briefly", " with an example", " in simple words"];

const state = {
  lastTopic: null,
  lastEntry: null,
  history: []
};

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9+#./' -]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function words(text) {
  return new Set(normalize(text).split(" ").filter(w => w.length > 1));
}

function levenshtein(a, b) {
  a = normalize(a); b = normalize(b);
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const row = Array(b.length + 1).fill(0).map((_,i)=>i);
  for (let i=1;i<=a.length;i++) {
    let prev = row[0];
    row[0] = i;
    for (let j=1;j<=b.length;j++) {
      const old = row[j];
      row[j] = Math.min(
        row[j] + 1,
        row[j-1] + 1,
        prev + (a[i-1] === b[j-1] ? 0 : 1)
      );
      prev = old;
    }
  }
  return row[b.length];
}

function similarity(a, b) {
  a = normalize(a); b = normalize(b);
  if (!a || !b) return 0;
  if (a === b) return 1;
  if (a.includes(b) || b.includes(a)) {
    const ratio = Math.min(a.length,b.length)/Math.max(a.length,b.length);
    return 0.78 + 0.22*ratio;
  }
  const A = words(a), B = words(b);
  let inter = 0;
  A.forEach(x => { if (B.has(x)) inter++; });
  const union = new Set([...A,...B]).size || 1;
  const jaccard = inter/union;
  const maxLen = Math.max(a.length,b.length);
  const lev = maxLen ? 1 - levenshtein(a,b)/maxLen : 0;
  return Math.max(jaccard, lev*0.82);
}

function randomOf(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

function detectDaily(q) {
  const n = normalize(q);
  for (const item of DAILY_CHAT) {
    for (const p of item.patterns) {
      const pn = normalize(p);
      if (n === pn || n.startsWith(pn + " ") || (pn.length > 5 && n.includes(pn))) {
        return randomOf(item.answers);
      }
    }
  }
  return null;
}

function scoreEntry(query, entry) {
  const n = normalize(query);
  const aliases = [entry.topic, ...(entry.aliases || [])].map(normalize);
  let best = 0;
  for (const a of aliases) {
    if (!a) continue;
    if (n === a) best = Math.max(best, 1);
    else if (n.includes(a)) {
      // Strong topic match when the alias appears as a phrase in the query.
      best = Math.max(best, 0.92 + Math.min(0.07, a.length / 400));
    } else {
      best = Math.max(best, similarity(n, a) * 0.86);
      // Token coverage bonus.
      const qWords = words(n), aWords = words(a);
      let hit = 0;
      aWords.forEach(w => { if (qWords.has(w)) hit++; });
      if (aWords.size) best = Math.max(best, (hit/aWords.size)*0.88);
    }
  }
  return best;
}

function findEntry(query) {
  let best = null, bestScore = 0;
  for (const entry of KNOWLEDGE) {
    const s = scoreEntry(query, entry);
    if (s > bestScore) { best = entry; bestScore = s; }
  }
  return {entry: best, score: bestScore};
}

function asksSimple(q) {
  return /\b(simple|simply|easy|short|brief|briefly|one line)\b/i.test(q);
}

function asksExample(q) {
  return /\b(example|examples)\b/i.test(q);
}

function asksUnit(q) {
  return /\b(unit|lesson|syllabus|which lesson|which chapter)\b/i.test(q);
}

function formatEntry(entry, q) {
  let ans = entry.answer;
  if (asksUnit(q)) {
    ans += `\n\n📘 Syllabus: Unit ${entry.unit} — ${entry.unitName}.`;
  }
  if (asksExample(q)) {
    const ex = exampleFor(entry.topic);
    if (ex) ans += `\n\nExample: ${ex}`;
  }
  if (!asksSimple(q)) {
    const rel = relatedTopics(entry);
    if (rel.length) ans += `\n\nRelated: ${rel.slice(0,4).join(", ")}.`;
  }
  return ans;
}

function relatedTopics(entry) {
  const unitEntries = KNOWLEDGE.filter(x => x.unit === entry.unit && x.topic !== entry.topic);
  const qWords = words(entry.answer + " " + entry.topic);
  return unitEntries
    .map(x => {
      let hit = 0;
      words(x.answer+" "+x.topic).forEach(w => { if (qWords.has(w)) hit++; });
      return [x.topic, hit];
    })
    .sort((a,b)=>b[1]-a[1])
    .slice(0,4)
    .map(x=>x[0]);
}

function exampleFor(topic) {
  const t = normalize(topic);
  const map = {
    "ram":"Opening a browser or game loads active data into RAM.",
    "data validation":"A range check can reject an exam mark entered as 150 when valid marks are 0–100.",
    "batch processing":"A company can process a day's payroll transactions together.",
    "real time processing":"A sensor-control system can react immediately when a measured value crosses a threshold.",
    "and gate":"For two inputs A and B, the output is 1 only when A=1 and B=1.",
    "or gate":"For two inputs A and B, the output is 1 when either or both inputs are 1.",
    "xor gate":"For two inputs, 0 XOR 1 = 1 while 1 XOR 1 = 0.",
    "half adder":"Adding A=1 and B=1 gives Sum=0 and Carry=1.",
    "dns":"When you enter a domain name, DNS can help find the IP address needed to contact the server.",
    "dhcp":"A home router can automatically give a connected laptop an IP configuration.",
    "nat":"Several private-addressed devices in a home LAN can share Internet access through address translation at the router.",
    "primary key":"StudentID can be used as the primary key of a Student table when each ID is unique.",
    "foreign key":"CourseID in an Enrollment table can reference CourseID in the Course table.",
    "inner join":"A join can combine Student and Enrollment rows where their StudentID values match.",
    "first normal form":"A table should not store several phone numbers as a repeating group inside one field in the introductory 1NF model.",
    "partial dependency":"If a table key is (StudentID, SubjectID) but StudentName depends only on StudentID, that is a partial dependency.",
    "transitive dependency":"If StudentID determines ClassID and ClassID determines ClassTeacher, ClassTeacher is transitively dependent on StudentID.",
    "sequential search":"To find 23 in [4, 10, 23, 31], check each element from the beginning until 23 is found.",
    "bubble sort":"In [3,1,2], compare adjacent values and swap out-of-order pairs repeatedly until [1,2,3].",
    "html":"<p>Hello</p> marks up a paragraph.",
    "css":".card { padding: 1rem; } applies padding to elements with class='card'.",
    "get method":"A search form can send a query such as ?q=networking in the URL.",
    "iot":"A temperature sensor can send data to a controller that turns on a fan when the room becomes hot.",
    "e-commerce":"Buying a product through an online store is an e-commerce transaction.",
    "b2c":"An online retailer selling a laptop directly to an individual customer is B2C."
  };
  return map[t] || null;
}

function compareIntent(q) {
  return /\b(vs|versus|compare|difference between|different between|distinguish|contrast)\b/i.test(q);
}

function extractTwoEntries(q) {
  const scored = KNOWLEDGE
    .map(e => [e, scoreEntry(q,e)])
    .filter(x => x[1] >= 0.62)
    .sort((a,b)=>b[1]-a[1]);
  if (scored.length < 2) return null;
  const first = scored[0][0];
  const second = scored.find(x => x[0].topic !== first.topic);
  return second ? [first, second[0]] : null;
}

function compareEntries(a,b) {
  return `**${a.topic} vs ${b.topic}**\n\n• ${a.topic}: ${a.answer}\n\n• ${b.topic}: ${b.answer}\n\nThe key difference is in their purpose/behavior as described above.`;
}

/* ---------- Number-system helper ---------- */
function parseConversion(q) {
  const n = normalize(q);
  let m;
  if ((m=n.match(/(?:convert|change)\s+([0-9a-f]+)\s+(?:from\s+)?decimal\s+(?:to|into)\s+(binary|octal|hex|hexadecimal)/i))) {
    return convertBase(m[1],10,m[2]);
  }
  if ((m=n.match(/(?:convert|change)\s+([01]+)\s+(?:from\s+)?binary\s+(?:to|into)\s+(decimal|octal|hex|hexadecimal)/i))) {
    return convertBase(m[1],2,m[2]);
  }
  if ((m=n.match(/(?:convert|change)\s+([0-7]+)\s+(?:from\s+)?octal\s+(?:to|into)\s+(decimal|binary|hex|hexadecimal)/i))) {
    return convertBase(m[1],8,m[2]);
  }
  if ((m=n.match(/(?:convert|change)\s+([0-9a-f]+)\s+(?:from\s+)?(?:hex|hexadecimal)\s+(?:to|into)\s+(decimal|binary|octal)/i))) {
    return convertBase(m[1],16,m[2]);
  }
  if ((m=n.match(/(?:what is|convert)\s+(\d+)\s+(?:in|to)\s+binary/i))) {
    return convertBase(m[1],10,"binary");
  }
  return null;
}

function convertBase(value, fromBase, targetName) {
  const num = parseInt(value, fromBase);
  if (!Number.isFinite(num)) return null;
  const names = {binary:2, octal:8, hex:16, hexadecimal:16, decimal:10};
  const base = names[targetName];
  const result = num.toString(base).toUpperCase();
  return `${value.toUpperCase()} (base ${fromBase}) = ${result} (base ${base})`;
}

/* ---------- Safe simple arithmetic ---------- */
function arithmetic(q) {
  const n = normalize(q)
    .replace(/what is|calculate|solve|answer|please|pls|=/g,"")
    .trim();
  if (!/^[0-9+\-*/().%\s]+$/.test(n) || !/[+\-*/%]/.test(n)) return null;
  try {
    const v = Function('"use strict";return (' + n + ')')();
    if (typeof v === "number" && Number.isFinite(v)) return String(v);
  } catch(e) {}
  return null;
}

/* ---------- Follow-up context ---------- */
function followup(q) {
  if (!state.lastEntry) return null;
  const n = normalize(q);
  if (/^(tell me more|more|explain more|more details|what about it|what about that|explain that|what is that|example|give me an example)/.test(n)) {
    let ans = formatEntry(state.lastEntry, q);
    if (/more|details/.test(n)) {
      ans += `\n\nThis topic belongs to Unit ${state.lastEntry.unit} — ${state.lastEntry.unitName}. You can ask me to compare it with another topic or give you a short revision question.`;
    }
    return ans;
  }
  return null;
}

function answer(query) {
  const q = String(query || "").trim();
  if (!q) return "Type a question and I'll help.";

  const daily = detectDaily(q);
  if (daily) return daily;

  const conv = parseConversion(q);
  if (conv) return conv;

  const math = arithmetic(q);
  if (math) return math;

  const follow = followup(q);
  if (follow) return follow;

  if (compareIntent(q)) {
    const pair = extractTwoEntries(q);
    if (pair) {
      state.lastEntry = pair[0];
      state.lastTopic = pair[0].topic;
      return compareEntries(pair[0],pair[1]);
    }
  }

  const {entry,score} = findEntry(q);
  if (entry && score >= 0.63) {
    state.lastEntry = entry;
    state.lastTopic = entry.topic;
    return formatEntry(entry,q);
  }

  return "I don't have a confident answer for that yet. Try asking it with the main ICT term, for example “Explain DNS”, “2NF vs 3NF”, or “What is a process control block?”. You can also teach me new knowledge with ICTLabAI.teach(...).";
}

/* ---------- Question-variation generator ----------
   This proves the system can create/recognize huge numbers of phrasings
   without shipping a million duplicate strings.
*/
function countPotentialPhrasings() {
  let aliasCount = 0;
  KNOWLEDGE.forEach(e => aliasCount += 1 + (e.aliases || []).length);
  return aliasCount * QUESTION_TEMPLATES.length * PREFIXES.length * SUFFIXES.length;
}

function generateQuestionVariations(entryOrTopic, limit=100) {
  const entry = typeof entryOrTopic === "string"
    ? KNOWLEDGE.find(e => normalize(e.topic) === normalize(entryOrTopic) || (e.aliases||[]).some(a=>normalize(a)===normalize(entryOrTopic)))
    : entryOrTopic;
  if (!entry) return [];
  const aliases = [entry.topic, ...(entry.aliases||[])];
  const result = [];
  outer:
  for (const alias of aliases) {
    for (const t of QUESTION_TEMPLATES) {
      for (const p of PREFIXES) {
        for (const s of SUFFIXES) {
          result.push((p + t.replace("{x}",alias) + s).replace(/\s+/g," ").trim());
          if (result.length >= limit) break outer;
        }
      }
    }
  }
  return result;
}

function teach(topic, aliases, newAnswer, unit=0, unitName="Custom Knowledge") {
  if (!topic || !newAnswer) throw new Error("topic and answer are required");
  const entry = {
    unit,
    unitName,
    topic: String(topic),
    aliases: Array.isArray(aliases) ? aliases.map(String) : [String(aliases || topic)],
    answer: String(newAnswer)
  };
  KNOWLEDGE.push(entry);
  saveCustomKnowledge();
  return entry;
}

function saveCustomKnowledge() {
  try {
    const custom = KNOWLEDGE.filter(e => e.unit === 0 || e.unitName === "Custom Knowledge");
    localStorage.setItem("ictlab_custom_ai_knowledge", JSON.stringify(custom));
  } catch(e) {}
}

function loadCustomKnowledge() {
  try {
    const raw = localStorage.getItem("ictlab_custom_ai_knowledge");
    if (!raw) return;
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) {
      arr.forEach(e => {
        if (e && e.topic && e.answer && !KNOWLEDGE.some(x => normalize(x.topic)===normalize(e.topic) && x.unit===0)) KNOWLEDGE.push(e);
      });
    }
  } catch(e) {}
}

/* ---------- UI binding for your existing chatbot HTML ---------- */
function addMessage(text, who) {

    const box =
        document.getElementById("aiMessages");

    if (!box) return;


    const div =
        document.createElement("div");


    div.className =
        who === "user"
            ? "ai-message user-message"
            : "ai-message bot-message";


    div.textContent = text;


    box.appendChild(div);


    requestAnimationFrame(() => {

        box.scrollTo({
            top: box.scrollHeight,
            behavior: "smooth"
        });

    });

} 

function openChat() {
  const panel = document.getElementById("ictAiChat");
  const wrapper = document.querySelector(".ict-ai-wrapper");
  if (!panel) return;

  panel.style.removeProperty("display");
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  wrapper?.classList.add("chat-open");

  setTimeout(() => document.getElementById("aiInput")?.focus(), 300);
}

function closeChat() {
  const panel = document.getElementById("ictAiChat");
  const wrapper = document.querySelector(".ict-ai-wrapper");
  if (!panel) return;

  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  wrapper?.classList.remove("chat-open");
}

function send() {
  const input = document.getElementById("aiInput");
  if (!input) return;
  const q = input.value.trim();
  if (!q) return;
  addMessage(q,"user");
  input.value = "";
  setTimeout(()=>addMessage(answer(q),"bot"),180);
}

function bindUI() {
  const btn = document.getElementById("ictAiButton");
  const panel = document.getElementById("ictAiChat");
  const close = document.getElementById("closeAiChat");
  const sendBtn = document.getElementById("sendAiMessage");
  const input = document.getElementById("aiInput");

  if (!btn || !panel) {
    console.warn("ICT Lab AI: chatbot HTML not found.");
    return;
  }

  panel.classList.remove("open");
  panel.style.removeProperty("display");
  panel.setAttribute("aria-hidden", "true");

  btn.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    panel.classList.contains("open") ? closeChat() : openChat();
  });

  close?.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    closeChat();
  });

  sendBtn?.addEventListener("click", e => {
    e.preventDefault();
    send();
  });

  input?.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });

  document.querySelectorAll("[data-ai-question]").forEach(el => {
    el.addEventListener("click", () => {
      const q = el.getAttribute("data-ai-question") || el.textContent;
      if (input) input.value = q.trim();
      send();
    });
  });
}

loadCustomKnowledge();
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bindUI);
else bindUI();

window.ICTLabAI = {
  ask: answer,
  teach,
  knowledge: KNOWLEDGE,
  countKnowledge: () => KNOWLEDGE.length,
  countPotentialPhrasings,
  generateQuestionVariations,
  clearCustomKnowledge: () => {
    try { localStorage.removeItem("ictlab_custom_ai_knowledge"); } catch(e) {}
    location.reload();
  }
};

console.log("ICT Lab AI loaded.");
console.log("Knowledge topics:", KNOWLEDGE.length);
console.log("Estimated question phrasings:", countPotentialPhrasings().toLocaleString());

/* ==========================================================
   CHATBOT STARTUP
   Don't display robot until website loader has disappeared
   ========================================================== */

function revealChatbotWhenReady() {

    const body = document.body;

    const loaders = [

        document.getElementById("pageLoader"),

        document.getElementById("loader")

    ].filter(Boolean);



    /* No loader exists */
    if (loaders.length === 0) {

        setTimeout(() => {

            body.classList.add(
                "chatbot-ready"
            );

        }, 350);

        return;
    }



    function loaderFinished() {

        return loaders.every(loader => {

            const style =
                window.getComputedStyle(loader);

            return (

                style.display === "none" ||

                style.visibility === "hidden" ||

                parseFloat(style.opacity) === 0 ||

                loader.classList.contains("hide") ||

                loader.classList.contains("hidden")

            );

        });

    }



    function reveal() {

        if (

            !body.classList.contains(
                "chatbot-ready"
            )

        ) {

            body.classList.add(
                "chatbot-ready"
            );

        }

    }



    if (loaderFinished()) {

        setTimeout(
            reveal,
            250
        );

        return;
    }



    /* Watch loader until your site removes/hides it */

    const observer =
        new MutationObserver(() => {

            if (loaderFinished()) {

                observer.disconnect();

                setTimeout(
                    reveal,
                    250
                );

            }

        });



    loaders.forEach(loader => {

        observer.observe(

            loader,

            {
                attributes: true,

                attributeFilter: [
                    "class",
                    "style"
                ]
            }

        );

    });



    /*
       Backup:
       if custom loader disappears from DOM
    */

    const check =
        setInterval(() => {

            if (

                loaderFinished() ||

                loaders.every(
                    loader =>
                        !document.body.contains(loader)
                )

            ) {

                clearInterval(check);

                observer.disconnect();

                setTimeout(
                    reveal,
                    250
                );

            }

        }, 150);

}



window.addEventListener(
    "load",
    revealChatbotWhenReady
); 

})();
