// Reusable data table.
const DataTable = ({ columns, rows, onRowClick, toolbar }) => (
  <div className="dt-card">
    {toolbar && <div className="dt-toolbar">{toolbar}</div>}
    <table className="dt">
      <thead><tr>{columns.map(c => <th key={c.key} style={c.align === 'right' ? { textAlign: 'right' } : null}>{c.label}</th>)}</tr></thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} onClick={() => onRowClick && onRowClick(r)}>
            {columns.map(c => (
              <td key={c.key} className={c.cellClass || ''} style={c.align === 'right' ? { textAlign: 'right' } : null}>
                {c.render ? c.render(r) : r[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const KPICard = ({ label, value, delta, down }) => (
  <div className="kpi">
    <span className="label">{label}</span>
    <span className="num">{value}</span>
    {delta && <span className={`delta ${down ? 'down' : ''}`}>{delta}</span>}
  </div>
);

Object.assign(window, { DataTable, KPICard });
