export default function decorate(block) {
  const rows = [...block.children];

  const contactData = {};

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length === 2) {
      const key = cols[0].textContent.trim().toLowerCase();
      const value = cols[1].textContent.trim();
      contactData[key] = value;
    }
  });

  block.innerHTML = `
    <div class="contact-wrapper">
      <h2>Contact Us</h2>
      <p><strong>Name:</strong> ${contactData.name || ""}</p>
      <p><strong>Email:</strong> ${contactData.email || ""}</p>
      <p><strong>Phone:</strong> ${contactData.phone || ""}</p>
      <p><strong>Address:</strong> ${contactData.address || ""}</p>
    </div>
  `;
}
