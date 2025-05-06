function changeText() {
    const description = document.getElementById('description');
    description.textContent = "You've successfully changed the text!";
    description.style.color = "white";
    description.style.backgroundColor = "green";
    description.style.padding = "10px";
    description.style.borderRadius = "5px";
  }
  
  function addElement() {
    const container = document.getElementById('container');
    const newElement = document.createElement('p');
    newElement.textContent = "I'm a newly added paragraph!";
    newElement.className = "new-paragraph";
    container.appendChild(newElement);
  }
  
  function removeElement() {
    const container = document.getElementById('container');
    if (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
  }
  