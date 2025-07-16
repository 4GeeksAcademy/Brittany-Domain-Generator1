console.log 
const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const domainExtensions = ['.com', '.net', '.org', '.io'];

function generateDomains(pronouns, adjectives, nouns, extensions) {
  let domains = [];

  for (let p of pronouns) {
    for (let a of adjectives) {
      for (let n of nouns) {
        for (let ext of extensions) {
          domains.push(`${p}${a}${n}${ext}`);
        }
      }
    }
  }

  return domains;
}

window.onload = function() {
  const button = document.getElementById('generate-btn');
  const list = document.getElementById('domain-list');

  button.addEventListener('click', () => {
    list.innerHTML = ''; // Clear previous results

    const domains = generateDomains(pronoun, adj, noun, domainExtensions);

    domains.forEach(domain => {
      const li = document.createElement('li');
      li.textContent = domain;
      list.appendChild(li);
    });
  });
};



