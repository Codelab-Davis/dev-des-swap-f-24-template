'use client';

import Lottie from 'lottie-react';
import codeAnimation from '@/assets/code.json';

export default function Home() {
    return (
        <div className="m-auto flex flex-col items-center px-2 sm:px-[10%] md:px-[15%] lg:px-[25%]">
            <h1 className="text-4xl font-bold mx-auto">Hello, designers!</h1>
            <Lottie
                className="w-full sm:w-96"
                animationData={codeAnimation}
                loop
            />

            <span className="text-lg text-gray-500 mx-auto text-center">
                Welcome to the Fall 2024 Codelab Developer Designer Swap! Are
                you ready to see why developers bang their heads against the
                wall? You can navigate to{' '}
                <pre className="inline bg-gray-400 px-1 py-0.5 rounded-md text-red-500 text-base">
                    /login
                </pre>{' '}
                to get started. To view your database entries, navigate to{' '}
                <pre className="inline bg-gray-400 px-1 py-0.5 rounded-md text-red-500 text-base">
                    /database
                </pre>
                .
            </span>
        </div>
    );
}
