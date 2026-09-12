import styles from "./one.module.css";

const rooms = [
  {
    id: "atrium",
    area: styles.atrium,
    code: "Rm 01",
    name: "Atrium",
    note: "What arrived today. A hallway remark, a page number, the sentence you almost lost.",
  },
  {
    id: "study",
    area: styles.study,
    code: "Rm 02",
    name: "Study",
    note: "Notes you mean to keep. Rewrite them until they can stand without the day they came from.",
  },
  {
    id: "hall",
    area: styles.hall,
    code: "Rm 03",
    name: "Corridor",
    note: "Links are doors. Walk them when a thought needs the room next to it.",
  },
  {
    id: "garden",
    area: styles.garden,
    code: "Rm 04",
    name: "Garden",
    note: "Ideas still growing. Unfinished on purpose. Come back with water, not a filing cabinet.",
  },
  {
    id: "archive",
    area: styles.archive,
    code: "Rm 05",
    name: "Archive",
    note: "What you forgot you knew. Loci finds the room by the way you first entered it.",
  },
];

export default function OnePage() {
  return (
    <div className={styles.sheet}>
      <header className={styles.top}>
        <span className={styles.mark}>Loci / Memory palace</span>
        <button type="button" className={styles.cta}>
          Start writing
        </button>
      </header>

      <main className={styles.hero}>
        <div>
          <p className={styles.kicker}>Sheet 01 · Scale 1 : 1 thought</p>
          <h1 className={styles.headline}>A mind with a floor plan.</h1>
          <p className={styles.lede}>
            Loci is a local notebook that behaves like a building. You put
            thoughts in rooms, then walk the corridors back to them.
          </p>
        </div>

        <div className={styles.planWrap}>
          <span className={styles.north} aria-hidden="true">
            N ↑
          </span>
          <div className={styles.plan} role="radiogroup" aria-label="Rooms in the palace">
            {rooms.map((room, index) => (
              <label key={room.id} className={`${styles.room} ${room.area}`}>
                <input
                  type="radio"
                  name="palace-room"
                  defaultChecked={index === 0}
                />
                <span className={styles.roomId}>{room.code}</span>
                <span className={styles.roomName}>{room.name}</span>
                <span className={styles.note}>{room.note}</span>
              </label>
            ))}
          </div>
          <p className={styles.hint}>Select a room to read the note left there.</p>
        </div>
      </main>

      <footer className={styles.titleblock}>
        <div className={styles.cell}>
          <span>Project</span>
          Loci second brain
        </div>
        <div className={styles.cell}>
          <span>Drawn for</span>
          Lost threads
        </div>
        <div className={styles.cell}>
          <span>Method</span>
          Walk the rooms
        </div>
        <div className={styles.cell}>
          <span>Notes</span>
          Stay on this machine
        </div>
      </footer>
    </div>
  );
}
