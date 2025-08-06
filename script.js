const affirmations = [
  "I am valued exactly as I am.",
  "I am capable of accomplishing anything I put my mind to.",
  "I uplift the people around me.",
  "I can create all I truly desire.",
  "I deserve abundance in all parts of my life.",
  "My love and compassion create harmony in my life.",
  "I am grateful for the changing of the seasons and the changes in my life.",
  "I take time each day to nurture my spirit and find serenity within.",
  "I deserve to be happy.",
  "I am in tune with my innermost feelings.",
  "My negative thoughts and feelings are transformed into love.",
  "I give thanks for the life I am creating.",
  "I embrace the new possibilities life brings me.",
  "I’m grateful for the past experiences that helped expand my understanding of myself.",
  "I am comfortable with who I am.",
  "I open my mind and heart to the world around me.",
  "Health, wealth, and harmony are entering my life.",
  "I move through life with confidence.",
  "I trust myself, my instincts, and the love in my heart.",
  "I am confident in the path I’m walking."
];

function generateAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const affirmationText = affirmations[randomIndex];
  document.getElementById("affirmation").textContent = affirmationText;

  // Play meow sound
  const meow = document.getElementById("meow-sound");
  meow.currentTime = 0; // Rewind to start
  meow.play();
}

// Show one affirmation on page load
window.onload = generateAffirmation;
