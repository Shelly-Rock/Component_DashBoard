export default function DonutChart() {
  const CENTER = 120;
  const INNER_RADIUS = 60;

  const data = [
    { label PV, value 200, color #AC22FC },
    { label AV, value 40,  color #17426D },
    { label GV, value 100, color #364F9F },
    { label REF, value150, color #06C9FB },
  ];

  const total = data.reduce((s, i) = s + i.value, 0);

  const MIN_STROKE = 8;
  const MAX_STROKE = 30;
  const maxValue = Math.max(...data.map(i = i.value));

  let angleOffset = 0;

  return (
    svg width=320 height=320 viewBox=0 0 240 240
      
      { DONUT }
      g transform={`rotate(-90 ${CENTER} ${CENTER})`}
        {data.map((item, i) = {
          const strokeWidth =
            (item.value  maxValue)  (MAX_STROKE - MIN_STROKE) + MIN_STROKE;

          const r = INNER_RADIUS + strokeWidth  2;
          const C = 2  Math.PI  r;

          const angle = item.value  total;
          const dashLength = angle  C;
          const dash = `${dashLength} ${C}`;

          const dashOffset = -angleOffset  C;
          angleOffset += angle;

          return (
            circle
              key={i}
              cx={CENTER}
              cy={CENTER}
              r={r}
              fill=none
              stroke={item.color}
              strokeWidth={strokeWidth}
              strokeDasharray={dash}
              strokeDashoffset={dashOffset}
              strokeLinecap=butt
            
          );
        })}
      g
      text
        x={CENTER}
        y={CENTER - 6}
        textAnchor=middle
        dominantBaseline=middle
        fontSize=30
        fontWeight=700
        fill=#EEE3F1
      
        {total.toLocaleString()}
      text

      text
        x={CENTER}
        y={CENTER + 14}
        textAnchor=middle
        dominantBaseline=middle
        fontSize=12
        fill=#EAFFFF
      
        TOTAL BALANCE
      text
    svg
  );
}
