// Original examples and distinctions. These supplement the short orientation, not a complete syllabus.
const rows=[
 [
 ['A town with connected drains, wells and planned streets shows how public infrastructure supported daily life. A seal is evidence of a material object; its precise political meaning needs more evidence.','An archaeological find does not by itself prove the name of a ruler or a readable account of government.'],
 ['A community moving from mainly pastoral livelihoods towards more settled agriculture may need different land arrangements and institutions. Compare periods before attaching a feature to all Vedic society.','Early and later Vedic society are not interchangeable categories.'],
 ['Compare a Buddhist monastery with a Jain ethical teaching by asking separately about institutions, conduct and liberation. Their common regional setting does not erase doctrinal differences.','Buddhism and Jainism are distinct traditions; a shared ethical concern does not make every doctrine identical.'],
 ['Put Ashoka on a Mauryan timeline and Samudragupta on a Gupta timeline. Then attach each inscription or policy to the correct ruler and period.','Do not merge Mauryan administration with Gupta administration simply because both ruled large territories.'],
 ['An inscription mentioning a ruler, donation and place can connect Andhra history with religious patronage and regional trade. Establish its date and attribution before using it as evidence.','A dynasty, its capital, an inscription and a cultural contribution are separate facts that must be linked correctly.'],
 ['Compare a regional kingdom, the Delhi Sultanate and the Mughal Empire using the same headings: revenue, administration, military organisation and local relationships.','Medieval Indian history includes regional powers; it is not one continuous administration.'],
 ['A devotional poem can be studied for its language, audience and religious ideas. A Sufi order can be studied through its teachers and institutions. Compare their settings without making them identical.','Bhakti traditions and Sufi orders contain internal diversity.'],
 ['A revenue demand can alter farming incentives and rural debt. Trace the link between the policy, its local effects and resistance rather than memorising a protest in isolation.','A policy objective and its actual effects need not be the same.'],
 ['Compare a boycott, a constitutional demand and civil disobedience by asking who organised it, what changed and which methods were used. Keep each on its own timeline.','A movement can have several phases; one date or leader may not describe the whole movement.'],
 ['A Telugu literary work, a reform organisation and a linguistic-state demand illustrate different forms of cultural and political change. Identify what each contributed.','Language, literature, social reform and state formation are connected but distinct themes.']
 ],
 [
 ['A written Constitution states how powers and institutions are organised. The Preamble helps explain the ideals behind that arrangement, including justice, liberty, equality and fraternity.','The Preamble is not a list of every enforceable remedy or institutional procedure.'],
 ['An unlawful discriminatory public action raises a rights question; the next step is to identify the relevant article and remedy. Equality and freedom are different groups of protections.','A constitutional right is not necessarily a Fundamental Right in Part III.'],
 ['A government can design a welfare measure guided by Directive Principles. A citizen can discuss duties such as protecting public property. Neither category should be substituted for a Part III remedy.','Directive Principles, Fundamental Duties and Fundamental Rights have different legal roles.'],
 ['Parliament considers a law and scrutinises government; the executive administers policy. A constitutional office and the political leadership exercising day-to-day responsibilities must be distinguished.','Legislating, implementing and scrutinising are not the same institutional function.'],
 ['A court considering whether a public action violates the Constitution is performing judicial review. An appeal may instead challenge the correctness of a lower court’s decision.','Judicial review is not simply another name for every appeal.'],
 ['Compare the Governor and Chief Minister with the President and Prime Minister using constitutional role, political responsibility and legislative relationships. Then identify exceptions explicitly.','State and Union offices have parallels, but their powers are not identical in every situation.'],
 ['A local drainage service, a state-level public service and a Union responsibility illustrate different levels of administration. Find the legal source of power before assigning a function.','Decentralisation does not mean every level has unlimited or identical authority.'],
 ['Ask how an institution was created: by the Constitution, an Act or an executive decision. That origin helps classify the body before learning its powers.','An important institution is not automatically a constitutional body.'],
 ['Two welfare measures may pursue the same goal but differ in eligibility, delivery and outcomes. Compare who qualifies and whether the benefit actually reaches them.','An announced benefit is not proof of universal eligibility or successful delivery.'],
 ['A joint political statement and a ratified treaty may both express cooperation, but they do not automatically create the same obligations. Check the instrument and context.','Diplomatic announcements and binding treaty obligations must be distinguished.']
 ],
 [
 ['If nominal output rises because prices rise, that alone does not establish equal growth in real output. Per-person income also depends on population.','Nominal growth, real growth and per-capita growth answer different questions.'],
 ['When many prices rise, a household’s purchasing power can fall. A central-bank interest-rate decision concerns monetary policy; a tax or government-spending decision concerns fiscal policy.','Inflation is a rate of price change, not simply a high price for one product.'],
 ['A government spends more than its receipts and finances the gap by borrowing. Examine which deficit is being measured and whether spending creates useful assets or recurring obligations.','Deficit, debt stock, revenue receipts and borrowing are different measures.'],
 ['Opening a bank account creates access. Regular, affordable payments and appropriate credit show use. An account count alone does not describe the full quality of inclusion.','Financial inclusion is broader than just the number of accounts opened.'],
 ['A region’s output may grow while health or education outcomes lag. Development analysis asks how production gains relate to wellbeing and distribution.','Growth in output is not by itself a complete measure of development.'],
 ['A farmer can produce more yet earn less if market prices fall or input costs rise. Follow production, costs, prices and risk together.','Higher crop output does not guarantee higher net farm income.'],
 ['A road can reduce transport time for factories and farms. Its value still depends on demand, maintenance, financing and environmental effects.','Building an asset is not the same as proving it is economically useful.'],
 ['Use one dated AP budget to identify receipts, expenditure and borrowing. Compare like definitions and years when assessing changes.','A budget estimate, revised estimate and actual expenditure are not interchangeable.'],
 ['A survey figure labelled provisional and measured in current prices cannot be compared blindly with a final constant-price figure from another year.','Check year, unit, definition and revision status before comparing survey numbers.'],
 ['A person without work, a low-income household and unequal incomes describe related but different issues. Identify the reference period and measurement definition.','Poverty, unemployment and inequality are not the same indicator.']
 ],
 [
 ['A landform shaped by weathering and erosion can be compared with one associated with internal tectonic processes. Explain the mechanism before memorising the location.','Weathering breaks material down; erosion also involves removal and transport.'],
 ['A rainy afternoon is weather. A region’s long-term seasonal rainfall pattern is climate. A monsoon explanation connects pressure, winds, moisture and relief.','One unusual day does not define the climate or explain an entire monsoon season.'],
 ['Follow a north-to-south map transect through major physical regions. Relief helps explain drainage, climate and settlement patterns.','Political boundaries and physical regions are different kinds of map information.'],
 ['Rain falling across a basin may enter tributaries and eventually a main river. Upstream storage or pollution can therefore affect downstream users.','A river channel is not the same as its whole drainage basin.'],
 ['Two fields with similar soil may produce different crops because rainfall, irrigation and management differ. Soil is one part of crop suitability.','Soil colour alone does not establish fertility or the best crop.'],
 ['A mineral deposit requires extraction technology, energy, transport and a market before it supports an industry. Location alone is insufficient.','A resource deposit is not automatically an economically workable reserve.'],
 ['Connect AP’s coast and river systems with settlement, agriculture and cyclone exposure. Verify current district boundaries independently.','Physical features persist across administrative boundary changes.'],
 ['A small area can have high population density without having the highest population growth rate. Urbanisation concerns the urban share, not just the size of one city.','Population size, density, growth and urban share use different denominators.'],
 ['Plants capture energy, herbivores consume plants and decomposers recycle nutrients. Energy passes through the system while nutrients can cycle.','Energy flow and nutrient cycling are not identical processes.'],
 ['The same heavy rainfall can cause very different losses in two towns because exposure, drainage and vulnerability differ.','A hazard is not automatically a disaster; risk depends on exposure and vulnerability.']
 ],
 [
 ['For 12 and 18, common factors include 1, 2, 3 and 6, so HCF is 6. Their least common multiple is 36.','HCF divides the given numbers; LCM is a multiple of them.'],
 ['A price rises from ₹100 to ₹120 and falls by 20% to ₹96. The second percentage uses ₹120 as its base.','Equal percentage increases and decreases do not cancel when the base changes.'],
 ['An item bought for ₹80 and sold for ₹100 has ₹20 profit: 20/80 × 100 = 25% profit.','Profit percentage normally uses cost price, not selling price, unless another base is stated.'],
 ['A does a job in 6 days and B in 3 days. Their combined daily rate is 1/6 + 1/3 = 1/2, so together they need 2 days.','Add work rates, not completion times. State that rates are constant.'],
 ['A vehicle covers 60 km in one hour and 60 km in two hours. Average speed is 120/3 = 40 km/h, not the arithmetic mean of 60 and 30.','Average speed uses total distance divided by total time.'],
 ['For 2, 6, 12, 20, differences are 4, 6 and 8. Continuing that difference pattern gives the next term 30.','Check the rule against every supplied term; more than one pattern may fit a short series.'],
 ['From “all roses are flowers,” you may infer that a rose is a flower. You cannot infer that every flower is a rose.','Do not reverse a one-way implication without additional evidence.'],
 ['If 30 of 120 candidates pass, the pass rate is 30/120 = 25%. A graph with a truncated axis may exaggerate visual differences.','Read the denominator, units and axis before comparing values.'],
 ['An official handling an urgent complaint should act within lawful authority, consider evidence and treat comparable cases fairly. Convenience alone does not justify bypassing rules.','An effective administrative action must also respect legality and fairness.'],
 ['A colleague’s anxious reaction before a presentation is evidence about that situation. Respond by listening and clarifying rather than assigning a permanent personality label.','A single response is not a clinical diagnosis or proof of a fixed trait.']
 ],
 [
 ['A 1 kW heater used for two hours consumes 2 kWh. The first quantity is power; the second is energy.','A watt and a watt-hour measure different quantities.'],
 ['Melting ice changes physical state. Rusting iron produces chemically different material. Some physical changes are hard to reverse, so reversibility alone is an unreliable classification rule.','Identify whether a new substance forms rather than relying only on whether the change can be reversed.'],
 ['An organ’s structure supports its function: lungs exchange gases, while the heart circulates blood. Disease prevention, diagnosis and treatment address different stages.','A symptom, a cause and a route of transmission are not the same fact.'],
 ['Using microorganisms to make a useful product is a biotechnology application. Genetic engineering is one biotechnology method, not the definition of every biotechnology process.','Not every biotechnology application requires a genetically modified organism.'],
 ['A launch vehicle places a satellite into an intended orbit; the satellite then performs applications such as communication or Earth observation.','The launcher, orbit, payload and mission objective are separate components.'],
 ['An AI system may produce a fluent answer with an incorrect date. Compare it with a primary source before using that date in an exam note.','Confidence of wording is not a measure of factual accuracy.'],
 ['A solar panel converts sunlight into electrical energy. A battery stores energy through chemical processes; it is not a primary energy source.','Energy generation, storage and transmission solve different problems.'],
 ['A soil-moisture sensor can inform irrigation decisions, but benefits depend on calibration, water availability and how farmers use the readings.','A tool’s potential benefit does not establish a guaranteed outcome in every field.'],
 ['Connect an institution with its mandate before attaching a mission to it. Use the organisation’s dated official publication for current projects.','A similar acronym or related scientific field does not prove institutional responsibility.'],
 ['A science-policy proposal can precede approval, funding and implementation. Track which stage an official document actually establishes.','Announced, approved, funded and implemented describe different stages.']
 ],
 [
 ['For an AP policy announcement, record the department, decision date, beneficiaries and implementation status, then link it to the relevant static topic.','A news headline is not evidence that every announced measure is already in force.'],
 ['For a national event, distinguish a Bill introduced in Parliament from an enacted law and its commencement date.','Introduction, passage, assent and commencement need not happen on the same date.'],
 ['For an international summit, distinguish attendance, a joint statement and a binding agreement. Record the actual outcome rather than inferring it from the meeting.','Holding talks does not prove an agreement was concluded.'],
 ['A scheme update may change eligibility or merely report the number of beneficiaries. Read the notification to determine which occurred.','A progress report does not automatically change the scheme’s rules.'],
 ['A country’s rank can change because its own score changes, others change or methodology changes. Keep the edition and publisher with the figure.','A rank without its year, coverage and methodology is incomplete information.']
 ]
];
export function topicExample(id){const [,s,i]=id.split('-').map(Number);return rows[s]?.[i]||null;}
