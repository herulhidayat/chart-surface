import ChartsSurface from '@app/components/Charts/ChartsSurface';
import React from 'react';

export default function PlaygroundPage() {
    return(
        <>
            <div className='container mx-auto'>
                <div style={{ height: '30rem'}}>
                    <ChartsSurface />
                </div>
            </div>
        </>
    )
}