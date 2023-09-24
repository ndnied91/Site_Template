import React from 'react';

import { PageLinks } from './PageLinks';

import { socialLinks } from '../data';

export const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />

        <ul className="footer-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="footer-icon">
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>{' '}
    </>
  );
};
