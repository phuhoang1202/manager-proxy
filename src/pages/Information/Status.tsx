import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import StatusCard from '../../components/StatusCard';

function Status() {
    return (
        <>
            <Breadcrumb pageName="Bài viết" />
            <section className="t-section-status border rounded-lg p-5 border-borderColorGray dark:border-white">
                <section className="t-homepage-ssTwo">
                    <div className="text-center">
                        <h2 className="text-title-xl2 mb-2 font-semibold">Bài viết gần đây</h2>
                    </div>
                </section>
                <section className="t-status-one">
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <StatusCard />
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Status;
