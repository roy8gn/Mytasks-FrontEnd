import React from 'react';

import { BsPeople } from 'react-icons/bs';
import { BiCalendarEvent } from 'react-icons/bi';
import { BsListTask } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { TiInfoOutline } from 'react-icons/ti';


export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <TiInfoOutline />,
    cName: 'nav-text'
  },
  {
    title: 'To Do',
    path: '/toDos',
    icon: <BsListTask />,
    cName: 'nav-text'
  },
  {
    title: 'Meetings',
    path: '/meetings',
    icon: <BsPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Events',
    path: '/events',
    icon: <BiCalendarEvent />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <AiOutlineFundProjectionScreen />,
    cName: 'nav-text'
  },
  {
    title: 'Sign Out',
    path: '/',
    icon: <RiLogoutBoxRLine />,
    cName: 'nav-text'
  }
];