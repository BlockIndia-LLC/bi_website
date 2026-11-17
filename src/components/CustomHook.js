import { useEffect, useState } from "react";

const useDocTitle = title => {
  const [doctitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = doctitle;
  }, [doctitle]);

  return [doctitle, setDocTitle];
};

// Sets the tab title for a page and restores the previous one on leave.
// App.js sets the site-wide default title in its own effect, which runs after
// a page's effects on first load, so this defers by a tick to take precedence.
const usePageTitle = title => {
  useEffect(() => {
    let previous = null;
    const id = setTimeout(() => {
      previous = document.title;
      document.title = title;
    }, 0);
    return () => {
      clearTimeout(id);
      if (previous !== null) document.title = previous;
    };
  }, [title]);
};

export {useDocTitle, usePageTitle};