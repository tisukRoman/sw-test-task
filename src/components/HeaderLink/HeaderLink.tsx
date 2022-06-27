import { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderLink.module.css';

type HeaderLinkProps = {
  children: ReactNode;
  name: string;
};

class HeaderLink extends Component<HeaderLinkProps> {
  render() {
    const { children, name } = this.props;

    return (
      <NavLink
        to={`/category/${name}`}
        activeClassName={styles.active}
        className={styles.link}
      >
        <div>{children}</div>
      </NavLink>
    );
  }
}

export { HeaderLink };
