class CustomImage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.url = this.getAttribute("url");
    this.render();
  }

  render() {
    const imageHTML = `
        <div class="col">
          <div class="card">
            <img src="${this.url}" class="card-img-top" alt="Image">
          </div>
        </div>
      `;
    this.shadowRoot.innerHTML = imageHTML;
  }
}

customElements.define("custom-image", CustomImage);

class PrevButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const buttonHTML = `
        <div class="container mt-4">
          <button class="btn btn-primary" id="prevBtn">Página Anterior</button>
        </div>
      `;
    this.shadowRoot.innerHTML = buttonHTML;
    this.shadowRoot
      .getElementById("prevBtn")
      .addEventListener("click", () => this.prevPage());
  }

  prevPage() {
    const containers = document.querySelectorAll(".gallery-container");
    let currentContainerIndex = Array.from(containers).findIndex(
      (container) => container.style.display !== "none"
    );

    containers[currentContainerIndex].style.display = "none";

    if (currentContainerIndex === 0) {
      containers[containers.length - 1].style.display = "block";
    } else {
      containers[currentContainerIndex - 1].style.display = "block";
    }
  }
}

customElements.define("prev-button", PrevButton);

class NextButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const buttonHTML = `
        <div class="container mt-4">
          <button class="btn btn-primary" id="nextBtn">Siguiente Página</button>
        </div>
      `;
    this.shadowRoot.innerHTML = buttonHTML;
    this.shadowRoot
      .getElementById("nextBtn")
      .addEventListener("click", () => this.nextPage());
  }

  nextPage() {
    const containers = document.querySelectorAll(".gallery-container");
    let currentContainerIndex = Array.from(containers).findIndex(
      (container) => container.style.display !== "none"
    );

    containers[currentContainerIndex].style.display = "none";

    if (currentContainerIndex === containers.length - 1) {
      containers[0].style.display = "block";
    } else {
      containers[currentContainerIndex + 1].style.display = "block";
    }
  }
}

customElements.define("next-button", NextButton);
