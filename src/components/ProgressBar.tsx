type P = { value: number }

// Simple variable progression-style bar
export default function ProgressBar({ value }: P) {
  return (
    <div style={{ width: '100%', height: '15px', background: '#025270', borderRadius: '9999px', overflow: 'hidden' }}>
      <div style={{ width: `${value}%`, height: '100%', background: '#1985A1' }} />
    </div>
  )
}
