import React from "react";
import { Link } from "react-router-dom";
const Breadcrumbs = ({ crumbs }) => {
  // Don't render a single breadcrumb.
  if (crumbs.length <= 1) {
    return null;
  }
const list = crumbs.map(({ name, path }, key) =>
key + 1 === crumbs.length ? (
  <span key={key}>
    {name}
  </span>
) : (
  <Link key={key} to={path}>
    {name}
  </Link>
)
).reduce((prev, curr) => {
    return prev.key==="0" ? [curr] : [prev, ' >> ', curr]
});
  return (
    <div>
      {/* Link back to any previous steps of the breadcrumb. */}
      {list}
    </div>
  );
};
export default Breadcrumbs;