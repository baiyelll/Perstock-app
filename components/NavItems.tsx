'use client';
import { NAV_ITEMS } from '../lib/constants';
import Link from 'next/link'; // ← Changed this import
import { usePathname } from 'next/navigation';

const NavItems = () => {
    const pathname = usePathname();
    
    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {NAV_ITEMS.map((item) => (
                <li key={item.
                href}>
                    <Link 
                        href={item.href} 
                        className={`hover:text-yellow-500 transition-colors ${isActive(item.href) ? 'text-gray-100' : ''}`}
                    >
                        {item.label} {/* This will now display the text */}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavItems;
