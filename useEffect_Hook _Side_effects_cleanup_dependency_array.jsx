// Q2: useEffect Hook - Side effects, cleanup, dependency array
import { useState, useEffect } from "react";

export default function Q2_useEffect() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [log, setLog] = useState([]);

  useEffect(() => {
    setLog(prev => [...prev, `⚡ Effect ran — running: ${running}`]);

    if (!running) return;

    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      setLog(prev => [...prev, `🧹 Cleanup — interval cleared`]);
    };
  }, [running]);

  const reset = () => { setSeconds(0); setRunning(false); setLog([]); };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <span style={styles.badge}>Q</span>
        <h2 style={styles.title}>useEffect Hook</h2>
        <p style={styles.subtitle}>Runs after render. Cleanup function prevents memory leaks.</p>
        <div style={styles.timer}>{String(Math.floor(seconds / 60)).padStart(2,"0")}:{String(seconds % 60).padStart(2,"0")}</div>
        <div style={styles.btnRow}>
          <button style={running ? styles.btnDanger : styles.btnPrimary} onClick={() => setRunning(r => !r)}>
            {running ? "⏸ Pause" : "▶ Start"}
          </button>
          <button style={styles.btnGhost} onClick={reset}>↺ Reset</button>
        </div>
        <div style={styles.logBox}>
          <p style={styles.logLabel}>Effect Log:</p>
          {log.slice(-5).map((l, i) => <div key={i} style={styles.logLine}>{l}</div>)}
          {log.length === 0 && <div style={styles.logLine}>Press Start to see effects fire...</div>}
        </div>
        <pre style={styles.code}>{`useEffect(() => {
  const id = setInterval(cb, 1000);
  return () => clearInterval(id); // cleanup
}, [running]); // dependency array`}</pre>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: "100vh", background: "#0f1a0f", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fira Code', monospace" },
  card: { background: "#141f14", border: "1px solid #1e3a1e", borderRadius: 16, padding: "40px 48px", maxWidth: 540, width: "100%", textAlign: "center" },
  badge: { background: "#00c853", color: "#000", padding: "4px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 1 },
  title: { color: "#e0ffe0", fontSize: 26, margin: "16px 0 8px" },
  subtitle: { color: "#6a8a6a", fontSize: 14, lineHeight: 1.7, marginBottom: 24 },
  timer: { fontSize: 72, fontWeight: 800, color: "#00c853", lineHeight: 1, margin: "16px 0 24px", letterSpacing: 4 },
  btnRow: { display: "flex", gap: 12, justifyContent: "center", marginBottom: 20 },
  btnPrimary: { background: "#00c853", color: "#000", border: "none", padding: "10px 24px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontWeight: 700 },
  btnDanger: { background: "#ff4757", color: "#fff", border: "none", padding: "10px 24px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontWeight: 700 },
  btnGhost: { background: "transparent", color: "#6a8a6a", border: "1px solid #1e3a1e", padding: "10px 20px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit" },
  logBox: { background: "#0f1a0f", border: "1px solid #1e3a1e", borderRadius: 8, padding: 14, marginBottom: 20, minHeight: 80, textAlign: "left" },
  logLabel: { color: "#6a8a6a", fontSize: 11, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 1 },
  logLine: { color: "#a8d5a8", fontSize: 12, marginBottom: 3 },
  code: { background: "#0f1a0f", color: "#a8ff78", fontSize: 12, padding: 14, borderRadius: 8, textAlign: "left", margin: 0 },
};
