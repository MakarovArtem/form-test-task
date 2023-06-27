import React, { FC } from "react";
import style from "./Info.module.css";
import folderIcon from "assets/icons/folder-icon.svg";

interface InfoProps {}

const Info: FC<InfoProps> = () => {
  
  return (
    <div className={style.info}>
      <div className={style.avatarContainer}>
        <p className={style.avatar}>АМ</p>
      </div>
      <div className={style.nameContainer}>
        <p className={style.name}>Артём Макаров</p>
      </div>
      <div className={style.contactsContainer}>
        <ul className={style.contacts}>
          <li className={style.contactContainer}>
            <div className={style.linkIconContainer}>
              <img src={folderIcon} alt="link-icon" />
            </div>

            <div className={style.linkContainer}>
              <a className={style.link} href="https://t.me/EineApfelsine" target="_blank">Telegram</a>
            </div>
          </li>
          <li className={style.contactContainer}>
            <div className={style.linkIconContainer}>
              <img src={folderIcon} alt="link-icon" />
            </div>
            
            <div className={style.linkContainer}>
              <a className={style.link} href="https://github.com/MakarovArtem/form-test-task" target="_blank">GitHub</a>
            </div>
          </li>
          <li className={style.contactContainer}>
            <div className={style.linkIconContainer}>
              <img src={folderIcon} alt="link-icon" />
            </div>
            
            <div className={style.linkContainer}>
              <a className={style.link} href="https://clck.ru/34dfu5" target="_blank">Resume</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Info;