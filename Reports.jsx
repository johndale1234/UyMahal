import AdminPageHeader from './AdminPageHeader';

const submissions = [42, 58, 47, 76, 64, 88, 70];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function Reports() {
  const max = Math.max(...submissions);
  return (
    <>
      <AdminPageHeader title="Reports" description="A snapshot of activity across the UyMahal community." />
      <section className="report-metrics"><article className="metric-card"><span className="report-label">PRODUCTS TRACKED</span><strong className="metric-value">1,284</strong><small>Across all categories</small></article><article className="metric-card"><span className="report-label">PARTNER STORES</span><strong className="metric-value">48</strong><small>6 added this month</small></article><article className="metric-card"><span className="report-label">PRICE SUBMISSIONS</span><strong className="metric-value">326</strong><small>4 need review</small></article></section>
      <section className="panel report-panel"><div className="panel-heading"><div><h2>Price submissions</h2><p>Community submissions over the past week</p></div><span className="report-period">Last 7 days</span></div><div className="chart" role="img" aria-label="Bar chart of price submissions by day">{submissions.map((value, index) => <div className="chart-column" key={days[index]}><span className="chart-value">{value}</span><div className="chart-track"><span style={{ height: `${value / max * 100}%` }} /></div><span className="chart-day">{days[index]}</span></div>)}</div></section>
    </>
  );
}
