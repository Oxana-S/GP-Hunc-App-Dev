import React from 'react';
import Link from 'next/link';
import Image from '@/components/Image';

interface IProps {
    className?: string;
}

const Logo: React.FC<IProps> = ({
    className
}) => {
    return (
        <Link href='/'>
            <Image
                src="/images/logo.svg"
                alt=""
                className={className}
            />
        </Link>
    )
}

export default Logo;