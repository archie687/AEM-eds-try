export default async function decorate(block) {
  try {
    const res = await fetch("/capital.json");
    const json = await res.json();

    const rows = json.data;

    const table = document.createElement("table");

    if (rows.length) {
      const headerRow = document.createElement("tr");

      Object.keys(rows[0]).forEach((key) => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
      });

      table.appendChild(headerRow);

      rows.forEach((item) => {
        const tr = document.createElement("tr");

        Object.values(item).forEach((val) => {
          const td = document.createElement("td");
          td.textContent = val;
          tr.appendChild(td);
        });

        table.appendChild(tr);
      });
    }

    block.textContent = "";
    block.append(table);
  } catch (e) {
    console.error("Capital block error:", e);
  }
}
