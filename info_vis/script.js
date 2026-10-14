const slides = [...document.querySelectorAll(".slide")];
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const counter = document.querySelector("#counter");
const progress = document.querySelector("#progress");
const stepModal = document.querySelector("#step-modal");
const stepModalClose = document.querySelector("#step-modal-close");
const stepModalNumber = document.querySelector("#step-modal-number");
const stepModalTitle = document.querySelector("#step-modal-title");
const stepModalDescription = document.querySelector("#step-modal-description");
const stepModalImage = document.querySelector("#step-modal-image");
const mappingNote = document.querySelector("#mapping-note");
const quoteSpeaker = document.querySelector("#quote-speaker");
const quoteText = document.querySelector("#quote-text");
const constructionQuoteSpeaker = document.querySelector("#construction-quote-speaker");
const constructionQuoteText = document.querySelector("#construction-quote-text");
const constructionQuoteBubble = document.querySelector("#construction-quote-bubble");
const constructionQuoteVisual = document.querySelector("#construction-quote-visual");
const constructionQuoteVisualImg = document.querySelector("#construction-quote-visual-img");
const constructionQuoteVisualTag = document.querySelector("#construction-quote-visual-tag");
const constructionQuoteVisualCaption = document.querySelector("#construction-quote-visual-caption");
const constructionProcessImage = document.querySelector(".construction-process-image");
const constructionBubbleCloseBtn = document.querySelector("#construction-bubble-close-btn");
const participantBubble = document.querySelector("#participant-bubble");
const bubbleCloseBtn = document.querySelector("#bubble-close-btn");
const bubbleParticipantId = document.querySelector("#bubble-participant-id");
const bubbleParticipantTitle = document.querySelector("#bubble-participant-title");
const bubbleParticipantSubtitle = document.querySelector("#bubble-participant-subtitle");
const bubbleTableauDesc = document.querySelector("#bubble-tableau-desc");
const bubbleIvolverDesc = document.querySelector("#bubble-ivolver-desc");
const bubbleTableauTasks = document.querySelector("#bubble-tableau-tasks");
const bubbleIvolverTasks = document.querySelector("#bubble-ivolver-tasks");
const bubbleQuoteText = document.querySelector("#bubble-quote-text");
const bubbleQuoteSpeaker = document.querySelector("#bubble-quote-speaker");
const participantButtons = document.querySelectorAll(".participant-button");

let currentSlide = 0;
let touchStartX = null;
let mappingCueShown = false;
let activeVoice = "tableau";
let activeParticipant = null;

const stepDetails = {
  rendering: {
    number: "04 / VISUALIZATION PROCESS",
    title: "Rendering",
    description: "The selected visual properties are rendered into a visible representation that people can read and interpret.",
  },
  mapping: {
    number: "03 / VISUALIZATION PROCESS",
    title: "Mapping",
    description: "Data attributes are connected to visual properties such as position, size, shape, and color.",
  },
  filtering: {
    number: "02 / VISUALIZATION PROCESS",
    title: "Filtering",
    description: "The data is narrowed to the records, attributes, or range that are relevant to the intended question.",
  },
  analysis: {
    number: "01 / VISUALIZATION PROCESS",
    title: "Data analysis",
    description: "The creator examines the data to identify its structure, variables, and relationships before visual encoding.",
  },
};

const participantQuotes = {
  tableau: {
    speaker: "s7 · Tableau",
    text: "“(I created a visualization by) dragging and dropping the attributes and Tableau did the rest and I just kept moving them around until I found one I liked.”",
  },
  chart: {
    speaker: "s8 · Tableau",
    text: "“(I chose a chart by) exploring available chart types and then selecting them depending on the available properties/measures.”",
  },
  messing: {
    speaker: "s9 · Participant",
    text: "“(I decided on visual mappings by) messing around.”",
  },
  shapes: {
    speaker: "s2 · Participant",
    text: "“(I chose the visual form because of) different shapes, I like circles.”",
  },
};

const constructionQuotes = {
  p3: {
    badge: "p3",
    title: "Pre-Planning & Idea Generation",
    speaker: "p3 · Novice in InfoVis · iVoLVER V1",
    text: "“For the first design <u>I just thought about all the general bar graphs</u> that we see all the time in, you know, publications and stuff like that.”",
    takeaway: "Idea generation occurs before visual mapping: P3 formulated a mental model of standard publication bar charts before connecting data to marks.",
    image: "assets/ivolver_v1_p3.png",
    tag: "iVoLVER V1 MODEL",
    caption: "Publication bar graph model",
    modalTitle: "iVoLVER V1 · Participant P3",
    modalDesc: "Initial bar graph design model created by participant P3 in iVoLVER for Task V1.",
  },
  p8: {
    badge: "p8",
    title: "Manual Mapping & Interaction Overhead",
    speaker: "p8 · Novice in InfoVis · iVoLVER V1",
    text: "“Many things need to be manually done. For example, <u>even for these five marks I need to drag fifteen times.</u> [...] But if, after I drag fifteen times, I realize ‘no, a bar chart is not good’ and I need to change. Then, probably <u>it would be quite difficult to change</u> at that time.”",
    takeaway: "Bottom-up mapping overhead: P8 dragged five marks 15 times to encode values and coordinates, making late design changes costly.",
    image: "assets/ivolver_v1_p8.png",
    tag: "iVoLVER V1 DRAGGING",
    caption: "5 marks dragged 15 times",
    modalTitle: "iVoLVER V1 · Participant P8",
    modalDesc: "Bar chart created by participant P8 in iVoLVER for Task V1, requiring manual dragging for five marks 15 times.",
  },
};
let activeConstructionVoice = null;

const approachQuotes = {
  p2: {
    speaker: "p2 · Novice in InfoVis · iVoLVER",
    tool: "ivolver",
    text: "“In iVoLVER there is sort of an <u>extra step where you actually have to come up with the plot itself and the strategy to build it</u>... When you say ‘I wanna do bar charts’ in iVoLVER, you have to think: ‘How am I going to order the bars? How am I gonna connect? Am I gonna scale the data?’ It’s up to you, all kind of different things.”",
  },
  p9: {
    speaker: "p9 · Novice in InfoVis · iVoLVER",
    tool: "ivolver",
    text: "“[In iVoLVER] you have to think about the properties in one sense but also the marks. And <u>it’s slightly more creative because you are making that selection before you’re seeing a bar chart</u> or a graph or something that’s quite default and typical.”",
  },
  p1: {
    speaker: "p1 · Novice in InfoVis · Tableau",
    tool: "tableau",
    text: "“I mean, <u>I don’t really have to think about it [the design] in any way</u>. I just put the title in one column and the value in the rows and, you know, that automatically created the bar chart, which is perfectly adequate... I didn’t necessarily have a bar chart in mind. I just wanted to put it there and <u>decide later on how it’s best represented depending on what the program does</u>.”",
  },
  p5: {
    speaker: "p5 · Novice in InfoVis · Tableau",
    tool: "tableau",
    text: "“‘Oh, I’ll put this in the columns’, ‘I’ll put this in the rows’, ‘I’ll change this mapping from this thing’, <u>but without really thinking about it</u>... I really, really liked the way that I can very quickly get something going [in Tableau]. I felt that I didn’t have to think as much about how to implement it, as I did in iVoLVER.”",
  },
  p8: {
    speaker: "p8 · Novice in InfoVis · Cross-Tool Anchoring",
    tool: "tableau",
    text: "“Because I did the previous experiment using Tableau. The datasets are quite similar, <u>so I already had in my mind, it should be something like a bar chart, because I did the previous experiment</u>.”",
  },
};
let activeApproachVoice = "p1";

const manipulationQuotes = {
  p7: {
    speaker: "p7 · Novice in InfoVis · iVoLVER (Laborious)",
    tool: "ivolver",
    text: "“<u>For every circle I had to do the same, the same, the same thing</u>. So, if there was a way I just do it for one circle, and it automatically does it for all the circles around—it would be perfect.”",
  },
  p10_free: {
    speaker: "p10 · Novice in InfoVis · iVoLVER (Freedom)",
    tool: "ivolver",
    text: "“[iVoLVER] was actually <u>much more free and helped me come up with new ideas</u>. In Tableau I had no idea what to do with that type of data and there wasn’t a huge amount of freedom to play. Whereas here [in iVoLVER], <u>moving the actual atomic data points</u> and figuring out ‘OK, this isn’t linear... How do I move them and group them?’”",
  },
  p10_trans: {
    speaker: "p10 · Novice in InfoVis · iVoLVER (Transparency)",
    tool: "ivolver",
    text: "“<u>iVoLVER is better for design because you actually get to see what works, what doesn’t work and why</u>. Whereas in Tableau I don’t think you get to see what works and doesn’t work and why... because it’s generated so quickly that you don’t get the sense of something building up. Whereas in iVoLVER you’ve built something up from a quite low level.”",
  },
  p4: {
    speaker: "p4 · Novice in InfoVis · Tableau (Abstraction)",
    tool: "tableau",
    text: "“<u>At one point I clicked on it, and it changed everything. I was like ‘This is a disaster!’</u> [...] I was just not quite sure what it was going to do once I put genre in columns. It was just very abstract.”",
  },
  p5: {
    speaker: "p5 · Novice in InfoVis · iVoLVER (Visual Clutter)",
    tool: "ivolver",
    text: "“<u>You get to a certain level of complexity, it becomes very hard to manage all connections</u>... You have the connections, which, again, are quite confusing sometimes. You have to keep good track of what you have done so far.”",
  },
};
let activeManipulationVoice = "p4";

const authorshipQuotes = {
  p4: {
    speaker: "p4 · Novice in InfoVis · iVoLVER (Authorship)",
    tool: "ivolver",
    text: "“I’d say that the process [in iVoLVER] is definitely more involved in that <u>you have to actually interact with that data instead of just throwing the idea of a column into a thing and having it built for you</u>... Designing is something that you need to be involved in, and you need to understand what’s happening with the data for you to show what’s happening with the data.”",
  },
  p8_throw: {
    speaker: "p8 · Novice in InfoVis · Tableau (Delegation)",
    tool: "tableau",
    text: "“<u>[In] Tableau you just throw it at the system</u>; throw everything and then it generates for you.”",
  },
  p6: {
    speaker: "p6 · Novice in InfoVis · Tableau (Tool Agency)",
    tool: "tableau",
    text: "“<u>Tableau did a very good job of ordering them</u>. For example, now we know what Canada produces.”",
  },
  p8_split: {
    speaker: "p8 · Novice in InfoVis · Tableau (Separation)",
    tool: "tableau",
    text: "“I dragged the title and I dragged the gross here. <u>Then it automatically generated this [vis], which I think is good enough</u>. I can understand this already and, again, I wanted to add the labels to make it easier to read... So, I tried to drag the label.”",
  },
};
let activeAuthorshipVoice = "p8_throw";

const preferenceQuotes = {
  p3: {
    speaker: "p3 · Novice in InfoVis · Tableau vs iVoLVER",
    tool: "tableau",
    text: "“<u>I did everything quicker in Tableau, even though there was less space for exploration</u>.”",
  },
  p8_paper: {
    speaker: "p8 · Novice in InfoVis · Duality",
    tool: "tableau",
    text: "“<u>Because I am writing papers, I just want to see the result; I don’t need the process. So, Tableau would be better.</u> But if sometimes I need the process I might choose iVoLVER.”",
  },
  p9: {
    speaker: "p9 · Novice in InfoVis · iVoLVER Preference",
    tool: "ivolver",
    text: "“<u>I’m a very visual user</u>. So, although I got a bit stuck with iVoLVER, <u>I would probably persevere with it just because it let me drag and play around</u> and I could quickly see changing shapes and objects... But I could see me defaulting to Tableau if I have to quickly create a graph.”",
  },
  p7_hybrid: {
    speaker: "p7 · Novice in InfoVis · Hybrid Workflow",
    tool: "ivolver",
    text: "“<u>If I don’t know what I want yet, I would prefer to try iVoLVER first to see in how many ways I can design the visualization.</u> And then, if I know what I actually want already, I would just put it on Tableau because it’s faster.”",
  },
  p4_edu: {
    speaker: "p4 · Novice in InfoVis · InfoVis Pedagogy",
    tool: "ivolver",
    text: "“<u>Tableau does it for you, which isn’t helpful at any kind of education system.</u> Because you don’t have to figure out what specifically is happening and how position works and how area works... Whereas in iVoLVER you need to actually pay attention.”",
  },
  p7_edu: {
    speaker: "p7 · Novice in InfoVis · InfoVis Pedagogy",
    tool: "ivolver",
    text: "“Because it’s more intuitive. At least I believe that in order to learn something, <u>you have to get your hands dirty; you actually have to go and see</u>. The level of automation of Tableau is very high... For iVoLVER you can influence directly what will happen. I believe that for a beginner iVoLVER is better than Tableau.”",
  },
};
let activePreferenceVoice = "p3";

const participantDetails = {
  p1: {
    id: "p1",
    title: "Venn Diagram Set Mapping vs. Automated Shelf Layouts",
    tagline: "Innovative conceptual mapping in iVoLVER; rapid default adoption in Tableau",
    tableauDesc: "Built standard bar chart (V1), accepted default matrix layout (V2), and created a multi-bar chart (V3) relying on system automation.",
    ivolverDesc: "Constructed standard bar chart (V1), crafted an innovative Venn diagram for region overlaps (V2), and iterated alternative designs for V3.",
    quote: "“I just put the title in one column and the value in the rows and, you know, that automatically created the bar chart... I didn’t necessarily have a bar chart in mind. I just wanted to put it there and decide later on.”",
    speaker: "p1 · Novice in InfoVis",
  },
  p2: {
    id: "p2",
    title: "Network Graph Representation vs. Categorical Matrix Grid",
    tagline: "Relational node-link diagram in iVoLVER; default shelf grids in Tableau",
    tableauDesc: "Quickly created bar charts (V1), matrix cell layout (V2), and a scatter plot (V3) using automatic attribute distribution.",
    ivolverDesc: "Built a bar chart (V1) and an explicit network graph with connecting relational lines (V2); left V3 incomplete due to manual drag overhead.",
    quote: "“In iVoLVER there is sort of an extra step where you actually have to come up with the plot itself and the strategy to build it... It’s up to you, all kind of different things: ‘How am I going to order? How am I gonna connect?’”",
    speaker: "p2 · Novice in InfoVis",
  },
  p3: {
    id: "p3",
    title: "Publication Bar Encodings vs. Show Me Pane Iteration",
    tagline: "Structured rectangular marks in iVoLVER; trial-and-error exploration in Tableau",
    tableauDesc: "Built bar chart (V1), matrix grid (V2), and multi-bar chart (V3), actively testing chart suggestions using the Show Me pane.",
    ivolverDesc: "Mapped value to rectangular mark height across all tasks, following standard published chart models.",
    quote: "“Since there are so many options [in Tableau], you want to try putting data in different slots and try different kinds of graphs in order to see what looks better. In a way that’s good because you get to explore more stuff.”",
    speaker: "p3 · Novice in InfoVis",
  },
  p4: {
    id: "p4",
    title: "Circular Bubble Encodings vs. Rapid Drag-and-Drop",
    tagline: "Size-encoded bubbles in iVoLVER; fast shelf experimentation in Tableau",
    tableauDesc: "Followed default bar layout (V1), matrix layout (V2), and generated a scatter plot (V3) via rapid attribute shelves.",
    ivolverDesc: "Constructed a bubble chart (V1) mapping budget to circle sizes, used distinct geometric shapes & colors (V2), and created a scatter plot (V3).",
    quote: "“I’d say that the process [in iVoLVER] is definitely more involved in that you have to actually interact with that data instead of just throwing the idea of a column into a thing and having it built for you.”",
    speaker: "p4 · Novice in InfoVis",
  },
  p5: {
    id: "p5",
    title: "Explicit Relational Links vs. In-Cell Colored Text",
    tagline: "Transparent data connections in iVoLVER; textual attribute customization in Tableau",
    tableauDesc: "Generated bar chart (V1), created a unique visualization with colored text marks placed inside grid cells (V2), and multi-bar chart (V3).",
    ivolverDesc: "Constructed standard bars (V1), mapped distinct shapes and colors to categories (V2), and built a scatter plot (V3).",
    quote: "“It felt like I wasn’t really composing the thing [in Tableau]. I was kind of putting stuff into pre-canned visualizations.”",
    speaker: "p5 · Novice in InfoVis",
  },
  p6: {
    id: "p6",
    title: "Manual Mark Bookkeeping vs. Tool-Driven Placement",
    tagline: "Deliberate incremental construction in iVoLVER; automated alignment in Tableau",
    tableauDesc: "Relied on automated attribute mapping to generate bar charts (V1), matrix layout (V2), and multi-bar visualization (V3).",
    ivolverDesc: "Crafted rectangular marks and aligned text labels manually step by step across all tasks (V1–V3).",
    quote: "“Tableau did a very good job of ordering them. For example, now we know what Canada produces.”",
    speaker: "p6 · Novice in InfoVis",
  },
  p7: {
    id: "p7",
    title: "Incremental Mark Positioning vs. 'Black Box' Automation",
    tagline: "Fine-grained spatial control in iVoLVER; quick black-box results in Tableau",
    tableauDesc: "Accepted Tableau’s default bar and matrix suggestions without altering the structural encoding.",
    ivolverDesc: "Manually positioned marks, encoding categories through spatial placement and shape adjustments.",
    quote: "“Because it’s more intuitive. At least I believe that in order to learn something, you have to get your hands dirty; you actually have to go and see. The level of automation of Tableau is very high.”",
    speaker: "p7 · Novice in InfoVis",
  },
  p8: {
    id: "p8",
    title: "Handcrafted Data Table vs. 'Throw Everything and Generate'",
    tagline: "Manual table layout in iVoLVER; high friction for design change vs. fast Tableau generation",
    tableauDesc: "Generated bar charts (V1), matrix layout (V2), and separate bar charts for each attribute (V3) via shelf mapping.",
    ivolverDesc: "Built bar chart (V1), handcrafted a custom data table layout (V2); left V3 incomplete due to manual drag overhead.",
    quote: "“[In] Tableau you just throw it at the system; throw everything and then it generates for you. But for iVoLVER I need to decide first and then I choose the bar chart.”",
    speaker: "p8 · Novice in InfoVis",
  },
  p9: {
    id: "p9",
    title: "Precise Rectangular Marks vs. Numerical Text Tables",
    tagline: "Step-by-step mark creation in iVoLVER; tabular switching in Tableau",
    tableauDesc: "Produced bar charts (V1), switched to an informative text table (V2), and generated a multi-bar chart (V3).",
    ivolverDesc: "Created standard bar representations (V1–V3), mapping heights and labeling data points incrementally.",
    quote: "“[In iVoLVER] you have to think about the properties in one sense but also the marks. And it’s slightly more creative because you are making that selection, before you’re seeing a bar chart or a graph.”",
    speaker: "p9 · Novice in InfoVis",
  },
  p10: {
    id: "p10",
    title: "Spatial Cluster Groupings vs. Auto-Generated Coordinates",
    tagline: "Creative spatial clustering in iVoLVER; auto-generated Latitude/Longitude in Tableau",
    tableauDesc: "Created bar charts (V1), generated a scatter plot using auto-generated Latitude and Longitude (V2), and multi-bar chart (V3).",
    ivolverDesc: "Built a bubble chart (V1), developed a creative cluster-based spatial grouping of countries (V2), and a scatter plot (V3).",
    quote: "“[iVoLVER] was actually much more free and helped me come up with new ideas... moving the actual atomic data points and figuring out ‘OK, this isn’t linear... How do I move them and group them?’”",
    speaker: "p10 · Novice in InfoVis",
  },
};

function renderSlide(index) {
  currentSlide = Math.max(0, Math.min(index, slides.length - 1));
  mappingCueShown = false;
  mappingNote?.classList.remove("is-visible");
  mappingNote?.setAttribute("aria-hidden", "true");

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === currentSlide);
  });
  if (!slides[currentSlide].classList.contains("slide--construction-process")) {
    clearConstructionQuote();
  }
  if (!slides[currentSlide].classList.contains("slide--visualization-results")) {
    clearParticipantBubble();
  }
  if (slides[currentSlide].classList.contains("slide--pilot-findings")) {
    requestAnimationFrame(() => showParticipantQuote(activeVoice));
  }
  if (slides[currentSlide].classList.contains("slide--design-approach")) {
    requestAnimationFrame(() => showApproachQuote(activeApproachVoice));
  }
  if (slides[currentSlide].classList.contains("slide--data-manipulation")) {
    requestAnimationFrame(() => showManipulationQuote(activeManipulationVoice));
  }
  if (slides[currentSlide].classList.contains("slide--control-authorship")) {
    requestAnimationFrame(() => showAuthorshipQuote(activeAuthorshipVoice));
  }
  if (slides[currentSlide].classList.contains("slide--overall-preference")) {
    requestAnimationFrame(() => showPreferenceQuote(activePreferenceVoice));
  }

  previousButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;
  counter.textContent = `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  progress.style.transform = `scaleX(${(currentSlide + 1) / slides.length})`;
}

function moveSlide(step) {
  if (step > 0 && slides[currentSlide].classList.contains("slide--background") && !mappingCueShown) {
    showMappingCue();
    return;
  }

  if (currentSlide + step >= 0 && currentSlide + step < slides.length) {
    if (step > 0 && slides[currentSlide].classList.contains("slide--background")) {
      mappingCueShown = false;
    }
    renderSlide(currentSlide + step);
  }
}

function showMappingCue() {
  if (!mappingNote) return;

  mappingNote.classList.remove("is-visible");
  mappingNote.setAttribute("aria-hidden", "false");
  void mappingNote.offsetWidth;
  mappingNote.classList.add("is-visible");
  mappingCueShown = true;
}

function openStepModal(step) {
  const detail = stepDetails[step];
  if (!detail) return;

  stepModal.classList.remove("step-modal--image");
  stepModalNumber.textContent = detail.number;
  stepModalTitle.textContent = detail.title;
  stepModalDescription.textContent = detail.description;
  stepModalImage.hidden = true;
  stepModal.showModal();
}

function openImageModal(imagePath, title, description, isLarge = false) {
  stepModal.classList.toggle("step-modal--image", isLarge);
  stepModalNumber.textContent = isLarge ? "IN-DEPTH COMPARISON" : "TABLEAU · TOP-DOWN";
  stepModalTitle.textContent = title || "Show Me pane";
  stepModalDescription.textContent =
    description || "Tableau’s chart suggestions supported rapid exploration through trial and error.";
  stepModalImage.src = imagePath;
  stepModalImage.alt = title || "Enlarged image";
  stepModalImage.hidden = false;
  stepModal.showModal();
}

function showParticipantQuote(voice) {
  const quote = participantQuotes[voice];
  const slide = document.querySelector(".slide--pilot-findings");
  if (!quote || !quoteSpeaker || !quoteText || !slide) return;

  quoteSpeaker.textContent = quote.speaker;
  quoteText.textContent = quote.text;
  activeVoice = voice;
  const selectedButton = slide.querySelector(`.voice-button[data-voice="${voice}"]`);
  const quoteBubble = slide.querySelector("#quote-bubble");
  const tool = selectedButton?.dataset.tool;

  if (selectedButton && quoteBubble) {
    const buttonCenter = selectedButton.getBoundingClientRect().left + selectedButton.offsetWidth / 2;
    const bubbleRect = quoteBubble.getBoundingClientRect();
    quoteBubble.style.setProperty("--voice-pointer-left", `${buttonCenter - bubbleRect.left}px`);
    quoteBubble.dataset.tool = tool;
  }

  slide.querySelectorAll(".voice-button[data-voice]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.voice === voice);
  });
  slide.querySelectorAll(".tool-label").forEach((label) => {
    label.classList.toggle("is-highlighted", label.dataset.toolLabel === tool);
    label.style.removeProperty("background-color");
    label.style.removeProperty("color");
  });
  slide.querySelectorAll(".finding-title").forEach((title) => {
    title.classList.toggle("is-highlighted", title.classList.contains(`finding-title--${tool}`));
  });
  slide.querySelectorAll(".finding").forEach((card) => {
    const isMatching = (tool === "tableau" && card.classList.contains("finding--tableau")) ||
                       (tool === "ivolver" && card.classList.contains("finding--ivoLVER"));
    card.classList.toggle("is-highlighted", isMatching);
  });
}

function showConstructionQuote(participant) {
  const quote = constructionQuotes[participant];
  if (!quote || !constructionQuoteBubble) return;

  if (activeConstructionVoice === participant && !constructionQuoteBubble.hidden) {
    clearConstructionQuote();
    return;
  }

  activeConstructionVoice = participant;
  const selectedButton = document.querySelector(`[data-construction-voice="${participant}"]`);

  document.querySelectorAll("[data-construction-voice]").forEach((button) => {
    const isSelected = button === selectedButton;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  const badge = document.querySelector("#construction-quote-badge");
  const title = document.querySelector("#construction-quote-title");
  const speaker = document.querySelector("#construction-quote-speaker");
  const text = document.querySelector("#construction-quote-text");
  const takeaway = document.querySelector("#construction-quote-takeaway");
  const visualTag = document.querySelector("#construction-quote-visual-tag");
  const visualImg = document.querySelector("#construction-quote-visual-img");
  const visualCaption = document.querySelector("#construction-quote-visual-caption");

  if (badge) badge.textContent = quote.badge;
  if (title) title.textContent = quote.title;
  if (speaker) speaker.textContent = quote.speaker;
  if (text) text.innerHTML = quote.text;
  if (takeaway) takeaway.textContent = quote.takeaway;
  if (visualTag) visualTag.textContent = quote.tag;
  if (visualImg) {
    visualImg.src = quote.image;
    visualImg.alt = `${quote.tag} visualization by ${participant.toUpperCase()}`;
  }
  if (visualCaption) {
    visualCaption.textContent = `${quote.caption} · Click to enlarge`;
  }

  constructionQuoteBubble.hidden = false;
  requestAnimationFrame(updateConstructionPointer);
}

function clearConstructionQuote() {
  if (!constructionQuoteBubble) return;
  constructionQuoteBubble.hidden = true;
  activeConstructionVoice = null;
  document.querySelectorAll("[data-construction-voice]").forEach((button) => {
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
  });
}

function updateConstructionPointer() {
  if (!activeConstructionVoice || !constructionQuoteBubble || constructionQuoteBubble.hidden) return;
  const selectedBtn = document.querySelector(`[data-construction-voice="${activeConstructionVoice}"]`);
  if (!selectedBtn) return;

  const bubbleRect = constructionQuoteBubble.getBoundingClientRect();
  const btnRect = selectedBtn.getBoundingClientRect();
  const pointerLeft = btnRect.left + btnRect.width / 2 - bubbleRect.left;
  constructionQuoteBubble.style.setProperty("--construction-pointer-left", `${pointerLeft}px`);
}

function showApproachQuote(voice) {
  const quote = approachQuotes[voice];
  const slide = document.querySelector(".slide--design-approach");
  const bubble = document.querySelector("#approach-quote-bubble");
  const speaker = document.querySelector("#approach-quote-speaker");
  const text = document.querySelector("#approach-quote-text");
  if (!quote || !bubble || !speaker || !text || !slide) return;

  speaker.textContent = quote.speaker;
  text.innerHTML = quote.text;
  activeApproachVoice = voice;
  bubble.dataset.tool = quote.tool;

  slide.querySelectorAll("[data-approach-voice]").forEach((btn) => {
    btn.classList.toggle("is-selected", btn.dataset.approachVoice === voice);
  });
  slide.querySelectorAll(".tool-label").forEach((label) => {
    label.classList.toggle("is-highlighted", label.dataset.toolLabel === quote.tool);
  });
  slide.querySelectorAll(".finding-title").forEach((title) => {
    title.classList.toggle("is-highlighted", title.classList.contains(`finding-title--${quote.tool}`));
  });
  slide.querySelectorAll(".finding").forEach((card) => {
    const isMatching = (quote.tool === "tableau" && card.classList.contains("finding--tableau")) ||
                       (quote.tool === "ivolver" && card.classList.contains("finding--ivoLVER"));
    card.classList.toggle("is-highlighted", isMatching);
  });

  updateApproachPointer();
}

function updateApproachPointer() {
  const bubble = document.querySelector("#approach-quote-bubble");
  const btn = document.querySelector(`[data-approach-voice="${activeApproachVoice}"]`);
  if (!bubble || !btn) return;
  const btnCenter = btn.getBoundingClientRect().left + btn.offsetWidth / 2;
  const bubbleRect = bubble.getBoundingClientRect();
  bubble.style.setProperty("--voice-pointer-left", `${btnCenter - bubbleRect.left}px`);
}

function showManipulationQuote(voice) {
  const quote = manipulationQuotes[voice];
  const slide = document.querySelector(".slide--data-manipulation");
  const bubble = document.querySelector("#manipulation-quote-bubble");
  const speaker = document.querySelector("#manipulation-quote-speaker");
  const text = document.querySelector("#manipulation-quote-text");
  if (!quote || !bubble || !speaker || !text || !slide) return;

  speaker.textContent = quote.speaker;
  text.innerHTML = quote.text;
  activeManipulationVoice = voice;
  bubble.dataset.tool = quote.tool;

  slide.querySelectorAll("[data-manipulation-voice]").forEach((btn) => {
    btn.classList.toggle("is-selected", btn.dataset.manipulationVoice === voice);
  });
  slide.querySelectorAll(".tool-label").forEach((label) => {
    label.classList.toggle("is-highlighted", label.dataset.toolLabel === quote.tool);
  });
  slide.querySelectorAll(".finding-title").forEach((title) => {
    title.classList.toggle("is-highlighted", title.classList.contains(`finding-title--${quote.tool}`));
  });
  slide.querySelectorAll(".finding").forEach((card) => {
    const isMatching = (quote.tool === "tableau" && card.classList.contains("finding--tableau")) ||
                       (quote.tool === "ivolver" && card.classList.contains("finding--ivoLVER"));
    card.classList.toggle("is-highlighted", isMatching);
  });

  updateManipulationPointer();
}

function updateManipulationPointer() {
  const bubble = document.querySelector("#manipulation-quote-bubble");
  const btn = document.querySelector(`[data-manipulation-voice="${activeManipulationVoice}"]`);
  if (!bubble || !btn) return;
  const btnCenter = btn.getBoundingClientRect().left + btn.offsetWidth / 2;
  const bubbleRect = bubble.getBoundingClientRect();
  bubble.style.setProperty("--voice-pointer-left", `${btnCenter - bubbleRect.left}px`);
}

function showAuthorshipQuote(voice) {
  const quote = authorshipQuotes[voice];
  const slide = document.querySelector(".slide--control-authorship");
  const bubble = document.querySelector("#authorship-quote-bubble");
  const speaker = document.querySelector("#authorship-quote-speaker");
  const text = document.querySelector("#authorship-quote-text");
  if (!quote || !bubble || !speaker || !text || !slide) return;

  speaker.textContent = quote.speaker;
  text.innerHTML = quote.text;
  activeAuthorshipVoice = voice;
  bubble.dataset.tool = quote.tool;

  slide.querySelectorAll("[data-authorship-voice]").forEach((btn) => {
    btn.classList.toggle("is-selected", btn.dataset.authorshipVoice === voice);
  });
  slide.querySelectorAll(".tool-label").forEach((label) => {
    label.classList.toggle("is-highlighted", label.dataset.toolLabel === quote.tool);
  });
  slide.querySelectorAll(".finding-title").forEach((title) => {
    title.classList.toggle("is-highlighted", title.classList.contains(`finding-title--${quote.tool}`));
  });
  slide.querySelectorAll(".stat-card").forEach((card) => {
    card.classList.toggle("is-highlighted", card.dataset.tool === quote.tool);
  });
  slide.querySelectorAll(".agency-card").forEach((card) => {
    card.classList.toggle("is-highlighted", card.dataset.tool === quote.tool);
  });

  updateAuthorshipPointer();
}

function updateAuthorshipPointer() {
  const bubble = document.querySelector("#authorship-quote-bubble");
  const btn = document.querySelector(`[data-authorship-voice="${activeAuthorshipVoice}"]`);
  if (!bubble || !btn) return;
  const btnCenter = btn.getBoundingClientRect().left + btn.offsetWidth / 2;
  const bubbleRect = bubble.getBoundingClientRect();
  bubble.style.setProperty("--voice-pointer-left", `${btnCenter - bubbleRect.left}px`);
}

function showPreferenceQuote(voice) {
  const quote = preferenceQuotes[voice];
  const slide = document.querySelector(".slide--overall-preference");
  const bubble = document.querySelector("#preference-quote-bubble");
  const speaker = document.querySelector("#preference-quote-speaker");
  const text = document.querySelector("#preference-quote-text");
  if (!quote || !bubble || !speaker || !text || !slide) return;

  speaker.textContent = quote.speaker;
  text.innerHTML = quote.text;
  activePreferenceVoice = voice;
  bubble.dataset.tool = quote.tool;

  slide.querySelectorAll("[data-preference-voice]").forEach((btn) => {
    btn.classList.toggle("is-selected", btn.dataset.preferenceVoice === voice);
  });
  slide.querySelectorAll(".tool-label").forEach((label) => {
    label.classList.toggle("is-highlighted", label.dataset.toolLabel === quote.tool);
  });
  slide.querySelectorAll(".finding-title").forEach((title) => {
    title.classList.toggle("is-highlighted", title.classList.contains(`finding-title--${quote.tool}`));
  });
  slide.querySelectorAll(".pillar-card").forEach((card) => {
    card.classList.toggle("is-highlighted", card.dataset.tool === quote.tool);
  });

  updatePreferencePointer();
}

function updatePreferencePointer() {
  const bubble = document.querySelector("#preference-quote-bubble");
  const btn = document.querySelector(`[data-preference-voice="${activePreferenceVoice}"]`);
  if (!bubble || !btn) return;
  const btnCenter = btn.getBoundingClientRect().left + btn.offsetWidth / 2;
  const bubbleRect = bubble.getBoundingClientRect();
  bubble.style.setProperty("--voice-pointer-left", `${btnCenter - bubbleRect.left}px`);
}

previousButton.addEventListener("click", () => moveSlide(-1));
nextButton.addEventListener("click", () => moveSlide(1));
document.querySelectorAll(".process-step").forEach((step) => {
  step.addEventListener("click", () => openStepModal(step.dataset.step));
});
document.querySelectorAll(".inline-modal-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => openImageModal(trigger.dataset.modalImage));
});
const visualizationResultsImage = document.querySelector(".visualization-results-image");
visualizationResultsImage?.addEventListener("click", () =>
  openImageModal(
    visualizationResultsImage.getAttribute("src"),
    "Visualizations built by participants",
    "Tableau Desktop and iVoLVER results, organized by task and participant.",
    true,
  ),
);
visualizationResultsImage?.addEventListener("keydown", (event) => {
  if (["Enter", " "].includes(event.key)) {
    event.preventDefault();
    visualizationResultsImage.click();
  }
});
const constructionProcessImageEl = document.querySelector(".construction-process-image");
constructionProcessImageEl?.addEventListener("click", () =>
  openImageModal(
    constructionProcessImageEl.getAttribute("src"),
    "Visualization Construction Process",
    "Figure 4: Stages of the observed visualization construction processes performed with iVoLVER (A) and Tableau Desktop (B).",
    true,
  ),
);
constructionProcessImageEl?.addEventListener("keydown", (event) => {
  if (["Enter", " "].includes(event.key)) {
    event.preventDefault();
    constructionProcessImageEl.click();
  }
});
constructionQuoteVisual?.addEventListener("click", () => {
  const quote = constructionQuotes[activeConstructionVoice];
  if (!quote) return;
  openImageModal(quote.image, quote.modalTitle, quote.modalDesc, true);
});
constructionQuoteVisual?.addEventListener("keydown", (event) => {
  if (["Enter", " "].includes(event.key)) {
    event.preventDefault();
    constructionQuoteVisual.click();
  }
});
stepModalClose.addEventListener("click", () => stepModal.close());
stepModal.addEventListener("click", (event) => {
  if (event.target === stepModal) stepModal.close();
});
stepModal.addEventListener("close", () => stepModal.classList.remove("step-modal--image"));
document.querySelectorAll(".voice-button[data-voice]").forEach((button) => {
  button.addEventListener("click", () => showParticipantQuote(button.dataset.voice));
});
document.querySelectorAll("[data-construction-voice]").forEach((button) => {
  button.addEventListener("click", () => showConstructionQuote(button.dataset.constructionVoice));
});
document.querySelectorAll("[data-approach-voice]").forEach((button) => {
  button.addEventListener("click", () => showApproachQuote(button.dataset.approachVoice));
});
document.querySelectorAll("[data-manipulation-voice]").forEach((button) => {
  button.addEventListener("click", () => showManipulationQuote(button.dataset.manipulationVoice));
});
document.querySelectorAll("[data-authorship-voice]").forEach((button) => {
  button.addEventListener("click", () => showAuthorshipQuote(button.dataset.authorshipVoice));
});
document.querySelectorAll("[data-preference-voice]").forEach((button) => {
  button.addEventListener("click", () => showPreferenceQuote(button.dataset.preferenceVoice));
});
participantButtons.forEach((button) => {
  button.addEventListener("click", () => showParticipantDetails(button.dataset.participant));
});
bubbleCloseBtn?.addEventListener("click", clearParticipantBubble);
constructionBubbleCloseBtn?.addEventListener("click", clearConstructionQuote);
window.addEventListener("resize", () => {
  updateParticipantPointer();
  updateConstructionPointer();
  updateApproachPointer();
  updateManipulationPointer();
  updateAuthorshipPointer();
  updatePreferencePointer();
});

function showParticipantDetails(participantId) {
  const data = participantDetails[participantId];
  if (!data || !participantBubble) return;

  if (activeParticipant === participantId) {
    clearParticipantBubble();
    return;
  }

  activeParticipant = participantId;
  participantButtons.forEach((btn) => {
    const isSelected = btn.dataset.participant === participantId;
    btn.classList.toggle("is-selected", isSelected);
    btn.setAttribute("aria-pressed", String(isSelected));
  });

  bubbleParticipantId.textContent = data.id.toUpperCase();
  bubbleParticipantTitle.textContent = data.title;
  bubbleParticipantSubtitle.textContent = data.tagline;
  bubbleTableauDesc.textContent = data.tableauDesc;
  bubbleIvolverDesc.textContent = data.ivolverDesc;
  bubbleQuoteText.textContent = data.quote;
  bubbleQuoteSpeaker.textContent = data.speaker;

  bubbleTableauTasks.replaceChildren(
    ...["v1", "v2", "v3"].map((task) => {
      const card = document.createElement("div");
      card.className = "bubble-task-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Tableau ${task.toUpperCase()} by ${participantId.toUpperCase()}`);

      const tag = document.createElement("span");
      tag.className = "bubble-task-card__tag";
      tag.textContent = task.toUpperCase();

      const img = document.createElement("img");
      img.src = `assets/tableau_${task}_${participantId}.png`;
      img.alt = `Tableau ${task.toUpperCase()} visualization by ${participantId.toUpperCase()}`;
      img.loading = "lazy";

      card.append(tag, img);
      card.addEventListener("click", () => {
        openImageModal(
          img.src,
          `Tableau ${task.toUpperCase()} · ${participantId.toUpperCase()}`,
          `Visualization created for ${task.toUpperCase()} in Tableau Desktop by participant ${participantId.toUpperCase()}.`,
          true,
        );
      });
      card.addEventListener("keydown", (e) => {
        if (["Enter", " "].includes(e.key)) {
          e.preventDefault();
          card.click();
        }
      });
      return card;
    }),
  );

  bubbleIvolverTasks.replaceChildren(
    ...["v1", "v2", "v3"].map((task) => {
      const card = document.createElement("div");
      card.className = "bubble-task-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `iVoLVER ${task.toUpperCase()} by ${participantId.toUpperCase()}`);

      const tag = document.createElement("span");
      tag.className = "bubble-task-card__tag";
      tag.textContent = task.toUpperCase();

      const img = document.createElement("img");
      img.src = `assets/ivolver_${task}_${participantId}.png`;
      img.alt = `iVoLVER ${task.toUpperCase()} visualization by ${participantId.toUpperCase()}`;
      img.loading = "lazy";

      card.append(tag, img);
      card.addEventListener("click", () => {
        openImageModal(
          img.src,
          `iVoLVER ${task.toUpperCase()} · ${participantId.toUpperCase()}`,
          `Visualization created for ${task.toUpperCase()} in iVoLVER by participant ${participantId.toUpperCase()}.`,
          true,
        );
      });
      card.addEventListener("keydown", (e) => {
        if (["Enter", " "].includes(e.key)) {
          e.preventDefault();
          card.click();
        }
      });
      return card;
    }),
  );

  participantBubble.hidden = false;
  requestAnimationFrame(updateParticipantPointer);
}

function updateParticipantPointer() {
  if (!activeParticipant || !participantBubble || participantBubble.hidden) return;
  const selectedBtn = document.querySelector(`.participant-button[data-participant="${activeParticipant}"]`);
  if (!selectedBtn) return;

  const bubbleRect = participantBubble.getBoundingClientRect();
  const btnRect = selectedBtn.getBoundingClientRect();
  const pointerLeft = btnRect.left + btnRect.width / 2 - bubbleRect.left;
  participantBubble.style.setProperty("--participant-pointer-left", `${pointerLeft}px`);
}

function clearParticipantBubble() {
  if (!participantBubble) return;
  participantBubble.hidden = true;
  activeParticipant = null;
  participantButtons.forEach((btn) => {
    btn.classList.remove("is-selected");
    btn.setAttribute("aria-pressed", "false");
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (participantBubble && !participantBubble.hidden) {
      clearParticipantBubble();
      return;
    }
    if (constructionQuoteBubble && !constructionQuoteBubble.hidden) {
      clearConstructionQuote();
      return;
    }
  }
  if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
    event.preventDefault();
    moveSlide(-1);
  }
  if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    moveSlide(1);
  }
});

document.addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.changedTouches[0].screenX;
  },
  { passive: true },
);

document.addEventListener(
  "touchend",
  (event) => {
    if (touchStartX === null) return;

    const distance = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(distance) > 48) moveSlide(distance > 0 ? -1 : 1);
    touchStartX = null;
  },
  { passive: true },
);

showParticipantQuote(activeVoice);
showApproachQuote(activeApproachVoice);
showManipulationQuote(activeManipulationVoice);
showAuthorshipQuote(activeAuthorshipVoice);
showPreferenceQuote(activePreferenceVoice);
renderSlide(0);
