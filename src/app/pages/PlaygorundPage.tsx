import ChartsSurface from '@app/components/Charts/ChartsSurface';
import { DUMMY_DATA2, DUMMY_DATA3 } from '@assets/dummy/chart-data.dummy';
import React from 'react';

export default function PlaygroundPage() {
    return(
        <>
            <div className='container mx-auto'>
                <div style={{ height: '35rem'}}>
                    <ChartsSurface data={DUMMY_DATA2} />
                </div>
                <div style={{ height: '35rem'}}>
                    <ChartsSurface data={DUMMY_DATA3} />
                </div>
            </div>
        </>
    )
}