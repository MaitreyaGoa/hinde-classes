// ============================================================
//  Std 10 CBSE Science — Chemical Reactions & Acids, Bases, Salts
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  NCERT Ch. 1 + Ch. 2 | CBSE Board Pattern | 30Q | 50 min
//  50% Moderate + 50% Hard | PYQ-aligned
//  ID range: 8651–8680
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════
  // Q1–Q7: Chemical Reactions (fresh angles) | Q8–Q15: Acids, Bases, Salts

  {
    id: 8651, section: "Science",
    text: "Which of the following is NOT a sign that a chemical reaction has occurred?",
    options: ["A) Evolution of gas", "B) Change in color", "C) Formation of precipitate", "D) The substance simply changing its physical shape (e.g., cutting paper)"],
    answer: "D",
    explanation: "Cutting paper is a physical change — no new substance forms, only the shape changes. Evolution of gas, color change, and precipitate formation are all signs that a NEW substance has formed, indicating a chemical reaction."
  },
  {
    id: 8652, section: "Science",
    text: "In a chemical equation, the substances written on the LEFT side of the arrow are called:",
    options: ["A) Products", "B) Reactants", "C) Catalysts", "D) Precipitates"],
    answer: "B",
    explanation: "Reactants are the starting substances that undergo change in a chemical reaction, written on the left side of the arrow. Products are the new substances formed, written on the right side."
  },
  {
    id: 8653, section: "Science",
    text: "Which symbol in a chemical equation is used to indicate that a reaction requires heating?",
    options: ["A) ↓", "B) ↑", "C) Δ (delta) placed above the arrow", "D) (aq)"],
    answer: "C",
    explanation: "The symbol Δ (delta) placed above the reaction arrow indicates that heat is required for the reaction to proceed. (↓ indicates a precipitate, ↑ indicates a gas evolved, and (aq) indicates an aqueous solution.)"
  },
  {
    id: 8654, section: "Science",
    text: "Which of the following correctly represents a combination reaction?",
    options: ["A) AB → A + B", "B) A + B → AB", "C) AB + CD → AD + CB", "D) A + BC → AC + B"],
    answer: "B",
    explanation: "A combination reaction is one where two or more reactants combine to form a single product: A + B → AB. (AB → A + B represents decomposition; AB+CD→AD+CB represents double displacement; A+BC→AC+B represents displacement.)"
  },
  {
    id: 8655, section: "Science",
    text: "When silver chloride is kept in sunlight, it turns grey. Which TYPE of reaction is this, and what is the by-product gas formed?",
    options: [
      "A) Combination reaction; oxygen gas",
      "B) Photodecomposition reaction; chlorine gas",
      "C) Displacement reaction; hydrogen gas",
      "D) Double displacement reaction; carbon dioxide"
    ],
    answer: "B",
    explanation: "2AgCl →(sunlight)→ 2Ag + Cl₂. This is photodecomposition (decomposition triggered by light energy), forming silver metal (grey) and releasing chlorine gas. This principle is used in black-and-white photography."
  },
  {
    id: 8656, section: "Science",
    text: "A reaction in which heat is absorbed from the surroundings is called:",
    options: ["A) An exothermic reaction", "B) An endothermic reaction", "C) A combination reaction only", "D) A precipitation reaction"],
    answer: "B",
    explanation: "An endothermic reaction absorbs heat energy from the surroundings to proceed, often making the reaction vessel feel cold. (Exothermic reactions release heat instead.)"
  },
  {
    id: 8657, section: "Science",
    text: "Which of these reactions is an example of oxidation?",
    options: [
      "A) CuO + H₂ → Cu + H₂O (copper oxide loses oxygen)",
      "B) 2Mg + O₂ → 2MgO (magnesium gains oxygen)",
      "C) Both reactions show oxidation",
      "D) Neither reaction shows oxidation"
    ],
    answer: "B",
    explanation: "Oxidation involves the gain of oxygen. In 2Mg + O₂ → 2MgO, magnesium gains oxygen — this is oxidation. In CuO + H₂ → Cu + H₂O, copper oxide LOSES oxygen — this is reduction, not oxidation."
  },
  {
    id: 8658, section: "Science",
    text: "What color change occurs when blue litmus paper is dipped into an acidic solution?",
    options: ["A) Blue litmus remains blue", "B) Blue litmus turns red", "C) Blue litmus turns green", "D) Blue litmus turns colourless"],
    answer: "B",
    explanation: "Acids turn blue litmus paper red. This is a standard test to identify acidic solutions. (Bases would turn red litmus paper blue.)"
  },
  {
    id: 8659, section: "Science",
    text: "Litmus, a commonly used natural indicator, is extracted from:",
    options: ["A) Turmeric", "B) Lichen", "C) Red cabbage", "D) Onion"],
    answer: "B",
    explanation: "Litmus is a natural dye extracted from lichen, a plant belonging to the division Thallophyta. It is one of the most commonly used acid-base indicators in laboratories."
  },
  {
    id: 8660, section: "Science",
    text: "When an acid reacts with a metal, the gas typically evolved is:",
    options: ["A) Oxygen", "B) Carbon dioxide", "C) Hydrogen", "D) Nitrogen"],
    answer: "C",
    explanation: "Metal + Acid → Salt + Hydrogen gas. For example, Zn + 2HCl → ZnCl₂ + H₂. This hydrogen gas can be confirmed using the 'pop' sound test with a burning matchstick."
  },
  {
    id: 8661, section: "Science",
    text: "The reaction between an acid and a base, producing salt and water, is called:",
    options: ["A) Oxidation reaction", "B) Combination reaction", "C) Neutralization reaction", "D) Decomposition reaction"],
    answer: "C",
    explanation: "Acid + Base → Salt + Water is called a neutralization reaction. For example, HCl + NaOH → NaCl + H₂O. The acidic and basic properties neutralize each other in this process."
  },
  {
    id: 8662, section: "Science",
    text: "On the pH scale (0 to 14), a solution with pH = 7 is:",
    options: ["A) Strongly acidic", "B) Strongly basic", "C) Neutral", "D) Cannot be determined"],
    answer: "C",
    explanation: "pH = 7 indicates a neutral solution (neither acidic nor basic), as in pure water. Values below 7 indicate acidic solutions, and values above 7 indicate basic (alkaline) solutions."
  },
  {
    id: 8663, section: "Science",
    text: "Which gas is evolved when a metal carbonate (like Na₂CO₃) reacts with an acid?",
    options: ["A) Hydrogen", "B) Oxygen", "C) Carbon dioxide", "D) Chlorine"],
    answer: "C",
    explanation: "Metal carbonate + Acid → Salt + Water + Carbon dioxide. For example: Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂. The CO₂ gas can be confirmed by passing it through lime water, which turns milky."
  },
  {
    id: 8664, section: "Science",
    text: "When dilute sulphuric acid is to be prepared from concentrated acid, the SAFE procedure is to:",
    options: [
      "A) Add water to the concentrated acid quickly",
      "B) Add the concentrated acid slowly to water, with constant stirring",
      "C) Mix acid and water in equal amounts at once",
      "D) Heat the concentrated acid first, then add water"
    ],
    answer: "B",
    explanation: "The safe practice is to always add acid to water slowly while stirring — never the reverse. Adding water to concentrated acid can cause a sudden, violent exothermic reaction that may splash dangerous acid."
  },
  {
    id: 8665, section: "Science",
    text: "Common salt (sodium chloride) is obtained by the reaction between:",
    options: ["A) HCl and NaOH (neutralization)", "B) Zn and HCl", "C) CaCO₃ and heat", "D) Mg and O₂"],
    answer: "A",
    explanation: "HCl + NaOH → NaCl + H₂O. Common salt (NaCl) is produced through this neutralization reaction between hydrochloric acid and sodium hydroxide."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════
  // Q16–Q22: Chemical Reactions (fresh, harder) | Q23–Q30: Acids, Bases, Salts (harder)

  {
    id: 8666, section: "Science",
    text: "A student mixes solutions of lead nitrate and potassium iodide and observes a yellow precipitate. Later, on adding excess KI, the precipitate appears to dissolve partially due to complex formation. Identify the precipitate and the TYPE of reaction initially observed.",
    options: [
      "A) PbI₂ (yellow); a double displacement (precipitation) reaction",
      "B) KNO₃ (yellow); a combination reaction",
      "C) Pb(NO₃)₂ (yellow); a decomposition reaction",
      "D) No precipitate is actually formed in this reaction"
    ],
    answer: "A",
    explanation: "Pb(NO₃)₂ + 2KI → PbI₂ (yellow precipitate) + 2KNO₃. This is a double displacement (precipitation) reaction, as the ions exchange partners and an insoluble yellow solid (PbI₂) forms."
  },
  {
    id: 8667, section: "Science",
    text: "Why is the decomposition of silver bromide (AgBr) by light considered ESSENTIAL to traditional photography, and what TYPE of reaction is this?",
    options: [
      "A) It is a combination reaction; AgBr forms by combining silver and bromine under light",
      "B) It is a photodecomposition reaction; light energy breaks down AgBr into silver and bromine, the basis of capturing images on photographic film",
      "C) It is a displacement reaction with no connection to photography",
      "D) AgBr does not react with light at all"
    ],
    answer: "B",
    explanation: "2AgBr →(light)→ 2Ag + Br₂. This photodecomposition reaction is the chemical basis of traditional photographic film — areas exposed to light decompose to form a silver image, capturing the photograph."
  },
  {
    id: 8668, section: "Science",
    text: "A reaction releases significant heat AND light simultaneously when magnesium burns in oxygen. From an energy perspective, what does this indicate about the products compared to the reactants?",
    options: [
      "A) The products (MgO) have higher energy content than the reactants",
      "B) The products (MgO) have lower total energy than the reactants; the excess energy is released as heat and light during this exothermic reaction",
      "C) Energy is neither released nor absorbed",
      "D) The reactants and products have exactly equal energy"
    ],
    answer: "B",
    explanation: "In an exothermic reaction like Mg burning, the products (MgO) are at a LOWER energy state than the reactants (Mg + O₂). The 'lost' energy is released to the surroundings as heat and light, which is why we observe the dazzling glow."
  },
  {
    id: 8669, section: "Science",
    text: "Balance the skeletal equation: __KClO₃ → __KCl + __O₂",
    options: ["A) KClO₃ → KCl + O₂ (already balanced)", "B) 2KClO₃ → 2KCl + 3O₂", "C) KClO₃ → 2KCl + O₂", "D) 3KClO₃ → KCl + O₂"],
    answer: "B",
    explanation: "Balancing: K and Cl are already 1:1, so coefficients for KClO₃ and KCl must match. For O: KClO₃ has 3 O atoms; to balance with O₂, we need a common multiple. 2KClO₃ gives 6 O atoms, matching 3O₂ (3×2=6). Balanced: 2KClO₃ → 2KCl + 3O₂."
  },
  {
    id: 8670, section: "Science",
    text: "A reaction vessel containing barium hydroxide solution is mixed with ammonium chloride crystals, and the mixture becomes noticeably cold. What does this confirm, and what additional clue (smell) would likely accompany this reaction?",
    options: [
      "A) An exothermic reaction with no smell",
      "B) An endothermic reaction (vessel cools as heat is absorbed); ammonia gas (pungent smell) is typically released in this classic reaction",
      "C) No reaction is actually occurring",
      "D) A combination reaction producing only water"
    ],
    answer: "B",
    explanation: "Ba(OH)₂ + 2NH₄Cl → BaCl₂ + 2NH₃ + 2H₂O. This is a classic endothermic reaction — the mixture absorbs heat from surroundings (feels cold), and ammonia gas, recognizable by its pungent smell, is released as a product."
  },
  {
    id: 8671, section: "Science",
    text: "Two reactions are compared: (i) Na + H₂O → NaOH + H₂ (vigorous, with sparks) and (ii) Fe + dilute HCl → FeCl₂ + H₂ (steady gas bubbles, no sparks). What does this difference in vigour suggest about the reactivity of sodium versus iron?",
    options: [
      "A) Iron is more reactive than sodium",
      "B) Sodium is significantly more reactive than iron, reacting vigorously even with cold water, while iron reacts more steadily even with a stronger acid",
      "C) Both metals have identical reactivity",
      "D) Reactivity cannot be judged from these observations"
    ],
    answer: "B",
    explanation: "Sodium's vigorous, often violent reaction with water (producing sparks/heat) demonstrates its very high reactivity — it reacts strongly even with a weak reactant like cold water. Iron's comparatively calm reaction with a stronger acid (HCl) shows iron is far less reactive than sodium, consistent with the reactivity series where sodium ranks much higher."
  },
  {
    id: 8672, section: "Science",
    text: "Considering the general equation Metal Oxide + Acid → Salt + Water, predict the products when copper oxide (CuO) reacts with dilute hydrochloric acid (HCl), and identify the colour change expected.",
    options: [
      "A) CuO + 2HCl → CuCl₂ + H₂O; solution turns blue-green (CuCl₂ is typically greenish-blue)",
      "B) CuO + HCl → CuCl + H₂; solution remains colourless",
      "C) No reaction occurs between metal oxides and acids",
      "D) CuO + 2HCl → Cu + Cl₂ + H₂O"
    ],
    answer: "A",
    explanation: "CuO + 2HCl → CuCl₂ + H₂O. Metal oxides are basic in nature and react with acids to form salt and water (similar to a neutralization reaction). The product CuCl₂ gives the solution a characteristic blue-green colour, distinguishing it from a colourless result."
  },

  // Acids, Bases, Salts - Hard

  {
    id: 8673, section: "Science",
    text: "If you have an unknown colourless solution and want to test whether it's acidic or basic WITHOUT using litmus paper, which natural indicator could you use, and what colour change would confirm an acidic solution using TURMERIC?",
    options: [
      "A) Turmeric turns yellow to red in a basic solution; in acid, it remains yellow",
      "B) Turmeric remains yellow in acidic solution; in a basic solution, it turns reddish-brown",
      "C) Turmeric has no use as an indicator",
      "D) Turmeric turns blue in any solution"
    ],
    answer: "B",
    explanation: "Turmeric is a natural indicator that remains yellow in acidic or neutral conditions but turns reddish-brown in basic (alkaline) solutions. This makes it useful as an alternative to litmus, especially noticeable on items like turmeric-stained cloth turning red when soap (basic) is applied."
  },
  {
    id: 8674, section: "Science",
    text: "A student dilutes a strong acid solution with water repeatedly. What happens to the H⁺ ion concentration and the resulting pH value as dilution increases?",
    options: [
      "A) H⁺ concentration increases; pH decreases further (more acidic)",
      "B) H⁺ concentration decreases; pH increases, moving closer to 7 (less acidic, more neutral)",
      "C) Neither H⁺ concentration nor pH changes with dilution",
      "D) Dilution converts the acid into a base"
    ],
    answer: "B",
    explanation: "Dilution with water decreases the concentration of H⁺ ions per unit volume. As H⁺ concentration decreases, the solution becomes less acidic, and its pH value increases — moving towards neutral (pH 7), though it remains acidic unless diluted to an extreme degree."
  },
  {
    id: 8675, section: "Science",
    text: "Why must an antacid tablet (commonly containing Mg(OH)₂) be taken to relieve acidity, and what TYPE of reaction occurs in the stomach?",
    options: [
      "A) The antacid increases stomach acid production",
      "B) Mg(OH)₂ is a base that neutralizes excess HCl in the stomach through a neutralization reaction: Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O, relieving acidity",
      "C) The antacid has no chemical effect; it works psychologically only",
      "D) The antacid converts stomach acid into a stronger acid"
    ],
    answer: "B",
    explanation: "Antacids contain mild bases like Mg(OH)₂, which react with and neutralize excess hydrochloric acid (HCl) naturally present in stomach acid, via Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O. This neutralization reaction reduces acidity and relieves discomfort."
  },
  {
    id: 8676, section: "Science",
    text: "Compare baking soda (NaHCO₃) and washing soda (Na₂CO₃·10H₂O) in terms of their typical household/industrial use. Why is washing soda, with its larger number of water molecules, particularly useful in the glass and soap industries?",
    options: [
      "A) Both compounds have identical industrial uses with no distinction",
      "B) Washing soda's crystalline structure (with water of crystallization) and alkaline nature make it suitable for industrial processes like glass-making and softening hard water, while baking soda (mildly basic, used in cooking/antacids) serves more everyday household purposes",
      "C) Baking soda is exclusively used in heavy industry, not washing soda",
      "D) Neither compound has any practical use"
    ],
    answer: "B",
    explanation: "Washing soda (Na₂CO₃·10H₂O) has stronger alkaline properties and specific crystalline characteristics that make it valuable in manufacturing glass, soap, and paper, and for softening hard water. Baking soda (NaHCO₃), being milder, is more suited for everyday uses like cooking, antacids, and fire extinguishers — illustrating how chemical properties determine practical applications."
  },
  {
    id: 8677, section: "Science",
    text: "Explain the chemistry behind why Plaster of Paris (CaSO₄·½H₂O) must be stored in MOISTURE-PROOF containers, referencing its formation and its reverse reaction with water.",
    options: [
      "A) Plaster of Paris has no reaction with water at all",
      "B) Plaster of Paris readily absorbs moisture/water and converts back to gypsum (CaSO₄·2H₂O), hardening into a solid mass — this is the reverse of how it was made by heating gypsum, so moisture exposure would ruin its usability as a setting powder",
      "C) Moisture causes Plaster of Paris to evaporate completely",
      "D) Plaster of Paris turns into a strong acid when exposed to moisture"
    ],
    answer: "B",
    explanation: "Plaster of Paris is made by heating gypsum (CaSO₄·2H₂O) to remove some water, forming CaSO₄·½H₂O. When this powder absorbs moisture again, it reverses this process, recombining with water to re-form gypsum and hardening into a solid mass. This is exactly why it must be stored away from moisture — premature hardening would make it useless for its intended setting/casting applications."
  },
  {
    id: 8678, section: "Science",
    text: "Hydrated copper sulphate (CuSO₄·5H₂O) is blue, but heating it turns it white. Adding water back restores the blue colour. What does this reversible colour change demonstrate about the role of 'water of crystallization'?",
    options: [
      "A) Water of crystallization has no effect on the appearance of the salt",
      "B) The blue colour specifically depends on the presence of water molecules chemically bound within the crystal structure (water of crystallization); removing this water (anhydrous form) changes the colour to white, and the colour is restored when water re-binds to the structure",
      "C) The white colour change is permanent and cannot be reversed",
      "D) This colour change indicates a completely different chemical compound is formed with no relation to water"
    ],
    answer: "B",
    explanation: "CuSO₄·5H₂O (blue, hydrated) loses its water of crystallization on heating, becoming CuSO₄ (white, anhydrous). This is reversible: adding water back restores the blue hydrated form. This demonstrates that water of crystallization is chemically significant — its presence or absence directly affects the visible properties (like colour) of the compound, while the underlying chemical identity remains the same salt."
  },
  {
    id: 8679, section: "Science",
    text: "A solution of an unknown salt is tested: it does NOT change the colour of either red or blue litmus paper. What can be concluded about this salt's nature, and give a likely example.",
    options: [
      "A) The salt is strongly acidic",
      "B) The salt is neutral (neither acidic nor basic) in solution — likely formed from a strong acid and a strong base, such as NaCl (formed from HCl + NaOH)",
      "C) The salt is strongly basic",
      "D) No conclusion is possible from litmus testing"
    ],
    answer: "B",
    explanation: "A salt that does not change litmus colour indicates it is neutral in aqueous solution. This typically happens with salts formed from the complete neutralization of a strong acid and a strong base — such as sodium chloride (NaCl), formed from HCl (strong acid) and NaOH (strong base), which produces a neutral salt solution."
  },
  {
    id: 8680, section: "Science",
    text: "Why does pure distilled water have a pH close to 7, while rainwater (even unpolluted) is often slightly acidic with a pH around 5.6, and what does this tell us about so-called 'acid rain'?",
    options: [
      "A) Rainwater is always exactly neutral like distilled water",
      "B) Natural rainwater absorbs atmospheric CO₂, forming weak carbonic acid (H₂CO₃), giving it a naturally slightly acidic pH (~5.6); 'acid rain' refers to rain with pH significantly LOWER than this natural baseline, caused by pollutants like SO₂ and NOₓ forming stronger acids",
      "C) Rainwater is always more basic than distilled water",
      "D) CO₂ has no effect on the pH of rainwater"
    ],
    answer: "B",
    explanation: "Even unpolluted rainwater naturally absorbs atmospheric CO₂, forming weak carbonic acid (CO₂ + H₂O → H₂CO₃), giving it a mildly acidic pH around 5.6. True 'acid rain' refers to rain with pH significantly below this natural baseline, caused by pollutant gases like sulphur dioxide and nitrogen oxides forming stronger acids (sulphuric and nitric acid) in the atmosphere — a distinction important for understanding environmental pollution."
  }

];
