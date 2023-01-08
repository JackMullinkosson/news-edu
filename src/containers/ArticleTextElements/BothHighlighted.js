/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import parse from 'html-react-parser';
import classNames from 'classnames';

export function BothHighlighted({ htmlToParse, handleWordClick }) {
  return parse(htmlToParse, {
    replace: (node) => {
      if (node?.attribs?.class) {
        const classes = node.attribs.class.split(' ');
        if (classes.some((el) => el.includes('advanced'))) {
          return (
            <span
              className={classNames(node.attribs.class, 'adv-highlight-on')}
              onClick={(e) => handleWordClick(e)}
            >
              {node.children.map((child) => child.data).join('')}
            </span>
          );
        }
        if (classes.some((el) => el.includes('intermediate'))) {
          return (
            <span
              className={classNames(node.attribs.class, 'inter-highlight-on')}
              onClick={(e) => handleWordClick(e)}
            >
              {node.children.map((child) => child.data).join('')}
            </span>
          );
        }
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
