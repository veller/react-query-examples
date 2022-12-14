const possibleStatus = [
  { id: 'backlog', label: 'Backlog' },
  { id: 'todo', label: 'To do' },
  { id: 'inProgress', label: 'In progress' },
  { id: 'done', label: 'Done' },
  { id: 'cancelled', label: 'Cancelled' },
]
export function StatusSelect({ value, onChange }) {
  return (
    <select value={value} onChange={onChange} className="status-select">
      <option value="">Select a status</option>
      {possibleStatus.map((status) => (
        <option key={status.id} value={status.id}>
          {status.label}
        </option>
      ))}
    </select>
  )
}
