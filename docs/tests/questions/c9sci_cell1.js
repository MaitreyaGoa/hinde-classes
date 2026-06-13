// ============================================================
//  Class 9 Science — The Fundamental Unit of Life
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  CBSE | Medium | 20 Questions
//  ID range: 8201–8220
// ============================================================

var questions = [

  // ── Discovery of Cell ────────────────────────────────────

  {
    id: 8201,
    section: "Science",
    text: "Who coined the term 'cell' after observing cork under a microscope?",
    options: ["A) Antonie van Leeuwenhoek", "B) Robert Hooke", "C) Robert Brown", "D) Matthias Schleiden"],
    answer: "B",
    explanation: "Robert Hooke coined the term 'cell' in 1665 after observing thin slices of cork under a self-designed microscope. The box-like compartments reminded him of small rooms called cells."
  },
  {
    id: 8202,
    section: "Science",
    text: "Who was the first to observe living cells?",
    options: ["A) Robert Hooke", "B) Rudolf Virchow", "C) Antonie van Leeuwenhoek", "D) Theodore Schwann"],
    answer: "C",
    explanation: "Antonie van Leeuwenhoek was the first to observe living cells using a simple microscope he developed. He observed bacteria and other microorganisms in pond water."
  },

  // ── Cell Theory ──────────────────────────────────────────

  {
    id: 8203,
    section: "Science",
    text: "Which scientist added the principle to cell theory stating that all cells arise from pre-existing cells?",
    options: ["A) Matthias Schleiden", "B) Theodore Schwann", "C) Rudolf Virchow", "D) Robert Brown"],
    answer: "C",
    explanation: "Rudolf Virchow (1855) modified cell theory by adding that new cells arise only from pre-existing cells (Omnis cellula e cellula). Schleiden and Schwann had proposed the first two principles."
  },

  // ── Plant vs Animal Cell ─────────────────────────────────

  {
    id: 8204,
    section: "Science",
    text: "Which of the following is present in plant cells but absent in animal cells?",
    options: ["A) Mitochondria", "B) Ribosome", "C) Cell wall", "D) Cell membrane"],
    answer: "C",
    explanation: "Cell wall is present in plant cells but absent in animal cells. It is made of cellulose and provides rigidity and structural support to the plant cell."
  },
  {
    id: 8205,
    section: "Science",
    text: "Large central vacuoles occupying most of the cell volume are a characteristic feature of:",
    options: ["A) Animal cells only", "B) Bacterial cells", "C) Plant cells", "D) Fungal cells only"],
    answer: "C",
    explanation: "Mature plant cells have a large central vacuole that can occupy up to 90% of the cell volume. It stores water, sap, and helps maintain turgor pressure. Animal cells have only small, temporary vacuoles."
  },
  {
    id: 8206,
    section: "Science",
    text: "Centrioles are found in animal cells and help primarily in:",
    options: ["A) Protein synthesis", "B) Cell division", "C) Photosynthesis", "D) Cellular respiration"],
    answer: "B",
    explanation: "Centrioles are present in animal cells and lower plant cells. They form the spindle fibres during cell division, which help in separating chromosomes to opposite poles."
  },

  // ── Cell Membrane ────────────────────────────────────────

  {
    id: 8207,
    section: "Science",
    text: "The cell membrane is described as selectively permeable. This means it:",
    options: ["A) Allows all substances to pass freely", "B) Blocks all substances from passing", "C) Allows only selected substances to pass", "D) Allows only water to pass"],
    answer: "C",
    explanation: "The cell membrane is selectively permeable, meaning it allows only certain substances to pass through while restricting others. This property helps the cell regulate its internal environment."
  },
  {
    id: 8208,
    section: "Science",
    text: "The movement of water molecules from a region of higher water concentration to lower concentration through a semi-permeable membrane is called:",
    options: ["A) Diffusion", "B) Active transport", "C) Osmosis", "D) Plasmolysis"],
    answer: "C",
    explanation: "Osmosis is the movement of water molecules from a region of high water concentration (dilute solution) to low water concentration (concentrated solution) through a semi-permeable membrane."
  },
  {
    id: 8209,
    section: "Science",
    text: "When a plant cell is placed in a hypertonic solution, the cell membrane shrinks away from the cell wall. This process is called:",
    options: ["A) Osmosis", "B) Turgidity", "C) Plasmolysis", "D) Endocytosis"],
    answer: "C",
    explanation: "Plasmolysis occurs when a plant cell is placed in a hypertonic solution. Water moves out by osmosis, causing the cell membrane to shrink and pull away from the cell wall."
  },

  // ── Cell Wall ────────────────────────────────────────────

  {
    id: 8210,
    section: "Science",
    text: "The primary component of the plant cell wall is:",
    options: ["A) Chitin", "B) Cellulose", "C) Lignin", "D) Peptidoglycan"],
    answer: "B",
    explanation: "The plant cell wall is primarily made of cellulose, a complex polysaccharide. Cellulose gives the cell wall its rigidity and strength. Chitin is found in fungal cell walls, not plant cell walls."
  },
  {
    id: 8211,
    section: "Science",
    text: "Unlike the cell membrane, the cell wall is fully permeable. This means it:",
    options: ["A) Allows only water to pass", "B) Blocks dissolved substances", "C) Allows water and all dissolved substances to pass freely", "D) Allows only gases to pass"],
    answer: "C",
    explanation: "The cell wall is fully permeable — it allows water and all dissolved substances to pass through freely without restriction. It is the cell membrane inside it that controls what enters the cell."
  },

  // ── Nucleus ──────────────────────────────────────────────

  {
    id: 8212,
    section: "Science",
    text: "The nucleus is surrounded by a double-layered membrane called:",
    options: ["A) Cell membrane", "B) Tonoplast", "C) Nuclear envelope", "D) Endoplasmic reticulum"],
    answer: "C",
    explanation: "The nucleus is surrounded by a double-layered membrane called the nuclear envelope. It has pores called nuclear pores that regulate the movement of substances between the nucleus and cytoplasm."
  },
  {
    id: 8213,
    section: "Science",
    text: "Chromatin material in the nucleus condenses to form ________ during cell division.",
    options: ["A) Nucleolus", "B) Chromosomes", "C) Nuclear pores", "D) Ribosomes"],
    answer: "B",
    explanation: "During cell division, the loosely coiled chromatin material (DNA + proteins) condenses into visible, distinct chromosomes. Each species has a fixed number of chromosomes."
  },
  {
    id: 8214,
    section: "Science",
    text: "Which component of the nucleus is responsible for ribosome synthesis?",
    options: ["A) Nuclear pore", "B) Chromatin", "C) Nucleolus", "D) Nuclear envelope"],
    answer: "C",
    explanation: "The nucleolus is a dense, rounded structure inside the nucleus. It is the site of ribosomal RNA (rRNA) synthesis and is involved in the assembly of ribosome subunits."
  },

  // ── Cell Organelles ──────────────────────────────────────

  {
    id: 8215,
    section: "Science",
    text: "Which organelle is called the 'powerhouse of the cell'?",
    options: ["A) Ribosome", "B) Golgi apparatus", "C) Mitochondria", "D) Lysosome"],
    answer: "C",
    explanation: "Mitochondria are called the powerhouse of the cell because they produce ATP (energy) through cellular respiration. They have their own DNA and ribosomes."
  },
  {
    id: 8216,
    section: "Science",
    text: "Lysosomes, which contain digestive enzymes, are produced by which organelle?",
    options: ["A) Mitochondria", "B) Endoplasmic reticulum", "C) Golgi apparatus", "D) Nucleus"],
    answer: "C",
    explanation: "Lysosomes are produced by the Golgi apparatus. They contain powerful hydrolytic enzymes and are called the 'suicidal bags' of the cell as they can digest the cell's own worn-out components."
  },
  {
    id: 8217,
    section: "Science",
    text: "The organelle responsible for protein synthesis in a cell is:",
    options: ["A) Mitochondria", "B) Ribosome", "C) Vacuole", "D) Chloroplast"],
    answer: "B",
    explanation: "Ribosomes are the sites of protein synthesis. They are made of rRNA and proteins. They can be free in the cytoplasm or attached to the rough endoplasmic reticulum."
  },
  {
    id: 8218,
    section: "Science",
    text: "The endoplasmic reticulum that has ribosomes attached to its surface and is involved in protein synthesis is called:",
    options: ["A) Smooth ER", "B) Rough ER", "C) Golgi ER", "D) Nuclear ER"],
    answer: "B",
    explanation: "Rough Endoplasmic Reticulum (RER) has ribosomes on its surface, giving it a rough appearance. It is involved in protein synthesis and transport. Smooth ER lacks ribosomes and is involved in lipid synthesis."
  },

  // ── Cell Division ────────────────────────────────────────

  {
    id: 8219,
    section: "Science",
    text: "Which type of cell division results in two daughter cells that are genetically identical to the parent cell?",
    options: ["A) Meiosis", "B) Amitosis", "C) Mitosis", "D) Binary fission"],
    answer: "C",
    explanation: "Mitosis produces two daughter cells that are genetically identical to the parent cell with the same chromosome number. It is responsible for growth, repair, and replacement of cells in multicellular organisms."
  },
  {
    id: 8220,
    section: "Science",
    text: "The type of cell division that reduces the chromosome number by half to produce gametes is called:",
    options: ["A) Mitosis", "B) Meiosis", "C) Budding", "D) Regeneration"],
    answer: "B",
    explanation: "Meiosis is the reductive division that halves the chromosome number, producing four genetically different haploid cells. It occurs in reproductive organs to produce gametes (sperm and egg cells)."
  }

];
