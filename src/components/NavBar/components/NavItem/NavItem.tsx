"use client";

import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Link from "next/link";

import Icon from "@/components/Icon";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import styles from "./NavItem.module.scss";

interface IProps {
  icon: string;
  label: string;
  href: string;

  subRoutes?: Array<{
    href: string;
    label: string;
  }>;
}

const NavItem: React.FC<IProps> = ({ icon, label, href, subRoutes }) => {
    const pathname = usePathname();
  const [opened, setOpened] = useState(subRoutes?.some((el) => pathname.startsWith(el.href)) || false);

  useEffect(() => {
    if (subRoutes && subRoutes.some((el) => pathname.startsWith(el.href))) {
      setOpened(true);
    }
  }, [pathname, subRoutes]);

  if (subRoutes) {
    return (
      <div
        className={classnames(styles.navItem)}
      >
        <Icon src={icon} className="w-6 h-6" />

        <span className="block flex-1">{label}</span>

        <div onClick={() => setOpened((prev) => !prev)}>
          <Icon
            src="/images/icon-drop.svg"
            className={classnames("w-6 h-6 cursor-pointer transition-all", {
              "-rotate-180": opened,
            })}
          />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {opened && (
            <motion.div
              className={styles.navItem__subroutes}
              variants={{
                visible: {
                  opacity: 1
                },
                hidden: {
                  opacity: 0
                },
                opened: {
                  height: 'auto',
                  y: 0
                },
                closed: {
                  height: 0,
                  y: -10
                }
              }}

              initial={['closed', 'hidden']}
              animate={['opened', 'visible']}
              exit={['closed', 'hidden']}
            >
              {subRoutes.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={styles.navItem__subroute}
                >
                  {item.label}

                  {pathname.startsWith(item.href) && (
                    <motion.div
                      className={styles.navItem__active}
                      layoutId="nav__active"
                    />
                  )}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link href={href}>
      <div
        className={classnames(styles.navItem)}
      >
        {pathname.startsWith(href) && (
          <motion.div
            className={styles.navItem__active}
            layoutId="nav__active"
          />
        )}

        <Icon src={icon} className="w-6 h-6" />

        <span>{label}</span>
      </div>
    </Link>
  );
};

export default NavItem;
