import { ReactNode } from 'react';

const Layout = ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => {
    return <div className="m-auto">{children}</div>;
};

export default Layout;
