import "./SakuraBreeze.css";

function SakuraBreeze() {
  const petals = Array.from({ length: 18 });

  return (
    <div className="sakura-breeze" aria-hidden="true">
      {petals.map((_, index) => (
        <span
          key={index}
          className="sakura-petal"
          style={{
            "--i": index,
            "--delay": `${index * 1.7}s`,
            "--duration": `${11 + (index % 5)}s`,
            "--top": `${8 + ((index * 17) % 84)}%`,
            "--size": `${8 + (index % 5) * 2}px`,
            "--rotation": `${index * 37}deg`,
          }}
        />
      ))}
    </div>
  );
}

export default SakuraBreeze;