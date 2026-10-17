// Original bilingual teaching. Dated examples retain their source scope; not official PYQs.
export const batch6Lessons = {
 "t-5-5": {
  "topic": "t-5-5",
  "batch": 6,
  "edition": "2026-10-17-b6",
  "asOf": "2026-10-17",
  "headlineWindow": null,
  "level": "Expanded chapter",
  "review": {
   "date": "2026-10-17",
   "method": "Original bilingual teaching and source/answer self-review; not independent expert certification. Current affairs are a dated snapshot, with older background labelled explicitly."
  },
  "source": {
   "name": "NCERT — Computer System",
   "url": "https://ncert.nic.in/textbook/pdf/kecs101.pdf"
  },
  "sources": [
   [
    "NCERT — Emerging Trends",
    "https://ncert.nic.in/textbook/pdf/kecs103.pdf"
   ],
   [
    "NIST — voluntary AI Risk Management Framework",
    "https://www.nist.gov/itl/ai-risk-management-framework"
   ]
  ],
  "segments": [
   {
    "title": "Data, processing and memory",
    "teTitle": "డేటా, ప్రాసెసింగ్, మెమరీ",
    "text": "A computer turns encoded input into output by following instructions. The CPU executes operations; RAM holds working data and instructions while programs run. Persistent storage such as an SSD retains files when ordinary power is removed. These roles interact but are not interchangeable: increasing storage capacity does not automatically increase processing speed. A bit has two possible values; eight bits form a byte. Text, sound and images can all be represented digitally, although their encodings differ. Distinguish the size of a file from the rate at which it is transferred.",
    "te": "కంప్యూటర్ ఇచ్చిన సూచనల ప్రకారం ఇన్‌పుట్‌ను అవుట్‌పుట్‌గా మారుస్తుంది. CPU లెక్కలు, నియంత్రణ పనులు చేస్తుంది. RAM నడుస్తున్న ప్రోగ్రామ్‌కు తాత్కాలిక పని స్థలం; సాధారణంగా విద్యుత్ పోతే అందులోని సమాచారం నిలవదు. SSD వంటి నిల్వలో ఫైళ్లు ఉంటాయి. ఎక్కువ నిల్వ కొన్నంత మాత్రాన CPU వేగం పెరగదు. ఒక bitకు రెండు విలువలు; ఎనిమిది bits ఒక byte. ఫైల్ పరిమాణం, పంపే వేగం వేరు. ఒకే సంఖ్య ఉన్నా వాటి యూనిట్లను గమనించాలి.",
    "example": "A 24-byte record contains 24×8=192 bits. This describes data size, not 192 operations or a transfer speed.",
    "teExample": "24 bytes అంటే 192 bits. ఇది సమాచారం పరిమాణం; సెకనుకు పంపే వేగం కాదు.",
    "trap": "GB storage, GB RAM and GHz processor frequency describe different properties.",
    "recall": "Why can an unsaved document disappear even when the computer has free disk space?",
    "source": {
     "name": "NCERT — Computer System",
     "url": "https://ncert.nic.in/textbook/pdf/kecs101.pdf"
    }
   },
   {
    "title": "Networks, identity and protected communication",
    "teTitle": "నెట్‌వర్క్, గుర్తింపు, రక్షిత సమాచార మార్పిడి",
    "text": "The Internet connects networks; the World Wide Web is a service using linked resources over that infrastructure. A browser requests a resource from a server using an address and a protocol. Encryption protects the readability of data under the relevant threat model; authentication checks identity or control of a credential. HTTPS protects a connection to the addressed site but cannot guarantee that its claims or business are honest. Phishing exploits trust through deceptive messages or pages. A second independent authentication factor reduces some account-takeover risks, while software updates address known vulnerabilities.",
    "te": "ఇంటర్నెట్ అనేది నెట్‌వర్క్‌ల అనుసంధానం. Web అందులో పనిచేసే సేవల్లో ఒకటి. బ్రౌజర్ సర్వర్‌కు అభ్యర్థన పంపుతుంది. Encryption సందేశాన్ని అనుమతి లేనివారు చదవకుండా రక్షించడంలో సహాయపడుతుంది; authentication ఎవరు ప్రవేశిస్తున్నారో పరీక్షిస్తుంది. HTTPS ఉన్నంత మాత్రాన సైట్ చెప్పిన సమాచారం నిజమని రుజువు కాదు. మోసపు లింక్‌తో వివరాలు సేకరించడం phishing. లింక్ చిరునామాను పరిశీలించడం, స్వతంత్ర రెండో factor, నవీకరణలు కలిసి రక్షణ ఇస్తాయి.",
    "example": "A fake scholarship page may use HTTPS. Verify the domain and issuing organisation before entering credentials.",
    "teExample": "నకిలీ స్కాలర్‌షిప్ సైట్‌కూ HTTPS ఉండవచ్చు. అసలు సంస్థ చిరునామాతో పోల్చాలి.",
    "trap": "Encrypted transport does not certify that the destination is trustworthy.",
    "recall": "How do authentication and encryption answer different security questions?",
    "source": {
     "name": "NCERT — Computer System",
     "url": "https://ncert.nic.in/textbook/pdf/kecs101.pdf"
    }
   },
   {
    "title": "Learning models and generating answers",
    "teTitle": "నేర్చుకునే నమూనాలు, సమాధానాల ఉత్పత్తి",
    "text": "In supervised learning, examples pair inputs with target labels or values; the model learns patterns useful for prediction. Unsupervised methods seek structure without those target labels. Generative systems produce content using learned statistical relationships. Training adjusts parameters; inference uses the resulting model on a new input. A fluent answer is not proof that a claim is true or that the model retrieved a verified document. Retrieval can supply relevant material, but the system must still represent that material faithfully. Compare classification, numerical prediction and generation by the task they perform rather than by whether the interface looks conversational.",
    "te": "లేబుల్ ఉన్న ఉదాహరణలతో నేర్చుకోవడం supervised learning. సరైన జవాబు లేబుల్ లేకుండా సమూహాలు, నిర్మాణం గుర్తించడం unsupervised విధానాల్లో ఒకటి. Generative AI కొత్త వాక్యాలు లేదా ఇతర కంటెంట్ రూపొందిస్తుంది. Trainingలో నమూనా పరామితులు మారుతాయి; inferenceలో ఆ నమూనాను కొత్త ఇన్‌పుట్‌పై వాడతాం. చక్కటి భాషలో వచ్చిన జవాబు నిజానికి హామీ కాదు. మూలం ఇచ్చినా దాని అర్థాన్ని సరిగ్గా ఉపయోగించిందా చూడాలి. పనిని బట్టి నమూనాను గుర్తించాలి.",
    "example": "Training on labelled crop images and then classifying a new image are different stages of one prediction system.",
    "teExample": "లేబుల్ ఉన్న పంట చిత్రాలతో నేర్పడం training; కొత్త చిత్రాన్ని వర్గీకరించడం inference.",
    "trap": "Generating a plausible citation is different from retrieving and checking a real source.",
    "recall": "What distinguishes training from inference in an image classifier?",
    "source": {
     "name": "NCERT — Emerging Trends",
     "url": "https://ncert.nic.in/textbook/pdf/kecs103.pdf"
    }
   },
   {
    "title": "Evaluation, leakage and responsible deployment",
    "teTitle": "పరీక్ష, డేటా లీకేజ్, బాధ్యతాయుత వినియోగం",
    "text": "Evaluate a model on examples that did not supply its training answers. If the test set leaks into training or model selection, an impressive score can overstate performance on genuinely new cases. Aggregate accuracy can conceal unequal errors across languages or user groups. Record false positives and false negatives in the context of the task, and examine privacy, security and human oversight. NIST AI RMF 1.0 is a voluntary risk-management framework, not an Indian statutory approval. Its Govern, Map, Measure and Manage functions encourage ongoing assessment; a checklist completed once cannot guarantee safety in every later context.",
    "te": "నమూనాకు ముందే నేర్పిన జవాబులనే పరీక్షలో ఇస్తే కొత్త సందర్భాల్లో పనితీరు తెలిసిపోదు. Test సమాచారం trainingలో చేరడాన్ని leakage అంటాం. మొత్తం accuracy ఎక్కువైనా ఒక భాష లేదా వర్గంలో తప్పులు ఎక్కువగా ఉండవచ్చు. తప్పుగా అంగీకరించినవి, తప్పుగా తిరస్కరించినవి వేరు చేసి చూడాలి. వ్యక్తిగత డేటా, భద్రత, మానవ పర్యవేక్షణ అవసరం. NIST AI RMF స్వచ్ఛంద మార్గదర్శకం; భారత చట్టపరమైన అనుమతి కాదు. వాడే సందర్భం మారితే మళ్లీ పరీక్షించాలి.",
    "example": "A bilingual tutor can score well overall while repeatedly misreading Telugu. Evaluate each language and inspect actual errors.",
    "teExample": "ఇంగ్లీష్‌లో మంచి ఫలితాల వల్ల తెలుగు లోపాలు దాగవచ్చు; రెండు భాషలను విడిగా పరీక్షించాలి.",
    "trap": "A benchmark score or voluntary framework label is not a universal deployment licence.",
    "recall": "Why must evaluation be repeated when the population or task changes?",
    "source": {
     "name": "NIST — voluntary AI Risk Management Framework",
     "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
   }
  ],
  "outline": [
   "Data, processing and memory",
   "Networks, identity and protected communication",
   "Learning models and generating answers",
   "Evaluation, leakage and responsible deployment"
  ],
  "recall": [
   "Why can an unsaved document disappear even when the computer has free disk space?",
   "How do authentication and encryption answer different security questions?",
   "What distinguishes training from inference in an image classifier?"
  ],
  "references": [
   "A computer turns encoded input into output by following instructions. The CPU executes operations; RAM holds working data and instructions while programs run. Persistent storage such as an SSD retains files when ordinary power is removed. These roles interact but are not interchangeable: increasing storage capacity does not automatically increase processing speed. A bit has two possible values; eight bits form a byte. Text, sound and images can all be represented digitally, although their encodings differ. Distinguish the size of a file from the rate at which it is transferred.",
   "The Internet connects networks; the World Wide Web is a service using linked resources over that infrastructure. A browser requests a resource from a server using an address and a protocol. Encryption protects the readability of data under the relevant threat model; authentication checks identity or control of a credential. HTTPS protects a connection to the addressed site but cannot guarantee that its claims or business are honest. Phishing exploits trust through deceptive messages or pages. A second independent authentication factor reduces some account-takeover risks, while software updates address known vulnerabilities.",
   "In supervised learning, examples pair inputs with target labels or values; the model learns patterns useful for prediction. Unsupervised methods seek structure without those target labels. Generative systems produce content using learned statistical relationships. Training adjusts parameters; inference uses the resulting model on a new input. A fluent answer is not proof that a claim is true or that the model retrieved a verified document. Retrieval can supply relevant material, but the system must still represent that material faithfully. Compare classification, numerical prediction and generation by the task they perform rather than by whether the interface looks conversational."
  ],
  "summary": [
   "Separate processing, temporary memory and persistent storage.",
   "Network security needs identity checks and protected communication.",
   "Generative output requires factual verification.",
   "Evaluate on unseen data and check unequal errors."
  ]
 },
 "t-5-6": {
  "topic": "t-5-6",
  "batch": 6,
  "edition": "2026-10-17-b6",
  "asOf": "2026-10-17",
  "headlineWindow": null,
  "level": "Expanded chapter",
  "review": {
   "date": "2026-10-17",
   "method": "Original bilingual teaching and source/answer self-review; not independent expert certification. Current affairs are a dated snapshot, with older background labelled explicitly."
  },
  "source": {
   "name": "US EIA — generation, capacity and storage concepts",
   "url": "https://www.eia.gov/energyexplained/electricity/electricity-in-the-us-generation-capacity-and-sales.php"
  },
  "sources": [
   [
    "US Department of Energy — electrolysis",
    "https://www.energy.gov/cmei/fuels/hydrogen-production-electrolysis"
   ],
   [
    "NCERT — Electricity",
    "https://ncert.nic.in/textbook/pdf/jesc111.pdf"
   ],
   [
    "US DOE — fission and fusion",
    "https://www.energy.gov/ne/articles/fission-and-fusion-what-difference"
   ]
  ],
  "segments": [
   {
    "title": "Power, energy and generation",
    "teTitle": "శక్తి, పవర్, ఉత్పత్తి",
    "text": "Power measures how quickly energy is supplied or used; energy measures the quantity delivered over an interval. A kilowatt is power and a kilowatt-hour is energy. Rated generating capacity states a possible output under specified conditions, not the actual annual electricity produced. Availability, demand, maintenance, sunshine or wind can change generation. Renewable describes replenishment of a resource on human timescales; it does not mean a plant runs at full output continuously or has no environmental effects. Compare annual generation using the time interval and operating conditions as well as installed capacity.",
    "te": "Power అంటే శక్తి వినియోగం లేదా సరఫరా జరిగే రేటు. కిలోవాట్ power యూనిట్; కిలోవాట్-గంట energy యూనిట్. ప్లాంట్ పేరు మీద ఉన్న సామర్థ్యం ఏడాది మొత్తం ఉత్పత్తి కాదు. ఎండ, గాలి, నిర్వహణ, అవసరం బట్టి ఉత్పత్తి మారుతుంది. Renewable అంటే వనరు తిరిగి లభించే లక్షణం; నిరంతరం పూర్తి ఉత్పత్తి లేదా పర్యావరణ ప్రభావం సున్నా అని కాదు. పోల్చేటప్పుడు సామర్థ్యంతో పాటు కాలం, వాడిన శక్తి, పనిచేసిన పరిస్థితులు చూడాలి.",
    "example": "A 2 kW pump running steadily for 3 hours uses 6 kWh. Its rated power remains 2 kW, not 6 kW.",
    "teExample": "2 కిలోవాట్ పంపు 3 గంటలు నడిస్తే 6 కిలోవాట్-గంటలు వినియోగం.",
    "trap": "Installed MW cannot be substituted for yearly MWh without an operating-time assumption.",
    "recall": "How can equal-capacity plants produce different annual electricity?",
    "source": {
     "name": "US EIA — generation, capacity and storage concepts",
     "url": "https://www.eia.gov/energyexplained/electricity/electricity-in-the-us-generation-capacity-and-sales.php"
    }
   },
   {
    "title": "Solar conversion and storage",
    "teTitle": "సౌర మార్పిడి, నిల్వ",
    "text": "Photovoltaic cells convert incident light into electrical energy. Solar thermal systems collect heat, which may be used directly or in a heat-to-electricity cycle. A battery stores energy through reversible electrochemical processes; pumped storage raises water and later uses its descent to generate electricity. Neither creates an additional primary energy source. Charging and discharging lose some energy, so round-trip output is below input in real systems. Storage can move daytime supply into an evening demand period, but its power limit and energy capacity constrain how fast and how long it can discharge.",
    "te": "Photovoltaic కణాలు కాంతిని విద్యుత్‌గా మారుస్తాయి. Solar thermal వ్యవస్థలు ముందుగా వేడిని సేకరిస్తాయి. బ్యాటరీ విద్యుత్‌ను రసాయన మార్పులతో నిల్వ చేస్తుంది; pumped storageలో నీటిని ఎత్తుకు పంపి తర్వాత దిగేటప్పుడు ఉత్పత్తి చేస్తారు. ఇవి శక్తిని కొత్తగా సృష్టించవు. నిల్వలో నష్టాలు ఉంటాయి. ఎన్ని కిలోవాట్లు ఇస్తుందో, ఎన్ని కిలోవాట్-గంటలు నిల్వ ఉందో రెండూ ముఖ్యం. సాయంత్రం డిమాండ్‌కు పగటి ఉత్పత్తిని మార్చి వాడవచ్చు.",
    "example": "With an assumed 80% round-trip efficiency, 100 kWh charged yields 80 kWh returned, not a 20 kWh gain.",
    "teExample": "80% round-trip సామర్థ్యానికి 100 యూనిట్లు ఇచ్చితే 80 యూనిట్లు తిరిగి వస్తాయి.",
    "trap": "PV, solar thermal and electricity storage perform different conversions.",
    "recall": "Why can a battery have high power but a short discharge duration?",
    "source": {
     "name": "US EIA — generation, capacity and storage concepts",
     "url": "https://www.eia.gov/energyexplained/electricity/electricity-in-the-us-generation-capacity-and-sales.php"
    }
   },
   {
    "title": "Fission, fusion and hydrogen pathways",
    "teTitle": "విఖండనం, సంలీనం, హైడ్రోజన్ మార్గాలు",
    "text": "Fission divides a heavy nucleus; fusion combines light nuclei under suitable conditions. The concepts differ from combustion, a chemical reaction. Hydrogen can carry energy but must first be produced from a feedstock using energy. Electrolysis uses electricity to split water into hydrogen and oxygen. The emissions associated with the hydrogen therefore depend partly on the electricity source and the wider production chain. Calling every electrolytic hydrogen route emission-free ignores those inputs. Storage, transport and end-use conversion also consume energy, so evaluate the whole chain instead of only the final device.",
    "te": "భారీ కేంద్రకం విడిపోవడం fission; తేలిక కేంద్రకాలు కలవడం fusion. ఇవి రసాయన దహనంతో సమానం కాదు. హైడ్రోజన్ ఒక energy carrier; దాన్ని తయారు చేయడానికి ముడి పదార్థం, శక్తి అవసరం. Electrolysisలో విద్యుత్‌తో నీటిని హైడ్రోజన్, ఆక్సిజన్‌గా విడగొడతారు. విద్యుత్ ఎక్కడి నుంచి వచ్చిందో బట్టి ఉద్గారాలు మారుతాయి. చివర నీరు ఏర్పడిందని మొత్తం ఉత్పత్తి గొలుసు ఉద్గారరహితం అనలేం. నిల్వ, రవాణా నష్టాలూ లెక్కించాలి.",
    "example": "An electrolyser supplied by fossil-heavy electricity and one supplied by low-emission electricity use the same basic reaction but can have different lifecycle emissions.",
    "teExample": "రెండు electrolyserల ప్రక్రియ ఒకటైనా విద్యుత్ మూలం వల్ల మొత్తం ఉద్గారాలు మారవచ్చు.",
    "trap": "The production pathway matters more than a colour label without a defined standard.",
    "recall": "Why is hydrogen called a carrier rather than an automatically available primary energy source?",
    "source": {
     "name": "US Department of Energy — electrolysis",
     "url": "https://www.energy.gov/cmei/fuels/hydrogen-production-electrolysis"
    }
   },
   {
    "title": "Grids, efficiency and lifecycle comparison",
    "teTitle": "గ్రిడ్, సమర్థత, జీవితచక్ర పోలిక",
    "text": "An electricity system must balance supply and demand while keeping operational conditions within limits. Networks, flexible generation, demand response and storage can help manage variability, subject to engineering constraints. Efficiency compares useful output with input; conservation reduces unnecessary consumption. A more efficient device can provide the same service with less energy, although total use still depends on how often it runs. Lifecycle comparison includes extraction, manufacturing, operation and disposal. Low operating emissions and low total lifecycle emissions are related questions but not identical claims. Select technologies for the service, location, cost and reliability required.",
    "te": "గ్రిడ్‌లో సరఫరా, డిమాండ్ సమతుల్యం అవసరం. నిల్వ, వాడక సమయ మార్పు, అనువైన ఉత్పత్తి, నెట్‌వర్క్‌లు తోడ్పడతాయి. Efficiency అంటే ఇచ్చిన శక్తిలో ఉపయోగకరంగా వచ్చిన భాగం. అవసరం లేని వాడకాన్ని తగ్గించడం conservation. సమర్థమైన పరికరాన్ని ఎక్కువసేపు వాడితే మొత్తం వినియోగం మళ్లీ పెరగవచ్చు. ముడి పదార్థం తవ్వకం నుంచి తయారీ, వినియోగం, పారవేత వరకు lifecycleలో చూడాలి. పనిచేసేటప్పుడు ఉద్గారాలు తక్కువ అని మొత్తం ప్రభావం సున్నా అనలేం.",
    "example": "A device delivering 60 J of useful output from 100 J input has 60% efficiency; the boundary of useful output must be stated.",
    "teExample": "100 జూల్స్ ఇన్‌పుట్‌లో ఉపయోగకర అవుట్‌పుట్ 60 అయితే సమర్థత 60%.",
    "trap": "Operating emissions alone do not measure all manufacturing and disposal impacts.",
    "recall": "What additional information is needed beyond installed capacity to compare dependable supply?",
    "source": {
     "name": "NCERT — Electricity",
     "url": "https://ncert.nic.in/textbook/pdf/jesc111.pdf"
    }
   }
  ],
  "outline": [
   "Power, energy and generation",
   "Solar conversion and storage",
   "Fission, fusion and hydrogen pathways",
   "Grids, efficiency and lifecycle comparison"
  ],
  "recall": [
   "How can equal-capacity plants produce different annual electricity?",
   "Why can a battery have high power but a short discharge duration?",
   "Why is hydrogen called a carrier rather than an automatically available primary energy source?"
  ],
  "references": [
   "Power measures how quickly energy is supplied or used; energy measures the quantity delivered over an interval. A kilowatt is power and a kilowatt-hour is energy. Rated generating capacity states a possible output under specified conditions, not the actual annual electricity produced. Availability, demand, maintenance, sunshine or wind can change generation. Renewable describes replenishment of a resource on human timescales; it does not mean a plant runs at full output continuously or has no environmental effects. Compare annual generation using the time interval and operating conditions as well as installed capacity.",
   "Photovoltaic cells convert incident light into electrical energy. Solar thermal systems collect heat, which may be used directly or in a heat-to-electricity cycle. A battery stores energy through reversible electrochemical processes; pumped storage raises water and later uses its descent to generate electricity. Neither creates an additional primary energy source. Charging and discharging lose some energy, so round-trip output is below input in real systems. Storage can move daytime supply into an evening demand period, but its power limit and energy capacity constrain how fast and how long it can discharge.",
   "Fission divides a heavy nucleus; fusion combines light nuclei under suitable conditions. The concepts differ from combustion, a chemical reaction. Hydrogen can carry energy but must first be produced from a feedstock using energy. Electrolysis uses electricity to split water into hydrogen and oxygen. The emissions associated with the hydrogen therefore depend partly on the electricity source and the wider production chain. Calling every electrolytic hydrogen route emission-free ignores those inputs. Storage, transport and end-use conversion also consume energy, so evaluate the whole chain instead of only the final device."
  ],
  "summary": [
   "Power is a rate; energy accumulates over time.",
   "Storage shifts energy and incurs losses.",
   "Hydrogen is an energy carrier whose production route matters.",
   "Compare dependable service, efficiency and lifecycle impacts."
  ]
 },
 "t-5-7": {
  "topic": "t-5-7",
  "batch": 6,
  "edition": "2026-10-17-b6",
  "asOf": "2026-10-17",
  "headlineWindow": null,
  "level": "Expanded chapter",
  "review": {
   "date": "2026-10-17",
   "method": "Original bilingual teaching and source/answer self-review; not independent expert certification. Current affairs are a dated snapshot, with older background labelled explicitly."
  },
  "source": {
   "name": "ICAR — agricultural technologies and knowledge resources",
   "url": "https://www.icar.org.in/index.php/en/technologies-and-knowledge-resources"
  },
  "sources": [
   [
    "ICAR — consortia research platforms",
    "https://www.icar.org.in/en/consortia-research-platform-projects"
   ],
   [
    "FAO — e-agriculture",
    "https://www.fao.org/e-agriculture/"
   ],
   [
    "NCERT — Biotechnology and its Applications",
    "https://ncert.nic.in/textbook/pdf/lebo110.pdf"
   ]
  ],
  "segments": [
   {
    "title": "Improvement and propagation are different tasks",
    "teTitle": "పంట మెరుగుదల, మొక్కల పెంపకం వేరు",
    "text": "Selective breeding chooses parents and offspring to increase desired traits across generations. Hybridisation crosses selected parents; the performance of a hybrid depends on the trait and growing conditions. Genetic engineering deliberately changes genetic material using molecular techniques. Tissue culture grows plant material under controlled, usually sterile conditions and can multiply selected material rapidly. Propagating a plant by tissue culture does not by itself mean that a foreign gene was introduced. Yield, resistance and nutritional traits require testing; a useful trait under one stress does not guarantee superiority in every environment.",
    "te": "కావలసిన లక్షణాలున్న తల్లిదండ్రులను, సంతతిని ఎంచుకోవడం selective breeding. ఎంపిక చేసిన మొక్కలను దాటించడం hybridisation. Molecular పద్ధతులతో జన్యు పదార్థాన్ని మార్చడం genetic engineering. Tissue cultureలో నియంత్రిత పరిస్థితుల్లో మొక్క భాగాల నుంచి పెంచుతారు. Tissue culture చేసిన ప్రతి మొక్కలో విదేశీ జన్యువు పెట్టారనడం తప్పు. ఒక వ్యాధికి నిరోధకత ఉన్నంత మాత్రాన అన్ని నేలలు, వాతావరణాల్లో అధిక దిగుబడి హామీ కాదు. ప్రాంతీయ పరీక్షలు అవసరం.",
    "example": "A nursery multiplying a selected banana line through tissue culture is demonstrating propagation; the method alone proves no transgene was inserted.",
    "teExample": "అరటి మొక్కలను tissue cultureతో పెంచడం మాత్రమే జన్యు మార్పిడి జరిగిందని నిరూపించదు.",
    "trap": "Hybrid, genetically engineered and tissue-cultured are not interchangeable labels.",
    "recall": "Which evidence would establish a claimed yield advantage under local conditions?",
    "source": {
     "name": "NCERT — Biotechnology and its Applications",
     "url": "https://ncert.nic.in/textbook/pdf/lebo110.pdf"
    }
   },
   {
    "title": "Precision water and nutrient management",
    "teTitle": "నీరు, పోషకాల ఖచ్చిత నిర్వహణ",
    "text": "Precision management varies inputs using information about crop needs and differences within a field. Drip irrigation supplies water near the root zone; fertigation applies suitable nutrients through an irrigation system. Water demand depends on crop stage, soil, weather and the effectiveness of delivery. A soil-moisture reading must be interpreted at a relevant depth and location, rather than treated as a universal command. More fertiliser is not always more productive: nutrient imbalance, losses and water stress can limit response. Evaluate input saved per unit of useful output alongside the cost and maintenance of the equipment.",
    "te": "పంట అవసరం, పొలంలో తేడాలను బట్టి ఇన్‌పుట్లు ఇవ్వడం precision management. Dripలో వేర్ల దగ్గర నీరు ఇస్తారు; fertigationలో నీటితో తగిన పోషకాలు అందిస్తారు. పంట దశ, నేల, వాతావరణం బట్టి అవసరం మారుతుంది. ఒక చోట sensor చూపిన విలువ మొత్తం పొలానికి సరిపోవకపోవచ్చు. ఎక్కువ ఎరువు ఎప్పుడూ ఎక్కువ దిగుబడి కాదు. పోషకాల సమతుల్యం, నీటి లభ్యత, నిర్వహణ ముఖ్యం. ఆదా అయిన వనరులతో పాటు పరికర ఖర్చు, మరమ్మతులూ చూడాలి.",
    "example": "A probe in a wet patch may miss a dry root zone elsewhere. Use representative measurements before changing the field schedule.",
    "teExample": "తడిగా ఉన్న మూలలో sensor పెట్టి పొలం అంతా తడిగా ఉందని అనుకోకూడదు.",
    "trap": "A sensor reading requires crop, soil and placement context before action.",
    "recall": "Why can the same irrigation interval be unsuitable for two different soils?",
    "source": {
     "name": "ICAR — consortia research platforms",
     "url": "https://www.icar.org.in/en/consortia-research-platform-projects"
    }
   },
   {
    "title": "Drones, satellites and decision support",
    "teTitle": "డ్రోన్లు, ఉపగ్రహాలు, నిర్ణయ సహాయం",
    "text": "Remote sensing observes an area without direct contact, using measurements from platforms such as satellites or drones. Changes in reflected radiation can indicate differences in vegetation, but a colour map is not a complete diagnosis of their cause. Water stress, nutrient problems and disease can produce overlapping signals. Ground observations and suitable sampling help validate an interpretation. Digital advisories combine observations with models and forecasts; uncertainty remains when inputs are incomplete or the local situation changes. Drone imaging and drone spraying are different operations, with different equipment, safety and regulatory requirements.",
    "te": "ఉపగ్రహం లేదా డ్రోన్ నుంచి నేరుగా తాకకుండా సమాచారం సేకరించడం remote sensing. పంట ప్రతిఫలించే కాంతిలో మార్పు కనిపిస్తే అది నీటి లోపం, పోషక లోపం లేదా వ్యాధి వల్ల కావచ్చు. మ్యాప్ రంగు ఒక్కటే ఖచ్చిత నిర్ధారణ కాదు. పొలంలో పరిశీలన, నమూనాలతో సరిపోల్చాలి. Digital advisory నమూనా, అంచనా, డేటా ఆధారంగా ఉంటుంది; స్థానిక పరిస్థితి మారితే సలహా కూడా మారవచ్చు. చిత్రాలు తీయడం, మందు పిచికారీ చేయడం వేర్వేరు పనులు.",
    "example": "A red patch on a vegetation map identifies a location to inspect; a field visit is needed to distinguish waterlogging from other stresses.",
    "teExample": "మ్యాప్‌లో ఎరుపు భాగం పరిశీలన స్థలాన్ని చూపుతుంది; కారణం తెలుసుకోవడానికి పొలంలో చూడాలి.",
    "trap": "A remotely sensed stress signal is not automatically a confirmed disease diagnosis.",
    "recall": "How does ground validation improve a satellite-based farm advisory?",
    "source": {
     "name": "FAO — e-agriculture",
     "url": "https://www.fao.org/e-agriculture/"
    }
   },
   {
    "title": "Post-harvest systems and adoption",
    "teTitle": "కోత తర్వాత నిర్వహణ, సాంకేతిక స్వీకరణ",
    "text": "Technology continues after harvest through cleaning, grading, moisture control, storage, cooling and transport. A cold chain maintains suitable temperature conditions across connected stages; a single cold room cannot protect produce if later transport breaks those conditions. Appropriate drying limits moisture-related deterioration where relevant, while packaging protects against specific handling risks. Extension services translate research into locally usable practice and return farmers’ observations to researchers. Judge adoption by net benefit, access to repair, skills, finance and suitability for small holdings. A technically effective machine may still be uneconomic for an individual farmer but usable through a shared service.",
    "te": "కోత తర్వాత శుభ్రపరచడం, grading, తేమ నియంత్రణ, నిల్వ, రవాణా కూడా సాంకేతికతలో భాగమే. Cold chainలో ప్రతి దశలో తగిన ఉష్ణోగ్రత అవసరం; ఒక గది చల్లగా ఉన్నంత మాత్రాన తర్వాత రవాణాలో నష్టం ఆగదు. Extension పరిశోధనను రైతుకు అర్థమయ్యే విధంగా అందించి స్థానిక అనుభవాన్ని తిరిగి పరిశోధనకు చేరుస్తుంది. యంత్రం పని చేయడమే కాదు, నికర లాభం, మరమ్మతు సదుపాయం, నైపుణ్యం, చిన్న పొలాలకు సరిపోవడం చూడాలి. ఉమ్మడి సేవ ద్వారా ఖర్చు పంచుకోవచ్చు.",
    "example": "A shared grading machine may be affordable per tonne even when purchasing it for one small farm is not. Compare annual use and service charges.",
    "teExample": "ఒక్క రైతుకు ఖరీదైన grading యంత్రాన్ని ఉమ్మడి సేవగా వాడితే టన్నుకు ఖర్చు తగ్గవచ్చు.",
    "trap": "Technical performance is one input to adoption, not proof of positive net farm income.",
    "recall": "Why does a cold-chain break matter even when the first storage stage worked?",
    "source": {
     "name": "ICAR — agricultural technologies and knowledge resources",
     "url": "https://www.icar.org.in/index.php/en/technologies-and-knowledge-resources"
    }
   }
  ],
  "outline": [
   "Improvement and propagation are different tasks",
   "Precision water and nutrient management",
   "Drones, satellites and decision support",
   "Post-harvest systems and adoption"
  ],
  "recall": [
   "Which evidence would establish a claimed yield advantage under local conditions?",
   "Why can the same irrigation interval be unsuitable for two different soils?",
   "How does ground validation improve a satellite-based farm advisory?"
  ],
  "references": [
   "Selective breeding chooses parents and offspring to increase desired traits across generations. Hybridisation crosses selected parents; the performance of a hybrid depends on the trait and growing conditions. Genetic engineering deliberately changes genetic material using molecular techniques. Tissue culture grows plant material under controlled, usually sterile conditions and can multiply selected material rapidly. Propagating a plant by tissue culture does not by itself mean that a foreign gene was introduced. Yield, resistance and nutritional traits require testing; a useful trait under one stress does not guarantee superiority in every environment.",
   "Precision management varies inputs using information about crop needs and differences within a field. Drip irrigation supplies water near the root zone; fertigation applies suitable nutrients through an irrigation system. Water demand depends on crop stage, soil, weather and the effectiveness of delivery. A soil-moisture reading must be interpreted at a relevant depth and location, rather than treated as a universal command. More fertiliser is not always more productive: nutrient imbalance, losses and water stress can limit response. Evaluate input saved per unit of useful output alongside the cost and maintenance of the equipment.",
   "Remote sensing observes an area without direct contact, using measurements from platforms such as satellites or drones. Changes in reflected radiation can indicate differences in vegetation, but a colour map is not a complete diagnosis of their cause. Water stress, nutrient problems and disease can produce overlapping signals. Ground observations and suitable sampling help validate an interpretation. Digital advisories combine observations with models and forecasts; uncertainty remains when inputs are incomplete or the local situation changes. Drone imaging and drone spraying are different operations, with different equipment, safety and regulatory requirements."
  ],
  "summary": [
   "Distinguish breeding, gene transfer and plant propagation.",
   "Use crop and field evidence to schedule water and nutrients.",
   "Combine digital observations with ground checks.",
   "Evaluate losses, costs and adoption rather than promising universal gains."
  ]
 },
 "t-5-8": {
  "topic": "t-5-8",
  "batch": 6,
  "edition": "2026-10-17-b6",
  "asOf": "2026-10-17",
  "headlineWindow": null,
  "level": "Expanded chapter",
  "review": {
   "date": "2026-10-17",
   "method": "Original bilingual teaching and source/answer self-review; not independent expert certification. Current affairs are a dated snapshot, with older background labelled explicitly."
  },
  "source": {
   "name": "ISRO — organisation",
   "url": "https://www.isro.gov.in/profile.html"
  },
  "sources": [
   [
    "DRDO — organisation",
    "https://www.drdo.gov.in/"
   ],
   [
    "CSIR — institutional mandate",
    "https://www.csir.res.in/"
   ],
   [
    "ICAR — agricultural technologies and knowledge resources",
    "https://www.icar.org.in/index.php/en/technologies-and-knowledge-resources"
   ],
   [
    "ICMR — biomedical research",
    "https://www.icmr.gov.in/"
   ],
   [
    "DAE — activities and constituent research centres",
    "https://dae.gov.in/activities/"
   ],
   [
    "ANRF — research support",
    "https://anrf.gov.in/"
   ]
  ],
  "segments": [
   {
    "title": "Space and defence research",
    "teTitle": "అంతరిక్షం, రక్షణ పరిశోధన",
    "text": "ISRO develops space capabilities and applications, including launch systems, spacecraft and satellite-based services. DRDO develops technologies for defence requirements across multiple disciplines. The organisations can collaborate with universities, industries and other public bodies without losing their distinct principal mandates. A launch vehicle carries a payload; the satellite then performs its mission in the intended orbit if deployment succeeds. Defence research can involve materials, electronics and life sciences as well as missiles. Identify the function described in a question before matching an institution; the word technology alone does not identify the responsible body.",
    "te": "ISRO అంతరిక్ష ప్రయోగ వాహనాలు, ఉపగ్రహాలు, వాటి అనువర్తనాల సామర్థ్యాలను అభివృద్ధి చేస్తుంది. DRDO రక్షణ అవసరాల కోసం అనేక శాస్త్ర విభాగాల్లో సాంకేతిక పరిశోధన చేస్తుంది. DRDO అంటే కేవలం క్షిపణులే కాదు; పదార్థాలు, ఎలక్ట్రానిక్స్ వంటి రంగాలూ ఉన్నాయి. Launch vehicle ఉపగ్రహాన్ని తీసుకెళ్తుంది; ఉపగ్రహం కక్ష్యలో తన పని చేస్తుంది. సంస్థలు కలిసి పనిచేసినా ప్రధాన బాధ్యతలు వేరు. ప్రశ్నలో ఏ పని వర్ణించారో ముందు గుర్తించాలి.",
    "example": "A question about developing a satellite launch system points to the space programme; defence electronics points to a defence R&D mandate.",
    "teExample": "ఉపగ్రహ ప్రయోగ వాహనం అంటే అంతరిక్ష కార్యక్రమం; రక్షణ ఎలక్ట్రానిక్స్ అంటే రక్షణ పరిశోధన.",
    "trap": "An institutional mandate does not prove that every announced project has been completed.",
    "recall": "How is a launch vehicle different from the satellite it carries?",
    "source": {
     "name": "DRDO — organisation",
     "url": "https://www.drdo.gov.in/"
    }
   },
   {
    "title": "Industrial and agricultural research networks",
    "teTitle": "పారిశ్రామిక, వ్యవసాయ పరిశోధన వ్యవస్థలు",
    "text": "CSIR supports a network of scientific and industrial research spanning fields such as materials, chemicals and engineering. ICAR coordinates and advances agricultural research and education, including crops, livestock and related systems. A council is not the same organisational unit as every individual laboratory or university working in its field. Researchers may generate a technique; extension, industry and farmers may adapt it for practical use. Distinguish a research result from a commercial product and distinguish either from a claim of guaranteed local benefit. Match the research problem and institutional scope rather than assuming that all scientific councils perform the same task.",
    "te": "CSIR శాస్త్రీయ, పారిశ్రామిక పరిశోధనలో పదార్థాలు, రసాయనాలు, ఇంజినీరింగ్ వంటి రంగాలను కవర్ చేస్తుంది. ICAR వ్యవసాయ పరిశోధన, విద్య, పంటలు, పశుసంపద తదితర రంగాలకు సంబంధించిన వ్యవస్థ. Council, దాని పరిధిలోని ప్రయోగశాల, విశ్వవిద్యాలయం ఒకటే సంస్థ స్థాయి కాదు. పరిశోధన ఫలితాన్ని extension, పరిశ్రమ, రైతులు స్థానికంగా ఉపయోగించవచ్చు. ప్రయోగశాలలో వచ్చిన ఫలితం మార్కెట్ ఉత్పత్తిగా మారడానికీ, పొలంలో లాభానికీ మరిన్ని పరీక్షలు అవసరం.",
    "example": "A new crop-management method may arise in agricultural research and reach farmers through field demonstrations and extension partnerships.",
    "teExample": "పంట నిర్వహణ పద్ధతి పరిశోధన నుంచి ప్రదర్శన క్షేత్రాలు, extension ద్వారా రైతుకు చేరవచ్చు.",
    "trap": "A council, its laboratory and a university are different organisational descriptions.",
    "recall": "Which institution would you first associate with coordinated agricultural research?",
    "source": {
     "name": "CSIR — institutional mandate",
     "url": "https://www.csir.res.in/"
    }
   },
   {
    "title": "Biomedical and atomic-energy research",
    "teTitle": "జీవవైద్య, అణుశక్తి పరిశోధన",
    "text": "ICMR’s principal domain is biomedical research, including evidence relevant to health. It should not be confused with every healthcare provider or with all drug-approval functions. The Department of Atomic Energy supports nuclear science and technology and associated research; BARC is a major multidisciplinary research centre within that system. Nuclear applications extend beyond electricity to fields such as isotopes and materials, subject to relevant safeguards. A research institution can investigate an application without itself issuing every permission needed to use it. For an institutional match, separate research, service delivery, regulation and funding as functions.",
    "te": "ICMR ప్రధాన రంగం జీవవైద్య పరిశోధన. ప్రతి ఆసుపత్రి సేవను లేదా ప్రతి ఔషధ అనుమతిని అదే నిర్వహిస్తుందని అనుకోకూడదు. అణుశక్తి విభాగం అణు శాస్త్రం, సాంకేతికత, అనుబంధ పరిశోధనలకు సంబంధించినది; BARC ఆ వ్యవస్థలో ముఖ్య పరిశోధన కేంద్రం. అణు అనువర్తనాలు విద్యుత్‌కే పరిమితం కావు; isotopes, పదార్థాల పరిశోధనలోనూ ఉంటాయి. పరిశోధన చేయడం, అనుమతి ఇవ్వడం, సేవ అందించడం వేర్వేరు పనులు. సంస్థను పని ఆధారంగా గుర్తించాలి.",
    "example": "A study of disease patterns fits biomedical research; producing a research result does not by itself authorise a medicine for general sale.",
    "teExample": "వ్యాధి నమూనాల అధ్యయనం జీవవైద్య పరిశోధన; ఫలితం వచ్చినంత మాత్రాన మందు విక్రయ అనుమతి రాదు.",
    "trap": "Research evidence and regulatory authorisation are distinct institutional functions.",
    "recall": "Why should ICMR not be treated as a synonym for every health-service institution?",
    "source": {
     "name": "ICMR — biomedical research",
     "url": "https://www.icmr.gov.in/"
    }
   },
   {
    "title": "Funding, execution and collaboration",
    "teTitle": "నిధులు, పరిశోధన అమలు, సహకారం",
    "text": "A research funding body selects and supports proposals; a university or laboratory may execute the funded work. ANRF supports research and innovation and links the research ecosystem through funding and partnerships. Awarding a grant does not prove that the proposed discovery has occurred. Universities combine education and research, while specialised laboratories may focus on particular missions. Collaboration can share facilities, data and expertise across institutional boundaries. Read affiliations carefully: the organisation funding a project, the team performing it and the authority assessing a product may be different. Avoid memorising changing chairpersons when the question concerns a durable mandate.",
    "te": "నిధులు ఇచ్చే సంస్థ ప్రతిపాదనను ఎంపిక చేస్తుంది; పని విశ్వవిద్యాలయం లేదా ప్రయోగశాలలో జరగవచ్చు. ANRF పరిశోధన, ఆవిష్కరణలకు మద్దతు, భాగస్వామ్యాలను ప్రోత్సహిస్తుంది. Grant వచ్చిందంటే పరిశోధన ఫలితం సాధించేశారని కాదు. విశ్వవిద్యాలయాల్లో బోధనతో పాటు పరిశోధన ఉంటుంది; ప్రత్యేక ప్రయోగశాలలకు నిర్దిష్ట లక్ష్యాలుంటాయి. ప్రాజెక్టుకు నిధులు ఇచ్చినవారు, పరిశోధన చేసినవారు, ఉత్పత్తిని అనుమతించే సంస్థ వేరుగా ఉండవచ్చు. ప్రశ్నలో పాత్రలను విడిగా చూడాలి.",
    "example": "If ANRF funds a university experiment, record ANRF as funder and the university team as executor; neither label alone proves a successful result.",
    "teExample": "ANRF నిధులు, విశ్వవిద్యాలయ బృందం అమలు—ఈ రెండు పాత్రలను వేరు రాయాలి.",
    "trap": "A grant announcement is evidence of support, not proof of a completed discovery.",
    "recall": "What separates a funding decision from a validated research outcome?",
    "source": {
     "name": "ANRF — research support",
     "url": "https://anrf.gov.in/"
    }
   }
  ],
  "outline": [
   "Space and defence research",
   "Industrial and agricultural research networks",
   "Biomedical and atomic-energy research",
   "Funding, execution and collaboration"
  ],
  "recall": [
   "How is a launch vehicle different from the satellite it carries?",
   "Which institution would you first associate with coordinated agricultural research?",
   "Why should ICMR not be treated as a synonym for every health-service institution?"
  ],
  "references": [
   "ISRO develops space capabilities and applications, including launch systems, spacecraft and satellite-based services. DRDO develops technologies for defence requirements across multiple disciplines. The organisations can collaborate with universities, industries and other public bodies without losing their distinct principal mandates. A launch vehicle carries a payload; the satellite then performs its mission in the intended orbit if deployment succeeds. Defence research can involve materials, electronics and life sciences as well as missiles. Identify the function described in a question before matching an institution; the word technology alone does not identify the responsible body.",
   "CSIR supports a network of scientific and industrial research spanning fields such as materials, chemicals and engineering. ICAR coordinates and advances agricultural research and education, including crops, livestock and related systems. A council is not the same organisational unit as every individual laboratory or university working in its field. Researchers may generate a technique; extension, industry and farmers may adapt it for practical use. Distinguish a research result from a commercial product and distinguish either from a claim of guaranteed local benefit. Match the research problem and institutional scope rather than assuming that all scientific councils perform the same task.",
   "ICMR’s principal domain is biomedical research, including evidence relevant to health. It should not be confused with every healthcare provider or with all drug-approval functions. The Department of Atomic Energy supports nuclear science and technology and associated research; BARC is a major multidisciplinary research centre within that system. Nuclear applications extend beyond electricity to fields such as isotopes and materials, subject to relevant safeguards. A research institution can investigate an application without itself issuing every permission needed to use it. For an institutional match, separate research, service delivery, regulation and funding as functions."
  ],
  "summary": [
   "Map institutions to their main mandates, not current officeholders.",
   "Distinguish research councils, laboratories and universities.",
   "Separate research results from regulatory permission.",
   "Funding and research execution can involve different bodies."
  ]
 },
 "t-5-9": {
  "topic": "t-5-9",
  "batch": 6,
  "edition": "2026-10-17-b6",
  "asOf": "2026-10-17",
  "headlineWindow": null,
  "level": "Expanded chapter",
  "review": {
   "date": "2026-10-17",
   "method": "Original bilingual teaching and source/answer self-review; not independent expert certification. Current affairs are a dated snapshot, with older background labelled explicitly."
  },
  "source": {
   "name": "ANRF — research support",
   "url": "https://anrf.gov.in/"
  },
  "sources": [
   [
    "Cabinet — National Quantum Mission approval, 19 April 2023",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1917888&lang=2&reg=48"
   ],
   [
    "NIST — voluntary AI Risk Management Framework",
    "https://www.nist.gov/itl/ai-risk-management-framework"
   ],
   [
    "ICAR — agricultural technologies and knowledge resources",
    "https://www.icar.org.in/index.php/en/technologies-and-knowledge-resources"
   ],
   [
    "WIPO — patent rights and licensing",
    "https://www.wipo.int/en/web/patents/faq_patents"
   ]
  ],
  "segments": [
   {
    "title": "Research support and public purpose",
    "teTitle": "పరిశోధన మద్దతు, ప్రజా ప్రయోజనం",
    "text": "Science policy sets priorities, institutions, incentives and resources for research and its applications. Basic research investigates underlying principles; applied research addresses a practical problem. The boundary can be porous because a basic discovery may later enable an application. ANRF is an example of institutional support for research and innovation, not a substitute for the researchers executing every project. Public funding can address long time horizons and knowledge spillovers that private investors may underprovide. Judge a programme using its stated aims, outputs and independently assessed outcomes, rather than assuming that expenditure itself equals social benefit.",
    "te": "శాస్త్ర విధానం పరిశోధనకు లక్ష్యాలు, సంస్థలు, ప్రోత్సాహకాలు, వనరులను నిర్ణయిస్తుంది. Basic research మూల సూత్రాలను తెలుసుకుంటుంది; applied research ఆచరణ సమస్యపై దృష్టి పెడుతుంది. మొదటి కనుగొనిక తర్వాత అనువర్తనానికి దారి తీయవచ్చు. ANRF వంటి సంస్థ మద్దతు ఇస్తుంది; ప్రతి పరిశోధనను తానే చేయదు. ఎక్కువ కాలం పట్టే పని, సమాజానికి వ్యాపించే జ్ఞాన ప్రయోజనాలకు ప్రభుత్వ నిధులు తోడ్పడవచ్చు. ఖర్చును మాత్రమే కాక ఫలితాన్ని, ప్రజా ప్రయోజనాన్ని పరీక్షించాలి.",
    "example": "A grant for a new material’s properties is a research input. A validated result and a useful low-cost product are later, separate outcomes.",
    "teExample": "కొత్త పదార్థానికి grant ఒక ఇన్‌పుట్; నిర్ధారిత ఫలితం, ఉపయోగకర ఉత్పత్తి తర్వాతి దశలు.",
    "trap": "Research spending is an input; it does not alone demonstrate a public outcome.",
    "recall": "How can basic research create benefits beyond an immediate commercial product?",
    "source": {
     "name": "ANRF — research support",
     "url": "https://anrf.gov.in/"
    }
   },
   {
    "title": "National Quantum Mission: approval and domains",
    "teTitle": "జాతీయ క్వాంటమ్ మిషన్: ఆమోదం, రంగాలు",
    "text": "As historical policy background, the Union Cabinet approved the National Quantum Mission on 19 April 2023. The approved plan spans 2023–24 to 2030–31 with an outlay of ₹6,003.65 crore. Its four thematic domains are quantum computing, quantum communication, quantum sensing and metrology, and quantum materials and devices. Quantum technologies use quantum behaviour for particular tasks; a quantum computer is not automatically faster for every ordinary computation. An approval, a target and a demonstrated working system are different kinds of evidence. This section records the approval baseline, not a claim that every mission target had been achieved by October 2026.",
    "te": "చారిత్రక విధాన నేపథ్యంగా జాతీయ క్వాంటమ్ మిషన్‌కు 19 ఏప్రిల్ 2023న కేంద్ర మంత్రివర్గం ఆమోదం ఇచ్చింది. ప్రణాళిక కాలం 2023–24 నుంచి 2030–31; వ్యయం ₹6,003.65 కోట్లు. Computing, communication, sensing-metrology, materials-devices అనే నాలుగు రంగాలు ఉన్నాయి. Quantum computer ప్రతి సాధారణ పనిలో తప్పనిసరిగా వేగంగా ఉంటుందని అనకూడదు. ఆమోదం, లక్ష్యం, నిజంగా పరీక్షించి సాధించిన ఫలితం వేరు. ఇక్కడ ఆమోద నేపథ్యమే ఉంది; అన్ని లక్ష్యాలు పూర్తయ్యాయని కాదు.",
    "example": "If a question asks for a mission domain, quantum sensing and metrology fits; a numerical target in the approval is not an achieved production count.",
    "teExample": "Quantum sensing-metrology మిషన్ రంగం; ప్రకటించిన లక్ష్యం సాధించిన సంఖ్యతో సమానం కాదు.",
    "trap": "Do not convert a 2023 approval target into an October 2026 achievement.",
    "recall": "Name the four quantum mission domains and distinguish a target from a result.",
    "source": {
     "name": "Cabinet — National Quantum Mission approval, 19 April 2023",
     "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1917888&lang=2&reg=48"
    }
   },
   {
    "title": "From laboratory to field application",
    "teTitle": "ప్రయోగశాల నుంచి ఆచరణకు",
    "text": "A laboratory proof of concept establishes a possibility under specified conditions. A prototype embodies the idea; a pilot tests performance at a limited practical scale. Wider deployment must address reliability, maintenance, cost, users and local conditions. In agriculture, for example, a controlled result may need multi-location trials before a broad recommendation. Compare the new approach with a relevant existing alternative and document failures as well as successes. Technology transfer may include know-how, training and manufacturing capability, not merely publication of a patent. Scaling is a process of adapting and verifying the system, not copying a favourable demonstration indefinitely.",
    "te": "ప్రయోగశాల proof of concept నిర్దిష్ట పరిస్థితుల్లో సాధ్యతను చూపుతుంది. Prototype నమూనా; pilot పరిమిత ఆచరణ పరీక్ష. విస్తృత వినియోగానికి ఖర్చు, నమ్మకత, నిర్వహణ, స్థానిక పరిస్థితులు చూడాలి. వ్యవసాయ పద్ధతికి అనేక ప్రదేశాల్లో పోలిక పరీక్షలు అవసరం కావచ్చు. ఇప్పటికే వాడుతున్న ప్రత్యామ్నాయంతో పోల్చాలి. విజయాలే కాక వైఫల్యాలూ నమోదు చేయాలి. Technology transferలో పేటెంట్‌తో పాటు శిక్షణ, తయారీ పరిజ్ఞానం అవసరం. చిన్న పరీక్షను పెద్ద స్థాయిలో ధృవీకరణ లేకుండా నకలు చేయలేం.",
    "example": "A sensor working for one day in a laboratory still needs field testing for weather exposure, calibration drift, power and repair costs.",
    "teExample": "ల్యాబ్‌లో ఒక రోజు పనిచేసిన sensorకు వాతావరణం, calibration, విద్యుత్, మరమ్మతుల పరీక్షలు మిగిలే ఉంటాయి.",
    "trap": "A patent or prototype is not equivalent to reliable, affordable deployment at scale.",
    "recall": "What should a pilot reveal that a laboratory proof of concept may not?",
    "source": {
     "name": "ICAR — agricultural technologies and knowledge resources",
     "url": "https://www.icar.org.in/index.php/en/technologies-and-knowledge-resources"
    }
   },
   {
    "title": "Evidence, rights and risk in applications",
    "teTitle": "అనువర్తనాల్లో ఆధారం, హక్కులు, ప్రమాదం",
    "text": "Public applications of science should be assessed for benefit, cost, distribution and potential harm. Intellectual-property protection concerns rights in inventions or works under the relevant legal rules; it is not a finding that a product is safe or effective. Data-intensive applications also raise privacy, security and bias questions. Oversight should be appropriate to the sector and the nature of the risk, with mechanisms to monitor failures and respond. A voluntary AI framework can structure risk questions without replacing binding sectoral requirements. An original educational example must not be mistaken for a regulatory approval or an individual entitlement.",
    "te": "శాస్త్ర అనువర్తనానికి ప్రయోజనం, ఖర్చు, ఎవరికి లాభం, ఎవరికి నష్టం అనే ప్రశ్నలు అవసరం. Intellectual property హక్కులు ఉత్పత్తి భద్రతకు లేదా సమర్థతకు సర్టిఫికేట్ కాదు. డేటా ఆధారిత సేవల్లో గోప్యత, భద్రత, పక్షపాత తప్పులు చూడాలి. రంగానికి తగిన పర్యవేక్షణ, ఫిర్యాదు పరిష్కారం, లోపాల పరిశీలన ఉండాలి. స్వచ్ఛంద AI మార్గదర్శకం చట్టపరమైన అన్ని అవసరాలను భర్తీ చేయదు. బోధనలో ఉదాహరణను అధికారిక అనుమతిగా చదవకూడదు.",
    "example": "A patented AI tool can still make unequal errors across languages. Rights ownership and performance evaluation answer different questions.",
    "teExample": "పేటెంట్ ఉన్న AI సాధనంలోనూ తెలుగు, ఇంగ్లీష్ మధ్య తప్పుల తేడా ఉండవచ్చు.",
    "trap": "Novelty, ownership, safety and effectiveness are separate claims requiring appropriate evidence.",
    "recall": "Why does owning intellectual property not prove a technology is safe?",
    "source": {
     "name": "NIST — voluntary AI Risk Management Framework",
     "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
   }
  ],
  "outline": [
   "Research support and public purpose",
   "National Quantum Mission: approval and domains",
   "From laboratory to field application",
   "Evidence, rights and risk in applications"
  ],
  "recall": [
   "How can basic research create benefits beyond an immediate commercial product?",
   "Name the four quantum mission domains and distinguish a target from a result.",
   "What should a pilot reveal that a laboratory proof of concept may not?"
  ],
  "references": [
   "Science policy sets priorities, institutions, incentives and resources for research and its applications. Basic research investigates underlying principles; applied research addresses a practical problem. The boundary can be porous because a basic discovery may later enable an application. ANRF is an example of institutional support for research and innovation, not a substitute for the researchers executing every project. Public funding can address long time horizons and knowledge spillovers that private investors may underprovide. Judge a programme using its stated aims, outputs and independently assessed outcomes, rather than assuming that expenditure itself equals social benefit.",
   "As historical policy background, the Union Cabinet approved the National Quantum Mission on 19 April 2023. The approved plan spans 2023–24 to 2030–31 with an outlay of ₹6,003.65 crore. Its four thematic domains are quantum computing, quantum communication, quantum sensing and metrology, and quantum materials and devices. Quantum technologies use quantum behaviour for particular tasks; a quantum computer is not automatically faster for every ordinary computation. An approval, a target and a demonstrated working system are different kinds of evidence. This section records the approval baseline, not a claim that every mission target had been achieved by October 2026.",
   "A laboratory proof of concept establishes a possibility under specified conditions. A prototype embodies the idea; a pilot tests performance at a limited practical scale. Wider deployment must address reliability, maintenance, cost, users and local conditions. In agriculture, for example, a controlled result may need multi-location trials before a broad recommendation. Compare the new approach with a relevant existing alternative and document failures as well as successes. Technology transfer may include know-how, training and manufacturing capability, not merely publication of a patent. Scaling is a process of adapting and verifying the system, not copying a favourable demonstration indefinitely."
  ],
  "summary": [
   "Science policy links resources to public purposes and evidence.",
   "Separate quantum mission approval from achieved results.",
   "Translation requires pilots and context-sensitive evaluation.",
   "Assess rights, risks and public benefit alongside novelty."
  ]
 },
 "t-6-0": {
  "topic": "t-6-0",
  "batch": 6,
  "edition": "2026-10-17-b6",
  "asOf": "2026-10-17",
  "headlineWindow": {
   "start": "2025-10-18",
   "end": "2026-10-17"
  },
  "level": "Expanded chapter",
  "review": {
   "date": "2026-10-17",
   "method": "Original bilingual teaching and source/answer self-review; not independent expert certification. Current affairs are a dated snapshot, with older background labelled explicitly."
  },
  "source": {
   "name": "Andhra Pradesh Reorganisation (Amendment) Act 2026 — Act text, PRS mirror",
   "url": "https://prsindia.org/files/bills_acts/bills_parliament/2026/Andhra_Pradesh_Reorganisation_(A)Act_2026.pdf"
  },
  "sources": [
   [
    "AP Finance — Budget 2026–27 documents",
    "https://apfinance.gov.in/budget.html"
   ],
   [
    "IMD Chennai — Northeast Monsoon 2025 report, April 2026",
    "https://mausam.imd.gov.in/chennai/mcdata/ne_monsoon_2025.pdf"
   ],
   [
    "MeitY/PIB — NIELIT–AP MoU, 21 February 2026",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2231125&reg=48&lang=2"
   ]
  ],
  "segments": [
   {
    "title": "Amaravati: assent and deemed commencement",
    "teTitle": "అమరావతి: ఆమోదం, అమలుగా భావించే తేదీ",
    "text": "Snapshot: 17 October 2026. The Andhra Pradesh Reorganisation (Amendment) Act 2026 received presidential assent on 6 April 2026. It substitutes section 5(2) of the 2014 Act to name Amaravati as the new capital of Andhra Pradesh. The amendment is deemed to have come into force on 2 June 2024. Thus assent and statutory commencement are different dates in this case. The text also links the meaning of Amaravati to the capital city area notified under the AP Capital Region Development Authority Act 2014. For exam chronology, record the enacted wording and dates rather than treating earlier proposals or headlines as the final Act.",
    "te": "17 అక్టోబర్ 2026 నాటి అధ్యయన గమనిక: ఆంధ్రప్రదేశ్ పునర్వ్యవస్థీకరణ సవరణ చట్టం 2026కు రాష్ట్రపతి ఆమోదం 6 ఏప్రిల్ 2026న వచ్చింది. 2014 చట్టంలోని 5(2) స్థానంలో అమరావతిని కొత్త రాజధానిగా పేర్కొంది. అయితే అమలులోకి వచ్చినట్లు భావించే తేదీ 2 జూన్ 2024. ఆమోద తేదీ, చట్టం వర్తించే తేదీ ఒకటి కావు. అమరావతి పరిధికి AP CRDA చట్టం కింద నోటిఫై చేసిన capital city areaతో సంబంధం చూపింది. పాత ప్రతిపాదనను తుది చట్టంగా భావించవద్దు.",
    "example": "A chronology card should contain both 6 April 2026 (assent) and 2 June 2024 (deemed commencement), each with its label.",
    "teExample": "6 ఏప్రిల్ 2026—ఆమోదం; 2 జూన్ 2024—అమలుగా భావించే తేదీ అని వేరు రాయాలి.",
    "trap": "The date printed in a news report is not automatically the Act’s commencement date.",
    "recall": "Why can an Act’s assent and deemed commencement appear in different years?",
    "source": {
     "name": "Andhra Pradesh Reorganisation (Amendment) Act 2026 — Act text, PRS mirror",
     "url": "https://prsindia.org/files/bills_acts/bills_parliament/2026/Andhra_Pradesh_Reorganisation_(A)Act_2026.pdf"
    }
   },
   {
    "title": "AP Budget 2026–27: reading estimates",
    "teTitle": "ఏపీ బడ్జెట్ 2026–27: అంచనాలను చదవడం",
    "text": "The official AP Finance Budget 2026–27 tables distinguish actuals, budget estimates and revised estimates. In the Budget in Brief expenditure table, the 2026–27 budget estimate for total expenditure is ₹3,32,205.33 crore. This total includes categories beyond revenue expenditure alone. A budget estimate is a planned amount for the coming financial year; a revised estimate updates an earlier budget during the year, and actuals report realised transactions. A deficit must be read with its definition, sign convention and denominator. AP ratios using GSDP cannot be copied into a Union answer using national GDP. Always identify the year and the column before recalling a number.",
    "te": "ఏపీ ఆర్థిక శాఖ 2026–27 పట్టికల్లో actuals, budget estimates, revised estimates వేర్వేరు కాలమ్‌లు. Budget in Brief ప్రకారం 2026–27 మొత్తం వ్యయ బడ్జెట్ అంచనా ₹3,32,205.33 కోట్లు. ఇది కేవలం revenue expenditure కాదు. BE ముందుగా వేసిన అంచనా; RE అదే సంవత్సరానికి సవరించిన అంచనా; actual నిజంగా జరిగిన లావాదేవీ. ఒక సంఖ్య రాయడానికి ముందు సంవత్సరం, కాలమ్ పేరు చూడాలి. రాష్ట్ర నిష్పత్తికి GSDP, కేంద్రానికి GDP వాడవచ్చు; వాటిని కలపకూడదు.",
    "example": "If a table labels ₹3,32,205.33 crore as BE 2026–27, write “budget estimate”, not “already spent by October 2026”.",
    "teExample": "BE మొత్తాన్ని అక్టోబర్ నాటికి మొత్తం ఖర్చయిందని రాయకూడదు; అది బడ్జెట్ అంచనా.",
    "trap": "An estimate is not an outturn; state GSDP and national GDP are different denominators.",
    "recall": "How do BE, RE and actuals answer different questions about expenditure?",
    "source": {
     "name": "AP Finance — Budget 2026–27 documents",
     "url": "https://apfinance.gov.in/budget.html"
    }
   },
   {
    "title": "Cyclone Montha: retrospective evidence",
    "teTitle": "మొంథా తుఫాను: సంఘటన తర్వాత ఆధారం",
    "text": "IMD’s April 2026 report on the Northeast Monsoon 2025 records severe cyclonic storm Montha crossing the Andhra Pradesh and Yanam coast south of Kakinada, close to Narsapur, on 28 October 2025. This is a retrospective description, not a forecast of the likely landfall. A forecast cone describes uncertainty before the event; the analysed track is produced using later observations. For an AP current-affairs answer, connect the Bay of Bengal cyclone to coastal exposure, warnings and preparedness without inventing casualty or damage totals. The date of the cyclone and the date of the report belong on separate lines of the same study card.",
    "te": "IMD ఏప్రిల్ 2026 ఈశాన్య రుతుపవన నివేదిక ప్రకారం severe cyclonic storm మొంథా 28 అక్టోబర్ 2025న కాకినాడకు దక్షిణంగా నర్సాపూర్ సమీపంలో ఆంధ్రప్రదేశ్-యానాం తీరాన్ని దాటింది. ఇది సంఘటన తర్వాత విశ్లేషణ; ముందుగా చెప్పిన అంచనా స్థలం కాదు. Forecastలో అనిశ్చితి ఉంటుంది. తర్వాత పరిశీలనలతో అసలు మార్గం నిర్ధారిస్తారు. సంఘటన తేదీ, నివేదిక తేదీ వేరు. అధికారిక ఆధారం లేకుండా మరణాలు, నష్టం సంఖ్యలను కల్పించవద్దు.",
    "example": "A card headed “Montha — 28 October 2025” can cite the April 2026 IMD report; the report’s year does not move the cyclone into 2026.",
    "teExample": "2026 నివేదికలో ఉందని మొంథా 2026లో వచ్చిందని అనుకోకూడదు; సంఘటన 2025లో జరిగింది.",
    "trap": "A pre-event projected crossing point should not replace the retrospective analysed location.",
    "recall": "What is the difference between the event date, forecast date and retrospective report date?",
    "source": {
     "name": "IMD Chennai — Northeast Monsoon 2025 report, April 2026",
     "url": "https://mausam.imd.gov.in/chennai/mcdata/ne_monsoon_2025.pdf"
    }
   },
   {
    "title": "NIELIT–AP MoU: proposal versus operation",
    "teTitle": "NIELIT–ఏపీ ఒప్పందం: ప్రతిపాదన, నిర్వహణ",
    "text": "A MeitY release dated 21 February 2026 reports that NIELIT and the Andhra Pradesh government signed an MoU on 20 February 2026 concerning a proposed Quantum and AI university campus at Amaravati. NIELIT is associated with the Ministry of Electronics and Information Technology. The event illustrates links between emerging technology, skills and state development. However, signing an MoU does not by itself demonstrate that a campus is built, admitting students or awarding degrees. Record the partners, location and proposed purpose, then label the implementation stage precisely. A later operational claim would require a separate dated institutional source.",
    "te": "21 ఫిబ్రవరి 2026 MeitY ప్రకటన ప్రకారం NIELIT, ఏపీ ప్రభుత్వం 20 ఫిబ్రవరిన అమరావతిలో ప్రతిపాదిత Quantum-AI university campus అంశంపై MoU చేసుకున్నాయి. NIELIT ఎలక్ట్రానిక్స్, సమాచార సాంకేతిక మంత్రిత్వ శాఖకు సంబంధించిన సంస్థ. సాంకేతిక నైపుణ్యాలు, రాష్ట్ర అభివృద్ధి మధ్య సంబంధం ఇది. కానీ MoU సంతకం అంటే భవనం పూర్తై తరగతులు మొదలయ్యాయని కాదు. భాగస్వాములు, స్థలం, ప్రతిపాదిత ఉద్దేశం, అమలు దశలను స్పష్టంగా రాయాలి.",
    "example": "“MoU signed on 20 February” and “campus operational” are different propositions; the first release supports the first only.",
    "teExample": "“MoU సంతకం అయింది” అనే ఆధారం “తరగతులు ప్రారంభమయ్యాయి” అని నిరూపించదు.",
    "trap": "Announcement, agreement, construction and operation are different milestones.",
    "recall": "Which new evidence would you seek before describing the proposed campus as operational?",
    "source": {
     "name": "MeitY/PIB — NIELIT–AP MoU, 21 February 2026",
     "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2231125&reg=48&lang=2"
    }
   }
  ],
  "outline": [
   "Amaravati: assent and deemed commencement",
   "AP Budget 2026–27: reading estimates",
   "Cyclone Montha: retrospective evidence",
   "NIELIT–AP MoU: proposal versus operation"
  ],
  "recall": [
   "Why can an Act’s assent and deemed commencement appear in different years?",
   "How do BE, RE and actuals answer different questions about expenditure?",
   "What is the difference between the event date, forecast date and retrospective report date?"
  ],
  "references": [
   "Snapshot: 17 October 2026. The Andhra Pradesh Reorganisation (Amendment) Act 2026 received presidential assent on 6 April 2026. It substitutes section 5(2) of the 2014 Act to name Amaravati as the new capital of Andhra Pradesh. The amendment is deemed to have come into force on 2 June 2024. Thus assent and statutory commencement are different dates in this case. The text also links the meaning of Amaravati to the capital city area notified under the AP Capital Region Development Authority Act 2014. For exam chronology, record the enacted wording and dates rather than treating earlier proposals or headlines as the final Act.",
   "The official AP Finance Budget 2026–27 tables distinguish actuals, budget estimates and revised estimates. In the Budget in Brief expenditure table, the 2026–27 budget estimate for total expenditure is ₹3,32,205.33 crore. This total includes categories beyond revenue expenditure alone. A budget estimate is a planned amount for the coming financial year; a revised estimate updates an earlier budget during the year, and actuals report realised transactions. A deficit must be read with its definition, sign convention and denominator. AP ratios using GSDP cannot be copied into a Union answer using national GDP. Always identify the year and the column before recalling a number.",
   "IMD’s April 2026 report on the Northeast Monsoon 2025 records severe cyclonic storm Montha crossing the Andhra Pradesh and Yanam coast south of Kakinada, close to Narsapur, on 28 October 2025. This is a retrospective description, not a forecast of the likely landfall. A forecast cone describes uncertainty before the event; the analysed track is produced using later observations. For an AP current-affairs answer, connect the Bay of Bengal cyclone to coastal exposure, warnings and preparedness without inventing casualty or damage totals. The date of the cyclone and the date of the report belong on separate lines of the same study card."
  ],
  "summary": [
   "Snapshot: 17 October 2026; distinguish event and publication dates.",
   "Amaravati amendment: assent in 2026, deemed commencement in 2024.",
   "Read AP budget estimates as estimates, not actual expenditure.",
   "Montha observations and an education MoU illustrate different evidence types."
  ]
 },
 "t-6-1": {
  "topic": "t-6-1",
  "batch": 6,
  "edition": "2026-10-17-b6",
  "asOf": "2026-10-17",
  "headlineWindow": {
   "start": "2025-10-18",
   "end": "2026-10-17"
  },
  "level": "Expanded chapter",
  "review": {
   "date": "2026-10-17",
   "method": "Original bilingual teaching and source/answer self-review; not independent expert certification. Current affairs are a dated snapshot, with older background labelled explicitly."
  },
  "source": {
   "name": "Ministry of Finance — Union Budget 2026–27, Budget at a Glance",
   "url": "https://www.indiabudget.gov.in/doc/Budget_at_Glance/budget_at_a_glance.pdf"
  },
  "sources": [
   [
    "MeitY/PIB — AI Impact Summit declaration, 21 February 2026",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2231208&lang=2&reg=48"
   ],
   [
    "PIB — DPDP Rules notification, 14 November 2025",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&lang=2&reg=3"
   ],
   [
    "ICC — Women’s World Cup final, 2 November 2025",
    "https://www.icc-cricket.com/media-releases/india-clinch-historic-first-icc-women-s-cricket-world-cup-title"
   ]
  ],
  "segments": [
   {
    "title": "Union Budget 2026–27 and fiscal arithmetic",
    "teTitle": "కేంద్ర బడ్జెట్ 2026–27, లోటు అర్థం",
    "text": "In the Union Budget 2026–27 Budget at a Glance, the fiscal-deficit budget estimate is 4.3% of GDP. This is the Union figure and an estimate for the stated financial year. Fiscal deficit broadly measures the excess of total expenditure over receipts excluding borrowings under the budget definition; it is not simply the shortfall of revenue receipts against revenue expenditure. A percentage may change because the numerator, denominator or both change. Use the accompanying table labels and compare like years and estimate types. A budget projection is not proof that the year has ended with precisely that realised ratio.",
    "te": "కేంద్ర బడ్జెట్ 2026–27లో fiscal deficit BE GDPలో 4.3%. ఇది కేంద్రం, ఆ ఆర్థిక సంవత్సరానికి అంచనా. Fiscal deficit, revenue deficit ఒకటే కాదు. అప్పులు మినహాయించిన రసీదులతో మొత్తం వ్యయాన్ని పోల్చే భావన fiscal deficit. శాతం మారడానికి లోటు మొత్తం, GDP లేదా రెండూ మారవచ్చు. సంవత్సరం, BE/RE లేబుల్ చూసి పోల్చాలి. బడ్జెట్‌లో అంచనా ఇచ్చారంటే సంవత్సరం చివర actual కూడా అదే అయిందని కాదు. రాష్ట్ర GSDP నిష్పత్తితో కేంద్ర GDP నిష్పత్తిని కలపవద్దు.",
    "example": "A question naming Union BE 2026–27 calls for 4.3% of GDP; an AP budget ratio uses a different government and denominator.",
    "teExample": "కేంద్ర BE 2026–27కు 4.3% GDP; రాష్ట్రానికి వేరే ప్రభుత్వం, వేరే denominator.",
    "trap": "Fiscal deficit and revenue deficit are not interchangeable, and BE is not an actual outturn.",
    "recall": "Why must a fiscal ratio retain its government, year and denominator labels?",
    "source": {
     "name": "Ministry of Finance — Union Budget 2026–27, Budget at a Glance",
     "url": "https://www.indiabudget.gov.in/doc/Budget_at_Glance/budget_at_a_glance.pdf"
    }
   },
   {
    "title": "AI Impact Summit and the New Delhi Declaration",
    "teTitle": "AI ఇంపాక్ట్ సమ్మిట్, న్యూ ఢిల్లీ ప్రకటన",
    "text": "The official 21 February 2026 release records the AI Impact Summit held in New Delhi on 18–19 February 2026 and the New Delhi Declaration on AI Impact. Study the venue, dates and cooperative purpose together. A declaration can express shared priorities without being identical to a domestically enacted law or a treaty with specified binding obligations. The release’s endorsement count is a count as reported at that time, not an automatically permanent membership total. For exam analysis, connect AI cooperation to access, capacity and governance while keeping the legal form of the document distinct from its policy aspirations.",
    "te": "21 ఫిబ్రవరి 2026 అధికారిక ప్రకటన ప్రకారం AI Impact Summit న్యూ ఢిల్లీలో 18–19 ఫిబ్రవరి 2026న జరిగింది; New Delhi Declaration on AI Impact దానితో సంబంధం. స్థలం, తేదీలు, సహకార లక్ష్యాన్ని కలిపి చదవాలి. Declarationను దేశీయంగా అమలైన చట్టంతో లేదా బంధించే treatyతో సమానం చేయకూడదు. ఒక రోజు ప్రకటనలో ఉన్న మద్దతుదారుల సంఖ్య శాశ్వత మొత్తం కాదు. AI ప్రాప్తి, సామర్థ్య నిర్మాణం, పాలన విషయాల్ని పత్రం స్వరూపంతో వేరు చేసి చూడాలి.",
    "example": "A study card should say “New Delhi Declaration — AI Impact Summit, February 2026”, without labelling it an Indian Act.",
    "teExample": "AI ప్రకటనను “భారత చట్టం” అని పిలవకుండా summit పత్రంగా గుర్తించాలి.",
    "trap": "A cooperative declaration does not automatically create the same obligations as legislation.",
    "recall": "What is the difference between a summit declaration and a domestic statute?",
    "source": {
     "name": "MeitY/PIB — AI Impact Summit declaration, 21 February 2026",
     "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2231208&lang=2&reg=48"
    }
   },
   {
    "title": "DPDP Rules 2025: final notification versus draft",
    "teTitle": "DPDP నియమాలు: తుది నోటిఫికేషన్, ముసాయిదా",
    "text": "The government notified the Digital Personal Data Protection Rules 2025 on 14 November 2025. A January 2025 draft and its explanatory note belong to consultation history, not the final notification. The DPDP Act 2023 and the Rules 2025 also have different dates and functions: an Act provides the statutory framework and rules supply details under delegated authority. Notification should not be read as a claim that every obligation commenced on the same day; phased provisions and the actual Gazette text matter. In terminology, the Data Principal is the individual to whom personal data relates, while the Data Fiduciary determines the purpose and means of processing.",
    "te": "డిజిటల్ వ్యక్తిగత డేటా రక్షణ నియమాలు 2025ను 14 నవంబర్ 2025న నోటిఫై చేశారు. జనవరి ముసాయిదా తుది నియమాలు కాదు. DPDP Act 2023 చట్ట చట్రం; Rules 2025 దాని కింద వివరాలు ఇస్తాయి. నోటిఫికేషన్ వచ్చిన రోజే ప్రతి బాధ్యత ఒకేసారి మొదలైందని అనకూడదు; దశలవారీ అమలు, Gazette పాఠం చూడాలి. Data Principal అంటే డేటా సంబంధించిన వ్యక్తి. Data Fiduciary ప్రాసెసింగ్ ఉద్దేశం, విధానాన్ని నిర్ణయిస్తుంది. ఇది పరీక్ష బోధన; వ్యక్తిగత compliance నిర్ణయం కాదు.",
    "example": "A question asking the final Rules notification date needs 14 November 2025, not the January consultation date or the Act’s 2023 year.",
    "teExample": "తుది Rules తేదీకి నవంబర్ 2025; ముసాయిదా తేదీ, Act సంవత్సరం వేరుగా గుర్తించాలి.",
    "trap": "Draft, final notification and commencement of a particular provision are different stages.",
    "recall": "Why should a draft explanatory note not be cited as the final rules text?",
    "source": {
     "name": "PIB — DPDP Rules notification, 14 November 2025",
     "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&lang=2&reg=3"
    }
   },
   {
    "title": "India’s first women’s ODI World Cup title",
    "teTitle": "భారత్ తొలి మహిళల ODI ప్రపంచకప్",
    "text": "On 2 November 2025, India won its first ICC Women’s Cricket World Cup title, defeating South Africa by 52 runs at Navi Mumbai. This was the women’s ODI World Cup, not the Women’s T20 World Cup or a men’s tournament. The organiser’s match report supports the result and margin. Sports current affairs often tests the event, format, winner, opponent and venue as a set; an answer combining facts from different finals is still wrong. Keep this completed result separate from future fixtures and retain the date so that “first title” has the correct competition and historical scope.",
    "te": "2 నవంబర్ 2025న భారత్ నవి ముంబైలో దక్షిణాఫ్రికాను 52 పరుగులతో ఓడించి తొలి ICC Women’s Cricket World Cup గెలిచింది. ఇది మహిళల ODI ప్రపంచకప్; T20 లేదా పురుషుల పోటీ కాదు. విజేత, ప్రత్యర్థి, మార్జిన్, స్థలం, ఫార్మాట్‌ను ఒకే సంఘటనగా గుర్తుంచుకోవాలి. వేర్వేరు ఫైనల్స్ విషయాలను కలిపితే తప్పు. “తొలి” అన్నప్పుడు ఏ జట్టు, ఏ ఫార్మాట్, ఏ పోటీ అన్న పరిధి ముఖ్యం. పూర్తయిన ఫలితాన్ని భవిష్యత్ షెడ్యూల్‌తో కలపకూడదు.",
    "example": "“India — South Africa — 52 runs — women’s ODI — 2 November 2025” is a consistent result chain.",
    "teExample": "భారత్–దక్షిణాఫ్రికా–52 పరుగులు–మహిళల ODI–2 నవంబర్ 2025 అని కలిపి గుర్తించాలి.",
    "trap": "The winner alone is insufficient if the question specifies a different format or tournament.",
    "recall": "Which labels prevent confusing the 2025 ODI title with a T20 result?",
    "source": {
     "name": "ICC — Women’s World Cup final, 2 November 2025",
     "url": "https://www.icc-cricket.com/media-releases/india-clinch-historic-first-icc-women-s-cricket-world-cup-title"
    }
   }
  ],
  "outline": [
   "Union Budget 2026–27 and fiscal arithmetic",
   "AI Impact Summit and the New Delhi Declaration",
   "DPDP Rules 2025: final notification versus draft",
   "India’s first women’s ODI World Cup title"
  ],
  "recall": [
   "Why must a fiscal ratio retain its government, year and denominator labels?",
   "What is the difference between a summit declaration and a domestic statute?",
   "Why should a draft explanatory note not be cited as the final rules text?"
  ],
  "references": [
   "In the Union Budget 2026–27 Budget at a Glance, the fiscal-deficit budget estimate is 4.3% of GDP. This is the Union figure and an estimate for the stated financial year. Fiscal deficit broadly measures the excess of total expenditure over receipts excluding borrowings under the budget definition; it is not simply the shortfall of revenue receipts against revenue expenditure. A percentage may change because the numerator, denominator or both change. Use the accompanying table labels and compare like years and estimate types. A budget projection is not proof that the year has ended with precisely that realised ratio.",
   "The official 21 February 2026 release records the AI Impact Summit held in New Delhi on 18–19 February 2026 and the New Delhi Declaration on AI Impact. Study the venue, dates and cooperative purpose together. A declaration can express shared priorities without being identical to a domestically enacted law or a treaty with specified binding obligations. The release’s endorsement count is a count as reported at that time, not an automatically permanent membership total. For exam analysis, connect AI cooperation to access, capacity and governance while keeping the legal form of the document distinct from its policy aspirations.",
   "The government notified the Digital Personal Data Protection Rules 2025 on 14 November 2025. A January 2025 draft and its explanatory note belong to consultation history, not the final notification. The DPDP Act 2023 and the Rules 2025 also have different dates and functions: an Act provides the statutory framework and rules supply details under delegated authority. Notification should not be read as a claim that every obligation commenced on the same day; phased provisions and the actual Gazette text matter. In terminology, the Data Principal is the individual to whom personal data relates, while the Data Fiduciary determines the purpose and means of processing."
  ],
  "summary": [
   "Use dated official documents for national events.",
   "Union fiscal-deficit BE 2026–27 uses GDP as denominator.",
   "AI declaration and data-protection rules have different legal forms.",
   "Distinguish the women’s ODI World Cup from T20 competitions."
  ]
 },
 "t-6-2": {
  "topic": "t-6-2",
  "batch": 6,
  "edition": "2026-10-17-b6",
  "asOf": "2026-10-17",
  "headlineWindow": {
   "start": "2025-10-18",
   "end": "2026-10-17"
  },
  "level": "Expanded chapter",
  "review": {
   "date": "2026-10-17",
   "method": "Original bilingual teaching and source/answer self-review; not independent expert certification. Current affairs are a dated snapshot, with older background labelled explicitly."
  },
  "source": {
   "name": "UNFCCC — COP30 session information and reports",
   "url": "https://unfccc.int/cop30"
  },
  "sources": [
   [
    "South African DIRCO — G20 leaders declaration, November 2025",
    "https://dirco.gov.za/g20-south-africa-summit-leaders-declaration-22-and-23-november-2025/"
   ],
   [
    "IOC — Milano Cortina 2026 dates",
    "https://support.olympics.com/hc/en-gb/articles/43002165477267-Where-and-when-will-the-2026-Olympic-Winter-Games-take-place"
   ],
   [
    "European Commission — EU–India trade negotiations",
    "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/india_en"
   ]
  ],
  "segments": [
   {
    "title": "COP30 in Belém: climate negotiations",
    "teTitle": "బెలెమ్ COP30: వాతావరణ చర్చలు",
    "text": "COP30, the 2025 UN climate conference, was hosted in Belém, Brazil. Its published schedule was 10–21 November, while the final session report records the conference held on 10–22 November 2025. Scheduled and actual closing dates need not coincide when negotiations run late. COP is the Conference of the Parties under the climate convention; it is not the same forum as the G20. For an answer about an outcome, identify the specific decision rather than inventing a single universal enforcement rule from the host location. This chapter uses host and chronology as verified facts and distinguishes those from broader policy interpretation.",
    "te": "2025 UN వాతావరణ సదస్సు COP30 బ్రెజిల్‌లోని బెలెమ్‌లో జరిగింది. ముందుగా ప్రకటించిన షెడ్యూల్ 10–21 నవంబర్; తుది session నివేదికలో 10–22 నవంబర్ 2025గా ఉంది. చర్చలు పొడిగితే షెడ్యూల్ ముగింపు, నిజ ముగింపు వేరు కావచ్చు. COP అంటే climate conventionలో భాగస్వామ్య దేశాల సమావేశం. ఇది G20 కాదు. స్థలం తెలిసినంత మాత్రాన అన్ని నిర్ణయాలు ఒకే విధంగా బంధిస్తాయని అనకూడదు. ఫలితం అడిగితే సంబంధిత నిర్ణయ పాఠాన్ని చూడాలి.",
    "example": "For “host city of COP30”, answer Belém; for “scheduled dates”, retain 10–21 November and do not label them the final recorded session dates.",
    "teExample": "Host cityకి బెలెమ్; scheduled dates, తుది session datesను వేరు రాయాలి.",
    "trap": "Scheduled end dates and final session dates may differ; specify which the question asks.",
    "recall": "How does identifying the forum prevent confusing a climate COP with a G20 summit?",
    "source": {
     "name": "UNFCCC — COP30 session information and reports",
     "url": "https://unfccc.int/cop30"
    }
   },
   {
    "title": "Johannesburg G20 Summit 2025",
    "teTitle": "జోహానెస్‌బర్గ్ G20 సమ్మిట్ 2025",
    "text": "The 2025 G20 leaders’ declaration identifies the summit at Johannesburg, South Africa, on 22–23 November 2025. The South African presidency’s theme was Solidarity, Equality, Sustainability. This was the first G20 leaders’ summit held on the African continent. A presidency, the summit venue and attendance by individual member governments are different facts; the existence of a declaration does not mean that every member attended at the same level. The G20 is a forum for international economic cooperation, not a substitute for the United Nations or an automatically binding world legislature. Keep the host and theme tied to the 2025 edition.",
    "te": "2025 G20 నేతల ప్రకటన ప్రకారం సమ్మిట్ జోహానెస్‌బర్గ్, దక్షిణాఫ్రికాలో 22–23 నవంబర్ 2025న జరిగింది. Theme: Solidarity, Equality, Sustainability. ఆఫ్రికా ఖండంలో జరిగిన తొలి G20 leaders summit ఇది. అధ్యక్షత, సమావేశ స్థలం, ప్రతి దేశం హాజరు స్థాయి వేర్వేరు విషయాలు. ప్రకటన వచ్చిందంటే అందరూ ఒకే స్థాయిలో హాజరయ్యారని కాదు. G20 ఆర్థిక సహకార వేదిక; ప్రపంచ శాసనసభ కాదు. ఈ స్థలం, themeను 2025 సంవత్సరంతోనే జతచేయాలి.",
    "example": "A comparison card pairs COP30 with Belém and G20 2025 with Johannesburg; swapping the two hosts loses the forum-year relationship.",
    "teExample": "COP30—బెలెమ్; G20 2025—జోహానెస్‌బర్గ్ అని వేర్వేరుగా గుర్తించాలి.",
    "trap": "A summit declaration does not establish universal attendance or automatic domestic legal force.",
    "recall": "Why should summit host, presidency and attendance be tracked separately?",
    "source": {
     "name": "South African DIRCO — G20 leaders declaration, November 2025",
     "url": "https://dirco.gov.za/g20-south-africa-summit-leaders-declaration-22-and-23-november-2025/"
    }
   },
   {
    "title": "Milano Cortina 2026: Olympic calendar",
    "teTitle": "మిలానో కోర్టినా 2026: ఒలింపిక్ క్యాలెండర్",
    "text": "The Milano Cortina 2026 Olympic Winter Games were scheduled for 6–22 February 2026 in Italy, with events distributed across host locations. The Winter Paralympic Games had a separate 6–15 March 2026 window. These are different competitions and dates even though they share the host edition. At this October 2026 snapshot, the calendar dates are past; a pre-event organiser FAQ is evidence for the schedule, not a source for final medal totals. Distinguish Winter from Summer Games and competition dates from opening announcements. Do not derive results from a timetable or assume that every event occurs in one stadium.",
    "te": "మిలానో కోర్టినా 2026 Winter Olympicsకు నిర్వాహకుల తేదీలు 6–22 ఫిబ్రవరి 2026, దేశం ఇటలీ. Winter Paralympics వేరు: 6–15 మార్చి 2026. ఒకే host edition ఉన్నా పోటీలు, తేదీలు వేరు. అక్టోబర్ 2026 నాటికి ఈ తేదీలు గతంలో ఉన్నాయి. ముందస్తు FAQ షెడ్యూల్‌కు ఆధారం; తుది పతకాల సంఖ్యకు కాదు. Winter, Summer Gamesను కలపవద్దు. అన్నీ ఒక స్టేడియంలో జరిగాయని ఊహించవద్దు. ఫలితానికి ఫలితాల నివేదికే అవసరం.",
    "example": "A February Olympic date is not a March Paralympic date, and neither date alone identifies a medal winner.",
    "teExample": "ఫిబ్రవరి Olympics, మార్చి Paralympics వేరు; తేదీతో పతక విజేతను నిర్ణయించలేం.",
    "trap": "A schedule verifies dates, not final sporting results.",
    "recall": "What source would be needed to add a medal-table question responsibly?",
    "source": {
     "name": "IOC — Milano Cortina 2026 dates",
     "url": "https://support.olympics.com/hc/en-gb/articles/43002165477267-Where-and-when-will-the-2026-Olympic-Winter-Games-take-place"
    }
   },
   {
    "title": "EU–India FTA: conclusion is a milestone",
    "teTitle": "EU–భారత్ FTA: చర్చల ముగింపు ఒక దశ",
    "text": "The European Commission records the conclusion of EU–India free-trade-agreement negotiations on 27 January 2026. Conclusion of negotiations means the negotiating process reached agreement at that stage; it is not the same statement as signature, ratification or entry into force. Those later milestones require their own evidence and applicable procedures. Trade agreements can address tariffs, rules and market access, but a headline cannot establish that every tariff vanished immediately. Separate the goods and services FTA process from other negotiations such as investment protection or geographical indications where the official source treats them separately. Record the exact milestone in a dated current-affairs answer.",
    "te": "యూరోపియన్ కమిషన్ ప్రకారం EU–భారత్ FTA చర్చలు 27 జనవరి 2026న ముగిశాయి. చర్చలు ముగియడం, సంతకం, ratification, అమలులోకి రావడం వేర్వేరు దశలు. తర్వాతి దశకు వేరే ఆధారం అవసరం. వార్తలో ఒప్పందం అన్నంత మాత్రాన అన్ని సుంకాలు వెంటనే తొలగిపోయాయని అనుకోకూడదు. వస్తువులు-సేవల FTA చర్చలను పెట్టుబడి రక్షణ, geographical indications వంటి వేరు చర్చలతో కలపకూడదు. ప్రశ్నలో ఏ milestone అడిగారో చూసి తేదీతో సమాధానం ఇవ్వాలి.",
    "example": "“Negotiations concluded, 27 January 2026” is supported; “all duties became zero that day” is a different unsupported claim.",
    "teExample": "చర్చలు ముగిశాయి అన్నది ఆధారం; అదే రోజు అన్ని duties సున్నా అయ్యాయని కాదు.",
    "trap": "Conclusion, signature, ratification and entry into force must not be collapsed into one date.",
    "recall": "Why can a concluded trade negotiation still require later implementation steps?",
    "source": {
     "name": "European Commission — EU–India trade negotiations",
     "url": "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/india_en"
    }
   }
  ],
  "outline": [
   "COP30 in Belém: climate negotiations",
   "Johannesburg G20 Summit 2025",
   "Milano Cortina 2026: Olympic calendar",
   "EU–India FTA: conclusion is a milestone"
  ],
  "recall": [
   "How does identifying the forum prevent confusing a climate COP with a G20 summit?",
   "Why should summit host, presidency and attendance be tracked separately?",
   "What source would be needed to add a medal-table question responsibly?"
  ],
  "references": [
   "COP30, the 2025 UN climate conference, was hosted in Belém, Brazil. Its published schedule was 10–21 November, while the final session report records the conference held on 10–22 November 2025. Scheduled and actual closing dates need not coincide when negotiations run late. COP is the Conference of the Parties under the climate convention; it is not the same forum as the G20. For an answer about an outcome, identify the specific decision rather than inventing a single universal enforcement rule from the host location. This chapter uses host and chronology as verified facts and distinguishes those from broader policy interpretation.",
   "The 2025 G20 leaders’ declaration identifies the summit at Johannesburg, South Africa, on 22–23 November 2025. The South African presidency’s theme was Solidarity, Equality, Sustainability. This was the first G20 leaders’ summit held on the African continent. A presidency, the summit venue and attendance by individual member governments are different facts; the existence of a declaration does not mean that every member attended at the same level. The G20 is a forum for international economic cooperation, not a substitute for the United Nations or an automatically binding world legislature. Keep the host and theme tied to the 2025 edition.",
   "The Milano Cortina 2026 Olympic Winter Games were scheduled for 6–22 February 2026 in Italy, with events distributed across host locations. The Winter Paralympic Games had a separate 6–15 March 2026 window. These are different competitions and dates even though they share the host edition. At this October 2026 snapshot, the calendar dates are past; a pre-event organiser FAQ is evidence for the schedule, not a source for final medal totals. Distinguish Winter from Summer Games and competition dates from opening announcements. Do not derive results from a timetable or assume that every event occurs in one stadium."
  ],
  "summary": [
   "Match host, forum and year before memorising outcomes.",
   "COP30 and G20 have different institutional purposes.",
   "Olympic and Paralympic dates are distinct.",
   "Conclusion of negotiations is not entry into force of an agreement."
  ]
 },
 "t-6-3": {
  "topic": "t-6-3",
  "batch": 6,
  "edition": "2026-10-17-b6",
  "asOf": "2026-10-17",
  "headlineWindow": {
   "start": "2025-10-18",
   "end": "2026-10-17"
  },
  "level": "Expanded chapter",
  "review": {
   "date": "2026-10-17",
   "method": "Original bilingual teaching and source/answer self-review; not independent expert certification. Current affairs are a dated snapshot, with older background labelled explicitly."
  },
  "source": {
   "name": "Road Transport Ministry/PIB — PM-RAHAT reply, 12 August 2026",
   "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2298285&lang=2&reg=48"
  },
  "sources": [
   [
    "PIB — four decisions, 13 February 2026",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2227542&lang=1&reg=1"
   ],
   [
    "DPIIT — Fund of Funds 2.0 notification, 13 April 2026",
    "https://www.startupindia.gov.in/content/dam/startupindia/Startup-India-Fund-of-Funds-2.0-Scheme.pdf"
   ]
  ],
  "segments": [
   {
    "title": "PM-RAHAT: dates and scheme parameters",
    "teTitle": "PM-RAHAT: తేదీలు, పథకం పరిమితులు",
    "text": "The Road Transport Ministry’s 12 August 2026 parliamentary reply records PM-RAHAT’s launch on 13 February 2026. It describes cashless treatment for victims of road accidents caused by use of motor vehicles, up to ₹1.5 lakh per victim for a maximum of seven days from the accident. The underlying scheme notification and later naming or launch milestones are not identical dates. These are educational scheme parameters from the cited reply, not a promise that an individual hospital claim will be accepted without the applicable procedures. For a fact card, keep the per-victim ceiling and time limit together rather than turning them into an annual household payment.",
    "te": "రోడ్డు రవాణా శాఖ 12 ఆగస్టు 2026 పార్లమెంటు సమాధానం ప్రకారం PM-RAHAT ప్రారంభం 13 ఫిబ్రవరి 2026. మోటారు వాహన వినియోగం వల్ల జరిగిన రోడ్డు ప్రమాద బాధితులకు ప్రమాదం నుంచి గరిష్ఠంగా ఏడు రోజుల వరకు, ఒక్కో బాధితునికి ₹1.5 లక్షల వరకు cashless చికిత్స పరిమితిని వివరించింది. Notification, పేరు మార్పు, launch తేదీలు ఒకటే కాదు. ఇది పథకం వివరాల బోధన; ప్రతి వ్యక్తి claim ప్రక్రియ లేకుండా ఆమోదమవుతుందనే హామీ కాదు. కుటుంబ వార్షిక నగదు చెల్లింపుగా భావించవద్దు.",
    "example": "A question quoting the August reply should pair “per victim” with ₹1.5 lakh and “from the accident” with seven days.",
    "teExample": "₹1.5 లక్షలు—ఒక్కో బాధితునికి; ఏడు రోజులు—ప్రమాద తేదీ నుంచి అని కలిపి చదవాలి.",
    "trap": "A scheme ceiling is not an automatic lump-sum payment or individual claim guarantee.",
    "recall": "Why should a scheme card separate notification, launch and review dates?",
    "source": {
     "name": "Road Transport Ministry/PIB — PM-RAHAT reply, 12 August 2026",
     "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2298285&lang=2&reg=48"
    }
   },
   {
    "title": "Lakhpati Didi: a revised target",
    "teTitle": "లఖ్‌పతి దీదీ: సవరించిన లక్ష్యం",
    "text": "The official 13 February 2026 decisions release states that the Lakhpati Didi target was doubled to six crore. The operative word is target: it describes an intended scale, not proof that six crore women had already reached the relevant livelihood benchmark on that date. Policy analysis should distinguish women enrolled, women receiving support and women whose sustained income outcome is verified. A doubled target also differs from a doubling of every participant’s income. Retain the programme name, six-crore unit and announcement date together; assess achievement only from a later source with its definition and reference period.",
    "te": "13 ఫిబ్రవరి 2026 నిర్ణయాల ప్రకటనలో Lakhpati Didi లక్ష్యాన్ని రెట్టింపు చేసి ఆరు కోట్లకు పెంచినట్లు ఉంది. Target అంటే చేరాలనుకున్న పరిమాణం; అదే రోజుకు ఆరు కోట్ల మంది లక్ష్య ఆదాయం సాధించారని కాదు. చేరినవారు, మద్దతు పొందినవారు, స్థిర ఆదాయం నిర్ధారించినవారు వేరు. లక్ష్యం రెట్టింపు అంటే ప్రతి మహిళ ఆదాయం రెట్టింపైందని కాదు. పథకం పేరు, ఆరు కోట్ల యూనిట్, తేదీ కలిపి గుర్తుంచుకోవాలి. సాధనకు తర్వాతి ఆధారం అవసరం.",
    "example": "If an announcement raises a target from three to six crore, it doubles the intended reach; it does not establish six crore completed outcomes.",
    "teExample": "మూడు నుంచి ఆరు కోట్ల target అంటే ఆశించిన చేరిక రెట్టింపు; సాధించిన ఫలితం అని కాదు.",
    "trap": "Targets, enrolment and verified sustained-income outcomes measure different things.",
    "recall": "Which evidence would be needed before converting a target into an achievement claim?",
    "source": {
     "name": "PIB — four decisions, 13 February 2026",
     "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2227542&lang=1&reg=1"
    }
   },
   {
    "title": "Agriculture Infrastructure Fund: financing scale",
    "teTitle": "వ్యవసాయ మౌలిక వసతుల నిధి: ఆర్థిక పరిమాణం",
    "text": "The same 13 February 2026 release states that the Agriculture Infrastructure Fund’s financing scale was doubled to ₹2 lakh crore. Read this as a financing framework amount rather than a count of farmers or a cash grant already distributed equally among them. Agricultural infrastructure can involve projects that support storage, handling and other productive services, but each project’s eligibility and support must follow its applicable guidelines. A larger financing envelope can enable more investment without proving that all funds have been sanctioned, disbursed or used successfully. In a budget or scheme comparison, separate allocation, credit availability, sanction, disbursement and completed assets.",
    "te": "13 ఫిబ్రవరి 2026 ప్రకటనలో Agriculture Infrastructure Fund financing పరిమాణాన్ని రెట్టింపు చేసి ₹2 లక్షల కోట్లకు పెంచినట్లు పేర్కొన్నారు. ఇది రైతుల సంఖ్య కాదు; అందరికీ సమానంగా ఇప్పటికే పంచిన నగదు గ్రాంట్ కాదు. నిల్వ, నిర్వహణ వంటి మౌలిక సదుపాయాల ప్రాజెక్టులకు సంబంధించిన ఆర్థిక చట్రం. ప్రతి ప్రాజెక్టుకు మార్గదర్శకాలు వర్తిస్తాయి. Envelope పెరిగితే అవకాశాలు పెరగవచ్చు; sanction, disbursement, విజయవంత వినియోగం జరిగిపోయాయనే అర్థం కాదు. ఈ దశలను వేరు చదవాలి.",
    "example": "₹2 lakh crore equals ₹2,00,000 crore; neither notation says that every rupee has already been disbursed.",
    "teExample": "₹2 లక్షల కోట్లు = ₹2,00,000 కోట్లు; ఇది మొత్తం విడుదలైందని మాత్రం కాదు.",
    "trap": "A financing envelope is not the same measure as a grant expenditure or completed asset.",
    "recall": "How are sanction, disbursement and a completed infrastructure asset different?",
    "source": {
     "name": "PIB — four decisions, 13 February 2026",
     "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2227542&lang=1&reg=1"
    }
   },
   {
    "title": "Startup India Fund of Funds 2.0",
    "teTitle": "స్టార్టప్ ఇండియా Fund of Funds 2.0",
    "text": "The 13 February 2026 release records approval of Startup India Fund of Funds 2.0 with a ₹10,000 crore corpus. A fund-of-funds structure supports investment through other funds; it is not equivalent to a flat grant of the corpus amount to every startup. The corpus is the stated pool of support, while commitments, investments and realised results are later accounting or performance measures. Risk capital can support innovation but cannot guarantee that every investee succeeds. When comparing this decision with the Lakhpati Didi target and the Agriculture Infrastructure Fund scale, keep people, financing and corpus as different units and mechanisms.",
    "te": "13 ఫిబ్రవరి 2026 ప్రకటనలో Startup India Fund of Funds 2.0కు ₹10,000 కోట్ల corpus ఆమోదం ఉంది. Fund of funds ఇతర పెట్టుబడి నిధుల ద్వారా మద్దతు ఇచ్చే నిర్మాణం; ప్రతి startupకు మొత్తం corpusను గ్రాంట్‌గా ఇవ్వడం కాదు. Corpus నిధి పరిమాణం; commitments, పెట్టుబడులు, నిజ ఫలితాలు తర్వాతి కొలతలు. Risk capital ఉన్నా ప్రతి సంస్థ విజయం హామీ కాదు. Lakhpati Didiలో వ్యక్తుల లక్ష్యం, AIFలో financing, ఇక్కడ corpus వేర్వేరు యూనిట్లు, విధానాలు.",
    "example": "A ₹10,000 crore corpus does not mean ₹10,000 crore per startup, nor does approval prove the whole pool is invested immediately.",
    "teExample": "₹10,000 కోట్ల corpus అంటే ఒక్కో startupకు అంత మొత్తం కాదు; వెంటనే మొత్తం పెట్టుబడి కూడా కాదు.",
    "trap": "Do not confuse a pooled fund corpus with a per-applicant entitlement.",
    "recall": "Why is a fund of funds different from a direct universal startup grant?",
    "source": {
     "name": "PIB — four decisions, 13 February 2026",
     "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2227542&lang=1&reg=1"
    }
   }
  ],
  "outline": [
   "PM-RAHAT: dates and scheme parameters",
   "Lakhpati Didi: a revised target",
   "Agriculture Infrastructure Fund: financing scale",
   "Startup India Fund of Funds 2.0"
  ],
  "recall": [
   "Why should a scheme card separate notification, launch and review dates?",
   "Which evidence would be needed before converting a target into an achievement claim?",
   "How are sanction, disbursement and a completed infrastructure asset different?"
  ],
  "references": [
   "The Road Transport Ministry’s 12 August 2026 parliamentary reply records PM-RAHAT’s launch on 13 February 2026. It describes cashless treatment for victims of road accidents caused by use of motor vehicles, up to ₹1.5 lakh per victim for a maximum of seven days from the accident. The underlying scheme notification and later naming or launch milestones are not identical dates. These are educational scheme parameters from the cited reply, not a promise that an individual hospital claim will be accepted without the applicable procedures. For a fact card, keep the per-victim ceiling and time limit together rather than turning them into an annual household payment.",
   "The official 13 February 2026 decisions release states that the Lakhpati Didi target was doubled to six crore. The operative word is target: it describes an intended scale, not proof that six crore women had already reached the relevant livelihood benchmark on that date. Policy analysis should distinguish women enrolled, women receiving support and women whose sustained income outcome is verified. A doubled target also differs from a doubling of every participant’s income. Retain the programme name, six-crore unit and announcement date together; assess achievement only from a later source with its definition and reference period.",
   "The same 13 February 2026 release states that the Agriculture Infrastructure Fund’s financing scale was doubled to ₹2 lakh crore. Read this as a financing framework amount rather than a count of farmers or a cash grant already distributed equally among them. Agricultural infrastructure can involve projects that support storage, handling and other productive services, but each project’s eligibility and support must follow its applicable guidelines. A larger financing envelope can enable more investment without proving that all funds have been sanctioned, disbursed or used successfully. In a budget or scheme comparison, separate allocation, credit availability, sanction, disbursement and completed assets."
  ],
  "summary": [
   "Distinguish launch, notification and later implementation reports.",
   "Targets and financing ceilings are not achieved beneficiary counts.",
   "A fund corpus is not money already paid to each applicant.",
   "Retain date, unit, scope and implementation stage for every scheme fact."
  ]
 },
 "t-6-4": {
  "topic": "t-6-4",
  "batch": 6,
  "edition": "2026-10-17-b6",
  "asOf": "2026-10-17",
  "headlineWindow": {
   "start": "2025-10-18",
   "end": "2026-10-17"
  },
  "level": "Expanded chapter",
  "review": {
   "date": "2026-10-17",
   "method": "Original bilingual teaching and source/answer self-review; not independent expert certification. Current affairs are a dated snapshot, with older background labelled explicitly."
  },
  "source": {
   "name": "WIPO — Global Innovation Index 2026 results",
   "url": "https://www.wipo.int/web-publications/global-innovation-index-2026/en/gii-2026-results.html"
  },
  "sources": [
   [
    "UNDP India — Human Development Report 2025 release, 6 May 2025",
    "https://www.undp.org/india/press-releases/indias-human-development-continues-make-progress-ranks-130-out-193-countries"
   ],
   [
    "Ministry of Finance — Economic Survey 2025–26",
    "https://www.indiabudget.gov.in/economicsurvey/"
   ],
   [
    "MoSPI/PIB — PLFS May 2026 bulletin, 15 June 2026",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2272969&lang=1&reg=1"
   ]
  ],
  "segments": [
   {
    "title": "Global Innovation Index 2026",
    "teTitle": "గ్లోబల్ ఇన్నోవేషన్ ఇండెక్స్ 2026",
    "text": "WIPO’s Global Innovation Index 2026, released on 29 September 2026, compares 139 economies and places Switzerland first. The index distinguishes innovation inputs and outputs; it is not a direct count of patents alone or a GDP ranking. A rank describes position relative to the included economies, while scores reflect the index’s measures and methodology. A country can change rank because its own performance changes, others change or the coverage and method change. Keep the 2026 edition separate from the 2025 edition, especially when memorising India’s position; an older rank should never silently become a current rank.",
    "te": "WIPO Global Innovation Index 2026ను 29 సెప్టెంబర్ 2026న విడుదల చేసింది. 139 ఆర్థిక వ్యవస్థలను పోల్చింది; స్విట్జర్లాండ్ మొదటి స్థానం. Innovation inputs, outputs రెండూ చూస్తుంది; ఇది కేవలం patents లెక్క లేదా GDP ర్యాంక్ కాదు. Rank ఇతరులతో పోల్చిన స్థానం; score సూచిక కొలత. మన పనితీరు, ఇతరుల మార్పు, పద్ధతి లేదా coverage వల్ల rank మారవచ్చు. 2025 ర్యాంకును 2026 తాజా ర్యాంకుగా రాయకూడదు. Edition, publisher, పరిధిని ముందుగా గుర్తించాలి.",
    "example": "A card saying “GII 2026 — WIPO — 139 economies — Switzerland first” retains the edition and comparison universe.",
    "teExample": "GII 2026—WIPO—139 economies—స్విట్జర్లాండ్ మొదటి స్థానం అని editionతో చదవాలి.",
    "trap": "An index rank is not a timeless property of a country or a complete measure of welfare.",
    "recall": "How can a country’s rank change without an equal change in its absolute score?",
    "source": {
     "name": "WIPO — Global Innovation Index 2026 results",
     "url": "https://www.wipo.int/web-publications/global-innovation-index-2026/en/gii-2026-results.html"
    }
   },
   {
    "title": "HDR 2025: publication year versus data year",
    "teTitle": "HDR 2025: ప్రచురణ సంవత్సరం, డేటా సంవత్సరం",
    "text": "Background example outside the 18 October 2025–17 October 2026 headline window: UNDP’s 6 May 2025 India release for Human Development Report 2025 gives India an HDI of 0.685 and rank 130 among 193 countries, using 2023 data. These figures belong to that named edition, not an unqualified claim about the latest October 2026 ranking. HDI combines health, education and income dimensions; it is not GDP per capita alone. Publication lags mean the year in a report title can differ from the data reference year. Compare revised historical series consistently rather than mixing old and newly revised values from different editions.",
    "te": "ఇది headline కాలానికి బయట ఉన్న నేపథ్య ఉదాహరణ. 6 మే 2025 UNDP India ప్రకటనలో HDR 2025కు భారత HDI 0.685, 193 దేశాల్లో 130 స్థానం; వాడిన డేటా 2023ది. ఇవి ఆ edition విషయాలు; అక్టోబర్ 2026 తాజా ర్యాంక్ అని చెప్పడం కాదు. HDIలో ఆరోగ్యం, విద్య, ఆదాయం ఉంటాయి; కేవలం తలసరి GDP కాదు. నివేదిక సంవత్సరం, డేటా సంవత్సరం వేరు కావచ్చు. సవరించిన పాత గణాంకాలను వేర్వేరు editions నుంచి కలిపి పోల్చవద్దు.",
    "example": "“HDR 2025, 2023 data” is consistent. “India’s current 2026 rank is 130” is not established by that release.",
    "teExample": "HDR 2025—డేటా 2023 అని రాయాలి; దాంతో 2026 తాజా rank నిర్ణయించలేం.",
    "trap": "This historical teaching example is explicitly outside the current headline window.",
    "recall": "Why can a 2025 report validly contain 2023 observations?",
    "source": {
     "name": "UNDP India — Human Development Report 2025 release, 6 May 2025",
     "url": "https://www.undp.org/india/press-releases/indias-human-development-continues-make-progress-ranks-130-out-193-countries"
    }
   },
   {
    "title": "Economic Survey 2025–26 and the Budget",
    "teTitle": "ఆర్థిక సర్వే 2025–26, బడ్జెట్",
    "text": "The Economic Survey 2025–26 is published through the Ministry of Finance’s official survey portal; the Chief Economic Adviser’s presentation was on 29 January 2026. The Survey reviews economic developments and analysis, while the Union Budget presents the government’s fiscal proposals and estimates. A forecast in a survey is conditional and should not be rewritten as a completed growth outcome. Nominal growth includes price effects; real growth adjusts for them under the relevant national-accounts method. When comparing forecasts, retain the financial year, measure, price basis and range. This section does not manufacture a growth number from a headline when the relevant table is not quoted.",
    "te": "ఆర్థిక సర్వే 2025–26 కేంద్ర ఆర్థిక శాఖ అధికారిక పోర్టల్‌లో ఉంది; Chief Economic Adviser ప్రదర్శన 29 జనవరి 2026. Survey ఆర్థిక పరిణామాలు, విశ్లేషణను సమీక్షిస్తుంది. Budget ప్రభుత్వ ఆర్థిక ప్రతిపాదనలు, అంచనాలను చూపుతుంది. Forecast షరతులతో కూడిన అంచనా; పూర్తయిన వృద్ధి ఫలితం కాదు. Nominalలో ధరల ప్రభావం ఉంటుంది; realలో ఆ ప్రభావాన్ని సవరించాలి. పోల్చేటప్పుడు ఆర్థిక సంవత్సరం, కొలత, ధరల ఆధారం, rangeను ఉంచాలి. ఆధారం లేకుండా వృద్ధి సంఖ్యను కల్పించకూడదు.",
    "example": "A forecast for next financial year and a measured estimate for the previous year are not competing observations of the same completed period.",
    "teExample": "వచ్చే ఏడాది forecast, గత ఏడాది కొలిచిన ఫలితం ఒకే కాలానికి చెందిన actuals కావు.",
    "trap": "Survey analysis, budget proposals and statistical outturns have distinct purposes.",
    "recall": "What labels are needed to compare two growth forecasts fairly?",
    "source": {
     "name": "Ministry of Finance — Economic Survey 2025–26",
     "url": "https://www.indiabudget.gov.in/economicsurvey/"
    }
   },
   {
    "title": "PLFS: reference period and denominators",
    "teTitle": "PLFS: కాలపరిమితి, హారాల అర్థం",
    "text": "The PLFS monthly bulletin for May 2026 was released on 15 June 2026 by the official statistics system under MoSPI; NSO conducts the survey. Its release date differs from the month observed. Labour force participation rate compares the labour force with the relevant population, while unemployment rate compares unemployed people with the labour force. People outside the labour force are not automatically counted as unemployed. Age group, rural or urban coverage and status concept must accompany a number. A change in the denominator can change a rate without the same change in the number of people. Survey estimates also carry sampling and measurement limitations.",
    "te": "PLFS మే 2026 నెల బులెటిన్ 15 జూన్ 2026న విడుదలైంది. MoSPIలోని NSO సర్వే నిర్వహిస్తుంది. పరిశీలించిన నెల, విడుదల తేదీ వేరు. LFPRలో labour forceను సంబంధిత జనాభాతో భాగిస్తారు; unemployment rateలో నిరుద్యోగులను labour forceతో భాగిస్తారు. Labour force బయట ఉన్న ప్రతి వ్యక్తి నిరుద్యోగి కాదు. వయస్సు, గ్రామీణ/పట్టణ పరిధి, status భావనను సంఖ్యతో కలపాలి. హారం మారితే శాతం మారవచ్చు. సర్వే అంచనాలకు sampling పరిమితులుంటాయి.",
    "example": "In a hypothetical population of 100, with 50 employed and 5 unemployed seeking work, labour force is 55: LFPR=55%; UR=5/55≈9.09%.",
    "teExample": "100 మందిలో 50 ఉద్యోగులు, 5 పని కోరే నిరుద్యోగులు అయితే labour force 55; UR 5/55.",
    "trap": "The unemployment-rate denominator is the labour force, not the entire population.",
    "recall": "How can someone be without a job yet outside the measured labour force?",
    "source": {
     "name": "MoSPI/PIB — PLFS May 2026 bulletin, 15 June 2026",
     "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2272969&lang=1&reg=1"
    }
   }
  ],
  "outline": [
   "Global Innovation Index 2026",
   "HDR 2025: publication year versus data year",
   "Economic Survey 2025–26 and the Budget",
   "PLFS: reference period and denominators"
  ],
  "recall": [
   "How can a country’s rank change without an equal change in its absolute score?",
   "Why can a 2025 report validly contain 2023 observations?",
   "What labels are needed to compare two growth forecasts fairly?"
  ],
  "references": [
   "WIPO’s Global Innovation Index 2026, released on 29 September 2026, compares 139 economies and places Switzerland first. The index distinguishes innovation inputs and outputs; it is not a direct count of patents alone or a GDP ranking. A rank describes position relative to the included economies, while scores reflect the index’s measures and methodology. A country can change rank because its own performance changes, others change or the coverage and method change. Keep the 2026 edition separate from the 2025 edition, especially when memorising India’s position; an older rank should never silently become a current rank.",
   "Background example outside the 18 October 2025–17 October 2026 headline window: UNDP’s 6 May 2025 India release for Human Development Report 2025 gives India an HDI of 0.685 and rank 130 among 193 countries, using 2023 data. These figures belong to that named edition, not an unqualified claim about the latest October 2026 ranking. HDI combines health, education and income dimensions; it is not GDP per capita alone. Publication lags mean the year in a report title can differ from the data reference year. Compare revised historical series consistently rather than mixing old and newly revised values from different editions.",
   "The Economic Survey 2025–26 is published through the Ministry of Finance’s official survey portal; the Chief Economic Adviser’s presentation was on 29 January 2026. The Survey reviews economic developments and analysis, while the Union Budget presents the government’s fiscal proposals and estimates. A forecast in a survey is conditional and should not be rewritten as a completed growth outcome. Nominal growth includes price effects; real growth adjusts for them under the relevant national-accounts method. When comparing forecasts, retain the financial year, measure, price basis and range. This section does not manufacture a growth number from a headline when the relevant table is not quoted."
  ],
  "summary": [
   "Always label publisher, edition, data year and population.",
   "A rank is relative; an index value is a separate measure.",
   "The HDR 2025 example is background outside this headline window.",
   "Survey estimates, projections and final outcomes are different evidence."
  ]
 }
};
