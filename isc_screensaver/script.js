const NUM_LOGOS = 6; // Number of logos
const SPEED = 2.5; // Speed of movement
const logos = []; 

const IMAGE_STYLES = [
  `width:48px;height:148px;background-image: url(assets/cheese_battery.png); transform:rotate(90deg)`,
  `width:50px;height:148px;background-image: url(assets/mouse_notail_1.png); transform:rotate(30deg)`,
  `width:50px;height:148px;background-image: url(assets/mouse_notail_2.png); transform:rotate(-20deg)`,
  `width:50px;height:148px;background-image: url(assets/mouse_notail_3.png); transform:rotate(-30deg)`,
  `width:50px;height:148px;background-image: url(assets/mouse_tail.png); transform:rotate(0deg)`,
  `width:100px;height:148px;background-image: url(assets/mouse.png); transform:rotate(0deg)`,
]



class Logo {
  constructor(x, y, dx, dy, element) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.element = element;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    // Check for collisions with screen edges
    if (this.x + this.element.offsetWidth >= window.innerWidth || this.x <= 0) {
      this.dx *= -1;
    }
    if (this.y + this.element.offsetHeight >= window.innerHeight || this.y <= 0) {
      this.dy *= -1;
    }

    // Adjust direction if moving perfectly horizontally or vertically
    if (Math.abs(this.dx) < 0.01) {
      this.dx = (Math.random() > 0.5 ? 1 : -1) * SPEED;
    }
    if (Math.abs(this.dy) < 0.01) {
      this.dy = (Math.random() > 0.5 ? 1 : -1) * SPEED;
    }

    // Update the position of the logo
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }
}

function detectCollisions() {
  for (let i = 0; i < logos.length; i++) {
    for (let j = i + 1; j < logos.length; j++) {
      const logoA = logos[i];
      const logoB = logos[j];

      const dx = logoA.x - logoB.x;
      const dy = logoA.y - logoB.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < logoA.element.offsetWidth) {
        // Swap directions on collision
        [logoA.dx, logoB.dx] = [logoB.dx, logoA.dx];
        [logoA.dy, logoB.dy] = [logoB.dy, logoA.dy];
      }
    }
  }
}

function animate() {
  logos.forEach(logo => logo.move());
  detectCollisions();
  requestAnimationFrame(animate);
}

function init() {
  for (let i = 0; i < NUM_LOGOS; i++) {
    const element = document.createElement("div");
    element.classList.add("dvd-logo");
    // element.style.backgroundImage = `url(${IMAGE_OBJECTS[i % IMAGE_OBJECTS.length]['image_url']})`; // Assign a unique image
    element.setAttribute("style",IMAGE_STYLES[i % IMAGE_STYLES.length]);
    // element.setAttribute("style","width:500px");
    // element.style.height = `url(${IMAGE_OBJECTS[i % IMAGE_OBJECTS.length]['size_height']})`;
    document.body.appendChild(element);

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    const dx = SPEED * (Math.random() > 0.5 ? 1 : -1);
    const dy = SPEED * (Math.random() > 0.5 ? 1 : -1);

    const logo = new Logo(x, y, dx, dy, element);
    logos.push(logo);
  }

  animate();
}

init();