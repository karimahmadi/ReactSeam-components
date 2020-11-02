```angular2html
/**
 *
 * TabControl
 *
 */

import React, { useState } from 'react';
import {Tabs, Tab, TabPanel } from '@tatareact/core/Tab';
import { Grid } from '@tatareact/core/Grid';

export function TabControl() {
    const [activeTab, setActiveTab] = useState('0');
    const handleChangeTab = (e, newActiveTab) => {
        setActiveTab(newActiveTab);
    };
    return (
        <Grid>
            <Tabs value={activeTab} onChange={handleChangeTab}>
                <Tab id="0" value="0" label="tab1" />
                <Tab id="1" value="1" label="tab2" />
                <Tab id="2" value="2" label="tab3" />
            </Tabs>
            <TabPanel value={activeTab} index="0">
                <div>tab1</div>
            </TabPanel>
            <TabPanel value={activeTab} index="1">
                <div>tab2</div>
            </TabPanel>
            <TabPanel value={activeTab} index="2">
                <div>tab3</div>
            </TabPanel>
        </Grid>
    );
}

TabControl.propTypes = {};

export default TabControl;

```
