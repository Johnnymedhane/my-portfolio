import { useState } from 'react';

import { Qualification } from './Qualification';
import List from '../../ui/List';

export function Benefits({values}) {
  const [showText, setShowText] = useState(null);

  return <List
    title="Why I'm a Great Fit"
    item="benefits"
    data={values}
    renderItem={(value, index) => (
      <Qualification
        key={index}
        index={index}
        value={value}
        showText={showText}
        setShowText={setShowText} />
    )}
  ></List>
}


