export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>
            Initial Investment
            <input type="number" required />
          </label>
        </p>
        <p>
          <label>
            Annual Investment
            <input type="number" required />
          </label>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>
            Expected Return
            <input type="number" required />
          </label>
        </p>
        <p>
          <label>
            Duration
            <input type="number" required />
          </label>
        </p>
      </div>
    </section>
  );
}
