export const Statistics = ({ items, title }) => {
  return (
    <section class="statistics">
      {title.length > 0 && <h2 class="title">Upload stats</h2>}
      <ul class="stat-list">
        {items.map(({ id, label, percentage }) => {
          return (
            <li class="item" key={id}>
              <span class="label">{label}</span>
              <span class="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
