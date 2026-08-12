import styles from "./three.module.css";

const cards = [
  {
    dewey: "152.4",
    title: "The hallway conversation still unfinished",
    body: "She said attention is a room you furnish. Cross-ref with the essay on interruption.",
    see: "See also: 808.02",
  },
  {
    dewey: "808.02",
    title: "Draft: why folders fail a second brain",
    body: "A folder is a verdict. A card can sit next to two neighbors at once.",
    see: "See also: 025.4",
  },
  {
    dewey: "641.5",
    title: "Mother’s recipe as a graph, not a list",
    body: "The cumin is a link, not a step. Capture the smell first. Quantities later.",
    see: "See also: 152.4",
  },
];

export default function ThreePage() {
  return (
    <div className={styles.room}>
      <header className={styles.sign}>
        <span>Public memory · Drawer 3 · Loci</span>
        <button type="button" className={styles.cta}>
          Start writing
        </button>
      </header>

      <div className={styles.drawer}>
        <div className={styles.rod} aria-hidden="true" />
        <div className={styles.cards} role="radiogroup" aria-label="Catalog cards">
          {cards.map((card, index) => (
            <label key={card.dewey} className={styles.card}>
              <input
                type="radio"
                name="catalog-card"
                defaultChecked={index === 1}
              />
              <p className={styles.dewey}>{card.dewey}</p>
              <h2>{card.title}</h2>
              <p>{card.body}</p>
              <span className={styles.see}>{card.see}</span>
            </label>
          ))}
        </div>
      </div>

      <section className={styles.intro}>
        <div>
          <h1>A card for every thought. A drawer for the rest.</h1>
          <p>
            Loci is a local card catalog for people who think in slips, not
            files. One thought, one card. The drawer remembers the order you
            don’t.
          </p>
        </div>
        <ol className={styles.rules}>
          <li>Write it while it still has a number in your head.</li>
          <li>Put the see-also on the front, not in a folder name.</li>
          <li>Leave the card slightly out of true. You’ll find it with your hands.</li>
        </ol>
      </section>
    </div>
  );
}
