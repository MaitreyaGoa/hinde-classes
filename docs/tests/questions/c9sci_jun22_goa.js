// ============================================================
//  Std 9 Goa Board Science — Matter in Our Surroundings
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  NCERT Ch. 1 | Goa Board | 30Q | 50 min
//  50% Moderate + 50% Hard | PYQ-aligned
//  ID range: 8561–8590
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 8561, section: "Science",
    text: "The melting point of ice at atmospheric pressure is:",
    options: ["A) 0°C (273 K)", "B) 100°C (373 K)", "C) 4°C (277 K)", "D) −10°C (263 K)"],
    answer: "A",
    explanation: "Ice melts into water at 0°C, which equals 273 K (using K = °C + 273). This is the standard melting point at atmospheric pressure."
  },
  {
    id: 8562, section: "Science",
    text: "The boiling point of water at atmospheric pressure is:",
    options: ["A) 273 K", "B) 373 K", "C) 300 K", "D) 100 K"],
    answer: "B",
    explanation: "Water boils at 100°C at atmospheric pressure. Converting to Kelvin: 100 + 273 = 373 K."
  },
  {
    id: 8563, section: "Science",
    text: "Latent heat of fusion is best defined as:",
    options: [
      "A) The heat required to raise the temperature of a solid by 1°C",
      "B) The heat required to convert 1 kg of solid into liquid at its melting point without any temperature change",
      "C) The heat released when a gas condenses",
      "D) The heat absorbed during evaporation only"
    ],
    answer: "B",
    explanation: "Latent heat of fusion is the amount of heat energy needed to change 1 kg of a solid into liquid at its melting point, at constant temperature. This energy breaks intermolecular forces rather than raising temperature."
  },
  {
    id: 8564, section: "Science",
    text: "Latent heat of vaporisation is the heat required to:",
    options: [
      "A) Convert 1 kg of liquid into gas at its boiling point, without changing temperature",
      "B) Raise the temperature of a liquid to its boiling point",
      "C) Freeze 1 kg of liquid into solid",
      "D) Cool a gas back into liquid"
    ],
    answer: "A",
    explanation: "Latent heat of vaporisation is the heat energy required to convert 1 kg of a liquid into gas at its boiling point, at constant temperature (atmospheric pressure). For water, this value is 22.6×10⁵ J/kg."
  },
  {
    id: 8565, section: "Science",
    text: "How much heat is required to melt 2 kg of ice at 0°C? (Latent heat of fusion of ice = 3.34×10⁵ J/kg)",
    options: ["A) 3.34×10⁵ J", "B) 6.68×10⁵ J", "C) 1.67×10⁵ J", "D) 6.68×10⁴ J"],
    answer: "B",
    explanation: "Using Q = m×L: Q = 2 kg × 3.34×10⁵ J/kg = 6.68×10⁵ J."
  },
  {
    id: 8566, section: "Science",
    text: "How much heat is needed to convert 5 kg of water at 100°C into steam at 100°C? (Latent heat of vaporisation = 22.6×10⁵ J/kg)",
    options: ["A) 22.6×10⁵ J", "B) 113×10⁵ J", "C) 4.52×10⁵ J", "D) 11.3×10⁵ J"],
    answer: "B",
    explanation: "Using Q = m×L: Q = 5 kg × 22.6×10⁵ J/kg = 113×10⁵ J (or 1.13×10⁷ J)."
  },
  {
    id: 8567, section: "Science",
    text: "Convert 300 K into degrees Celsius:",
    options: ["A) 27°C", "B) 273°C", "C) 573°C", "D) 0°C"],
    answer: "A",
    explanation: "Using °C = K − 273: 300 − 273 = 27°C."
  },
  {
    id: 8568, section: "Science",
    text: "Convert 25°C into Kelvin:",
    options: ["A) 25 K", "B) 248 K", "C) 298 K", "D) 373 K"],
    answer: "C",
    explanation: "Using K = °C + 273: 25 + 273 = 298 K."
  },
  {
    id: 8569, section: "Science",
    text: "Arrange the three states of matter in order of INCREASING space between particles:",
    options: ["A) Gas < Liquid < Solid", "B) Solid < Liquid < Gas", "C) Liquid < Solid < Gas", "D) Gas < Solid < Liquid"],
    answer: "B",
    explanation: "Solids have the least space between particles (tightly packed), liquids have more space, and gases have the most space between particles — allowing gases to expand to fill any container."
  },
  {
    id: 8570, section: "Science",
    text: "At the same temperature, which state of matter has the HIGHEST average kinetic energy of particles?",
    options: ["A) Solid", "B) Liquid", "C) Gas", "D) All have equal kinetic energy"],
    answer: "C",
    explanation: "Gas particles move freely and rapidly with the highest kinetic energy, followed by liquid particles (which can slide past each other), and solid particles (which only vibrate in fixed positions) have the least kinetic energy."
  },
  {
    id: 8571, section: "Science",
    text: "Which of these substances undergoes sublimation (changes directly from solid to gas)?",
    options: ["A) Ice", "B) Camphor", "C) Salt", "D) Sugar"],
    answer: "B",
    explanation: "Camphor sublimates — it changes directly from solid to gas without passing through the liquid state. Other common examples include naphthalene, ammonium chloride, iodine, and dry ice (solid CO₂)."
  },
  {
    id: 8572, section: "Science",
    text: "Solid carbon dioxide (dry ice) is called 'dry' because:",
    options: [
      "A) It absorbs all moisture around it",
      "B) It sublimes directly into gas without forming a liquid, so there is no wet residue",
      "C) It is found only in dry places",
      "D) It does not contain any water"
    ],
    answer: "B",
    explanation: "Dry ice sublimes directly from solid to gas (CO₂ gas) at normal atmospheric pressure, without ever becoming a liquid. Since there's no liquid mess left behind, it is called 'dry' ice."
  },
  {
    id: 8573, section: "Science",
    text: "Which factor does NOT increase the rate of evaporation?",
    options: ["A) Increase in temperature", "B) Increase in surface area", "C) Increase in humidity", "D) Increase in wind speed"],
    answer: "C",
    explanation: "Evaporation rate increases with higher temperature, larger surface area, and higher wind speed. However, increasing humidity DECREASES evaporation rate, since the air is already holding more water vapour and has less capacity to absorb more."
  },
  {
    id: 8574, section: "Science",
    text: "Why does steam at 100°C cause more severe burns than boiling water at 100°C?",
    options: [
      "A) Steam is actually hotter than 100°C",
      "B) Steam carries extra hidden energy (latent heat of vaporisation) in addition to being at 100°C",
      "C) Steam is heavier than water",
      "D) Boiling water cannot cause burns"
    ],
    answer: "B",
    explanation: "Both steam and boiling water are at the same temperature (373 K), but steam contains additional latent heat of vaporisation as 'hidden' energy. When steam condenses on skin, it releases this extra energy, causing more severe burns than water at the same temperature."
  },
  {
    id: 8575, section: "Science",
    text: "Sweating helps cool the human body because:",
    options: [
      "A) Sweat is naturally cold when produced",
      "B) Evaporating sweat absorbs heat energy from the body, producing a cooling effect",
      "C) Sweat blocks sunlight from reaching skin",
      "D) Sweat increases body temperature intentionally"
    ],
    answer: "B",
    explanation: "As sweat evaporates from the skin surface, the escaping water particles absorb heat energy from the body to overcome intermolecular forces. This absorption of heat energy from the body produces a cooling effect."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 8576, section: "Science",
    text: "How much heat is required to melt 5 kg of ice at 0°C into water at 0°C? (Latent heat of fusion = 3.34×10⁵ J/kg)",
    options: ["A) 3.34×10⁵ J", "B) 16.7×10⁵ J", "C) 6.68×10⁵ J", "D) 33.4×10⁵ J"],
    answer: "B",
    explanation: "Q = m×L = 5 kg × 3.34×10⁵ J/kg = 16.7×10⁵ J."
  },
  {
    id: 8577, section: "Science",
    text: "How much heat is needed to convert 2 kg of water at 100°C completely into steam at 100°C? (Latent heat of vaporisation = 22.6×10⁵ J/kg)",
    options: ["A) 22.6×10⁵ J", "B) 11.3×10⁵ J", "C) 45.2×10⁵ J", "D) 4.52×10⁵ J"],
    answer: "C",
    explanation: "Q = m×L = 2 kg × 22.6×10⁵ J/kg = 45.2×10⁵ J."
  },
  {
    id: 8578, section: "Science",
    text: "During the melting of ice, the temperature remains constant at 0°C even while heat is continuously supplied. What happens to this heat energy?",
    options: [
      "A) It is lost to the surroundings without doing anything",
      "B) It is used entirely to break intermolecular forces holding particles in solid structure, not to increase kinetic energy",
      "C) It increases the kinetic energy of particles, raising temperature",
      "D) It is stored as light energy"
    ],
    answer: "B",
    explanation: "During a phase change, the heat supplied (latent heat) is used entirely to overcome the forces of attraction between particles, allowing them to move from the fixed positions of a solid to the more mobile arrangement of a liquid. Since this energy doesn't increase particle kinetic energy, temperature stays constant during the phase change."
  },
  {
    id: 8579, section: "Science",
    text: "Why does a pressure cooker cook food faster than an open pot?",
    options: [
      "A) Pressure cookers use more heat than open pots",
      "B) Increased pressure inside raises the boiling point of water above 100°C, allowing food to cook at a higher temperature in less time",
      "C) Pressure cookers reduce the boiling point of water",
      "D) The shape of the cooker speeds up cooking"
    ],
    answer: "B",
    explanation: "Inside a sealed pressure cooker, pressure builds up, which raises the boiling point of water above 100°C (since boiling point increases with pressure). Cooking at this higher temperature speeds up the cooking process significantly."
  },
  {
    id: 8580, section: "Science",
    text: "At high-altitude hill stations, water boils at a temperature LOWER than 100°C. What is the correct scientific reason?",
    options: [
      "A) Hill stations have colder water sources",
      "B) Atmospheric pressure is lower at higher altitudes, and a liquid's boiling point decreases as the surrounding pressure decreases",
      "C) The water itself becomes a different substance at high altitudes",
      "D) Higher altitude makes the stove less efficient"
    ],
    answer: "B",
    explanation: "Boiling point depends on atmospheric pressure. At higher altitudes, atmospheric pressure is lower, so liquid particles need less energy to escape into vapour — causing water to boil at a temperature below 100°C (e.g., around 90-95°C on high mountains)."
  },
  {
    id: 8581, section: "Science",
    text: "Doctors advise placing a wet cloth (not a dry cloth) on the forehead of a person with high fever. Why does the WET cloth specifically help reduce body temperature?",
    options: [
      "A) Wet cloth is naturally cooler than dry cloth",
      "B) Water in the wet cloth evaporates, absorbing heat energy from the forehead/body in the process, producing a cooling effect that a dry cloth cannot provide",
      "C) Wet cloth blocks body heat from escaping",
      "D) Dry cloth would make the fever worse"
    ],
    answer: "B",
    explanation: "The wet cloth's water evaporates, drawing heat energy from the body (the source of warmth nearby) to fuel this evaporation. A dry cloth has no water to evaporate, so it cannot provide this active cooling effect — it would only passively insulate."
  },
  {
    id: 8582, section: "Science",
    text: "Convert −40°C into Kelvin, and identify what is notable about this specific temperature value:",
    options: [
      "A) 313 K — this is body temperature",
      "B) 233 K — also equals −40°F, the one point where Celsius and Fahrenheit scales intersect",
      "C) 40 K — a typo, should remain unconverted",
      "D) 0 K — absolute zero"
    ],
    answer: "B",
    explanation: "Using K = °C + 273: −40 + 273 = 233 K. Interestingly, −40°C is also exactly −40°F, the unique point where the Celsius and Fahrenheit temperature scales give the same numerical reading."
  },
  {
    id: 8583, section: "Science",
    text: "How much heat energy is RELEASED when 3 kg of steam at 100°C condenses completely into water at 100°C? (Latent heat of vaporisation = 22.6×10⁵ J/kg)",
    options: ["A) 22.6×10⁵ J released", "B) 67.8×10⁵ J released", "C) 7.53×10⁵ J released", "D) 45.2×10⁵ J released"],
    answer: "B",
    explanation: "Condensation is the reverse of vaporisation — the same amount of latent heat that was absorbed during vaporisation is now released. Q = m×L = 3 kg × 22.6×10⁵ J/kg = 67.8×10⁵ J released to the surroundings."
  },
  {
    id: 8584, section: "Science",
    text: "The fact that a drop of perfume placed in one corner of a room can be smelled across the entire room after some time provides evidence for which property of matter?",
    options: [
      "A) Matter has color",
      "B) Particles of matter are continuously in motion and diffuse to mix with air particles, even without stirring",
      "C) Matter has a fixed shape",
      "D) Perfume particles are visible to the naked eye"
    ],
    answer: "B",
    explanation: "The spreading of perfume scent throughout a room (diffusion) demonstrates that particles of matter are constantly moving on their own, even when not stirred or disturbed. The faster-moving gas particles mix with air particles and spread throughout the available space."
  },
  {
    id: 8585, section: "Science",
    text: "If you compare the rate of diffusion of a gas, a liquid, and a solid (e.g., dye spreading in water vs. a gas spreading in air vs. a solid maintaining its shape), the CORRECT order of diffusion rate (fastest to slowest) is:",
    options: ["A) Solid > Liquid > Gas", "B) Gas > Liquid > Solid", "C) Liquid > Gas > Solid", "D) All three diffuse at the same rate"],
    answer: "B",
    explanation: "Gases diffuse fastest because their particles have the most space and highest kinetic energy, moving freely and rapidly. Liquids diffuse more slowly since particles are closer together and move less freely. Solids essentially do not diffuse under normal conditions since particles are fixed in position."
  },
  {
    id: 8586, section: "Science",
    text: "LPG (Liquefied Petroleum Gas) is stored as a liquid in cylinders despite being a 'gas.' How is this achieved, based on the effect of pressure on matter?",
    options: [
      "A) LPG is naturally a liquid and was mislabeled as gas",
      "B) By applying high pressure (and sometimes reducing temperature), the gas particles are forced closer together, converting the gas into a liquid state for compact storage",
      "C) LPG cylinders use a chemical reaction to create liquid from gas",
      "D) Pressure has no relation to the state of LPG"
    ],
    answer: "B",
    explanation: "LPG is normally a gas at room temperature and pressure, but by applying high pressure inside the cylinder, the gas particles are forced much closer together, converting the gas into its liquid state. This liquefied form takes up far less space, making storage and transport more efficient."
  },
  {
    id: 8587, section: "Science",
    text: "A student is given a heating curve graph for a pure substance showing temperature plotted against time as heat is continuously supplied. They notice TWO flat (constant-temperature) regions on the graph. What do these flat regions represent?",
    options: [
      "A) Periods when no heat was supplied",
      "B) The melting point (solid-liquid phase change) and the boiling point (liquid-gas phase change), where temperature stays constant despite continued heat input",
      "C) Errors in the experiment",
      "D) Points where the substance cooled down"
    ],
    answer: "B",
    explanation: "On a heating curve, flat regions occur during phase changes — first at the melting point (where solid converts to liquid) and later at the boiling point (where liquid converts to gas). During these flat regions, supplied heat is used as latent heat to change state, not to raise temperature."
  },
  {
    id: 8588, section: "Science",
    text: "Calculate the TOTAL heat required to convert 1 kg of ice at 0°C completely into steam at 100°C. (Latent heat of fusion = 3.34×10⁵ J/kg; specific heat of water = 4200 J/kg°C; latent heat of vaporisation = 22.6×10⁵ J/kg)",
    options: ["A) 22.6×10⁵ J", "B) 25.94×10⁵ J", "C) 30.1×10⁵ J", "D) 26.8×10⁵ J"],
    answer: "C",
    explanation: "Three steps: (1) Melt ice: 1×3.34×10⁵ = 3.34×10⁵ J. (2) Heat water 0°C→100°C: 1×4200×100 = 4.2×10⁵ J. (3) Vaporise water: 1×22.6×10⁵ = 22.6×10⁵ J. Total = 3.34+4.2+22.6 = 30.14×10⁵ J ≈ 30.1×10⁵ J."
  },
  {
    id: 8589, section: "Science",
    text: "A scientist wants to compare the burn severity of boiling water versus steam, both at 100°C, hitting the same area of skin for the same duration. Which additional factor must be accounted for to correctly predict that steam will cause MORE damage?",
    options: [
      "A) Steam has a different chemical formula than water",
      "B) The latent heat of vaporisation released when steam condenses on the skin, which delivers extra thermal energy beyond what boiling water at the same temperature provides",
      "C) Steam moves faster than boiling water",
      "D) There is no real difference; both cause identical burns"
    ],
    answer: "B",
    explanation: "Although both are nominally at 100°C, steam carries extra latent heat of vaporisation 'hidden' within it. When steam contacts skin and condenses back to liquid, it releases this additional energy on top of the thermal energy from being at 100°C — explaining why steam burns are typically more severe than boiling water burns at the same nominal temperature."
  },
  {
    id: 8590, section: "Science",
    text: "Explain why ammonium chloride placed in a heated china dish, covered with an inverted funnel, shows white deposits forming INSIDE the funnel (a classic NCERT experiment):",
    options: [
      "A) The ammonium chloride melts into a liquid that drips upward",
      "B) Heating sublimes the solid ammonium chloride directly into vapour, which then cools on the funnel's cooler inner surface and deposits back as a solid (sublimation followed by deposition)",
      "C) The funnel chemically reacts with ammonium chloride to form a new white substance",
      "D) This is simply condensation of water vapour, unrelated to ammonium chloride"
    ],
    answer: "B",
    explanation: "This is a classic demonstration of sublimation: heating converts solid ammonium chloride directly into vapour (without passing through liquid state). As this vapour rises and contacts the cooler surface of the inverted funnel, it loses energy and converts directly back into a solid (deposition), forming visible white crystal deposits — confirming the substance underwent sublimation."
  }

];
