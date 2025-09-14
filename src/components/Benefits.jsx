import { useState } from 'react';
import { values, Value } from './AboutMe';

export function Benefits() {
  const [showText, setShowText] = useState(null);

  return (
    <div className="benefits">
      <h2 className="benefits-title">Why I'm a Great Fit</h2>
      <ul className="benefits-list">
        {values.map((value, index) => (
          <Value
            key={index}
            index={index}
            value={value}
            showText={showText}
            setShowText={setShowText} />
        ))}
      </ul>
    </div>
  );
}
