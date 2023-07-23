import React, {memo, useCallback, useMemo} from "react";
import {MenuItem} from "@src/ui/navigation/menu/types";
import SideLayout from "@src/ui/layout/side-layout";
import Menu from "@src/ui/navigation/menu";
import {Link, useLocation} from "react-router-dom";
import detectActive from "@src/features/navigation/detect-active";

function MainMenu() {

  const location = useLocation();
  const options = {
    menu: useMemo(() => detectActive([
      {key: 1, title: 'Главная', link: '/', active: false},
      {key: 2, title: 'Модалки', link: '/modals-example', active: false},
      {key: 3, title: 'I18n', link: '/i18n-example', active: false},
      {key: 5, title: 'Каталог', link: '/catalog', active: false},
      {key: 6, title: 'Профиль', link: '/profile', active: false},
    ], location), [location.pathname])
  };

  const linkRender = useCallback((item: MenuItem) => (
    <Link to={item.link}>{item.title}</Link>
  ), []);

  return (
    <SideLayout side="between">
      <Menu items={options.menu} linkRender={linkRender}/>
    </SideLayout>
  );
}

export default memo(MainMenu);