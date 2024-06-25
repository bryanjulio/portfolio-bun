'use client';

import React, { useState } from 'react';

import { useTabs } from '@/hooks/use-tabs';
import { Framer } from '@/lib/framer';

import Activity from './activity';
import Domains from './domains';
import Integrations from './integrations';
import Overview from './overview';

const Tabs = () => {
  const [hookProps] = useState({
    tabs: [
      {
        label: 'Sobre mim',
        children: <Overview />,
        id: 'Overview',
      },
      {
        label: 'Curriculo',
        children: <Integrations />,
        id: 'Integrations',
      },
      {
        label: 'Portfolio',
        children: <Activity />,
        id: 'Activity',
      },
      {
        label: 'Posts',
        children: <Domains />,
        id: 'Domains',
      },
      {
        label: 'Contato',
        children: <Domains />,
        id: 'Domains',
      },
    ],
    initialTabId: 'Matches',
  });
  const framer = useTabs(hookProps);

  return (
    <div className="w-full flex flex-col ">
      <div className=" w-full items-start flex text-md ">
        <Framer.Tabs {...framer.tabProps} />
      </div>

      {/* <div className="pt-10">{framer.selectedTab.children}</div> */}
    </div>
  );
};

export default Tabs;
