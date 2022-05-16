import useTranslation from "next-translate/useTranslation";
import LanguageIcon from '@mui/icons-material/Language';
import { IconButton, Menu, MenuItem } from "@mui/material";
import { ReactElement, useState } from "react";
import Link from "next/link";

import i18nConfig from '../../i18n';

export default function LanguageChangeButton() {

  const { t, lang } = useTranslation();

  const [menuPositionElement, setMenuPositionElement] = useState<null | HTMLElement>(null);


  const openLanguageSelect = (event: React.MouseEvent<HTMLElement>) => {
    setMenuPositionElement(event.currentTarget);
  };

  const closeLanguageSelect = () => {
    setMenuPositionElement(null);
  };

  return (
    <>
      <IconButton onClick={openLanguageSelect}>
        <LanguageIcon />
      </IconButton>


      <Menu
        anchorEl={menuPositionElement}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(menuPositionElement)}
        onClose={closeLanguageSelect}
        onClick={closeLanguageSelect}
      >
        <LanguageMenuItems />
      </Menu>
    </>
  )
}

function LanguageMenuItems() {

  const languages = i18nConfig.locales.filter((item) => item !== '__default')

  const menuItems: Array<ReactElement> = [];

  return (
    <>
      {languages.map((lang) => 
        <Link href="#" locale={lang} key={lang}>
          <MenuItem>{lang}</MenuItem>
        </Link>
      )}
    </>
  );
}