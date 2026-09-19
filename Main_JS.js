const $ = s => document.querySelector(s);
const content = $("#content");
const sidebar = $("#sidebar");
const title = $("#pageTitle");
const toast = $("#toast");

const tools = {
  integration:{name:"Integration Calculator",icon:"∫",desc:"Numerically estimate definite integrals using Simpson's rule."},
  "number-system":{name:"Number System",icon:"01",desc:"Convert numbers between binary, octal, decimal and hexadecimal."},
  binary:{name:"Binary Calculator",icon:"▣",desc:"Perform AND, OR, XOR, addition, subtraction and shifts."},
  characters:{name:"Character Representation",icon:"Aa",desc:"Inspect Unicode, ASCII, UTF-8 bytes and code points."},
  expression:{name:"Expression Table",icon:"ƒ",desc:"Generate truth tables for common Boolean expressions."},
  kmap:{name:"Karnaugh Map",icon:"▦",desc:"Interactive 4-variable K-map for learning Boolean grouping."},
  cpu:{name:"CPU Simulator",icon:"◈",desc:"Step through a tiny accumulator-based CPU instruction set."},
  fetch:{name:"Fetch–Execute Cycle",icon:"↻",desc:"Visualize PC, MAR, MDR, IR and accumulator movement."},
  scheduling:{name:"CPU Scheduling",icon:"◫",desc:"Compare FCFS and Round Robin scheduling."},
  er:{name:"ER Diagram Builder",icon:"◇",desc:"Create and move simple database entities on a canvas."},
  normalizer:{name:"Database Normalizer",icon:"⊞",desc:"Explore 1NF, 2NF and 3NF from functional dependencies."},
  subnet:{name:"Subnet Calculator",icon:"⌁",desc:"Calculate network, broadcast, usable range and host count."},
  ipmac:{name:"IP / MAC Analyzer",icon:"#",desc:"Validate IPv4/MAC addresses and inspect their structure."},
  network:{name:"Network Playground",icon:"⌘",desc:"Build a small network and send packets between nodes."},
  python:{name:"Python IDLE",icon:"Py",desc:"Browser Python editor powered by Pyodide ."},
  "web-editor":{name:"HTML + CSS Editor",icon:"</>",desc:"Write HTML/CSS and see the live result instantly."},
  qr:{name:"QR Formatter",icon:"QR",desc:"Create a QR code from text or a URL."},
  quiz:{name:"MCQ Quiz Engine",icon:"✓",desc:"Timed multiple-choice practice with instant feedback."},
  games:{name:"Mini Games Hub",icon:"◉",desc:"Small browser games for quick ICT practice."},
  "short-notes-papers":{
  name:"Short Notes & Papers",
  icon:"📝",
  desc:"Access lesson notes, model papers and A/L past papers."
},
  resources:{name:"Resources Exchange",icon:"⇄",desc:"A local demo board for sharing useful learning resources."},
  "ict-tools":{name:"ICT Tool Block",icon:"✦",desc:"Quick-access collection of everyday ICT utilities."},
  "logic-builder":{name:"Logic Gate Builder",icon:"◉",desc:"Build and test AND, OR, NOT, NAND, NOR and XOR logic circuits."},
  flowchart:{name:"Flowchart + Algorithm Simulator",icon:"⇢",desc:"Step through sequence, selection and iteration algorithms visually."},
  "sql-lab":{name:"SQL Practice Lab",icon:"SQL",desc:"Practice SELECT, WHERE and ORDER BY using a safe sample database."},
  "storage-calc":{name:"Storage & Data Transmission",icon:"MB",desc:"Calculate image size, audio size, data transmission time and storage conversions."},
  developer:{name:"Developer",icon:"✦",desc:"About the ICT Toolbox project and its developer."}
};

function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function shell(tool, body, side=""){
  const t=tools[tool];
  title.textContent=t.name;
  content.innerHTML=`<div class="section-head"><div><span class="eyebrow">${t.icon} ICT LAB</span><h2>${t.name}</h2><p>${t.desc}</p></div>${side}</div>${body}`;
}
function toastMsg(m){toast.textContent=m;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800)}

const calculators=[
["integration","∫","Integration","Numerical definite integration"],
["number-system","01","Number System","Binary / decimal / octal / hex"],
["binary","▣","Binary Calculator","Bitwise operations"],
["characters","Aa","Characters","ASCII / Unicode / UTF-8"],
["expression","ƒ","Expression Table","Boolean truth tables"],
["kmap","▦","Karnaugh Map","Boolean simplification practice"],
["cpu","◈","CPU Simulator","Registers + instructions"],
["fetch","↻","Fetch Cycle","CPU fetch / decode / execute"],
["scheduling","◫","CPU Scheduling","FCFS / Round Robin"],
["er","◇","ER Builder","Database modelling"],
["normalizer","⊞","DB Normalizer","1NF / 2NF / 3NF"],
["subnet","⌁","Subnet Calculator","IPv4 subnetting"],
["ipmac","#","IP / MAC Analyzer","Address inspection"],
["network","⌘","Network Playground","Packet simulation"],
["python","Py","Python IDLE","Run Python in browser"],
["web-editor","</>","HTML + CSS","Live editor"],
["qr","QR","QR Formatter","Generate QR codes"],
["quiz","✓","MCQ Quizzes","Timed practice"],
["games","◉","Mini Games","Fast ICT games"],
["resources","⇄","Resources Exchange","Share learning links"],
["ict-tools","✦","ICT Tool Block","Quick utilities"],
["logic-builder","◉","Logic Gate Builder","Interactive digital logic"],
["flowchart","⇢","Flowchart Simulator","Algorithms step-by-step"],
["sql-lab","SQL","SQL Practice Lab","Practice database queries"],
["storage-calc","MB","Storage & Transmission","A/L calculation practice"]
];

function home() {

    title.textContent = "Dashboard";

    content.innerHTML = `

    <!-- ================================
         HERO
    ================================= -->

    <div class="hero">

        <span class="eyebrow">
            INTERACTIVE ICT LEARNING LAB
        </span>

        <h1>
            Build, calculate,
            simulate & learn.
        </h1>

        <p>
            ICT Lab turns difficult A/L ICT concepts into
            interactive tools, visual simulations, coding
            playgrounds and practice activities.
        </p>

        <div style="margin-top:22px">

            <a class="btn primary" href="recordings.html">
                Start Learning →
            </a>

            <a class="btn" href="all-tools.html">
                Explore Tools
            </a>

        </div>

    </div>


    <!-- ================================
         ABOUT ICT LAB
    ================================= -->

    <section class="home-about">

        <div class="home-about-heading">

            <span class="eyebrow">
                WHY ICT LAB?
            </span>

            <h2>
                Everything you need to
                <span>understand ICT.</span>
            </h2>

            <p>
                Don't just read ICT concepts.
                Experiment with them, visualize them,
                test them and learn how they actually work.
            </p>

        </div>


        <!-- FEATURE CARDS -->

        <div class="home-feature-grid">


            <!-- INTERACTIVE TOOLS -->

            <div
                class="home-feature-card"
                data-page="all-tools.html"
            >

                <div class="feature-glow"></div>

                <div class="feature-icon-wrap">

                    <div class="feature-icon">
                        01
                    </div>

                    <span class="feature-orbit"></span>

                </div>

                <div class="feature-number">
                    01
                </div>

                <h3>
                    Interactive ICT Tools
                </h3>

                <p>
                    Solve number systems, binary operations,
                    subnetting, storage calculations and many
                    other ICT problems instantly.
                </p>

                <div class="feature-tags">
                    <span>Binary</span>
                    <span>Subnetting</span>
                    <span>Calculators</span>
                </div>

                <a class="feature-link" href="all-tools.html">Explore tools <b>→</b></a>

            </div>



            <!-- SIMULATIONS -->

            <div
                class="home-feature-card"
                data-page="visual-simulations.html"
            >

                <div class="feature-glow"></div>

                <div class="feature-icon-wrap">

                    <div class="feature-icon">
                        ◈
                    </div>

                    <span class="feature-orbit"></span>

                </div>

                <div class="feature-number">
                    02
                </div>

                <h3>
                    Visual Simulations
                </h3>

                <p>
                    See CPU operations, fetch-execute cycles,
                    networks, logic gates and flowcharts
                    happening visually instead of memorizing
                    them from a textbook.
                </p>

                <div class="feature-tags">
                    <span>CPU</span>
                    <span>Networks</span>
                    <span>Logic</span>
                </div>

                <a class="feature-link" href="visual-simulations.html">Try simulations <b>→</b></a>

            </div>



            <!-- CODING -->

            <div
                class="home-feature-card"
                data-page="coding-tools.html"
            >

                <div class="feature-glow"></div>

                <div class="feature-icon-wrap">

                    <div class="feature-icon">
                        &lt;/&gt;
                    </div>

                    <span class="feature-orbit"></span>

                </div>

                <div class="feature-number">
                    03
                </div>

                <h3>
                    Learn by Coding
                </h3>

                <p>
                    Practice Python and web development
                    directly inside ICT Lab with interactive
                    editors, previews and coding assistance.
                </p>

                <div class="feature-tags">
                    <span>Python</span>
                    <span>HTML</span>
                    <span>CSS</span>
                </div>

                <a class="feature-link" href="coding-tools.html">Start coding <b>→</b></a>

            </div>



            <!-- PRACTICE -->

            <div
                class="home-feature-card"
                data-page="mcq-quiz-engine.html"
            >

                <div class="feature-glow"></div>

                <div class="feature-icon-wrap">

                    <div class="feature-icon">
                        ✓
                    </div>

                    <span class="feature-orbit"></span>

                </div>

                <div class="feature-number">
                    04
                </div>

                <h3>
                    Test Your Knowledge
                </h3>

                <p>
                    Practice ICT concepts using randomized
                    MCQs, instant answers, explanations and
                    interactive learning games.
                </p>

                <div class="feature-tags">
                    <span>MCQs</span>
                    <span>Games</span>
                    <span>Practice</span>
                </div>

                <a class="feature-link" href="mcq-quiz-engine.html">Start practicing <b>→</b></a>

            </div>

        </div>


        <!-- LEARNING FLOW -->

        <div class="home-learning-flow">

            <div class="learning-flow-intro">

                <span class="eyebrow">
                    LEARN DIFFERENTLY
                </span>

                <h2>
                    From concept
                    <span>to understanding.</span>
                </h2>

                <p>
                    ICT Lab is designed around a simple
                    learning process.
                </p>

            </div>


            <div class="learning-flow">

                <div class="learning-step">

                    <div class="learning-step-icon">
                        ◎
                    </div>

                    <strong>
                        Learn
                    </strong>

                    <span>
                        Understand the concept
                    </span>

                </div>


                <div class="learning-arrow">
                    →
                </div>


                <div class="learning-step">

                    <div class="learning-step-icon">
                        ◇
                    </div>

                    <strong>
                        Visualize
                    </strong>

                    <span>
                        See how it works
                    </span>

                </div>


                <div class="learning-arrow">
                    →
                </div>


                <div class="learning-step">

                    <div class="learning-step-icon">
                        &lt;/&gt;
                    </div>

                    <strong>
                        Experiment
                    </strong>

                    <span>
                        Try it yourself
                    </span>

                </div>


                <div class="learning-arrow">
                    →
                </div>


                <div class="learning-step">

                    <div class="learning-step-icon">
                        ✓
                    </div>

                    <strong>
                        Practice
                    </strong>

                    <span>
                        Test your knowledge
                    </span>

                </div>

            </div>

        </div>


        <!-- FINAL CTA -->

        <div class="home-cta">

            <div class="home-cta-decoration">
                01
            </div>

            <div>

                <span class="eyebrow">
                    READY TO EXPLORE?
                </span>

                <h2>
                    Turn ICT theory into
                    something you can see.
                </h2>

                <p>
                    Choose a tool, experiment with it
                    and learn at your own pace.
                </p>

            </div>


            <a class="btn primary" href="recordings.html">Start Learning →</a>

        </div>

    </section>

    `;


    bindToolButtons();

    if (typeof initHomeAnimations === "function") {
    initHomeAnimations();
}

} 
function bindToolButtons(){document.querySelectorAll("[data-tool]").forEach(b=>b.onclick=()=>loadTool(b.dataset.tool))}

function integration(){
 shell("integration",`<div class="workspace"><div class="card"><div class="row"><div><label>Function f(x)</label><input id="intFn" value="Math.sin(x)"></div><div><label>Lower limit</label><input id="intA" type="number" value="0"></div><div><label>Upper limit</label><input id="intB" type="number" value="${Math.PI}"></div><div><label>Intervals (even)</label><input id="intN" type="number" value="1000"></div></div><button class="btn primary" id="calcInt">Calculate</button><div class="result" id="intOut" style="margin-top:14px">Try Math.sin(x), x*x, Math.exp(-x*x), etc.</div></div><div class="card"><h3>How it works</h3><p class="muted">The demo evaluates your JavaScript math expression and applies Simpson's 1/3 rule. Use <code>Math.</code> functions such as sin, cos, sqrt and exp.</p></div></div>`);
 $("#calcInt").onclick=()=>{try{let f=eval("x=>"+$("#intFn").value),a=+$("#intA").value,b=+$("#intB").value,n=Math.max(2,+$("#intN").value|0);if(n%2)n++;let h=(b-a)/n,s=f(a)+f(b);for(let i=1;i<n;i++)s+=(i%2?4:2)*f(a+i*h);$("#intOut").textContent=`Integral ≈ ${s*h/3}` }catch(e){$("#intOut").textContent="Invalid expression."}};
}
function numberSystem(){
 shell("number-system",`<div class="workspace"><div class="card"><div class="row"><div><label>Value</label><input id="numVal" value="255"></div><div><label>Input base</label><select id="numBase"><option>2</option><option>8</option><option selected>10</option><option>16</option></select></div></div><button class="btn primary" id="convertNum">Convert</button><div class="result" id="numOut" style="margin-top:14px"></div></div><div class="card"><h3>Quick reference</h3><p class="muted">Binary = base 2 · Octal = base 8 · Decimal = base 10 · Hexadecimal = base 16.</p></div></div>`);
 $("#convertNum").onclick=()=>{try{let v=parseInt($("#numVal").value, +$("#numBase").value);if(isNaN(v))throw 0;$("#numOut").textContent=`Binary: ${v.toString(2)}\nOctal: ${v.toString(8)}\nDecimal: ${v}\nHex: ${v.toString(16).toUpperCase()}` }catch{$("#numOut").textContent="Enter a valid number for the selected base."}};
 $("#convertNum").click();
}
function binary(){
 shell("binary",`<div class="card"><div class="row3"><div><label>A (binary)</label><input id="ba" value="1010"></div><div><label>Operation</label><select id="bop"><option>AND</option><option>OR</option><option>XOR</option><option>ADD</option><option>SUB</option><option>LSL</option><option>LSR</option></select></div><div><label>B / shift</label><input id="bb" value="0011"></div></div><button class="btn primary" id="bc">Calculate</button><div class="result" id="bo" style="margin-top:14px"></div></div>`);
 $("#bc").onclick=()=>{let a=parseInt($("#ba").value,2),b=parseInt($("#bb").value,2),op=$("#bop").value,r=op==="AND"?a&b:op==="OR"?a|b:op==="XOR"?a^b:op==="ADD"?a+b:op==="SUB"?a-b:op==="LSL"?a<<b:a>>>b;$("#bo").textContent=`Decimal: ${r}\nBinary: ${(r>>>0).toString(2)}`};$("#bc").click();
}
function characters(){
 shell("characters",`<div class="workspace"><div class="card"><label>Character / text</label><input id="charIn" value="A"><button class="btn primary" id="charGo" style="margin-top:12px">Analyze</button><div class="result" id="charOut" style="margin-top:14px"></div></div><div class="card"><h3>Representation</h3><p class="muted">Useful for understanding ASCII, Unicode code points and UTF-8 encoding.</p></div></div>`);
 $("#charGo").onclick=()=>{let s=$("#charIn").value||" ", rows=[...s].map(c=>{let bytes=[...new TextEncoder().encode(c)].map(x=>x.toString(16).padStart(2,"0")).join(" ");return `${c}  | U+${c.codePointAt(0).toString(16).toUpperCase().padStart(4,"0")} | ${c.codePointAt(0)} | UTF-8 ${bytes}`});$("#charOut").textContent=rows.join("\n")};
 $("#charGo").click();
}
function expression() {

  shell("expression", `
    <div class="expression-pro">

      <!-- CONTROL PANEL -->
      <div class="card expression-controls">

        <div class="expression-top-grid">

          <div>
            <label>Variables</label>

            <select id="exprVars">
              <option value="2">2 Variables — A, B</option>
              <option value="3">3 Variables — A, B, C</option>
              <option value="4">4 Variables — A, B, C, D</option>
            </select>
          </div>


          <div class="expression-input-wrap">

            <label>Boolean Expression</label>

            <input
              id="exprInput"
              value="A AND NOT B"
              autocomplete="off"
              spellcheck="false"
              placeholder="Example: A AND NOT B"
            >

            <div id="exprStatus" class="expr-status">
              Ready
            </div>

          </div>

        </div>


        <!-- OPERATOR BUTTONS -->
        <div class="expr-section-title">
          Quick operators
        </div>

        <div class="expr-operator-buttons">

          <button class="expr-op" data-op=" AND ">
            AND
          </button>

          <button class="expr-op" data-op=" OR ">
            OR
          </button>

          <button class="expr-op" data-op=" NOT ">
            NOT
          </button>

          <button class="expr-op" data-op=" XOR ">
            XOR
          </button>

          <button class="expr-op" data-op=" NAND ">
            NAND
          </button>

          <button class="expr-op" data-op=" NOR ">
            NOR
          </button>

          <button class="expr-op" data-op="(">
            (
          </button>

          <button class="expr-op" data-op=")">
            )
          </button>

        </div>


        <!-- EXAMPLES -->
        <div class="expr-section-title">
          Examples
        </div>

        <div class="expr-example-buttons">

          <button class="btn expr-example" data-exp="A AND B">
            A AND B
          </button>

          <button class="btn expr-example" data-exp="A OR B">
            A OR B
          </button>

          <button class="btn expr-example" data-exp="A XOR B">
            A XOR B
          </button>

          <button class="btn expr-example" data-exp="NOT A">
            NOT A
          </button>

          <button class="btn expr-example" data-exp="(A AND B) OR C">
            (A AND B) OR C
          </button>

          <button class="btn expr-example" data-exp="A NAND B">
            A NAND B
          </button>

        </div>


        <div class="expr-main-actions">

          <button class="btn primary" id="exprGenerate">
            Generate Truth Table
          </button>

          <button class="btn" id="exprClear">
            Clear
          </button>

          <button class="btn" id="exprCopy">
            Copy Table
          </button>

        </div>

      </div>


      <!-- RESULTS SUMMARY -->
      <div class="expr-summary-grid">

        <div class="card expr-summary-card">
          <span>Rows</span>
          <strong id="exprRows">4</strong>
        </div>

        <div class="card expr-summary-card">
          <span>Outputs = 1</span>
          <strong id="exprOnes">0</strong>
        </div>

        <div class="card expr-summary-card">
          <span>Outputs = 0</span>
          <strong id="exprZeros">0</strong>
        </div>

        <div class="card expr-summary-card">
          <span>Expression Type</span>
          <strong id="exprType">—</strong>
        </div>

      </div>


      <!-- TRUTH TABLE -->
      <div class="card expression-table-card">

        <div class="expr-table-header">

          <div>
            <h3>Truth Table</h3>
            <p class="muted">
              Every possible input combination is calculated automatically.
            </p>
          </div>

          <div class="expr-expression-preview">
            <span>F =</span>
            <code id="exprPreview">A AND NOT B</code>
          </div>

        </div>

        <div class="expression-table-scroll">
          <div id="truth"></div>
        </div>

      </div>


      <!-- BOOLEAN INFORMATION -->
      <div class="expr-result-grid">

        <div class="card expr-info-card">

          <span class="expr-info-label">
            Minterms
          </span>

          <code id="exprMinterms">
            —
          </code>

          <small>
            Rows where the output is 1.
          </small>

        </div>


        <div class="card expr-info-card">

          <span class="expr-info-label">
            Maxterms
          </span>

          <code id="exprMaxterms">
            —
          </code>

          <small>
            Rows where the output is 0.
          </small>

        </div>


        <div class="card expr-info-card">

          <span class="expr-info-label">
            Canonical SOP
          </span>

          <code id="exprSOP">
            —
          </code>

          <small>
            Sum of minterms.
          </small>

        </div>


        <div class="card expr-info-card">

          <span class="expr-info-label">
            Canonical POS
          </span>

          <code id="exprPOS">
            —
          </code>

          <small>
            Product of maxterms.
          </small>

        </div>

      </div>


      <!-- HELP -->
      <div class="card expression-help">

        <h3>Supported Operators</h3>

        <div class="expr-help-grid">

          <div>
            <strong>AND</strong>
            <span>A AND B</span>
          </div>

          <div>
            <strong>OR</strong>
            <span>A OR B</span>
          </div>

          <div>
            <strong>NOT</strong>
            <span>NOT A</span>
          </div>

          <div>
            <strong>XOR</strong>
            <span>A XOR B</span>
          </div>

          <div>
            <strong>NAND</strong>
            <span>A NAND B</span>
          </div>

          <div>
            <strong>NOR</strong>
            <span>A NOR B</span>
          </div>

        </div>

        <p class="muted expr-help-note">
          You can also use:
          && for AND,
          || for OR,
          ! for NOT,
          ∧, ∨, ¬ and ⊕.
        </p>

      </div>

    </div>
  `);







  const variableNames =
    ["A", "B", "C", "D"];







  function normalizeExpression(source) {

    return source
      .trim()

      .replace(/&&/g, " AND ")
      .replace(/\|\|/g, " OR ")
      .replace(/!/g, " NOT ")

      .replace(/¬/g, " NOT ")
      .replace(/∧/g, " AND ")
      .replace(/∨/g, " OR ")
      .replace(/⊕/g, " XOR ")

      .replace(/\bAND\b/gi, " AND ")
      .replace(/\bOR\b/gi, " OR ")
      .replace(/\bNOT\b/gi, " NOT ")
      .replace(/\bXOR\b/gi, " XOR ")
      .replace(/\bNAND\b/gi, " NAND ")
      .replace(/\bNOR\b/gi, " NOR ")

      .replace(/\s+/g, " ")
      .trim();

  }


  function tokenizeExpression(source) {

    const normalized =
      normalizeExpression(source);

    const tokens = [];

    const regex =
      /\b(?:AND|OR|NOT|XOR|NAND|NOR)\b|[A-D01()]|[^\s]+/gi;

    let match;

    while (
      (match = regex.exec(normalized)) !== null
    ) {

      tokens.push(
        match[0].toUpperCase()
      );

    }

    return tokens;

  }




  function evaluateBooleanExpression(
    source,
    values
  ) {

    const tokens =
      tokenizeExpression(source);

    let position = 0;



    function peek() {

      return tokens[position];

    }



    function consume() {

      return tokens[position++];

    }



    function parsePrimary() {

      const token =
        consume();


      if (token === "(") {

        const value =
          parseOR();

        if (consume() !== ")") {

          throw new Error(
            "Missing closing bracket"
          );

        }

        return value;

      }


      if (
        variableNames.includes(token)
      ) {

        if (
          !(token in values)
        ) {

          throw new Error(
            "Variable " +
            token +
            " is not selected"
          );

        }

        return values[token];

      }


      if (token === "1")
        return true;


      if (token === "0")
        return false;


      throw new Error(
        "Unexpected value: " +
        (token || "end")
      );

    }



    function parseNOT() {

      if (peek() === "NOT") {

        consume();

        return !parseNOT();

      }

      return parsePrimary();

    }



    function parseAND() {

      let left =
        parseNOT();


      while (
        peek() === "AND" ||
        peek() === "NAND"
      ) {

        const operator =
          consume();

        const right =
          parseNOT();


        if (operator === "AND")
          left = left && right;

        else
          left = !(left && right);

      }

      return left;

    }



    function parseXOR() {

      let left =
        parseAND();


      while (
        peek() === "XOR"
      ) {

        consume();

        const right =
          parseAND();

        left =
          Boolean(left) !==
          Boolean(right);

      }

      return left;

    }



    function parseOR() {

      let left =
        parseXOR();


      while (
        peek() === "OR" ||
        peek() === "NOR"
      ) {

        const operator =
          consume();

        const right =
          parseXOR();


        if (operator === "OR")
          left = left || right;

        else
          left = !(left || right);

      }

      return left;

    }



    if (!tokens.length) {

      throw new Error(
        "Enter a Boolean expression"
      );

    }


    const result =
      parseOR();


    if (position < tokens.length) {

      throw new Error(
        "Check expression near " +
        tokens[position]
      );

    }


    return Boolean(result);

  }




  function buildCanonicalSOP(
    minterms,
    variableCount
  ) {

    if (!minterms.length)
      return "0";


    if (
      minterms.length ===
      2 ** variableCount
    )
      return "1";


    return minterms
      .map(index => {

        const binary =
          index
            .toString(2)
            .padStart(
              variableCount,
              "0"
            );


        return binary
          .split("")
          .map(
            (bit, i) =>
              bit === "1"
                ? variableNames[i]
                : variableNames[i] + "'"
          )
          .join("");

      })
      .join(" + ");

  }





  function buildCanonicalPOS(
    maxterms,
    variableCount
  ) {

    if (!maxterms.length)
      return "1";


    if (
      maxterms.length ===
      2 ** variableCount
    )
      return "0";


    return maxterms
      .map(index => {

        const binary =
          index
            .toString(2)
            .padStart(
              variableCount,
              "0"
            );


        const terms =
          binary
            .split("")
            .map(
              (bit, i) =>
                bit === "0"
                  ? variableNames[i]
                  : variableNames[i] + "'"
            );


        return (
          "(" +
          terms.join(" + ") +
          ")"
        );

      })
      .join("");

  }




  function generateExpressionTable() {

    const variableCount =
      Number(
        $("#exprVars").value
      );


    const names =
      variableNames.slice(
        0,
        variableCount
      );


    const expression =
      $("#exprInput")
        .value
        .trim();


    $("#exprPreview").textContent =
      expression || "—";


    const rows =
      2 ** variableCount;


    const minterms = [];
    const maxterms = [];


    let tableHTML = `

      <table class="expression-truth-table">

        <thead>

          <tr>

            <th>#</th>

            ${names
              .map(
                name =>
                  `<th>${name}</th>`
              )
              .join("")}

            <th>F</th>

          </tr>

        </thead>

        <tbody>
    `;


    try {


      const testValues = {};

      names.forEach(
        name =>
          testValues[name] = false
      );


      evaluateBooleanExpression(
        expression,
        testValues
      );


      for (
        let row = 0;
        row < rows;
        row++
      ) {

        const values = {};

        const bits = [];


        names.forEach(
          (name, index) => {

            const bit =
              (
                row >>
                (
                  variableCount -
                  index -
                  1
                )
              ) & 1;


            values[name] =
              Boolean(bit);

            bits.push(bit);

          }
        );


        const result =
          evaluateBooleanExpression(
            expression,
            values
          )
            ? 1
            : 0;


        if (result)
          minterms.push(row);

        else
          maxterms.push(row);


        tableHTML += `

          <tr>

            <td class="expr-row-number">
              ${row}
            </td>

            ${bits
              .map(
                bit =>
                  `<td>${bit}</td>`
              )
              .join("")}

            <td>

              <span class="
                expr-result-bit
                ${result ? "one" : "zero"}
              ">
                ${result}
              </span>

            </td>

          </tr>

        `;

      }


      tableHTML += `

        </tbody>

      </table>

      `;


      $("#truth").innerHTML =
        tableHTML;




      $("#exprRows").textContent =
        rows;


      $("#exprOnes").textContent =
        minterms.length;


      $("#exprZeros").textContent =
        maxterms.length;




      let type =
        "Contingency";


      if (
        minterms.length === rows
      )
        type =
          "Tautology";

      else if (
        minterms.length === 0
      )
        type =
          "Contradiction";


      $("#exprType").textContent =
        type;




      $("#exprMinterms").textContent =
        minterms.length
          ? "Σm(" +
            minterms.join(", ") +
            ")"
          : "Σm( )";


      $("#exprMaxterms").textContent =
        maxterms.length
          ? "ΠM(" +
            maxterms.join(", ") +
            ")"
          : "ΠM( )";




      $("#exprSOP").textContent =
        buildCanonicalSOP(
          minterms,
          variableCount
        );


      $("#exprPOS").textContent =
        buildCanonicalPOS(
          maxterms,
          variableCount
        );




      $("#exprStatus").className =
        "expr-status valid";

      $("#exprStatus").textContent =
        "✓ Valid expression";

    }

    catch (error) {

      $("#truth").innerHTML = `

        <div class="expr-error-box">

          <strong>
            Expression error
          </strong>

          <span>
            ${esc(error.message)}
          </span>

        </div>

      `;


      $("#exprStatus").className =
        "expr-status invalid";


      $("#exprStatus").textContent =
        "✕ " + error.message;


      $("#exprRows").textContent =
        "—";

      $("#exprOnes").textContent =
        "—";

      $("#exprZeros").textContent =
        "—";

      $("#exprType").textContent =
        "Invalid";


      $("#exprMinterms").textContent =
        "—";

      $("#exprMaxterms").textContent =
        "—";

      $("#exprSOP").textContent =
        "—";

      $("#exprPOS").textContent =
        "—";

    }

  }



  
     

  document
    .querySelectorAll(".expr-op")
    .forEach(button => {

      button.onclick = () => {

        const input =
          $("#exprInput");

        const operator =
          button.dataset.op;


        const start =
          input.selectionStart;

        const end =
          input.selectionEnd;


        const old =
          input.value;


        input.value =
          old.slice(0, start) +
          operator +
          old.slice(end);


        const position =
          start +
          operator.length;


        input.focus();

        input.setSelectionRange(
          position,
          position
        );


        validateLive();

      };

    });




  document
    .querySelectorAll(
      ".expr-example"
    )
    .forEach(button => {

      button.onclick = () => {

        $("#exprInput").value =
          button.dataset.exp;

        generateExpressionTable();

      };

    });




  function validateLive() {

    const variableCount =
      Number(
        $("#exprVars").value
      );


    const names =
      variableNames.slice(
        0,
        variableCount
      );


    const values = {};

    names.forEach(
      name =>
        values[name] = false
    );


    try {

      evaluateBooleanExpression(
        $("#exprInput").value,
        values
      );


      $("#exprStatus").className =
        "expr-status valid";


      $("#exprStatus").textContent =
        "✓ Expression looks valid";

    }

    catch (error) {

      $("#exprStatus").className =
        "expr-status invalid";


      $("#exprStatus").textContent =
        error.message;

    }

  }



  $("#exprInput").oninput =
    validateLive;


  $("#exprVars").onchange =
    generateExpressionTable;


  $("#exprGenerate").onclick =
    generateExpressionTable;




  $("#exprClear").onclick = () => {

    $("#exprInput").value = "";

    $("#truth").innerHTML = "";

    $("#exprStatus").className =
      "expr-status";

    $("#exprStatus").textContent =
      "Enter an expression";

  };




  $("#exprCopy").onclick =
    async () => {

      const table =
        document.querySelector(
          ".expression-truth-table"
        );


      if (!table) {

        toastMsg(
          "Generate a table first."
        );

        return;

      }


      const lines =
        [...table.rows]
          .map(row =>
            [...row.cells]
              .map(cell =>
                cell.innerText.trim()
              )
              .join("\t")
          )
          .join("\n");


      try {

        await navigator.clipboard
          .writeText(lines);

        toastMsg(
          "Truth table copied."
        );

      }

      catch {

        toastMsg(
          "Could not copy table."
        );

      }

    };




  generateExpressionTable();

}
function kmap() {

  shell("kmap", `
    <div class="workspace">

      <div class="card">

        <div class="kmap-toolbar">

          <div>
            <label>Number of variables</label>

            <select id="kmapVars">
              <option value="2">2 Variables (A, B)</option>
              <option value="3">3 Variables (A, B, C)</option>
              <option value="4" selected>4 Variables (A, B, C, D)</option>
            </select>
          </div>

          <div>
            <label>Set all cells</label>

            <div style="display:flex;gap:8px">
              <button class="btn" id="kmapAll0">All 0</button>
              <button class="btn" id="kmapAll1">All 1</button>
              <button class="btn" id="kmapClear">Clear</button>
            </div>
          </div>

        </div>

        <div class="kmap-container">

          <div id="kmapGridAdvanced"></div>

        </div>

      </div>


      <div class="card">

        <h3>Boolean Result</h3>

        <div class="kmap-results">

          <div class="kmap-result-box">
            <span>Minterms</span>
            <code id="kmapMinterms">—</code>
          </div>

          <div class="kmap-result-box">
            <span>Maxterms</span>
            <code id="kmapMaxterms">—</code>
          </div>

          <div class="kmap-result-box">
            <span>Canonical SOP</span>
            <code id="kmapCanonicalSOP">—</code>
          </div>

          <div class="kmap-result-box">
            <span>Canonical POS</span>
            <code id="kmapCanonicalPOS">—</code>
          </div>

          <div class="kmap-result-box important">
            <span>Simplified SOP</span>
            <code id="kmapSOP">—</code>
          </div>

          <div class="kmap-result-box important">
            <span>Simplified POS</span>
            <code id="kmapPOS">—</code>
          </div>

        </div>

      </div>

    </div>
  `);


  let variableCount = 4;

  let values = [];


  const variableNames = ["A", "B", "C", "D"];


  const gray2 = [0, 1];

  const gray4 = [0, 1, 3, 2];



  

  function buildMap() {

    variableCount = Number($("#kmapVars").value);

    values = new Array(2 ** variableCount).fill(0);

    const container = $("#kmapGridAdvanced");

    let html = "";


   
    if (variableCount === 2) {

      html = `

        <div class="kmap-table kmap-2">

          <div class="kmap-corner">
            A \\ B
          </div>

          <div class="kmap-header">0</div>
          <div class="kmap-header">1</div>

      `;


      gray2.forEach(row => {

        html += `<div class="kmap-header">${row}</div>`;


        gray2.forEach(col => {

          const minterm = (row << 1) | col;

          html += createCell(minterm);

        });

      });


      html += `</div>`;

    }



   

    else if (variableCount === 3) {

      html = `

        <div class="kmap-table kmap-3">

          <div class="kmap-corner">
            A \\ BC
          </div>

          <div class="kmap-header">00</div>
          <div class="kmap-header">01</div>
          <div class="kmap-header">11</div>
          <div class="kmap-header">10</div>

      `;


      gray2.forEach(row => {

        html += `<div class="kmap-header">${row}</div>`;


        gray4.forEach(col => {

          const minterm = (row << 2) | col;

          html += createCell(minterm);

        });

      });


      html += `</div>`;

    }




    else {

      html = `

        <div class="kmap-table kmap-4">

          <div class="kmap-corner">
            AB \\ CD
          </div>

          <div class="kmap-header">00</div>
          <div class="kmap-header">01</div>
          <div class="kmap-header">11</div>
          <div class="kmap-header">10</div>

      `;


      gray4.forEach(row => {

        html += `
          <div class="kmap-header">
            ${row.toString(2).padStart(2, "0")}
          </div>
        `;


        gray4.forEach(col => {

          const minterm = (row << 2) | col;

          html += createCell(minterm);

        });

      });


      html += `</div>`;

    }


    container.innerHTML = html;


    document
      .querySelectorAll(".advanced-kcell")
      .forEach(cell => {

        cell.onclick = () => {

          const index = Number(cell.dataset.index);

          values[index] = values[index] ? 0 : 1;

          refreshCells();

          calculateResults();

        };

      });


    refreshCells();

    calculateResults();

  }



  function createCell(minterm) {

    return `

      <button
        class="advanced-kcell"
        data-index="${minterm}"
        title="Minterm ${minterm}"
      >

        <span class="kmap-value">0</span>

        <small>m${minterm}</small>

      </button>

    `;

  }



  function refreshCells() {

    document
      .querySelectorAll(".advanced-kcell")
      .forEach(cell => {

        const index = Number(cell.dataset.index);

        const value = values[index];

        cell.classList.toggle("on", value === 1);

        cell.querySelector(".kmap-value").textContent = value;

      });

  }





  function canonicalSOP(minterms) {

    if (!minterms.length)
      return "0";


    if (minterms.length === 2 ** variableCount)
      return "1";


    return minterms.map(index => {

      const binary =
        index
          .toString(2)
          .padStart(variableCount, "0");


      return binary
        .split("")
        .map((bit, i) => {

          const v = variableNames[i];

          return bit === "1"
            ? v
            : v + "'";

        })
        .join("");

    }).join(" + ");

  }



  function canonicalPOS(maxterms) {

    if (!maxterms.length)
      return "1";


    if (maxterms.length === 2 ** variableCount)
      return "0";


    return maxterms.map(index => {

      const binary =
        index
          .toString(2)
          .padStart(variableCount, "0");


      return "(" +

        binary
          .split("")
          .map((bit, i) => {

            const v = variableNames[i];

            return bit === "0"
              ? v
              : v + "'";

          })
          .join(" + ")

        + ")";

    }).join("");

  }



  

  function combineTerms(a, b) {

    let difference = 0;

    let result = "";


    for (let i = 0; i < a.length; i++) {

      if (a[i] !== b[i]) {

        if (a[i] === "-" || b[i] === "-")
          return null;

        difference++;

        result += "-";

      }

      else {

        result += a[i];

      }

    }


    return difference === 1
      ? result
      : null;

  }



  function termCovers(term, minterm) {

    const binary =
      minterm
        .toString(2)
        .padStart(variableCount, "0");


    for (let i = 0; i < term.length; i++) {

      if (
        term[i] !== "-" &&
        term[i] !== binary[i]
      ) {

        return false;

      }

    }


    return true;

  }



  function getPrimeImplicants(minterms) {

    if (!minterms.length)
      return [];


    let current = minterms.map(m => ({

      term:
        m
          .toString(2)
          .padStart(variableCount, "0"),

      used: false

    }));


    let primes = [];


    while (current.length) {

      current.forEach(x => x.used = false);

      const next = [];


      for (let i = 0; i < current.length; i++) {

        for (let j = i + 1; j < current.length; j++) {

          const combined =
            combineTerms(
              current[i].term,
              current[j].term
            );


          if (combined !== null) {

            current[i].used = true;

            current[j].used = true;


            if (!next.some(x => x.term === combined)) {

              next.push({
                term: combined,
                used: false
              });

            }

          }

        }

      }


      current.forEach(x => {

        if (
          !x.used &&
          !primes.includes(x.term)
        ) {

          primes.push(x.term);

        }

      });


      current = next;

    }


    return primes;

  }



  function literalCount(term) {

    return [...term]
      .filter(x => x !== "-")
      .length;

  }



 
  function chooseBestImplicants(primes, minterms) {

    if (!minterms.length)
      return [];


    const coverage = primes.map(term =>

      minterms.filter(m =>
        termCovers(term, m)
      )

    );


    let best = null;


    function search(index, chosen, covered) {

      if (
        minterms.every(m => covered.has(m))
      ) {

        const literals =
          chosen.reduce(
            (sum, i) =>
              sum + literalCount(primes[i]),
            0
          );


        if (
          !best ||
          chosen.length < best.chosen.length ||
          (
            chosen.length === best.chosen.length &&
            literals < best.literals
          )
        ) {

          best = {
            chosen: [...chosen],
            literals
          };

        }


        return;

      }


      if (
        best &&
        chosen.length >= best.chosen.length
      )
        return;


      let target =
        minterms.find(m =>
          !covered.has(m)
        );


      for (let i = index; i < primes.length; i++) {

        if (!coverage[i].includes(target))
          continue;


        const newCovered =
          new Set(covered);


        coverage[i]
          .forEach(m =>
            newCovered.add(m)
          );


        chosen.push(i);

        search(
          i + 1,
          chosen,
          newCovered
        );

        chosen.pop();

      }

    }


    search(
      0,
      [],
      new Set()
    );


    return best
      ? best.chosen.map(i => primes[i])
      : primes;

  }



  function minimize(minterms) {

    if (!minterms.length)
      return [];


    if (minterms.length === 2 ** variableCount)
      return ["-".repeat(variableCount)];


    const primes =
      getPrimeImplicants(minterms);


    return chooseBestImplicants(
      primes,
      minterms
    );

  }



 

  function implicantToSOP(term) {

    let result = "";


    [...term].forEach((bit, i) => {

      if (bit === "-")
        return;


      result +=
        bit === "1"
          ? variableNames[i]
          : variableNames[i] + "'";

    });


    return result || "1";

  }




  function implicantToPOS(term) {

    const parts = [];


    [...term].forEach((bit, i) => {

      if (bit === "-")
        return;


      

      parts.push(

        bit === "1"
          ? variableNames[i] + "'"
          : variableNames[i]

      );

    });


    if (!parts.length)
      return "0";


    return "(" +
      parts.join(" + ")
      + ")";

  }



  

  function calculateResults() {

    const minterms = [];

    const maxterms = [];


    values.forEach((value, i) => {

      if (value === 1)
        minterms.push(i);

      else
        maxterms.push(i);

    });


    $("#kmapMinterms").textContent =
      minterms.length
        ? "Σm(" + minterms.join(", ") + ")"
        : "Σm( )";


    $("#kmapMaxterms").textContent =
      maxterms.length
        ? "ΠM(" + maxterms.join(", ") + ")"
        : "ΠM( )";


    $("#kmapCanonicalSOP").textContent =
      canonicalSOP(minterms);


    $("#kmapCanonicalPOS").textContent =
      canonicalPOS(maxterms);



    /*SOP*/

    if (!minterms.length) {

      $("#kmapSOP").textContent = "0";

    }

    else if (
      minterms.length === 2 ** variableCount
    ) {

      $("#kmapSOP").textContent = "1";

    }

    else {

      const implicants =
        minimize(minterms);


      $("#kmapSOP").textContent =
        implicants
          .map(implicantToSOP)
          .join(" + ");

    }



    /*POS*/

    if (!maxterms.length) {

      $("#kmapPOS").textContent = "1";

    }

    else if (
      maxterms.length === 2 ** variableCount
    ) {

      $("#kmapPOS").textContent = "0";

    }

    else {

      const zeroImplicants =
        minimize(maxterms);


      $("#kmapPOS").textContent =
        zeroImplicants
          .map(implicantToPOS)
          .join("");

    }

  }





  $("#kmapVars").onchange =
    buildMap;


  $("#kmapAll0").onclick = () => {

    values.fill(0);

    refreshCells();

    calculateResults();

  };


  $("#kmapAll1").onclick = () => {

    values.fill(1);

    refreshCells();

    calculateResults();

  };


  $("#kmapClear").onclick = () => {

    values.fill(0);

    refreshCells();

    calculateResults();

  };


  buildMap();

} 
function cpu(){
 shell("cpu",`<div class="workspace"><div class="card"><h3>Accumulator CPU</h3><p class="muted">Instructions: LDA n, ADD n, SUB n, STA n, JMP n, HLT. One instruction per line.</p><textarea id="prog">LDA 5\nADD 7\nSTA 20\nHLT</textarea><button class="btn primary" id="runCpu" style="margin-top:12px">Run program</button></div><div class="card"><h3>Registers</h3><div id="cpuRegs" class="result">ACC: 0\nPC: 0\nMemory[20]: 0</div></div></div>`);
 $("#runCpu").onclick=()=>{let p=$("#prog").value.split("\n").map(x=>x.trim()).filter(Boolean),pc=0,acc=0,mem={};let steps=0;while(pc<p.length&&steps++<100){let [op,arg]=p[pc].split(/\s+/);let n=+arg;switch(op){case"LDA":acc=n;break;case"ADD":acc+=n;break;case"SUB":acc-=n;break;case"STA":mem[n]=acc;break;case"JMP":pc=n;continue;case"HLT":pc=p.length;continue}pc++}$("#cpuRegs").textContent=`ACC: ${acc}\nPC: ${pc}\nMemory: ${JSON.stringify(mem)}\nSteps: ${steps}`};
}
function fetchCycle() {

  shell("fetch", `
    <div class="fetch-pro">

      <!-- OVERVIEW -->
      <div class="card fetch-overview">

        <div class="fetch-overview-top">

          <div>
            <h3>Fetch → Decode → Execute Cycle</h3>

            <p class="muted">
              Step through how the CPU retrieves and executes
              an instruction from memory.
            </p>
          </div>

          <div class="fetch-counter">
            Step
            <strong id="fetchStepNumber">1 / 6</strong>
          </div>

        </div>


        <!-- MAIN FLOW -->
        <div class="fetch-main-flow">

          <div class="fetch-phase active" data-phase="fetch">
            <span>1</span>
            <strong>FETCH</strong>
            <small>Get instruction</small>
          </div>

          <div class="fetch-flow-arrow">→</div>

          <div class="fetch-phase" data-phase="decode">
            <span>2</span>
            <strong>DECODE</strong>
            <small>Understand instruction</small>
          </div>

          <div class="fetch-flow-arrow">→</div>

          <div class="fetch-phase" data-phase="execute">
            <span>3</span>
            <strong>EXECUTE</strong>
            <small>Perform operation</small>
          </div>

          <div class="fetch-flow-arrow">↻</div>

        </div>

      </div>


      <!-- CPU DIAGRAM -->
      <div class="card fetch-diagram-card">

        <div class="fetch-card-title">
          <div>
            <h3>CPU Data Flow</h3>
            <p class="muted">
              The highlighted register shows where data is moving.
            </p>
          </div>

          <button class="btn" id="fetchReset">
            Reset
          </button>
        </div>


        <div class="cpu-cycle-diagram">

          <!-- MEMORY -->
          <div class="cpu-block memory-block" id="cycleMemory">

            <div class="cpu-block-icon">MEM</div>

            <strong>Main Memory</strong>

            <span id="memoryInstruction">
              Address 10: ADD 5
            </span>

          </div>


          <!-- ARROW -->
          <div class="cpu-data-arrow horizontal" id="arrowMemoryCPU">
            <span>⇄</span>
            <small>Address / Data Bus</small>
          </div>


          <!-- CPU -->
          <div class="cpu-unit">

            <div class="cpu-label">
              CENTRAL PROCESSING UNIT
            </div>


            <div class="cpu-register-grid">

              <div class="cpu-register" id="regPC">
                <span>PC</span>

                <strong id="valuePC">
                  10
                </strong>

                <small>
                  Program Counter
                </small>
              </div>


              <div class="cpu-register" id="regMAR">
                <span>MAR</span>

                <strong id="valueMAR">
                  —
                </strong>

                <small>
                  Memory Address Register
                </small>
              </div>


              <div class="cpu-register" id="regMDR">
                <span>MDR</span>

                <strong id="valueMDR">
                  —
                </strong>

                <small>
                  Memory Data Register
                </small>
              </div>


              <div class="cpu-register" id="regIR">
                <span>IR</span>

                <strong id="valueIR">
                  —
                </strong>

                <small>
                  Instruction Register
                </small>
              </div>

            </div>


            <div class="cpu-inner-flow">
              ↓
            </div>


            <div class="cpu-bottom-grid">

              <div class="cpu-special-block" id="controlUnit">

                <span>CU</span>

                <strong>
                  Control Unit
                </strong>

                <small id="cuStatus">
                  Waiting for instruction
                </small>

              </div>


              <div class="cpu-special-block" id="aluUnit">

                <span>ALU</span>

                <strong>
                  Arithmetic Logic Unit
                </strong>

                <small id="aluStatus">
                  Waiting
                </small>

              </div>


              <div class="cpu-special-block accumulator-block" id="regACC">

                <span>ACC</span>

                <strong id="valueACC">
                  7
                </strong>

                <small>
                  Accumulator
                </small>

              </div>

            </div>

          </div>

        </div>

      </div>


      <!-- CURRENT STEP -->
      <div class="fetch-info-grid">

        <div class="card fetch-current-card">

          <div class="fetch-current-header">

            <span class="fetch-current-number"
                  id="fetchCurrentNumber">
              1
            </span>

            <div>
              <small>CURRENT MICRO-OPERATION</small>

              <h3 id="fetchCurrentTitle">
                MAR ← PC
              </h3>
            </div>

          </div>


          <div class="fetch-operation"
               id="fetchOperation">

            MAR ← PC

          </div>


          <p id="fetchExplanation">

            The address of the next instruction is copied
            from the Program Counter into the Memory
            Address Register.

          </p>


          <div class="fetch-controls">

            <button class="btn"
                    id="fetchPrevious">
              ← Previous
            </button>

            <button class="btn primary"
                    id="cycleNext">
              Next Step →
            </button>

            <button class="btn"
                    id="fetchAuto">
              ▶ Auto Play
            </button>

          </div>

        </div>


        <!-- REGISTER INFORMATION -->
        <div class="card">

          <h3>What do these registers do?</h3>

          <div class="fetch-register-help">

            <div>
              <span>PC</span>

              <p>
                Stores the address of the next instruction.
              </p>
            </div>

            <div>
              <span>MAR</span>

              <p>
                Stores the memory address currently being accessed.
              </p>
            </div>

            <div>
              <span>MDR</span>

              <p>
                Temporarily stores data moving to or from memory.
              </p>
            </div>

            <div>
              <span>IR</span>

              <p>
                Holds the instruction currently being decoded.
              </p>
            </div>

            <div>
              <span>ACC</span>

              <p>
                Holds intermediate arithmetic and logic results.
              </p>
            </div>

            <div>
              <span>CU</span>

              <p>
                Decodes instructions and controls CPU operations.
              </p>
            </div>

          </div>

        </div>

      </div>


      <!-- STEP TIMELINE -->
      <div class="card">

        <h3>Complete Fetch–Execute Sequence</h3>

        <p class="muted">
          Click a step to jump directly to it.
        </p>

        <div class="fetch-timeline" id="fetchTimeline"></div>

      </div>

    </div>
  `);




  const steps = [

    {
      phase: "fetch",

      title: "MAR ← PC",

      operation: "MAR ← PC",

      explanation:
        "The CPU copies the address of the next instruction from the Program Counter (PC) into the Memory Address Register (MAR).",

      active: ["regPC", "regMAR"],

      pc: "10",

      mar: "10",

      mdr: "—",

      ir: "—",

      acc: "7",

      cu: "Requesting instruction address",

      alu: "Waiting"
    },


    {
      phase: "fetch",

      title: "MDR ← Memory[MAR]",

      operation:
        "MDR ← Memory[MAR]",

      explanation:
        "Memory reads address 10. The instruction stored at that address, ADD 5, is copied into the Memory Data Register.",

      active: [
        "regMAR",
        "cycleMemory",
        "regMDR",
        "arrowMemoryCPU"
      ],

      pc: "10",

      mar: "10",

      mdr: "ADD 5",

      ir: "—",

      acc: "7",

      cu: "Reading memory",

      alu: "Waiting"
    },


    {
      phase: "fetch",

      title: "IR ← MDR",

      operation:
        "IR ← MDR",

      explanation:
        "The fetched instruction is copied from the Memory Data Register into the Instruction Register.",

      active: [
        "regMDR",
        "regIR"
      ],

      pc: "10",

      mar: "10",

      mdr: "ADD 5",

      ir: "ADD 5",

      acc: "7",

      cu: "Instruction received",

      alu: "Waiting"
    },


    {
      phase: "decode",

      title: "Decode Instruction",

      operation:
        "CU decodes IR = ADD 5",

      explanation:
        "The Control Unit examines the Instruction Register and determines that the CPU must perform an ADD operation using the value 5.",

      active: [
        "regIR",
        "controlUnit"
      ],

      pc: "10",

      mar: "10",

      mdr: "ADD 5",

      ir: "ADD 5",

      acc: "7",

      cu: "Decoded: ADD 5",

      alu: "Preparing ADD"
    },


    {
      phase: "execute",

      title: "Execute ADD",

      operation:
        "ACC ← ACC + 5",

      explanation:
        "The ALU performs the arithmetic operation. The accumulator contained 7, so 5 is added and the new accumulator value becomes 12.",

      active: [
        "aluUnit",
        "regACC"
      ],

      pc: "10",

      mar: "10",

      mdr: "ADD 5",

      ir: "ADD 5",

      acc: "12",

      cu: "Executing ADD",

      alu: "7 + 5 = 12"
    },


    {
      phase: "execute",

      title: "PC ← PC + 1",

      operation:
        "PC ← PC + 1",

      explanation:
        "The Program Counter is incremented so that it points to the next instruction. The fetch–decode–execute cycle can now begin again.",

      active: [
        "regPC"
      ],

      pc: "11",

      mar: "10",

      mdr: "ADD 5",

      ir: "ADD 5",

      acc: "12",

      cu: "Cycle complete",

      alu: "Result stored"
    }

  ];



  let currentStep = 0;

  let autoTimer = null;




  $("#fetchTimeline").innerHTML =
    steps
      .map(
        (step, index) => `

          <button
            class="fetch-timeline-step"
            data-fetch-index="${index}"
          >

            <span>
              ${index + 1}
            </span>

            <div>
              <strong>
                ${step.title}
              </strong>

              <small>
                ${step.phase.toUpperCase()}
              </small>
            </div>

          </button>

        `
      )
      .join("");




  function renderFetchStep() {

    const step =
      steps[currentStep];



    document
      .querySelectorAll(
        ".cpu-register, .cpu-special-block, .memory-block, .cpu-data-arrow"
      )
      .forEach(element => {

        element.classList.remove(
          "active-data"
        );

      });




    step.active.forEach(id => {

      const element =
        document.getElementById(id);

      if (element) {

        element.classList.add(
          "active-data"
        );

      }

    });




    $("#valuePC").textContent =
      step.pc;

    $("#valueMAR").textContent =
      step.mar;

    $("#valueMDR").textContent =
      step.mdr;

    $("#valueIR").textContent =
      step.ir;

    $("#valueACC").textContent =
      step.acc;


    $("#cuStatus").textContent =
      step.cu;

    $("#aluStatus").textContent =
      step.alu;




    $("#fetchStepNumber").textContent =
      `${currentStep + 1} / ${steps.length}`;


    $("#fetchCurrentNumber").textContent =
      currentStep + 1;


    $("#fetchCurrentTitle").textContent =
      step.title;


    $("#fetchOperation").textContent =
      step.operation;


    $("#fetchExplanation").textContent =
      step.explanation;




    document
      .querySelectorAll(
        ".fetch-phase"
      )
      .forEach(element => {

        element.classList.toggle(
          "active",
          element.dataset.phase ===
          step.phase
        );

      });




    document
      .querySelectorAll(
        ".fetch-timeline-step"
      )
      .forEach(
        (element, index) => {

          element.classList.toggle(
            "active",
            index === currentStep
          );


          element.classList.toggle(
            "completed",
            index < currentStep
          );

        }
      );

  }




  $("#cycleNext").onclick = () => {

    currentStep++;

    if (
      currentStep >=
      steps.length
    ) {

      currentStep = 0;

    }

    renderFetchStep();

  };




  $("#fetchPrevious").onclick =
    () => {

      currentStep--;

      if (currentStep < 0) {

        currentStep =
          steps.length - 1;

      }

      renderFetchStep();

    };




  $("#fetchReset").onclick =
    () => {

      stopAuto();

      currentStep = 0;

      renderFetchStep();

    };




  function stopAuto() {

    if (autoTimer) {

      clearInterval(
        autoTimer
      );

      autoTimer = null;

    }


    $("#fetchAuto").textContent =
      "▶ Auto Play";

  }



  $("#fetchAuto").onclick =
    () => {

      if (autoTimer) {

        stopAuto();

        return;

      }


      $("#fetchAuto").textContent =
        "⏸ Pause";


      autoTimer =
        setInterval(
          () => {

            currentStep++;

            if (
              currentStep >=
              steps.length
            ) {

              currentStep = 0;

            }

            renderFetchStep();

          },
          1800
        );

    };




  document
    .querySelectorAll(
      ".fetch-timeline-step"
    )
    .forEach(button => {

      button.onclick = () => {

        stopAuto();

        currentStep =
          Number(
            button.dataset
              .fetchIndex
          );

        renderFetchStep();

      };

    });



  renderFetchStep();

} 
function scheduling() {

  shell("scheduling", `
    <div class="sched-pro">

      <!-- INPUT PANEL -->
      <div class="card sched-input-card">

        <div class="sched-input-grid">

          <div>
            <label>Processes</label>

            <input
              id="procs"
              value="P1:5,P2:3,P3:7"
              placeholder="P1:5,P2:3,P3:7"
            >

            <small class="muted">
              Format: Process:BurstTime
            </small>
          </div>


          <div>
            <label>Algorithm</label>

            <select id="alg">
              <option value="FCFS">
                FCFS
              </option>

              <option value="Round Robin">
                Round Robin
              </option>
            </select>
          </div>


          <div>
            <label>Time Quantum</label>

            <input
              id="quant"
              type="number"
              min="1"
              value="2"
            >

            <small class="muted">
              Used only for Round Robin
            </small>
          </div>

        </div>


        <div class="sched-actions">

          <button
            class="btn primary"
            id="sched"
          >
            Simulate
          </button>

          <button
            class="btn"
            id="schedExample"
          >
            Load Example
          </button>

          <button
            class="btn"
            id="schedReset"
          >
            Reset
          </button>

        </div>

      </div>


      <!-- ALGORITHM OVERVIEW -->
      <div class="sched-summary-grid">

        <div class="card sched-stat">

          <span>Algorithm</span>

          <strong id="schedAlgName">
            FCFS
          </strong>

        </div>


        <div class="card sched-stat">

          <span>Total Processes</span>

          <strong id="schedProcessCount">
            0
          </strong>

        </div>


        <div class="card sched-stat">

          <span>Average Waiting</span>

          <strong id="schedAvgWaiting">
            —
          </strong>

        </div>


        <div class="card sched-stat">

          <span>Average Turnaround</span>

          <strong id="schedAvgTurnaround">
            —
          </strong>

        </div>

      </div>


      <!-- PROCESS CARDS -->
      <div class="card">

        <div class="sched-card-title">

          <div>
            <h3>Processes</h3>

            <p class="muted">
              Burst time and calculated scheduling information.
            </p>
          </div>

        </div>

        <div
          class="sched-process-grid"
          id="schedProcessGrid"
        ></div>

      </div>


      <!-- GANTT CHART -->
      <div class="card gantt-card">

        <div class="sched-card-title">

          <div>
            <h3>Gantt Chart</h3>

            <p class="muted">
              Visual timeline showing which process is using the CPU.
            </p>
          </div>

          <button
            class="btn"
            id="schedAnimate"
          >
            ▶ Play Animation
          </button>

        </div>


        <div class="gantt-scroll">

          <div
            class="gantt-chart"
            id="ganttChart"
          ></div>

        </div>

      </div>


      <!-- EXECUTION EXPLANATION -->
      <div class="sched-two-column">

        <div class="card">

          <h3>Execution Steps</h3>

          <div
            class="sched-step-list"
            id="schedStepList"
          ></div>

        </div>


        <div class="card">

          <h3>Algorithm Explanation</h3>

          <div
            class="sched-explanation"
            id="schedExplanation"
          ></div>

        </div>

      </div>


      <!-- RESULT TABLE -->
      <div class="card">

        <h3>Scheduling Results</h3>

        <p class="muted">
          WT = Waiting Time,
          TAT = Turnaround Time
        </p>

        <div class="sched-table-scroll">

          <table class="sched-table">

            <thead>

              <tr>
                <th>Process</th>
                <th>Burst</th>
                <th>Completion</th>
                <th>Waiting</th>
                <th>Turnaround</th>
              </tr>

            </thead>

            <tbody id="schedResultBody"></tbody>

          </table>

        </div>

      </div>

    </div>
  `);



  let currentSchedule = [];

  let animationTimer = null;



   

  function parseProcesses() {

    const input =
      $("#procs")
        .value
        .trim();


    const parts =
      input
        .split(",")
        .map(x => x.trim())
        .filter(Boolean);


    const processes = [];


    parts.forEach((part, index) => {

      const pieces =
        part.split(":");


      if (pieces.length !== 2) {

        throw new Error(
          "Use format like P1:5,P2:3"
        );

      }


      const name =
        pieces[0].trim();


      const burst =
        Number(
          pieces[1]
        );


      if (
        !name ||
        !Number.isFinite(burst) ||
        burst <= 0
      ) {

        throw new Error(
          "Every process needs a positive burst time."
        );

      }


      processes.push({

        name,

        burst,

        order:index

      });

    });


    if (!processes.length) {

      throw new Error(
        "Add at least one process."
      );

    }


    return processes;

  }




  function simulateFCFS(processes) {

    let time = 0;

    const segments = [];

    const results = [];


    processes.forEach(process => {

      const start =
        time;


      const end =
        start +
        process.burst;


      const waiting =
        start;


      const turnaround =
        end;


      segments.push({

        name:
          process.name,

        start,

        end,

        duration:
          process.burst

      });


      results.push({

        name:
          process.name,

        burst:
          process.burst,

        completion:
          end,

        waiting,

        turnaround

      });


      time =
        end;

    });


    return {
      segments,
      results
    };

  }





  function simulateRoundRobin(
    processes,
    quantum
  ) {

    const remaining =
      processes.map(
        process => ({
          ...process,
          remaining:
            process.burst
        })
      );


    const completion = {};

    const segments = [];

    let time = 0;



    while (
      remaining.some(
        process =>
          process.remaining > 0
      )
    ) {

      remaining.forEach(process => {

        if (
          process.remaining <= 0
        ) {

          return;

        }


        const duration =
          Math.min(
            quantum,
            process.remaining
          );


        const start =
          time;


        const end =
          time + duration;


        segments.push({

          name:
            process.name,

          start,

          end,

          duration

        });


        time =
          end;


        process.remaining -=
          duration;


        if (
          process.remaining === 0
        ) {

          completion[
            process.name
          ] = time;

        }

      });

    }



    const results =
      processes.map(process => {

        const turnaround =
          completion[
            process.name
          ];


        const waiting =
          turnaround -
          process.burst;


        return {

          name:
            process.name,

          burst:
            process.burst,

          completion:
            turnaround,

          waiting,

          turnaround

        };

      });


    return {
      segments,
      results
    };

  }




  function renderProcessCards(
    results
  ) {

    $("#schedProcessGrid")
      .innerHTML =
        results
          .map(
            process => `

              <div class="sched-process-card">

                <div class="sched-process-head">

                  <span class="sched-process-name">
                    ${esc(process.name)}
                  </span>

                  <span class="sched-burst">
                    ${process.burst} units
                  </span>

                </div>

                <div class="sched-process-stats">

                  <div>
                    <span>Waiting</span>
                    <strong>
                      ${process.waiting}
                    </strong>
                  </div>

                  <div>
                    <span>Turnaround</span>
                    <strong>
                      ${process.turnaround}
                    </strong>
                  </div>

                </div>

              </div>

            `
          )
          .join("");

  }




  function renderGantt(
    segments
  ) {

    if (!segments.length) {

      $("#ganttChart").innerHTML =
        "";

      return;

    }


    const totalTime =
      segments[
        segments.length - 1
      ].end;


    let html =
      `<div class="gantt-track">`;


    segments.forEach(
      (segment, index) => {

        const width =
          Math.max(
            70,
            (
              segment.duration /
              totalTime
            ) * 900
          );


        html += `

          <div
            class="gantt-block"
            data-gantt-index="${index}"
            style="width:${width}px"
          >

            <strong>
              ${esc(segment.name)}
            </strong>

            <small>
              ${segment.duration}
            </small>

            <span class="gantt-start">
              ${segment.start}
            </span>

            ${
              index ===
              segments.length - 1
                ? `
                  <span class="gantt-end">
                    ${segment.end}
                  </span>
                `
                : ""
            }

          </div>

        `;

      }
    );


    html +=
      `</div>`;


    $("#ganttChart").innerHTML =
      html;

  }




  function renderSteps(
    segments
  ) {

    $("#schedStepList")
      .innerHTML =
        segments
          .map(
            (segment, index) => `

              <div class="sched-step-item">

                <span>
                  ${index + 1}
                </span>

                <div>

                  <strong>
                    ${esc(segment.name)}
                  </strong>

                  <small>
                    CPU runs from
                    ${segment.start}
                    to
                    ${segment.end}
                  </small>

                </div>

              </div>

            `
          )
          .join("");

  }




  function renderResultTable(
    results
  ) {

    $("#schedResultBody")
      .innerHTML =
        results
          .map(
            process => `

              <tr>

                <td>
                  <strong>
                    ${esc(process.name)}
                  </strong>
                </td>

                <td>
                  ${process.burst}
                </td>

                <td>
                  ${process.completion}
                </td>

                <td>
                  ${process.waiting}
                </td>

                <td>
                  ${process.turnaround}
                </td>

              </tr>

            `
          )
          .join("");

  }




  function renderAverages(
    results
  ) {

    const avgWaiting =
      results.reduce(
        (sum, process) =>
          sum +
          process.waiting,
        0
      ) /
      results.length;


    const avgTurnaround =
      results.reduce(
        (sum, process) =>
          sum +
          process.turnaround,
        0
      ) /
      results.length;


    $("#schedAvgWaiting")
      .textContent =
        avgWaiting
          .toFixed(2);


    $("#schedAvgTurnaround")
      .textContent =
        avgTurnaround
          .toFixed(2);

  }




  function renderExplanation(
    algorithm,
    quantum
  ) {

    if (
      algorithm ===
      "FCFS"
    ) {

      $("#schedExplanation")
        .innerHTML = `

          <div class="sched-info-box">

            <strong>
              First Come First Served
            </strong>

            <p>
              Processes run in the order they arrive.
              Once a process starts, it continues until
              its CPU burst is completed.
            </p>

          </div>

          <div class="sched-feature">
            <span>✓</span>
            Simple to understand
          </div>

          <div class="sched-feature">
            <span>✓</span>
            Non-preemptive
          </div>

          <div class="sched-feature">
            <span>!</span>
            Long processes may delay shorter ones
          </div>

        `;

    }

    else {

      $("#schedExplanation")
        .innerHTML = `

          <div class="sched-info-box">

            <strong>
              Round Robin
            </strong>

            <p>
              Each process receives a fixed CPU time slice.
              If it is not finished when the quantum expires,
              it moves to the back of the ready queue.
            </p>

          </div>

          <div class="sched-quantum-display">

            Time Quantum

            <strong>
              ${quantum}
            </strong>

          </div>

          <div class="sched-feature">
            <span>✓</span>
            Preemptive scheduling
          </div>

          <div class="sched-feature">
            <span>✓</span>
            Fair CPU sharing
          </div>

        `;

    }

  }




  function runSchedulingSimulation() {

    stopAnimation();


    try {

      const processes =
        parseProcesses();


      const algorithm =
        $("#alg").value;


      const quantum =
        Math.max(
          1,
          Number(
            $("#quant").value
          ) || 1
        );


      let simulation;


      if (
        algorithm ===
        "FCFS"
      ) {

        simulation =
          simulateFCFS(
            processes
          );

      }

      else {

        simulation =
          simulateRoundRobin(
            processes,
            quantum
          );

      }


      currentSchedule =
        simulation.segments;


      $("#schedAlgName")
        .textContent =
          algorithm;


      $("#schedProcessCount")
        .textContent =
          processes.length;


      renderProcessCards(
        simulation.results
      );


      renderGantt(
        simulation.segments
      );


      renderSteps(
        simulation.segments
      );


      renderResultTable(
        simulation.results
      );


      renderAverages(
        simulation.results
      );


      renderExplanation(
        algorithm,
        quantum
      );

    }

    catch (error) {

      toastMsg(
        error.message
      );

    }

  }




  function stopAnimation() {

    if (
      animationTimer
    ) {

      clearInterval(
        animationTimer
      );

      animationTimer =
        null;

    }


    const button =
      $("#schedAnimate");


    if (button) {

      button.textContent =
        "▶ Play Animation";

    }


    document
      .querySelectorAll(
        ".gantt-block"
      )
      .forEach(block => {

        block.classList.remove(
          "active"
        );

      });

  }



  $("#schedAnimate").onclick =
    () => {

      if (
        !currentSchedule.length
      ) {

        toastMsg(
          "Run the simulation first."
        );

        return;

      }


      if (
        animationTimer
      ) {

        stopAnimation();

        return;

      }


      const blocks =
        [
          ...document
            .querySelectorAll(
              ".gantt-block"
            )
        ];


      let index = 0;


      $("#schedAnimate")
        .textContent =
          "⏸ Pause";


      function highlightBlock() {

        blocks.forEach(
          block =>
            block.classList.remove(
              "active"
            )
        );


        if (
          index >=
          blocks.length
        ) {

          stopAnimation();

          return;

        }


        blocks[index]
          .classList.add(
            "active"
          );


        index++;

      }


      highlightBlock();


      animationTimer =
        setInterval(
          highlightBlock,
          900
        );

    };



     

  $("#schedExample").onclick =
    () => {

      $("#procs").value =
        "P1:5,P2:3,P3:7,P4:2";


      $("#alg").value =
        "Round Robin";


      $("#quant").value =
        "2";


      runSchedulingSimulation();

    };




  $("#schedReset").onclick =
    () => {

      stopAnimation();


      $("#procs").value =
        "P1:5,P2:3,P3:7";


      $("#alg").value =
        "FCFS";


      $("#quant").value =
        "2";


      runSchedulingSimulation();

    };



  $("#sched").onclick =
    runSchedulingSimulation;


  $("#alg").onchange =
    () => {

      const rr =
        $("#alg").value ===
        "Round Robin";


      $("#quant").disabled =
        !rr;


      runSchedulingSimulation();

    };


  runSchedulingSimulation();

} 


function er() {

  shell("er", `

    <div class="card">

      <div class="er-builder-top">

        <div>
          <label>Table / Entity Name</label>
          <input
            id="erTableName"
            placeholder="Student"
            value="Student"
          >
        </div>


        <div>
          <label>Columns</label>

          <input
            id="erColumns"
            placeholder="id:PK, name, email, course_id:FK"
            value="student_id:PK, name, email"
          >

          <small class="muted">
            Use :PK for Primary Key and :FK for Foreign Key.
            Multiple :PK columns create a composite key.
          </small>

        </div>


        <div>
          <label>&nbsp;</label>

          <button
            class="btn primary"
            id="erAddTable"
          >
            + Add Table
          </button>

        </div>

      </div>


      <div class="er-help">

        <span>🔑 PK = Primary Key</span>

        <span>🔗 FK = Foreign Key</span>

        <span>
          Drag from a PK connector to an FK connector
          to create a relationship.
        </span>

      </div>


      <div class="er-toolbar">

        <button
          class="btn"
          id="erClear"
        >
          Clear Diagram
        </button>

        <button
          class="btn"
          id="erDeleteRelation"
        >
          Delete Last Relationship
        </button>

      </div>


      <div
        class="advanced-er-canvas"
        id="erCanvas"
      >

        <svg
          class="er-lines"
          id="erLines"
        ></svg>

      </div>

    </div>

  `);


  const canvas =
    $("#erCanvas");


  const svg =
    $("#erLines");


  let tableCounter = 0;

  let relationCounter = 0;


  const tables = new Map();

  let relationships = [];


  let temporaryLine = null;

  let connectionStart = null;





  $("#erAddTable").onclick =
    addTableFromInputs;



  function addTableFromInputs() {

    const name =
      $("#erTableName")
        .value
        .trim();


    const rawColumns =
      $("#erColumns")
        .value
        .split(",")
        .map(x => x.trim())
        .filter(Boolean);


    if (!name) {

      toastMsg(
        "Enter a table name."
      );

      return;

    }


    if (!rawColumns.length) {

      toastMsg(
        "Add at least one column."
      );

      return;

    }


    const columns =
      rawColumns.map(parseColumn);


    createERTable(
      name,
      columns
    );


    $("#erTableName").value = "";

    $("#erColumns").value = "";

  }



  

  function parseColumn(text) {

    const parts =
      text.split(":");


    const name =
      parts[0].trim();


    const flag =
      (
        parts[1] || ""
      )
      .trim()
      .toUpperCase();


    return {

      name,

      type:
        flag === "PK"
          ? "PK"
          : flag === "FK"
          ? "FK"
          : ""

    };

  }



  

  function createERTable(
    name,
    columns
  ) {

    tableCounter++;


    const id =
      "erTable_" +
      tableCounter;


    const table =
      document.createElement(
        "div"
      );


    table.className =
      "er-table";


    table.dataset.id = id;


    table.style.left =
      30 +
      (
        (tableCounter * 40) %
        450
      )
      + "px";


    table.style.top =
      30 +
      (
        (tableCounter * 60) %
        300
      )
      + "px";



    const fieldsHTML =
      columns.map(
        (column, index) => {

          let badge = "";


          if (column.type === "PK") {

            badge =
              `<span class="er-key pk">
                 PK
               </span>`;

          }


          if (column.type === "FK") {

            badge =
              `<span class="er-key fk">
                 FK
               </span>`;

          }


          return `

            <div
              class="er-field"
              data-column="${esc(column.name)}"
              data-key="${column.type}"
              data-index="${index}"
            >

              <div class="er-field-info">

                ${badge}

                <span>
                  ${esc(column.name)}
                </span>

              </div>


              ${
                column.type
                  ? `
                    <button
                      class="er-port ${column.type.toLowerCase()}"
                      title="Drag relationship"
                    ></button>
                  `
                  : ""
              }

            </div>

          `;

        }
      )
      .join("");



    table.innerHTML = `

      <div class="er-table-header">

        <strong>
          ${esc(name)}
        </strong>

        <button
          class="er-table-delete"
          title="Delete table"
        >
          ×
        </button>

      </div>


      <div class="er-table-body">

        ${fieldsHTML}

      </div>

    `;



    canvas.appendChild(
      table
    );


    tables.set(
      id,
      {
        id,
        name,
        columns,
        element: table
      }
    );


    enableERTableDrag(
      table
    );


    enableERPorts(
      table
    );


    table
      .querySelector(
        ".er-table-delete"
      )
      .onclick =
        e => {

          e.stopPropagation();

          deleteERTable(
            id
          );

        };


    updateERLines();

  }



  function deleteERTable(id) {

    const table =
      tables.get(id);


    if (!table)
      return;


    relationships =
      relationships.filter(
        relation =>
          relation.fromTable !== id &&
          relation.toTable !== id
      );


    table.element.remove();

    tables.delete(id);


    updateERLines();

  }



 

  function enableERTableDrag(
    table
  ) {

    const header =
      table.querySelector(
        ".er-table-header"
      );


    let dragging = false;

    let startX = 0;

    let startY = 0;

    let startLeft = 0;

    let startTop = 0;



    header.onpointerdown =
      e => {

       

        if (
          e.target.closest(
            ".er-table-delete"
          )
        )
          return;


        dragging = true;


        startX =
          e.clientX;

        startY =
          e.clientY;


        startLeft =
          table.offsetLeft;

        startTop =
          table.offsetTop;


        header.setPointerCapture(
          e.pointerId
        );

      };



    header.onpointermove =
      e => {

        if (!dragging)
          return;


        const dx =
          e.clientX -
          startX;


        const dy =
          e.clientY -
          startY;


        let newLeft =
          startLeft + dx;


        let newTop =
          startTop + dy;



        const maxLeft =
          canvas.clientWidth -
          table.offsetWidth;


        const maxTop =
          canvas.clientHeight -
          table.offsetHeight;



        newLeft =
          Math.max(
            0,
            Math.min(
              newLeft,
              maxLeft
            )
          );


        newTop =
          Math.max(
            0,
            Math.min(
              newTop,
              maxTop
            )
          );


        table.style.left =
          newLeft + "px";


        table.style.top =
          newTop + "px";


        updateERLines();

      };



    header.onpointerup =
      e => {

        dragging = false;


        try {

          header
            .releasePointerCapture(
              e.pointerId
            );

        }

        catch {}

      };

  }




  function enableERPorts(
    table
  ) {

    table
      .querySelectorAll(
        ".er-port"
      )
      .forEach(port => {


        port.onpointerdown =
          e => {

            e.stopPropagation();


            const field =
              port.closest(
                ".er-field"
              );


            connectionStart = {

              table:
                table.dataset.id,

              column:
                field.dataset.column,

              key:
                field.dataset.key,

              port

            };


            startTemporaryLine(
              port
            );


            port.setPointerCapture(
              e.pointerId
            );

          };



        port.onpointermove =
          e => {

            if (
              !connectionStart ||
              connectionStart.port !== port
            )
              return;


            updateTemporaryLine(
              e.clientX,
              e.clientY
            );

          };



        port.onpointerup =
          e => {

            if (
              !connectionStart ||
              connectionStart.port !== port
            )
              return;


            const target =
              document
                .elementFromPoint(
                  e.clientX,
                  e.clientY
                )
                ?.closest(
                  ".er-port"
                );


            if (
              target &&
              target !== port
            ) {

              attemptConnection(
                port,
                target
              );

            }


            removeTemporaryLine();


            connectionStart =
              null;


            try {

              port
                .releasePointerCapture(
                  e.pointerId
                );

            }

            catch {}

          };

      });

  }



  

  function startTemporaryLine(
    port
  ) {

    temporaryLine =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );


    temporaryLine.classList.add(
      "er-temp-line"
    );


    svg.appendChild(
      temporaryLine
    );


    const p =
      getPortCenter(
        port
      );


    temporaryLine.setAttribute(
      "x1",
      p.x
    );

    temporaryLine.setAttribute(
      "y1",
      p.y
    );


    temporaryLine.setAttribute(
      "x2",
      p.x
    );

    temporaryLine.setAttribute(
      "y2",
      p.y
    );

  }



  function updateTemporaryLine(
    clientX,
    clientY
  ) {

    if (!temporaryLine)
      return;


    const rect =
      canvas.getBoundingClientRect();


    temporaryLine.setAttribute(
      "x2",
      clientX -
      rect.left +
      canvas.scrollLeft
    );


    temporaryLine.setAttribute(
      "y2",
      clientY -
      rect.top +
      canvas.scrollTop
    );

  }



  function removeTemporaryLine() {

    if (temporaryLine) {

      temporaryLine.remove();

      temporaryLine = null;

    }

  }



  

  function attemptConnection(
    fromPort,
    toPort
  ) {

    const fromField =
      fromPort.closest(
        ".er-field"
      );


    const toField =
      toPort.closest(
        ".er-field"
      );


    const fromTable =
      fromPort.closest(
        ".er-table"
      );


    const toTable =
      toPort.closest(
        ".er-table"
      );


    if (
      fromTable ===
      toTable
    ) {

      toastMsg(
        "Choose another table."
      );

      return;

    }



    const fromKey =
      fromField.dataset.key;


    const toKey =
      toField.dataset.key;




    if (
      !(
        (
          fromKey === "PK" &&
          toKey === "FK"
        )
        ||
        (
          fromKey === "FK" &&
          toKey === "PK"
        )
      )
    ) {

      toastMsg(
        "Connect a Primary Key to a Foreign Key."
      );

      return;

    }



    let pkField;

    let fkField;

    let pkTable;

    let fkTable;

    let pkPort;

    let fkPort;



    if (fromKey === "PK") {

      pkField = fromField;

      pkTable = fromTable;

      pkPort = fromPort;


      fkField = toField;

      fkTable = toTable;

      fkPort = toPort;

    }

    else {

      pkField = toField;

      pkTable = toTable;

      pkPort = toPort;


      fkField = fromField;

      fkTable = fromTable;

      fkPort = fromPort;

    }



    

    const duplicate =
      relationships.some(
        r =>
          r.fromTable ===
            pkTable.dataset.id &&
          r.fromColumn ===
            pkField.dataset.column &&
          r.toTable ===
            fkTable.dataset.id &&
          r.toColumn ===
            fkField.dataset.column
      );


    if (duplicate) {

      toastMsg(
        "Relationship already exists."
      );

      return;

    }



    relationCounter++;


    relationships.push({

      id:
        "relation_" +
        relationCounter,

      fromTable:
        pkTable.dataset.id,

      fromColumn:
        pkField.dataset.column,

      fromPort:
        pkPort,

      toTable:
        fkTable.dataset.id,

      toColumn:
        fkField.dataset.column,

      toPort:
        fkPort

    });


    toastMsg(
      "PK → FK relationship created."
    );


    updateERLines();

  }





  function getPortCenter(
    port
  ) {

    const canvasRect =
      canvas.getBoundingClientRect();


    const portRect =
      port.getBoundingClientRect();


    return {

      x:
        portRect.left -
        canvasRect.left +
        canvas.scrollLeft +
        portRect.width / 2,

      y:
        portRect.top -
        canvasRect.top +
        canvas.scrollTop +
        portRect.height / 2

    };

  }



  

  function updateERLines() {

    

    const temp =
      temporaryLine;


    svg.innerHTML = "";


    relationships.forEach(
      relation => {

        if (
          !document.body.contains(
            relation.fromPort
          )
          ||
          !document.body.contains(
            relation.toPort
          )
        )
          return;


        const a =
          getPortCenter(
            relation.fromPort
          );


        const b =
          getPortCenter(
            relation.toPort
          );



        
        

        const difference =
          Math.max(
            70,
            Math.abs(
              b.x - a.x
            ) / 2
          );


        const path =
          document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
          );


        const direction =
          b.x >= a.x
            ? 1
            : -1;


        const d =

          `M ${a.x} ${a.y}

           C
           ${a.x + difference * direction}
           ${a.y},

           ${b.x - difference * direction}
           ${b.y},

           ${b.x}
           ${b.y}`;


        path.setAttribute(
          "d",
          d
        );


        path.classList.add(
          "er-relation-line"
        );


        path.dataset.relation =
          relation.id;


        svg.appendChild(
          path
        );



        

        const label =
          document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
          );


        label.setAttribute(
          "x",
          (a.x + b.x) / 2
        );


        label.setAttribute(
          "y",
          (a.y + b.y) / 2 - 8
        );


        label.classList.add(
          "er-relation-label"
        );


        label.textContent =
          "PK → FK";


        svg.appendChild(
          label
        );

      }
    );


    if (
      temp &&
      document.body.contains(temp)
    ) {

      svg.appendChild(temp);

    }

  }



   

  $("#erDeleteRelation").onclick =
    () => {

      if (!relationships.length) {

        toastMsg(
          "No relationships to delete."
        );

        return;

      }


      relationships.pop();

      updateERLines();


      toastMsg(
        "Relationship removed."
      );

    };



  

  $("#erClear").onclick =
    () => {

      relationships = [];

      tables.clear();


      canvas
        .querySelectorAll(
          ".er-table"
        )
        .forEach(
          table =>
            table.remove()
        );


      updateERLines();


      toastMsg(
        "ER diagram cleared."
      );

    };



 

  window.addEventListener(
    "resize",
    updateERLines,
    { once: true }
  );



  

  createERTable(
    "Student",
    [
      {
        name:
          "student_id",
        type:
          "PK"
      },

      {
        name:
          "name",
        type:
          ""
      },

      {
        name:
          "email",
        type:
          ""
      }
    ]
  );


  createERTable(
    "Enrollment",
    [
      {
        name:
          "student_id",
        type:
          "FK"
      },

      {
        name:
          "course_id",
        type:
          "FK"
      }
    ]
  );


  createERTable(
    "Course",
    [
      {
        name:
          "course_id",
        type:
          "PK"
      },

      {
        name:
          "course_name",
        type:
          ""
      }
    ]
  );

} 
function normalizer(){

  shell(
    "normalizer",
    `
    <div class="workspace">

      <div class="card">

        <label>Relation</label>

        <input
          id="rel"
          value="StudentCourse(StudentID, StudentName, CourseID, CourseName)"
        >

        <label style="margin-top:12px">
          Functional dependencies
        </label>

        <textarea
          id="fds"
          style="min-height:130px"
        >StudentID -> StudentName
CourseID -> CourseName
StudentID, CourseID -> Grade</textarea>

        <button
          class="btn primary"
          id="norm"
        >
          Analyze
        </button>

      </div>


      <div class="card">

        <h3>Normalization checklist</h3>

        <div
          id="normOut"
          class="result"
        >
          Enter dependencies and analyze.
        </div>

      </div>

    </div>
    `
  );


  $("#norm").onclick = () => {

    $("#normOut").textContent =
`1NF: atomic attributes assumed.

2NF: check whether non-key attributes depend on only part of a composite key.

3NF: check for transitive dependencies.

Detected dependencies:

${$("#fds").value}`;

  };

} 
function subnet() {

  shell("subnet", `
    <div class="subnet-pro">

      <!-- INPUT CARD -->
      <div class="card subnet-input-card">

        <div class="subnet-input-grid">

          <div>
            <label>IPv4 Address</label>

            <input
              id="subnetIp"
              value="192.168.1.10"
              placeholder="192.168.1.10"
            >

            <small class="muted">
              Enter a valid IPv4 address.
            </small>
          </div>


          <div>
            <label>Prefix / CIDR</label>

            <input
              id="subnetPrefix"
              type="number"
              min="0"
              max="32"
              value="24"
            >

            <small class="muted">
              Example: /24
            </small>
          </div>

        </div>


        <div class="subnet-actions">

          <button
            class="btn primary"
            id="subnetCalculate"
          >
            Calculate
          </button>

          <button
            class="btn"
            id="subnetExample"
          >
            Load Example
          </button>

          <button
            class="btn"
            id="subnetReset"
          >
            Reset
          </button>

        </div>


        <div class="subnet-presets">

          <span>Quick CIDR:</span>

          <button class="subnet-preset" data-prefix="8">
            /8
          </button>

          <button class="subnet-preset" data-prefix="16">
            /16
          </button>

          <button class="subnet-preset" data-prefix="24">
            /24
          </button>

          <button class="subnet-preset" data-prefix="25">
            /25
          </button>

          <button class="subnet-preset" data-prefix="26">
            /26
          </button>

          <button class="subnet-preset" data-prefix="27">
            /27
          </button>

          <button class="subnet-preset" data-prefix="28">
            /28
          </button>

        </div>

      </div>


      <!-- SUMMARY -->
      <div class="subnet-summary-grid">

        <div class="card subnet-stat">
          <span>Network</span>
          <strong id="subnetNetwork">—</strong>
        </div>

        <div class="card subnet-stat">
          <span>Broadcast</span>
          <strong id="subnetBroadcast">—</strong>
        </div>

        <div class="card subnet-stat">
          <span>Usable Hosts</span>
          <strong id="subnetHosts">—</strong>
        </div>

        <div class="card subnet-stat">
          <span>Subnet Mask</span>
          <strong id="subnetMask">—</strong>
        </div>

      </div>


      <!-- VISUAL ADDRESS BLOCK -->
      <div class="card">

        <div class="subnet-card-title">
          <div>
            <h3>Network Structure</h3>

            <p class="muted">
              See how the address is divided into network and host bits.
            </p>
          </div>
        </div>


        <div class="subnet-bit-legend">

          <span>
            <i class="network-bit-dot"></i>
            Network bits
          </span>

          <span>
            <i class="host-bit-dot"></i>
            Host bits
          </span>

        </div>


        <div
          class="subnet-binary-grid"
          id="subnetBinaryGrid"
        ></div>

      </div>


      <!-- DETAILS -->
      <div class="subnet-two-column">

        <div class="card">

          <h3>Address Details</h3>

          <div class="subnet-detail-list">

            <div>
              <span>IP Address</span>
              <strong id="detailIp">—</strong>
            </div>

            <div>
              <span>CIDR</span>
              <strong id="detailCidr">—</strong>
            </div>

            <div>
              <span>Subnet Mask</span>
              <strong id="detailMask">—</strong>
            </div>

            <div>
              <span>Wildcard Mask</span>
              <strong id="detailWildcard">—</strong>
            </div>

            <div>
              <span>First Host</span>
              <strong id="detailFirstHost">—</strong>
            </div>

            <div>
              <span>Last Host</span>
              <strong id="detailLastHost">—</strong>
            </div>

            <div>
              <span>Total Addresses</span>
              <strong id="detailTotalAddresses">—</strong>
            </div>

            <div>
              <span>Usable Hosts</span>
              <strong id="detailUsableHosts">—</strong>
            </div>

          </div>

        </div>


        <div class="card">

          <h3>Address Information</h3>

          <div class="subnet-detail-list">

            <div>
              <span>Class</span>
              <strong id="detailClass">—</strong>
            </div>

            <div>
              <span>Type</span>
              <strong id="detailType">—</strong>
            </div>

            <div>
              <span>Network Bits</span>
              <strong id="detailNetworkBits">—</strong>
            </div>

            <div>
              <span>Host Bits</span>
              <strong id="detailHostBits">—</strong>
            </div>

          </div>


          <div class="subnet-info-box">

            <strong>How subnetting works</strong>

            <p>
              CIDR tells us how many bits belong to the
              network portion. The remaining bits belong
              to hosts inside that subnet.
            </p>

          </div>

        </div>

      </div>


      <!-- BINARY VIEW -->
      <div class="card">

        <h3>Binary View</h3>

        <p class="muted">
          Compare the IP address and subnet mask in binary.
        </p>


        <div class="subnet-binary-lines">

          <div>

            <span>IP</span>

            <code id="binaryIp">
              —
            </code>

          </div>


          <div>

            <span>Mask</span>

            <code id="binaryMask">
              —
            </code>

          </div>


          <div>

            <span>Network</span>

            <code id="binaryNetwork">
              —
            </code>

          </div>

        </div>

      </div>

    </div>
  `);




  function ipToNumber(ip) {

    const parts =
      ip.split(".")
        .map(Number);


    if (
      parts.length !== 4 ||
      parts.some(
        part =>
          !Number.isInteger(part) ||
          part < 0 ||
          part > 255
      )
    ) {

      throw new Error(
        "Enter a valid IPv4 address."
      );

    }


    return (
      (
        (parts[0] << 24) >>> 0
      ) +
      (
        parts[1] << 16
      ) +
      (
        parts[2] << 8
      ) +
      parts[3]
    ) >>> 0;

  }



  function numberToIp(number) {

    return [

      number >>> 24,

      (number >>> 16) & 255,

      (number >>> 8) & 255,

      number & 255

    ].join(".");

  }



  function numberToBinary(number) {

    return [

      (number >>> 24)
        .toString(2)
        .padStart(8, "0"),

      ((number >>> 16) & 255)
        .toString(2)
        .padStart(8, "0"),

      ((number >>> 8) & 255)
        .toString(2)
        .padStart(8, "0"),

      (number & 255)
        .toString(2)
        .padStart(8, "0")

    ].join(".");

  }



  function getMask(prefix) {

    if (prefix === 0)
      return 0;


    return (
      0xFFFFFFFF <<
      (32 - prefix)
    ) >>> 0;

  }



  function getAddressClass(firstOctet) {

    if (
      firstOctet >= 1 &&
      firstOctet <= 126
    )
      return "Class A";


    if (
      firstOctet >= 128 &&
      firstOctet <= 191
    )
      return "Class B";


    if (
      firstOctet >= 192 &&
      firstOctet <= 223
    )
      return "Class C";


    if (
      firstOctet >= 224 &&
      firstOctet <= 239
    )
      return "Class D";


    return "Class E";

  }



  function getAddressType(ip) {

    const parts =
      ip.split(".")
        .map(Number);


    if (
      parts[0] === 10
    )
      return "Private";


    if (
      parts[0] === 172 &&
      parts[1] >= 16 &&
      parts[1] <= 31
    )
      return "Private";


    if (
      parts[0] === 192 &&
      parts[1] === 168
    )
      return "Private";


    if (
      parts[0] === 127
    )
      return "Loopback";


    return "Public";

  }



   

  function renderBitGrid(
    ipNumber,
    prefix
  ) {

    const binary =
      ipNumber
        .toString(2)
        .padStart(32, "0");


    let html = "";


    for (
      let i = 0;
      i < 32;
      i++
    ) {

      html += `

        <div
          class="subnet-bit ${
            i < prefix
              ? "network"
              : "host"
          }"
        >

          <span>
            ${binary[i]}
          </span>

          <small>
            ${i + 1}
          </small>

        </div>

      `;


      if (
        i === 7 ||
        i === 15 ||
        i === 23
      ) {

        html += `
          <div class="subnet-bit-separator">
            .
          </div>
        `;

      }

    }


    $("#subnetBinaryGrid")
      .innerHTML =
        html;

  }




  function calculateSubnet() {

    try {

      const ip =
        $("#subnetIp")
          .value
          .trim();


      const prefix =
        Number(
          $("#subnetPrefix")
            .value
        );


      if (
        !Number.isInteger(prefix) ||
        prefix < 0 ||
        prefix > 32
      ) {

        throw new Error(
          "CIDR must be between 0 and 32."
        );

      }


      const ipNumber =
        ipToNumber(ip);


      const mask =
        getMask(prefix);


      const wildcard =
        (~mask) >>> 0;


      const network =
        (ipNumber & mask) >>> 0;


      const broadcast =
        (network | wildcard) >>> 0;


      const totalAddresses =
        2 ** (32 - prefix);


      let usableHosts;


      if (prefix === 32) {

        usableHosts = 1;

      }

      else if (prefix === 31) {

        usableHosts = 2;

      }

      else {

        usableHosts =
          Math.max(
            0,
            totalAddresses - 2
          );

      }



      const firstHost =
        prefix >= 31
          ? network
          : network + 1;


      const lastHost =
        prefix >= 31
          ? broadcast
          : broadcast - 1;



      const networkIp =
        numberToIp(network);


      const broadcastIp =
        numberToIp(broadcast);


      const maskIp =
        numberToIp(mask);


      const wildcardIp =
        numberToIp(wildcard);




      $("#subnetNetwork").textContent =
        networkIp;


      $("#subnetBroadcast").textContent =
        broadcastIp;


      $("#subnetHosts").textContent =
        usableHosts.toLocaleString();


      $("#subnetMask").textContent =
        maskIp;




      $("#detailIp").textContent =
        ip;


      $("#detailCidr").textContent =
        "/" + prefix;


      $("#detailMask").textContent =
        maskIp;


      $("#detailWildcard").textContent =
        wildcardIp;


      $("#detailFirstHost").textContent =
        numberToIp(firstHost);


      $("#detailLastHost").textContent =
        numberToIp(lastHost);


      $("#detailTotalAddresses")
        .textContent =
          totalAddresses
            .toLocaleString();


      $("#detailUsableHosts")
        .textContent =
          usableHosts
            .toLocaleString();


      $("#detailNetworkBits")
        .textContent =
          prefix;


      $("#detailHostBits")
        .textContent =
          32 - prefix;




      const firstOctet =
        Number(
          ip.split(".")[0]
        );


      $("#detailClass").textContent =
        getAddressClass(
          firstOctet
        );


      $("#detailType").textContent =
        getAddressType(ip);




      $("#binaryIp").textContent =
        numberToBinary(
          ipNumber
        );


      $("#binaryMask").textContent =
        numberToBinary(
          mask
        );


      $("#binaryNetwork").textContent =
        numberToBinary(
          network
        );




      renderBitGrid(
        ipNumber,
        prefix
      );

    }

    catch (error) {

      toastMsg(
        error.message
      );

    }

  }




  $("#subnetCalculate").onclick =
    calculateSubnet;


  $("#subnetExample").onclick =
    () => {

      $("#subnetIp").value =
        "192.168.10.35";

      $("#subnetPrefix").value =
        "26";

      calculateSubnet();

    };


  $("#subnetReset").onclick =
    () => {

      $("#subnetIp").value =
        "192.168.1.10";

      $("#subnetPrefix").value =
        "24";

      calculateSubnet();

    };



  document
    .querySelectorAll(
      ".subnet-preset"
    )
    .forEach(button => {

      button.onclick = () => {

        $("#subnetPrefix").value =
          button.dataset.prefix;

        calculateSubnet();

      };

    });



  $("#subnetIp")
    .addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter"
        ) {

          calculateSubnet();

        }

      }
    );


  $("#subnetPrefix")
    .addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter"
        ) {

          calculateSubnet();

        }

      }
    );


  calculateSubnet();

} 
function ipmac() {

  shell("ipmac", `
    <div class="ipmac-pro">

      <div class="card ipmac-input-card">

        <div class="ipmac-input-grid">

          <div>
            <label>IPv4 Address</label>
            <input
              id="ipa"
              value="192.168.1.25"
              placeholder="192.168.1.25"
            >
          </div>

          <div>
            <label>MAC Address</label>
            <input
              id="mac"
              value="AA:BB:CC:DD:EE:FF"
              placeholder="AA:BB:CC:DD:EE:FF"
            >
          </div>

        </div>

        <div class="ipmac-actions">

          <button class="btn primary" id="anip">
            Analyze
          </button>

          <button class="btn" id="ipmacExample">
            Load Example
          </button>

          <button class="btn" id="ipmacClear">
            Clear
          </button>

        </div>

      </div>


      <div class="ipmac-summary-grid">

        <div class="card ipmac-stat">
          <span>IPv4 Status</span>
          <strong id="ipValidState">—</strong>
        </div>

        <div class="card ipmac-stat">
          <span>Address Type</span>
          <strong id="ipType">—</strong>
        </div>

        <div class="card ipmac-stat">
          <span>IP Class</span>
          <strong id="ipClass">—</strong>
        </div>

        <div class="card ipmac-stat">
          <span>MAC Type</span>
          <strong id="macType">—</strong>
        </div>

      </div>


      <div class="ipmac-two-column">

        <div class="card">

          <h3>IPv4 Analysis</h3>

          <div class="ipmac-detail-list">

            <div>
              <span>Address</span>
              <strong id="ipDetailAddress">—</strong>
            </div>

            <div>
              <span>Class</span>
              <strong id="ipDetailClass">—</strong>
            </div>

            <div>
              <span>Type</span>
              <strong id="ipDetailType">—</strong>
            </div>

            <div>
              <span>First Octet</span>
              <strong id="ipFirstOctet">—</strong>
            </div>

            <div>
              <span>Binary</span>
              <strong id="ipBinaryShort">—</strong>
            </div>

          </div>

        </div>


        <div class="card">

          <h3>MAC Analysis</h3>

          <div class="ipmac-detail-list">

            <div>
              <span>Normalized MAC</span>
              <strong id="macNormalized">—</strong>
            </div>

            <div>
              <span>Transmission Type</span>
              <strong id="macTransmission">—</strong>
            </div>

            <div>
              <span>Administration</span>
              <strong id="macAdministration">—</strong>
            </div>

            <div>
              <span>OUI / Prefix</span>
              <strong id="macOui">—</strong>
            </div>

            <div>
              <span>NIC Specific</span>
              <strong id="macNic">—</strong>
            </div>

          </div>

        </div>

      </div>


      <div class="card">

        <h3>Binary Representation</h3>

        <div class="ipmac-binary-box">

          <div>
            <span>IPv4</span>
            <code id="ipBinaryFull">—</code>
          </div>

          <div>
            <span>MAC</span>
            <code id="macBinaryFull">—</code>
          </div>

        </div>

      </div>


      <div class="card">

        <h3>How to read these addresses</h3>

        <div class="ipmac-learning-grid">

          <div>
            <strong>IPv4</strong>
            <p>
              IPv4 contains four 8-bit octets, giving a total of 32 bits.
            </p>
          </div>

          <div>
            <strong>MAC</strong>
            <p>
              A standard MAC address contains 48 bits or 6 hexadecimal bytes.
            </p>
          </div>

          <div>
            <strong>OUI</strong>
            <p>
              The first 24 bits commonly identify the manufacturer prefix.
            </p>
          </div>

          <div>
            <strong>Unicast / Multicast</strong>
            <p>
              The least significant bit of the first MAC byte determines this.
            </p>
          </div>

        </div>

      </div>

    </div>
  `);


  function validIPv4(ip) {

    return /^(25[0-5]|2[0-4]\\d|1?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|1?\\d?\\d)){3}$/
      .test(ip);

  }


  function getIPClass(first) {

    if (first >= 1 && first <= 126)
      return "Class A";

    if (first >= 128 && first <= 191)
      return "Class B";

    if (first >= 192 && first <= 223)
      return "Class C";

    if (first >= 224 && first <= 239)
      return "Class D";

    if (first >= 240 && first <= 255)
      return "Class E";

    return "Special";

  }


  function getIPType(parts) {

    const [a,b] = parts;

    if (a === 10)
      return "Private";

    if (
      a === 172 &&
      b >= 16 &&
      b <= 31
    )
      return "Private";

    if (
      a === 192 &&
      b === 168
    )
      return "Private";

    if (a === 127)
      return "Loopback";

    if (
      a === 169 &&
      b === 254
    )
      return "Link-local";

    if (
      a >= 224 &&
      a <= 239
    )
      return "Multicast";

    return "Public";

  }


  function ipToBinary(ip) {

    return ip
      .split(".")
      .map(
        n =>
          Number(n)
            .toString(2)
            .padStart(8,"0")
      )
      .join(".");

  }


  function normalizeMac(mac) {

    const clean =
      mac
        .replace(/[^0-9A-Fa-f]/g,"")
        .toUpperCase();

    if (clean.length !== 12)
      return null;

    return clean
      .match(/.{2}/g)
      .join(":");

  }


  function macToBinary(mac) {

    return mac
      .split(":")
      .map(
        value =>
          parseInt(value,16)
            .toString(2)
            .padStart(8,"0")
      )
      .join(" ");

  }


  function analyze() {

    const ip =
      $("#ipa").value.trim();

    const macInput =
      $("#mac").value.trim();



    if (validIPv4(ip)) {

      const parts =
        ip.split(".")
          .map(Number);

      const cls =
        getIPClass(parts[0]);

      const type =
        getIPType(parts);

      const binary =
        ipToBinary(ip);


      $("#ipValidState").textContent =
        "Valid ✓";

      $("#ipType").textContent =
        type;

      $("#ipClass").textContent =
        cls;


      $("#ipDetailAddress").textContent =
        ip;

      $("#ipDetailClass").textContent =
        cls;

      $("#ipDetailType").textContent =
        type;

      $("#ipFirstOctet").textContent =
        parts[0];

      $("#ipBinaryShort").textContent =
        parts[0]
          .toString(2)
          .padStart(8,"0");

      $("#ipBinaryFull").textContent =
        binary;

    }
    else {

      $("#ipValidState").textContent =
        "Invalid ✕";

      $("#ipType").textContent =
        "—";

      $("#ipClass").textContent =
        "—";

      $("#ipDetailAddress").textContent =
        "Invalid IPv4";

      $("#ipDetailClass").textContent =
        "—";

      $("#ipDetailType").textContent =
        "—";

      $("#ipFirstOctet").textContent =
        "—";

      $("#ipBinaryShort").textContent =
        "—";

      $("#ipBinaryFull").textContent =
        "—";

    }



    const normalized =
      normalizeMac(macInput);


    if (normalized) {

      const bytes =
        normalized
          .split(":")
          .map(
            x => parseInt(x,16)
          );


      const multicast =
        Boolean(bytes[0] & 1);


      const locallyAdministered =
        Boolean(bytes[0] & 2);


      $("#macType").textContent =
        multicast
          ? "Multicast"
          : "Unicast";


      $("#macNormalized").textContent =
        normalized;


      $("#macTransmission").textContent =
        multicast
          ? "Multicast"
          : "Unicast";


      $("#macAdministration").textContent =
        locallyAdministered
          ? "Locally Administered"
          : "Universally Administered";


      $("#macOui").textContent =
        normalized
          .split(":")
          .slice(0,3)
          .join(":");


      $("#macNic").textContent =
        normalized
          .split(":")
          .slice(3)
          .join(":");


      $("#macBinaryFull").textContent =
        macToBinary(normalized);

    }
    else {

      $("#macType").textContent =
        "Invalid";

      $("#macNormalized").textContent =
        "Invalid MAC";

      $("#macTransmission").textContent =
        "—";

      $("#macAdministration").textContent =
        "—";

      $("#macOui").textContent =
        "—";

      $("#macNic").textContent =
        "—";

      $("#macBinaryFull").textContent =
        "—";

    }

  }


  $("#anip").onclick =
    analyze;


  $("#ipmacExample").onclick =
    () => {

      $("#ipa").value =
        "172.16.5.10";

      $("#mac").value =
        "02:42:AC:11:00:02";

      analyze();

    };


  $("#ipmacClear").onclick =
    () => {

      $("#ipa").value = "";

      $("#mac").value = "";

      analyze();

    };


  analyze();

} 
function network() {

  shell("network", `
    <div class="network-pro">

      <div class="card network-controls">

        <div class="network-control-grid">

          <div>
            <label>Source Device</label>

            <select id="from">
              <option>PC-1</option>
              <option>PC-2</option>
              <option>Server</option>
            </select>
          </div>


          <div>
            <label>Destination Device</label>

            <select id="to">
              <option>Server</option>
              <option>PC-2</option>
              <option>PC-1</option>
            </select>
          </div>


          <div>
            <label>Packet Type</label>

            <select id="packetType">
              <option>Ping</option>
              <option>HTTP Request</option>
              <option>DNS Query</option>
            </select>
          </div>

        </div>


        <div class="network-actions">

          <button class="btn primary" id="packet">
            Send Packet
          </button>

          <button class="btn" id="networkReset">
            Reset
          </button>

        </div>

      </div>


      <div class="card">

        <h3>Network Topology</h3>

        <p class="muted">
          Watch the packet move through the network.
        </p>


        <div class="network-map" id="networkMap">

          <svg class="network-lines">

            <line
              x1="18%"
              y1="25%"
              x2="50%"
              y2="50%"
            />

            <line
              x1="18%"
              y1="75%"
              x2="50%"
              y2="50%"
            />

            <line
              x1="50%"
              y1="50%"
              x2="82%"
              y2="25%"
            />

            <line
              x1="50%"
              y1="50%"
              x2="82%"
              y2="75%"
            />

          </svg>


          <div
            class="network-device pc"
            data-device="PC-1"
            style="left:8%;top:15%"
          >
            <span>💻</span>
            <strong>PC-1</strong>
            <small>192.168.1.10</small>
          </div>


          <div
            class="network-device pc"
            data-device="PC-2"
            style="left:8%;top:65%"
          >
            <span>💻</span>
            <strong>PC-2</strong>
            <small>192.168.1.20</small>
          </div>


          <div
            class="network-device router"
            data-device="Router"
            style="left:44%;top:40%"
          >
            <span>📡</span>
            <strong>Router</strong>
            <small>192.168.1.1</small>
          </div>


          <div
            class="network-device server"
            data-device="Server"
            style="left:75%;top:15%"
          >
            <span>🖥</span>
            <strong>Server</strong>
            <small>10.0.0.5</small>
          </div>


          <div
            class="network-device dns"
            data-device="DNS"
            style="left:75%;top:65%"
          >
            <span>🌐</span>
            <strong>DNS</strong>
            <small>8.8.8.8</small>
          </div>


          <div
            class="network-packet"
            id="networkPacket"
          >
            📦
          </div>

        </div>

      </div>


      <div class="network-two-column">

        <div class="card">

          <h3>Packet Journey</h3>

          <div
            class="network-step-list"
            id="networkSteps"
          >
            <p class="muted">
              Send a packet to begin.
            </p>
          </div>

        </div>


        <div class="card">

          <h3>Packet Information</h3>

          <div class="network-detail-list">

            <div>
              <span>Source</span>
              <strong id="netSource">—</strong>
            </div>

            <div>
              <span>Destination</span>
              <strong id="netDestination">—</strong>
            </div>

            <div>
              <span>Protocol</span>
              <strong id="netProtocol">—</strong>
            </div>

            <div>
              <span>Status</span>
              <strong id="netStatus">Ready</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  `);


  const positions = {

    "PC-1":{
      x:14,
      y:25
    },

    "PC-2":{
      x:14,
      y:75
    },

    "Router":{
      x:50,
      y:50
    },

    "Server":{
      x:81,
      y:25
    },

    "DNS":{
      x:81,
      y:75
    }

  };


  function setPacketPosition(
    device
  ) {

    const pos =
      positions[device];

    const packet =
      $("#networkPacket");

    packet.style.left =
      pos.x + "%";

    packet.style.top =
      pos.y + "%";

  }


  function highlightDevice(
    name
  ) {

    document
      .querySelectorAll(
        ".network-device"
      )
      .forEach(
        device =>
          device.classList.toggle(
            "active",
            device.dataset.device === name
          )
      );

  }


  function getPath(
    from,
    to,
    type
  ) {

    if (
      type === "DNS Query"
    ) {

      return [
        from,
        "Router",
        "DNS"
      ];

    }


    if (
      from === to
    ) {

      return [from];

    }


    if (
      from === "PC-1" &&
      to === "PC-2"
    ) {

      return [
        "PC-1",
        "Router",
        "PC-2"
      ];

    }


    if (
      from === "PC-2" &&
      to === "PC-1"
    ) {

      return [
        "PC-2",
        "Router",
        "PC-1"
      ];

    }


    return [
      from,
      "Router",
      to
    ];

  }


  $("#packet").onclick =
    async () => {

      const from =
        $("#from").value;

      const to =
        $("#to").value;

      const type =
        $("#packetType").value;


      let protocol =
        "ICMP";


      if (
        type === "HTTP Request"
      )
        protocol = "HTTP / TCP";


      if (
        type === "DNS Query"
      )
        protocol = "DNS / UDP";


      $("#netSource").textContent =
        from;

      $("#netDestination").textContent =
        type === "DNS Query"
          ? "DNS Server"
          : to;

      $("#netProtocol").textContent =
        protocol;

      $("#netStatus").textContent =
        "Sending...";


      const path =
        getPath(
          from,
          to,
          type
        );


      $("#networkSteps").innerHTML =
        path
          .map(
            (device,index) => `

              <div class="network-step">

                <span>
                  ${index + 1}
                </span>

                <div>
                  <strong>
                    ${device}
                  </strong>

                  <small>
                    ${
                      index === 0
                        ? "Packet created"
                        : index === path.length - 1
                        ? "Packet delivered"
                        : "Packet routed"
                    }
                  </small>
                </div>

              </div>

            `
          )
          .join("");


      const packet =
        $("#networkPacket");

      packet.classList.add(
        "show"
      );


      for (
        const device of path
      ) {

        highlightDevice(device);

        setPacketPosition(device);

        await new Promise(
          resolve =>
            setTimeout(
              resolve,
              900
            )
        );

      }


      $("#netStatus").textContent =
        "Delivered ✓";


      packet.classList.remove(
        "show"
      );


      highlightDevice(
        path[
          path.length - 1
        ]
      );

    };


  $("#networkReset").onclick =
    () => {

      $("#netSource").textContent =
        "—";

      $("#netDestination").textContent =
        "—";

      $("#netProtocol").textContent =
        "—";

      $("#netStatus").textContent =
        "Ready";


      $("#networkSteps").innerHTML =
        `<p class="muted">
          Send a packet to begin.
        </p>`;


      document
        .querySelectorAll(
          ".network-device"
        )
        .forEach(
          d =>
            d.classList.remove(
              "active"
            )
        );


      $("#networkPacket")
        .classList.remove(
          "show"
        );

    };

} 
function pythonTool() {

  shell("python", `
    <div class="python-ide-pro">

      <div class="card ide-toolbar">

        <div>
          <h3>Python Playground</h3>

          <p class="muted">
            Write Python, get code suggestions and run it directly in your browser.
          </p>
        </div>

        <div class="ide-toolbar-actions">

          <button class="btn primary" id="runPy">
            ▶ Run
          </button>

          <button class="btn" id="pyExample">
            Example
          </button>

          <button class="btn" id="pyClear">
            Clear
          </button>

          <button class="btn" id="pyCopy">
            Copy Code
          </button>

        </div>

      </div>


      <div class="python-ide-layout">

        <!-- EDITOR -->
        <div class="card ide-editor-card">

          <div class="ide-editor-header">

            <div class="ide-file-tab active">
              🐍 main.py
            </div>

            <div class="ide-editor-status">
              Python
            </div>

          </div>


          <div class="ide-editor-wrapper">

            <div
              class="ide-line-numbers"
              id="pyLineNumbers"
            >
              1
            </div>

            <textarea
              id="pycode"
              class="ide-code-editor"
              spellcheck="false"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
            >print("Hello from ICT Lab!")

name = "Student"

for i in range(3):
    print(name, i)</textarea>


            <!-- AUTOCOMPLETE -->
            <div
              class="code-suggestion-box"
              id="pySuggestions"
            ></div>

          </div>


          <div class="ide-bottom-bar">

            <span>
              Python 3
            </span>

            <span id="pyCursorPosition">
              Ln 1, Col 1
            </span>

            <span>
              Ctrl + Enter to Run
            </span>

          </div>

        </div>


        <!-- OUTPUT -->
        <div class="card ide-output-card">

          <div class="ide-output-header">

            <strong>
              Console
            </strong>

            <button
              class="web-mini-btn"
              id="clearPyOutput"
            >
              Clear
            </button>

          </div>


          <div
            class="python-console"
            id="pyout"
          >
            <span class="console-muted">
              Press Run to execute your Python code.
            </span>
          </div>

        </div>

      </div>


      <!-- SNIPPETS -->
      <div class="card">

        <h3>Quick Code Snippets</h3>

        <p class="muted">
          Click a snippet to insert it into your code.
        </p>


        <div class="python-snippet-grid">

          <button
            class="python-snippet"
            data-py-snippet='print("Hello World")'
          >
            <strong>print()</strong>
            <span>Display output</span>
          </button>


          <button
            class="python-snippet"
            data-py-snippet='name = input("Enter name: ")'
          >
            <strong>input()</strong>
            <span>Read user input</span>
          </button>


          <button
            class="python-snippet"
            data-py-snippet='for i in range(5):\n    print(i)'
          >
            <strong>for loop</strong>
            <span>Repeat code</span>
          </button>


          <button
            class="python-snippet"
            data-py-snippet='if condition:\n    print("True")\nelse:\n    print("False")'
          >
            <strong>if / else</strong>
            <span>Decision making</span>
          </button>


          <button
            class="python-snippet"
            data-py-snippet='def my_function():\n    pass'
          >
            <strong>function</strong>
            <span>Create function</span>
          </button>


          <button
            class="python-snippet"
            data-py-snippet='numbers = [1, 2, 3, 4, 5]'
          >
            <strong>list</strong>
            <span>Create a list</span>
          </button>

        </div>

      </div>


      <!-- HELP -->
      <div class="card">

        <h3>Python Suggestions</h3>

        <div class="ide-help-grid">

          <div>
            <code>print()</code>
            <span>Show output</span>
          </div>

          <div>
            <code>input()</code>
            <span>Get input</span>
          </div>

          <div>
            <code>len()</code>
            <span>Length of data</span>
          </div>

          <div>
            <code>range()</code>
            <span>Create sequence</span>
          </div>

          <div>
            <code>int()</code>
            <span>Convert to integer</span>
          </div>

          <div>
            <code>str()</code>
            <span>Convert to string</span>
          </div>

        </div>

      </div>

    </div>
  `);


  let pyodideInstance = null;

  let pyodideLoading = null;


  const pythonSuggestions = [

    {
      word: "print",
      insert: "print()",
      description: "Display output"
    },

    {
      word: "input",
      insert: 'input("")',
      description: "Read input"
    },

    {
      word: "range",
      insert: "range()",
      description: "Generate number range"
    },

    {
      word: "len",
      insert: "len()",
      description: "Return length"
    },

    {
      word: "int",
      insert: "int()",
      description: "Convert to integer"
    },

    {
      word: "float",
      insert: "float()",
      description: "Convert to decimal"
    },

    {
      word: "str",
      insert: "str()",
      description: "Convert to string"
    },

    {
      word: "list",
      insert: "list()",
      description: "Create list"
    },

    {
      word: "for",
      insert: "for i in range():\n    ",
      description: "For loop"
    },

    {
      word: "while",
      insert: "while condition:\n    ",
      description: "While loop"
    },

    {
      word: "if",
      insert: "if condition:\n    ",
      description: "Conditional statement"
    },

    {
      word: "elif",
      insert: "elif condition:\n    ",
      description: "Else-if condition"
    },

    {
      word: "else",
      insert: "else:\n    ",
      description: "Else condition"
    },

    {
      word: "def",
      insert: "def function_name():\n    ",
      description: "Create a function"
    },

    {
      word: "return",
      insert: "return ",
      description: "Return a value"
    },

    {
      word: "import",
      insert: "import ",
      description: "Import module"
    },

    {
      word: "True",
      insert: "True",
      description: "Boolean true"
    },

    {
      word: "False",
      insert: "False",
      description: "Boolean false"
    },

    {
      word: "None",
      insert: "None",
      description: "No value"
    },

    {
      word: "append",
      insert: "append()",
      description: "Add list item"
    },

    {
      word: "sort",
      insert: "sort()",
      description: "Sort list"
    }

  ];


  const editor =
    $("#pycode");


  const suggestionBox =
    $("#pySuggestions");


  function updatePythonLines() {

    const lines =
      editor.value
        .split("\n")
        .length;


    $("#pyLineNumbers").innerHTML =
      Array.from(
        { length: lines },
        (_, i) => i + 1
      )
      .join("<br>");

  }


  function updatePythonCursor() {

    const position =
      editor.selectionStart;


    const before =
      editor.value
        .slice(0, position);


    const lines =
      before.split("\n");


    const line =
      lines.length;


    const column =
      lines[
        lines.length - 1
      ].length + 1;


    $("#pyCursorPosition")
      .textContent =
        `Ln ${line}, Col ${column}`;

  }


  function getPythonCurrentWord() {

    const cursor =
      editor.selectionStart;


    const text =
      editor.value
        .slice(0, cursor);


    const match =
      text.match(
        /[A-Za-z_][A-Za-z0-9_]*$/
      );


    return match
      ? match[0]
      : "";

  }


  function showPythonSuggestions() {

    const current =
      getPythonCurrentWord();


    if (
      !current ||
      current.length < 1
    ) {

      suggestionBox.classList.remove(
        "show"
      );

      return;

    }


    const matches =
      pythonSuggestions
        .filter(
          item =>
            item.word
              .toLowerCase()
              .startsWith(
                current.toLowerCase()
              )
        )
        .slice(0,6);


    if (!matches.length) {

      suggestionBox.classList.remove(
        "show"
      );

      return;

    }


    suggestionBox.innerHTML =
      matches
        .map(
          item => `

            <button
              type="button"
              class="code-suggestion"
              data-word="${esc(item.word)}"
            >

              <code>
                ${esc(item.word)}
              </code>

              <span>
                ${esc(item.description)}
              </span>

            </button>

          `
        )
        .join("");


    suggestionBox.classList.add(
      "show"
    );


    suggestionBox
      .querySelectorAll(
        ".code-suggestion"
      )
      .forEach(button => {

        button.onclick = () => {

          const item =
            pythonSuggestions.find(
              x =>
                x.word ===
                button.dataset.word
            );


          if (!item)
            return;


          const cursor =
            editor.selectionStart;


          const currentWord =
            getPythonCurrentWord();


          const start =
            cursor -
            currentWord.length;


          editor.value =
            editor.value.slice(
              0,
              start
            ) +
            item.insert +
            editor.value.slice(
              cursor
            );


          const newCursor =
            start +
            item.insert.length;


          editor.focus();


          editor.setSelectionRange(
            newCursor,
            newCursor
          );


          suggestionBox
            .classList.remove(
              "show"
            );


          updatePythonLines();

        };

      });

  }


  editor.addEventListener(
    "input",
    () => {

      updatePythonLines();

      updatePythonCursor();

      showPythonSuggestions();

    }
  );


  editor.addEventListener(
    "click",
    updatePythonCursor
  );


  editor.addEventListener(
    "keyup",
    updatePythonCursor
  );


  editor.addEventListener(
    "scroll",
    () => {

      $("#pyLineNumbers")
        .scrollTop =
          editor.scrollTop;

    }
  );


  editor.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Tab"
      ) {

        event.preventDefault();


        const start =
          editor.selectionStart;


        const end =
          editor.selectionEnd;


        editor.value =
          editor.value.slice(
            0,
            start
          ) +
          "    " +
          editor.value.slice(
            end
          );


        editor.setSelectionRange(
          start + 4,
          start + 4
        );


        updatePythonLines();

      }


      if (
        event.key === "Enter" &&
        event.ctrlKey
      ) {

        event.preventDefault();

        $("#runPy").click();

      }

    }
  );


  async function loadPython() {

    if (pyodideInstance)
      return pyodideInstance;


    if (pyodideLoading)
      return pyodideLoading;


    pyodideLoading =
      new Promise(
        async (resolve,reject) => {

          try {

            if (
              typeof loadPyodide ===
              "undefined"
            ) {

              const script =
                document.createElement(
                  "script"
                );


              script.src =
                "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js";


              document.head
                .appendChild(
                  script
                );


              await new Promise(
                (res,rej) => {

                  script.onload =
                    res;

                  script.onerror =
                    rej;

                }
              );

            }


            pyodideInstance =
              await loadPyodide();


            resolve(
              pyodideInstance
            );

          }

          catch (error) {

            reject(error);

          }

        }
      );


    return pyodideLoading;

  }


  $("#runPy").onclick =
    async () => {

      const output =
        $("#pyout");


      output.innerHTML =
        `<span class="console-muted">
          Loading Python runtime...
        </span>`;


      try {

        const pyodide =
          await loadPython();


        let stdout = "";


        pyodide.setStdout({

          batched:
            text => {

              stdout +=
                text + "\n";

            }

        });


        pyodide.setStderr({

          batched:
            text => {

              stdout +=
                text + "\n";

            }

        });


        await pyodide.runPythonAsync(
          editor.value
        );


        output.textContent =
          stdout.trim() ||
          "(program finished with no output)";

      }

      catch (error) {

        output.innerHTML =
          `<span class="console-error">${
            esc(error.message)
          }</span>`;

      }

    };


  document
    .querySelectorAll(
      ".python-snippet"
    )
    .forEach(button => {

      button.onclick = () => {

        const snippet =
          button.dataset
            .pySnippet;


        const start =
          editor.selectionStart;


        editor.value =
          editor.value.slice(
            0,
            start
          ) +
          snippet +
          "\n" +
          editor.value.slice(
            start
          );


        editor.focus();

        updatePythonLines();

      };

    });


  $("#pyExample").onclick =
    () => {

      editor.value =
`numbers = [10, 20, 30, 40]

total = 0

for number in numbers:
    total = total + number

average = total / len(numbers)

print("Total:", total)
print("Average:", average)`;


      updatePythonLines();

    };


  $("#pyClear").onclick =
    () => {

      editor.value = "";

      updatePythonLines();

      editor.focus();

    };


  $("#clearPyOutput").onclick =
    () => {

      $("#pyout").textContent =
        "";

    };


  $("#pyCopy").onclick =
    async () => {

      try {

        await navigator.clipboard
          .writeText(
            editor.value
          );


        toastMsg(
          "Python code copied."
        );

      }

      catch {

        toastMsg(
          "Could not copy code."
        );

      }

    };


  updatePythonLines();

  updatePythonCursor();

} 
function webEditor() {

  shell("web-editor", `
    <div class="web-ide-pro">

      <!-- TOOLBAR -->
      <div class="card ide-toolbar">

        <div>
          <h3>HTML + CSS Playground</h3>

          <p class="muted">
            Build web pages with live preview and code suggestions.
          </p>
        </div>


        <div class="ide-toolbar-actions">

          <button
            class="btn primary"
            id="webRun"
          >
            ▶ Run
          </button>

          <button
            class="btn"
            id="webAuto"
          >
            Auto Preview: ON
          </button>

          <button
            class="btn"
            id="webExample"
          >
            Example
          </button>

          <button
            class="btn"
            id="webClear"
          >
            Clear
          </button>

        </div>

      </div>


      <div class="web-ide-layout">

        <!-- CODE AREA -->
        <div class="card web-ide-editor">

          <div class="ide-editor-tabs">

            <button
              class="ide-editor-tab active"
              data-code-tab="html"
            >
              HTML
            </button>

            <button
              class="ide-editor-tab"
              data-code-tab="css"
            >
              CSS
            </button>

          </div>


          <!-- HTML -->
          <div
            class="code-pane active"
            id="htmlEditorPane"
          >

            <div class="ide-editor-header">

              <span>
                📄 index.html
              </span>

              <button
                class="web-mini-btn"
                id="copyHtml"
              >
                Copy
              </button>

            </div>


            <div class="ide-editor-wrapper">

              <div
                class="ide-line-numbers"
                id="htmlLines"
              >
                1
              </div>


              <textarea
                id="htmlCode"
                class="ide-code-editor"
                spellcheck="false"
                autocomplete="off"
              ><div class="student-card">
  <h1>ICT Lab</h1>
  <p>Learning HTML and CSS</p>
  <button>Explore</button>
</div></textarea>


              <div
                class="code-suggestion-box"
                id="htmlSuggestions"
              ></div>

            </div>

          </div>


          <!-- CSS -->
          <div
            class="code-pane"
            id="cssEditorPane"
          >

            <div class="ide-editor-header">

              <span>
                🎨 style.css
              </span>

              <button
                class="web-mini-btn"
                id="copyCss"
              >
                Copy
              </button>

            </div>


            <div class="ide-editor-wrapper">

              <div
                class="ide-line-numbers"
                id="cssLines"
              >
                1
              </div>


              <textarea
                id="cssCode"
                class="ide-code-editor"
                spellcheck="false"
                autocomplete="off"
              >body {
  font-family: Arial, sans-serif;
  background: #071018;
  color: white;
  padding: 40px;
}

.student-card {
  padding: 25px;
  border-radius: 18px;
  background: #11242b;
}

button {
  padding: 10px 16px;
}</textarea>


              <div
                class="code-suggestion-box"
                id="cssSuggestions"
              ></div>

            </div>

          </div>


          <div class="ide-bottom-bar">

            <span id="webCurrentLanguage">
              HTML
            </span>

            <span>
              Suggestions enabled
            </span>

            <span>
              Ctrl + Enter to Run
            </span>

          </div>

        </div>


        <!-- PREVIEW -->
        <div class="card web-preview-pro">

          <div class="web-preview-header">

            <div>
              <strong>
                Live Preview
              </strong>

              <small id="webPreviewStatus">
                Ready
              </small>
            </div>


            <div>

              <button
                class="web-mini-btn"
                id="refreshPreview"
              >
                ↻ Refresh
              </button>

              <button
                class="web-mini-btn"
                id="webFullscreen"
              >
                ⛶ Fullscreen
              </button>

            </div>

          </div>


          <div class="browser-preview">

            <div class="browser-bar">

              <div class="browser-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div class="browser-address">
                http://ictlab.local/preview
              </div>

            </div>


            <iframe
              id="preview"
              sandbox="allow-scripts"
            ></iframe>

          </div>

        </div>

      </div>


      <!-- QUICK TAGS -->
      <div class="card">

        <h3>HTML Quick Insert</h3>

        <div class="web-quick-grid">

          <button
            data-html-insert='<h1></h1>'
          >
            &lt;h1&gt;
          </button>

          <button
            data-html-insert='<p></p>'
          >
            &lt;p&gt;
          </button>

          <button
            data-html-insert='<div></div>'
          >
            &lt;div&gt;
          </button>

          <button
            data-html-insert='<button></button>'
          >
            &lt;button&gt;
          </button>

          <button
            data-html-insert='<a href=""></a>'
          >
            &lt;a&gt;
          </button>

          <button
            data-html-insert='<img src="" alt="">'
          >
            &lt;img&gt;
          </button>

        </div>

      </div>

    </div>
  `);


  let autoPreview =
    true;


  const htmlEditor =
    $("#htmlCode");


  const cssEditor =
    $("#cssCode");


  const htmlTags = [

    ["div", "<div></div>", "Container"],

    ["h1", "<h1></h1>", "Main heading"],

    ["h2", "<h2></h2>", "Heading"],

    ["p", "<p></p>", "Paragraph"],

    ["span", "<span></span>", "Inline container"],

    ["button", "<button></button>", "Button"],

    ["a", '<a href=""></a>', "Hyperlink"],

    ["img", '<img src="" alt="">', "Image"],

    ["input", '<input type="text">', "Input field"],

    ["form", "<form></form>", "Form"],

    ["label", "<label></label>", "Input label"],

    ["select", "<select></select>", "Dropdown"],

    ["option", "<option></option>", "Dropdown option"],

    ["ul", "<ul></ul>", "Unordered list"],

    ["li", "<li></li>", "List item"],

    ["table", "<table></table>", "Table"],

    ["tr", "<tr></tr>", "Table row"],

    ["td", "<td></td>", "Table data"]

  ];


  const htmlAttributes = [

    ["class", 'class=""', "CSS class"],

    ["id", 'id=""', "Unique element ID"],

    ["href", 'href=""', "Link destination"],

    ["src", 'src=""', "Source URL"],

    ["alt", 'alt=""', "Alternative text"],

    ["type", 'type=""', "Element type"],

    ["placeholder", 'placeholder=""', "Input hint"],

    ["value", 'value=""', "Input value"],

    ["name", 'name=""', "Form name"],

    ["title", 'title=""', "Tooltip text"]

  ];


  const cssProperties = [

    ["background", "background: ;", "Background"],

    ["color", "color: ;", "Text color"],

    ["display", "display: ;", "Layout mode"],

    ["width", "width: ;", "Element width"],

    ["height", "height: ;", "Element height"],

    ["margin", "margin: ;", "Outer spacing"],

    ["padding", "padding: ;", "Inner spacing"],

    ["border", "border: ;", "Border"],

    ["border-radius", "border-radius: ;", "Rounded corners"],

    ["font-size", "font-size: ;", "Text size"],

    ["font-weight", "font-weight: ;", "Text weight"],

    ["text-align", "text-align: ;", "Text alignment"],

    ["position", "position: ;", "Position method"],

    ["top", "top: ;", "Top position"],

    ["left", "left: ;", "Left position"],

    ["right", "right: ;", "Right position"],

    ["bottom", "bottom: ;", "Bottom position"],

    ["gap", "gap: ;", "Grid/Flex spacing"],

    ["grid-template-columns", "grid-template-columns: ;", "Grid columns"],

    ["justify-content", "justify-content: ;", "Main-axis alignment"],

    ["align-items", "align-items: ;", "Cross-axis alignment"],

    ["box-shadow", "box-shadow: ;", "Shadow"],

    ["transition", "transition: ;", "Animation transition"],

    ["cursor", "cursor: pointer;", "Mouse cursor"],

    ["overflow", "overflow: ;", "Overflow behaviour"]

  ];


  function updateEditorLines(
    editor,
    output
  ) {

    const lineCount =
      editor.value
        .split("\n")
        .length;


    output.innerHTML =
      Array.from(
        { length: lineCount },
        (_, i) => i + 1
      )
      .join("<br>");

  }


  function insertIntoEditor(
    editor,
    text,
    replaceLength = 0
  ) {

    const cursor =
      editor.selectionStart;


    const start =
      cursor -
      replaceLength;


    editor.value =
      editor.value.slice(
        0,
        start
      ) +
      text +
      editor.value.slice(
        cursor
      );


    const newPosition =
      start +
      text.length;


    editor.focus();


    editor.setSelectionRange(
      newPosition,
      newPosition
    );


    runPreview();

  }


  function currentWord(
    editor
  ) {

    const text =
      editor.value.slice(
        0,
        editor.selectionStart
      );


    const match =
      text.match(
        /[A-Za-z-]+$/
      );


    return match
      ? match[0]
      : "";

  }


  function showSuggestions(
    editor,
    box,
    data
  ) {

    const word =
      currentWord(editor);


    if (!word) {

      box.classList.remove(
        "show"
      );

      return;

    }


    const matches =
      data.filter(
        item =>
          item[0]
            .toLowerCase()
            .startsWith(
              word.toLowerCase()
            )
      )
      .slice(0,7);


    if (!matches.length) {

      box.classList.remove(
        "show"
      );

      return;

    }


    box.innerHTML =
      matches.map(
        item => `

          <button
            type="button"
            class="code-suggestion"
            data-key="${esc(item[0])}"
          >

            <code>
              ${esc(item[0])}
            </code>

            <span>
              ${esc(item[2])}
            </span>

          </button>

        `
      )
      .join("");


    box.classList.add(
      "show"
    );


    box
      .querySelectorAll(
        ".code-suggestion"
      )
      .forEach(button => {

        button.onclick = () => {

          const match =
            data.find(
              item =>
                item[0] ===
                button.dataset.key
            );


          if (!match)
            return;


          insertIntoEditor(
            editor,
            match[1],
            word.length
          );


          box.classList.remove(
            "show"
          );

        };

      });

  }


  function runPreview() {

    const html =
      htmlEditor.value;


    const css =
      cssEditor.value;


    $("#preview").srcdoc = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<style>

html,
body {
    min-height:100%;
}

${css}

</style>

</head>

<body>

${html}

</body>
</html>
    `;


    $("#webPreviewStatus")
      .textContent =
        "Updated ✓";

  }


  htmlEditor.addEventListener(
    "input",
    () => {

      updateEditorLines(
        htmlEditor,
        $("#htmlLines")
      );


      const before =
        htmlEditor.value.slice(
          0,
          htmlEditor.selectionStart
        );



      if (
        /<[A-Za-z]*$/.test(
          before
        )
      ) {

        showSuggestions(
          htmlEditor,
          $("#htmlSuggestions"),
          htmlTags
        );

      }

      else {

        showSuggestions(
          htmlEditor,
          $("#htmlSuggestions"),
          htmlAttributes
        );

      }


      if (autoPreview)
        runPreview();

    }
  );


  cssEditor.addEventListener(
    "input",
    () => {

      updateEditorLines(
        cssEditor,
        $("#cssLines")
      );


      showSuggestions(
        cssEditor,
        $("#cssSuggestions"),
        cssProperties
      );


      if (autoPreview)
        runPreview();

    }
  );


  [htmlEditor, cssEditor]
    .forEach(editor => {

      editor.addEventListener(
        "keydown",
        event => {

          if (
            event.key === "Tab"
          ) {

            event.preventDefault();


            const start =
              editor.selectionStart;


            editor.value =
              editor.value.slice(
                0,
                start
              ) +
              "    " +
              editor.value.slice(
                editor.selectionEnd
              );


            editor.setSelectionRange(
              start + 4,
              start + 4
            );

          }


          if (
            event.ctrlKey &&
            event.key === "Enter"
          ) {

            event.preventDefault();

            runPreview();

          }

        }
      );

    });


  document
    .querySelectorAll(
      ".ide-editor-tab"
    )
    .forEach(button => {

      button.onclick = () => {

        document
          .querySelectorAll(
            ".ide-editor-tab"
          )
          .forEach(
            tab =>
              tab.classList.remove(
                "active"
              )
          );


        document
          .querySelectorAll(
            ".code-pane"
          )
          .forEach(
            pane =>
              pane.classList.remove(
                "active"
              )
          );


        button.classList.add(
          "active"
        );


        const type =
          button.dataset
            .codeTab;


        $("#" +
          type +
          "EditorPane"
        ).classList.add(
          "active"
        );


        $("#webCurrentLanguage")
          .textContent =
            type.toUpperCase();

      };

    });


  document
    .querySelectorAll(
      "[data-html-insert]"
    )
    .forEach(button => {

      button.onclick = () => {

        insertIntoEditor(
          htmlEditor,
          button.dataset
            .htmlInsert
        );

      };

    });


  $("#webRun").onclick =
    runPreview;


  $("#refreshPreview").onclick =
    runPreview;


  $("#webAuto").onclick =
    () => {

      autoPreview =
        !autoPreview;


      $("#webAuto").textContent =
        autoPreview
          ? "Auto Preview: ON"
          : "Auto Preview: OFF";

    };


  $("#webExample").onclick =
    () => {

      htmlEditor.value =
`<div class="profile-card">

  <div class="avatar">
    ICT
  </div>

  <h1>ICT Student</h1>

  <p>
    Learning HTML and CSS with ICT Lab.
  </p>

  <button>
    Start Learning
  </button>

</div>`;


      cssEditor.value =
`body {
  margin: 0;

  min-height: 100vh;

  display: grid;
  place-items: center;

  font-family: Arial, sans-serif;

  background:
    linear-gradient(
      135deg,
      #071018,
      #12313a
    );

  color: white;
}

.profile-card {
  width: 300px;

  padding: 30px;

  text-align: center;

  border-radius: 22px;

  background: #10242b;

  box-shadow:
    0 20px 50px
    rgba(0,0,0,.3);
}

.avatar {
  width: 70px;
  height: 70px;

  margin: auto;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: #62e6c1;

  color: #071018;

  font-weight: bold;
}

button {
  padding: 11px 18px;

  border: 0;

  border-radius: 10px;

  cursor: pointer;
}`;


      updateEditorLines(
        htmlEditor,
        $("#htmlLines")
      );


      updateEditorLines(
        cssEditor,
        $("#cssLines")
      );


      runPreview();

    };


  $("#webClear").onclick =
    () => {

      htmlEditor.value = "";

      cssEditor.value = "";


      updateEditorLines(
        htmlEditor,
        $("#htmlLines")
      );


      updateEditorLines(
        cssEditor,
        $("#cssLines")
      );


      runPreview();

    };


  async function copyEditor(
    text
  ) {

    try {

      await navigator.clipboard
        .writeText(text);


      toastMsg(
        "Code copied."
      );

    }

    catch {

      toastMsg(
        "Could not copy."
      );

    }

  }


  $("#copyHtml").onclick =
    () =>
      copyEditor(
        htmlEditor.value
      );


  $("#copyCss").onclick =
    () =>
      copyEditor(
        cssEditor.value
      );


  $("#webFullscreen").onclick =
    () => {

      const preview =
        $("#preview");


      if (
        preview.requestFullscreen
      ) {

        preview.requestFullscreen();

      }

    };


  updateEditorLines(
    htmlEditor,
    $("#htmlLines")
  );


  updateEditorLines(
    cssEditor,
    $("#cssLines")
  );


  runPreview();

} 
function qr() {

  shell("qr", `
    <div class="qr-pro">

      <!-- MAIN CONTROLS -->
      <div class="qr-layout">

        <div class="card qr-control-card">

          <div class="qr-card-title">
            <div>
              <h3>QR Code Generator</h3>
              <p class="muted">
                Create QR codes for text, links and ICT resources.
              </p>
            </div>
          </div>


          <label>Text or URL</label>

          <textarea
            id="qrtext"
            placeholder="Enter text or URL..."
          >https://example.com</textarea>


          <div class="qr-two-column">

            <div>
              <label>QR Size</label>

              <select id="qrSize">
                <option value="180">180 × 180</option>
                <option value="230" selected>230 × 230</option>
                <option value="300">300 × 300</option>
                <option value="400">400 × 400</option>
                <option value="500">500 × 500</option>
              </select>
            </div>


            <div>
              <label>Error Correction</label>

              <select id="qrError">
                <option value="L">Low</option>
                <option value="M" selected>Medium</option>
                <option value="Q">Quartile</option>
                <option value="H">High</option>
              </select>
            </div>

          </div>


          <div class="qr-two-column">

            <div>
              <label>Foreground Color</label>

              <div class="qr-color-input">
                <input
                  id="qrForeground"
                  type="color"
                  value="#071018"
                >

                <input
                  id="qrForegroundText"
                  value="#071018"
                >
              </div>
            </div>


            <div>
              <label>Background Color</label>

              <div class="qr-color-input">

                <input
                  id="qrBackground"
                  type="color"
                  value="#ffffff"
                >

                <input
                  id="qrBackgroundText"
                  value="#ffffff"
                >

              </div>
            </div>

          </div>


          <div class="qr-two-column">

            <div>
              <label>Margin</label>

              <input
                id="qrMargin"
                type="number"
                min="0"
                max="50"
                value="10"
              >
            </div>


            <div>
              <label>Format</label>

              <select id="qrFormat">
                <option value="png" selected>PNG</option>
                <option value="svg">SVG</option>
              </select>
            </div>

          </div>


          <div class="qr-actions">

            <button
              class="btn primary"
              id="makeQr"
            >
              Generate QR
            </button>

            <button
              class="btn"
              id="qrLiveToggle"
            >
              Live Preview: ON
            </button>

            <button
              class="btn"
              id="qrReset"
            >
              Reset
            </button>

          </div>


          <div class="qr-presets">

            <span>Quick presets</span>

            <button
              class="qr-preset"
              data-qr-value="https://example.com"
            >
              Website
            </button>

            <button
              class="qr-preset"
              data-qr-value="Hello from ICT Lab!"
            >
              Text
            </button>

            <button
              class="qr-preset"
              data-qr-value="mailto:example@email.com"
            >
              Email
            </button>

            <button
              class="qr-preset"
              data-qr-value="tel:+94770000000"
            >
              Phone
            </button>

          </div>

        </div>


        <!-- PREVIEW -->
        <div class="card qr-preview-card">

          <div class="qr-preview-header">

            <div>
              <h3>Live Preview</h3>

              <p class="muted">
                Scan this code using any QR scanner.
              </p>
            </div>

          </div>


          <div class="qr-preview-stage">

            <div class="qr-preview-frame">

              <img
                id="qrimg"
                alt="Generated QR code"
              >

            </div>

          </div>


          <div class="qr-status" id="qrStatus">
            Ready
          </div>


          <div class="qr-preview-actions">

            <button
              class="btn"
              id="qrOpenImage"
            >
              Open Image
            </button>

            <button
              class="btn"
              id="qrCopyLink"
            >
              Copy Image Link
            </button>

          </div>

        </div>

      </div>


      <!-- INFO -->
      <div class="qr-info-grid">

        <div class="card qr-info-card">

          <span class="qr-info-icon">
            🔗
          </span>

          <div>
            <strong>URLs</strong>
            <p>
              Use a full link such as https://example.com
            </p>
          </div>

        </div>


        <div class="card qr-info-card">

          <span class="qr-info-icon">
            ✉
          </span>

          <div>
            <strong>Email</strong>
            <p>
              Use mailto:name@example.com
            </p>
          </div>

        </div>


        <div class="card qr-info-card">

          <span class="qr-info-icon">
            ☎
          </span>

          <div>
            <strong>Phone</strong>
            <p>
              Use tel:+94770000000
            </p>
          </div>

        </div>


        <div class="card qr-info-card">

          <span class="qr-info-icon">
            Aa
          </span>

          <div>
            <strong>Plain Text</strong>
            <p>
              You can encode normal notes or messages too.
            </p>
          </div>

        </div>

      </div>


      <!-- QR EXPLANATION -->
      <div class="card">

        <h3>How QR Codes Work</h3>

        <div class="qr-learning-grid">

          <div>
            <strong>Data</strong>

            <span>
              Text, URLs or contact information is converted into a coded pattern.
            </span>
          </div>


          <div>
            <strong>Error Correction</strong>

            <span>
              Extra data helps the code remain readable even if part of it is damaged.
            </span>
          </div>


          <div>
            <strong>Finder Patterns</strong>

            <span>
              The three large corner squares help scanners detect orientation.
            </span>
          </div>


          <div>
            <strong>Modules</strong>

            <span>
              Each small square represents encoded binary information.
            </span>
          </div>

        </div>

      </div>

    </div>
  `);


  let qrLive =
    true;


  function cleanHex(
    value,
    fallback
  ) {

    const text =
      String(value)
        .trim()
        .replace("#","");


    if (
      /^[0-9A-Fa-f]{6}$/.test(
        text
      )
    ) {

      return text;

    }


    return fallback;

  }


  function buildQrUrl() {

    const text =
      $("#qrtext")
        .value
        .trim();


    if (!text) {

      throw new Error(
        "Enter some text or a URL."
      );

    }


    const size =
      Number(
        $("#qrSize").value
      );


    const foreground =
      cleanHex(
        $("#qrForegroundText").value,
        "071018"
      );


    const background =
      cleanHex(
        $("#qrBackgroundText").value,
        "ffffff"
      );


    const margin =
      Math.max(
        0,
        Math.min(
          50,
          Number(
            $("#qrMargin").value
          ) || 0
        )
      );


    const error =
      $("#qrError").value;


    const format =
      $("#qrFormat").value;


    const base =
      "https://api.qrserver.com/v1/create-qr-code/";


    const params =
      new URLSearchParams({

        size:
          `${size}x${size}`,

        data:
          text,

        ecc:
          error,

        margin:
          margin,

        color:
          foreground,

        bgcolor:
          background,

        format:
          format

      });


    return (
      base +
      "?" +
      params.toString()
    );

  }


  function generateQr() {

    try {

      const url =
        buildQrUrl();


      const image =
        $("#qrimg");


      $("#qrStatus").textContent =
        "Generating...";


      image.onload =
        () => {

          $("#qrStatus")
            .textContent =
              "QR generated successfully ✓";

        };


      image.onerror =
        () => {

          $("#qrStatus")
            .textContent =
              "Could not load QR image.";

        };


      image.src =
        url;

    }

    catch (error) {

      $("#qrStatus").textContent =
        error.message;

      $("#qrimg")
        .removeAttribute(
          "src"
        );

    }

  }


  function syncColorPicker(
    picker,
    textInput
  ) {

    textInput.value =
      picker.value;


    if (qrLive) {

      generateQr();

    }

  }


  function syncColorText(
    textInput,
    picker
  ) {

    const value =
      textInput.value.trim();


    if (
      /^#[0-9A-Fa-f]{6}$/.test(
        value
      )
    ) {

      picker.value =
        value;


      if (qrLive) {

        generateQr();

      }

    }

  }


  $("#qrForeground").oninput =
    () => {

      syncColorPicker(
        $("#qrForeground"),
        $("#qrForegroundText")
      );

    };


  $("#qrBackground").oninput =
    () => {

      syncColorPicker(
        $("#qrBackground"),
        $("#qrBackgroundText")
      );

    };


  $("#qrForegroundText").oninput =
    () => {

      syncColorText(
        $("#qrForegroundText"),
        $("#qrForeground")
      );

    };


  $("#qrBackgroundText").oninput =
    () => {

      syncColorText(
        $("#qrBackgroundText"),
        $("#qrBackground")
      );

    };


  $("#makeQr").onclick =
    generateQr;


  $("#qrLiveToggle").onclick =
    () => {

      qrLive =
        !qrLive;


      $("#qrLiveToggle")
        .textContent =
          qrLive
            ? "Live Preview: ON"
            : "Live Preview: OFF";


      if (qrLive) {

        generateQr();

      }

    };


  [
    "#qrtext",
    "#qrSize",
    "#qrError",
    "#qrMargin",
    "#qrFormat"
  ]
  .forEach(selector => {

    const element =
      $(selector);


    element.addEventListener(
      "input",
      () => {

        if (qrLive) {

          generateQr();

        }

      }
    );

  });


  document
    .querySelectorAll(
      ".qr-preset"
    )
    .forEach(button => {

      button.onclick =
        () => {

          $("#qrtext").value =
            button.dataset.qrValue;


          generateQr();

        };

    });


  $("#qrReset").onclick =
    () => {

      $("#qrtext").value =
        "https://example.com";


      $("#qrSize").value =
        "230";


      $("#qrError").value =
        "M";


      $("#qrMargin").value =
        "10";


      $("#qrFormat").value =
        "png";


      $("#qrForeground").value =
        "#071018";


      $("#qrForegroundText").value =
        "#071018";


      $("#qrBackground").value =
        "#ffffff";


      $("#qrBackgroundText").value =
        "#ffffff";


      generateQr();

    };


  $("#qrOpenImage").onclick =
    () => {

      const src =
        $("#qrimg").src;


      if (!src) {

        toastMsg(
          "Generate a QR code first."
        );

        return;

      }


      window.open(
        src,
        "_blank"
      );

    };


  $("#qrCopyLink").onclick =
    async () => {

      const src =
        $("#qrimg").src;


      if (!src) {

        toastMsg(
          "Generate a QR code first."
        );

        return;

      }


      try {

        await navigator.clipboard
          .writeText(src);


        toastMsg(
          "QR image link copied."
        );

      }

      catch {

        toastMsg(
          "Could not copy link."
        );

      }

    };


  generateQr();

} 


const ICT_QUESTIONS = [
  {
    unit: "Number Systems",
    difficulty: "easy",
    question: "What is the decimal value of binary 1010?",
    options: ["8", "10", "12", "14"],
    answer: 1,
    explanation: "1010₂ = 8 + 2 = 10."
  },
  {
    unit: "Number Systems",
    difficulty: "easy",
    question: "Which number system uses base 16?",
    options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
    answer: 3,
    explanation: "Hexadecimal uses base 16."
  },
  {
    unit: "Number Systems",
    difficulty: "easy",
    question: "What is the binary representation of decimal 13?",
    options: ["1011", "1101", "1110", "1001"],
    answer: 1,
    explanation: "13 = 8 + 4 + 1, so its binary form is 1101."
  },
  {
    unit: "Number Systems",
    difficulty: "easy",
    question: "What is the decimal value of hexadecimal A?",
    options: ["8", "9", "10", "11"],
    answer: 2,
    explanation: "Hexadecimal A represents decimal 10."
  },
  {
    unit: "Number Systems",
    difficulty: "easy",
    question: "Which digits are used in the octal number system?",
    options: ["0-1", "0-7", "0-9", "0-F"],
    answer: 1,
    explanation: "Octal uses the digits 0 through 7."
  },
  {
    unit: "Number Systems",
    difficulty: "easy",
    question: "What is the hexadecimal representation of decimal 15?",
    options: ["E", "F", "10", "A"],
    answer: 1,
    explanation: "Decimal 15 is F in hexadecimal."
  },
  {
    unit: "Number Systems",
    difficulty: "easy",
    question: "What is the decimal value of binary 1111?",
    options: ["14", "15", "16", "17"],
    answer: 1,
    explanation: "1111₂ = 8 + 4 + 2 + 1 = 15."
  },
  {
    unit: "Number Systems",
    difficulty: "easy",
    question: "What is the binary representation of decimal 8?",
    options: ["1000", "0100", "0010", "1111"],
    answer: 0,
    explanation: "Decimal 8 is 1000 in binary."
  },
  {
    unit: "Number Systems",
    difficulty: "easy",
    question: "What is the decimal value of octal 10?",
    options: ["8", "10", "16", "2"],
    answer: 0,
    explanation: "10₈ equals 8 in decimal."
  },
  {
    unit: "Number Systems",
    difficulty: "easy",
    question: "Which base does the decimal system use?",
    options: ["2", "8", "10", "16"],
    answer: 2,
    explanation: "The decimal system is base 10."
  },
  {
    unit: "Number Systems",
    difficulty: "medium",
    question: "What is 1010₂ + 0011₂?",
    options: ["1101", "1110", "1011", "1001"],
    answer: 0,
    explanation: "10 + 3 = 13, and 13 is 1101₂."
  },
  {
    unit: "Number Systems",
    difficulty: "medium",
    question: "What is the decimal value of hexadecimal 1F?",
    options: ["29", "30", "31", "32"],
    answer: 2,
    explanation: "1F₁₆ = 1×16 + 15 = 31."
  },
  {
    unit: "Number Systems",
    difficulty: "medium",
    question: "Which binary value is equal to hexadecimal F?",
    options: ["1010", "1111", "1100", "1001"],
    answer: 1,
    explanation: "Hexadecimal F is decimal 15, which is 1111₂."
  },
  {
    unit: "Number Systems",
    difficulty: "medium",
    question: "What is the octal representation of decimal 16?",
    options: ["10", "20", "16", "22"],
    answer: 1,
    explanation: "16 decimal is 20 in octal."
  },
  {
    unit: "Number Systems",
    difficulty: "medium",
    question: "What is the decimal value of binary 100000?",
    options: ["16", "24", "32", "64"],
    answer: 2,
    explanation: "100000₂ = 32."
  },
  {
    unit: "Number Systems",
    difficulty: "medium",
    question: "What is the binary result of 1111₂ + 1₂?",
    options: ["1110", "10000", "1111", "1010"],
    answer: 1,
    explanation: "15 + 1 = 16, which is 10000₂."
  },
  {
    unit: "Number Systems",
    difficulty: "easy",
    question: "Which hexadecimal digit represents decimal 12?",
    options: ["A", "B", "C", "D"],
    answer: 2,
    explanation: "Decimal 12 is C in hexadecimal."
  },
  {
    unit: "Number Systems",
    difficulty: "medium",
    question: "What is the decimal value of octal 17?",
    options: ["13", "14", "15", "16"],
    answer: 2,
    explanation: "17₈ = 1×8 + 7 = 15."
  },
  {
    unit: "Number Systems",
    difficulty: "medium",
    question: "What is the binary representation of hexadecimal 2A?",
    options: ["00101010", "00110100", "00101100", "00101001"],
    answer: 0,
    explanation: "2 = 0010 and A = 1010, giving 00101010."
  },
  {
    unit: "Number Systems",
    difficulty: "easy",
    question: "Which representation uses only 0 and 1?",
    options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
    answer: 0,
    explanation: "Binary uses only the digits 0 and 1."
  },
  {
    unit: "Boolean Logic",
    difficulty: "easy",
    question: "What is the output of 1 AND 0?",
    options: ["0", "1", "10", "Undefined"],
    answer: 0,
    explanation: "AND outputs 1 only when both inputs are 1."
  },
  {
    unit: "Boolean Logic",
    difficulty: "easy",
    question: "What is the output of 1 OR 0?",
    options: ["0", "1", "10", "Undefined"],
    answer: 1,
    explanation: "OR outputs 1 when at least one input is 1."
  },
  {
    unit: "Boolean Logic",
    difficulty: "easy",
    question: "Which gate reverses its input?",
    options: ["AND", "OR", "NOT", "XOR"],
    answer: 2,
    explanation: "A NOT gate inverts its input."
  },
  {
    unit: "Boolean Logic",
    difficulty: "easy",
    question: "What is the output of NOT 1?",
    options: ["0", "1", "2", "Undefined"],
    answer: 0,
    explanation: "NOT 1 equals 0."
  },
  {
    unit: "Boolean Logic",
    difficulty: "easy",
    question: "What is the output of 1 XOR 1?",
    options: ["0", "1", "10", "Undefined"],
    answer: 0,
    explanation: "XOR is 1 only when the inputs are different."
  },
  {
    unit: "Boolean Logic",
    difficulty: "medium",
    question: "What is the output of 0 NAND 0?",
    options: ["0", "1", "00", "Undefined"],
    answer: 1,
    explanation: "NAND is the inverse of AND; 0 AND 0 is 0, so NAND is 1."
  },
  {
    unit: "Boolean Logic",
    difficulty: "medium",
    question: "What is the output of 0 NOR 0?",
    options: ["0", "1", "10", "Undefined"],
    answer: 1,
    explanation: "NOR is the inverse of OR; 0 OR 0 is 0, so NOR is 1."
  },
  {
    unit: "Boolean Logic",
    difficulty: "easy",
    question: "Which gate outputs 1 when its inputs are different?",
    options: ["AND", "OR", "XOR", "NOR"],
    answer: 2,
    explanation: "XOR outputs 1 when the inputs differ."
  },
  {
    unit: "Boolean Logic",
    difficulty: "easy",
    question: "Which gate is the inverse of AND?",
    options: ["OR", "XOR", "NAND", "NOR"],
    answer: 2,
    explanation: "NAND is NOT-AND."
  },
  {
    unit: "Boolean Logic",
    difficulty: "easy",
    question: "Which gate is the inverse of OR?",
    options: ["NOR", "NAND", "XOR", "AND"],
    answer: 0,
    explanation: "NOR is NOT-OR."
  },
  {
    unit: "Boolean Logic",
    difficulty: "easy",
    question: "What is the output of 1 AND 1?",
    options: ["0", "1", "2", "Undefined"],
    answer: 1,
    explanation: "AND outputs 1 when both inputs are 1."
  },
  {
    unit: "Boolean Logic",
    difficulty: "easy",
    question: "What is the output of 0 OR 0?",
    options: ["0", "1", "2", "Undefined"],
    answer: 0,
    explanation: "OR outputs 0 only when both inputs are 0."
  },
  {
    unit: "Boolean Logic",
    difficulty: "medium",
    question: "What is the value of A AND NOT A?",
    options: ["Always 0", "Always 1", "Equal to A", "Undefined"],
    answer: 0,
    explanation: "A and its complement cannot both be 1."
  },
  {
    unit: "Boolean Logic",
    difficulty: "medium",
    question: "What is the value of A OR NOT A?",
    options: ["Always 0", "Always 1", "Equal to A", "Undefined"],
    answer: 1,
    explanation: "A OR NOT A is always true."
  },
  {
    unit: "Boolean Logic",
    difficulty: "medium",
    question: "Which Boolean law states A + A = A?",
    options: ["Identity law", "Idempotent law", "Complement law", "De Morgan's law"],
    answer: 1,
    explanation: "A + A = A is an idempotent law."
  },
  {
    unit: "Boolean Logic",
    difficulty: "medium",
    question: "According to De Morgan's law, NOT(A AND B) equals what?",
    options: ["NOT A AND NOT B", "NOT A OR NOT B", "A OR B", "A XOR B"],
    answer: 1,
    explanation: "De Morgan's law gives ¬(A∧B) = ¬A∨¬B."
  },
  {
    unit: "Boolean Logic",
    difficulty: "medium",
    question: "According to De Morgan's law, NOT(A OR B) equals what?",
    options: ["NOT A AND NOT B", "NOT A OR NOT B", "A AND B", "A XOR B"],
    answer: 0,
    explanation: "De Morgan's law gives ¬(A∨B) = ¬A∧¬B."
  },
  {
    unit: "Boolean Logic",
    difficulty: "medium",
    question: "How many rows are in a truth table with 3 input variables?",
    options: ["4", "6", "8", "16"],
    answer: 2,
    explanation: "A truth table with n variables has 2ⁿ rows; 2³ = 8."
  },
  {
    unit: "Boolean Logic",
    difficulty: "medium",
    question: "How many rows are in a truth table with 4 input variables?",
    options: ["8", "12", "16", "32"],
    answer: 2,
    explanation: "2⁴ = 16 rows."
  },
  {
    unit: "Boolean Logic",
    difficulty: "medium",
    question: "Which form is a sum of products?",
    options: ["SOP", "POS", "ASCII", "BCD"],
    answer: 0,
    explanation: "SOP stands for Sum of Products."
  },
  {
    unit: "Computer Architecture",
    difficulty: "easy",
    question: "Which register stores the address of the next instruction?",
    options: ["MDR", "Program Counter", "Accumulator", "CIR"],
    answer: 1,
    explanation: "The Program Counter stores the address of the next instruction."
  },
  {
    unit: "Computer Architecture",
    difficulty: "medium",
    question: "Which register stores data being transferred to or from memory?",
    options: ["MDR", "PC", "MAR", "CIR"],
    answer: 0,
    explanation: "The Memory Data Register stores data transferred to or from memory."
  },
  {
    unit: "Computer Architecture",
    difficulty: "easy",
    question: "Which register stores the address of a memory location being accessed?",
    options: ["MAR", "MDR", "PC", "ACC"],
    answer: 0,
    explanation: "The Memory Address Register holds the memory address being accessed."
  },
  {
    unit: "Computer Architecture",
    difficulty: "easy",
    question: "Which register usually holds the current instruction?",
    options: ["CIR", "MAR", "MDR", "PC"],
    answer: 0,
    explanation: "The Current Instruction Register stores the instruction being executed."
  },
  {
    unit: "Computer Architecture",
    difficulty: "easy",
    question: "Which part of the CPU performs arithmetic and logical operations?",
    options: ["Control Unit", "ALU", "Cache", "Bus"],
    answer: 1,
    explanation: "The ALU performs arithmetic and logical operations."
  },
  {
    unit: "Computer Architecture",
    difficulty: "easy",
    question: "Which CPU component coordinates instruction execution?",
    options: ["Control Unit", "ALU", "RAM", "SSD"],
    answer: 0,
    explanation: "The Control Unit directs and coordinates CPU operations."
  },
  {
    unit: "Computer Architecture",
    difficulty: "easy",
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Processing Utility", "Central Program Unit", "Core Processing Utility"],
    answer: 0,
    explanation: "CPU stands for Central Processing Unit."
  },
  {
    unit: "Computer Architecture",
    difficulty: "easy",
    question: "Which memory is typically the fastest?",
    options: ["Hard disk", "RAM", "Cache", "Optical disk"],
    answer: 2,
    explanation: "Cache memory is designed for very fast access close to the CPU."
  },
  {
    unit: "Computer Architecture",
    difficulty: "easy",
    question: "What does the fetch stage do?",
    options: ["Stores a file", "Gets the next instruction from memory", "Prints output", "Creates a database"],
    answer: 1,
    explanation: "Fetch retrieves the next instruction from memory."
  },
  {
    unit: "Computer Architecture",
    difficulty: "easy",
    question: "What follows the fetch stage in the fetch-decode-execute cycle?",
    options: ["Delete", "Decode", "Shutdown", "Compile"],
    answer: 1,
    explanation: "After fetching, the instruction is decoded."
  },
  {
    unit: "Computer Architecture",
    difficulty: "medium",
    question: "What is the purpose of the system clock?",
    options: ["Store files", "Synchronize CPU operations", "Provide internet", "Cool the CPU"],
    answer: 1,
    explanation: "The clock provides timing signals that synchronize CPU operations."
  },
  {
    unit: "Computer Architecture",
    difficulty: "medium",
    question: "Which bus carries memory addresses?",
    options: ["Data bus", "Address bus", "Control bus", "USB"],
    answer: 1,
    explanation: "The address bus carries addresses."
  },
  {
    unit: "Computer Architecture",
    difficulty: "medium",
    question: "Which bus carries actual data values?",
    options: ["Address bus", "Data bus", "Control bus", "Clock bus"],
    answer: 1,
    explanation: "The data bus transfers data between components."
  },
  {
    unit: "Computer Architecture",
    difficulty: "medium",
    question: "Which bus carries control signals?",
    options: ["Data bus", "Address bus", "Control bus", "Expansion bus"],
    answer: 2,
    explanation: "The control bus carries control and timing signals."
  },
  {
    unit: "Computer Architecture",
    difficulty: "medium",
    question: "What is the main purpose of cache memory?",
    options: ["Permanent storage", "Reduce average memory access time", "Display graphics", "Connect networks"],
    answer: 1,
    explanation: "Cache stores frequently used data and instructions close to the CPU."
  },
  {
    unit: "Computer Architecture",
    difficulty: "medium",
    question: "Which CPU feature allows multiple processing units on one chip?",
    options: ["Multicore", "Virtual memory", "Defragmentation", "Pagination"],
    answer: 0,
    explanation: "A multicore CPU contains multiple processing cores."
  },
  {
    unit: "Computer Architecture",
    difficulty: "medium",
    question: "What does the accumulator commonly store?",
    options: ["Intermediate arithmetic results", "Network addresses", "File names", "Keyboard input only"],
    answer: 0,
    explanation: "The accumulator commonly holds intermediate arithmetic or logic results."
  },
  {
    unit: "Computer Architecture",
    difficulty: "medium",
    question: "What does instruction decoding determine?",
    options: ["The required operation and operands", "The monitor resolution", "The hard disk size", "The IP address"],
    answer: 0,
    explanation: "Decoding interprets what the instruction means and what operation is needed."
  },
  {
    unit: "Computer Architecture",
    difficulty: "easy",
    question: "Which memory is volatile?",
    options: ["ROM", "RAM", "SSD", "Blu-ray"],
    answer: 1,
    explanation: "RAM is volatile and loses its contents when power is removed."
  },
  {
    unit: "Computer Architecture",
    difficulty: "easy",
    question: "Which memory commonly stores firmware permanently?",
    options: ["RAM", "ROM", "Cache", "Register"],
    answer: 1,
    explanation: "ROM or non-volatile firmware storage is commonly used for firmware."
  },
  {
    unit: "Networking",
    difficulty: "easy",
    question: "Which device forwards packets between different networks?",
    options: ["Switch", "Router", "Keyboard", "Hub"],
    answer: 1,
    explanation: "A router forwards packets between networks."
  },
  {
    unit: "Networking",
    difficulty: "easy",
    question: "How many bits are in an IPv4 address?",
    options: ["16", "32", "64", "128"],
    answer: 1,
    explanation: "IPv4 addresses contain 32 bits."
  },
  {
    unit: "Networking",
    difficulty: "easy",
    question: "How many bits are in an IPv6 address?",
    options: ["32", "64", "128", "256"],
    answer: 2,
    explanation: "IPv6 addresses contain 128 bits."
  },
  {
    unit: "Networking",
    difficulty: "easy",
    question: "Which device usually connects devices within the same LAN using MAC addresses?",
    options: ["Router", "Switch", "Modem", "Printer"],
    answer: 1,
    explanation: "A switch forwards frames inside a LAN using MAC addresses."
  },
  {
    unit: "Networking",
    difficulty: "easy",
    question: "What does LAN stand for?",
    options: ["Local Area Network", "Long Access Network", "Logical Area Node", "Local Access Node"],
    answer: 0,
    explanation: "LAN stands for Local Area Network."
  },
  {
    unit: "Networking",
    difficulty: "easy",
    question: "What does WAN stand for?",
    options: ["Wide Area Network", "Wireless Access Node", "Web Area Network", "Wide Access Number"],
    answer: 0,
    explanation: "WAN stands for Wide Area Network."
  },
  {
    unit: "Networking",
    difficulty: "easy",
    question: "Which protocol is commonly used to transfer web pages securely?",
    options: ["HTTP", "HTTPS", "FTP", "SMTP"],
    answer: 1,
    explanation: "HTTPS is HTTP protected with TLS."
  },
  {
    unit: "Networking",
    difficulty: "easy",
    question: "Which protocol is commonly used to send email?",
    options: ["SMTP", "HTTP", "FTP", "DNS"],
    answer: 0,
    explanation: "SMTP is used for sending email."
  },
  {
    unit: "Networking",
    difficulty: "easy",
    question: "Which service translates domain names into IP addresses?",
    options: ["DNS", "DHCP", "SMTP", "FTP"],
    answer: 0,
    explanation: "DNS resolves domain names to IP addresses."
  },
  {
    unit: "Networking",
    difficulty: "medium",
    question: "Which service automatically assigns IP configuration to clients?",
    options: ["DNS", "DHCP", "HTTP", "SSH"],
    answer: 1,
    explanation: "DHCP can automatically assign IP addresses and related settings."
  },
  {
    unit: "Networking",
    difficulty: "medium",
    question: "What is a MAC address primarily used to identify?",
    options: ["A network interface", "A website", "A file", "A user password"],
    answer: 0,
    explanation: "A MAC address identifies a network interface at the data-link layer."
  },
  {
    unit: "Networking",
    difficulty: "easy",
    question: "Which topology connects all devices to a central device?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    answer: 2,
    explanation: "A star topology connects devices to a central switch or hub."
  },
  {
    unit: "Networking",
    difficulty: "medium",
    question: "Which topology provides multiple redundant paths between devices?",
    options: ["Bus", "Star", "Mesh", "Line"],
    answer: 2,
    explanation: "A mesh topology provides multiple possible paths."
  },
  {
    unit: "Networking",
    difficulty: "medium",
    question: "Which protocol is used to test reachability with echo requests?",
    options: ["ICMP", "SMTP", "FTP", "POP3"],
    answer: 0,
    explanation: "Ping commonly uses ICMP echo request and reply messages."
  },
  {
    unit: "Networking",
    difficulty: "easy",
    question: "Which device converts signals for communication over an ISP connection in many home networks?",
    options: ["Modem", "Switch", "Keyboard", "Scanner"],
    answer: 0,
    explanation: "A modem converts/terminates the access link for ISP connectivity."
  },
  {
    unit: "Networking",
    difficulty: "medium",
    question: "What does the subnet mask help determine?",
    options: ["Network and host portions of an IPv4 address", "The browser version", "The CPU speed", "The file type"],
    answer: 0,
    explanation: "A subnet mask identifies which bits belong to the network and host portions."
  },
  {
    unit: "Networking",
    difficulty: "medium",
    question: "What is the default port number for HTTP?",
    options: ["21", "25", "80", "443"],
    answer: 2,
    explanation: "HTTP commonly uses TCP port 80."
  },
  {
    unit: "Networking",
    difficulty: "medium",
    question: "What is the default port number for HTTPS?",
    options: ["53", "80", "110", "443"],
    answer: 3,
    explanation: "HTTPS commonly uses TCP port 443."
  },
  {
    unit: "Networking",
    difficulty: "easy",
    question: "Which protocol is commonly used to transfer files?",
    options: ["FTP", "DNS", "DHCP", "ARP"],
    answer: 0,
    explanation: "FTP is a file transfer protocol."
  },
  {
    unit: "Networking",
    difficulty: "medium",
    question: "Which protocol maps IPv4 addresses to MAC addresses on a local network?",
    options: ["ARP", "SMTP", "HTTP", "FTP"],
    answer: 0,
    explanation: "ARP resolves IPv4 addresses to MAC addresses on a LAN."
  },
  {
    unit: "Database",
    difficulty: "easy",
    question: "Which key uniquely identifies a record in a table?",
    options: ["Foreign Key", "Primary Key", "Composite Attribute", "Relationship"],
    answer: 1,
    explanation: "A primary key uniquely identifies each record."
  },
  {
    unit: "Database",
    difficulty: "easy",
    question: "What is the main purpose of a foreign key?",
    options: ["Delete records", "Link related tables", "Encrypt data", "Sort records"],
    answer: 1,
    explanation: "A foreign key creates a relationship between related tables."
  },
  {
    unit: "Database",
    difficulty: "easy",
    question: "What is a database table made of?",
    options: ["Rows and columns", "Pixels and frames", "Packets and routers", "Files only"],
    answer: 0,
    explanation: "A relational table is organized into rows and columns."
  },
  {
    unit: "Database",
    difficulty: "easy",
    question: "What is another name for a row in a relational table?",
    options: ["Record", "Field", "Query", "Schema"],
    answer: 0,
    explanation: "A row is commonly called a record or tuple."
  },
  {
    unit: "Database",
    difficulty: "easy",
    question: "What is another name for a column in a table?",
    options: ["Record", "Field", "Transaction", "Index only"],
    answer: 1,
    explanation: "A column is commonly called a field or attribute."
  },
  {
    unit: "Database",
    difficulty: "easy",
    question: "Which SQL command retrieves data?",
    options: ["SELECT", "DELETE", "DROP", "UPDATE"],
    answer: 0,
    explanation: "SELECT retrieves rows from a table."
  },
  {
    unit: "Database",
    difficulty: "easy",
    question: "Which SQL clause filters rows?",
    options: ["WHERE", "ORDER BY", "FROM", "VALUES"],
    answer: 0,
    explanation: "WHERE specifies conditions used to filter rows."
  },
  {
    unit: "Database",
    difficulty: "easy",
    question: "Which SQL clause sorts query results?",
    options: ["GROUP BY", "ORDER BY", "WHERE", "VALUES"],
    answer: 1,
    explanation: "ORDER BY sorts the result set."
  },
  {
    unit: "Database",
    difficulty: "easy",
    question: "Which SQL command adds a new row?",
    options: ["INSERT", "SELECT", "ALTER", "DROP"],
    answer: 0,
    explanation: "INSERT adds new rows to a table."
  },
  {
    unit: "Database",
    difficulty: "easy",
    question: "Which SQL command changes existing data?",
    options: ["UPDATE", "SELECT", "CREATE", "SHOW"],
    answer: 0,
    explanation: "UPDATE modifies existing rows."
  },
  {
    unit: "Database",
    difficulty: "easy",
    question: "Which SQL command removes rows?",
    options: ["DELETE", "SELECT", "CREATE", "JOIN"],
    answer: 0,
    explanation: "DELETE removes rows that match its condition."
  },
  {
    unit: "Database",
    difficulty: "medium",
    question: "What is normalization mainly used for?",
    options: ["Reduce redundancy and improve data integrity", "Increase image size", "Encrypt passwords", "Assign IP addresses"],
    answer: 0,
    explanation: "Normalization reduces unnecessary duplication and update anomalies."
  },
  {
    unit: "Database",
    difficulty: "medium",
    question: "What does 1NF require regarding field values?",
    options: ["Atomic values", "Encrypted values", "Sorted values", "Binary values only"],
    answer: 0,
    explanation: "First Normal Form requires attributes to contain atomic values."
  },
  {
    unit: "Database",
    difficulty: "medium",
    question: "What is a composite key?",
    options: ["A key made from more than one attribute", "A password", "A foreign key only", "A sorted column"],
    answer: 0,
    explanation: "A composite key uses multiple attributes together to identify a row."
  },
  {
    unit: "Database",
    difficulty: "medium",
    question: "Which relationship allows one parent row to relate to many child rows?",
    options: ["One-to-many", "One-to-one", "Many-to-none", "Zero-to-one"],
    answer: 0,
    explanation: "One-to-many means one row in one table can relate to multiple rows in another."
  },
  {
    unit: "Database",
    difficulty: "medium",
    question: "Which SQL keyword combines rows from related tables?",
    options: ["JOIN", "DROP", "DELETE", "ALTER"],
    answer: 0,
    explanation: "JOIN combines related rows from two or more tables."
  },
  {
    unit: "Database",
    difficulty: "medium",
    question: "What does NULL represent in a database?",
    options: ["Missing or unknown value", "Zero only", "Empty string only", "False only"],
    answer: 0,
    explanation: "NULL represents an absent or unknown value."
  },
  {
    unit: "Database",
    difficulty: "medium",
    question: "Which constraint prevents duplicate values in a column?",
    options: ["UNIQUE", "DEFAULT", "CHECK only", "NULL"],
    answer: 0,
    explanation: "A UNIQUE constraint prevents duplicate values in the constrained column or set."
  },
  {
    unit: "Database",
    difficulty: "easy",
    question: "What does DBMS stand for?",
    options: ["Database Management System", "Digital Binary Memory System", "Data Bus Management Service", "Database Mapping Syntax"],
    answer: 0,
    explanation: "DBMS stands for Database Management System."
  },
  {
    unit: "Database",
    difficulty: "easy",
    question: "Which SQL command creates a new table?",
    options: ["CREATE TABLE", "SELECT TABLE", "BUILD TABLE", "INSERT TABLE"],
    answer: 0,
    explanation: "CREATE TABLE defines a new table."
  },
  {
    unit: "Web Development",
    difficulty: "easy",
    question: "Which language defines the structure of a web page?",
    options: ["CSS", "HTML", "SQL", "Python"],
    answer: 1,
    explanation: "HTML defines the structure and content of a web page."
  },
  {
    unit: "Web Development",
    difficulty: "easy",
    question: "Which language is mainly used to style web pages?",
    options: ["CSS", "SQL", "HTML", "Python"],
    answer: 0,
    explanation: "CSS controls visual presentation."
  },
  {
    unit: "Web Development",
    difficulty: "easy",
    question: "Which language is commonly used for browser-side interactivity?",
    options: ["JavaScript", "SQL", "C", "Assembly"],
    answer: 0,
    explanation: "JavaScript is commonly used for client-side interactivity."
  },
  {
    unit: "Web Development",
    difficulty: "easy",
    question: "Which HTML tag is used for the largest standard heading?",
    options: ["<h1>", "<p>", "<div>", "<span>"],
    answer: 0,
    explanation: "<h1> is the highest-level standard heading."
  },
  {
    unit: "Web Development",
    difficulty: "easy",
    question: "Which HTML tag creates a paragraph?",
    options: ["<p>", "<a>", "<img>", "<ul>"],
    answer: 0,
    explanation: "<p> defines a paragraph."
  },
  {
    unit: "Web Development",
    difficulty: "easy",
    question: "Which HTML tag creates a hyperlink?",
    options: ["<a>", "<linktext>", "<href>", "<url>"],
    answer: 0,
    explanation: "<a> creates a hyperlink."
  },
  {
    unit: "Web Development",
    difficulty: "easy",
    question: "Which HTML attribute specifies the destination of a link?",
    options: ["href", "src", "alt", "class"],
    answer: 0,
    explanation: "href specifies the link destination."
  },
  {
    unit: "Web Development",
    difficulty: "easy",
    question: "Which HTML tag displays an image?",
    options: ["<img>", "<picturetext>", "<src>", "<imagefile>"],
    answer: 0,
    explanation: "<img> embeds an image."
  },
  {
    unit: "Web Development",
    difficulty: "easy",
    question: "Which attribute provides alternative text for an image?",
    options: ["alt", "href", "id", "style"],
    answer: 0,
    explanation: "alt provides alternative text for an image."
  },
  {
    unit: "Web Development",
    difficulty: "easy",
    question: "Which CSS property changes text color?",
    options: ["color", "font-size", "background-image", "display"],
    answer: 0,
    explanation: "The color property controls text color."
  },
  {
    unit: "Web Development",
    difficulty: "easy",
    question: "Which CSS property changes the background color?",
    options: ["background-color", "text-color", "border-color only", "font-color"],
    answer: 0,
    explanation: "background-color sets an element's background color."
  },
  {
    unit: "Web Development",
    difficulty: "medium",
    question: "Which CSS selector targets an element by id?",
    options: [".name", "#name", "name()", "@name"],
    answer: 1,
    explanation: "The # prefix selects an element by id."
  },
  {
    unit: "Web Development",
    difficulty: "medium",
    question: "Which CSS selector targets a class?",
    options: [".name", "#name", "name()", "@name"],
    answer: 0,
    explanation: "The . prefix selects elements by class."
  },
  {
    unit: "Web Development",
    difficulty: "medium",
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Output Method", "Digital Object Map", "Document Order Mode"],
    answer: 0,
    explanation: "DOM stands for Document Object Model."
  },
  {
    unit: "Web Development",
    difficulty: "medium",
    question: "Which JavaScript method selects the first element matching a CSS selector?",
    options: ["document.querySelector()", "document.writeFile()", "window.select()", "console.find()"],
    answer: 0,
    explanation: "document.querySelector() returns the first matching element."
  },
  {
    unit: "Web Development",
    difficulty: "easy",
    question: "Which event occurs when a user presses a button with a mouse?",
    options: ["click", "load", "resize", "scroll"],
    answer: 0,
    explanation: "The click event is fired when an element is clicked."
  },
  {
    unit: "Web Development",
    difficulty: "medium",
    question: "Which CSS layout system is designed for one-dimensional rows or columns?",
    options: ["Flexbox", "SQL Grid", "DOM Flow", "HTML Table only"],
    answer: 0,
    explanation: "Flexbox is primarily a one-dimensional layout model."
  },
  {
    unit: "Web Development",
    difficulty: "medium",
    question: "Which CSS layout system is designed for two-dimensional rows and columns?",
    options: ["CSS Grid", "Flexbox only", "DOM", "HTTP"],
    answer: 0,
    explanation: "CSS Grid is designed for two-dimensional layouts."
  },
  {
    unit: "Web Development",
    difficulty: "medium",
    question: "What is responsive web design intended to do?",
    options: ["Adapt layouts to different screen sizes", "Make every page offline", "Replace HTML with SQL", "Encrypt all images"],
    answer: 0,
    explanation: "Responsive design adapts presentation to different device and viewport sizes."
  },
  {
    unit: "Web Development",
    difficulty: "easy",
    question: "Which protocol is commonly used to request web resources?",
    options: ["HTTP", "SMTP", "FTP only", "ARP"],
    answer: 0,
    explanation: "HTTP is the core application protocol for web requests and responses."
  },
  {
    unit: "Programming",
    difficulty: "easy",
    question: "Which Python keyword defines a function?",
    options: ["function", "func", "def", "create"],
    answer: 2,
    explanation: "Python uses def to define a function."
  },
  {
    unit: "Programming",
    difficulty: "easy",
    question: "Which symbol starts a comment in Python?",
    options: ["#", "//", "<!--", "**"],
    answer: 0,
    explanation: "# starts a single-line comment in Python."
  },
  {
    unit: "Programming",
    difficulty: "easy",
    question: "Which function prints output in Python?",
    options: ["print()", "echo()", "show()", "displayText()"],
    answer: 0,
    explanation: "print() writes output to the console."
  },
  {
    unit: "Programming",
    difficulty: "easy",
    question: "Which function reads keyboard input in Python?",
    options: ["input()", "read()", "scan()", "getText()"],
    answer: 0,
    explanation: "input() reads a line of user input."
  },
  {
    unit: "Programming",
    difficulty: "easy",
    question: "Which data type stores True or False?",
    options: ["bool", "int", "str", "float"],
    answer: 0,
    explanation: "bool represents Boolean values."
  },
  {
    unit: "Programming",
    difficulty: "easy",
    question: "Which data type stores whole numbers?",
    options: ["int", "str", "bool", "list"],
    answer: 0,
    explanation: "int represents integers."
  },
  {
    unit: "Programming",
    difficulty: "easy",
    question: "Which data type stores text?",
    options: ["str", "int", "bool", "float"],
    answer: 0,
    explanation: "str represents strings."
  },
  {
    unit: "Programming",
    difficulty: "medium",
    question: "Which operator is used for exponentiation in Python?",
    options: ["**", "^", "//", "%%"],
    answer: 0,
    explanation: "** is Python's exponentiation operator."
  },
  {
    unit: "Programming",
    difficulty: "medium",
    question: "Which operator performs floor division in Python?",
    options: ["//", "/", "%", "**"],
    answer: 0,
    explanation: "// performs floor division."
  },
  {
    unit: "Programming",
    difficulty: "medium",
    question: "Which operator returns the remainder?",
    options: ["%", "//", "/", "**"],
    answer: 0,
    explanation: "% is the modulo operator."
  },
  {
    unit: "Programming",
    difficulty: "medium",
    question: "What is the result of 5 // 2 in Python?",
    options: ["2", "2.5", "3", "1"],
    answer: 0,
    explanation: "Floor division 5 // 2 gives 2."
  },
  {
    unit: "Programming",
    difficulty: "medium",
    question: "What is the result of 5 % 2?",
    options: ["0", "1", "2", "2.5"],
    answer: 1,
    explanation: "5 divided by 2 leaves a remainder of 1."
  },
  {
    unit: "Programming",
    difficulty: "easy",
    question: "Which statement is used for conditional selection?",
    options: ["if", "for", "import", "def"],
    answer: 0,
    explanation: "if performs conditional selection."
  },
  {
    unit: "Programming",
    difficulty: "easy",
    question: "Which loop is commonly used to iterate over a sequence?",
    options: ["for", "if", "def", "class"],
    answer: 0,
    explanation: "A for loop iterates over items in a sequence."
  },
  {
    unit: "Programming",
    difficulty: "easy",
    question: "Which loop continues while a condition is true?",
    options: ["while", "if", "switch", "def"],
    answer: 0,
    explanation: "A while loop repeats while its condition is true."
  },
  {
    unit: "Programming",
    difficulty: "medium",
    question: "Which keyword exits a loop early?",
    options: ["break", "continue", "return only", "stop"],
    answer: 0,
    explanation: "break exits the nearest loop."
  },
  {
    unit: "Programming",
    difficulty: "medium",
    question: "Which keyword skips to the next loop iteration?",
    options: ["continue", "break", "pass only", "skip"],
    answer: 0,
    explanation: "continue skips the remainder of the current iteration."
  },
  {
    unit: "Programming",
    difficulty: "medium",
    question: "Which Python collection is ordered and mutable?",
    options: ["list", "tuple", "set only", "int"],
    answer: 0,
    explanation: "A list is ordered and mutable."
  },
  {
    unit: "Programming",
    difficulty: "medium",
    question: "Which Python collection stores key-value pairs?",
    options: ["dict", "list", "tuple", "str"],
    answer: 0,
    explanation: "A dictionary stores key-value pairs."
  },
  {
    unit: "Programming",
    difficulty: "easy",
    question: "Which function returns the number of items in a sequence?",
    options: ["len()", "size()", "countall()", "lengthof()"],
    answer: 0,
    explanation: "len() returns the length of a sequence or collection."
  },
  {
    unit: "Cybersecurity",
    difficulty: "easy",
    question: "Which CIA triad property prevents unauthorized disclosure?",
    options: ["Integrity", "Availability", "Confidentiality", "Redundancy"],
    answer: 2,
    explanation: "Confidentiality protects information from unauthorized disclosure."
  },
  {
    unit: "Cybersecurity",
    difficulty: "easy",
    question: "Which CIA triad property protects data from unauthorized alteration?",
    options: ["Integrity", "Availability", "Confidentiality", "Compression"],
    answer: 0,
    explanation: "Integrity protects data from unauthorized modification."
  },
  {
    unit: "Cybersecurity",
    difficulty: "easy",
    question: "Which CIA triad property ensures systems and data are accessible when needed?",
    options: ["Availability", "Integrity", "Confidentiality", "Hashing"],
    answer: 0,
    explanation: "Availability means authorized users can access systems and data when needed."
  },
  {
    unit: "Cybersecurity",
    difficulty: "medium",
    question: "Which process converts data into a fixed-length digest?",
    options: ["Routing", "Hashing", "Subnetting", "Caching"],
    answer: 1,
    explanation: "Hashing produces a fixed-length digest from input data."
  },
  {
    unit: "Cybersecurity",
    difficulty: "easy",
    question: "Which security control adds a second verification step after a password?",
    options: ["Multi-factor authentication", "Compression", "Caching", "Routing"],
    answer: 0,
    explanation: "MFA uses more than one authentication factor."
  },
  {
    unit: "Cybersecurity",
    difficulty: "easy",
    question: "What is phishing?",
    options: ["A deceptive attempt to obtain sensitive information", "A backup method", "A compression method", "A database query"],
    answer: 0,
    explanation: "Phishing uses deceptive messages or sites to trick users into revealing information."
  },
  {
    unit: "Cybersecurity",
    difficulty: "easy",
    question: "Which password is generally stronger?",
    options: ["password123", "12345678", "Correct-Horse-7-Lamp", "qwerty"],
    answer: 2,
    explanation: "Longer, less predictable passwords or passphrases are generally stronger."
  },
  {
    unit: "Cybersecurity",
    difficulty: "easy",
    question: "What is the purpose of encryption?",
    options: ["Make data unreadable without the required key", "Delete data", "Speed up CPU clocks", "Assign IP addresses"],
    answer: 0,
    explanation: "Encryption protects data confidentiality by transforming plaintext into ciphertext."
  },
  {
    unit: "Cybersecurity",
    difficulty: "medium",
    question: "What is plaintext?",
    options: ["Original readable data before encryption", "Encrypted output", "A firewall rule", "A hash digest"],
    answer: 0,
    explanation: "Plaintext is the original readable data before encryption."
  },
  {
    unit: "Cybersecurity",
    difficulty: "medium",
    question: "What is ciphertext?",
    options: ["Encrypted form of data", "A username", "A database row", "A network cable"],
    answer: 0,
    explanation: "Ciphertext is the encrypted representation of plaintext."
  },
  {
    unit: "Cybersecurity",
    difficulty: "easy",
    question: "What is a firewall primarily used for?",
    options: ["Control network traffic according to security rules", "Increase monitor brightness", "Store passwords", "Compile programs"],
    answer: 0,
    explanation: "A firewall allows or blocks network traffic based on configured rules."
  },
  {
    unit: "Cybersecurity",
    difficulty: "easy",
    question: "What should you check before entering credentials on a website?",
    options: ["The domain and secure connection", "Only the page color", "The font size", "The number of images"],
    answer: 0,
    explanation: "Checking the real domain and secure connection helps detect phishing pages."
  },
  {
    unit: "Cybersecurity",
    difficulty: "medium",
    question: "What is social engineering?",
    options: ["Manipulating people to reveal information or perform unsafe actions", "Compressing files", "Routing packets", "Creating database keys"],
    answer: 0,
    explanation: "Social engineering targets human behavior rather than only technical systems."
  },
  {
    unit: "Cybersecurity",
    difficulty: "easy",
    question: "Why are software updates important for security?",
    options: ["They may patch known vulnerabilities", "They always increase storage", "They remove all passwords", "They disable encryption"],
    answer: 0,
    explanation: "Updates often fix security vulnerabilities and bugs."
  },
  {
    unit: "Cybersecurity",
    difficulty: "easy",
    question: "What is malware?",
    options: ["Software designed to harm, disrupt, or misuse systems", "A network cable", "A database field", "A safe backup"],
    answer: 0,
    explanation: "Malware is malicious software intended to damage, disrupt, spy on, or misuse systems."
  },
  {
    unit: "Cybersecurity",
    difficulty: "medium",
    question: "What is ransomware?",
    options: ["Malware that can lock or encrypt data and demand payment", "A firewall type", "A database query", "A web browser"],
    answer: 0,
    explanation: "Ransomware is malware that restricts access to data or systems and demands payment."
  },
  {
    unit: "Cybersecurity",
    difficulty: "easy",
    question: "What is the safest response to an unexpected suspicious attachment?",
    options: ["Do not open it and verify the sender through a trusted channel", "Open it immediately", "Forward it to everyone", "Disable antivirus"],
    answer: 0,
    explanation: "Avoid opening suspicious attachments and independently verify the sender."
  },
  {
    unit: "Cybersecurity",
    difficulty: "medium",
    question: "Why should unique passwords be used for different accounts?",
    options: ["A breach of one account is less likely to expose others", "It makes passwords shorter", "It removes the need for MFA", "It disables phishing"],
    answer: 0,
    explanation: "Unique passwords reduce password-reuse risk across accounts."
  },
  {
    unit: "Cybersecurity",
    difficulty: "easy",
    question: "What is a backup primarily useful for?",
    options: ["Recovering data after loss or damage", "Encrypting network packets", "Changing IP addresses", "Creating passwords"],
    answer: 0,
    explanation: "Backups help restore data after accidental loss, hardware failure, or some cyber incidents."
  },
  {
    unit: "Cybersecurity",
    difficulty: "medium",
    question: "Which principle gives users only the permissions they need?",
    options: ["Least privilege", "Maximum access", "Open access", "No authentication"],
    answer: 0,
    explanation: "Least privilege limits permissions to the minimum necessary."
  }
]; 





let quizState={
  i:0,
  score:0,
  timer:30,
  quizQuestions:[],
  answers:[],
  currentQuestion:null
};

let quizTimer; 

function shuffleArray(array){
  const arr=[...array];
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}

function buildRandomQuiz(amount=20,unit="ALL",difficulty="ALL"){
  let pool=[...ICT_QUESTIONS];
  if(unit!=="ALL") pool=pool.filter(q=>q.unit===unit);
  if(difficulty!=="ALL") pool=pool.filter(q=>q.difficulty===difficulty);
  return shuffleArray(pool).slice(0,Math.min(amount,pool.length));
}

function quiz(){
  clearInterval(quizTimer);
  const units=[...new Set(ICT_QUESTIONS.map(q=>q.unit))].sort();
  shell("quiz",`
    <div class="card quiz-home">
      <div class="quiz-hero">
        <div>
          <span class="eyebrow">A/L ICT PRACTICE</span>
          <h2>Random Quiz Generator</h2>
          <p class="muted">Each attempt is generated randomly from ${ICT_QUESTIONS.length} questions.</p>
        </div>
        <div class="quiz-bank-count"><strong>${ICT_QUESTIONS.length}</strong><span>QUESTIONS</span></div>
      </div>

      <div class="quiz-settings">
        <div><label>Quiz size</label><select id="quizAmount">
          <option value="10">Quick 10</option>
          <option value="20" selected>Standard 20</option>
          <option value="30">30 Questions</option>
          <option value="50">Exam Mode — 50</option>
        </select></div>

        <div><label>Unit</label><select id="quizUnit">
          <option value="ALL">All Units — Random Mix</option>
          ${units.map(u=>`<option value="${esc(u)}">${esc(u)}</option>`).join("")}
        </select></div>

        <div><label>Difficulty</label><select id="quizDifficulty">
          <option value="ALL">All Levels</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
        </select></div>
      </div>

      <button class="btn primary quiz-start-btn" id="startRandomQuiz">Start Random Quiz →</button>
    </div>
  `);
  $("#startRandomQuiz").onclick=startSelectedQuiz;
}

function startSelectedQuiz(){
  quizState={
    i:0,score:0,timer:30,
    quizQuestions:buildRandomQuiz(+$("#quizAmount").value,$("#quizUnit").value,$("#quizDifficulty").value),
    answers:[],currentQuestion:null
  };
  if(!quizState.quizQuestions.length){toastMsg("No questions match those filters.");return;}
  renderQuizScreen();
  renderQuestion();
  startTimer();
}

function renderQuizScreen(){
  content.innerHTML=`
    <div class="section-head">
      <div><span class="eyebrow">✓ A/L ICT QUIZ</span><h2>Random Practice</h2><p>Questions and answer positions are randomized.</p></div>
      <button class="btn" id="quitQuiz">Exit Quiz</button>
    </div>
    <div class="workspace">
      <div class="card quiz-main-card">
        <div class="progress"><i id="qbar"></i></div>
        <div class="quiz-meta">
          <span class="pill" id="qcount"></span>
          <span class="pill" id="qtopic"></span>
          <span class="timer" id="qtimer">30</span>
        </div>
        <div id="quizBody"></div>
      </div>
      <div class="card">
        <h3>Current attempt</h3>
        <div class="quiz-live-score"><span>Score</span><strong id="liveScore">0</strong></div>
        <p class="muted">30 seconds per question.</p>
      </div>
    </div>`;
  $("#quitQuiz").onclick=quiz;
}
function renderQuestion(){
  const raw=quizState.quizQuestions[quizState.i];
  const shuffled=shuffleArray(raw.options.map((text,index)=>({text,correct:index===raw.answer})));
  const q={...raw,shuffledOptions:shuffled};
  quizState.currentQuestion=q;

  $("#qcount").textContent=`Question ${quizState.i+1}/${quizState.quizQuestions.length}`;
  $("#qtopic").textContent=`${q.unit} • ${q.difficulty}`;
  $("#qbar").style.width=`${(quizState.i/quizState.quizQuestions.length)*100}%`;
  $("#qtimer").textContent=quizState.timer;

  $("#quizBody").innerHTML=`
    <div class="quiz-question-number">QUESTION ${quizState.i+1}</div>
    <div class="quiz-q">${esc(q.question)}</div>
    <div class="quiz-options">
      ${q.shuffledOptions.map((o,i)=>`
        <button class="btn quiz-option" data-index="${i}">
          <span class="quiz-letter">${String.fromCharCode(65+i)}</span>
          <span>${esc(o.text)}</span>
        </button>`).join("")}
    </div>
    <div id="quizExplanation"></div>`;

  document.querySelectorAll(".quiz-option").forEach(b=>{
    b.onclick=()=>submitQuizAnswer(+b.dataset.index,b);
  });
}

function submitQuizAnswer(selectedIndex,selectedButton=null){
  clearInterval(quizTimer);
  const q=quizState.currentQuestion;
  const buttons=[...document.querySelectorAll(".quiz-option")];
  buttons.forEach(b=>b.disabled=true);

  const selected=q.shuffledOptions[selectedIndex];
  const correctIndex=q.shuffledOptions.findIndex(x=>x.correct);
  const correct=!!selected&&selected.correct;

  if(correct){
    quizState.score++;
    if(selectedButton) selectedButton.classList.add("correct");
  }else{
    if(selectedButton) selectedButton.classList.add("wrong");
    if(buttons[correctIndex]) buttons[correctIndex].classList.add("correct");
  }

  quizState.answers.push({
    question:q.question,
    selected:selected?selected.text:"No answer",
    correctAnswer:q.shuffledOptions[correctIndex].text,
    correct,
    explanation:q.explanation
  });

  $("#liveScore").textContent=quizState.score;
  $("#quizExplanation").innerHTML=`
    <div class="quiz-explanation ${correct?"good":"bad"}">
      <strong>${correct?"✓ Correct":"✕ Incorrect"}</strong>
      <p>${esc(q.explanation)}</p>
    </div>`;

  setTimeout(nextQuizQuestion,1100);
}

function nextQuizQuestion(){
  quizState.i++;
  if(quizState.i>=quizState.quizQuestions.length){showQuizResult();return;}
  quizState.timer=30;
  renderQuestion();
  startTimer();
}

function startTimer(){
  clearInterval(quizTimer);
  quizTimer=setInterval(()=>{
    quizState.timer--;
    if($("#qtimer")) $("#qtimer").textContent=quizState.timer;
    if(quizState.timer<=0){
      clearInterval(quizTimer);
      submitQuizAnswer(-1,null);
    }
  },1000);
}

function showQuizResult(){
  clearInterval(quizTimer);
  const total=quizState.quizQuestions.length;
  const percentage=Math.round((quizState.score/total)*100);
  const performance=percentage>=90?"Excellent":percentage>=75?"Very Good":percentage>=60?"Good":percentage>=40?"Needs more practice":"Keep practicing";

  $("#qbar").style.width="100%";
  $("#quizBody").innerHTML=`
    <div class="quiz-result">
      <div class="quiz-result-icon">✓</div>
      <span class="eyebrow">QUIZ COMPLETE</span>
      <h2>${performance}</h2>
      <div class="quiz-result-score">${quizState.score}<span>/ ${total}</span></div>
      <div class="quiz-percentage">${percentage}%</div>
      <div class="quiz-result-actions">
        <button class="btn primary" id="newRandomQuiz">New Random Quiz</button>
        <button class="btn" id="reviewQuiz">Review Answers</button>
      </div>
      <div id="quizReview"></div>
    </div>`;

  $("#newRandomQuiz").onclick=quiz;
  $("#reviewQuiz").onclick=()=>{
    $("#quizReview").innerHTML=quizState.answers.map((a,i)=>`
      <div class="quiz-review-item ${a.correct?"good":"bad"}">
        <strong>${i+1}. ${esc(a.question)}</strong>
        <p>Your answer: ${esc(a.selected)}</p>
        <p>Correct answer: ${esc(a.correctAnswer)}</p>
        <small>${esc(a.explanation)}</small>
      </div>`).join("");
  };
}


function games() {

  shell("games", `
    <div class="games-pro">

      <div class="games-topbar card">
        <div>
          <h3>ICT Mini Games</h3>
          <p class="muted">
            Quick challenges for binary, logic, networking, CPU concepts and ICT theory.
          </p>
        </div>

        <div class="games-score-box">
          <span>Total Score</span>
          <strong id="gameTotalScore">0</strong>
        </div>
      </div>


      <div class="games-grid">


        <!-- REACTION GAME -->
        <div class="card game-card">

          <div class="game-title">
            <span class="game-icon">⚡</span>
            <div>
              <h3>Reaction Test</h3>
              <p>Test your response speed.</p>
            </div>
          </div>

          <div class="game-content center-game">

            <button class="reaction-target" id="reactionTarget">
              START
            </button>

            <strong id="reactionResult">
              Press START
            </strong>

            <small id="reactionBest" class="muted">
              Best: —
            </small>

          </div>

        </div>



        <!-- BINARY GUESS -->
        <div class="card game-card">

          <div class="game-title">
            <span class="game-icon">01</span>
            <div>
              <h3>Binary Guess</h3>
              <p>Convert decimal to binary.</p>
            </div>
          </div>

          <div class="game-big-number" id="binaryGameNumber">
            13
          </div>

          <input
            id="binaryGameInput"
            placeholder="Example: 1101"
            autocomplete="off"
          >

          <button class="btn primary" id="binaryGameCheck">
            Check Answer
          </button>

          <div class="game-feedback" id="binaryGameFeedback"></div>

          <div class="game-mini-stats">
            <span>Score <b id="binaryScore">0</b></span>
            <span>Streak <b id="binaryStreak">0</b></span>
          </div>

        </div>



        <!-- PARITY -->
        <div class="card game-card">

          <div class="game-title">
            <span class="game-icon">±</span>
            <div>
              <h3>Parity Challenge</h3>
              <p>Is the number even or odd?</p>
            </div>
          </div>

          <div class="game-big-number" id="parityNumber">
            42
          </div>

          <div class="game-choice-row">
            <button class="btn" data-parity="even">
              Even
            </button>

            <button class="btn" data-parity="odd">
              Odd
            </button>
          </div>

          <div class="game-feedback" id="parityFeedback"></div>

          <div class="game-mini-stats">
            <span>Score <b id="parityScore">0</b></span>
            <span>Streak <b id="parityStreak">0</b></span>
          </div>

        </div>



        <!-- HEX GAME -->
        <div class="card game-card">

          <div class="game-title">
            <span class="game-icon">0x</span>
            <div>
              <h3>Hexadecimal Guess</h3>
              <p>Convert decimal into hexadecimal.</p>
            </div>
          </div>

          <div class="game-big-number" id="hexGameNumber">
            255
          </div>

          <input
            id="hexGameInput"
            placeholder="Example: FF"
            autocomplete="off"
          >

          <button class="btn primary" id="hexGameCheck">
            Check Answer
          </button>

          <div class="game-feedback" id="hexGameFeedback"></div>

          <div class="game-mini-stats">
            <span>Score <b id="hexScore">0</b></span>
            <span>Streak <b id="hexStreak">0</b></span>
          </div>

        </div>



        <!-- ASCII GAME -->
        <div class="card game-card">

          <div class="game-title">
            <span class="game-icon">Aa</span>
            <div>
              <h3>ASCII Challenge</h3>
              <p>Guess the ASCII decimal value.</p>
            </div>
          </div>

          <div class="game-big-number" id="asciiCharacter">
            A
          </div>

          <input
            id="asciiInput"
            type="number"
            placeholder="ASCII value"
          >

          <button class="btn primary" id="asciiCheck">
            Check Answer
          </button>

          <div class="game-feedback" id="asciiFeedback"></div>

          <div class="game-mini-stats">
            <span>Score <b id="asciiScore">0</b></span>
          </div>

        </div>



        <!-- LOGIC GATE GAME -->
        <div class="card game-card">

          <div class="game-title">
            <span class="game-icon">◉</span>
            <div>
              <h3>Logic Gate Challenge</h3>
              <p>Calculate the output.</p>
            </div>
          </div>

          <div class="logic-game-expression" id="logicGameExpression">
            1 AND 0
          </div>

          <div class="game-choice-row">
            <button class="btn" data-logic-answer="0">
              Output 0
            </button>

            <button class="btn" data-logic-answer="1">
              Output 1
            </button>
          </div>

          <div class="game-feedback" id="logicGameFeedback"></div>

          <div class="game-mini-stats">
            <span>Score <b id="logicScore">0</b></span>
            <span>Streak <b id="logicStreak">0</b></span>
          </div>

        </div>



        <!-- IP CLASSIFICATION -->
        <div class="card game-card">

          <div class="game-title">
            <span class="game-icon">IP</span>
            <div>
              <h3>IP Class Challenge</h3>
              <p>Identify the IPv4 address class.</p>
            </div>
          </div>

          <div class="game-big-number game-ip" id="ipGameAddress">
            192.168.1.25
          </div>

          <div class="game-choice-row wrap">

            <button class="btn" data-ip-class="A">
              Class A
            </button>

            <button class="btn" data-ip-class="B">
              Class B
            </button>

            <button class="btn" data-ip-class="C">
              Class C
            </button>

          </div>

          <div class="game-feedback" id="ipGameFeedback"></div>

          <div class="game-mini-stats">
            <span>Score <b id="ipScore">0</b></span>
          </div>

        </div>



        <!-- BOOLEAN EXPRESSION -->
        <div class="card game-card">

          <div class="game-title">
            <span class="game-icon">ƒ</span>
            <div>
              <h3>Boolean Challenge</h3>
              <p>Evaluate the Boolean expression.</p>
            </div>
          </div>

          <div class="logic-game-expression" id="booleanQuestion">
            NOT 0 AND 1
          </div>

          <div class="game-choice-row">

            <button class="btn" data-bool-answer="0">
              0
            </button>

            <button class="btn" data-bool-answer="1">
              1
            </button>

          </div>

          <div class="game-feedback" id="booleanFeedback"></div>

          <div class="game-mini-stats">
            <span>Score <b id="booleanScore">0</b></span>
          </div>

        </div>



        <!-- CPU INSTRUCTION -->
        <div class="card game-card">

          <div class="game-title">
            <span class="game-icon">CPU</span>
            <div>
              <h3>CPU Instruction Match</h3>
              <p>Choose what the instruction does.</p>
            </div>
          </div>

          <div class="cpu-game-instruction" id="cpuInstructionQuestion">
            LDA
          </div>

          <div
            class="cpu-answer-list"
            id="cpuAnswerList"
          ></div>

          <div class="game-feedback" id="cpuFeedback"></div>

          <div class="game-mini-stats">
            <span>Score <b id="cpuGameScore">0</b></span>
          </div>

        </div>



      </div>
    </div>
  `);




  let totalScore = 0;

  function addTotalScore(amount = 1) {

    totalScore += amount;

    $("#gameTotalScore").textContent =
      totalScore;

  }


  function correctFeedback(element, message = "Correct! ✓") {

    element.className =
      "game-feedback correct";

    element.textContent =
      message;

  }


  function wrongFeedback(element, message) {

    element.className =
      "game-feedback wrong";

    element.textContent =
      message;

  }




  let reactionWaiting = false;
  let reactionReady = false;
  let reactionStart = 0;
  let reactionTimer = null;
  let reactionBest = null;


  $("#reactionTarget").onclick = () => {

    const button =
      $("#reactionTarget");


    if (!reactionWaiting && !reactionReady) {

      button.textContent =
        "WAIT...";

      button.classList.remove(
        "ready"
      );


      $("#reactionResult").textContent =
        "Wait for green!";


      reactionWaiting = true;


      const delay =
        1500 +
        Math.random() * 2500;


      reactionTimer =
        setTimeout(() => {

          reactionWaiting =
            false;

          reactionReady =
            true;

          reactionStart =
            performance.now();

          button.textContent =
            "CLICK!";

          button.classList.add(
            "ready"
          );

        }, delay);

      return;

    }



    if (reactionWaiting) {

      clearTimeout(
        reactionTimer
      );

      reactionWaiting =
        false;

      button.textContent =
        "START";

      $("#reactionResult").textContent =
        "Too early! Try again.";

      return;

    }



    if (reactionReady) {

      const time =
        Math.round(
          performance.now() -
          reactionStart
        );


      reactionReady =
        false;


      button.classList.remove(
        "ready"
      );

      button.textContent =
        "AGAIN";


      $("#reactionResult").textContent =
        `${time} ms`;


      if (
        reactionBest === null ||
        time < reactionBest
      ) {

        reactionBest =
          time;

      }


      $("#reactionBest").textContent =
        `Best: ${reactionBest} ms`;


      if (time < 400) {

        addTotalScore();

      }

    }

  };




  let binaryNumber = 0;
  let binaryScore = 0;
  let binaryStreak = 0;


  function newBinaryQuestion() {

    binaryNumber =
      Math.floor(
        Math.random() * 255
      ) + 1;


    $("#binaryGameNumber")
      .textContent =
        binaryNumber;


    $("#binaryGameInput").value =
      "";

    $("#binaryGameFeedback")
      .textContent =
        "";

  }


  $("#binaryGameCheck").onclick =
    () => {

      const answer =
        $("#binaryGameInput")
          .value
          .trim();


      const correct =
        binaryNumber.toString(2);


      if (answer === correct) {

        binaryScore++;
        binaryStreak++;

        $("#binaryScore").textContent =
          binaryScore;

        $("#binaryStreak").textContent =
          binaryStreak;


        correctFeedback(
          $("#binaryGameFeedback"),
          "Correct! +" +
          binaryStreak +
          " streak"
        );


        addTotalScore();

        setTimeout(
          newBinaryQuestion,
          700
        );

      }

      else {

        binaryStreak = 0;

        $("#binaryStreak").textContent =
          "0";


        wrongFeedback(
          $("#binaryGameFeedback"),
          "Answer: " + correct
        );

      }

    };


  $("#binaryGameInput")
    .addEventListener(
      "keydown",
      e => {

        if (e.key === "Enter")
          $("#binaryGameCheck").click();

      }
    );


  newBinaryQuestion();




  let parityNumber = 0;
  let parityScore = 0;
  let parityStreak = 0;


  function newParityQuestion() {

    parityNumber =
      Math.floor(
        Math.random() * 500
      );


    $("#parityNumber")
      .textContent =
        parityNumber;


    $("#parityFeedback")
      .textContent =
        "";

  }


  document
    .querySelectorAll(
      "[data-parity]"
    )
    .forEach(button => {

      button.onclick = () => {

        const correct =
          parityNumber % 2 === 0
            ? "even"
            : "odd";


        if (
          button.dataset.parity ===
          correct
        ) {

          parityScore++;
          parityStreak++;

          $("#parityScore")
            .textContent =
              parityScore;

          $("#parityStreak")
            .textContent =
              parityStreak;


          correctFeedback(
            $("#parityFeedback")
          );


          addTotalScore();

          setTimeout(
            newParityQuestion,
            550
          );

        }

        else {

          parityStreak = 0;

          $("#parityStreak")
            .textContent =
              "0";


          wrongFeedback(
            $("#parityFeedback"),
            "It is " + correct + "."
          );

        }

      };

    });


  newParityQuestion();




  let hexNumber = 0;
  let hexScore = 0;
  let hexStreak = 0;


  function newHexQuestion() {

    hexNumber =
      Math.floor(
        Math.random() * 4095
      ) + 1;


    $("#hexGameNumber")
      .textContent =
        hexNumber;


    $("#hexGameInput").value =
      "";

    $("#hexGameFeedback")
      .textContent =
        "";

  }


  $("#hexGameCheck").onclick =
    () => {

      const answer =
        $("#hexGameInput")
          .value
          .trim()
          .toUpperCase()
          .replace(/^0X/, "");


      const correct =
        hexNumber
          .toString(16)
          .toUpperCase();


      if (answer === correct) {

        hexScore++;
        hexStreak++;

        $("#hexScore").textContent =
          hexScore;

        $("#hexStreak").textContent =
          hexStreak;


        correctFeedback(
          $("#hexGameFeedback")
        );


        addTotalScore();

        setTimeout(
          newHexQuestion,
          650
        );

      }

      else {

        hexStreak = 0;

        $("#hexStreak").textContent =
          "0";


        wrongFeedback(
          $("#hexGameFeedback"),
          `Correct: ${correct}`
        );

      }

    };


  newHexQuestion();




  const asciiCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


  let asciiCurrent = "A";
  let asciiScore = 0;


  function newAsciiQuestion() {

    asciiCurrent =
      asciiCharacters[
        Math.floor(
          Math.random() *
          asciiCharacters.length
        )
      ];


    $("#asciiCharacter")
      .textContent =
        asciiCurrent;


    $("#asciiInput").value =
      "";

    $("#asciiFeedback")
      .textContent =
        "";

  }


  $("#asciiCheck").onclick =
    () => {

      const answer =
        Number(
          $("#asciiInput").value
        );


      const correct =
        asciiCurrent
          .charCodeAt(0);


      if (answer === correct) {

        asciiScore++;

        $("#asciiScore").textContent =
          asciiScore;


        correctFeedback(
          $("#asciiFeedback")
        );


        addTotalScore();

        setTimeout(
          newAsciiQuestion,
          600
        );

      }

      else {

        wrongFeedback(
          $("#asciiFeedback"),
          `ASCII ${asciiCurrent} = ${correct}`
        );

      }

    };


  newAsciiQuestion();



   

  const logicGates =
    [
      "AND",
      "OR",
      "XOR",
      "NAND",
      "NOR"
    ];


  let logicA = 0;
  let logicB = 0;
  let logicGate = "AND";
  let logicCorrect = 0;

  let logicScore = 0;
  let logicStreak = 0;


  function calculateLogic(
    gate,
    a,
    b
  ) {

    if (gate === "AND")
      return a & b;

    if (gate === "OR")
      return a | b;

    if (gate === "XOR")
      return a ^ b;

    if (gate === "NAND")
      return Number(!(a & b));

    if (gate === "NOR")
      return Number(!(a | b));

  }


  function newLogicQuestion() {

    logicA =
      Math.random() < .5
        ? 0
        : 1;


    logicB =
      Math.random() < .5
        ? 0
        : 1;


    logicGate =
      logicGates[
        Math.floor(
          Math.random() *
          logicGates.length
        )
      ];


    logicCorrect =
      calculateLogic(
        logicGate,
        logicA,
        logicB
      );


    $("#logicGameExpression")
      .textContent =
        `${logicA} ${logicGate} ${logicB}`;


    $("#logicGameFeedback")
      .textContent =
        "";

  }


  document
    .querySelectorAll(
      "[data-logic-answer]"
    )
    .forEach(button => {

      button.onclick = () => {

        const answer =
          Number(
            button.dataset
              .logicAnswer
          );


        if (
          answer ===
          logicCorrect
        ) {

          logicScore++;
          logicStreak++;

          $("#logicScore")
            .textContent =
              logicScore;


          $("#logicStreak")
            .textContent =
              logicStreak;


          correctFeedback(
            $("#logicGameFeedback")
          );


          addTotalScore();

          setTimeout(
            newLogicQuestion,
            600
          );

        }

        else {

          logicStreak = 0;

          $("#logicStreak")
            .textContent =
              "0";


          wrongFeedback(
            $("#logicGameFeedback"),
            `Output is ${logicCorrect}`
          );

        }

      };

    });


  newLogicQuestion();




  let ipClassCorrect = "C";
  let ipScore = 0;


  function newIPQuestion() {

    const classes = [
      {
        cls:"A",
        first:
          1 +
          Math.floor(
            Math.random() * 126
          )
      },

      {
        cls:"B",
        first:
          128 +
          Math.floor(
            Math.random() * 64
          )
      },

      {
        cls:"C",
        first:
          192 +
          Math.floor(
            Math.random() * 32
          )
      }
    ];


    const selected =
      classes[
        Math.floor(
          Math.random() *
          classes.length
        )
      ];


    ipClassCorrect =
      selected.cls;


    const address =
      [
        selected.first,

        Math.floor(
          Math.random() * 256
        ),

        Math.floor(
          Math.random() * 256
        ),

        Math.floor(
          Math.random() * 256
        )
      ].join(".");


    $("#ipGameAddress")
      .textContent =
        address;


    $("#ipGameFeedback")
      .textContent =
        "";

  }


  document
    .querySelectorAll(
      "[data-ip-class]"
    )
    .forEach(button => {

      button.onclick = () => {

        if (
          button.dataset.ipClass ===
          ipClassCorrect
        ) {

          ipScore++;

          $("#ipScore").textContent =
            ipScore;


          correctFeedback(
            $("#ipGameFeedback")
          );


          addTotalScore();

          setTimeout(
            newIPQuestion,
            650
          );

        }

        else {

          wrongFeedback(
            $("#ipGameFeedback"),
            `Correct class: ${ipClassCorrect}`
          );

        }

      };

    });


  newIPQuestion();




  const booleanQuestions =
    [

      {
        text:"NOT 0",
        answer:1
      },

      {
        text:"NOT 1",
        answer:0
      },

      {
        text:"1 AND 1",
        answer:1
      },

      {
        text:"1 AND 0",
        answer:0
      },

      {
        text:"0 OR 1",
        answer:1
      },

      {
        text:"1 XOR 1",
        answer:0
      },

      {
        text:"1 XOR 0",
        answer:1
      },

      {
        text:"NOT 0 AND 1",
        answer:1
      },

      {
        text:"NOT (1 AND 1)",
        answer:0
      }

    ];


  let currentBoolean =
    booleanQuestions[0];

  let booleanScore = 0;


  function newBooleanQuestion() {

    currentBoolean =
      booleanQuestions[
        Math.floor(
          Math.random() *
          booleanQuestions.length
        )
      ];


    $("#booleanQuestion")
      .textContent =
        currentBoolean.text;


    $("#booleanFeedback")
      .textContent =
        "";

  }


  document
    .querySelectorAll(
      "[data-bool-answer]"
    )
    .forEach(button => {

      button.onclick = () => {

        const answer =
          Number(
            button.dataset
              .boolAnswer
          );


        if (
          answer ===
          currentBoolean.answer
        ) {

          booleanScore++;

          $("#booleanScore")
            .textContent =
              booleanScore;


          correctFeedback(
            $("#booleanFeedback")
          );


          addTotalScore();

          setTimeout(
            newBooleanQuestion,
            600
          );

        }

        else {

          wrongFeedback(
            $("#booleanFeedback"),
            `Answer: ${currentBoolean.answer}`
          );

        }

      };

    });


  newBooleanQuestion();




  const cpuQuestions =
    [

      {
        instruction:"LDA",
        correct:
          "Load data into accumulator",
        wrong:[
          "Store accumulator",
          "Jump to address",
          "Stop CPU"
        ]
      },

      {
        instruction:"STA",
        correct:
          "Store accumulator into memory",
        wrong:[
          "Load accumulator",
          "Add value",
          "Jump to address"
        ]
      },

      {
        instruction:"ADD",
        correct:
          "Add value to accumulator",
        wrong:[
          "Store value",
          "Stop CPU",
          "Move program counter"
        ]
      },

      {
        instruction:"SUB",
        correct:
          "Subtract value from accumulator",
        wrong:[
          "Add value",
          "Load memory",
          "Store memory"
        ]
      },

      {
        instruction:"JMP",
        correct:
          "Jump to another instruction",
        wrong:[
          "Add values",
          "Stop CPU",
          "Store accumulator"
        ]
      },

      {
        instruction:"HLT",
        correct:
          "Stop program execution",
        wrong:[
          "Load memory",
          "Subtract value",
          "Jump to address"
        ]
      }

    ];


  let currentCPUQuestion =
    cpuQuestions[0];

  let cpuScore = 0;


  function shuffleGameArray(array) {

    return [...array]
      .sort(
        () =>
          Math.random() - .5
      );

  }


  function newCPUQuestion() {

    currentCPUQuestion =
      cpuQuestions[
        Math.floor(
          Math.random() *
          cpuQuestions.length
        )
      ];


    $("#cpuInstructionQuestion")
      .textContent =
        currentCPUQuestion
          .instruction;


    const answers =
      shuffleGameArray(
        [
          currentCPUQuestion.correct,
          ...currentCPUQuestion.wrong
        ]
      );


    $("#cpuAnswerList")
      .innerHTML =
        answers
          .map(
            answer => `

              <button
                class="btn cpu-answer"
                data-answer="${esc(answer)}"
              >
                ${esc(answer)}
              </button>

            `
          )
          .join("");


    document
      .querySelectorAll(
        ".cpu-answer"
      )
      .forEach(button => {

        button.onclick = () => {

          if (
            button.dataset.answer ===
            currentCPUQuestion.correct
          ) {

            cpuScore++;

            $("#cpuGameScore")
              .textContent =
                cpuScore;


            correctFeedback(
              $("#cpuFeedback")
            );


            addTotalScore();

            setTimeout(
              newCPUQuestion,
              750
            );

          }

          else {

            wrongFeedback(
              $("#cpuFeedback"),
              currentCPUQuestion.correct
            );

          }

        };

      });


    $("#cpuFeedback")
      .textContent =
        "";

  }


  newCPUQuestion();

} 
function resources(){
 shell("resources",`<div class="card"><div class="row"><div><label>Resource title</label><input id="rt" placeholder="Networking notes"></div><div><label>Link</label><input id="rl" placeholder="https://..."></div></div><button class="btn primary" id="addR" style="margin-top:12px">Add resource</button></div><div class="card" style="margin-top:18px"><div id="resourceList"></div></div>`);
 let list=JSON.parse(localStorage.getItem("ictResources")||"[]");const render=()=>$("#resourceList").innerHTML=list.length?list.map(r=>`<div style="padding:13px 0;border-bottom:1px solid var(--line)"><b>${esc(r.t)}</b><div class="muted" style="font-size:11px">${esc(r.l)}</div></div>`).join(""):"<p class='muted'>No resources yet. Add your first one.</p>";render();$("#addR").onclick=()=>{if(!$("#rt").value||!$("#rl").value)return;list.push({t:$("#rt").value,l:$("#rl").value});localStorage.setItem("ictResources",JSON.stringify(list));render()};
}


const studyResources = {

  shortNotes: [

    {
      lesson: "Introduction of ICT",
      link: "https://drive.google.com/file/d/1sKq2f4pM1hBAMZsN9-Sbh-61Pi1vUlIC/view?usp=drive_link"
    },

    {
      lesson: "Number Systems",
      link: "https://drive.google.com/file/d/1NsKzds8aMBEjtWhoCOMNHpPe9uYGfrQs/view?usp=drive_link"
    },

    {
      lesson: "Boolean Logic",
      link: "https://drive.google.com/file/d/1HyYPAhg_12EyP-FouopnFOFEYj8QrnUm/view?usp=drive_link"
    },

    {
      lesson: "Computer Architecture",
      link: "https://drive.google.com/file/d/1j2eGOGwvj1gyb3E_DB8EffMdv1wHbhl8/view?usp=drive_link"
    },

    {
      lesson: "Operating Systems",
      link: "https://drive.google.com/file/d/1gYO8T9sDe9ytQmTLXHPgENwEYc8BI4bJ/view?usp=drive_link"
    },

    {
      lesson: "Networking",
      link: "https://drive.google.com/file/d/1kUwnI7C_QIIDpgcy3HR5vaKfGwM9pya7/view?usp=drive_link"
    },

    {
      lesson: "Database",
      link: "https://drive.google.com/file/d/1zTr-TQA6NYIHeGVsYFEU4zOpCs7tHgTU/view?usp=drive_link"
    },

    {
      lesson: "Programming",
      link: "https://drive.google.com/file/d/1maxNsrYwD6mmh_y8qaiNDrdh3syDn2Ls/view?usp=drive_link"
    },

    {
      lesson: "Web Development",
      link: "https://drive.google.com/file/d/1jeVgwZ1AQMY7O0jKoNe9aa6rhWdgyS4M/view?usp=drive_link"
    },

    {
      lesson: "Information Systems",
      link: "https://drive.google.com/file/d/1vhDR0uwkFWw7yf1Qgh4Ek4kFpic7Qh0f/view?usp=drive_link"
    },
    {
      lesson: "Future Trends",
      link: "https://drive.google.com/file/d/1ZzZAJGXD6Bf1JJbiM104xNrMWe0HW9AY/view?usp=drive_link"
    }


  ],


  modelPapers: [

    {
      title: "Model Paper 01",
      link: "YOUR_DRIVE_LINK_HERE"
    },

    {
      title: "Model Paper 02",
      link: "YOUR_DRIVE_LINK_HERE"
    },

    {
      title: "Model Paper 03",
      link: "YOUR_DRIVE_LINK_HERE"
    }

  ],


  pastPapers: [

    {
      year: "2025",
      link: "YOUR_DRIVE_LINK_HERE"
    },

    {
      year: "2024",
      link: "YOUR_DRIVE_LINK_HERE"
    },

    {
      year: "2023",
      link: "YOUR_DRIVE_LINK_HERE"
    },

    {
      year: "2022",
      link: "YOUR_DRIVE_LINK_HERE"
    },

    {
      year: "2021",
      link: "YOUR_DRIVE_LINK_HERE"
    }

  ]

};



function shortNotesPapers(){

  shell(
    "short-notes-papers",
    `

    <div class="card">

      <h3>Choose Resource Type</h3>

      <p class="muted">
        Select short notes or examination papers.
      </p>


      <div style="
        display:grid;
        grid-template-columns:
        repeat(auto-fit,minmax(230px,1fr));
        gap:18px;
        margin-top:22px;
      ">


        <button
          class="btn"
          onclick="showShortNotes()"
          style="
            min-height:150px;
            text-align:left;
            padding:22px;
          "
        >

          <div style="font-size:35px">
            📘
          </div>

          <h3>Short Notes</h3>

          <span class="muted">
            Notes organized by lesson
          </span>

        </button>


        <button
          class="btn"
          onclick="showPaperCategories()"
          style="
            min-height:150px;
            text-align:left;
            padding:22px;
          "
        >

          <div style="font-size:35px">
            📄
          </div>

          <h3>Papers</h3>

          <span class="muted">
            Model papers & past papers
          </span>

        </button>


      </div>

    </div>

    `
  );

}



function showShortNotes(){

  let html = `

    <div class="card">

      <button
        class="btn"
        onclick="shortNotesPapers()"
      >
        ← Back
      </button>

      <h3 style="margin-top:20px">
        📘 Short Notes
      </h3>

      <p class="muted">
        Select a lesson.
      </p>

      <div style="
        display:grid;
        grid-template-columns:
        repeat(auto-fit,minmax(200px,1fr));
        gap:14px;
        margin-top:20px;
      ">
  `;


  studyResources.shortNotes.forEach(
    (item,index)=>{

      html += `

        <button
          class="btn"
          onclick="
            openStudyLink(
              studyResources.shortNotes[${index}].link
            )
          "
          style="
            padding:20px;
            text-align:left;
            min-height:105px;
          "
        >

          <div style="font-size:25px">
            📖
          </div>

          <strong>
            ${item.lesson}
          </strong>

          <div class="muted"
               style="margin-top:8px">
            Open Notes →
          </div>

        </button>

      `;

    }
  );


  html += `

      </div>

    </div>

  `;


  content.innerHTML = html;

}



function showPaperCategories(){

  content.innerHTML = `

    <div class="card">

      <button
        class="btn"
        onclick="shortNotesPapers()"
      >
        ← Back
      </button>


      <h3 style="margin-top:20px">
        📄 Papers
      </h3>

      <p class="muted">
        Choose a paper category.
      </p>


      <div style="
        display:grid;
        grid-template-columns:
        repeat(auto-fit,minmax(230px,1fr));
        gap:18px;
        margin-top:20px;
      ">


        <button
          class="btn"
          onclick="showModelPapers()"
          style="
            min-height:130px;
            text-align:left;
            padding:22px;
          "
        >

          <div style="font-size:32px">
            📝
          </div>

          <h3>Model Papers</h3>

          <span class="muted">
            Practice examination papers
          </span>

        </button>


        <button
          class="btn"
          onclick="showPastPapers()"
          style="
            min-height:130px;
            text-align:left;
            padding:22px;
          "
        >

          <div style="font-size:32px">
            📚
          </div>

          <h3>Past Papers</h3>

          <span class="muted">
            Previous A/L ICT papers
          </span>

        </button>


      </div>

    </div>

  `;

}



function showModelPapers(){

  let html = `

    <div class="card">

      <button
        class="btn"
        onclick="showPaperCategories()"
      >
        ← Back
      </button>

      <h3 style="margin-top:20px">
        📝 Model Papers
      </h3>


      <div style="
        display:grid;
        grid-template-columns:
        repeat(auto-fit,minmax(190px,1fr));
        gap:14px;
        margin-top:20px;
      ">
  `;


  studyResources.modelPapers.forEach(
    (paper,index)=>{

      html += `

        <button
          class="btn"
          onclick="
            openStudyLink(
              studyResources.modelPapers[${index}].link
            )
          "
          style="
            min-height:95px;
            text-align:left;
            padding:18px;
          "
        >

          📄

          <div style="margin-top:8px">
            <strong>
              ${paper.title}
            </strong>
          </div>

        </button>

      `;

    }
  );


  html += `

      </div>

    </div>

  `;


  content.innerHTML = html;

}



function showPastPapers(){

  let html = `

    <div class="card">

      <button
        class="btn"
        onclick="showPaperCategories()"
      >
        ← Back
      </button>

      <h3 style="margin-top:20px">
        📚 A/L ICT Past Papers
      </h3>


      <div style="
        display:grid;
        grid-template-columns:
        repeat(auto-fit,minmax(160px,1fr));
        gap:14px;
        margin-top:20px;
      ">
  `;


  studyResources.pastPapers.forEach(
    (paper,index)=>{

      html += `

        <button
          class="btn"
          onclick="
            openStudyLink(
              studyResources.pastPapers[${index}].link
            )
          "
          style="
            min-height:90px;
            text-align:left;
            padding:18px;
          "
        >

          📑

          <div style="
            margin-top:7px;
            font-size:17px;
          ">

            <strong>
              ${paper.year}
            </strong>

          </div>

        </button>

      `;

    }
  );


  html += `

      </div>

    </div>

  `;


  content.innerHTML = html;

}



function openStudyLink(link){

  if(
    !link ||
    link === "YOUR_DRIVE_LINK_HERE"
  ){

    toastMsg(
      "Drive link hasn't been added yet."
    );

    return;

  }


  window.open(
    link,
    "_blank",
    "noopener,noreferrer"
  );

}


 
function ictTools() {

  shell("ict-tools", `
    <div class="ict-utility-header">
      <div>
        
        
      </div>

      <input
        id="ictToolSearch"
        class="ict-tool-search"
        placeholder="Search utilities..."
      >
    </div>

    <div class="ict-utility-grid" id="ictUtilityGrid">

      <!-- WORD COUNTER -->
      <div class="card ict-utility-card" data-search="word character counter text">

        <div class="ict-card-title">
          <span class="ict-mini-icon">Aa</span>
          <div>
            <h3>Word Counter</h3>
            <p>Count words, characters and lines.</p>
          </div>
        </div>

        <textarea
          id="wordCountInput"
          placeholder="Paste or type text..."
        ></textarea>

        <div class="ict-stat-grid">
          <div>
            <strong id="wordCountWords">0</strong>
            <span>Words</span>
          </div>

          <div>
            <strong id="wordCountChars">0</strong>
            <span>Characters</span>
          </div>

          <div>
            <strong id="wordCountNoSpaces">0</strong>
            <span>No spaces</span>
          </div>

          <div>
            <strong id="wordCountLines">0</strong>
            <span>Lines</span>
          </div>
        </div>

        <button class="btn" id="wordClear">
          Clear
        </button>

      </div>


      <!-- BASE64 -->
      <div class="card ict-utility-card" data-search="base64 encode decode encoding">

        <div class="ict-card-title">
          <span class="ict-mini-icon">64</span>
          <div>
            <h3>Base64 Encoder / Decoder</h3>
            <p>Encode text or decode Base64 data.</p>
          </div>
        </div>

        <textarea
          id="base64Input"
          placeholder="Enter text or Base64..."
        >ICT</textarea>

        <div class="ict-action-row">
          <button class="btn primary" id="base64Encode">
            Encode
          </button>

          <button class="btn" id="base64Decode">
            Decode
          </button>

          <button class="btn" id="base64Swap">
            ⇅ Swap
          </button>
        </div>

        <label>Result</label>

        <textarea
          id="base64Output"
          readonly
          placeholder="Result appears here..."
        ></textarea>

        <div class="ict-action-row">
          <button class="btn" id="base64Copy">
            Copy Result
          </button>

          <button class="btn" id="base64Clear">
            Clear
          </button>
        </div>

        <div class="ict-tool-message" id="base64Message"></div>

      </div>


      <!-- URL ENCODER -->
      <div class="card ict-utility-card" data-search="url encode decode percent encoding">

        <div class="ict-card-title">
          <span class="ict-mini-icon">%</span>
          <div>
            <h3>URL Encoder / Decoder</h3>
            <p>Convert special URL characters safely.</p>
          </div>
        </div>

        <textarea
          id="urlInput"
          placeholder="Enter URL or text..."
        >hello world & ICT</textarea>

        <div class="ict-action-row">
          <button class="btn primary" id="urlEncode">
            Encode
          </button>

          <button class="btn" id="urlDecode">
            Decode
          </button>
        </div>

        <textarea
          id="urlOutput"
          readonly
          placeholder="Result..."
        ></textarea>

        <button class="btn" id="urlCopy">
          Copy Result
        </button>

      </div>


      <!-- TEXT / BINARY -->
      <div class="card ict-utility-card" data-search="binary text ascii converter">

        <div class="ict-card-title">
          <span class="ict-mini-icon">01</span>
          <div>
            <h3>Text ↔ Binary</h3>
            <p>Convert UTF-8 text into binary bytes.</p>
          </div>
        </div>

        <textarea
          id="binaryTextInput"
          placeholder="Enter text or binary..."
        >ICT</textarea>

        <div class="ict-action-row">
          <button class="btn primary" id="textToBinary">
            Text → Binary
          </button>

          <button class="btn" id="binaryToText">
            Binary → Text
          </button>
        </div>

        <textarea
          id="binaryTextOutput"
          readonly
          placeholder="Result..."
        ></textarea>

        <button class="btn" id="binaryCopy">
          Copy Result
        </button>

        <div class="ict-tool-message" id="binaryMessage"></div>

      </div>


      <!-- HEX -->
      <div class="card ict-utility-card" data-search="hex hexadecimal text converter">

        <div class="ict-card-title">
          <span class="ict-mini-icon">0x</span>
          <div>
            <h3>Text ↔ Hex</h3>
            <p>Convert text into hexadecimal byte values.</p>
          </div>
        </div>

        <textarea
          id="hexInput"
          placeholder="Enter text or hexadecimal..."
        >ICT</textarea>

        <div class="ict-action-row">
          <button class="btn primary" id="textToHex">
            Text → Hex
          </button>

          <button class="btn" id="hexToText">
            Hex → Text
          </button>
        </div>

        <textarea
          id="hexOutput"
          readonly
          placeholder="Result..."
        ></textarea>

        <button class="btn" id="hexCopy">
          Copy Result
        </button>

        <div class="ict-tool-message" id="hexMessage"></div>

      </div>


      <!-- JSON -->
      <div class="card ict-utility-card" data-search="json formatter validator developer">

        <div class="ict-card-title">
          <span class="ict-mini-icon">{ }</span>
          <div>
            <h3>JSON Formatter</h3>
            <p>Format, minify and validate JSON.</p>
          </div>
        </div>

        <textarea
          id="jsonInput"
          placeholder='{"name":"Nadula","subject":"ICT"}'
        >{"name":"Nadula","subject":"ICT"}</textarea>

        <div class="ict-action-row">
          <button class="btn primary" id="jsonFormat">
            Format
          </button>

          <button class="btn" id="jsonMinify">
            Minify
          </button>

          <button class="btn" id="jsonValidate">
            Validate
          </button>
        </div>

        <textarea
          id="jsonOutput"
          readonly
          placeholder="Formatted JSON..."
        ></textarea>

        <div class="ict-tool-message" id="jsonMessage"></div>

      </div>


      <!-- HASH -->
      <div class="card ict-utility-card" data-search="sha256 hash cryptography security">

        <div class="ict-card-title">
          <span class="ict-mini-icon">#</span>
          <div>
            <h3>SHA-256 Hash</h3>
            <p>Create a SHA-256 digest for learning.</p>
          </div>
        </div>

        <textarea
          id="hashInput"
          placeholder="Enter text..."
        >ICT</textarea>

        <button class="btn primary" id="hashGenerate">
          Generate SHA-256
        </button>

        <textarea
          id="hashOutput"
          readonly
          placeholder="SHA-256 hash..."
        ></textarea>

        <button class="btn" id="hashCopy">
          Copy Hash
        </button>

      </div>


      <!-- TIMESTAMP -->
      <div class="card ict-utility-card" data-search="timestamp unix date time epoch">

        <div class="ict-card-title">
          <span class="ict-mini-icon">⏱</span>
          <div>
            <h3>Unix Timestamp</h3>
            <p>Convert between dates and Unix timestamps.</p>
          </div>
        </div>

        <div class="timestamp-now-box">
          <span>Current Unix timestamp</span>
          <strong id="currentTimestamp">0</strong>
        </div>

        <button class="btn" id="refreshTimestamp">
          Refresh
        </button>

        <hr class="ict-divider">

        <label>Date and time</label>

        <input
          id="timestampDate"
          type="datetime-local"
        >

        <button class="btn primary" id="dateToTimestamp">
          Date → Timestamp
        </button>

        <div class="result" id="dateTimestampResult">
          —
        </div>

        <label style="margin-top:14px">Unix timestamp</label>

        <input
          id="timestampNumber"
          type="number"
          placeholder="1750000000"
        >

        <button class="btn" id="timestampToDate">
          Timestamp → Date
        </button>

        <div class="result" id="timestampDateResult">
          —
        </div>

      </div>


      <!-- TEXT CASE -->
      <div class="card ict-utility-card" data-search="text case uppercase lowercase title">

        <div class="ict-card-title">
          <span class="ict-mini-icon">Tt</span>
          <div>
            <h3>Text Case Converter</h3>
            <p>Quickly change capitalization.</p>
          </div>
        </div>

        <textarea
          id="caseInput"
          placeholder="Enter some text..."
        >information communication technology</textarea>

        <div class="ict-action-row">
          <button class="btn primary" data-case="upper">
            UPPERCASE
          </button>

          <button class="btn" data-case="lower">
            lowercase
          </button>

          <button class="btn" data-case="title">
            Title Case
          </button>
        </div>

        <textarea
          id="caseOutput"
          readonly
          placeholder="Converted text..."
        ></textarea>

        <button class="btn" id="caseCopy">
          Copy
        </button>

      </div>


      <!-- STORAGE CONVERTER -->
      <div class="card ict-utility-card" data-search="storage byte kb mb gb tb converter">

        <div class="ict-card-title">
          <span class="ict-mini-icon">MB</span>
          <div>
            <h3>Data Unit Converter</h3>
            <p>Convert B, KB, MB, GB and TB.</p>
          </div>
        </div>

        <input
          id="unitValue"
          type="number"
          value="1"
          min="0"
          step="any"
        >

        <div class="ict-two-columns">

          <div>
            <label>From</label>

            <select id="unitFrom">
              <option value="1">Bytes</option>
              <option value="1024">KB</option>
              <option value="1048576" selected>MB</option>
              <option value="1073741824">GB</option>
              <option value="1099511627776">TB</option>
            </select>
          </div>

          <div>
            <label>To</label>

            <select id="unitTo">
              <option value="1">Bytes</option>
              <option value="1024">KB</option>
              <option value="1048576">MB</option>
              <option value="1073741824" selected>GB</option>
              <option value="1099511627776">TB</option>
            </select>
          </div>

        </div>

        <button class="btn primary" id="unitConvert">
          Convert
        </button>

        <div class="ict-big-result" id="unitResult">
          —
        </div>

        <small class="muted">
          Uses binary units: 1 KB = 1024 bytes.
        </small>

      </div>

    </div>
  `);


  

  function copyUtilityText(text, button) {

    if (!text) {
      toastMsg("Nothing to copy.");
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {

        const oldText =
          button.textContent;

        button.textContent =
          "✓ Copied";

        setTimeout(() => {
          button.textContent =
            oldText;
        }, 1200);

      })
      .catch(() => {

        toastMsg(
          "Browser could not copy automatically."
        );

      });

  }


 

  $("#ictToolSearch").oninput = e => {

    const query =
      e.target.value
        .trim()
        .toLowerCase();

    document
      .querySelectorAll(
        ".ict-utility-card"
      )
      .forEach(card => {

        const text =
          (
            card.dataset.search +
            " " +
            card.textContent
          )
          .toLowerCase();

        card.style.display =
          text.includes(query)
            ? ""
            : "none";

      });

  };




  const updateWordCounter = () => {

    const text =
      $("#wordCountInput").value;

    const trimmed =
      text.trim();

    const words =
      trimmed
        ? trimmed.split(/\s+/).length
        : 0;

    const chars =
      text.length;

    const noSpaces =
      text.replace(/\s/g, "").length;

    const lines =
      text.length
        ? text.split(/\r?\n/).length
        : 0;

    $("#wordCountWords").textContent =
      words;

    $("#wordCountChars").textContent =
      chars;

    $("#wordCountNoSpaces").textContent =
      noSpaces;

    $("#wordCountLines").textContent =
      lines;

  };


  $("#wordCountInput").oninput =
    updateWordCounter;


  $("#wordClear").onclick = () => {

    $("#wordCountInput").value =
      "";

    updateWordCounter();

  };


  updateWordCounter();



  function textToBase64(text) {

    const bytes =
      new TextEncoder()
        .encode(text);

    let binary = "";

    bytes.forEach(byte => {
      binary +=
        String.fromCharCode(byte);
    });

    return btoa(binary);

  }


  function base64ToText(base64) {

    const cleaned =
      base64
        .replace(/\s+/g, "");

    const binary =
      atob(cleaned);

    const bytes =
      Uint8Array.from(
        binary,
        char =>
          char.charCodeAt(0)
      );

    return new TextDecoder()
      .decode(bytes);

  }


  $("#base64Encode").onclick = () => {

    const input =
      $("#base64Input").value;

    try {

      const result =
        textToBase64(input);

      $("#base64Output").value =
        result;

      $("#base64Message").className =
        "ict-tool-message success";

      $("#base64Message").textContent =
        "✓ Text encoded successfully.";

    }
    catch (error) {

      $("#base64Message").className =
        "ict-tool-message error";

      $("#base64Message").textContent =
        "Could not encode this value.";

    }

  };


  $("#base64Decode").onclick = () => {

    const input =
      $("#base64Input").value;

    try {

      const result =
        base64ToText(input);

      $("#base64Output").value =
        result;

      $("#base64Message").className =
        "ict-tool-message success";

      $("#base64Message").textContent =
        "✓ Base64 decoded successfully.";

    }
    catch (error) {

      $("#base64Output").value =
        "";

      $("#base64Message").className =
        "ict-tool-message error";

      $("#base64Message").textContent =
        "Invalid Base64 data.";

    }

  };


  $("#base64Swap").onclick = () => {

    const input =
      $("#base64Input").value;

    $("#base64Input").value =
      $("#base64Output").value;

    $("#base64Output").value =
      input;

  };


  $("#base64Clear").onclick = () => {

    $("#base64Input").value = "";

    $("#base64Output").value = "";

    $("#base64Message").textContent =
      "";

  };


  $("#base64Copy").onclick =
    e => {

      copyUtilityText(
        $("#base64Output").value,
        e.currentTarget
      );

    };


  $("#base64Encode").click();




  $("#urlEncode").onclick = () => {

    $("#urlOutput").value =
      encodeURIComponent(
        $("#urlInput").value
      );

  };


  $("#urlDecode").onclick = () => {

    try {

      $("#urlOutput").value =
        decodeURIComponent(
          $("#urlInput").value
        );

    }
    catch {

      $("#urlOutput").value =
        "Invalid encoded URL.";

    }

  };


  $("#urlCopy").onclick =
    e => {

      copyUtilityText(
        $("#urlOutput").value,
        e.currentTarget
      );

    };


  $("#urlEncode").click();




  $("#textToBinary").onclick = () => {

    const bytes =
      new TextEncoder()
        .encode(
          $("#binaryTextInput").value
        );

    $("#binaryTextOutput").value =
      [...bytes]
        .map(byte =>
          byte
            .toString(2)
            .padStart(8, "0")
        )
        .join(" ");

    $("#binaryMessage").textContent =
      "Each group represents one UTF-8 byte.";

  };


  $("#binaryToText").onclick = () => {

    try {

      const parts =
        $("#binaryTextInput")
          .value
          .trim()
          .split(/\s+/)
          .filter(Boolean);

      if (
        !parts.length ||
        parts.some(
          value =>
            !/^[01]{8}$/.test(value)
        )
      ) {

        throw new Error();

      }

      const bytes =
        new Uint8Array(
          parts.map(
            value =>
              parseInt(value, 2)
          )
        );

      $("#binaryTextOutput").value =
        new TextDecoder()
          .decode(bytes);

      $("#binaryMessage").textContent =
        "✓ Binary decoded.";

    }
    catch {

      $("#binaryTextOutput").value =
        "";

      $("#binaryMessage").textContent =
        "Use 8-bit groups such as: 01001001 01000011";

    }

  };


  $("#binaryCopy").onclick =
    e => {

      copyUtilityText(
        $("#binaryTextOutput").value,
        e.currentTarget
      );

    };


  $("#textToBinary").click();




  $("#textToHex").onclick = () => {

    const bytes =
      new TextEncoder()
        .encode(
          $("#hexInput").value
        );

    $("#hexOutput").value =
      [...bytes]
        .map(byte =>
          byte
            .toString(16)
            .padStart(2, "0")
            .toUpperCase()
        )
        .join(" ");

    $("#hexMessage").textContent =
      "UTF-8 hexadecimal bytes.";

  };


  $("#hexToText").onclick = () => {

    try {

      const cleaned =
        $("#hexInput")
          .value
          .replace(/0x/gi, "")
          .replace(/[^0-9a-f]/gi, "");

      if (
        !cleaned ||
        cleaned.length % 2 !== 0
      ) {

        throw new Error();

      }

      const values = [];

      for (
        let i = 0;
        i < cleaned.length;
        i += 2
      ) {

        values.push(
          parseInt(
            cleaned.slice(i, i + 2),
            16
          )
        );

      }

      $("#hexOutput").value =
        new TextDecoder()
          .decode(
            new Uint8Array(values)
          );

      $("#hexMessage").textContent =
        "✓ Hexadecimal decoded.";

    }
    catch {

      $("#hexOutput").value =
        "";

      $("#hexMessage").textContent =
        "Enter valid hexadecimal bytes.";

    }

  };


  $("#hexCopy").onclick =
    e => {

      copyUtilityText(
        $("#hexOutput").value,
        e.currentTarget
      );

    };


  $("#textToHex").click();




  $("#jsonFormat").onclick = () => {

    try {

      const value =
        JSON.parse(
          $("#jsonInput").value
        );

      $("#jsonOutput").value =
        JSON.stringify(
          value,
          null,
          2
        );

      $("#jsonMessage").className =
        "ict-tool-message success";

      $("#jsonMessage").textContent =
        "✓ Valid JSON.";

    }
    catch (error) {

      $("#jsonOutput").value =
        "";

      $("#jsonMessage").className =
        "ict-tool-message error";

      $("#jsonMessage").textContent =
        "Invalid JSON: " +
        error.message;

    }

  };


  $("#jsonMinify").onclick = () => {

    try {

      $("#jsonOutput").value =
        JSON.stringify(
          JSON.parse(
            $("#jsonInput").value
          )
        );

      $("#jsonMessage").className =
        "ict-tool-message success";

      $("#jsonMessage").textContent =
        "✓ JSON minified.";

    }
    catch (error) {

      $("#jsonMessage").className =
        "ict-tool-message error";

      $("#jsonMessage").textContent =
        "Invalid JSON.";

    }

  };


  $("#jsonValidate").onclick = () => {

    try {

      JSON.parse(
        $("#jsonInput").value
      );

      $("#jsonMessage").className =
        "ict-tool-message success";

      $("#jsonMessage").textContent =
        "✓ This is valid JSON.";

    }
    catch (error) {

      $("#jsonMessage").className =
        "ict-tool-message error";

      $("#jsonMessage").textContent =
        "✕ Invalid JSON: " +
        error.message;

    }

  };


  $("#jsonFormat").click();




  $("#hashGenerate").onclick =
    async () => {

      const text =
        $("#hashInput").value;

      const data =
        new TextEncoder()
          .encode(text);

      try {

        const digest =
          await crypto.subtle.digest(
            "SHA-256",
            data
          );

        const hash =
          [...new Uint8Array(digest)]
            .map(byte =>
              byte
                .toString(16)
                .padStart(2, "0")
            )
            .join("");

        $("#hashOutput").value =
          hash;

      }
      catch {

        $("#hashOutput").value =
          "SHA-256 requires a secure browser context.";

      }

    };


  $("#hashCopy").onclick =
    e => {

      copyUtilityText(
        $("#hashOutput").value,
        e.currentTarget
      );

    };


  $("#hashGenerate").click();




  function updateTimestamp() {

    $("#currentTimestamp")
      .textContent =
        Math.floor(
          Date.now() / 1000
        );

  }


  $("#refreshTimestamp").onclick =
    updateTimestamp;


  const now =
    new Date();

  const localISO =
    new Date(
      now.getTime() -
      now.getTimezoneOffset() *
      60000
    )
      .toISOString()
      .slice(0, 16);

  $("#timestampDate").value =
    localISO;


  $("#dateToTimestamp").onclick =
    () => {

      const value =
        $("#timestampDate").value;

      if (!value) {

        $("#dateTimestampResult")
          .textContent =
          "Choose a date.";

        return;

      }

      const timestamp =
        Math.floor(
          new Date(value)
            .getTime() /
          1000
        );

      $("#dateTimestampResult")
        .textContent =
        timestamp;

    };


  $("#timestampToDate").onclick =
    () => {

      const value =
        Number(
          $("#timestampNumber")
            .value
        );

      if (!Number.isFinite(value)) {

        $("#timestampDateResult")
          .textContent =
          "Enter a timestamp.";

        return;

      }

      const date =
        new Date(value * 1000);

      $("#timestampDateResult")
        .textContent =
        date.toLocaleString();

    };


  updateTimestamp();

  $("#dateToTimestamp").click();




  document
    .querySelectorAll("[data-case]")
    .forEach(button => {

      button.onclick = () => {

        const text =
          $("#caseInput").value;

        const mode =
          button.dataset.case;

        let output = text;

        if (mode === "upper") {

          output =
            text.toUpperCase();

        }

        else if (mode === "lower") {

          output =
            text.toLowerCase();

        }

        else {

          output =
            text
              .toLowerCase()
              .replace(
                /\b\w/g,
                char =>
                  char.toUpperCase()
              );

        }

        $("#caseOutput").value =
          output;

      };

    });


  $("#caseCopy").onclick =
    e => {

      copyUtilityText(
        $("#caseOutput").value,
        e.currentTarget
      );

    };




  $("#unitConvert").onclick =
    () => {

      const value =
        Number(
          $("#unitValue").value
        );

      const from =
        Number(
          $("#unitFrom").value
        );

      const to =
        Number(
          $("#unitTo").value
        );

      if (
        !Number.isFinite(value) ||
        value < 0
      ) {

        $("#unitResult").textContent =
          "Enter a valid positive value.";

        return;

      }

      const bytes =
        value * from;

      const result =
        bytes / to;

      $("#unitResult").textContent =
        Number(
          result.toFixed(8)
        ).toLocaleString();

    };


  $("#unitConvert").click();

} 


function ensureStudyToolsStyles(){
  if(document.getElementById('alStudyToolsStyles')) return;
  const style=document.createElement('style');
  style.id='alStudyToolsStyles';
  style.textContent=`
  .al-tool-layout,.sql-lab-layout{display:grid;grid-template-columns:1fr 1fr;gap:18px}.top-gap{margin-top:18px}
  .al-step-title{display:flex;align-items:center;gap:9px;margin-bottom:12px;font-weight:800;font-size:14px}.al-step-title>span{display:grid;place-items:center;min-width:28px;height:28px;padding:0 6px;border-radius:9px;background:rgba(255,184,220,.1);color:#ffb8dc;font-size:9px}
  .logic-inputs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:15px 0}.logic-switch{padding:14px;border:1px solid var(--line);border-radius:15px;background:rgba(255,255,255,.025);color:var(--text);cursor:pointer}.logic-switch small{display:block;margin-bottom:8px;color:var(--muted);font-size:8px}.logic-switch-number{display:grid;place-items:center;width:38px;height:38px;margin:auto;border-radius:50%;background:rgba(255,255,255,.06);font-size:17px;font-weight:900}.logic-switch.active{border-color:rgba(80,230,190,.5);background:rgba(80,230,190,.07)}.logic-switch.active .logic-switch-number{background:rgba(70,230,170,.18);color:#65e6ad;box-shadow:0 0 20px rgba(70,230,170,.15)}
  .logic-gate-controls{display:grid;grid-template-columns:1fr 1fr;gap:12px}.logic-not-row{display:flex;flex-wrap:wrap;gap:14px;margin:15px 0}.logic-check{display:flex;align-items:center;gap:7px;color:var(--muted);font-size:10px}.logic-circuit{min-height:220px;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:7px;padding:25px 8px}.logic-wire-inputs{display:grid;gap:8px}.logic-source{display:flex;align-items:center;gap:7px;padding:8px 10px;border-radius:10px;background:rgba(255,255,255,.035);border:1px solid var(--line)}.logic-source span{color:#62dfcd;font-weight:900}.logic-line{width:23px;height:2px;background:linear-gradient(90deg,rgba(90,220,210,.2),rgba(90,220,210,.8))}.gate-shape{min-width:72px;padding:18px 12px;text-align:center;border-radius:9px 28px 28px 9px;border:1px solid rgba(90,220,210,.25);background:rgba(90,220,210,.06);color:#68ded1;font-weight:900;font-size:11px}.logic-stage-value{font-size:10px;color:var(--muted)}.logic-output{width:48px;height:48px;display:grid;place-items:center;border-radius:50%;background:rgba(255,100,120,.08);border:1px solid rgba(255,100,120,.25);color:#ff9aaa;font-weight:900;transition:.25s ease}.logic-output.on{background:rgba(70,230,160,.16);border-color:rgba(70,230,160,.5);color:#60e5a9;box-shadow:0 0 28px rgba(70,230,160,.2)}.logic-explanation{padding:14px;border-radius:14px;background:rgba(255,255,255,.025);font-size:11px}.logic-calculation{margin-top:8px;color:var(--muted)}.gate-reference-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.gate-reference{display:flex;gap:11px;padding:13px;border:1px solid var(--line);border-radius:13px}.gate-symbol{width:37px;height:37px;flex:0 0 37px;display:grid;place-items:center;border-radius:10px;background:rgba(90,220,210,.06);color:#65ded0;font-size:18px}.gate-reference p{margin:4px 0 0;color:var(--muted);font-size:9px}
  .flow-template-buttons,.flow-controls,.calc-mode-tabs,.sql-table-tabs,.sql-help{display:flex;flex-wrap:wrap;gap:7px}.flow-template,.sql-tab,.calc-mode,.sql-help button{padding:9px 12px;border:1px solid var(--line);border-radius:10px;background:rgba(255,255,255,.025);color:var(--muted);cursor:pointer}.flow-template.active,.sql-tab.active,.calc-mode.active{background:rgba(90,220,210,.09);border-color:rgba(90,220,210,.35);color:#6be0d2}.flow-input-area{margin-top:17px}.flow-controls{margin-top:13px}.flow-status{margin-top:16px;padding:14px;border:1px solid var(--line);border-radius:14px;background:rgba(255,255,255,.025)}.flow-status small{display:block;color:var(--muted);font-size:8px}.flow-status strong{display:block;margin-top:6px}.flow-status p{margin:5px 0 0;color:var(--muted);font-size:10px}.flowchart-canvas{max-height:520px;overflow:auto;padding:20px}.flow-node-wrap{display:flex;flex-direction:column;align-items:center}.flow-node{min-width:180px;max-width:280px;padding:13px 18px;text-align:center;border:1px solid var(--line);background:rgba(255,255,255,.025);font-size:10px;transition:.25s}.flow-node.start,.flow-node.end{border-radius:999px}.flow-node.process{border-radius:8px}.flow-node.io{transform:skew(-8deg)}.flow-node.decision{clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);min-height:96px;display:grid;place-items:center;padding:24px 35px}.flow-node.active{border-color:#65ded0;background:rgba(90,220,210,.12);box-shadow:0 0 25px rgba(90,220,210,.13)}.flow-arrow{padding:5px;color:#60dccc}.algorithm-trace-grid{display:grid;grid-template-columns:1fr 1fr;gap:15px}.pseudo-code{min-height:220px;padding:15px;overflow:auto;border-radius:14px;background:rgba(0,0,0,.18);border:1px solid var(--line);color:#9eddd7;line-height:1.8}.trace-values{min-height:220px;padding:15px;border:1px solid var(--line);border-radius:14px;background:rgba(255,255,255,.02)}.trace-current-step{display:flex;justify-content:space-between}
  .sql-table-tabs{margin-bottom:13px}.sql-help{margin-bottom:10px;color:var(--muted);font-size:9px}.sql-help button{padding:5px 8px;border-radius:999px;background:transparent}.sql-editor{width:100%;min-height:180px;margin-bottom:10px;padding:15px;font-family:monospace;line-height:1.7}.sql-message{margin-top:12px}.sql-success{display:block;color:#60e5aa}.sql-error{color:#ff91a2}.sql-table-scroll{overflow-x:auto}.sql-data-table{width:100%;border-collapse:collapse}.sql-data-table th,.sql-data-table td{padding:10px 12px;border-bottom:1px solid var(--line);text-align:left;font-size:10px}.sql-data-table th{color:var(--muted)}.sql-reference-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.sql-reference-grid code{padding:12px;border-radius:10px;background:rgba(0,0,0,.16);color:#80dcd3}.sql-empty{padding:20px;color:var(--muted);text-align:center}
  .calc-mode-tabs{margin-bottom:15px}.calc-input-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:11px;margin:15px 0}.calc-input-grid label{display:block;margin-bottom:6px;color:var(--muted);font-size:8px;font-weight:800}.calculation-result{margin-top:17px}.formula-working{display:grid;gap:8px}.formula-working>div{display:grid;grid-template-columns:28px 1fr;gap:5px 9px;padding:11px;border:1px solid var(--line);border-radius:12px;color:var(--muted);font-size:9px}.formula-working span{grid-row:1/3;width:26px;height:26px;display:grid;place-items:center;border-radius:8px;background:rgba(90,220,210,.08);color:#60dccc;font-weight:800}.formula-working strong{color:var(--text)}.answer-card{margin-top:12px;padding:17px;border-radius:15px;background:linear-gradient(135deg,rgba(90,220,210,.08),rgba(100,120,240,.05));border:1px solid rgba(90,220,210,.15)}.answer-card strong{display:block;margin:7px 0;color:#68dfd1;font-size:23px}.answer-card small{color:var(--muted)}
  .study-nav-group{margin-top:8px}.study-nav-label{padding:10px 16px 6px;color:var(--muted);font-size:9px;font-weight:800;letter-spacing:.08em}.study-nav-group .nav-item{width:100%}
  .flow-pro-shell{display:grid;grid-template-columns:230px minmax(520px,1fr) 280px;gap:16px;align-items:start}.flow-pro-palette-card,.flow-pro-properties-card{position:sticky;top:18px}.flow-pro-palette{display:grid;gap:8px}.flow-pro-tool{display:flex;align-items:center;gap:10px;width:100%;padding:10px;border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.025);color:var(--text);cursor:grab;text-align:left}.flow-pro-tool:active{cursor:grabbing}.flow-mini{width:34px;height:24px;display:block;border:1px solid rgba(90,220,210,.45);background:rgba(90,220,210,.08)}.flow-mini.start,.flow-mini.end{border-radius:999px}.flow-mini.io{transform:skew(-15deg)}.flow-mini.decision{width:25px;height:25px;transform:rotate(45deg);margin:0 5px}.flow-pro-help{display:grid;gap:7px;margin-top:15px;padding:11px;border-radius:12px;background:rgba(255,255,255,.025);font-size:9px;color:var(--muted)}.flow-pro-help b{color:var(--text)}.flow-pro-toolbar{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:12px}.flow-pro-workspace-wrap{overflow:auto;border:1px solid var(--line);border-radius:16px;background:radial-gradient(circle at 1px 1px,rgba(255,255,255,.07) 1px,transparent 1px);background-size:22px 22px}.flow-pro-workspace{position:relative;width:100%;min-width:760px;height:640px;overflow:hidden}.flow-pro-workspace.drag-over{outline:2px dashed rgba(90,220,210,.55);outline-offset:-8px}.flow-pro-lines{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none;z-index:1}.flow-drop-hint{position:absolute;inset:0;display:grid;place-items:center;color:var(--muted);font-size:13px;pointer-events:none}.flow-pro-node{position:absolute;width:150px;min-height:68px;z-index:2;user-select:none}.flow-pro-node-inner{position:absolute;inset:7px 0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:10px 15px;border:1px solid rgba(90,220,210,.28);background:rgba(18,27,40,.94);box-shadow:0 8px 25px rgba(0,0,0,.18);cursor:move}.flow-pro-node-inner small{font-size:7px;color:var(--muted);letter-spacing:.12em}.flow-pro-node-inner strong{font-size:10px;text-align:center;max-width:120px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.flow-pro-node.start .flow-pro-node-inner,.flow-pro-node.end .flow-pro-node-inner{border-radius:999px}.flow-pro-node.process .flow-pro-node-inner{border-radius:9px}.flow-pro-node.io .flow-pro-node-inner{transform:skew(-12deg);border-radius:6px}.flow-pro-node.io .flow-pro-node-inner>*{transform:skew(12deg)}.flow-pro-node.decision{width:150px;height:120px}.flow-pro-node.decision .flow-pro-node-inner{left:20px;right:20px;top:5px;bottom:5px;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);padding:27px}.flow-pro-node.selected .flow-pro-node-inner{border-color:#6be0d2;box-shadow:0 0 0 2px rgba(90,220,210,.12),0 10px 30px rgba(0,0,0,.2)}.flow-pro-node.running .flow-pro-node-inner{border-color:#ffcc73;box-shadow:0 0 24px rgba(255,204,115,.2)}.flow-pro-node.done .flow-pro-node-inner{background:rgba(70,230,160,.075)}.flow-pro-node.true-path .flow-pro-node-inner{border-color:#62e2ad}.flow-pro-node.false-path .flow-pro-node-inner{border-color:#ff9cad}.flow-pro-in,.flow-pro-out{position:absolute;z-index:5;width:13px;height:13px;padding:0;border:2px solid #6be0d2;border-radius:50%;background:#14212a;cursor:crosshair}.flow-pro-in{top:0;left:50%;transform:translate(-50%,-50%)}.flow-pro-out{bottom:0;left:50%;transform:translate(-50%,50%)}.flow-pro-node.start .flow-pro-in{display:none}.flow-pro-node.decision .flow-pro-out.yes{left:25%;bottom:4px}.flow-pro-node.decision .flow-pro-out.no{left:75%;bottom:4px}.flow-pro-out span{position:absolute;top:11px;left:50%;transform:translateX(-50%);font-size:7px;color:var(--muted);white-space:nowrap}.flow-pro-line,.flow-pro-temp-line{fill:none;stroke:#62d9cc;stroke-width:2.2;filter:drop-shadow(0 0 4px rgba(98,217,204,.22))}.flow-pro-temp-line{stroke-dasharray:6 5;opacity:.65}.flow-pro-line-label{fill:#86e7dc;font-size:8px;font-weight:800}.flow-pro-empty{padding:18px;border:1px dashed var(--line);border-radius:12px;color:var(--muted);text-align:center}.flow-pro-properties-card textarea{min-height:86px}.flow-pro-status{margin-top:14px;padding:12px;border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.025);font-size:10px;line-height:1.55}.flow-pro-vars{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}.flow-pro-vars span{padding:6px 8px;border-radius:8px;background:rgba(90,220,210,.07);border:1px solid rgba(90,220,210,.15);font-size:9px}.flow-pro-trace{display:grid;gap:7px}.flow-trace-row{display:grid;grid-template-columns:34px 1fr;gap:9px;align-items:start;padding:9px 11px;border:1px solid var(--line);border-radius:10px}.flow-trace-row>span{display:grid;place-items:center;width:26px;height:26px;border-radius:7px;background:rgba(90,220,210,.08);color:#6be0d2;font-size:8px}.flow-trace-row p{margin:4px 0;font-size:10px}.flow-trace-row.error{border-color:rgba(255,110,135,.35)}
  @media(max-width:1000px){.al-tool-layout,.sql-lab-layout{grid-template-columns:1fr}.flow-pro-shell{grid-template-columns:1fr}.flow-pro-palette-card,.flow-pro-properties-card{position:static}.calc-input-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:650px){.logic-inputs,.gate-reference-grid,.algorithm-trace-grid,.sql-reference-grid,.calc-input-grid{grid-template-columns:1fr}.logic-gate-controls{grid-template-columns:1fr}.logic-circuit{flex-direction:column}.logic-line{width:2px;height:22px}}
  `;
  document.head.appendChild(style);
}

function ensureStudyToolNav(){
  if(!sidebar || sidebar.querySelector('[data-tool="logic-builder"]')) return;
  const group=document.createElement('div');
  group.className='study-nav-group';
  group.innerHTML=`<div class="study-nav-label">A/L STUDY TOOLS</div>
    <button class="nav-item" data-tool="logic-builder"><span class="nav-icon">◉</span><span>Logic Gate Builder</span></button>
    <button class="nav-item" data-tool="flowchart"><span class="nav-icon">⇢</span><span>Flowchart Simulator</span></button>
    <button class="nav-item" data-tool="sql-lab"><span class="nav-icon">SQL</span><span>SQL Practice Lab</span></button>
    <button class="nav-item" data-tool="storage-calc"><span class="nav-icon">MB</span><span>Storage & Transmission</span></button>`;
  sidebar.appendChild(group);
}

function logicBuilder(){
  ensureStudyToolsStyles();
  shell("logic-builder",`<div class="al-tool-layout">
    <div class="card"><div class="al-step-title"><span>01</span>Input switches</div><p class="muted">Click A, B and C to switch between logic 0 and 1.</p>
      <div class="logic-inputs">${logicInputSwitch('A')}${logicInputSwitch('B')}${logicInputSwitch('C')}</div>
      <div class="al-step-title top-gap"><span>02</span>Select gates</div>
      <div class="logic-gate-controls"><div><label>GATE 1</label><select id="logicGate1"><option>AND</option><option>OR</option><option>XOR</option><option>NAND</option><option>NOR</option></select></div><div><label>GATE 2</label><select id="logicGate2"><option>AND</option><option>OR</option><option>XOR</option><option>NAND</option><option>NOR</option></select></div></div>
      <div class="logic-not-row"><label class="logic-check"><input type="checkbox" id="logicNotA"> NOT A before Gate 1</label><label class="logic-check"><input type="checkbox" id="logicNotC"> NOT C before Gate 2</label></div>
      <button class="btn primary" id="logicEvaluate">Run Circuit</button></div>
    <div class="card"><div class="al-step-title"><span>03</span>Live circuit</div><div class="logic-circuit"><div class="logic-wire-inputs"><div class="logic-source"><strong>A</strong><span id="circuitA">0</span></div><div class="logic-source"><strong>B</strong><span id="circuitB">0</span></div></div><div class="logic-line"></div><div class="gate-shape" id="gateShape1">AND</div><div class="logic-line"></div><div class="logic-stage-value">X = <strong id="logicIntermediate">0</strong></div><div class="logic-line"></div><div class="logic-source"><strong>C</strong><span id="circuitC">0</span></div><div class="logic-line"></div><div class="gate-shape" id="gateShape2">AND</div><div class="logic-line"></div><div class="logic-output" id="logicOutput">0</div></div><div class="logic-explanation" id="logicExplanation"></div></div>
  </div><div class="card top-gap"><div class="al-step-title"><span>04</span>Gate reference</div><div class="gate-reference-grid">${gateReference('AND','∧','1 only when both inputs are 1.')}${gateReference('OR','∨','1 when at least one input is 1.')}${gateReference('NOT','¬','Reverses 0 and 1.')}${gateReference('XOR','⊕','1 when the inputs are different.')}${gateReference('NAND','⊼','The opposite of AND.')}${gateReference('NOR','⊽','The opposite of OR.')}</div></div>`);
  const values={A:0,B:0,C:0};
  ['A','B','C'].forEach(name=>{const button=document.getElementById('logicInput'+name);button.onclick=()=>{values[name]=values[name]?0:1;button.querySelector('.logic-switch-number').textContent=values[name];button.classList.toggle('active',values[name]===1);run();};});
  ['logicGate1','logicGate2','logicNotA','logicNotC'].forEach(id=>document.getElementById(id).onchange=run);$('#logicEvaluate').onclick=run;
  function run(){let A=values.A,B=values.B,C=values.C;if($('#logicNotA').checked)A=A?0:1;if($('#logicNotC').checked)C=C?0:1;const g1=$('#logicGate1').value,g2=$('#logicGate2').value;const X=calculateGate(g1,A,B),Y=calculateGate(g2,X,C);$('#circuitA').textContent=A;$('#circuitB').textContent=B;$('#circuitC').textContent=C;$('#gateShape1').textContent=g1;$('#gateShape2').textContent=g2;$('#logicIntermediate').textContent=X;$('#logicOutput').textContent=Y;$('#logicOutput').classList.toggle('on',Y===1);$('#logicExplanation').innerHTML=`<strong>Step-by-step</strong><div class="logic-calculation">Gate 1: ${g1}(${A}, ${B}) = <b>${X}</b></div><div class="logic-calculation">Gate 2: ${g2}(${X}, ${C}) = <b>${Y}</b></div><p>Final output: <strong>${Y?'TRUE (1)':'FALSE (0)'}</strong></p>`;}
  run();
}
function logicInputSwitch(name){return `<button class="logic-switch" id="logicInput${name}"><small>INPUT ${name}</small><span class="logic-switch-number">0</span></button>`;}
function gateReference(name,symbol,explanation){return `<div class="gate-reference"><span class="gate-symbol">${symbol}</span><div><strong>${name}</strong><p>${explanation}</p></div></div>`;}
function calculateGate(gate,a,b){switch(gate){case'AND':return a&&b?1:0;case'OR':return a||b?1:0;case'XOR':return a!==b?1:0;case'NAND':return !(a&&b)?1:0;case'NOR':return !(a||b)?1:0;default:return 0;}}

function flowchartSimulator(){
  ensureStudyToolsStyles();
  shell("flowchart",`
    <div class="flow-pro-shell">
      <div class="card flow-pro-palette-card">
        <div class="al-step-title"><span>01</span>Flowchart blocks</div>
        <p class="muted">Drag a block into the workspace, then drag from an output point to another block's input point.</p>
        <div class="flow-pro-palette">
          <button class="flow-pro-tool" draggable="true" data-flow-type="start"><span class="flow-mini start"></span><b>Start</b></button>
          <button class="flow-pro-tool" draggable="true" data-flow-type="process"><span class="flow-mini process"></span><b>Process</b></button>
          <button class="flow-pro-tool" draggable="true" data-flow-type="io"><span class="flow-mini io"></span><b>Input / Output</b></button>
          <button class="flow-pro-tool" draggable="true" data-flow-type="decision"><span class="flow-mini decision"></span><b>Decision</b></button>
          <button class="flow-pro-tool" draggable="true" data-flow-type="end"><span class="flow-mini end"></span><b>End</b></button>
        </div>
        <div class="flow-pro-help">
          <b>Quick guide</b>
          <span>Process example: <code>total = price * qty</code></span>
          <span>Decision example: <code>total >= 100</code></span>
          <span>I/O example: <code>OUTPUT total</code></span>
        </div>
      </div>

      <div class="card flow-pro-main-card">
        <div class="flow-pro-toolbar">
          <button class="btn" id="flowExample">Load Example</button>
          <button class="btn primary" id="flowStep">▶ Step</button>
          <button class="btn" id="flowRun">Run All</button>
          <button class="btn" id="flowResetSim">Reset Simulation</button>
          <button class="btn" id="flowDelete">Delete Selected</button>
          <button class="btn" id="flowClear">Clear</button>
        </div>
        <div class="flow-pro-workspace-wrap">
          <div class="flow-pro-workspace" id="flowProWorkspace">
            <svg class="flow-pro-lines" id="flowProLines"></svg>
            <div class="flow-drop-hint" id="flowDropHint">Drag flowchart blocks here</div>
          </div>
        </div>
      </div>

      <div class="card flow-pro-properties-card">
        <div class="al-step-title"><span>02</span>Block properties</div>
        <div id="flowNoSelection" class="flow-pro-empty">Select a block to edit it.</div>
        <div id="flowProperties" hidden>
          <label>BLOCK TYPE</label>
          <input id="flowPropType" disabled>
          <label style="margin-top:10px">DISPLAY TEXT</label>
          <input id="flowPropLabel">
          <div id="flowCodeWrap">
            <label style="margin-top:10px">ACTION / CONDITION</label>
            <textarea id="flowPropCode" rows="4" placeholder="Example: x = x + 1"></textarea>
          </div>
          <button class="btn primary" id="flowSaveProp" style="margin-top:10px">Save Block</button>
          <p class="muted" id="flowPropTip" style="margin-top:10px"></p>
        </div>

        <div class="al-step-title top-gap"><span>03</span>Simulation values</div>
        <label>STARTING VARIABLES</label>
        <input id="flowVars" value="number=8, total=0">
        <small class="muted">Separate values with commas, for example: <code>a=10, b=4</code></small>
        <div class="flow-pro-status" id="flowProStatus">Ready. Load an example or build your own flowchart.</div>
        <div class="flow-pro-vars" id="flowProVars">No variables yet.</div>
      </div>
    </div>

    <div class="card top-gap">
      <div class="al-step-title"><span>04</span>Execution trace</div>
      <div class="flow-pro-trace" id="flowProTrace"><span class="muted">Run the flowchart to see each step here.</span></div>
    </div>
  `);

  const workspace=$('#flowProWorkspace');
  const svg=$('#flowProLines');
  const hint=$('#flowDropHint');
  const nodes=new Map();
  let connections=[];
  let nodeCounter=0;
  let selectedId=null;
  let pendingWire=null;
  let pendingSource=null;
  let sim={current:null,vars:{},steps:0,finished:false};

  const defaults={
    start:{label:'START',code:''},
    process:{label:'Process',code:'x = x + 1'},
    io:{label:'Input / Output',code:'OUTPUT x'},
    decision:{label:'Condition?',code:'x > 0'},
    end:{label:'END',code:''}
  };

  document.querySelectorAll('.flow-pro-tool').forEach(tool=>{
    tool.addEventListener('dragstart',e=>e.dataTransfer.setData('text/flow-type',tool.dataset.flowType));
    tool.onclick=()=>addNode(tool.dataset.flowType,120+Math.random()*160,80+Math.random()*180);
  });
  workspace.ondragover=e=>{e.preventDefault();workspace.classList.add('drag-over');};
  workspace.ondragleave=()=>workspace.classList.remove('drag-over');
  workspace.ondrop=e=>{
    e.preventDefault();workspace.classList.remove('drag-over');
    const type=e.dataTransfer.getData('text/flow-type');if(!defaults[type])return;
    const r=workspace.getBoundingClientRect();
    addNode(type,e.clientX-r.left+workspace.scrollLeft,e.clientY-r.top+workspace.scrollTop);
  };

  function addNode(type,x,y,label=defaults[type].label,code=defaults[type].code){
    const id='flowNode_'+(++nodeCounter),el=document.createElement('div');
    el.className=`flow-pro-node ${type}`;el.dataset.id=id;el.dataset.type=type;
    el.style.left=Math.max(10,Math.min(x-70,workspace.clientWidth-170))+'px';
    el.style.top=Math.max(10,y-35)+'px';
    el.innerHTML=`
      <button class="flow-pro-in" title="Input connection"></button>
      <div class="flow-pro-node-inner"><small>${type.toUpperCase()}</small><strong>${esc(label)}</strong></div>
      ${type==='decision'
        ? '<button class="flow-pro-out yes" data-branch="yes" title="YES output"><span>YES</span></button><button class="flow-pro-out no" data-branch="no" title="NO output"><span>NO</span></button>'
        : type!=='end'?'<button class="flow-pro-out" data-branch="next" title="Output connection"></button>':''}
    `;
    workspace.appendChild(el);
    nodes.set(id,{id,type,label,code,el});
    hint.style.display='none';
    enableNodeDrag(el);
    enablePorts(el);
    el.querySelector('.flow-pro-node-inner').onclick=e=>{e.stopPropagation();selectNode(id);};
    selectNode(id);updateLines();return id;
  }

  function enableNodeDrag(el){
    let dragging=false,sx=0,sy=0,sl=0,st=0;
    const body=el.querySelector('.flow-pro-node-inner');
    body.onpointerdown=e=>{
      if(e.button!==0)return;dragging=true;sx=e.clientX;sy=e.clientY;sl=el.offsetLeft;st=el.offsetTop;body.setPointerCapture(e.pointerId);selectNode(el.dataset.id);
    };
    body.onpointermove=e=>{
      if(!dragging)return;
      const nx=Math.max(0,Math.min(sl+e.clientX-sx,workspace.scrollWidth-el.offsetWidth));
      const ny=Math.max(0,Math.min(st+e.clientY-sy,workspace.scrollHeight-el.offsetHeight));
      el.style.left=nx+'px';el.style.top=ny+'px';updateLines();
    };
    body.onpointerup=e=>{dragging=false;try{body.releasePointerCapture(e.pointerId)}catch{}};
  }

  function enablePorts(el){
    el.querySelectorAll('.flow-pro-out').forEach(port=>{
      port.onpointerdown=e=>{
        e.stopPropagation();pendingSource={nodeId:el.dataset.id,branch:port.dataset.branch,port};
        pendingWire=document.createElementNS('http://www.w3.org/2000/svg','path');pendingWire.classList.add('flow-pro-temp-line');svg.appendChild(pendingWire);
        const a=portCenter(port);drawPath(pendingWire,a,a);port.setPointerCapture(e.pointerId);
      };
      port.onpointermove=e=>{
        if(!pendingSource||pendingSource.port!==port)return;const r=workspace.getBoundingClientRect();
        drawPath(pendingWire,portCenter(port),{x:e.clientX-r.left+workspace.scrollLeft,y:e.clientY-r.top+workspace.scrollTop});
      };
      port.onpointerup=e=>{
        if(!pendingSource||pendingSource.port!==port)return;
        const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('.flow-pro-in');
        if(target){const targetNode=target.closest('.flow-pro-node');if(targetNode&&targetNode!==el)connectNodes(el.dataset.id,pendingSource.branch,targetNode.dataset.id);}
        pendingWire?.remove();pendingWire=null;pendingSource=null;try{port.releasePointerCapture(e.pointerId)}catch{}
      };
    });
  }

  function connectNodes(from,branch,to){
    connections=connections.filter(c=>!(c.from===from&&c.branch===branch));
    connections=connections.filter(c=>c.to!==to);
    connections.push({from,branch,to});updateLines();resetSimulation();
  }

  function portCenter(port){
    const a=workspace.getBoundingClientRect(),b=port.getBoundingClientRect();
    return{x:b.left-a.left+workspace.scrollLeft+b.width/2,y:b.top-a.top+workspace.scrollTop+b.height/2};
  }
  function drawPath(path,a,b){
    const dy=Math.max(45,Math.abs(b.y-a.y)*.45),d=`M ${a.x} ${a.y} C ${a.x} ${a.y+dy}, ${b.x} ${b.y-dy}, ${b.x} ${b.y}`;path.setAttribute('d',d);
  }
  function updateLines(){
    const temp=pendingWire;svg.innerHTML='';
    connections.forEach(c=>{
      const from=nodes.get(c.from),to=nodes.get(c.to);if(!from||!to)return;
      const out=from.el.querySelector(`.flow-pro-out[data-branch="${c.branch}"]`),inp=to.el.querySelector('.flow-pro-in');if(!out||!inp)return;
      const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.classList.add('flow-pro-line');p.dataset.from=c.from;p.dataset.to=c.to;p.dataset.branch=c.branch;drawPath(p,portCenter(out),portCenter(inp));svg.appendChild(p);
      if(c.branch==='yes'||c.branch==='no'){
        const a=portCenter(out),b=portCenter(inp),t=document.createElementNS('http://www.w3.org/2000/svg','text');t.setAttribute('x',(a.x+b.x)/2);t.setAttribute('y',(a.y+b.y)/2-6);t.classList.add('flow-pro-line-label');t.textContent=c.branch.toUpperCase();svg.appendChild(t);
      }
    });
    if(temp&&document.body.contains(temp))svg.appendChild(temp);
  }

  function selectNode(id){
    selectedId=id;document.querySelectorAll('.flow-pro-node').forEach(n=>n.classList.toggle('selected',n.dataset.id===id));
    const n=nodes.get(id);if(!n){$('#flowNoSelection').hidden=false;$('#flowProperties').hidden=true;return;}
    $('#flowNoSelection').hidden=true;$('#flowProperties').hidden=false;$('#flowPropType').value=n.type.toUpperCase();$('#flowPropLabel').value=n.label;$('#flowPropCode').value=n.code;
    $('#flowCodeWrap').hidden=n.type==='start'||n.type==='end';
    $('#flowPropTip').textContent=n.type==='decision'?'Condition should return TRUE/FALSE. Use comparisons such as score >= 50.':n.type==='process'?'Use an assignment such as total = price * qty.':n.type==='io'?'Use OUTPUT expression. INPUT is represented by the starting variables field.':'Start and End blocks do not need code.';
  }
  workspace.onclick=e=>{if(e.target===workspace||e.target===svg){selectedId=null;document.querySelectorAll('.flow-pro-node').forEach(n=>n.classList.remove('selected'));selectNode(null);}};
  $('#flowSaveProp').onclick=()=>{
    const n=nodes.get(selectedId);if(!n)return;n.label=$('#flowPropLabel').value.trim()||defaults[n.type].label;n.code=$('#flowPropCode').value.trim();n.el.querySelector('.flow-pro-node-inner strong').textContent=n.label;resetSimulation();
  };
  $('#flowDelete').onclick=()=>{
    if(!selectedId)return toastMsg('Select a block first.');const n=nodes.get(selectedId);n?.el.remove();nodes.delete(selectedId);connections=connections.filter(c=>c.from!==selectedId&&c.to!==selectedId);selectedId=null;selectNode(null);updateLines();hint.style.display=nodes.size?'none':'grid';resetSimulation();
  };
  $('#flowClear').onclick=()=>{nodes.forEach(n=>n.el.remove());nodes.clear();connections=[];selectedId=null;updateLines();hint.style.display='grid';selectNode(null);resetSimulation();$('#flowProTrace').innerHTML='<span class="muted">Workspace cleared.</span>';};

  function parseVars(){
    const vars={};($('#flowVars').value||'').split(',').map(x=>x.trim()).filter(Boolean).forEach(pair=>{const i=pair.indexOf('=');if(i<1)return;const k=pair.slice(0,i).trim(),v=pair.slice(i+1).trim();vars[k]=Number.isNaN(Number(v))?v:Number(v);});return vars;
  }
  function evalExpr(expr,vars){
    const names=Object.keys(vars),values=Object.values(vars);
    let e=String(expr||'').replace(/\bAND\b/gi,'&&').replace(/\bOR\b/gi,'||').replace(/\bNOT\b/gi,'!').replace(/<>/g,'!=').replace(/\bMOD\b/gi,'%');
    return Function(...names,`"use strict"; return (${e});`)(...values);
  }
  function executeProcess(code,vars){
    const m=String(code).match(/^([A-Za-z_]\w*)\s*=\s*(.+)$/);if(!m)throw new Error('Process must look like: x = x + 1');vars[m[1]]=evalExpr(m[2],vars);return `${m[1]} = ${vars[m[1]]}`;
  }
  function nextConnection(nodeId,branch='next'){return connections.find(c=>c.from===nodeId&&c.branch===branch)?.to||null;}
  function findStart(){return [...nodes.values()].find(n=>n.type==='start')||null;}
  function resetSimulation(){
    sim={current:null,vars:parseVars(),steps:0,finished:false};document.querySelectorAll('.flow-pro-node').forEach(n=>n.classList.remove('running','done','true-path','false-path'));renderVars();$('#flowProStatus').textContent='Simulation reset.';
  }
  function renderVars(){const entries=Object.entries(sim.vars);$('#flowProVars').innerHTML=entries.length?entries.map(([k,v])=>`<span><b>${esc(k)}</b> = ${esc(v)}</span>`).join(''):'No variables yet.';}
  function logStep(text,kind=''){const d=document.createElement('div');d.className='flow-trace-row '+kind;d.innerHTML=`<span>${sim.steps}</span><p>${esc(text)}</p>`;$('#flowProTrace').appendChild(d);}

  function stepSimulation(){
    if(sim.finished)return;
    if(!sim.current){sim.vars=parseVars();const start=findStart();if(!start){$('#flowProStatus').textContent='Add a START block first.';return;}$('#flowProTrace').innerHTML='';sim.current=start.id;sim.steps=0;}
    if(sim.steps>=100){sim.finished=true;$('#flowProStatus').textContent='Stopped after 100 steps. Check for an infinite loop.';return;}
    document.querySelectorAll('.flow-pro-node').forEach(n=>n.classList.remove('running'));
    const n=nodes.get(sim.current);if(!n){sim.finished=true;return;}n.el.classList.add('running');sim.steps++;
    try{
      let message=n.label,next=null;
      if(n.type==='start'){message='START';next=nextConnection(n.id);}
      else if(n.type==='process'){message=executeProcess(n.code,sim.vars);next=nextConnection(n.id);}
      else if(n.type==='io'){
        if(/^OUTPUT\b/i.test(n.code)){const expr=n.code.replace(/^OUTPUT\s*/i,'');const val=evalExpr(expr,sim.vars);message=`OUTPUT ${expr} → ${val}`;}
        else message=n.code||n.label;next=nextConnection(n.id);
      }
      else if(n.type==='decision'){
        const result=!!evalExpr(n.code,sim.vars);message=`${n.code} → ${result?'TRUE / YES':'FALSE / NO'}`;n.el.classList.add(result?'true-path':'false-path');next=nextConnection(n.id,result?'yes':'no');
      }
      else if(n.type==='end'){message='END';sim.finished=true;next=null;}
      logStep(message,n.type);n.el.classList.add('done');renderVars();
      if(sim.finished){$('#flowProStatus').textContent='Flowchart completed successfully.';return;}
      if(!next){sim.finished=true;$('#flowProStatus').textContent=`No connection after "${n.label}". Connect its output to continue.`;return;}
      sim.current=next;$('#flowProStatus').textContent=`Step ${sim.steps}: ${message}`;
    }catch(err){sim.finished=true;$('#flowProStatus').textContent='Simulation error: '+err.message;logStep('ERROR: '+err.message,'error');}
  }

  $('#flowStep').onclick=stepSimulation;
  $('#flowResetSim').onclick=()=>{resetSimulation();$('#flowProTrace').innerHTML='<span class="muted">Simulation reset. Press Step or Run All.</span>';};
  $('#flowRun').onclick=()=>{resetSimulation();$('#flowProTrace').innerHTML='';let guard=0;while(!sim.finished&&guard++<100)stepSimulation();};

  $('#flowExample').onclick=()=>{
    nodes.forEach(n=>n.el.remove());nodes.clear();connections=[];selectedId=null;nodeCounter=0;
    const s=addNode('start',320,35,'START','');
    const i=addNode('io',320,145,'Read number','OUTPUT number');
    const d=addNode('decision',320,270,'Even?','number MOD 2 = 0');
    const y=addNode('io',160,430,'Display Even','OUTPUT "Even"');
    const no=addNode('io',480,430,'Display Odd','OUTPUT "Odd"');
    const e=addNode('end',320,575,'END','');
    connections=[{from:s,branch:'next',to:i},{from:i,branch:'next',to:d},{from:d,branch:'yes',to:y},{from:d,branch:'no',to:no},{from:y,branch:'next',to:e},{from:no,branch:'next',to:e}];
    $('#flowVars').value='number=8';updateLines();resetSimulation();selectNode(d);hint.style.display='none';
  };

  window.addEventListener('resize',updateLines,{once:true});
  $('#flowExample').click();
}

function sqlPracticeLab(){
  ensureStudyToolsStyles();
  shell("sql-lab",`<div class="sql-lab-layout"><div class="card"><div class="al-step-title"><span>01</span>Sample database</div><div class="sql-table-tabs"><button class="sql-tab active" data-table="students">students</button><button class="sql-tab" data-table="courses">courses</button></div><div id="sqlDatabasePreview"></div></div><div class="card"><div class="al-step-title"><span>02</span>SQL Editor</div><div class="sql-help">Try: <button data-sql="SELECT * FROM students;">SELECT *</button><button data-sql="SELECT name, marks FROM students;">Columns</button><button data-sql="SELECT * FROM students WHERE marks > 70;">WHERE</button><button data-sql="SELECT * FROM students ORDER BY marks DESC;">ORDER BY</button></div><textarea id="sqlEditor" class="sql-editor" spellcheck="false">SELECT * FROM students;</textarea><button class="btn primary" id="runSQL">▶ Run Query</button> <button class="btn" id="resetSQL">Reset</button><div class="sql-message" id="sqlMessage"></div></div></div><div class="card top-gap"><div class="al-step-title"><span>03</span>Query Result</div><div id="sqlResult" class="sql-result"></div></div><div class="card top-gap"><div class="al-step-title"><span>?</span>SQL quick reference</div><div class="sql-reference-grid"><code>SELECT * FROM students;</code><code>SELECT name FROM students;</code><code>SELECT * FROM students WHERE marks > 70;</code><code>SELECT * FROM students ORDER BY marks DESC;</code></div></div>`);
  const db={students:[{id:1,name:'Amal',district:'Matara',marks:82},{id:2,name:'Nimal',district:'Galle',marks:67},{id:3,name:'Kavindi',district:'Colombo',marks:91},{id:4,name:'Sahan',district:'Matara',marks:74},{id:5,name:'Tharushi',district:'Kandy',marks:58}],courses:[{course_id:101,course_name:'ICT',teacher:'Perera'},{course_id:102,course_name:'SFT',teacher:'Silva'},{course_id:103,course_name:'ET',teacher:'Fernando'}]};
  const display=name=>renderSQLTable(db[name],$('#sqlDatabasePreview'));
  document.querySelectorAll('.sql-tab').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.sql-tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');display(btn.dataset.table);});
  document.querySelectorAll('[data-sql]').forEach(btn=>btn.onclick=()=>{$('#sqlEditor').value=btn.dataset.sql;run();});$('#runSQL').onclick=run;$('#resetSQL').onclick=()=>{$('#sqlEditor').value='SELECT * FROM students;';run();};
  function run(){try{const r=executeStudentSQL($('#sqlEditor').value.trim().replace(/;$/,''),db);renderSQLTable(r.rows,$('#sqlResult'),r.columns);$('#sqlMessage').innerHTML=`<span class="sql-success">✓ Query executed successfully</span><small>${r.rows.length} row(s) returned</small>`;}catch(e){$('#sqlResult').innerHTML='';$('#sqlMessage').innerHTML=`<span class="sql-error">⚠ ${esc(e.message)}</span>`;}}
  display('students');run();
}
function executeStudentSQL(query,database){const m=query.match(/^SELECT\s+(.+?)\s+FROM\s+([A-Za-z_]\w*)(?:\s+WHERE\s+(.+?))?(?:\s+ORDER\s+BY\s+([A-Za-z_]\w*)(?:\s+(ASC|DESC))?)?$/i);if(!m)throw new Error('Try: SELECT * FROM students WHERE marks > 70');const [,selectPart,rawTable,wherePart,orderColumn,orderDirection]=m,table=rawTable.toLowerCase();if(!database[table])throw new Error(`Table "${rawTable}" does not exist.`);let rows=database[table].map(r=>({...r})),cols=Object.keys(rows[0]||{}),selected=selectPart.trim()==='*'?cols:selectPart.split(',').map(x=>x.trim());selected.forEach(c=>{if(!cols.includes(c))throw new Error(`Column "${c}" does not exist.`);});if(wherePart)rows=applySimpleSQLWhere(rows,wherePart,cols);if(orderColumn){if(!cols.includes(orderColumn))throw new Error(`Column "${orderColumn}" does not exist.`);rows.sort((a,b)=>{let r=typeof a[orderColumn]==='number'?a[orderColumn]-b[orderColumn]:String(a[orderColumn]).localeCompare(String(b[orderColumn]));return String(orderDirection||'ASC').toUpperCase()==='DESC'?-r:r;});}rows=rows.map(r=>Object.fromEntries(selected.map(c=>[c,r[c]])));return{rows,columns:selected};}
function applySimpleSQLWhere(rows,condition,cols){const m=condition.match(/^([A-Za-z_]\w*)\s*(=|!=|<>|>=|<=|>|<)\s*(.+)$/i);if(!m)throw new Error('WHERE example: marks > 70');let [,column,operator,rawValue]=m;if(!cols.includes(column))throw new Error(`Column "${column}" does not exist.`);rawValue=rawValue.trim();let value=/^['"].*['"]$/.test(rawValue)?rawValue.slice(1,-1):!Number.isNaN(Number(rawValue))?Number(rawValue):rawValue;return rows.filter(r=>{const x=r[column];switch(operator){case'=':return x==value;case'!=':case'<>':return x!=value;case'>':return x>value;case'<':return x<value;case'>=':return x>=value;case'<=':return x<=value;default:return false;}});}
function renderSQLTable(rows,target,forcedColumns=null){if(!rows||!rows.length){target.innerHTML='<div class="sql-empty">No rows found.</div>';return;}const columns=forcedColumns||Object.keys(rows[0]);target.innerHTML=`<div class="sql-table-scroll"><table class="sql-data-table"><thead><tr>${columns.map(c=>`<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${columns.map(c=>`<td>${esc(r[c])}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;}

function storageCalculator(){
  ensureStudyToolsStyles();
  shell("storage-calc",`<div class="calc-mode-tabs"><button class="calc-mode active" data-mode="image">🖼 Image Size</button><button class="calc-mode" data-mode="audio">♪ Audio Size</button><button class="calc-mode" data-mode="transfer">⇄ Transmission Time</button><button class="calc-mode" data-mode="convert">MB Unit Converter</button></div><div class="card" id="storageCalculatorArea"></div>`);
  document.querySelectorAll('.calc-mode').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.calc-mode').forEach(x=>x.classList.remove('active'));btn.classList.add('active');showStorageMode(btn.dataset.mode);});showStorageMode('image');
}
function showStorageMode(mode){const a=$('#storageCalculatorArea');if(mode==='image'){a.innerHTML=`<div class="al-step-title"><span>01</span>Image file size</div><p class="muted">Formula: <strong>Width × Height × Colour Depth</strong></p><div class="calc-input-grid"><div><label>WIDTH (PIXELS)</label><input id="imgWidth" type="number" value="1920"></div><div><label>HEIGHT (PIXELS)</label><input id="imgHeight" type="number" value="1080"></div><div><label>COLOUR DEPTH</label><select id="imgDepth"><option value="1">1 bit</option><option value="8">8 bit</option><option value="16">16 bit</option><option value="24" selected>24 bit</option><option value="32">32 bit</option></select></div></div><button class="btn primary" id="imageCalculate">Calculate</button><div class="calculation-result" id="storageResult"></div>`;$('#imageCalculate').onclick=calculateImageStorage;calculateImageStorage();}
  else if(mode==='audio'){a.innerHTML=`<div class="al-step-title"><span>01</span>Audio file size</div><p class="muted">Formula: <strong>Sample Rate × Bit Depth × Channels × Duration</strong></p><div class="calc-input-grid"><div><label>SAMPLE RATE (Hz)</label><input id="audioRate" type="number" value="44100"></div><div><label>BIT DEPTH</label><select id="audioDepth"><option value="8">8 bit</option><option value="16" selected>16 bit</option><option value="24">24 bit</option></select></div><div><label>CHANNELS</label><select id="audioChannels"><option value="1">Mono — 1</option><option value="2" selected>Stereo — 2</option></select></div><div><label>DURATION (SECONDS)</label><input id="audioDuration" type="number" value="60"></div></div><button class="btn primary" id="audioCalculate">Calculate</button><div class="calculation-result" id="storageResult"></div>`;$('#audioCalculate').onclick=calculateAudioStorage;calculateAudioStorage();}
  else if(mode==='transfer'){a.innerHTML=`<div class="al-step-title"><span>01</span>Data transmission time</div><p class="muted">Formula: <strong>Time = Data Size ÷ Data Rate</strong></p><div class="calc-input-grid"><div><label>FILE SIZE</label><input id="transferSize" type="number" value="500"></div><div><label>FILE SIZE UNIT</label><select id="transferUnit"><option>KB</option><option selected>MB</option><option>GB</option></select></div><div><label>CONNECTION SPEED</label><input id="transferSpeed" type="number" value="20"></div><div><label>SPEED UNIT</label><select id="speedUnit"><option>Kbps</option><option selected>Mbps</option><option>Gbps</option></select></div></div><button class="btn primary" id="transferCalculate">Calculate Time</button><div class="calculation-result" id="storageResult"></div>`;$('#transferCalculate').onclick=calculateTransferTime;calculateTransferTime();}
  else{a.innerHTML=`<div class="al-step-title"><span>01</span>Storage unit converter</div><div class="calc-input-grid"><div><label>VALUE</label><input id="convertValue" type="number" value="1"></div><div><label>FROM</label><select id="convertFrom"><option>B</option><option>KB</option><option selected>MB</option><option>GB</option><option>TB</option></select></div><div><label>TO</label><select id="convertTo"><option>B</option><option>KB</option><option>MB</option><option selected>GB</option><option>TB</option></select></div></div><button class="btn primary" id="convertCalculate">Convert</button><div class="calculation-result" id="storageResult"></div>`;$('#convertCalculate').onclick=calculateStorageConversion;calculateStorageConversion();}}
function storagePretty(bytes){if(!Number.isFinite(bytes))return'—';const u=['B','KB','MB','GB','TB'];let v=bytes,i=0;while(v>=1024&&i<u.length-1){v/=1024;i++;}return v.toLocaleString(undefined,{maximumFractionDigits:3})+' '+u[i];}
function calculateImageStorage(){const w=+$('#imgWidth').value,h=+$('#imgHeight').value,d=+$('#imgDepth').value,p=w*h,bits=p*d,bytes=bits/8;$('#storageResult').innerHTML=`<div class="formula-working"><div><span>1</span>Total pixels<strong>${w} × ${h} = ${p.toLocaleString()} pixels</strong></div><div><span>2</span>Convert to bits<strong>${p.toLocaleString()} × ${d} = ${bits.toLocaleString()} bits</strong></div><div><span>3</span>Convert bits to bytes<strong>${bits.toLocaleString()} ÷ 8 = ${bytes.toLocaleString()} bytes</strong></div></div><div class="answer-card">Approximate image size<strong>${storagePretty(bytes)}</strong><small>Before compression</small></div>`;}
function calculateAudioStorage(){const r=+$('#audioRate').value,d=+$('#audioDepth').value,c=+$('#audioChannels').value,t=+$('#audioDuration').value,bits=r*d*c*t,bytes=bits/8;$('#storageResult').innerHTML=`<div class="formula-working"><div><span>1</span>Apply formula<strong>${r} × ${d} × ${c} × ${t}</strong></div><div><span>2</span>Audio size<strong>${bits.toLocaleString()} bits</strong></div><div><span>3</span>Convert to bytes<strong>${bits.toLocaleString()} ÷ 8</strong></div></div><div class="answer-card">Approximate audio size<strong>${storagePretty(bytes)}</strong><small>Uncompressed audio</small></div>`;}
function calculateTransferTime(){const size=+$('#transferSize').value,fu=$('#transferUnit').value,speed=+$('#transferSpeed').value,su=$('#speedUnit').value,f={KB:1024,MB:1024**2,GB:1024**3},s={Kbps:1000,Mbps:1000**2,Gbps:1000**3},bytes=size*f[fu],bits=bytes*8,bps=speed*s[su],sec=bits/bps;$('#storageResult').innerHTML=`<div class="formula-working"><div><span>1</span>Convert file to bits<strong>${storagePretty(bytes)} = ${bits.toLocaleString()} bits</strong></div><div><span>2</span>Transmission formula<strong>Time = bits ÷ bits/s</strong></div><div><span>3</span>Substitute values<strong>${bits.toLocaleString()} ÷ ${bps.toLocaleString()}</strong></div></div><div class="answer-card">Transmission time<strong>${sec.toFixed(2)} seconds</strong><small>≈ ${(sec/60).toFixed(2)} minutes</small></div>`;}
function calculateStorageConversion(){const v=+$('#convertValue').value,from=$('#convertFrom').value,to=$('#convertTo').value,f={B:1,KB:1024,MB:1024**2,GB:1024**3,TB:1024**4},r=v*f[from]/f[to];$('#storageResult').innerHTML=`<div class="answer-card">${v} ${from}<strong>${r.toLocaleString(undefined,{maximumFractionDigits:6})} ${to}</strong></div>`;}





function ensureAdvancedLogicBuilderStyles(){
  if(document.getElementById('advancedLogicBuilderStyles')) return;
  const style=document.createElement('style');
  style.id='advancedLogicBuilderStyles';
  style.textContent=`
  .logic-pro-layout{display:grid;grid-template-columns:230px minmax(0,1fr);gap:16px;align-items:start}
  .logic-palette{position:sticky;top:14px}.logic-palette-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}
  .logic-palette-item{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:72px;padding:10px;border:1px solid var(--line);border-radius:13px;background:rgba(255,255,255,.025);color:var(--text);cursor:grab;user-select:none;transition:.2s ease}
  .logic-palette-item:hover{transform:translateY(-2px);border-color:rgba(96,222,208,.45);background:rgba(96,222,208,.07)}.logic-palette-item:active{cursor:grabbing}.logic-palette-item b{font-size:11px}.logic-palette-item small{font-size:8px;color:var(--muted)}
  .logic-work-card{min-width:0}.logic-work-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:10px}.logic-work-toolbar .spacer{flex:1}.logic-mode-note{font-size:9px;color:var(--muted)}
  .logic-workspace-wrap{position:relative;min-height:560px;border:1px solid var(--line);border-radius:16px;overflow:auto;background:radial-gradient(circle at 20% 20%,rgba(88,218,204,.055),transparent 30%),linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);background-size:auto,24px 24px,24px 24px}
  .logic-workspace{position:relative;width:1200px;height:700px;min-width:100%;min-height:560px}.logic-wire-svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible;z-index:1}.logic-wire-path{fill:none;stroke:rgba(96,222,208,.75);stroke-width:3;filter:drop-shadow(0 0 4px rgba(96,222,208,.18))}.logic-wire-path.off{stroke:rgba(255,255,255,.18)}.logic-wire-path.on{stroke:#61dfbd}.logic-wire-temp{fill:none;stroke:#ffb8dc;stroke-width:2.5;stroke-dasharray:7 5}
  .logic-node{position:absolute;z-index:2;width:132px;min-height:78px;border:1px solid rgba(96,222,208,.28);border-radius:14px;background:rgba(20,28,38,.92);box-shadow:0 10px 28px rgba(0,0,0,.18);user-select:none}.light .logic-node{background:rgba(255,255,255,.94)}
  .logic-node-header{height:30px;display:flex;align-items:center;justify-content:space-between;padding:0 9px;border-bottom:1px solid var(--line);cursor:move}.logic-node-header strong{font-size:10px}.logic-node-delete{border:0;background:transparent;color:var(--muted);cursor:pointer;font-size:14px;line-height:1}.logic-node-delete:hover{color:#ff8fa3}
  .logic-node-body{position:relative;min-height:48px;display:flex;align-items:center;justify-content:center;padding:9px 18px}.logic-gate-glyph{min-width:64px;padding:12px 9px;text-align:center;border:1px solid rgba(96,222,208,.25);border-radius:8px 24px 24px 8px;background:rgba(96,222,208,.06);font-size:10px;font-weight:900}.logic-node[data-kind="NOT"] .logic-gate-glyph{border-radius:8px 30px 30px 8px}.logic-node[data-kind="INPUT"] .logic-gate-glyph,.logic-node[data-kind="OUTPUT"] .logic-gate-glyph{border-radius:12px}
  .logic-port{position:absolute;width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.7);background:#33404d;cursor:crosshair;z-index:4;box-shadow:0 0 0 3px rgba(96,222,208,.08)}.logic-port:hover{transform:scale(1.18)}.logic-port.in{left:-7px}.logic-port.out{right:-7px;background:#4d6a65}.logic-port.active{background:#61dfbd;box-shadow:0 0 10px rgba(97,223,189,.7)}.logic-port.in.p1{top:41px}.logic-port.in.p2{top:63px}.logic-port.out.p1{top:52px}.logic-node[data-kind="NOT"] .logic-port.in.p1,.logic-node[data-kind="INPUT"] .logic-port.out.p1,.logic-node[data-kind="OUTPUT"] .logic-port.in.p1{top:52px}
  .logic-input-toggle{display:flex;align-items:center;gap:7px}.logic-bit{width:28px;height:28px;display:grid;place-items:center;border-radius:50%;background:rgba(255,100,120,.12);color:#ff9aaa;font-weight:900}.logic-bit.on{background:rgba(97,223,189,.16);color:#61dfbd;box-shadow:0 0 14px rgba(97,223,189,.2)}
  .logic-output-led{width:30px;height:30px;display:grid;place-items:center;border-radius:50%;border:1px solid rgba(255,100,120,.28);background:rgba(255,100,120,.08);color:#ff9aaa;font-weight:900}.logic-output-led.on{border-color:rgba(97,223,189,.55);background:rgba(97,223,189,.16);color:#61dfbd;box-shadow:0 0 18px rgba(97,223,189,.22)}
  .logic-builder-status{margin-top:10px;padding:11px 13px;border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.02);font-size:10px;color:var(--muted)}.logic-builder-status strong{color:var(--text)}
  .logic-help-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:12px}.logic-help-chip{padding:9px;border:1px solid var(--line);border-radius:11px;font-size:9px;color:var(--muted)}.logic-help-chip b{display:block;color:var(--text);margin-bottom:3px}
  @media(max-width:900px){.logic-pro-layout{grid-template-columns:1fr}.logic-palette{position:static}.logic-palette-grid{grid-template-columns:repeat(4,1fr)}.logic-workspace-wrap{min-height:500px}.logic-help-grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:560px){.logic-palette-grid{grid-template-columns:repeat(2,1fr)}.logic-help-grid{grid-template-columns:1fr}.logic-workspace{width:900px}}
  `;
  document.head.appendChild(style);
}

function logicBuilder(){
  ensureAdvancedLogicBuilderStyles();
  shell('logic-builder',`
    <div class="logic-pro-layout">
      <div class="card logic-palette">
        <div class="al-step-title"><span>01</span>Components</div>
        <p class="muted">Drag a component into the workspace. Then drag from an output dot to an input dot.</p>
        <div class="logic-palette-grid">
          ${['INPUT','OUTPUT','AND','OR','NOT','XOR','NAND','NOR','XNOR'].map(k=>`<div class="logic-palette-item" draggable="true" data-kind="${k}"><b>${k}</b><small>${k==='INPUT'?'Switch':k==='OUTPUT'?'LED':'Gate'}</small></div>`).join('')}
        </div>
        <div class="logic-builder-status" id="logicBuilderStatus"><strong>Tip:</strong> Add INPUT → gate → OUTPUT, then click the input switch.</div>
      </div>
      <div class="card logic-work-card">
        <div class="logic-work-toolbar">
          <div class="al-step-title" style="margin:0"><span>02</span>Circuit workspace</div>
          <span class="spacer"></span>
          <button class="btn" id="logicExample">Load Example</button>
          <button class="btn" id="logicClear">Clear</button>
        </div>
        <div class="logic-mode-note">Connections update automatically. Green wire = logic 1, dim wire = logic 0.</div>
        <div class="logic-workspace-wrap" id="logicWorkspaceWrap">
          <div class="logic-workspace" id="logicWorkspace">
            <svg class="logic-wire-svg" id="logicWireSvg"></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="card top-gap">
      <div class="al-step-title"><span>?</span>How to use</div>
      <div class="logic-help-grid">
        <div class="logic-help-chip"><b>1. Add</b>Drag INPUT, gates and OUTPUT into the workspace.</div>
        <div class="logic-help-chip"><b>2. Connect</b>Drag from a right-side output dot to a left-side input dot.</div>
        <div class="logic-help-chip"><b>3. Test</b>Click an INPUT component to switch between 0 and 1.</div>
        <div class="logic-help-chip"><b>4. Calculate</b>The circuit propagates values and updates outputs automatically.</div>
      </div>
    </div>`);

  const ws=$('#logicWorkspace'), svg=$('#logicWireSvg'), wrap=$('#logicWorkspaceWrap'), status=$('#logicBuilderStatus');
  let nextId=1, nodes=new Map(), wires=[], connection=null, tempPath=null;

  const gateInputs=k=>k==='NOT'||k==='OUTPUT'?1:k==='INPUT'?0:2;
  const hasOutput=k=>k!=='OUTPUT';
  const gateEval=(kind,a,b)=>{
    a=Number(a)||0;b=Number(b)||0;
    if(kind==='NOT') return a?0:1;
    if(kind==='AND') return a&&b?1:0;
    if(kind==='OR') return a||b?1:0;
    if(kind==='XOR') return a!==b?1:0;
    if(kind==='NAND') return !(a&&b)?1:0;
    if(kind==='NOR') return !(a||b)?1:0;
    if(kind==='XNOR') return a===b?1:0;
    return 0;
  };
  const setStatus=(msg)=>status.innerHTML=msg;

  function createNode(kind,x,y,label){
    const id='logicNode'+nextId++;
    const el=document.createElement('div');
    el.className='logic-node'; el.dataset.id=id; el.dataset.kind=kind;
    el.style.left=Math.max(8,x)+'px'; el.style.top=Math.max(8,y)+'px';
    let body='';
    if(kind==='INPUT') body=`<div class="logic-input-toggle"><span>Switch</span><span class="logic-bit" data-role="bit">0</span></div>`;
    else if(kind==='OUTPUT') body=`<div class="logic-output-led" data-role="led">0</div>`;
    else body=`<div class="logic-gate-glyph">${kind}</div>`;
    const inCount=gateInputs(kind);
    const ports=(inCount>=1?`<span class="logic-port in p1" data-port="in1" title="Input 1"></span>`:'')+(inCount>=2?`<span class="logic-port in p2" data-port="in2" title="Input 2"></span>`:'')+(hasOutput(kind)?`<span class="logic-port out p1" data-port="out" title="Output"></span>`:'');
    el.innerHTML=`<div class="logic-node-header"><strong>${esc(label||kind)}</strong><button class="logic-node-delete" title="Delete">×</button></div><div class="logic-node-body">${body}</div>${ports}`;
    ws.appendChild(el);
    nodes.set(id,{id,kind,el,value:0,inputs:[0,0],label:label||kind});
    enableNodeDrag(el); enablePorts(el);
    el.querySelector('.logic-node-delete').onclick=e=>{e.stopPropagation();deleteNode(id)};
    if(kind==='INPUT') el.querySelector('.logic-node-body').onclick=()=>{const n=nodes.get(id);n.value=n.value?0:1;propagate();};
    redrawWires(); propagate();
    return id;
  }

  function deleteNode(id){
    const n=nodes.get(id); if(!n)return;
    wires=wires.filter(w=>w.from!==id&&w.to!==id); n.el.remove(); nodes.delete(id); redrawWires(); propagate();
  }

  function enableNodeDrag(el){
    const h=el.querySelector('.logic-node-header'); let drag=false,sx=0,sy=0,sl=0,st=0;
    h.onpointerdown=e=>{if(e.target.closest('.logic-node-delete'))return;drag=true;sx=e.clientX;sy=e.clientY;sl=el.offsetLeft;st=el.offsetTop;h.setPointerCapture(e.pointerId)};
    h.onpointermove=e=>{if(!drag)return;let l=sl+e.clientX-sx,t=st+e.clientY-sy;l=Math.max(0,Math.min(l,ws.clientWidth-el.offsetWidth));t=Math.max(0,Math.min(t,ws.clientHeight-el.offsetHeight));el.style.left=l+'px';el.style.top=t+'px';redrawWires()};
    h.onpointerup=e=>{drag=false;try{h.releasePointerCapture(e.pointerId)}catch{}};
  }

  function enablePorts(el){
    el.querySelectorAll('.logic-port').forEach(port=>{
      port.onpointerdown=e=>{
        e.stopPropagation();
        const isOut=port.dataset.port==='out';
        connection={nodeId:el.dataset.id,port:port.dataset.port,isOut,startPort:port};
        tempPath=document.createElementNS('http://www.w3.org/2000/svg','path'); tempPath.setAttribute('class','logic-wire-temp');svg.appendChild(tempPath);
        updateTemp(e.clientX,e.clientY); port.setPointerCapture(e.pointerId);
      };
      port.onpointermove=e=>{if(connection&&connection.startPort===port)updateTemp(e.clientX,e.clientY)};
      port.onpointerup=e=>{
        if(!connection||connection.startPort!==port)return;
        const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('.logic-port');
        if(target&&target!==port) finishConnection(port,target);
        if(tempPath)tempPath.remove(); tempPath=null; connection=null;
        try{port.releasePointerCapture(e.pointerId)}catch{}
      };
    });
  }

  function portCenter(port){const wr=ws.getBoundingClientRect(),r=port.getBoundingClientRect();return{x:r.left-wr.left+ws.scrollLeft+r.width/2,y:r.top-wr.top+ws.scrollTop+r.height/2}}
  function pathD(a,b){const dx=Math.max(55,Math.abs(b.x-a.x)*.45);return`M ${a.x} ${a.y} C ${a.x+dx} ${a.y}, ${b.x-dx} ${b.y}, ${b.x} ${b.y}`}
  function updateTemp(cx,cy){if(!tempPath)return;const a=portCenter(connection.startPort),wr=ws.getBoundingClientRect(),b={x:cx-wr.left+ws.scrollLeft,y:cy-wr.top+ws.scrollTop};tempPath.setAttribute('d',connection.isOut?pathD(a,b):pathD(b,a))}

  function finishConnection(a,b){
    const aOut=a.dataset.port==='out', bOut=b.dataset.port==='out';
    if(aOut===bOut){setStatus('<strong>Invalid:</strong> connect an output dot to an input dot.');return}
    const out=aOut?a:b, inp=aOut?b:a, from=out.closest('.logic-node').dataset.id,to=inp.closest('.logic-node').dataset.id,toPort=inp.dataset.port;
    if(from===to){setStatus('<strong>Invalid:</strong> a component cannot connect to itself.');return}
    wires=wires.filter(w=>!(w.to===to&&w.toPort===toPort));
    if(wires.some(w=>w.from===from&&w.to===to&&w.toPort===toPort)){setStatus('<strong>Already connected.</strong>');return}
    wires.push({id:'wire'+Date.now()+Math.random(),from,to,toPort,value:0});
    setStatus('<strong>Connected.</strong> Toggle an INPUT switch to test the circuit.'); redrawWires(); propagate();
  }

  function redrawWires(){
    [...svg.querySelectorAll('.logic-wire-path')].forEach(p=>p.remove());
    wires.forEach(w=>{const f=nodes.get(w.from),t=nodes.get(w.to);if(!f||!t)return;const op=f.el.querySelector('[data-port="out"]'),ip=t.el.querySelector(`[data-port="${w.toPort}"]`);if(!op||!ip)return;const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',pathD(portCenter(op),portCenter(ip)));p.setAttribute('class','logic-wire-path '+(w.value?'on':'off'));p.dataset.wire=w.id;svg.insertBefore(p,tempPath||null);});
  }

  function propagate(){
    nodes.forEach(n=>{n.inputs=[0,0]});
    for(let pass=0;pass<Math.max(4,nodes.size*2);pass++){
      let changed=false;
      wires.forEach(w=>{const f=nodes.get(w.from),t=nodes.get(w.to);if(!f||!t)return;const v=f.value?1:0;w.value=v;const idx=w.toPort==='in2'?1:0;if(t.inputs[idx]!==v){t.inputs[idx]=v;changed=true}});
      nodes.forEach(n=>{let nv=n.value;if(n.kind==='OUTPUT')nv=n.inputs[0]?1:0;else if(n.kind!=='INPUT')nv=gateEval(n.kind,n.inputs[0],n.inputs[1]);if(nv!==n.value){n.value=nv;changed=true}});
      if(!changed)break;
    }
    nodes.forEach(n=>{
      const bit=n.el.querySelector('[data-role="bit"]');if(bit){bit.textContent=n.value;bit.classList.toggle('on',n.value===1)}
      const led=n.el.querySelector('[data-role="led"]');if(led){led.textContent=n.value;led.classList.toggle('on',n.value===1)}
      n.el.querySelectorAll('.logic-port').forEach(p=>{let v=0;if(p.dataset.port==='out')v=n.value;else v=n.inputs[p.dataset.port==='in2'?1:0];p.classList.toggle('active',v===1)});
    });
    redrawWires();
  }

  document.querySelectorAll('.logic-palette-item').forEach(item=>{item.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',item.dataset.kind))});
  ws.addEventListener('dragover',e=>e.preventDefault());
  ws.addEventListener('drop',e=>{e.preventDefault();const kind=e.dataTransfer.getData('text/plain');if(!kind)return;const r=ws.getBoundingClientRect();createNode(kind,e.clientX-r.left+ws.scrollLeft-65,e.clientY-r.top+ws.scrollTop-35)});

  $('#logicClear').onclick=()=>{wires=[];nodes.forEach(n=>n.el.remove());nodes.clear();svg.innerHTML='';setStatus('<strong>Workspace cleared.</strong> Drag components from the left panel.')};
  $('#logicExample').onclick=()=>{
    wires=[];nodes.forEach(n=>n.el.remove());nodes.clear();svg.innerHTML='';
    const a=createNode('INPUT',45,120,'A'),b=createNode('INPUT',45,260,'B'),g=createNode('AND',330,180,'AND'),o=createNode('OUTPUT',650,180,'Y');
    wires.push({id:'w1',from:a,to:g,toPort:'in1',value:0},{id:'w2',from:b,to:g,toPort:'in2',value:0},{id:'w3',from:g,to:o,toPort:'in1',value:0});
    propagate();setStatus('<strong>Example loaded:</strong> A AND B → Y. Click A and B switches to test it.');
  };
  wrap.addEventListener('scroll',redrawWires); window.addEventListener('resize',redrawWires,{once:true});
  $('#logicExample').click();
}

const renderers={integration,"number-system":numberSystem,binary,characters,expression,"logic-builder":logicBuilder,flowchart:flowchartSimulator,kmap,cpu,fetch:fetchCycle,scheduling,er,normalizer,"sql-lab":sqlPracticeLab,subnet,ipmac,network,"storage-calc":storageCalculator,python:pythonTool,"web-editor":webEditor,qr,quiz,games,resources,"short-notes-papers":shortNotesPapers,"ict-tools":ictTools,developer};
function loadTool(t){sidebar.classList.remove("open");if(t==="home")return home();if(renderers[t])renderers[t]();document.querySelectorAll(".nav-item").forEach(x=>x.classList.toggle("active",x.dataset.tool===t));window.scrollTo({top:0,behavior:"smooth"})}
ensureStudyToolsStyles();
ensureStudyToolNav();
document.querySelectorAll(".nav-item")
.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            if (
                button.dataset.tool
            ) {
                loadTool(
                    button.dataset.tool
                );
            }


            if (
                window.innerWidth <=
                900
            ) {

                closeMobileMenu();

            }

        }
    );

});
$("#openMenu").onclick=()=>sidebar.classList.add("open");$("#closeMenu").onclick=()=>sidebar.classList.remove("open");
$("#themeBtn").onclick=()=>document.body.classList.toggle("light");
document.addEventListener("click",e=>{let b=e.target.closest("[data-tool]");if(b&&!b.classList.contains("nav-item"))loadTool(b.dataset.tool)});


function createFloatingParticles() {

    const container =
        document.getElementById(
            "floatingParticles"
        );

    if (!container) {
        return;
    }



    container.innerHTML = "";


    const particleCount = 45;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );



        const size =
            Math.random() * 4 + 2;



        const x =
            Math.random() * 100;



        const duration =
            Math.random() * 18 + 14;



        const delay =
            Math.random() * -25;



        const drift =
            (
                Math.random() * 120 - 60
            );



        const opacity =
            Math.random() * 0.45 + 0.15;


        particle.style.setProperty(
            "--size",
            size + "px"
        );


        particle.style.setProperty(
            "--x",
            x + "%"
        );


        particle.style.setProperty(
            "--duration",
            duration + "s"
        );


        particle.style.setProperty(
            "--delay",
            delay + "s"
        );


        particle.style.setProperty(
            "--drift",
            drift + "px"
        );


        particle.style.setProperty(
            "--opacity",
            opacity
        );


        container.appendChild(
            particle
        );

    }

}


createFloatingParticles();

function openResources() {
    window.location.href = "https://deniyayans.schweb.lk";
}

function developer() {
  shell(
    "developer",
    `
    <div class="workspace">

      <div class="card">
        <span class="eyebrow">ABOUT THE PROJECT</span>

        <h2 style="margin-top:10px;">
          ICT Toolbox
        </h2>

        <p class="muted">
          An interactive ICT learning platform designed to provide
          calculators, simulators, programming tools, networking tools,
          database tools, quizzes and educational resources in one place.
        </p>
      </div>

      <div class="card">

        <div class="tool-icon">✦</div>

        <h2>Developer</h2>

        <h3>
          Nadula Sasmitha Bandara
        </h3>

        <p class="muted">
          Developer & Creator of ICT Toolbox
        </p>

        <div style="margin-top:20px">

          <a
            href="mailto:nadulasasmitha1212@gmail.com"
            class="btn"
            style="display:block;text-decoration:none;margin-bottom:10px;"
          >
            ✉ Email Developer
          </a>

          <a
            href="tel:+94729001370"
            class="btn"
            style="display:block;text-decoration:none;"
          >
            ☎ Contact Developer
          </a>

        </div>

      </div>

    </div>
    `
  );
}



function renderCPUSimulator() {
  const content = document.getElementById("content");

  if (!content) {
    console.error('CPU Simulator: Element with id="content" was not found.');
    return;
  }

  addCPUStyles();

  content.innerHTML = `
    <section class="cpu-simulator">

      <!-- INTRODUCTION -->
      <div class="cpu-intro">
        <div>
          <span class="cpu-badge">⚙ INTERACTIVE ICT LAB</span>
          <h1>Visual CPU Simulator</h1>
          <p>
            Write a small program and watch how the CPU uses the
            <strong>Fetch → Decode → Execute</strong> cycle.
          </p>
        </div>

        <div class="cpu-help-box">
          <span>💡</span>
          <p>
            Use <strong>Step</strong> to understand each CPU operation
            one stage at a time.
          </p>
        </div>
      </div>

      <!-- FETCH-DECODE-EXECUTE PROGRESS -->
      <div class="cycle-progress">
        <div class="cycle-stage active" id="cycle-fetch">
          <div class="cycle-number">1</div>
          <div>
            <strong>Fetch</strong>
            <small>Get instruction from memory</small>
          </div>
        </div>

        <div class="cycle-connector">
          <div class="cycle-line"></div>
          <span>→</span>
        </div>

        <div class="cycle-stage" id="cycle-decode">
          <div class="cycle-number">2</div>
          <div>
            <strong>Decode</strong>
            <small>Understand the instruction</small>
          </div>
        </div>

        <div class="cycle-connector">
          <div class="cycle-line"></div>
          <span>→</span>
        </div>

        <div class="cycle-stage" id="cycle-execute">
          <div class="cycle-number">3</div>
          <div>
            <strong>Execute</strong>
            <small>Perform the operation</small>
          </div>
        </div>
      </div>

      <!-- MAIN WORKSPACE -->
      <div class="cpu-workspace">

        <!-- PROGRAM EDITOR -->
        <article class="cpu-panel program-panel">
          <div class="panel-heading">
            <div>
              <span class="panel-icon">📝</span>
              <div>
                <h2>Program Editor</h2>
                <p>Enter one instruction per line</p>
              </div>
            </div>

            <select id="cpu-example-select" class="cpu-select">
              <option value="addition">Addition example</option>
              <option value="subtraction">Subtraction example</option>
              <option value="memory">Memory example</option>
              <option value="jump">Jump example</option>
            </select>
          </div>

          <div class="instruction-guide">
            <button class="instruction-chip" data-code="LDA 5">
              <strong>LDA</strong>
              <span>Load a value</span>
            </button>

            <button class="instruction-chip" data-code="ADD 7">
              <strong>ADD</strong>
              <span>Add a value</span>
            </button>

            <button class="instruction-chip" data-code="SUB 2">
              <strong>SUB</strong>
              <span>Subtract</span>
            </button>

            <button class="instruction-chip" data-code="STA 20">
              <strong>STA</strong>
              <span>Store in memory</span>
            </button>

            <button class="instruction-chip" data-code="JMP 0">
              <strong>JMP</strong>
              <span>Jump to line</span>
            </button>

            <button class="instruction-chip" data-code="HLT">
              <strong>HLT</strong>
              <span>Stop program</span>
            </button>
          </div>

          <div class="editor-wrapper">
            <div class="line-numbers" id="cpu-line-numbers">1<br>2<br>3<br>4</div>

            <textarea
              id="cpu-program"
              spellcheck="false"
              aria-label="CPU program editor"
            >LDA 5
ADD 7
STA 20
HLT</textarea>
          </div>

          <div id="cpu-error" class="cpu-error hidden"></div>

          <div class="cpu-controls">
            <button id="cpu-run" class="cpu-button primary">
              ▶ Run
            </button>

            <button id="cpu-step" class="cpu-button">
              ⏭ Step
            </button>

            <button id="cpu-pause" class="cpu-button">
              ⏸ Pause
            </button>

            <button id="cpu-reset" class="cpu-button danger">
              ↻ Reset
            </button>

            <label class="speed-control">
              Speed
              <select id="cpu-speed" class="cpu-select">
                <option value="1500">Slow</option>
                <option value="800" selected>Normal</option>
                <option value="350">Fast</option>
              </select>
            </label>
          </div>
        </article>

        <!-- CPU DIAGRAM -->
        <article class="cpu-panel diagram-panel">
          <div class="panel-heading">
            <div>
              <span class="panel-icon">🧠</span>
              <div>
                <h2>CPU Data Flow</h2>
                <p>Watch information move through the system</p>
              </div>
            </div>

            <span id="cpu-status" class="status-badge ready">Ready</span>
          </div>

          <div class="cpu-diagram">

            <div class="diagram-component memory-component" id="component-memory">
              <span class="component-icon">▦</span>
              <strong>Main Memory</strong>
              <small>Stores instructions and data</small>
            </div>

            <div class="data-arrow arrow-memory">
              <span class="moving-data" id="data-memory">DATA</span>
              <div class="arrow-line"></div>
              <span class="arrow-head">▶</span>
            </div>

            <div class="cpu-box">
              <div class="cpu-box-title">
                <span>CPU</span>
                <small>Central Processing Unit</small>
              </div>

              <div class="cpu-inner-grid">
                <div class="diagram-component" id="component-cu">
                  <span class="component-icon">🎛</span>
                  <strong>Control Unit</strong>
                  <small>Fetches and decodes instructions</small>
                </div>

                <div class="diagram-component" id="component-alu">
                  <span class="component-icon">＋</span>
                  <strong>ALU</strong>
                  <small>Performs calculations</small>
                </div>

                <div class="diagram-component registers-component"
                     id="component-registers">
                  <span class="component-icon">▤</span>
                  <strong>Registers</strong>

                  <div class="mini-registers">
                    <span>PC</span>
                    <span>MAR</span>
                    <span>MDR</span>
                    <span>IR</span>
                    <span>ACC</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="internal-flow">
              <span>Control signals and data move between CPU components</span>
            </div>
          </div>

          <div class="current-action">
            <span class="action-icon" id="cpu-action-icon">💡</span>
            <div>
              <small>What is happening?</small>
              <strong id="cpu-explanation">
                Press Step or Run to begin the simulation.
              </strong>
            </div>
          </div>
        </article>
      </div>

      <!-- REGISTER + MEMORY SECTION -->
      <div class="cpu-information-grid">

        <article class="cpu-panel">
          <div class="panel-heading">
            <div>
              <span class="panel-icon">📊</span>
              <div>
                <h2>CPU Registers</h2>
                <p>Small, fast storage locations inside the CPU</p>
              </div>
            </div>
          </div>

          <div class="register-grid">
            ${createRegisterCard(
              "PC",
              "Program Counter",
              "Address of the next instruction"
            )}

            ${createRegisterCard(
              "MAR",
              "Memory Address Register",
              "Address currently accessed"
            )}

            ${createRegisterCard(
              "MDR",
              "Memory Data Register",
              "Data received from memory"
            )}

            ${createRegisterCard(
              "IR",
              "Instruction Register",
              "Current instruction"
            )}

            ${createRegisterCard(
              "ACC",
              "Accumulator",
              "Stores calculation results"
            )}
          </div>
        </article>

        <article class="cpu-panel">
          <div class="panel-heading">
            <div>
              <span class="panel-icon">🗃</span>
              <div>
                <h2>Memory Monitor</h2>
                <p>Values stored by STA instructions</p>
              </div>
            </div>
          </div>

          <div class="memory-table-wrapper">
            <table class="memory-table">
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Value</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody id="cpu-memory-body">
                <tr>
                  <td colspan="3" class="empty-memory">
                    No values have been stored yet.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>

      <!-- EXECUTION LOG -->
      <article class="cpu-panel execution-panel">
        <div class="panel-heading">
          <div>
            <span class="panel-icon">📋</span>
            <div>
              <h2>Execution Timeline</h2>
              <p>A simple explanation of every completed operation</p>
            </div>
          </div>

          <button id="cpu-clear-log" class="cpu-button small">
            Clear timeline
          </button>
        </div>

        <div id="cpu-log" class="execution-log">
          <div class="empty-log">
            Run the program to see the execution process here.
          </div>
        </div>
      </article>
    </section>
  `;

  initialiseCPUSimulator();
}



function createRegisterCard(code, name, description) {
  return `
    <div class="register-card" id="register-card-${code.toLowerCase()}">
      <div class="register-top">
        <span class="register-code">${code}</span>
        <span class="register-value" id="cpu-${code.toLowerCase()}">0</span>
      </div>

      <strong>${name}</strong>
      <small>${description}</small>
    </div>
  `;
}



function initialiseCPUSimulator() {
  const state = {
    pc: 0,
    mar: 0,
    mdr: "—",
    ir: "—",
    acc: 0,
    memory: {},
    instructions: [],
    phase: 0,
    running: false,
    halted: false,
    timer: null,
    steps: 0,
    maxSteps: 100
  };

  const programInput = document.getElementById("cpu-program");
  const lineNumbers = document.getElementById("cpu-line-numbers");
  const errorBox = document.getElementById("cpu-error");
  const status = document.getElementById("cpu-status");
  const explanation = document.getElementById("cpu-explanation");
  const actionIcon = document.getElementById("cpu-action-icon");

  const examples = {
    addition: `LDA 5
ADD 7
STA 20
HLT`,

    subtraction: `LDA 20
SUB 8
STA 21
HLT`,

    memory: `LDA 10
STA 20
LDA 15
STA 21
ADD 5
STA 22
HLT`,

    jump: `LDA 10
ADD 5
JMP 4
SUB 100
STA 20
HLT`
  };

  function updateLineNumbers() {
    const lines = programInput.value.split("\n").length;
    lineNumbers.innerHTML = Array.from(
      { length: lines },
      (_, index) => index + 1
    ).join("<br>");
  }

  function parseProgram() {
    hideError();

    const lines = programInput.value
      .split("\n")
      .map(line => line.trim().toUpperCase())
      .filter(line => line !== "");

    if (!lines.length) {
      showError("Please enter at least one instruction.");
      return false;
    }

    const allowedInstructions = ["LDA", "ADD", "SUB", "STA", "JMP", "HLT"];

    for (let index = 0; index < lines.length; index++) {
      const parts = lines[index].split(/\s+/);
      const command = parts[0];
      const value = parts[1];

      if (!allowedInstructions.includes(command)) {
        showError(
          `Line ${index + 1}: "${command}" is not a recognised instruction.`
        );
        return false;
      }

      if (command === "HLT" && parts.length > 1) {
        showError(`Line ${index + 1}: HLT does not require a value.`);
        return false;
      }

      if (command !== "HLT") {
        if (value === undefined || Number.isNaN(Number(value))) {
          showError(
            `Line ${index + 1}: ${command} requires a numerical value.`
          );
          return false;
        }

        if (parts.length > 2) {
          showError(`Line ${index + 1}: Too many values were entered.`);
          return false;
        }
      }
    }

    state.instructions = lines;
    return true;
  }

  function resetCPU(keepProgram = true) {
    clearInterval(state.timer);

    state.pc = 0;
    state.mar = 0;
    state.mdr = "—";
    state.ir = "—";
    state.acc = 0;
    state.memory = {};
    state.phase = 0;
    state.running = false;
    state.halted = false;
    state.steps = 0;

    if (!keepProgram) {
      programInput.value = examples.addition;
      updateLineNumbers();
    }

    document.getElementById("cpu-log").innerHTML = `
      <div class="empty-log">
        Run the program to see the execution process here.
      </div>
    `;

    setStatus("Ready", "ready");
    setExplanation(
      "Press Step or Run to begin the simulation.",
      "💡"
    );

    clearHighlights();
    updateDisplay();
  }

  function stepCPU() {
    if (state.halted) {
      setExplanation(
        "The program has already stopped. Press Reset to run it again.",
        "🛑"
      );
      return;
    }

    if (!state.instructions.length && !parseProgram()) return;

    if (state.pc < 0 || state.pc >= state.instructions.length) {
      haltCPU("The Program Counter moved outside the program.");
      return;
    }

    if (state.steps >= state.maxSteps) {
      haltCPU("Safety stop: the program reached 100 execution steps.");
      showError(
        "The program may contain an infinite JMP loop. It was stopped after 100 steps."
      );
      return;
    }

    if (state.phase === 0) {
      fetchInstruction();
    } else if (state.phase === 1) {
      decodeInstruction();
    } else {
      executeInstruction();
    }

    updateDisplay();
  }

  function fetchInstruction() {
    const instruction = state.instructions[state.pc];

    state.mar = state.pc;
    state.mdr = instruction;
    state.ir = instruction;
    state.phase = 1;

    setCycleStage("fetch");
    highlightComponent("component-memory");
    highlightRegister("pc");
    highlightRegister("mar");
    animateData("data-memory");

    setStatus("Fetching", "fetching");

    setExplanation(
      `The PC contains ${state.pc}. The CPU fetches instruction "${instruction}" from memory.`,
      "📥"
    );

    addLog(
      "Fetch",
      `Instruction ${state.pc}: ${instruction}`,
      `PC ${state.pc} → MAR ${state.mar} → MDR → IR`
    );
  }

  function decodeInstruction() {
    state.phase = 2;

    const [command, value] = state.ir.split(/\s+/);

    setCycleStage("decode");
    highlightComponent("component-cu");
    highlightRegister("ir");

    setStatus("Decoding", "decoding");

    const descriptions = {
      LDA: `Load the value ${value} into the accumulator.`,
      ADD: `Add ${value} to the accumulator.`,
      SUB: `Subtract ${value} from the accumulator.`,
      STA: `Store the accumulator value at memory address ${value}.`,
      JMP: `Move the Program Counter to instruction ${value}.`,
      HLT: "Stop the program."
    };

    setExplanation(
      `The Control Unit decodes ${command}. ${descriptions[command]}`,
      "🔍"
    );

    addLog(
      "Decode",
      state.ir,
      descriptions[command]
    );
  }

  function executeInstruction() {
    const [command, rawValue] = state.ir.split(/\s+/);
    const value = Number(rawValue);
    const oldACC = state.acc;
    const oldPC = state.pc;

    setCycleStage("execute");
    setStatus("Executing", "executing");

    let explanationText = "";
    let logDetail = "";

    switch (command) {
      case "LDA":
        state.acc = value;
        state.pc++;
        highlightComponent("component-registers");
        highlightRegister("acc");

        explanationText =
          `${value} is loaded into the Accumulator. ACC is now ${state.acc}.`;

        logDetail = `ACC: ${oldACC} → ${state.acc}`;
        break;

      case "ADD":
        state.acc += value;
        state.pc++;
        highlightComponent("component-alu");
        highlightRegister("acc");

        explanationText =
          `The ALU calculates ${oldACC} + ${value}. The result ${state.acc} is saved in ACC.`;

        logDetail = `${oldACC} + ${value} = ${state.acc}`;
        break;

      case "SUB":
        state.acc -= value;
        state.pc++;
        highlightComponent("component-alu");
        highlightRegister("acc");

        explanationText =
          `The ALU calculates ${oldACC} - ${value}. The result ${state.acc} is saved in ACC.`;

        logDetail = `${oldACC} - ${value} = ${state.acc}`;
        break;

      case "STA":
        state.memory[value] = state.acc;
        state.pc++;
        state.mar = value;
        state.mdr = state.acc;

        highlightComponent("component-memory");
        highlightRegister("mar");
        highlightRegister("mdr");
        animateData("data-memory");

        explanationText =
          `The value ${state.acc} is stored at memory address ${value}.`;

        logDetail = `Memory[${value}] ← ${state.acc}`;
        break;

      case "JMP":
        state.pc = value;
        highlightComponent("component-cu");
        highlightRegister("pc");

        explanationText =
          `The Program Counter changes from ${oldPC} to ${value}.`;

        logDetail = `PC: ${oldPC} → ${value}`;
        break;

      case "HLT":
        haltCPU("HLT tells the CPU to stop executing the program.");
        logDetail = "Program execution completed";
        break;
    }

    state.steps++;
    state.phase = 0;

    if (command !== "HLT") {
      setExplanation(explanationText, "⚡");
      addLog("Execute", state.ir, logDetail);
    }

    updateMemoryTable();
  }

  function runCPU() {
    if (state.halted) {
      resetCPU(true);
    }

    if (!state.instructions.length && !parseProgram()) return;

    if (state.running) return;

    state.running = true;
    setStatus("Running", "running");

    const speed = Number(document.getElementById("cpu-speed").value);

    state.timer = setInterval(() => {
      if (state.halted || !state.running) {
        clearInterval(state.timer);
        return;
      }

      stepCPU();
    }, speed);
  }

  function pauseCPU() {
    state.running = false;
    clearInterval(state.timer);

    if (!state.halted) {
      setStatus("Paused", "paused");
      setExplanation(
        "The simulation is paused. Press Run or Step to continue.",
        "⏸"
      );
    }
  }

  function haltCPU(message) {
    state.halted = true;
    state.running = false;
    clearInterval(state.timer);

    setStatus("Completed", "completed");
    setExplanation(message, "✅");
    setCycleStage("none");

    addLog(
      "Complete",
      "HLT",
      `Program stopped after ${state.steps} execution step(s).`
    );
  }

  function updateDisplay() {
    setText("cpu-pc", state.pc);
    setText("cpu-mar", state.mar);
    setText("cpu-mdr", state.mdr);
    setText("cpu-ir", state.ir);
    setText("cpu-acc", state.acc);

    highlightCurrentInstruction();
  }

  function updateMemoryTable() {
    const memoryBody = document.getElementById("cpu-memory-body");
    const addresses = Object.keys(state.memory)
      .map(Number)
      .sort((a, b) => a - b);

    if (!addresses.length) {
      memoryBody.innerHTML = `
        <tr>
          <td colspan="3" class="empty-memory">
            No values have been stored yet.
          </td>
        </tr>
      `;
      return;
    }

    memoryBody.innerHTML = addresses
      .map(address => `
        <tr class="${state.mar === address ? "memory-changed" : ""}">
          <td><span class="address-badge">${address}</span></td>
          <td>${state.memory[address]}</td>
          <td>
            <span class="stored-badge">Stored</span>
          </td>
        </tr>
      `)
      .join("");
  }

  function highlightCurrentInstruction() {
    const lines = programInput.value.split("\n");
    const formatted = lines
      .map((line, index) => {
        if (index === state.pc && !state.halted) {
          return `${index + 1}  ▶ ${line}`;
        }

        return `${index + 1}    ${line}`;
      })
      .join("\n");

    programInput.setAttribute(
      "aria-label",
      `CPU program editor. Current program:\n${formatted}`
    );
  }

  function setCycleStage(stage) {
    document.querySelectorAll(".cycle-stage")
      .forEach(element => element.classList.remove("active", "completed"));

    const stages = ["fetch", "decode", "execute"];
    const activeIndex = stages.indexOf(stage);

    stages.forEach((stageName, index) => {
      const element = document.getElementById(`cycle-${stageName}`);

      if (index < activeIndex) {
        element.classList.add("completed");
      }

      if (index === activeIndex) {
        element.classList.add("active");
      }
    });
  }

  function highlightComponent(componentID) {
    document.querySelectorAll(".diagram-component")
      .forEach(element => element.classList.remove("working"));

    const component = document.getElementById(componentID);

    if (component) {
      component.classList.add("working");
    }
  }

  function highlightRegister(register) {
    document.querySelectorAll(".register-card")
      .forEach(element => element.classList.remove("changed"));

    const card = document.getElementById(`register-card-${register}`);

    if (card) {
      card.classList.add("changed");
    }
  }

  function clearHighlights() {
    document.querySelectorAll(".diagram-component, .register-card")
      .forEach(element => {
        element.classList.remove("working", "changed");
      });

    setCycleStage("fetch");
  }

  function animateData(elementID) {
    const element = document.getElementById(elementID);

    if (!element) return;

    element.classList.remove("animate");

    requestAnimationFrame(() => {
      element.classList.add("animate");
    });
  }

  function addLog(stage, instruction, details) {
    const log = document.getElementById("cpu-log");
    const emptyLog = log.querySelector(".empty-log");

    if (emptyLog) emptyLog.remove();

    const stageClass = stage.toLowerCase();
    const item = document.createElement("div");

    item.className = "log-item";
    item.innerHTML = `
      <div class="log-stage ${stageClass}">${stage}</div>

      <div class="log-content">
        <strong>${escapeHTML(instruction)}</strong>
        <span>${escapeHTML(details)}</span>
      </div>

      <div class="log-step">Step ${state.steps + 1}</div>
    `;

    log.appendChild(item);
    log.scrollTop = log.scrollHeight;
  }

  function showError(message) {
    errorBox.textContent = `⚠ ${message}`;
    errorBox.classList.remove("hidden");
    setStatus("Error", "error");
  }

  function hideError() {
    errorBox.classList.add("hidden");
    errorBox.textContent = "";
  }

  function setStatus(text, className) {
    status.textContent = text;
    status.className = `status-badge ${className}`;
  }

  function setExplanation(text, icon) {
    explanation.textContent = text;
    actionIcon.textContent = icon;
  }

  function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = value;
    }
  }

  function escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  programInput.addEventListener("input", () => {
    updateLineNumbers();
    state.instructions = [];
    hideError();
  });

  document.getElementById("cpu-example-select")
    .addEventListener("change", event => {
      programInput.value = examples[event.target.value];
      updateLineNumbers();
      resetCPU(true);
    });

  document.querySelectorAll(".instruction-chip")
    .forEach(button => {
      button.addEventListener("click", () => {
        const code = button.dataset.code;
        const currentValue = programInput.value.trim();

        programInput.value =
          currentValue === "" ? code : `${currentValue}\n${code}`;

        updateLineNumbers();
        programInput.focus();
      });
    });

  document.getElementById("cpu-run")
    .addEventListener("click", runCPU);

  document.getElementById("cpu-step")
    .addEventListener("click", stepCPU);

  document.getElementById("cpu-pause")
    .addEventListener("click", pauseCPU);

  document.getElementById("cpu-reset")
    .addEventListener("click", () => resetCPU(true));

  document.getElementById("cpu-speed")
    .addEventListener("change", () => {
      if (state.running) {
        pauseCPU();
        runCPU();
      }
    });

  document.getElementById("cpu-clear-log")
    .addEventListener("click", () => {
      document.getElementById("cpu-log").innerHTML = `
        <div class="empty-log">
          The execution timeline was cleared.
        </div>
      `;
    });

  updateLineNumbers();
  resetCPU(true);
}



function addCPUStyles() {
  if (document.getElementById("cpu-simulator-styles")) return;

  const style = document.createElement("style");
  style.id = "cpu-simulator-styles";

  style.textContent = `
    .cpu-simulator {
      --cpu-bg: rgba(15, 28, 37, 0.88);
      --cpu-bg-soft: rgba(21, 43, 51, 0.72);
      --cpu-border: rgba(148, 190, 199, 0.19);
      --cpu-text: #eef7f8;
      --cpu-muted: #91a7ad;
      --cpu-cyan: #65e6d3;
      --cpu-blue: #75bfff;
      --cpu-pink: #ffb8dc;
      --cpu-yellow: #ffd878;
      --cpu-green: #77edaa;
      --cpu-red: #ff8f9c;
      display: grid;
      gap: 24px;
      padding-bottom: 70px;
      color: var(--cpu-text);
    }

    .cpu-intro {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 25px;
    }

    .cpu-intro h1 {
      margin: 6px 0 8px;
      font-size: clamp(28px, 4vw, 42px);
      letter-spacing: -1px;
    }

    .cpu-intro p {
      margin: 0;
      color: var(--cpu-muted);
      font-size: 16px;
      line-height: 1.6;
    }

    .cpu-badge {
      color: var(--cpu-pink);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1.8px;
    }

    .cpu-help-box {
      max-width: 340px;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 18px;
      background: rgba(101, 230, 211, 0.08);
      border: 1px solid rgba(101, 230, 211, 0.25);
      border-radius: 16px;
    }

    .cpu-help-box > span {
      font-size: 24px;
    }

    .cpu-help-box p {
      font-size: 13px;
      line-height: 1.5;
    }

    .cycle-progress {
      display: grid;
      grid-template-columns: 1fr auto 1fr auto 1fr;
      align-items: center;
      padding: 18px;
      background: var(--cpu-bg);
      border: 1px solid var(--cpu-border);
      border-radius: 22px;
    }

    .cycle-stage {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 13px;
      opacity: 0.45;
      border-radius: 15px;
      transition: 0.3s ease;
    }

    .cycle-stage.active {
      opacity: 1;
      background: rgba(101, 230, 211, 0.1);
      box-shadow: 0 0 22px rgba(101, 230, 211, 0.08);
    }

    .cycle-stage.completed {
      opacity: 0.8;
    }

    .cycle-number {
      width: 37px;
      height: 37px;
      display: grid;
      place-items: center;
      flex: 0 0 37px;
      border-radius: 50%;
      color: #071217;
      background: var(--cpu-cyan);
      font-weight: 900;
    }

    .cycle-stage strong,
    .cycle-stage small {
      display: block;
    }

    .cycle-stage small {
      margin-top: 4px;
      color: var(--cpu-muted);
    }

    .cycle-connector {
      display: flex;
      align-items: center;
      min-width: 55px;
      color: var(--cpu-cyan);
    }

    .cycle-line {
      width: 100%;
      height: 2px;
      background: linear-gradient(
        90deg,
        rgba(101, 230, 211, 0.2),
        var(--cpu-cyan)
      );
    }

    .cpu-workspace {
      display: grid;
      grid-template-columns: minmax(340px, 0.9fr) minmax(430px, 1.1fr);
      gap: 22px;
    }

    .cpu-information-grid {
      display: grid;
      grid-template-columns: 1.3fr 0.7fr;
      gap: 22px;
    }

    .cpu-panel {
      padding: 22px;
      background: var(--cpu-bg);
      border: 1px solid var(--cpu-border);
      border-radius: 22px;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
    }

    .panel-heading,
    .panel-heading > div {
      display: flex;
      align-items: center;
    }

    .panel-heading {
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 18px;
    }

    .panel-heading > div {
      gap: 12px;
    }

    .panel-heading h2 {
      margin: 0;
      font-size: 19px;
    }

    .panel-heading p {
      margin: 5px 0 0;
      color: var(--cpu-muted);
      font-size: 12px;
    }

    .panel-icon {
      width: 43px;
      height: 43px;
      display: grid;
      place-items: center;
      background: rgba(101, 230, 211, 0.1);
      border: 1px solid rgba(101, 230, 211, 0.2);
      border-radius: 13px;
      font-size: 20px;
    }

    .instruction-guide {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      margin-bottom: 14px;
    }

    .instruction-chip {
      padding: 10px;
      text-align: left;
      color: var(--cpu-text);
      background: rgba(255, 255, 255, 0.035);
      border: 1px solid var(--cpu-border);
      border-radius: 11px;
      cursor: pointer;
      transition: 0.2s;
    }

    .instruction-chip:hover {
      transform: translateY(-2px);
      border-color: var(--cpu-cyan);
      background: rgba(101, 230, 211, 0.09);
    }

    .instruction-chip strong,
    .instruction-chip span {
      display: block;
    }

    .instruction-chip strong {
      color: var(--cpu-cyan);
      font-size: 12px;
    }

    .instruction-chip span {
      margin-top: 3px;
      color: var(--cpu-muted);
      font-size: 10px;
    }

    .editor-wrapper {
      display: grid;
      grid-template-columns: 42px 1fr;
      min-height: 260px;
      overflow: hidden;
      background: #09141b;
      border: 1px solid var(--cpu-border);
      border-radius: 15px;
    }

    .line-numbers {
      padding: 16px 10px;
      text-align: right;
      color: #546871;
      background: rgba(255, 255, 255, 0.025);
      border-right: 1px solid var(--cpu-border);
      font: 15px/1.65 monospace;
      user-select: none;
    }

    #cpu-program {
      width: 100%;
      min-height: 260px;
      resize: vertical;
      padding: 16px;
      color: #eaf9f6;
      background: transparent;
      border: 0;
      outline: none;
      font: 15px/1.65 monospace;
      box-sizing: border-box;
    }

    .cpu-controls {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 9px;
      margin-top: 15px;
    }

    .cpu-button,
    .cpu-select {
      color: var(--cpu-text);
      background: rgba(255, 255, 255, 0.055);
      border: 1px solid var(--cpu-border);
      border-radius: 11px;
      cursor: pointer;
    }

    .cpu-button {
      padding: 11px 15px;
      font-weight: 750;
      transition: 0.2s;
    }

    .cpu-button:hover {
      transform: translateY(-2px);
      border-color: var(--cpu-cyan);
    }

    .cpu-button.primary {
      color: #071418;
      background: linear-gradient(135deg, var(--cpu-pink), #f89eca);
      border-color: transparent;
    }

    .cpu-button.danger {
      color: var(--cpu-red);
    }

    .cpu-button.small {
      padding: 8px 11px;
      font-size: 11px;
    }

    .cpu-select {
      padding: 10px;
      outline: none;
    }

    .cpu-select option {
      color: #111;
    }

    .speed-control {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: auto;
      color: var(--cpu-muted);
      font-size: 12px;
    }

    .cpu-error {
      margin-top: 12px;
      padding: 12px;
      color: #ffd8dd;
      background: rgba(255, 99, 120, 0.11);
      border: 1px solid rgba(255, 99, 120, 0.3);
      border-radius: 11px;
      font-size: 12px;
    }

    .hidden {
      display: none !important;
    }

    .status-badge {
      padding: 7px 11px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 800;
    }

    .status-badge.ready {
      color: var(--cpu-muted);
      background: rgba(145, 167, 173, 0.12);
    }

    .status-badge.fetching,
    .status-badge.running {
      color: var(--cpu-cyan);
      background: rgba(101, 230, 211, 0.12);
    }

    .status-badge.decoding {
      color: var(--cpu-blue);
      background: rgba(117, 191, 255, 0.12);
    }

    .status-badge.executing {
      color: var(--cpu-yellow);
      background: rgba(255, 216, 120, 0.12);
    }

    .status-badge.completed {
      color: var(--cpu-green);
      background: rgba(119, 237, 170, 0.12);
    }

    .status-badge.paused,
    .status-badge.error {
      color: var(--cpu-red);
      background: rgba(255, 143, 156, 0.12);
    }

    .cpu-diagram {
      position: relative;
      display: grid;
      grid-template-columns: 150px 65px 1fr;
      align-items: center;
      gap: 10px;
      min-height: 350px;
      padding: 17px;
      overflow: hidden;
      background:
        radial-gradient(
          circle at center,
          rgba(101, 230, 211, 0.07),
          transparent 65%
        ),
        rgba(5, 17, 23, 0.55);
      border: 1px solid var(--cpu-border);
      border-radius: 18px;
    }

    .diagram-component {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;
      min-height: 90px;
      padding: 13px;
      text-align: center;
      background: rgba(255, 255, 255, 0.045);
      border: 1px solid var(--cpu-border);
      border-radius: 15px;
      transition: 0.3s ease;
    }

    .diagram-component small {
      color: var(--cpu-muted);
      font-size: 9px;
      line-height: 1.4;
    }

    .diagram-component.working {
      transform: translateY(-3px);
      border-color: var(--cpu-cyan);
      box-shadow:
        0 0 0 3px rgba(101, 230, 211, 0.08),
        0 0 25px rgba(101, 230, 211, 0.18);
    }

    .component-icon {
      font-size: 23px;
    }

    .cpu-box {
      padding: 13px;
      background: rgba(6, 22, 29, 0.75);
      border: 2px solid rgba(101, 230, 211, 0.32);
      border-radius: 21px;
    }

    .cpu-box-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 11px;
    }

    .cpu-box-title span {
      color: var(--cpu-cyan);
      font-weight: 900;
      letter-spacing: 1px;
    }

    .cpu-box-title small {
      color: var(--cpu-muted);
      font-size: 9px;
    }

    .cpu-inner-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 9px;
    }

    .registers-component {
      grid-column: 1 / -1;
    }

    .mini-registers {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5px;
    }

    .mini-registers span {
      padding: 4px 7px;
      color: var(--cpu-cyan);
      background: rgba(101, 230, 211, 0.08);
      border-radius: 6px;
      font: 9px monospace;
    }

    .data-arrow {
      position: relative;
      display: flex;
      align-items: center;
      color: var(--cpu-cyan);
    }

    .arrow-line {
      width: 100%;
      height: 3px;
      overflow: hidden;
      background: repeating-linear-gradient(
        90deg,
        var(--cpu-cyan) 0 8px,
        transparent 8px 14px
      );
      animation: cpuArrow 0.8s linear infinite;
    }

    .moving-data {
      position: absolute;
      top: -25px;
      left: 0;
      padding: 3px 6px;
      opacity: 0;
      color: #071418;
      background: var(--cpu-yellow);
      border-radius: 5px;
      font: 8px monospace;
    }

    .moving-data.animate {
      animation: moveCPUData 1.1s ease;
    }

    .internal-flow {
      position: absolute;
      right: 27px;
      bottom: 23px;
      color: var(--cpu-muted);
      font-size: 9px;
    }

    .current-action {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 14px;
      padding: 14px;
      background: rgba(101, 230, 211, 0.07);
      border: 1px solid rgba(101, 230, 211, 0.17);
      border-radius: 14px;
    }

    .action-icon {
      width: 40px;
      height: 40px;
      display: grid;
      place-items: center;
      flex: 0 0 40px;
      background: rgba(101, 230, 211, 0.1);
      border-radius: 11px;
    }

    .current-action small,
    .current-action strong {
      display: block;
    }

    .current-action small {
      margin-bottom: 4px;
      color: var(--cpu-muted);
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .current-action strong {
      font-size: 12px;
      line-height: 1.5;
    }

    .register-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
    }

    .register-card {
      min-height: 118px;
      padding: 13px;
      background: rgba(255, 255, 255, 0.035);
      border: 1px solid var(--cpu-border);
      border-radius: 14px;
      transition: 0.25s;
    }

    .register-card.changed {
      transform: translateY(-4px);
      border-color: var(--cpu-yellow);
      box-shadow: 0 8px 25px rgba(255, 216, 120, 0.11);
    }

    .register-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 13px;
    }

    .register-code {
      padding: 5px 7px;
      color: var(--cpu-cyan);
      background: rgba(101, 230, 211, 0.1);
      border-radius: 7px;
      font: 700 10px monospace;
    }

    .register-value {
      max-width: 90px;
      overflow: hidden;
      color: var(--cpu-yellow);
      font: 800 15px monospace;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .register-card > strong,
    .register-card > small {
      display: block;
    }

    .register-card > strong {
      margin-bottom: 5px;
      font-size: 11px;
    }

    .register-card > small {
      color: var(--cpu-muted);
      font-size: 9px;
      line-height: 1.4;
    }

    .memory-table-wrapper {
      overflow-x: auto;
    }

    .memory-table {
      width: 100%;
      border-collapse: collapse;
    }

    .memory-table th,
    .memory-table td {
      padding: 11px;
      text-align: left;
      border-bottom: 1px solid var(--cpu-border);
      font-size: 11px;
    }

    .memory-table th {
      color: var(--cpu-muted);
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .memory-table tr.memory-changed {
      background: rgba(255, 216, 120, 0.07);
    }

    .address-badge,
    .stored-badge {
      padding: 4px 7px;
      border-radius: 6px;
      font: 9px monospace;
    }

    .address-badge {
      color: var(--cpu-blue);
      background: rgba(117, 191, 255, 0.1);
    }

    .stored-badge {
      color: var(--cpu-green);
      background: rgba(119, 237, 170, 0.1);
    }

    .empty-memory,
    .empty-log {
      padding: 28px !important;
      text-align: center !important;
      color: var(--cpu-muted);
      font-size: 11px;
    }

    .execution-log {
      display: grid;
      gap: 9px;
      max-height: 330px;
      overflow-y: auto;
    }

    .log-item {
      display: grid;
      grid-template-columns: 76px 1fr auto;
      align-items: center;
      gap: 13px;
      padding: 12px;
      background: rgba(255, 255, 255, 0.025);
      border: 1px solid var(--cpu-border);
      border-radius: 12px;
    }

    .log-stage {
      padding: 6px 8px;
      text-align: center;
      border-radius: 7px;
      font-size: 9px;
      font-weight: 900;
      text-transform: uppercase;
    }

    .log-stage.fetch {
      color: var(--cpu-cyan);
      background: rgba(101, 230, 211, 0.1);
    }

    .log-stage.decode {
      color: var(--cpu-blue);
      background: rgba(117, 191, 255, 0.1);
    }

    .log-stage.execute {
      color: var(--cpu-yellow);
      background: rgba(255, 216, 120, 0.1);
    }

    .log-stage.complete {
      color: var(--cpu-green);
      background: rgba(119, 237, 170, 0.1);
    }

    .log-content strong,
    .log-content span {
      display: block;
    }

    .log-content strong {
      margin-bottom: 4px;
      font: 700 11px monospace;
    }

    .log-content span,
    .log-step {
      color: var(--cpu-muted);
      font-size: 9px;
    }

    @keyframes cpuArrow {
      to {
        background-position: 14px 0;
      }
    }

    @keyframes moveCPUData {
      0% {
        left: 0;
        opacity: 0;
      }

      20% {
        opacity: 1;
      }

      80% {
        opacity: 1;
      }

      100% {
        left: calc(100% - 30px);
        opacity: 0;
      }
    }

    @media (max-width: 1100px) {
      .cpu-workspace,
      .cpu-information-grid {
        grid-template-columns: 1fr;
      }

      .register-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 720px) {
      .cpu-intro {
        align-items: stretch;
        flex-direction: column;
      }

      .cpu-help-box {
        max-width: none;
      }

      .cycle-progress {
        grid-template-columns: 1fr;
        gap: 5px;
      }

      .cycle-stage {
        justify-content: flex-start;
      }

      .cycle-connector {
        min-width: 0;
        height: 20px;
        justify-content: center;
        transform: rotate(90deg);
      }

      .cpu-diagram {
        grid-template-columns: 1fr;
      }

      .data-arrow {
        width: 70px;
        margin: auto;
        transform: rotate(90deg);
      }

      .cpu-inner-grid,
      .instruction-guide {
        grid-template-columns: 1fr 1fr;
      }

      .register-grid {
        grid-template-columns: 1fr 1fr;
      }

      .speed-control {
        width: 100%;
        margin: 4px 0 0;
      }

      .log-item {
        grid-template-columns: 65px 1fr;
      }

      .log-step {
        display: none;
      }
    }

    @media (max-width: 450px) {
      .register-grid,
      .cpu-inner-grid {
        grid-template-columns: 1fr;
      }

      .registers-component {
        grid-column: auto;
      }

      .instruction-guide {
        grid-template-columns: 1fr 1fr;
      }

      .cpu-panel {
        padding: 15px;
      }
    }
  `;

  document.head.appendChild(style);
}



if (typeof renderers !== "undefined") {
  renderers.cpu = renderCPUSimulator;
}



if (
    "serviceWorker" in navigator
) {

    window.addEventListener(
        "load",
        async () => {

            try {

                const registration =
                    await navigator
                        .serviceWorker
                        .register(
                            "./service-worker.js"
                        );


                console.log(
                    "ICT Lab PWA ready:",
                    registration.scope
                );

            }

            catch (error) {

                console.error(
                    "Service Worker registration failed:",
                    error
                );

            }

        }
    );

} 



let pwaInstallPrompt = null;


const installAppBtn =
    document.getElementById(
        "installAppBtn"
    );


window.addEventListener(
    "beforeinstallprompt",
    event => {

       

        event.preventDefault();


        pwaInstallPrompt =
            event;


        if (
            installAppBtn
        ) {

            installAppBtn.hidden =
                false;

        }

    }
);


if (
    installAppBtn
) {

    installAppBtn.addEventListener(
        "click",
        async () => {

            if (
                !pwaInstallPrompt
            ) {

                return;

            }


            pwaInstallPrompt.prompt();


            const result =
                await pwaInstallPrompt
                    .userChoice;


            console.log(
                "Install result:",
                result.outcome
            );


            pwaInstallPrompt =
                null;


            installAppBtn.hidden =
                true;

        }
    );

}



window.addEventListener(
    "appinstalled",
    () => {

        pwaInstallPrompt =
            null;


        if (
            installAppBtn
        ) {

            installAppBtn.hidden =
                true;

        }


        console.log(
            "ICT Lab installed!"
        );

    }
);




const languageSelect =
    document.getElementById("languageSelect");


let currentLanguage =
    localStorage.getItem("ictLabLanguage") || "en";




function getGoogleTranslateCombo(){

    return document.querySelector(
        ".goog-te-combo"
    );

}




function applyICTLanguage(lang){

    currentLanguage = lang;

    localStorage.setItem(
        "ictLabLanguage",
        lang
    );


    const combo =
        getGoogleTranslateCombo();


    if(!combo){

        
        setTimeout(
            () => applyICTLanguage(lang),
            500
        );

        return;

    }


    combo.value = lang;


    combo.dispatchEvent(
        new Event(
            "change",
            {
                bubbles:true
            }
        )
    );

}




if(languageSelect){

    languageSelect.value =
        currentLanguage;


    languageSelect.addEventListener(
        "change",
        function(){

            applyICTLanguage(
                this.value
            );

        }
    );

}




window.addEventListener(
    "load",
    function(){

        setTimeout(
            () => {

                applyICTLanguage(
                    currentLanguage
                );

            },
            1200
        );

    }
);


 

const ictContent =
    document.getElementById("content");


let translationTimer;


if(ictContent){

    const translatorObserver =
        new MutationObserver(
            function(){

                if(
                    currentLanguage === "en"
                ){
                    return;
                }


                clearTimeout(
                    translationTimer
                );


                translationTimer =
                    setTimeout(
                        function(){

                            const combo =
                                getGoogleTranslateCombo();


                            if(!combo){
                                return;
                            }


                            

                            combo.value =
                                currentLanguage;


                            combo.dispatchEvent(
                                new Event(
                                    "change",
                                    {
                                        bubbles:true
                                    }
                                )
                            );

                        },
                        300
                    );

            }
        );


    translatorObserver.observe(
        ictContent,
        {
            childList:true,
            subtree:true
        }
    );

} 

window.addEventListener("load", function () {

    const loader = document.getElementById("pageLoader");

    setTimeout(function () {

        // Load the correct page/tool.
        // index.html has no data-initial-tool, so it opens Home.
        // Standalone tool pages can set data-initial-tool="quiz", "cpu", etc.
        const initialTool = document.body.dataset.initialTool || "home";

        if (initialTool === "home") {
            home();
        } else if (typeof loadTool === "function") {
            loadTool(initialTool);
        }

        // Mark the current tool as active if a menu exists.
        document.querySelectorAll(".nav-item").forEach(item => {
            item.classList.toggle(
                "active",
                item.dataset.tool === initialTool
            );
        });

        // Start the welcome page from the top
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });

        // Fade out and remove the loading screen
        if (loader) {
            loader.classList.add("loader-hide");

            setTimeout(function () {
                loader.remove();
            }, 500);
        }

    }, 2500);

});

/* ===== HOME FEATURE CARD PAGE ROUTING ===== */
document.addEventListener("click", function(e){
    const card = e.target.closest("[data-page]");
    if (!card) return;
    if (e.target.closest("a,button")) return;
    window.location.href = card.dataset.page;
});
