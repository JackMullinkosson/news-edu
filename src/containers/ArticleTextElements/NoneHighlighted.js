/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import parse from 'html-react-parser';

export function NoneHighlighted({ htmlToParse, handleWordClick }) {
  return parse(htmlToParse, {
    replace: (node) => {
      if (node?.attribs?.class) {
        const classes = node.attribs.class.split(' ');
        if (classes.some((el) => el.includes('article-word'))) {
          return (
            <span
              className={node.attribs.class}
              onClick={(e) => handleWordClick(e)}
            >
              {node.children.map((child) => child.data).join('')}
            </span>
          );
        }
      }
      return node;
    },
  });
}
