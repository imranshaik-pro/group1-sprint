# Complete subject-wise micro-topic segmentation — JEE Main + NEET

> Planning register only; not yet reconciled with repository blueprint or official current-year syllabus. `[scope check]` means hold ingestion until eligibility verified. Mathematics and Phase 0 are deferred by user decision.

## Approved question-generation target (2026-11-16)
- **50 original questions per eligible micro-topic segment**: **15 EASY (30%), 25 MEDIUM (50%), 10 HARD (20%)**.
- This is a fixed per-segment student-difficulty allocation; **L1/L2/L3 remains execution complexity**, not student difficulty.
- Total proposed segments: **386**; **40 on syllabus hold**, leaving **346 provisionally eligible**. Planned eligible target: **17,300 questions** (5,190 easy; 8,650 medium; 3,460 hard). If all held segments are subsequently approved: **19,300 questions** (5,790 easy; 9,650 medium; 3,860 hard).
- Do **not** generate held segments before official syllabus and blueprint verification. Do not claim 346 segments are verified eligible; this is a provisional planning count.
- Generate in reviewable, resumable slices, not the full bank in one operation. **No questions are generated or integrated by this documentation change.**

## Decisions and execution contract
- Plan every remaining subject now; generate and integrate question data later, only after user instruction.
- One micro-topic = one segment with 50 planned original questions (15 easy, 25 medium, 10 hard); split generation into smaller reviewable slices for complex material.
- Preserve exam tags (JEE Main, NEET, or both), source PDF/page, answer, solution, media, stable IDs, duplicate links.
- Each slice: generate original questions → classify → independently solve/verify → deduplicate → QA → checkpoint → reviewable commit → app regression.
- Missing solutions: pending-solution queue; unclear answers/classifications: quarantine; never mark these complete.
- Resume by deterministic segment/slice IDs, source hashes, cursor and accepted IDs; never repeat previously committed questions.
- GitHub: no bulk subject commits, no changes to Mathematics, record SHA and QA summary per accepted slice.

## Exact proposed segment register

### PHY

**PHY-01 Units and Measurements**
- `PHY-01-01` SI units
- `PHY-01-02` dimensions
- `PHY-01-03` errors
- `PHY-01-04` measuring instruments

**PHY-02 Kinematics 1D**
- `PHY-02-01` displacement
- `PHY-02-02` velocity
- `PHY-02-03` acceleration
- `PHY-02-04` graphs
- `PHY-02-05` relative motion

**PHY-03 Kinematics 2D**
- `PHY-03-01` vectors
- `PHY-03-02` projectiles
- `PHY-03-03` relative velocity
- `PHY-03-04` circular motion

**PHY-04 Laws of Motion**
- `PHY-04-01` Newton laws
- `PHY-04-02` FBD
- `PHY-04-03` friction
- `PHY-04-04` pulleys
- `PHY-04-05` inclines

**PHY-05 Work Energy Power**
- `PHY-05-01` work
- `PHY-05-02` energy conservation
- `PHY-05-03` power
- `PHY-05-04` collisions

**PHY-06 Rotation**
- `PHY-06-01` COM
- `PHY-06-02` torque
- `PHY-06-03` moment of inertia
- `PHY-06-04` angular momentum
- `PHY-06-05` rolling

**PHY-07 Gravitation**
- `PHY-07-01` field
- `PHY-07-02` potential
- `PHY-07-03` g variation
- `PHY-07-04` satellites
- `PHY-07-05` escape speed

**PHY-08 Solids**
- `PHY-08-01` stress strain
- `PHY-08-02` elastic moduli
- `PHY-08-03` elastic energy

**PHY-09 Fluids**
- `PHY-09-01` pressure
- `PHY-09-02` buoyancy
- `PHY-09-03` Bernoulli
- `PHY-09-04` viscosity
- `PHY-09-05` surface tension

**PHY-10 Thermal Properties**
- `PHY-10-01` expansion
- `PHY-10-02` calorimetry
- `PHY-10-03` heat transfer
- `PHY-10-04` cooling

**PHY-11 Thermodynamics**
- `PHY-11-01` first law
- `PHY-11-02` processes
- `PHY-11-03` engines
- `PHY-11-04` second law

**PHY-12 Kinetic Theory**
- `PHY-12-01` gas equation
- `PHY-12-02` kinetic model
- `PHY-12-03` equipartition
- `PHY-12-04` speeds

**PHY-13 Oscillations**
- `PHY-13-01` SHM
- `PHY-13-02` springs
- `PHY-13-03` pendulum
- `PHY-13-04` energy

**PHY-14 Waves**
- `PHY-14-01` wave speed
- `PHY-14-02` superposition
- `PHY-14-03` standing waves
- `PHY-14-04` beats
- `PHY-14-05` Doppler

**PHY-15 Electrostatics**
- `PHY-15-01` Coulomb law
- `PHY-15-02` field
- `PHY-15-03` dipoles
- `PHY-15-04` Gauss law

**PHY-16 Potential Capacitance**
- `PHY-16-01` potential
- `PHY-16-02` capacitors
- `PHY-16-03` dielectrics
- `PHY-16-04` energy

**PHY-17 Current Electricity**
- `PHY-17-01` Ohm law
- `PHY-17-02` networks
- `PHY-17-03` Kirchhoff
- `PHY-17-04` bridges
- `PHY-17-05` cells

**PHY-18 Moving Charges Magnetism**
- `PHY-18-01` Lorentz force
- `PHY-18-02` particle motion
- `PHY-18-03` Biot Savart
- `PHY-18-04` Ampere

**PHY-19 Magnetism Matter**
- `PHY-19-01` dipoles
- `PHY-19-02` earth magnetism
- `PHY-19-03` materials

**PHY-20 Induction**
- `PHY-20-01` Faraday
- `PHY-20-02` Lenz
- `PHY-20-03` motional emf
- `PHY-20-04` inductance

**PHY-21 Alternating Current**
- `PHY-21-01` phasors
- `PHY-21-02` RLC
- `PHY-21-03` resonance
- `PHY-21-04` power
- `PHY-21-05` transformers

**PHY-22 Electromagnetic Waves**
- `PHY-22-01` displacement current
- `PHY-22-02` properties
- `PHY-22-03` spectrum

**PHY-23 Ray Optics**
- `PHY-23-01` mirrors
- `PHY-23-02` refraction
- `PHY-23-03` lenses
- `PHY-23-04` prisms
- `PHY-23-05` instruments

**PHY-24 Wave Optics**
- `PHY-24-01` Huygens
- `PHY-24-02` interference
- `PHY-24-03` diffraction
- `PHY-24-04` polarization

**PHY-25 Dual Nature**
- `PHY-25-01` photoelectric effect
- `PHY-25-02` Einstein equation
- `PHY-25-03` de Broglie

**PHY-26 Atoms**
- `PHY-26-01` Rutherford
- `PHY-26-02` Bohr
- `PHY-26-03` spectra

**PHY-27 Nuclei**
- `PHY-27-01` binding energy
- `PHY-27-02` radioactivity
- `PHY-27-03` fission
- `PHY-27-04` fusion

**PHY-28 Semiconductors**
- `PHY-28-01` bands
- `PHY-28-02` diodes
- `PHY-28-03` rectifiers
- `PHY-28-04` logic gates

**PHY-29 Experimental Skills**
- `PHY-29-01` mechanics
- `PHY-29-02` thermal
- `PHY-29-03` electrical
- `PHY-29-04` optical
- `PHY-29-05` errors

### CHE

**CHE-01 Mole Concept**
- `CHE-01-01` molar mass
- `CHE-01-02` stoichiometry
- `CHE-01-03` limiting reagent
- `CHE-01-04` concentrations

**CHE-02 Atomic Structure**
- `CHE-02-01` spectra
- `CHE-02-02` Bohr
- `CHE-02-03` quantum numbers
- `CHE-02-04` configuration

**CHE-03 Periodicity**
- `CHE-03-01` radii
- `CHE-03-02` ionization
- `CHE-03-03` affinity
- `CHE-03-04` electronegativity

**CHE-04 Chemical Bonding**
- `CHE-04-01` Lewis
- `CHE-04-02` VSEPR
- `CHE-04-03` hybridization
- `CHE-04-04` MOT
- `CHE-04-05` H bonding

**CHE-05 Thermodynamics**
- `CHE-05-01` enthalpy
- `CHE-05-02` Hess
- `CHE-05-03` entropy
- `CHE-05-04` Gibbs

**CHE-06 Solutions**
- `CHE-06-01` concentrations
- `CHE-06-02` Raoult
- `CHE-06-03` colligative properties

**CHE-07 Equilibrium**
- `CHE-07-01` K
- `CHE-07-02` Le Chatelier
- `CHE-07-03` acid base
- `CHE-07-04` buffers
- `CHE-07-05` Ksp

**CHE-08 Redox**
- `CHE-08-01` oxidation numbers
- `CHE-08-02` balancing
- `CHE-08-03` redox agents

**CHE-09 Electrochemistry**
- `CHE-09-01` cells
- `CHE-09-02` Nernst
- `CHE-09-03` conductance
- `CHE-09-04` electrolysis

**CHE-10 Kinetics**
- `CHE-10-01` rate laws
- `CHE-10-02` integrated laws
- `CHE-10-03` half life
- `CHE-10-04` Arrhenius

**CHE-11 States of Matter [scope check]**
- `CHE-11-01` gases
- `CHE-11-02` real gases
- `CHE-11-03` liquids

**CHE-12 Solid State [scope check]**
- `CHE-12-01` cells
- `CHE-12-02` packing
- `CHE-12-03` defects

**CHE-13 Surface Chemistry [scope check]**
- `CHE-13-01` adsorption
- `CHE-13-02` colloids
- `CHE-13-03` catalysis

**CHE-14 Hydrogen [scope check]**
- `CHE-14-01` hydrides
- `CHE-14-02` peroxide
- `CHE-14-03` water

**CHE-15 s Block [scope check]**
- `CHE-15-01` alkali
- `CHE-15-02` alkaline earth
- `CHE-15-03` compounds

**CHE-16 p Block**
- `CHE-16-01` groups 13-14
- `CHE-16-02` 15
- `CHE-16-03` 16
- `CHE-16-04` 17-18
- `CHE-16-05` compounds

**CHE-17 d and f Block**
- `CHE-17-01` transition metals
- `CHE-17-02` oxidation states
- `CHE-17-03` lanthanoids

**CHE-18 Coordination**
- `CHE-18-01` nomenclature
- `CHE-18-02` isomerism
- `CHE-18-03` CFT
- `CHE-18-04` magnetism

**CHE-19 Metallurgy [scope check]**
- `CHE-19-01` ores
- `CHE-19-02` extraction
- `CHE-19-03` refining

**CHE-20 Organic Purification**
- `CHE-20-01` purification
- `CHE-20-02` qualitative tests
- `CHE-20-03` quantitative tests

**CHE-21 GOC**
- `CHE-21-01` nomenclature
- `CHE-21-02` isomerism
- `CHE-21-03` electronic effects
- `CHE-21-04` intermediates
- `CHE-21-05` mechanisms

**CHE-22 Hydrocarbons**
- `CHE-22-01` alkanes
- `CHE-22-02` alkenes
- `CHE-22-03` alkynes
- `CHE-22-04` aromatics

**CHE-23 Halo Compounds**
- `CHE-23-01` haloalkanes
- `CHE-23-02` SN1-SN2
- `CHE-23-03` elimination
- `CHE-23-04` haloarenes

**CHE-24 Alcohols Phenols Ethers**
- `CHE-24-01` alcohols
- `CHE-24-02` phenols
- `CHE-24-03` ethers

**CHE-25 Carbonyls Acids**
- `CHE-25-01` aldehydes
- `CHE-25-02` ketones
- `CHE-25-03` carbonyl mechanisms
- `CHE-25-04` carboxylic acids

**CHE-26 Nitrogen Compounds**
- `CHE-26-01` amines
- `CHE-26-02` diazonium
- `CHE-26-03` nitro compounds

**CHE-27 Biomolecules**
- `CHE-27-01` carbohydrates
- `CHE-27-02` proteins
- `CHE-27-03` nucleic acids
- `CHE-27-04` vitamins

**CHE-28 Polymers [scope check]**
- `CHE-28-01` polymerization
- `CHE-28-02` common polymers

**CHE-29 Everyday Chemistry [scope check]**
- `CHE-29-01` drugs
- `CHE-29-02` additives
- `CHE-29-03` detergents

**CHE-30 Practical Chemistry**
- `CHE-30-01` salt analysis
- `CHE-30-02` functional group tests
- `CHE-30-03` titrations

### BOT

**BOT-01 Living World**
- `BOT-01-01` living characteristics
- `BOT-01-02` nomenclature
- `BOT-01-03` taxonomic aids

**BOT-02 Biological Classification**
- `BOT-02-01` Monera
- `BOT-02-02` Protista
- `BOT-02-03` Fungi
- `BOT-02-04` viruses

**BOT-03 Plant Kingdom**
- `BOT-03-01` algae
- `BOT-03-02` bryophytes
- `BOT-03-03` pteridophytes
- `BOT-03-04` gymnosperms
- `BOT-03-05` angiosperms

**BOT-04 Morphology**
- `BOT-04-01` root stem
- `BOT-04-02` leaves
- `BOT-04-03` flowers
- `BOT-04-04` fruits seeds
- `BOT-04-05` plant families

**BOT-05 Anatomy**
- `BOT-05-01` tissues
- `BOT-05-02` tissue systems
- `BOT-05-03` monocot dicot
- `BOT-05-04` secondary growth

**BOT-06 Cell**
- `BOT-06-01` cell types
- `BOT-06-02` organelles
- `BOT-06-03` membranes
- `BOT-06-04` nucleus

**BOT-07 Biomolecules**
- `BOT-07-01` carbohydrates
- `BOT-07-02` lipids
- `BOT-07-03` proteins
- `BOT-07-04` enzymes
- `BOT-07-05` nucleic acids

**BOT-08 Cell Division**
- `BOT-08-01` cell cycle
- `BOT-08-02` mitosis
- `BOT-08-03` meiosis

**BOT-09 Transport Plants [scope check]**
- `BOT-09-01` water potential
- `BOT-09-02` transpiration
- `BOT-09-03` xylem
- `BOT-09-04` phloem

**BOT-10 Mineral Nutrition [scope check]**
- `BOT-10-01` nutrients
- `BOT-10-02` deficiencies
- `BOT-10-03` nitrogen cycle

**BOT-11 Photosynthesis**
- `BOT-11-01` pigments
- `BOT-11-02` light reactions
- `BOT-11-03` Calvin
- `BOT-11-04` C4
- `BOT-11-05` photorespiration

**BOT-12 Plant Respiration**
- `BOT-12-01` glycolysis
- `BOT-12-02` Krebs
- `BOT-12-03` ETC
- `BOT-12-04` fermentation

**BOT-13 Plant Growth**
- `BOT-13-01` growth
- `BOT-13-02` auxins gibberellins
- `BOT-13-03` cytokinins ABA ethylene
- `BOT-13-04` photoperiodism

**BOT-14 Flowering Reproduction**
- `BOT-14-01` gametophytes
- `BOT-14-02` pollination
- `BOT-14-03` double fertilization
- `BOT-14-04` seed
- `BOT-14-05` apomixis

**BOT-15 Inheritance**
- `BOT-15-01` Mendel
- `BOT-15-02` linkage
- `BOT-15-03` sex determination
- `BOT-15-04` pedigrees
- `BOT-15-05` disorders

**BOT-16 Molecular Genetics**
- `BOT-16-01` DNA replication
- `BOT-16-02` transcription
- `BOT-16-03` translation
- `BOT-16-04` regulation
- `BOT-16-05` genomics

**BOT-17 Evolution**
- `BOT-17-01` evidence
- `BOT-17-02` Darwinism
- `BOT-17-03` Hardy Weinberg
- `BOT-17-04` speciation

**BOT-18 Microbes Welfare**
- `BOT-18-01` food
- `BOT-18-02` industry
- `BOT-18-03` sewage
- `BOT-18-04` biogas
- `BOT-18-05` biocontrol

**BOT-19 Biotech Principles**
- `BOT-19-01` DNA tools
- `BOT-19-02` vectors
- `BOT-19-03` PCR
- `BOT-19-04` bioreactors

**BOT-20 Biotech Applications**
- `BOT-20-01` GM crops
- `BOT-20-02` gene therapy
- `BOT-20-03` transgenics
- `BOT-20-04` biosafety

**BOT-21 Populations**
- `BOT-21-01` attributes
- `BOT-21-02` growth
- `BOT-21-03` adaptations
- `BOT-21-04` interactions

**BOT-22 Ecosystem**
- `BOT-22-01` productivity
- `BOT-22-02` decomposition
- `BOT-22-03` energy flow
- `BOT-22-04` pyramids

**BOT-23 Biodiversity**
- `BOT-23-01` patterns
- `BOT-23-02` threats
- `BOT-23-03` hotspots
- `BOT-23-04` conservation

**BOT-24 Environmental Issues [scope check]**
- `BOT-24-01` pollution
- `BOT-24-02` waste
- `BOT-24-03` climate
- `BOT-24-04` ozone

### ZOO

**ZOO-01 Animal Kingdom**
- `ZOO-01-01` classification basis
- `ZOO-01-02` invertebrate phyla
- `ZOO-01-03` chordates

**ZOO-02 Animal Structure**
- `ZOO-02-01` tissues
- `ZOO-02-02` frog morphology
- `ZOO-02-03` frog anatomy

**ZOO-03 Digestion [scope check]**
- `ZOO-03-01` digestive organs
- `ZOO-03-02` enzymes
- `ZOO-03-03` absorption

**ZOO-04 Breathing**
- `ZOO-04-01` mechanics
- `ZOO-04-02` gas exchange
- `ZOO-04-03` gas transport
- `ZOO-04-04` disorders

**ZOO-05 Circulation**
- `ZOO-05-01` blood
- `ZOO-05-02` heart
- `ZOO-05-03` cardiac cycle
- `ZOO-05-04` ECG
- `ZOO-05-05` disorders

**ZOO-06 Excretion**
- `ZOO-06-01` nephron
- `ZOO-06-02` urine formation
- `ZOO-06-03` osmoregulation
- `ZOO-06-04` disorders

**ZOO-07 Locomotion**
- `ZOO-07-01` muscles
- `ZOO-07-02` contraction
- `ZOO-07-03` skeleton
- `ZOO-07-04` joints

**ZOO-08 Neural Control**
- `ZOO-08-01` neurons
- `ZOO-08-02` CNS
- `ZOO-08-03` reflexes
- `ZOO-08-04` eye
- `ZOO-08-05` ear

**ZOO-09 Endocrine**
- `ZOO-09-01` glands
- `ZOO-09-02` hormones
- `ZOO-09-03` disorders

**ZOO-10 Human Reproduction**
- `ZOO-10-01` anatomy
- `ZOO-10-02` gametogenesis
- `ZOO-10-03` menstrual cycle
- `ZOO-10-04` fertilization
- `ZOO-10-05` development

**ZOO-11 Reproductive Health**
- `ZOO-11-01` contraception
- `ZOO-11-02` STIs
- `ZOO-11-03` infertility ART

**ZOO-12 Health Disease**
- `ZOO-12-01` immunity
- `ZOO-12-02` infections
- `ZOO-12-03` AIDS
- `ZOO-12-04` cancer
- `ZOO-12-05` substance abuse

**ZOO-13 Food Production [scope check]**
- `ZOO-13-01` animal husbandry
- `ZOO-13-02` breeding
- `ZOO-13-03` SCP

**ZOO-14 Physiology Integration**
- `ZOO-14-01` homeostasis
- `ZOO-14-02` cross system cases
- `ZOO-14-03` clinical graphs

**ZOO-15 Human Evolution**
- `ZOO-15-01` evidence
- `ZOO-15-02` origins
- `ZOO-15-03` population genetics

## Data manifest and release gates
Each slice records: `segment_id`, `canonical_blueprint_id`, `exam_tags`, `syllabus_verified`, `generation_version`, `generation_batch_id`, `slice_id`, `question_ids`, `answer_status`, `solution_status`, `media_status`, `duplicate_status`, `qa_status`, `accepted/rejected/pending_counts`, `checkpoint_cursor`, `commit_sha`.

**Release:** blueprint mapping + current-year syllabus check, valid schema, answer consistency, media fidelity, duplicate review, app rendering/regression and reviewer approval. Only then mark complete.

## Totals
| Subject | Chapters | Micro-topic segments |
|---|---:|---:|
| PHY | 29 | 121 |
| CHE | 30 | 108 |
| BOT | 24 | 101 |
| ZOO | 15 | 56 |

These IDs are provisional and will be mapped to the authoritative blueprint before question ingestion. This document contains no question bank data.