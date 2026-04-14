import { useState, useEffect } from "react";

const D = "\u2014";
const AR = "\u2192";
const BUL = "\u2022";

const TABS = [
  { id: "tree", label: "Skill Tree" },
  { id: "math", label: "Mathematics" },
  { id: "prog", label: "Programming" },
  { id: "finance", label: "Finance Deep" },
  { id: "systems", label: "Systems" },
  { id: "projects", label: "Build Portfolio" },
  { id: "books", label: "Reading List" },
  { id: "weekly", label: "Weekly System" },
  { id: "career", label: "Career Strategy" },
  { id: "elite", label: "Elite Edge" },
];

function Card({ title, tag, tagColor, children, startOpen }) {
  const [open, setOpen] = useState(startOpen || false);
  return (
    <div style={{
      borderRadius: 8, marginBottom: 8, overflow: "hidden",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", display: "flex", alignItems: "center", gap: 8,
        padding: "11px 14px", background: "none", border: "none",
        cursor: "pointer", textAlign: "left", fontFamily: "inherit",
      }}>
        <span style={{ flex: 1, fontSize: 13.5, fontWeight: 600, color: "#e2e8f0", letterSpacing: "-0.01em" }}>{title}</span>
        {tag && <span style={{
          fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", padding: "2px 7px",
          borderRadius: 3, background: tagColor || "rgba(56,189,248,0.15)", color: tagColor ? "#fff" : "#38bdf8",
          border: "1px solid " + (tagColor || "rgba(56,189,248,0.3)"),
        }}>{tag}</span>}
        <span style={{ color: "#64748b", fontSize: 14, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }}>{"\u25BE"}</span>
      </button>
      {open && <div style={{ padding: "2px 14px 14px", fontSize: 12.5, lineHeight: 1.75, color: "#94a3b8" }}>{children}</div>}
    </div>
  );
}

function P({ children }) { return <p style={{ margin: "6px 0" }}>{children}</p>; }
function B({ children }) { return <strong style={{ color: "#e2e8f0" }}>{children}</strong>; }
function H({ children }) { return <span style={{ color: "#38bdf8", fontWeight: 600 }}>{children}</span>; }

function Tier({ level, name, desc, color }) {
  return (
    <div style={{
      display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px",
      background: "rgba(255,255,255,0.02)", borderRadius: 6, marginBottom: 6,
      borderLeft: "3px solid " + color,
    }}>
      <div style={{
        fontSize: 10, fontWeight: 800, color, letterSpacing: "0.06em",
        minWidth: 70, paddingTop: 2,
      }}>{level}</div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0" }}>{name}</div>
        <div style={{ fontSize: 11.5, color: "#64748b", lineHeight: 1.6 }}>{desc}</div>
      </div>
    </div>
  );
}

function Track({ num, title, items, color }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <span style={{
          fontSize: 10, fontWeight: 800, width: 22, height: 22,
          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          background: color, color: "#0f172a",
        }}>{num}</span>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", letterSpacing: "-0.01em" }}>{title}</span>
      </div>
      <div style={{ paddingLeft: 30 }}>
        {items.map((item, i) => (
          <div key={i} style={{
            fontSize: 12, color: "#94a3b8", lineHeight: 1.7,
            padding: "3px 0", borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
          }}>{item}</div>
        ))}
      </div>
    </div>
  );
}

function Section({ id }) {
  if (id === "tree") return (
    <div>
      <div style={{ padding: 20, background: "rgba(56,189,248,0.05)", borderRadius: 10, border: "1px solid rgba(56,189,248,0.12)", marginBottom: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#38bdf8", marginBottom: 8 }}>The Complete Financial Engineer</div>
        <div style={{ fontSize: 12.5, color: "#94a3b8", lineHeight: 1.8 }}>
          {"A world-class quant sits at the intersection of four disciplines: deep mathematics, elite programming, sophisticated financial knowledge, and systems thinking. Most people are strong in one, decent in two. Being genuinely strong in all four is what makes you irreplaceable. Below is the complete skill tree " + D + " your map of everything that matters."}
        </div>
      </div>

      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#64748b", marginBottom: 10, paddingLeft: 2 }}>MASTERY TIERS</div>
      <Tier level="TIER 1" name="Foundation" desc={"You can explain concepts, solve textbook problems, implement basic models. " + D + " 70% of quant candidates stop here."} color="#22c55e" />
      <Tier level="TIER 2" name="Practitioner" desc={"You build production systems, debug novel problems, optimize for real constraints. " + D + " You get hired at good firms."} color="#38bdf8" />
      <Tier level="TIER 3" name="Expert" desc={"You design new models, identify flaws in existing ones, and bridge theory to practice uniquely. " + D + " You become a go-to person."} color="#a78bfa" />
      <Tier level="TIER 4" name="Elite" desc={"You create frameworks others use. You see connections across domains. You shape how a team or firm thinks about problems. " + D + " This is the target."} color="#f59e0b" />

      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#64748b", margin: "20px 0 10px", paddingLeft: 2 }}>THE FOUR PILLARS</div>

      <Card title={"Pillar 1: Mathematics " + D + " The Language"} tag="CORE" startOpen>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[
            ["Probability Theory", "Tier 3 required"],
            ["Stochastic Calculus", "Tier 3 required"],
            ["Linear Algebra", "Tier 2 minimum"],
            ["Numerical Methods", "Tier 3 required"],
            ["Optimization", "Tier 2 minimum"],
            ["Statistics & Estimation", "Tier 2 minimum"],
            ["Measure Theory", "Tier 2 target"],
            ["PDEs", "Tier 2 minimum"],
            ["Real Analysis", "Tier 1 minimum"],
            ["Information Theory", "Tier 1 useful"],
          ].map(([skill, tier], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "4px 8px", background: "rgba(255,255,255,0.02)", borderRadius: 4, fontSize: 11.5 }}>
              <span style={{ color: "#e2e8f0" }}>{skill}</span>
              <span style={{ color: "#64748b", fontSize: 10 }}>{tier}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card title={"Pillar 2: Programming " + D + " The Tool"} tag="CORE">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[
            ["Python (advanced)", "Tier 3 required"],
            ["Data Structures & Algos", "Tier 3 required"],
            ["C++ fundamentals", "Tier 2 target"],
            ["SQL (advanced)", "Tier 2 required"],
            ["System Design", "Tier 2 required"],
            ["OCaml/Functional", "Tier 1 useful"],
            ["Git + DevOps", "Tier 2 required"],
            ["Low-Latency Patterns", "Tier 1 useful"],
            ["Parallel Computing", "Tier 1 minimum"],
            ["Testing & Validation", "Tier 2 required"],
          ].map(([skill, tier], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "4px 8px", background: "rgba(255,255,255,0.02)", borderRadius: 4, fontSize: 11.5 }}>
              <span style={{ color: "#e2e8f0" }}>{skill}</span>
              <span style={{ color: "#64748b", fontSize: 10 }}>{tier}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card title={"Pillar 3: Finance " + D + " The Domain"} tag="CORE">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[
            ["Derivatives Pricing", "Tier 3 required"],
            ["Greeks & Risk Mgmt", "Tier 3 required"],
            ["Volatility Modeling", "Tier 3 required"],
            ["Fixed Income", "Tier 2 required"],
            ["Market Microstructure", "Tier 2 required"],
            ["Credit Risk", "Tier 2 target"],
            ["Exotic Structures", "Tier 2 required"],
            ["Portfolio Theory", "Tier 2 minimum"],
            ["Regulation (Basel/FRTB)", "Tier 1 minimum"],
            ["Energy/Commodity Markets", "Tier 2 (your edge)"],
          ].map(([skill, tier], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "4px 8px", background: "rgba(255,255,255,0.02)", borderRadius: 4, fontSize: 11.5 }}>
              <span style={{ color: "#e2e8f0" }}>{skill}</span>
              <span style={{ color: "#64748b", fontSize: 10 }}>{tier}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card title={"Pillar 4: Systems Thinking " + D + " The Differentiator"} tag="EDGE">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[
            ["Pricing Engine Arch", "Tier 2 (you have this)"],
            ["Trade Lifecycle", "Tier 3 (you have this)"],
            ["Data Pipelines", "Tier 2 target"],
            ["Model Validation", "Tier 2 required"],
            ["Backtesting Frameworks", "Tier 2 target"],
            ["Production ML Ops", "Tier 1 useful"],
            ["Risk Infrastructure", "Tier 2 target"],
            ["Real-time Systems", "Tier 1 minimum"],
          ].map(([skill, tier], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "4px 8px", background: "rgba(255,255,255,0.02)", borderRadius: 4, fontSize: 11.5 }}>
              <span style={{ color: "#e2e8f0" }}>{skill}</span>
              <span style={{ color: "#64748b", fontSize: 10 }}>{tier}</span>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ marginTop: 16, padding: 14, background: "rgba(245,158,11,0.08)", borderRadius: 8, border: "1px solid rgba(245,158,11,0.2)", fontSize: 12, color: "#fbbf24", lineHeight: 1.7 }}>
        <B>{"Your unique advantage:"}</B>{" Most quants come from pure math/CS and learn finance on the job. You come from finance ops + model development. You already understand WHY trades fail, HOW systems break, and WHAT clients actually need. That operational intuition is rare and extremely valuable at Tier 4."}
      </div>
    </div>
  );

  if (id === "math") return (
    <div>
      <div style={{ fontSize: 12.5, color: "#94a3b8", marginBottom: 16, lineHeight: 1.8 }}>
        {"Mathematics is not a subject you 'finish.' The best quants revisit fundamentals constantly, finding deeper understanding each time. Here is everything you need, organized by when to learn it and how deep to go."}
      </div>

      <Card title="Probability: From Intuition to Mastery" tag="MONTHS 1-4" tagColor="rgba(34,197,94,0.4)" startOpen>
        <Track num="1" title="Foundations (Weeks 1-4)" color="#22c55e" items={[
          "Counting: Permutations, combinations, multinomial coefficients, stars-and-bars, inclusion-exclusion, double counting",
          "Conditional probability: Chain rule, total probability, Bayes theorem " + D + " until it's reflexive, not calculated",
          "Random variables: PMF, PDF, CDF, joint/marginal distributions, independence vs uncorrelatedness (know the difference!)",
          "ALL standard distributions: Bernoulli, Binomial, Geometric, Negative Binomial, Hypergeometric, Poisson, Uniform, Exponential, Normal, Gamma, Beta, Chi-squared, t, F " + D + " for each know: mean, variance, MGF, when it arises naturally, relationship to other distributions",
        ]} />
        <Track num="2" title="Intermediate (Weeks 5-10)" color="#38bdf8" items={[
          "Expectation mastery: Linearity (even without independence), law of iterated expectations E[E[X|Y]]=E[X], indicator variable trick, LOTUS",
          "Variance: Var(aX+bY), conditional variance formula Var(X)=E[Var(X|Y)]+Var(E[X|Y]), covariance and correlation",
          "Generating functions: MGF to derive distribution of sums. PGF for discrete. Characteristic functions (Fourier) for heavy tails",
          "Convergence: In distribution, in probability, almost surely, in Lp " + D + " know which implies which",
          "Limit theorems: LLN (weak + strong), CLT (Lindeberg condition), Berry-Esseen bound for convergence rate",
          "Markov chains: Chapman-Kolmogorov, classification of states, stationary distributions, ergodic theorem, hitting/absorption times",
        ]} />
        <Track num="3" title="Advanced (Weeks 11-16)" color="#a78bfa" items={[
          "Martingales: Definition, optional stopping theorem, convergence, Doob's maximal inequality. Connection to fair games and pricing.",
          "Poisson processes: Merging, splitting, thinning. Connection to exponential. Compound Poisson for jump models.",
          "Order statistics: Distribution of max/min, joint density. Useful for barrier pricing intuition.",
          "Extreme value theory: GEV distribution (Gumbel, Frechet, Weibull). Tail estimation. Block maxima vs peaks-over-threshold.",
          "Concentration inequalities: Markov, Chebyshev, Hoeffding, Chernoff, Azuma. Critical for estimation and confidence bounds.",
        ]} />
        <P><H>{"Mastery test:"}</H>{" Can you solve 90% of the probability problems in Xinfeng Zhou's book in under 5 minutes each? If yes, you're Tier 2. If you can also create novel variations and solve those, you're approaching Tier 3."}</P>
      </Card>

      <Card title="Stochastic Calculus: The Heart of Quant Finance" tag="MONTHS 3-8" tagColor="rgba(56,189,248,0.4)">
        <Track num="1" title="Brownian Motion (Weeks 1-3)" color="#22c55e" items={[
          "Construction: Random walk limit, Donsker's invariance principle",
          "Properties: Independent increments, Gaussian, continuous paths, nowhere differentiable, unbounded variation, quadratic variation = t",
          "Key results: Reflection principle, maximum distribution, hitting times, Levy's characterization",
          "Exercises: Compute E[Bt^2], E[Bt*Bs], derive distribution of max(Bt) over [0,T]",
        ]} />
        <Track num="2" title={"Ito Calculus (Weeks 4-8)"} color="#38bdf8" items={[
          "Why Riemann fails: BM has infinite variation " + AR + " need a new integral. Ito's choice: evaluate at left endpoint",
          "Ito integral: Construction, properties (zero mean, isometry), martingale property",
          "Ito's lemma: The chain rule that changed finance. df = (df/dt + mu*df/dx + 0.5*sigma^2*d2f/dx2)dt + sigma*df/dx*dW",
          "Key applications: log(St) from GBM (shows log-normal), exponential martingale, Ornstein-Uhlenbeck process",
          "Stochastic differential equations: Existence/uniqueness (Lipschitz conditions), strong vs weak solutions",
          "Multi-dimensional Ito: Correlated Brownian motions, matrix formulation for basket/multi-asset models",
        ]} />
        <Track num="3" title="Measure Change and Pricing (Weeks 9-14)" color="#a78bfa" items={[
          "Radon-Nikodym derivative: How to change probability measures. The density process.",
          "Girsanov's theorem: Under new measure Q, drift changes but volatility stays. dWt_Q = dWt_P + theta*dt",
          "Risk-neutral pricing: E^Q[e^(-rT) * payoff]. WHY this works: replicating portfolio + no-arbitrage " + AR + " unique price",
          "Fundamental theorems of asset pricing: No arbitrage = existence of equivalent martingale measure. Complete market = uniqueness.",
          "Feynman-Kac: PDE solution = conditional expectation under diffusion. Bridges BS PDE and risk-neutral pricing.",
          "Numeraire change: Useful for pricing under different numeraires (forward measure for rates, stock measure for quantos)",
        ]} />
        <Track num="4" title="Beyond Black-Scholes (Weeks 15-20)" color="#f59e0b" items={[
          "Local volatility: Dupire's formula. Calibration to vanilla surface. Strengths (exact fit) and weaknesses (forward smile dynamics).",
          "Stochastic volatility: Heston model (CIR for variance, semi-analytic via characteristic function). SABR for rates/FX.",
          "Jump diffusion: Merton's model (Poisson jumps + GBM). Kou's double-exponential. Bates = Heston + jumps.",
          "Rough volatility: Fractional BM, rough Heston. Cutting-edge research " + D + " knowing this signals genuine depth.",
          "Free boundary problems: American options as optimal stopping. Variational inequalities. Early exercise boundary.",
        ]} />
      </Card>

      <Card title="Linear Algebra for Quant Applications" tag="MONTHS 2-4" tagColor="rgba(34,197,94,0.4)">
        <P><B>Not abstract theory " + D + " applied to real problems you will build:</B></P>
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>PCA for risk:</H>{" Eigendecomposition of correlation matrix " + AR + " principal risk factors. You'll use this to reduce 500 interest rate scenarios to 3 factors."}</li>
          <li><H>Cholesky decomposition:</H>{" Generate correlated Monte Carlo paths. If correlation matrix is C, L = chol(C), then Z_corr = L * Z_indep."}</li>
          <li><H>Positive definiteness:</H>{" WHY correlation matrices must be PD. How to fix a broken correlation matrix (nearest PD, eigenvalue clipping)."}</li>
          <li><H>SVD:</H>{" Dimensionality reduction, pseudo-inverse for regression, low-rank approximation. Used in model calibration."}</li>
          <li><H>Matrix calculus:</H>{" Gradient of portfolio variance w.r.t. weights. Needed for mean-variance optimization."}</li>
          <li><H>Sparse matrices:</H>{" Large-scale finite difference grids. Tri-diagonal solvers for implicit FD schemes."}</li>
        </ul>
      </Card>

      <Card title="Numerical Methods: Where Math Meets Code" tag="MONTHS 4-8" tagColor="rgba(56,189,248,0.4)">
        <Track num="1" title="Monte Carlo Methods" color="#22c55e" items={[
          "Basic MC: LLN gives convergence, CLT gives error rate (1/sqrt(N)). Always compute standard error.",
          "Variance reduction: Antithetic variates (negate the random draws), control variates (use known expectation of correlated variable), importance sampling (change measure to sample rare events), stratified sampling",
          "Path generation: Euler-Maruyama scheme, Milstein (higher order). Multi-step vs single-step for GBM.",
          "Quasi-Monte Carlo: Sobol and Halton sequences. Why they converge faster (O(1/N) vs O(1/sqrt(N))).",
          "Least-squares MC: Longstaff-Schwartz for American/Bermudan options. Regression basis functions.",
          "Greeks by MC: Finite difference bumping, pathwise method (IPA), likelihood ratio method. When each works.",
        ]} />
        <Track num="2" title="Finite Differences (PDE Solvers)" color="#38bdf8" items={[
          "Setup: Discretize BS PDE on (S,t) grid. Forward vs backward in time.",
          "Explicit scheme: Simple but conditionally stable (CFL condition). Fine for 1D.",
          "Implicit scheme (Crank-Nicolson): Unconditionally stable, second-order accurate. Industry standard.",
          "Boundary conditions: Dirichlet, Neumann, far-field asymptotic. How wrong boundaries corrupt the whole solution.",
          "ADI for multi-dimensional: Alternating Direction Implicit for 2D+ PDEs (basket options, stochastic vol).",
          "Coordinate transforms: Log-price grid for uniform density near ATM. Non-uniform grids for barriers.",
        ]} />
        <Track num="3" title="Calibration and Optimization" color="#a78bfa" items={[
          "Root finding: Newton-Raphson (for implied vol), bisection (robust fallback), Brent's method.",
          "Least squares: Levenberg-Marquardt for model calibration. Regularization to prevent overfitting.",
          "Global optimization: Differential evolution, simulated annealing for non-convex calibration (Heston, SABR).",
          "Convex optimization: Quadratic programming for portfolio optimization. SOCP for CVaR minimization.",
          "Interpolation: Cubic splines for vol surfaces. SABR/SVI parameterization. Arbitrage-free conditions.",
        ]} />
      </Card>

      <Card title="Statistics and Machine Learning for Quant" tag="MONTHS 6-10" tagColor="rgba(167,139,250,0.4)">
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>Time series:</H>{" AR, MA, ARMA, ARIMA, GARCH (essential for vol modeling), regime-switching models, cointegration"}</li>
          <li><H>Bayesian methods:</H>{" Prior/posterior, MCMC, conjugate priors. Bayesian parameter estimation for model calibration."}</li>
          <li><H>Regression:</H>{" OLS, Ridge, LASSO, elastic net. Cross-validation. Feature importance for factor models."}</li>
          <li><H>Tree models:</H>{" Random forests, gradient boosting (XGBoost/LightGBM). Used for credit scoring, trade failure prediction."}</li>
          <li><H>Neural networks:</H>{" LSTMs for time series, autoencoders for anomaly detection, deep hedging (Buehler et al.)."}</li>
          <li><H>Reinforcement learning:</H>{" Optimal execution (Almgren-Chriss model), market making as RL problem. Cutting edge."}</li>
          <li><H>Causal inference:</H>{" A/B testing for trading strategies, propensity scoring. Avoids overfitting to spurious correlations."}</li>
        </ul>
      </Card>
    </div>
  );

  if (id === "prog") return (
    <div>
      <div style={{ fontSize: 12.5, color: "#94a3b8", marginBottom: 16, lineHeight: 1.8 }}>
        {"Elite quants don't just 'know how to code.' They write production systems that handle billions of dollars. The bar is: could your code go live at a trading firm tomorrow?"}
      </div>

      <Card title="Python: From Script Writer to Systems Engineer" tag="TIER 3 TARGET" startOpen>
        <Track num="1" title="Language Mastery" color="#22c55e" items={[
          "Data model: Everything is an object. Mutability (list vs tuple). Hashing rules. Why dict is O(1).",
          "Memory: Reference counting + generational GC. __slots__ for memory reduction. sys.getsizeof().",
          "Generators and iterators: Lazy evaluation for large datasets. yield vs return. itertools for combinatorics.",
          "Decorators: @property, @classmethod, @staticmethod, custom decorators for timing/caching/retry.",
          "Context managers: __enter__/__exit__, contextlib. Essential for file/DB/connection handling.",
          "Type hints: Full typing module. Generic types. Protocol for structural subtyping. mypy for static checking.",
          "Metaclasses and descriptors: How ORMs and frameworks work. You probably won't build these, but understand them.",
        ]} />
        <Track num="2" title="Performance Engineering" color="#38bdf8" items={[
          "NumPy internals: C-contiguous memory, vectorization, broadcasting rules. Why 100x faster than loops.",
          "Avoiding copies: np.view vs np.copy. In-place operations. Memory profiling with memory_profiler.",
          "Numba JIT: @njit for hot loops. Ahead-of-time compilation. When it works vs when it doesn't.",
          "Cython: For C-level speed in Python. Write extension modules. Typed memoryviews.",
          "Multiprocessing: Bypass GIL. Pool, Process, shared memory. concurrent.futures for clean API.",
          "Async: asyncio for IO-bound tasks (API calls, DB queries). Not useful for compute-bound work.",
          "Profiling: cProfile, line_profiler, py-spy for production profiling. Always measure before optimizing.",
        ]} />
        <Track num="3" title="Quant Python Stack" color="#a78bfa" items={[
          "numpy: Master broadcasting, fancy indexing, structured arrays, np.einsum for tensor operations",
          "pandas: MultiIndex, groupby internals, .pipe() for clean chains, categorical for memory. Avoid iterrows().",
          "scipy: optimize (minimize, root_scalar), stats (distributions, hypothesis tests), interpolate (splines), linalg",
          "QuantLib-Python: Industry standard. Yield curves, swap pricing, vol surfaces, exotic pricers. Learn the architecture.",
          "polars: Modern alternative to pandas. Lazy evaluation, multi-threaded. 10-100x faster for large datasets.",
          "plotly/matplotlib: Interactive vol surfaces, Greek heatmaps, P&L attribution charts.",
        ]} />
      </Card>

      <Card title="C++: The Performance Language" tag="MONTHS 5-10">
        <P><B>{"You don't need to be a C++ expert for most quant roles. But understanding it opens doors to HFT, sell-side pricing libraries, and senior positions."}</B></P>
        <Track num="1" title="Essential C++ for Quants" color="#22c55e" items={[
          "Memory model: Stack vs heap, RAII, smart pointers (unique_ptr, shared_ptr). No raw new/delete.",
          "STL containers: vector, map, unordered_map, set, priority_queue. Know time complexities cold.",
          "OOP: Virtual functions, polymorphism, abstract classes. Design a class hierarchy for option types.",
          "Templates: Generic programming. Write a templated Matrix class. Template specialization basics.",
          "Move semantics: Rvalue references, std::move, perfect forwarding. Why this matters for performance.",
          "Const correctness: const references, const methods, constexpr. Signals intent and prevents bugs.",
        ]} />
        <Track num="2" title="Performance Patterns" color="#38bdf8" items={[
          "Cache friendliness: Structure of Arrays vs Array of Structures. Data-oriented design.",
          "Avoid virtual function overhead in hot loops: CRTP (Curiously Recurring Template Pattern).",
          "Memory allocation: Custom allocators, memory pools for high-frequency allocation patterns.",
          "Multithreading: std::thread, mutex, atomic, condition_variable. Lock-free data structures.",
          "Compiler optimization: -O2/-O3, link-time optimization, profile-guided optimization.",
        ]} />
      </Card>

      <Card title="Data Structures and Algorithms: The Interview Gate" tag="200+ PROBLEMS">
        <P><B>{"Pattern-based approach. Don't grind randomly " + D + " master patterns, then recognize them in new problems."}</B></P>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, margin: "8px 0" }}>
          {[
            ["Two Pointers", "20 problems", "Sorted arrays, palindromes, container problems"],
            ["Sliding Window", "15 problems", "Subarray/substring with constraint"],
            ["Hash Maps", "20 problems", "Frequency, two-sum, grouping"],
            ["Binary Search", "15 problems", "Sorted + monotonic = binary search"],
            ["Stacks", "15 problems", "Monotonic stack, bracket matching, expression eval"],
            ["Trees/DFS/BFS", "25 problems", "Traversal, path sum, serialization"],
            ["Dynamic Programming", "45 problems", "THE most important pattern. Knapsack, LCS, grid"],
            ["Graphs", "20 problems", "Shortest path, topological sort, union-find"],
            ["Heaps", "10 problems", "Top-K, merge sorted, median stream"],
            ["Backtracking", "10 problems", "Permutations, combinations, constraint satisfaction"],
          ].map(([pattern, count, desc], i) => (
            <div key={i} style={{ padding: "8px 10px", background: "rgba(255,255,255,0.02)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0" }}>{pattern}</span>
                <span style={{ fontSize: 10, color: "#38bdf8" }}>{count}</span>
              </div>
              <div style={{ fontSize: 10.5, color: "#64748b", marginTop: 2 }}>{desc}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="SQL: Beyond SELECT *" tag="TIER 2 TARGET">
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>Window functions:</H>{" ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD, running sums/averages, NTILE"}</li>
          <li><H>CTEs:</H>{" Recursive CTEs for hierarchical data (org structures, trade chains). WITH clause for readability."}</li>
          <li><H>Analytical queries:</H>{" PIVOT/UNPIVOT, GROUPING SETS, CUBE, ROLLUP for multi-dimensional aggregation"}</li>
          <li><H>Performance:</H>{" Explain plans, index types (B-tree, hash, bitmap), partitioning strategies, materialized views"}</li>
          <li><H>Quant patterns:</H>{" Time-weighted returns, drawdown calculation, rolling correlations, VWAP, trade lifecycle queries"}</li>
          <li><H>Snowflake/cloud:</H>{" You already know Snowflake. Add: warehouse sizing, clustering keys, zero-copy clones for test environments."}</li>
        </ul>
      </Card>
    </div>
  );

  if (id === "finance") return (
    <div>
      <Card title="Derivatives Pricing: The Complete Framework" tag="CORE MASTERY" startOpen>
        <Track num="1" title="Vanilla Options (Know Absolutely Cold)" color="#22c55e" items={[
          "Black-Scholes: 3 derivations (delta-hedging PDE, risk-neutral expectation, replicating portfolio). All assumptions and which break in practice.",
          "Put-Call Parity: Derive from no-arbitrage. Use to spot mispricing. Extend to dividends, FX, futures.",
          "Binomial model: CRR parameterization. Risk-neutral probability. Convergence to BS. American pricing via backward induction.",
          "Greeks: Delta (hedge ratio, digital approximation), Gamma (P&L from rehedging, gamma scalping), Theta (daily decay), Vega (parallel vol bump), Rho, Vanna, Volga.",
          "Greek interactions: Gamma-theta tradeoff. Vanna-volga method for exotic pricing. Pin risk near expiry.",
          "Early exercise: When optimal for American calls (dividends) and puts (deep ITM). Critical stock price boundary.",
        ]} />
        <Track num="2" title="Volatility: The Most Important Variable" color="#38bdf8" items={[
          "Historical vol: Close-to-close, Parkinson (high-low), Garman-Klass, Yang-Zhang. Which is most efficient?",
          "Implied vol: Newton-Raphson extraction. Brenner-Subrahmanyam approximation. Jaeckel's rational approximation (state of art).",
          "Vol surface: Strike (smile/skew) and term structure. SVI parameterization. Arbitrage-free conditions (Butterfly and calendar spreads).",
          "Local vol: Dupire's formula. Calibration to vanillas. Forward smile dynamics (why it fails for exotics).",
          "Stochastic vol: Heston (closed-form via characteristic function, Fourier inversion). SABR (asymptotic formula, backbone). Bergomi.",
          "Realized vs implied: Variance risk premium. Volatility trading strategies (straddles, variance swaps).",
          "VIX: Not ATM IV! It's sqrt(2/T * integral of OTM option prices / K^2). Replication by strip of options.",
        ]} />
        <Track num="3" title="Exotic Options" color="#a78bfa" items={[
          "Barriers: Up/down, in/out. Reflection principle for closed-form. Rebates. Discrete monitoring adjustment.",
          "Asians: Arithmetic (no closed-form, use MC) vs geometric (closed-form, use as control variate). Turnbull-Wakeman approx.",
          "Lookbacks: Fixed vs floating strike. Connection to running maximum of BM. Very path-dependent.",
          "Digitals/binaries: Cash-or-nothing, asset-or-nothing. Greeks are spiky near barrier. Overhedge/underhedge replication.",
          "Basket options: Multi-asset. Correlation is the key parameter. Worst-of, best-of, rainbow.",
          "Cliquets: Forward-starting options chained together. Local vol vs stochastic vol gives very different prices.",
          "Autocallables: Conditional early redemption. Path-dependent. Huge in structured products market.",
        ]} />
        <Track num="4" title="Interest Rate Derivatives" color="#f59e0b" items={[
          "Yield curves: Bootstrapping from instruments (deposits, futures, swaps). Interpolation (log-linear, cubic spline).",
          "Duration and convexity: Modified, Macaulay, effective. Dollar duration. Key rate durations.",
          "Swaps: IRS pricing via forward rates. Swap spread. OIS discounting post-2008 (multi-curve framework).",
          "Short rate models: Vasicek (mean-reverting, allows negative rates), CIR (non-negative), Hull-White (time-dependent).",
          "HJM framework: Model entire forward curve. Drift restriction from no-arbitrage. LIBOR Market Model (BGM).",
          "Swaptions, caps/floors: Black's formula for caplets. Swaption pricing via annuity numeraire.",
        ]} />
      </Card>

      <Card title="Risk Management: Protecting the Firm" tag="YOUR EDGE">
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>VaR:</H>{" Parametric (fast, assumes normality), Historical (non-parametric, uses actual returns), Monte Carlo (flexible, handles nonlinear). Backtesting: Kupiec, Christoffersen."}</li>
          <li><H>Expected Shortfall:</H>{" = CVaR = average loss beyond VaR. Coherent risk measure (subadditive). Basel requirement."}</li>
          <li><H>Stress testing:</H>{" Historical scenarios (2008, COVID), hypothetical scenarios, reverse stress tests (what kills us?)."}</li>
          <li><H>Counterparty risk:</H>{" CVA (credit valuation adjustment), DVA, FVA. Exposure profiles: EE, PFE, EPE. Wrong-way risk."}</li>
          <li><H>Model risk:</H>{" Model validation framework. Benchmarking. Sensitivity analysis. P&L attribution and explain."}</li>
          <li><H>Liquidity risk:</H>{" Bid-ask spread risk, market impact models (Almgren-Chriss), funding liquidity vs market liquidity."}</li>
        </ul>
      </Card>

      <Card title="Market Microstructure" tag="TRADING EDGE">
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>Order book dynamics:</H>{" Limit orders, market orders, hidden orders. Queue priority. Make vs take."}</li>
          <li><H>Price formation:</H>{" Glosten-Milgrom (information asymmetry), Kyle's lambda (market impact), Roll's model (bid-ask from serial covariance)."}</li>
          <li><H>Market making theory:</H>{" Avellaneda-Stoikov model. Inventory management. Optimal quoting."}</li>
          <li><H>Transaction costs:</H>{" Implementation shortfall. Almgren-Chriss optimal execution. VWAP/TWAP strategies."}</li>
          <li><H>ETF arbitrage:</H>{" Creation/redemption. NAV tracking. This is Jane Street's bread and butter."}</li>
        </ul>
      </Card>

      <Card title="Energy and Commodity Markets" tag="YOUR NICHE">
        <P><B>{"This is where you build a moat. Your Beacon experience with emissions and energy futures puts you ahead of 95% of quants."}</B></P>
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>Forward curves:</H>{" Seasonality, convenience yield, storage costs. Contango vs backwardation. Calendar spread dynamics."}</li>
          <li><H>Spread options:</H>{" Crack spreads (oil), spark spreads (power/gas), dark spreads (power/coal). Margrabe formula and extensions."}</li>
          <li><H>Real options:</H>{" Power plant valuation as strip of spread options. Tolling agreements. Swing options."}</li>
          <li><H>Renewable energy certificates:</H>{" You already work with RECs. Pricing, compliance obligations, banking rules."}</li>
          <li><H>Mean reversion:</H>{" Energy prices mean-revert (unlike stocks). Ornstein-Uhlenbeck process. Schwartz models."}</li>
          <li><H>Carbon markets:</H>{" EU ETS, compliance carbon, voluntary carbon. Rapidly growing " + D + " massive opportunity."}</li>
        </ul>
      </Card>
    </div>
  );

  if (id === "systems") return (
    <div>
      <div style={{ fontSize: 12.5, color: "#94a3b8", marginBottom: 16, lineHeight: 1.8 }}>
        {"The best quant in the world is useless if their models can't run in production. Systems thinking is what separates a researcher from a financial engineer."}
      </div>

      <Card title="Pricing Engine Architecture" tag="YOU KNOW THIS" startOpen>
        <P>{"You've built on Beacon. Now articulate the design decisions:"}</P>
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>DAG computation:</H>{" Pricing as directed acyclic graph. Dependency resolution. Incremental recalculation (only recompute what changed)."}</li>
          <li><H>Market data layer:</H>{" Snapping, interpolation, fallback logic. Real-time vs end-of-day. Time zones matter."}</li>
          <li><H>Model registry:</H>{" Version control for models. A/B testing new vs old. Rollback capability."}</li>
          <li><H>Caching strategy:</H>{" Cache invalidation triggers (new market data, curve rebuild, config change). LRU vs TTL."}</li>
          <li><H>Batch vs real-time:</H>{" End-of-day full revaluation vs intraday delta-based updates. When each is appropriate."}</li>
          <li><H>Scalability:</H>{" Horizontal scaling for MC simulations. GPU acceleration for large portfolios."}</li>
        </ul>
      </Card>

      <Card title="Data Infrastructure" tag="BUILD THIS">
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>Time-series databases:</H>{" kdb+/q (industry standard for tick data), InfluxDB, TimescaleDB. Why not regular SQL for tick data."}</li>
          <li><H>Event streaming:</H>{" Kafka for trade events, market data distribution. Pub/sub patterns. Exactly-once semantics."}</li>
          <li><H>Data quality:</H>{" Validation rules, anomaly detection on market data, reconciliation between sources. Great Expectations framework."}</li>
          <li><H>ETL pipelines:</H>{" Airflow/Prefect for orchestration. Idempotent tasks. Backfill strategies."}</li>
          <li><H>Data lake:</H>{" Raw " + AR + " cleaned " + AR + " curated layers. Parquet format. Partitioning by date/asset."}</li>
        </ul>
      </Card>

      <Card title="Model Validation and Governance" tag="SENIOR SKILL">
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>Independent validation:</H>{" Replicate model from spec. Compare outputs. Statistical tests for deviation."}</li>
          <li><H>Benchmarking:</H>{" Compare your model to QuantLib, Bloomberg DLIB, or analytical solutions."}</li>
          <li><H>P&L attribution:</H>{" Decompose daily P&L into Greeks (delta P&L, gamma P&L, theta, vega, unexplained). Unexplained must be small."}</li>
          <li><H>Sensitivity analysis:</H>{" Bump-and-reprice for all inputs. Identify which parameters the model is most sensitive to."}</li>
          <li><H>Documentation:</H>{" Model documentation that a regulator can understand. Assumptions, limitations, conditions for use."}</li>
          <li><H>Backtesting:</H>{" Out-of-sample testing. Walk-forward analysis. Avoid look-ahead bias."}</li>
        </ul>
      </Card>

      <Card title="Production Best Practices" tag="DIFFERENTIATOR">
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>Testing:</H>{" Unit tests for every pricing function. Integration tests for end-to-end flows. Property-based testing (Hypothesis) for edge cases."}</li>
          <li><H>CI/CD:</H>{" Automated model validation on every commit. Regression testing against known prices."}</li>
          <li><H>Monitoring:</H>{" Alerting on model performance degradation, data quality issues, pricing outliers."}</li>
          <li><H>Logging:</H>{" Structured logging for audit trails. Every price should be reproducible from logged inputs."}</li>
          <li><H>Configuration:</H>{" Externalize model parameters. Feature flags for gradual rollout. Environment-specific configs."}</li>
        </ul>
      </Card>
    </div>
  );

  if (id === "projects") return (
    <div>
      <div style={{ fontSize: 12.5, color: "#94a3b8", marginBottom: 16, lineHeight: 1.8 }}>
        {"Knowledge without application is just trivia. These projects transform you from 'I studied this' to 'I built this.' Each one is a portfolio piece and interview conversation starter."}
      </div>

      {[
        {
          num: "01", title: "Complete Options Pricing Library",
          time: "Months 1-4", diff: "Foundation",
          desc: "Build from scratch in Python. BS closed-form, binomial trees, MC with variance reduction, finite differences. Full Greeks. Implied vol solver. Compare your outputs to QuantLib.",
          skills: "Stochastic calculus, numerical methods, Python engineering, testing",
          why: "This is your proof that you understand pricing from first principles, not just API calls.",
        },
        {
          num: "02", title: "Volatility Surface Builder",
          time: "Months 3-6", diff: "Intermediate",
          desc: "Ingest real options data (CBOE delayed quotes or Yahoo Finance). Build implied vol surface. Fit SVI parameterization. Check arbitrage-free conditions. Visualize in 3D. Implement local vol via Dupire.",
          skills: "Vol modeling, calibration, optimization, data handling, visualization",
          why: "Every quant firm builds vol surfaces. Showing you can do it end-to-end is extremely impressive.",
        },
        {
          num: "03", title: "Monte Carlo Engine with Greek Calculation",
          time: "Months 4-7", diff: "Intermediate",
          desc: "Configurable MC engine: multiple underlyings, correlated paths (Cholesky), exotic payoffs (barrier, Asian, lookback). Greeks via bump-reprice, pathwise, and likelihood ratio. Performance benchmarks.",
          skills: "MC methods, correlation, path dependency, performance optimization",
          why: "MC is the workhorse of derivatives pricing. A well-engineered MC engine is the most useful thing you can build.",
        },
        {
          num: "04", title: "Market Making Simulator",
          time: "Months 5-8", diff: "Advanced",
          desc: "Simulate an order book with informed and noise traders. Implement Avellaneda-Stoikov market making strategy. Track P&L, inventory risk, Sharpe ratio. Optimize spread and inventory limits.",
          skills: "Market microstructure, simulation, strategy development, risk management",
          why: "Directly relevant to trading firm interviews. Shows you understand the business, not just the math.",
        },
        {
          num: "05", title: "Yield Curve Bootstrapper + Swap Pricer",
          time: "Months 6-9", diff: "Intermediate",
          desc: "Bootstrap a yield curve from deposit rates, futures, and swap rates. Interpolate (log-linear, cubic). Price vanilla swaps, FRAs, caps. Implement OIS discounting (multi-curve).",
          skills: "Fixed income, curve construction, interpolation, multi-curve framework",
          why: "Fixed income is 70%+ of the derivatives market. Every firm needs people who understand curves.",
        },
        {
          num: "06", title: "Risk Engine: VaR + Stress Testing",
          time: "Months 7-10", diff: "Advanced",
          desc: "Portfolio-level VaR (parametric, historical simulation, MC). Expected Shortfall. Backtesting with Kupiec and Christoffersen. Historical stress scenarios (2008, 2020). Sensitivity reports.",
          skills: "Risk modeling, portfolio theory, statistics, reporting",
          why: "Connects your BlackRock risk experience to rigorous quantitative implementation.",
        },
        {
          num: "07", title: "Heston Model Calibration Engine",
          time: "Months 8-11", diff: "Advanced",
          desc: "Implement Heston characteristic function pricing (Fourier inversion). Calibrate to real vol surface using Levenberg-Marquardt. Compare to market prices. Analyze parameter sensitivity.",
          skills: "Stochastic vol, Fourier methods, calibration, optimization",
          why: "Heston is the industry standard stochastic vol model. Calibrating it from scratch signals deep understanding.",
        },
        {
          num: "08", title: "Energy Derivatives Pricing Platform",
          time: "Months 9-12", diff: "Expert",
          desc: "Price energy spread options (spark/crack spreads), swing options, storage contracts. Model mean-reverting processes (Schwartz). Seasonal forward curves. Carbon credit pricing.",
          skills: "Commodity modeling, real options, your Beacon domain expertise",
          why: "This is YOUR niche. No one else applying to quant roles has your specific energy derivatives experience. Make it your crown jewel.",
        },
      ].map((p, i) => (
        <Card key={i} title={p.num + " " + D + " " + p.title} tag={p.time} tagColor={i < 3 ? "rgba(34,197,94,0.4)" : i < 6 ? "rgba(56,189,248,0.4)" : "rgba(245,158,11,0.4)"}>
          <P>{p.desc}</P>
          <P><H>Skills demonstrated:</H>{" " + p.skills}</P>
          <P><B>Why it matters:</B>{" " + p.why}</P>
        </Card>
      ))}

      <div style={{ marginTop: 12, padding: 14, background: "rgba(56,189,248,0.08)", borderRadius: 8, border: "1px solid rgba(56,189,248,0.2)", fontSize: 12, color: "#94a3b8", lineHeight: 1.7 }}>
        <B>GitHub portfolio structure:</B>{" Create a repo called 'quant-engine' or similar. Clean README with architecture diagram. Each project as a module. Jupyter notebooks showing results. This becomes your most powerful interview asset."}
      </div>
    </div>
  );

  if (id === "books") return (
    <div>
      <div style={{ fontSize: 12.5, color: "#94a3b8", marginBottom: 16, lineHeight: 1.8 }}>
        {"Prioritized by impact. Read in order within each category. Quality of study matters more than quantity " + D + " one chapter deeply understood beats five skimmed."}
      </div>

      {[
        { cat: "PROBABILITY AND INTERVIEWS", items: [
          ["A Practical Guide to Quant Interviews", "Xinfeng Zhou", "THE interview prep bible. Every problem. No exceptions.", "Month 1"],
          ["Heard on the Street", "Timothy Crack", "Brain teasers, mental math, probability puzzles.", "Month 1-2"],
          ["Introduction to Probability", "Blitzstein & Hwang", "Harvard Stat 110. Best probability textbook written. Free lectures on YouTube.", "Month 1-4"],
          ["Fifty Challenging Problems", "Frederick Mosteller", "Short, deep, elegant. Perfect for daily problem practice.", "Month 3-6"],
        ]},
        { cat: "STOCHASTIC CALCULUS AND PRICING", items: [
          ["Options, Futures, and Other Derivatives", "John Hull", "The industry bible. Ch 1-25. Every quant has read this.", "Month 2-6"],
          ["Paul Wilmott Introduces Quantitative Finance", "Paul Wilmott", "More intuitive than Shreve. Great for building understanding before rigor.", "Month 2-4"],
          ["Stochastic Calculus for Finance I & II", "Steven Shreve", "The rigorous treatment. Vol I (discrete) then Vol II (continuous).", "Month 3-8"],
          ["The Concepts and Practice of Mathematical Finance", "Mark Joshi", "Excellent bridge between theory and practice. Great on exotics.", "Month 5-9"],
          ["The Volatility Surface", "Jim Gatheral", "THE book on vol modeling. Local vol, stochastic vol, SVI.", "Month 6-10"],
        ]},
        { cat: "PROGRAMMING AND SYSTEMS", items: [
          ["Cracking the Coding Interview", "Gayle McDowell", "DS&A fundamentals. Solve alongside LeetCode.", "Month 1-3"],
          ["Effective Python", "Brett Slatkin", "90 practices for better Python. Read cover to cover.", "Month 2-4"],
          ["A Tour of C++", "Bjarne Stroustrup", "Concise intro by the creator. Then 'Effective Modern C++' (Scott Meyers).", "Month 5-8"],
          ["Real World OCaml", "Minsky, Madhavapeddy, Hickey", "If targeting Jane Street. Free online. First 8 chapters.", "Month 7-10"],
        ]},
        { cat: "MARKET MAKING AND TRADING", items: [
          ["Trading and Exchanges", "Larry Harris", "Market microstructure bible. How markets actually work.", "Month 4-7"],
          ["Thinking in Bets", "Annie Duke", "Decision-making under uncertainty. Changes how you think.", "Month 3"],
          ["Algorithmic Trading and DMA", "Barry Johnson", "Execution algorithms, market impact, transaction cost analysis.", "Month 7-10"],
          ["Market Microstructure in Practice", "Lehalle & Laruelle", "Modern treatment with real data examples.", "Month 8-11"],
        ]},
        { cat: "THINKING AND MINDSET", items: [
          ["Thinking, Fast and Slow", "Daniel Kahneman", "Cognitive biases. Essential for any decision-maker.", "Month 2"],
          ["Fooled by Randomness", "Nassim Taleb", "Why we mistake luck for skill. Humbling and essential.", "Month 4"],
          ["How Not to Be Wrong", "Jordan Ellenberg", "Mathematical thinking applied to everyday reasoning.", "Month 5"],
          ["The Signal and the Noise", "Nate Silver", "Prediction, uncertainty, and calibration.", "Month 6"],
          ["Good Strategy Bad Strategy", "Richard Rumelt", "Strategic thinking framework. Useful beyond finance.", "Month 8"],
        ]},
      ].map((section, si) => (
        <Card key={si} title={section.cat} tag={section.items.length + " BOOKS"} startOpen={si === 0}>
          {section.items.map(([title, author, desc, when], i) => (
            <div key={i} style={{
              display: "flex", gap: 10, padding: "8px 0",
              borderBottom: i < section.items.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
            }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#38bdf8", minWidth: 20 }}>{i + 1}</span>
              <div>
                <div style={{ fontSize: 12.5, color: "#e2e8f0" }}><B>{title}</B>{" " + D + " " + author}</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>{desc}</div>
                <div style={{ fontSize: 10, color: "#38bdf8", marginTop: 2 }}>{when}</div>
              </div>
            </div>
          ))}
        </Card>
      ))}
    </div>
  );

  if (id === "weekly") return (
    <div>
      <div style={{ padding: 16, background: "rgba(56,189,248,0.05)", borderRadius: 10, border: "1px solid rgba(56,189,248,0.12)", marginBottom: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#38bdf8", marginBottom: 4 }}>The System That Builds Champions</div>
        <div style={{ fontSize: 12.5, color: "#94a3b8", lineHeight: 1.8 }}>
          {"Consistency compounds. 3 focused hours daily for a year = 940 hours. That's more deliberate practice than most people put into their entire career. The system below is designed for someone working full-time."}
        </div>
      </div>

      <Card title="Daily Schedule (Weekdays, 3 hours)" tag="NON-NEGOTIABLE" startOpen>
        {[
          ["06:30-07:00", "Mental Math + Warm-up", "Zetamac (15 min) + 2 probability brain teasers. BEFORE anything else. This primes your analytical mind for the day.", "#22c55e"],
          ["12:30-13:00", "Theory Reading", "10-15 pages of current textbook. Active reading: take notes, work examples, pause and derive before reading the derivation.", "#38bdf8"],
          ["19:00-20:00", "Deep Study Block", "The most important hour. Proofs, derivations, textbook exercises. Single topic focus. No phone. No interruptions. Timer running.", "#a78bfa"],
          ["20:15-21:15", "Implementation Block", "MWF: LeetCode (2-3 problems by pattern). TTh: Build project code. Write tests. Commit to GitHub.", "#f59e0b"],
        ].map(([time, name, desc, color], i) => (
          <div key={i} style={{
            display: "flex", gap: 12, padding: "10px 0",
            borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none",
          }}>
            <div style={{ minWidth: 90 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color }}>{time}</div>
              <div style={{ fontSize: 10, color: "#64748b" }}>{name}</div>
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.7 }}>{desc}</div>
          </div>
        ))}
      </Card>

      <Card title="Saturday Deep Dive (4-5 hours)" tag="WEEKLY" startOpen>
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>{"2 hours " + D + " Weekly Project Sprint:"}</H>{" Focused coding on your current portfolio project. Ship something tangible every Saturday."}</li>
          <li><H>{"1 hour " + D + " Mock Interview:"}</H>{" With friend, interviewing.io, or self-recorded. Alternate: math week, coding week, trading game week."}</li>
          <li><H>{"1 hour " + D + " Strategic Games:"}</H>{" Poker night, chess, backgammon. Train probabilistic intuition in a fun way."}</li>
          <li><H>{"30 min " + D + " Weekly Review:"}</H>{" What did I learn? What's still unclear? Adjust next week's focus. Update your progress tracker."}</li>
        </ul>
      </Card>

      <Card title="Sunday: REST" tag="MANDATORY">
        <P>{"No studying. No coding. Your brain consolidates and creates connections during rest. Exercise, socialize, pursue non-finance interests. People who skip rest plateau faster and burn out. This is neuroscience, not laziness."}</P>
      </Card>

      <Card title="Monthly Rituals" tag="REVIEW" startOpen>
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>Month-end assessment:</H>{" Take a 'practice exam' " + D + " 10 probability problems, 3 LeetCode mediums, 1 pricing derivation, timed. Track scores over time."}</li>
          <li><H>Topic rotation:</H>{" Shift primary study focus monthly. Don't study the same topic for 3 months straight " + D + " interleaving improves long-term retention."}</li>
          <li><H>Spaced repetition:</H>{" Review old topics every 4 weeks. Use Anki for key formulas, distributions, derivation steps."}</li>
          <li><H>Network:</H>{" One coffee chat per month with someone in quant finance. LinkedIn, QuantNet forums, local meetups."}</li>
          <li><H>Write:</H>{" Publish one blog post or LinkedIn article per month explaining a concept you learned. Teaching solidifies knowledge AND builds visibility."}</li>
        </ul>
      </Card>

      <Card title="Progress Tracking Dashboard" tag="12 MONTHS" startOpen>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                {["Mo", "Math Focus", "Finance Focus", "Coding", "Project", "ZM"].map((h, i) => (
                  <th key={i} style={{ padding: "6px 8px", textAlign: "left", color: "#38bdf8", fontWeight: 700, fontSize: 10 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Probability I", "Hull Ch 1-8", "50 LC Easy", "#01 Start", "40+"],
                ["2", "Probability II + LinAlg", "Hull Ch 9-15", "LC Medium", "#01 Greeks", "50+"],
                ["3", "Stochastic Calc I", "BS Derivation", "DP focus", "#01 Complete", "55+"],
                ["4", "Stochastic Calc II", "Vol surface", "Trees+Graphs", "#02 Start", "60+"],
                ["5", "Numerical Methods", "Exotics", "LC Hard start", "#02+03", "70+"],
                ["6", "Statistics", "Mkt Microstructure", "SQL deep", "#03+04", "75+"],
                ["7", "Measure Theory", "Fixed Income", "C++ basics", "#04+05", "80+"],
                ["8", "Advanced Prob", "Risk Mgmt", "System Design", "#05+06", "85+"],
                ["9", "Review + Gaps", "Energy Deriv", "OCaml start", "#07", "90+"],
                ["10", "Interview Drill", "Portfolio theory", "Mock coding", "#08", "95+"],
                ["11", "Peak prep", "Full review", "Speed rounds", "Polish all", "100+"],
                ["12", "Maintain", "Maintain", "Maintain", "Ship portfolio", "100+"],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                  {row.map((c, j) => (
                    <td key={j} style={{ padding: "6px 8px", color: j === 0 ? "#38bdf8" : "#94a3b8", fontWeight: j === 0 ? 700 : 400, fontSize: 11 }}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  if (id === "career") return (
    <div>
      <Card title="Where You Fit: Firm Type Analysis" tag="BE STRATEGIC" startOpen>
        {[
          { type: "Prop Trading (Jane Street, Optiver, SIG)", fit: "STRETCH", fitColor: "#f59e0b",
            desc: "Heaviest on math speed, brain teasers, trading games. Hire mostly from math/CS olympiad backgrounds. Your path: outprepare on math, lean on market experience as differentiator.",
            action: "Apply months 10-12 after full prep. Take warm-up interviews at smaller shops first." },
          { type: "Hedge Fund Quant (Citadel, Two Sigma, DE Shaw)", fit: "STRONG FIT", fitColor: "#22c55e",
            desc: "Value production experience + math depth. Your Beacon model development + Python skills align well. Research roles need PhDs, but quant dev/engineer roles are open to your profile.",
            action: "Target quant developer and financial engineer roles. Emphasize production model experience." },
          { type: "Bank Quant Desk (Goldman Strats, JPM QR, Barclays)", fit: "STRONG FIT", fitColor: "#22c55e",
            desc: "Most accessible path. Value domain expertise + coding. Your derivatives ops + CFA progression shows commitment. Banks have the widest range of quant roles.",
            action: "Apply months 8-10. Network with people in specific desks (rates, commodities, risk)." },
          { type: "Energy/Commodity Trading", fit: "BEST FIT", fitColor: "#38bdf8",
            desc: "YOUR sweet spot. Beacon energy derivatives + emissions + RECs experience is directly relevant. Firms: BP Trading, Shell Trading, Vitol, Trafigura, Mercuria quant teams.",
            action: "Apply months 6-8. You may not even need full 12 months for these roles. Your domain expertise is your moat." },
          { type: "Fintech Quant (Bloomberg, Numerix, MSCI, Beacon)", fit: "STRONG FIT", fitColor: "#22c55e",
            desc: "Build pricing/risk platforms. Your exact current experience scaled up. Less interview pressure, more focus on engineering quality.",
            action: "Apply anytime. These roles value production experience highly. Great stepping stones." },
        ].map((f, i) => (
          <div key={i} style={{
            padding: "12px 14px", marginBottom: 8,
            background: "rgba(255,255,255,0.02)", borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.06)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0" }}>{f.type}</span>
              <span style={{ fontSize: 9, fontWeight: 700, color: f.fitColor, letterSpacing: "0.06em" }}>{f.fit}</span>
            </div>
            <P>{f.desc}</P>
            <P><H>Action:</H>{" " + f.action}</P>
          </div>
        ))}
      </Card>

      <Card title="Resume Optimization" tag="BEFORE APPLYING">
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>Quantify everything:</H>{" 'Reduced workload by 10 hrs/week' is good. 'Automated reconciliation of $2B+ in derivative positions, reducing operational risk by 40%' is better."}</li>
          <li><H>Lead with technical impact:</H>{" 'Developed derivatives pricing models for energy futures and emissions instruments' should be your first bullet."}</li>
          <li><H>Add your projects:</H>{" GitHub portfolio link. 'Built from-scratch options pricing library with MC, FD, and analytical methods.'"}</li>
          <li><H>Certifications matter:</H>{" CFA L1 + Beacon Certified Quant Dev + Google Analytics is a strong combination. Add any coursework."}</li>
          <li><H>Tailor per firm:</H>{" Emphasize energy/commodities for trading firms. Emphasize Aladdin/risk for buy-side. Emphasize Python/systems for fintech."}</li>
        </ul>
      </Card>

      <Card title="Networking Strategy" tag="START NOW">
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>LinkedIn presence:</H>{" Post 1-2x/month about quant topics. Share a derivation, a Python implementation, an insight. Builds credibility over months."}</li>
          <li><H>QuantNet forums:</H>{" Active community. Ask and answer questions. Build reputation."}</li>
          <li><H>Informational interviews:</H>{" Reach out to quants at target firms. 'I'm transitioning from financial engineering at Beacon to a quant role. Could I ask about your experience?'"}</li>
          <li><H>Meetups and conferences:</H>{" QuantMinds, Risk.net events, local quant finance meetups. Even online attendance builds network."}</li>
          <li><H>Alumni network:</H>{" Amity and Sharda alumni in finance. Deloitte network (from your profile). BlackRock alumni."}</li>
        </ul>
      </Card>

      <Card title="Application Timeline" tag="PHASED">
        <div style={{ margin: "6px 0" }}>
          {[
            ["Month 6-7", "Wave 1: Warm-ups", "Energy trading firms (your domain edge), fintech quant roles. Lower interview bar, immediate relevance.", "#22c55e"],
            ["Month 8-9", "Wave 2: Mid-tier", "Bank quant desks, mid-size hedge funds. Serious interviews but achievable with your prep.", "#38bdf8"],
            ["Month 10-11", "Wave 3: Stretch", "Top prop trading (Jane Street, Optiver), elite hedge funds (Two Sigma, Citadel). Maximum difficulty.", "#a78bfa"],
            ["Month 12", "Evaluate + Negotiate", "Compare offers. Negotiate. Choose based on learning velocity, not just comp.", "#f59e0b"],
          ].map(([when, phase, desc, color], i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <div style={{ minWidth: 80 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color }}>{when}</div>
                <div style={{ fontSize: 10, color: "#64748b" }}>{phase}</div>
              </div>
              <div style={{ fontSize: 12, color: "#94a3b8" }}>{desc}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  if (id === "elite") return (
    <div>
      <div style={{ padding: 20, background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.02))", borderRadius: 10, border: "1px solid rgba(245,158,11,0.2)", marginBottom: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#f59e0b", marginBottom: 8 }}>What Separates Good From Legendary</div>
        <div style={{ fontSize: 12.5, color: "#94a3b8", lineHeight: 1.8 }}>
          {"Technical skill gets you hired. But becoming the best in the business requires something more: the ability to see connections others miss, to communicate complex ideas simply, and to make everyone around you better. Here's how to develop that edge over years, not months."}
        </div>
      </div>

      <Card title="T-Shaped Expertise" tag="CAREER STRATEGY" startOpen>
        <P>{"Be deep in one domain (your T's vertical bar) and broad across many (the horizontal bar)."}</P>
        <P><H>Your vertical bar:</H>{" Energy/commodity derivatives pricing. Go deeper than anyone. Become THE person firms call when they need energy quant expertise. Write papers. Speak at conferences. Build the definitive open-source energy derivatives library."}</P>
        <P><H>Your horizontal bar:</H>{" Solid across all four pillars " + D + " can price any vanilla product, write production code, understand risk frameworks, design systems. Wide enough to collaborate with anyone."}</P>
        <P><B>{"The mistake most people make:"}</B>{" They try to be good at everything. The market rewards specialists with broad foundations, not generalists. Your Beacon energy experience is the seed of your specialization."}</P>
      </Card>

      <Card title="Communication as Superpower" tag="UNDERRATED">
        <P>{"The best quant in the room who can't explain their work is less valuable than a good quant who can. Communication is a force multiplier."}</P>
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>Explain down:</H>{" Can you explain Black-Scholes to a trader with no math background? To a regulator? To a client? Practice this."}</li>
          <li><H>Explain up:</H>{" Can you distill a complex model's assumptions into 3 bullet points for senior management? This is how you become trusted."}</li>
          <li><H>Write clearly:</H>{" Model documentation that a new joiner can follow. Technical specs that developers can implement. Research notes that traders act on."}</li>
          <li><H>Present confidently:</H>{" Practice presenting technical work. Record yourself. Eliminate filler words. Use visuals, not walls of equations."}</li>
          <li><H>Listen actively:</H>{" The best quants understand the business problem before reaching for the math. Ask 'what decision does this analysis support?' before coding."}</li>
        </ul>
      </Card>

      <Card title="Continuous Learning System" tag="LIFELONG">
        <ul style={{ paddingLeft: 16, margin: "6px 0" }}>
          <li><H>Papers:</H>{" Read 2 quant papers per month from SSRN, arXiv (q-fin), Risk.net. Start with classics, then track new research."}</li>
          <li><H>Open source:</H>{" Contribute to QuantLib. Study how professional pricing libraries are architected. Submit PRs."}</li>
          <li><H>Teaching:</H>{" Mentor junior quants. Run internal training sessions. Teaching forces you to fill gaps in your own understanding."}</li>
          <li><H>Adjacent fields:</H>{" Machine learning advances applicable to finance. Climate finance (growing fast). Crypto derivatives (new frontier)."}</li>
          <li><H>History:</H>{" Study financial crises. LTCM (model risk), 2008 (correlation breakdown), volmageddon (short vol blow-up). Learn what kills quants."}</li>
        </ul>
      </Card>

      <Card title="The 5-Year Vision" tag="THINK BIG">
        <div style={{ margin: "6px 0" }}>
          {[
            ["Year 1", "Transform", "Execute this plan. Get hired at a strong quant firm. Master the fundamentals deeply.", "#22c55e"],
            ["Year 2-3", "Specialize", "Become the go-to person for energy/commodity quant. Build internal tools that the team depends on. Start publishing.", "#38bdf8"],
            ["Year 3-4", "Lead", "Lead a small team or a major project. Design systems, not just implement them. Mentor juniors.", "#a78bfa"],
            ["Year 5", "Architect", "You're now a senior quant / VP level. You shape how the firm thinks about a problem domain. You can move to any top firm.", "#f59e0b"],
          ].map(([year, phase, desc, color], i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <div style={{ minWidth: 70 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color }}>{year}</div>
                <div style={{ fontSize: 10, color: "#64748b" }}>{phase}</div>
              </div>
              <div style={{ fontSize: 12.5, color: "#94a3b8", lineHeight: 1.7 }}>{desc}</div>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ marginTop: 20, padding: 20, background: "rgba(255,255,255,0.02)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#e2e8f0", marginBottom: 8 }}>The Truth About Being the Best</div>
        <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.9, maxWidth: 560, margin: "0 auto" }}>
          {"The best quants aren't the ones who know the most formulas. They're the ones who ask the right questions, build things that work, admit what they don't know, and keep learning after everyone else has stopped. You have the raw material. Now execute."}
        </div>
      </div>
    </div>
  );

  return null;
}

export default function App() {
  const [tab, setTab] = useState("tree");

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      maxWidth: 900, margin: "0 auto", padding: "20px 16px",
      color: "#e2e8f0", background: "#0c1222",
      minHeight: "100vh", borderRadius: 12,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 10, letterSpacing: "0.2em", fontWeight: 700, color: "#38bdf8", marginBottom: 6 }}>COMPLETE MASTERY ROADMAP</div>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 4px", color: "#f1f5f9", letterSpacing: "-0.02em" }}>
          Financial Engineer Elite
        </h1>
        <div style={{ fontSize: 12.5, color: "#64748b" }}>
          {"Rishabh Rajora " + D + " From practitioner to the best in the business"}
        </div>
      </div>

      <div style={{
        display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 20,
        justifyContent: "center", padding: "6px 8px",
        background: "rgba(255,255,255,0.03)", borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            padding: "7px 12px", borderRadius: 6, border: "none",
            background: tab === t.id ? "rgba(56,189,248,0.15)" : "transparent",
            color: tab === t.id ? "#38bdf8" : "#64748b",
            fontSize: 11.5, fontWeight: 600, cursor: "pointer",
            fontFamily: "inherit", transition: "all 0.15s",
            whiteSpace: "nowrap",
          }}>
            {t.label}
          </button>
        ))}
      </div>

      <Section id={tab} />

      <div style={{ textAlign: "center", marginTop: 28, fontSize: 11, color: "#334155", borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 14 }}>
        {"Expand each card for details " + D + " Every section is tailored to your background and goals"}
      </div>
    </div>
  );
}